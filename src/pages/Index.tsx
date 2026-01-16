import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustLogos from "@/components/TrustLogos";
import Services from "@/components/Services";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* 1. Hero - Erste Aufmerksamkeit & Hauptversprechen */}
        <Hero />
        
        {/* 2. Trust Logos - Sofortige Vertrauenssignale */}
        <TrustLogos />
        
        {/* 3. Services - Was ich anbiete (Problem → Lösung) */}
        <Services />
        
        {/* 4. Über mich - Expertise & Erfahrung */}
        <About />
        
        {/* 5. FAQ - Einwände behandeln */}
        <FAQ />
        
        {/* 6. Kontakt - Call to Action */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
