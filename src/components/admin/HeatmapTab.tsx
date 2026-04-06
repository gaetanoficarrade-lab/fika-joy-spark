import { useState, useEffect, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent } from "@/components/ui/card";

interface ClickEvent {
  id: string;
  page_path: string;
  x: number;
  y: number;
  viewport_width: number;
  viewport_height: number;
  page_height: number;
  created_at: string;
}

const HeatmapTab = () => {
  const [clicks, setClicks] = useState<ClickEvent[]>([]);
  const [pages, setPages] = useState<string[]>([]);
  const [selectedPage, setSelectedPage] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("click_events")
      .select("page_path")
      .then(({ data }) => {
        if (data) {
          const uniquePages = [...new Set(data.map((d) => d.page_path))].sort();
          setPages(uniquePages);
          if (uniquePages.length > 0 && !selectedPage) {
            setSelectedPage(uniquePages[0]);
          }
        }
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!selectedPage) return;
    setLoading(true);
    supabase
      .from("click_events")
      .select("*")
      .eq("page_path", selectedPage)
      .order("created_at", { ascending: false })
      .limit(1000)
      .then(({ data }) => {
        setClicks(data || []);
        setLoading(false);
      });
  }, [selectedPage]);

  const heatmapDots = useMemo(() => {
    return clicks.map((c) => ({
      x: c.x * 100, // percentage
      y: c.y * 100, // percentage
    }));
  }, [clicks]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-xl font-bold">Klick-Heatmap</h2>
        <p className="text-sm text-muted-foreground font-body">
          Visualisiere, wo deine Besucher auf der Seite klicken. Wähle eine Seite aus, um die Heatmap zu laden.
        </p>
      </div>

      <select
        value={selectedPage}
        onChange={(e) => setSelectedPage(e.target.value)}
        className="bg-card border border-border rounded-md px-3 py-1.5 text-sm font-body"
      >
        {pages.map((p) => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : clicks.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground font-body">
            0 Klicks erfasst
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground font-body mb-4">
              {clicks.length} Klicks erfasst
            </p>
            <div
              className="relative w-full bg-muted/30 rounded-lg overflow-hidden"
              style={{ paddingBottom: "150%" /* tall page ratio */ }}
            >
              {heatmapDots.map((dot, i) => (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    left: `${dot.x}%`,
                    top: `${dot.y}%`,
                    width: "20px",
                    height: "20px",
                    transform: "translate(-50%, -50%)",
                    background: "radial-gradient(circle, hsla(0, 100%, 50%, 0.6) 0%, hsla(40, 100%, 50%, 0.3) 50%, transparent 100%)",
                    filter: "blur(4px)",
                  }}
                />
              ))}
              {/* Grid overlay */}
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: "linear-gradient(hsl(212 15% 86% / 0.2) 1px, transparent 1px), linear-gradient(90deg, hsl(212 15% 86% / 0.2) 1px, transparent 1px)",
                backgroundSize: "10% 10%",
              }} />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default HeatmapTab;
