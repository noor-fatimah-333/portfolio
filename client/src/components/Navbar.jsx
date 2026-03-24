import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import useScrollSpy from "../hooks/useScrollSpy";
import personalInfo from "../config/personalInfo";
import { scrollToSectionById } from "../utils/scrollToSection";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  const sectionIds = [
    "hero",
    "about",
    "tech-stack",
    "experience",
    "projects",
    "services",
    "contact",
  ];
  const activeSection = useScrollSpy(sectionIds, 150);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/", id: "hero" },
    { name: "About", path: "/#about", id: "about" },
    { name: "Tech Stack", path: "/#tech-stack", id: "tech-stack" },
    { name: "Experience", path: "/#experience", id: "experience" },
    { name: "Projects", path: "/#projects", id: "projects" },
    { name: "Services", path: "/#services", id: "services" },
    { name: "Contact", path: "/#contact", id: "contact" },
  ];

  const handleDesktopNav = (e, path) => {
    e.preventDefault();
    if (path.includes("#")) {
      const hash = path.split("#")[1];
      scrollToSectionById(hash, { behavior: "smooth" });
      return;
    }
    if (path === "/" || path === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleMobileNav = (path) => {
    setIsOpen(false);
    if (path === "/" || path === "") {
      window.setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }, 320);
      return;
    }
    if (path.includes("#")) {
      const hash = path.split("#")[1];
      window.setTimeout(() => {
        scrollToSectionById(hash, { behavior: "auto" });
      }, 320);
    }
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          backdropFilter: isOpen || isScrolled ? "blur(20px)" : "blur(10px)",
          backgroundColor:
            isOpen || isScrolled
              ? "rgba(15, 23, 42, 0.92)"
              : "rgba(255, 255, 255, 0.05)",
        }}
        transition={{ duration: 0.5 }}
        className={`glass-nav w-full max-w-5xl pointer-events-auto transition-all duration-300 rounded-2xl md:rounded-full overflow-hidden max-md:border max-md:border-white/10 ${
          isScrolled || isOpen ? "shadow-2xl shadow-primary/10" : ""
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="text-xl font-bold text-gradient font-display"
            >
              {personalInfo.name}
            </Link>
          </motion.div>
          <nav
            className="hidden md:flex items-center space-x-8"
            aria-label="Main navigation"
          >
            {navItems.map((item, index) => {
              const isActive =
                location.pathname === "/" && activeSection === item.id;
              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.path}
                    onClick={(e) => handleDesktopNav(e, item.path)}
                    className={`nav-link relative text-sm font-medium transition-colors duration-300 focus:outline-none pb-1 ${
                      isActive
                        ? "text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.name}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        aria-hidden
                      />
                    )}
                  </a>
                </motion.div>
              );
            })}
          </nav>
          <motion.button
            type="button"
            className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-white/10 mt-2 pt-2 pb-1 max-h-[min(70vh,calc(100dvh-8rem))] overflow-y-auto overscroll-auto"
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col gap-0.5 px-2 pb-2">
                {navItems.map((item) => {
                  const isActive =
                    location.pathname === "/" && activeSection === item.id;
                  return (
                    <li key={item.path}>
                      <button
                        type="button"
                        onClick={() => handleMobileNav(item.path)}
                        className={`nav-link relative flex w-full items-center rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 touch-manipulation ${
                          isActive
                            ? "text-primary"
                            : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <span className="relative inline-block pb-0.5">
                          {item.name}
                          {isActive && (
                            <span
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                              aria-hidden
                            />
                          )}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
