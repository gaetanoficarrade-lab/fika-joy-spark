import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface QuizModalContextType {
  openQuizModal: () => void;
  closeQuizModal: () => void;
  isOpen: boolean;
}

const QuizModalContext = createContext<QuizModalContextType | undefined>(undefined);

export const useQuizModal = () => {
  const context = useContext(QuizModalContext);
  if (!context) {
    throw new Error("useQuizModal must be used within a QuizModalProvider");
  }
  return context;
};

// Seitennamen für UTM-Tracking
const getPageName = (pathname: string): string => {
  const pageNames: Record<string, string> = {
    "/": "startseite",
    "/leistungen": "leistungen",
    "/links": "links",
    "/highlevel-vs-funnelmate": "highlevel-vs-funnelmate",
    "/agb": "agb",
    "/datenschutz": "datenschutz",
    "/impressum": "impressum",
  };
  return pageNames[pathname] || pathname.replace("/", "") || "unknown";
};

export const QuizModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const openQuizModal = () => setIsOpen(true);
  const closeQuizModal = () => setIsOpen(false);

  // Survey-URL mit UTM-Parametern
  const pageName = getPageName(location.pathname);
  const surveyBaseUrl = "https://klick.gaetanoficarra.de/widget/survey/ufAnEFvAiokxDgtIy3Kg";
  const surveyUrl = `${surveyBaseUrl}?utm_source=gaetanoficarra.de&utm_medium=website&utm_campaign=${pageName}`;

  // Form-Embed-Skript laden
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement("script");
      script.src = "https://klick.gaetanoficarra.de/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  // Body-Scroll verhindern
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <QuizModalContext.Provider value={{ openQuizModal, closeQuizModal, isOpen }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeQuizModal}
              className="absolute inset-0 bg-background/90 backdrop-blur-sm"
            />

            {/* Modal - transparent design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl max-h-[90vh] flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                onClick={closeQuizModal}
                className="absolute top-0 right-0 z-10 p-2 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
                aria-label="Schließen"
              >
                <X className="w-7 h-7" />
              </button>

              {/* Header - yellow, larger */}
              <div className="text-center mb-6 px-12">
                <h2 className="font-display text-3xl md:text-4xl text-[#D4A853] leading-tight">
                  Beantworte ein paar Fragen, damit ich optimal auf unser Gespräch vorbereitet bin.
                </h2>
              </div>

              {/* Survey Iframe */}
              <div className="w-full overflow-auto">
                <iframe
                  src={surveyUrl}
                  style={{ width: "100%", minHeight: "500px", border: "none", overflow: "hidden" }}
                  scrolling="no"
                  title="Qualifizierungs-Quiz"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </QuizModalContext.Provider>
  );
};
