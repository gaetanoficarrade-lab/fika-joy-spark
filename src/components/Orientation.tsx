import { Users, Building2, Briefcase } from "lucide-react";

const targetGroups = [
  {
    icon: Briefcase,
    title: "Selbstständige",
    description: "Solopreneure, die ihr Marketing systematisieren und automatisieren wollen.",
  },
  {
    icon: Building2,
    title: "Kleine & mittlere Unternehmen",
    description: "Teams, die mehrere Tools konsolidieren und Prozesse effizienter gestalten möchten.",
  },
  {
    icon: Users,
    title: "SaaS- & White-Label-Agenturen",
    description: "Anbieter, die GoHighLevel als technische Basis nutzen und Experten-Support brauchen.",
  },
];

const Orientation = () => {
  return (
    <section className="py-24 md:py-32 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-widest uppercase font-body">Orientierung</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-4 text-foreground">
              Für alle, die ihr Marketing <span className="text-primary">vereinfachen</span> wollen und nicht
              verkomplizieren
            </h2>
            <p className="text-muted-foreground font-body mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
              Hier geht es nicht um ein weiteres Tool. Hier geht es um ein durchdachtes System, das für dich arbeitet.
              Funnelmate ist die All-in-One-Plattform, die auf der Technologie von GoHighLevel basiert und ich bin dein
              zertifizierter Admin, der dieses System für dich einrichtet und optimiert.
            </p>
          </div>

          {/* Target Groups */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {targetGroups.map((group) => (
              <div
                key={group.title}
                className="bg-background border border-border p-8 rounded-lg text-center hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mx-auto mb-6">
                  <group.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{group.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{group.description}</p>
              </div>
            ))}
          </div>

          {/* Clarification Box */}
          <div className="bg-background border border-border p-8 md:p-10 rounded-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <span className="text-primary text-sm tracking-widest uppercase font-body block mb-3">Das System</span>
                <h4 className="font-display text-lg text-foreground">Funnelmate</h4>
                <p className="text-muted-foreground font-body text-sm mt-2">Deine All-in-One Marketing-Plattform</p>
              </div>
              <div>
                <span className="text-primary text-sm tracking-widest uppercase font-body block mb-3">
                  Die Technologie
                </span>
                <h4 className="font-display text-lg text-foreground">GoHighLevel</h4>
                <p className="text-muted-foreground font-body text-sm mt-2">Die technische Basis dahinter</p>
              </div>
              <div>
                <span className="text-primary text-sm tracking-widest uppercase font-body block mb-3">
                  Dein Ansprechpartner
                </span>
                <h4 className="font-display text-lg text-foreground">Zertifizierter Admin</h4>
                <p className="text-muted-foreground font-body text-sm mt-2">Technischer Architekt für dein System</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orientation;
