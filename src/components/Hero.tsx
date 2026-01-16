import { motion } from "framer-motion";
import portrait from "@/assets/gaetano-portrait.jpg";
import badge from "@/assets/ghl-badge.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_74%_49%/0.05)_0%,_transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.a
              href="https://directory.gohighlevel.com/germany/bielefeld/certified-admins/gaetano-ficarra?from=badge"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <img 
                src={badge} 
                alt="GoHighLevel Certified Admin Badge" 
                className="h-16 md:h-20 w-auto hover:scale-105 transition-transform duration-300"
              />
            </motion.a>
            
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-4"
            >
              <span className="text-silver-light">Gaetano</span>{" "}
              <span className="text-primary">Ficarra</span>
            </motion.h1>
            
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground mb-6 leading-tight"
            >
              Skaliere dein Business mit smarten{" "}
              <span className="text-primary">HighLevel-Funnel</span> und{" "}
              <span className="text-primary">vollautomatisierten Prozessen</span>
            </motion.h2>
            
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-body text-muted-foreground text-base md:text-lg mb-8 max-w-xl"
            >
              Ich begleite dich beim Umzug und Aufbau deines Marketing-Setups mit dem All-in-One-System von HighLevel. Damit dein Marketing automatisch Leads generiert und reibungslos läuft.
            </motion.p>
            
            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://klick.gaetanoficarra.de/widget/booking/5s0iHWQ0crY7ogs9gviU"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-body hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                Kostenloses Erstgespräch
              </a>
              <a
                href="/leistungen"
                className="border-gradient-gold px-8 py-4 text-sm tracking-widest uppercase font-body text-foreground hover:bg-primary/10 transition-colors duration-300"
              >
                Leistungen entdecken
              </a>
            </motion.div>
          </motion.div>
          
          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-platinum/10 rounded-full blur-3xl scale-110" />
              <img 
                src={portrait} 
                alt="Gaetano Ficarra" 
                className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] object-cover object-top rounded-full border-4 border-primary/30 shadow-2xl animate-glow-pulse"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
