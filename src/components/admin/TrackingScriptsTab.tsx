import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface TrackingScript {
  id: string;
  name: string;
  code: string;
  position: string;
  active: boolean;
  created_at: string;
}

const TrackingScriptsTab = () => {
  const [scripts, setScripts] = useState<TrackingScript[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newCode, setNewCode] = useState("");
  const [newPosition, setNewPosition] = useState("head");

  const fetchScripts = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("tracking_scripts")
      .select("*")
      .order("created_at", { ascending: true });
    setScripts(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchScripts();
  }, []);

  const handleAdd = async () => {
    if (!newName || !newCode) {
      toast({ title: "Fehler", description: "Name und Code sind Pflicht.", variant: "destructive" });
      return;
    }
    const { error } = await supabase.from("tracking_scripts").insert({
      name: newName,
      code: newCode,
      position: newPosition,
    });
    if (error) {
      toast({ title: "Fehler", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Script hinzugefügt" });
      setNewName("");
      setNewCode("");
      setNewPosition("head");
      setShowForm(false);
      fetchScripts();
    }
  };

  const toggleActive = async (script: TrackingScript) => {
    const { error } = await supabase
      .from("tracking_scripts")
      .update({ active: !script.active })
      .eq("id", script.id);
    if (error) {
      toast({ title: "Fehler", description: error.message, variant: "destructive" });
    } else {
      fetchScripts();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Script wirklich löschen?")) return;
    const { error } = await supabase.from("tracking_scripts").delete().eq("id", id);
    if (error) {
      toast({ title: "Fehler", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Gelöscht" });
      fetchScripts();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-xl font-bold">Tracking Scripts</h2>
        <p className="text-sm text-muted-foreground font-body">
          Füge eigene Scripts (wie Google Analytics, Meta Pixel) in den Head oder Body der Seite ein.
        </p>
      </div>

      {/* Add form */}
      {showForm ? (
        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-xs">Name des Scripts</Label>
                <Input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="z.B. Meta Pixel"
                />
              </div>
              <div>
                <Label className="text-xs">Position</Label>
                <select
                  value={newPosition}
                  onChange={(e) => setNewPosition(e.target.value)}
                  className="w-full bg-card border border-border rounded-md px-3 py-2 text-sm font-body"
                >
                  <option value="head">&lt;head&gt; (Empfohlen für Analytics)</option>
                  <option value="body">&lt;body&gt;</option>
                </select>
              </div>
            </div>
            <div>
              <Label className="text-xs">Code Snippet</Label>
              <Textarea
                value={newCode}
                onChange={(e) => setNewCode(e.target.value)}
                placeholder="<!-- Dein Code hier -->"
                rows={5}
                className="font-mono text-xs"
              />
            </div>
            <div className="flex gap-3">
              <Button onClick={handleAdd} className="gap-2">
                <Plus size={16} /> Speichern
              </Button>
              <Button variant="outline" onClick={() => setShowForm(false)}>Abbrechen</Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Button onClick={() => setShowForm(true)} className="gap-2" variant="outline">
          <Plus size={16} /> Script hinzufügen
        </Button>
      )}

      {loading ? (
        <div className="flex justify-center py-10">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : scripts.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground font-body">
            Keine Tracking Scripts vorhanden.
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {scripts.map((script) => (
            <Card key={script.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="font-body font-semibold text-sm">{script.name}</span>
                    <span className="ml-2 text-xs text-muted-foreground font-body bg-muted px-2 py-0.5 rounded">
                      {script.position}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground font-body">Aktiv</span>
                      <Switch
                        checked={script.active}
                        onCheckedChange={() => toggleActive(script)}
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(script.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </div>
                <pre className="bg-muted/50 rounded p-3 text-xs font-mono overflow-x-auto max-h-24 text-muted-foreground">
                  {script.code}
                </pre>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrackingScriptsTab;
