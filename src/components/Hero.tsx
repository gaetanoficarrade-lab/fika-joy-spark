import portrait from "@/assets/gaetano-portrait.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(190_90%_50%/0.08)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-start text-left order-2 lg:order-1">
            {/* Certified Expert Badge Text */}
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm tracking-widest uppercase font-body">
                ✓ Zertifizierter GoHighLevel Admin
              </span>
            </div>

            {/* Headline - Vision & Ergebnis */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-[1.15]">
              Mehr Zeit für dein Wachstum und <span className="text-gradient-primary">volle Kontrolle</span> durch ein
              zentrales, vollautomatisiertes Business-System!
            </h1>

            {/* Subheadline */}
            <p className="font-body text-muted-foreground text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Gewinne täglich neue Leads und Kunden mit einer All-in-One-Lösung, die dein Marketing-Chaos beendet.
              Verabschiede dich von manueller Listenpflege und fehlerhaften Tool-Schnittstellen. Ich richte dir mit
              Funnelmate (powered by HighLevel) ein Marketing-Setup ein, das reibungslos läuft und dein Online-Business
              planbar skaliert.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-start sm:items-start">
                <a
                  href="https://lp.gaetanoficarra.de/erstgesraech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-6 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm tracking-widest uppercase font-body text-primary-foreground overflow-hidden rounded-sm transition-all duration-300 hover:scale-105 bg-primary hover:bg-primary/90"
                  style={{
                    boxShadow: "0 0 30px hsl(var(--primary) / 0.3)",
                  }}
                >
                  <span className="relative z-10">Jetzt Erstgespräch vereinbaren</span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
                <span className="text-muted-foreground text-xs sm:text-sm font-body mt-3 max-w-[280px] sm:max-w-none">
                  Kurz sprechen, Setup verstehen, nächsten Schritt klären
                </span>
              </div>
            </div>
          </div>

          {/* Portrait Image with Badge Overlay */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-platinum/10 rounded-full blur-3xl scale-110" />
              <img
                src={portrait}
                alt="Gaetano Ficarra - Zertifizierter GoHighLevel Admin"
                className="relative w-80 h-80 md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] object-cover object-top rounded-full border-4 border-primary/30 shadow-2xl"
                loading="eager"
              />

              {/* GoHighLevel Badge - 5 o'clock position, sitting on circle edge */}
              <a
                href="https://directory.gohighlevel.com/germany/bielefeld/certified-admins/gaetano-ficarra?from=badge"
                target="_blank"
                rel="noopener noreferrer"
                title="Find me on HighLevel Directory"
                className="absolute -bottom-[8%] right-[8%] md:-bottom-[6%] md:right-[10%] hover:scale-110 transition-transform duration-300"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/25 rounded-full blur-xl scale-110" />
                  <img
                    src="https://directory.gohighlevel.com/images/BD_Certified_Admin_Main_Badge.png"
                    alt="GoHighLevel Certified Admin Badge"
                    className="relative w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 drop-shadow-2xl"
                    loading="eager"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;