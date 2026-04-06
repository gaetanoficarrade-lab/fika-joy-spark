import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Trash2, Plus } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Redirect {
  id: string;
  slug: string;
  target_url: string;
  clicks: number;
  created_at: string;
}

const RedirectsTab = () => {
  const [redirects, setRedirects] = useState<Redirect[]>([]);
  const [loading, setLoading] = useState(true);
  const [newSlug, setNewSlug] = useState("");
  const [newTarget, setNewTarget] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editSlug, setEditSlug] = useState("");
  const [editTarget, setEditTarget] = useState("");

  const fetchRedirects = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("redirects")
      .select("*")
      .order("created_at", { ascending: false });
    setRedirects(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchRedirects();
  }, []);

  const handleAdd = async () => {
    if (!newSlug || !newTarget) {
      toast({ title: "Fehler", description: "Pfad und Ziel-URL sind Pflicht.", variant: "destructive" });
      return;
    }
    const slug = newSlug.startsWith("/") ? newSlug.slice(1) : newSlug;
    const { error } = await supabase.from("redirects").insert({ slug, target_url: newTarget });
    if (error) {
      toast({ title: "Fehler", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Hinzugefügt" });
      setNewSlug("");
      setNewTarget("");
      fetchRedirects();
    }
  };

  const handleUpdate = async (id: string) => {
    const slug = editSlug.startsWith("/") ? editSlug.slice(1) : editSlug;
    const { error } = await supabase
      .from("redirects")
      .update({ slug, target_url: editTarget })
      .eq("id", id);
    if (error) {
      toast({ title: "Fehler", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Aktualisiert" });
      setEditingId(null);
      fetchRedirects();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Weiterleitung wirklich löschen?")) return;
    const { error } = await supabase.from("redirects").delete().eq("id", id);
    if (error) {
      toast({ title: "Fehler", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Gelöscht" });
      fetchRedirects();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-xl font-bold">Weiterleitungen verwalten</h2>
        <p className="text-sm text-muted-foreground font-body">
          Erstelle kurze Links, die auf externe Seiten weiterleiten (z.B. Affiliate Links, Zoom Meetings).
        </p>
      </div>

      {/* Add new */}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr_auto] gap-3 items-end">
        <div>
          <label className="text-xs text-muted-foreground font-body">Pfad (z.B. /angebot)</label>
          <Input
            value={newSlug}
            onChange={(e) => setNewSlug(e.target.value)}
            placeholder="/pfad"
          />
        </div>
        <div>
          <label className="text-xs text-muted-foreground font-body">Ziel-URL</label>
          <Input
            value={newTarget}
            onChange={(e) => setNewTarget(e.target.value)}
            placeholder="https://..."
          />
        </div>
        <Button onClick={handleAdd} className="gap-2">
          <Plus size={16} /> Hinzufügen
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-10">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : redirects.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground font-body">
            Keine Weiterleitungen vorhanden.
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-2">
          <div className="grid grid-cols-[1fr_2fr_auto_auto] gap-3 px-4 text-xs text-muted-foreground font-body font-medium">
            <span>Pfad</span>
            <span>Ziel-URL</span>
            <span>Klicks</span>
            <span></span>
          </div>
          {redirects.map((r) => (
            <Card key={r.id}>
              <CardContent className="p-4">
                {editingId === r.id ? (
                  <div className="grid grid-cols-[1fr_2fr_auto] gap-3 items-center">
                    <Input value={editSlug} onChange={(e) => setEditSlug(e.target.value)} />
                    <Input value={editTarget} onChange={(e) => setEditTarget(e.target.value)} />
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => handleUpdate(r.id)}>Speichern</Button>
                      <Button size="sm" variant="outline" onClick={() => setEditingId(null)}>Abbrechen</Button>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-[1fr_2fr_auto_auto] gap-3 items-center">
                    <span className="text-sm font-body font-medium">/{r.slug}</span>
                    <span className="text-sm font-body text-muted-foreground truncate">{r.target_url}</span>
                    <span className="text-sm font-body text-center">{r.clicks}</span>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setEditingId(r.id);
                          setEditSlug(r.slug);
                          setEditTarget(r.target_url);
                        }}
                      >
                        <Pencil size={14} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(r.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default RedirectsTab;
