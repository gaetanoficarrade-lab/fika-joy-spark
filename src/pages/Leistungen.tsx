import { motion } from "framer-motion";
import { CheckCircle, Zap, Users, Settings, ArrowRight, Phone, Clock, Mail, Video, FileText, Headphones, TrendingUp, Repeat } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Settings,
    title: "Done-For-You Setup",
    description: "Ich richte dein HighLevel komplett ein. Funnels, Automations, CRM – alles perfekt konfiguriert und startklar.",
    features: ["Komplette GHL Einrichtung", "Funnels & Automationen", "CRM-Setup", "E-Mail-Sequenzen", "Integrationen einrichten", "Schulung zur Nutzung", "30 Tage Support"],
    cta: "Jetzt anfragen",
    ctaLink: "https://klick.gaetanoficarra.de/widget/booking/5s0iHWQ0crY7ogs9gviU",
    popular: true,
    price: "Auf Anfrage"
  },
  {
    icon: Users,
    title: "Done-With-You Live",
    description: "Wir arbeiten gemeinsam live an deinem System. Du lernst dabei und bekommst gleichzeitig alles eingerichtet.",
    features: ["Live Zusammenarbeit", "Du lernst während wir bauen", "Alles wird eingerichtet", "Fragen werden direkt beantwortet", "Mehrere Sessions möglich", "Aufnahmen aller Sessions", "60 Tage Support"],
    cta: "Termin vereinbaren",
    ctaLink: "https://klick.gaetanoficarra.de/widget/booking/5s0iHWQ0crY7ogs9gviU",
    popular: false,
    price: "Auf Anfrage"
  },
  {
    icon: Headphones,
    title: "Support-Call",
    description: "Steckst du fest? Buche einen Support-Call und ich löse deine Probleme schnell und unkompliziert.",
    features: ["1:1 Video-Call", "Bildschirmfreigabe", "Problemlösung in Echtzeit", "Aufnahme des Calls", "Nachbereitung per E-Mail"],
    cta: "Call buchen",
    ctaLink: "https://ghl.gaetanoficarra.de/support_call",
    popular: false,
    price: "197€ pro Stunde"
  },
];

const additionalServices = [
  {
    icon: TrendingUp,
    title: "Strategieberatung",
    description: "Gemeinsam entwickeln wir eine Strategie, wie du das Maximum aus HighLevel herausholst."
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Automatisiere deine Prozesse und spare wertvolle Zeit. Ich erstelle Workflows, die für dich arbeiten."
  },
  {
    icon: Repeat,
    title: "Migration & Umzug",
    description: "Ich übertrage deine bestehenden Tools, Funnels oder Kontakte sauber nach HighLevel. Reibungslos, ohne Datenchaos."
  },
];

const Leistungen = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Meine <span className="text-primary">Leistungen</span>
              </h1>
              <p className="text-muted-foreground text-lg font-body">
                Von der kompletten Einrichtung bis zum schnellen Support-Call – ich biete dir genau die Unterstützung, die du brauchst.
              </p>
            </motion.div>

            {/* Main Services */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-card border ${service.popular ? 'border-primary' : 'border-border'} p-8 rounded-lg`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs uppercase tracking-widest font-body rounded-full">
                      Beliebt
                    </div>
                  )}
                  
                  <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="font-display text-xl text-foreground mb-2">{service.title}</h3>
                  <p className="text-primary font-display text-2xl mb-4">{service.price}</p>
                  <p className="text-muted-foreground font-body text-sm mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm font-body text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={service.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-3 text-sm uppercase tracking-widest font-body transition-all duration-300 ${
                      service.popular 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : 'border border-primary text-primary hover:bg-primary/10'
                    }`}
                  >
                    {service.cta}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Additional Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl text-foreground mb-4">
                Weitere <span className="text-primary">Services</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-card border border-border p-6 rounded-lg hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground font-body text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card border-t border-border">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Bereit durchzustarten?
              </h2>
              <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
                Lass uns in einem kostenlosen Erstgespräch besprechen, wie ich dich bei deinem Projekt unterstützen kann.
              </p>
              <a
                href="https://klick.gaetanoficarra.de/widget/booking/5s0iHWQ0crY7ogs9gviU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-body hover:bg-primary/90 transition-all duration-300"
              >
                Kostenloses Erstgespräch <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Leistungen;
