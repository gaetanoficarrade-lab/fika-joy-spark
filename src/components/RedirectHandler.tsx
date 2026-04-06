import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

const RedirectHandler = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) {
      navigate("/", { replace: true });
      return;
    }

    supabase
      .from("redirects")
      .select("target_url")
      .eq("slug", slug)
      .single()
      .then(({ data, error }) => {
        if (error || !data) {
          setNotFound(true);
          return;
        }
        // Increment click count (fire and forget)
        supabase.rpc("increment_redirect_clicks", { redirect_slug: slug }).then(() => {});
        // Redirect
        window.location.href = data.target_url;
      });
  }, [slug, navigate]);

  if (notFound) {
    navigate("/404", { replace: true });
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-muted-foreground font-body">Weiterleitung...</p>
      </div>
    </div>
  );
};

export default RedirectHandler;
