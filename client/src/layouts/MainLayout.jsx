import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ui/ScrollProgress";
import ParticleBackground from "../components/ParticleBackground";
import Particles from "../components/visual/Particles";
import { Moon, Sun } from "lucide-react";
const mainPageTransition = {
  type: "tween",
  ease: [0.4, 0, 0.2, 1],
  duration: 0.35,
};

const mainFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: mainPageTransition,
};

const MainLayout = ({ children }) => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <div className="animated-bg" aria-hidden="true" />
      <ParticleBackground />
      <Particles />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="main-content"
          key={location.pathname}
          initial={mainFade.initial}
          animate={mainFade.animate}
          exit={mainFade.exit}
          transition={mainFade.transition}
          className="page-container relative z-10 min-h-[calc(100vh-200px)]"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <motion.button
        onClick={toggleTheme}
        className="fixed bottom-8 right-8 glass-button z-50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={isDark}
      >
        {isDark ? (
          <Sun className="w-5 h-5" aria-hidden="true" />
        ) : (
          <Moon className="w-5 h-5" aria-hidden="true" />
        )}
      </motion.button>
    </div>
  );
};

export default MainLayout;
