import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustLogos from "@/components/TrustLogos";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* 1. Hero - Aufmerksamkeit, Hauptnutzen, Vertrauen */}
        <Hero />
        
        {/* 2. Trust Logos - Sofortige Vertrauenssignale */}
        <TrustLogos />
        
        {/* 3. Problem/Lösung - Warum sie dich brauchen */}
        <ProblemSolution />
        
        {/* 4. Services - Was du anbietest */}
        <Services />
        
        {/* 5. Testimonials - Social Proof */}
        <Testimonials />
        
        {/* 6. Über mich - Wer dahinter steht */}
        <About />
        
        {/* 7. FAQ - Letzte Einwände behandeln */}
        <FAQ />
        
        {/* 8. Kontakt - Finaler Call to Action */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;