import portrait from "@/assets/gaetano-portrait.jpg";

const Guide = () => {
  return (
    <section id="guide" className="py-24 md:py-32 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-widest uppercase font-body">Dein Ansprechpartner</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-4 text-foreground">
              Technik, die läuft <span className="text-primary">weil jemand mitdenkt</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl scale-105" />
                <img
                  src={portrait}
                  alt="Gaetano Ficarra - Zertifizierter GoHighLevel Admin"
                  className="relative w-full max-w-md rounded-2xl border border-border shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-muted-foreground text-lg font-body leading-relaxed mb-6">
                Ich bin Gaetano Ficarra, zertifizierter GoHighLevel Admin. Meine Rolle ist nicht, dir ein Tool zu
                verkaufen, sondern als technischer Architekt dein Marketing-System so aufzubauen, dass es zuverlässig
                funktioniert.
              </p>

              <p className="text-muted-foreground text-lg font-body leading-relaxed mb-6">
                Mein Fokus liegt auf Backend, Logik und Workflows. Ich denke in Prozessen, nicht in Features. Das
                bedeutet: Ich verstehe, wie Automatisierungen zusammenspielen müssen, damit am Ende ein System steht,
                das für dich arbeitet.
              </p>

              <p className="text-muted-foreground text-lg font-body leading-relaxed mb-8">
                Mit Erfahrung in Migration, komplexer Automatisierung und DSGVO-konformer Einrichtung helfe ich dir, das
                Software-Chaos hinter dir zu lassen.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
                {[
                  { label: "Zertifizierter", value: "GoHighLevel Admin" },
                  { label: "Fokus", value: "Backend & Workflows" },
                  { label: "Erfahrung", value: "5+ Jahre Online Business" },
                  { label: "Spezialgebiet", value: "Migration & Automatisierung" },
                ].map((stat, index) => (
                  <div key={index} className="text-left">
                    <div className="text-muted-foreground text-xs tracking-wide uppercase font-body mb-1">
                      {stat.label}
                    </div>
                    <div className="font-display text-lg text-foreground">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
