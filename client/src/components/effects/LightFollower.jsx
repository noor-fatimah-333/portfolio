import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../../utils/motionTokens";

const LightFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef(null);
  const lastUpdateRef = useRef(0);
  const throttleDelay = 16;

  useEffect(() => {
    if (
      prefersReducedMotion ||
      (typeof window !== "undefined" &&
        window.matchMedia("(pointer: coarse)").matches)
    ) {
      return;
    }

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const opacity = isMobile ? 0.3 : 0.6;

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastUpdateRef.current < throttleDelay) return;

      lastUpdateRef.current = now;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  if (
    prefersReducedMotion ||
    (typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches)
  ) {
    return null;
  }

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const opacity = isMobile ? 0.3 : 0.6;

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 transition-opacity duration-500"
      style={{
        opacity: isVisible ? opacity : 0,
        background: `radial-gradient(circle 400px at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
        willChange: "background",
      }}
      aria-hidden="true"
    />
  );
};

export default LightFollower;
