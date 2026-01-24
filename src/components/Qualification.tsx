import { Check, X } from "lucide-react";

const suitableFor = [
  "Selbstständige, die ihr Marketing endlich systematisieren wollen",
  "Kleine und mittlere Unternehmen mit Wachstumsambitionen",
  "Coaches, Berater und Dienstleister, die Leads automatisiert gewinnen möchten",
  "SaaS- und White-Label-Agenturen, die GoHighLevel als Basis nutzen",
  "Unternehmer, die bereit sind, in ein langfristiges System zu investieren"
];

const notSuitableFor = [
  "Wer nur ein einzelnes Tool sucht, ohne systemischen Ansatz",
  "Wer nicht bereit ist, Prozesse zu überdenken",
  "Wer keine Zeit für eine saubere Einrichtung investieren möchte"
];

const Qualification = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-widest uppercase font-body">
              Zielgruppe
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-4 text-foreground">
              Für wen diese Lösung <span className="text-primary">sinnvoll ist</span>
            </h2>
            <p className="text-muted-foreground font-body mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
              Nicht jede Lösung passt zu jedem. Hier ist eine klare Orientierung.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Suitable For */}
            <div className="bg-card border border-primary/20 p-8 md:p-10 rounded-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground">Geeignet für</h3>
              </div>
              <ul className="space-y-4">
                {suitableFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground font-body">
                    <span className="text-primary mt-1 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Suitable For */}
            <div className="bg-card border border-border p-8 md:p-10 rounded-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="font-display text-xl text-foreground">Nicht geeignet für</h3>
              </div>
              <ul className="space-y-4">
                {notSuitableFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground font-body">
                    <span className="text-muted-foreground mt-1 flex-shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;