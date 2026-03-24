import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const useParallaxDepth = (
  speed = 0.5,
  intensity = 1,
  mobileReduction = 0.3,
) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const rafRef = useRef(null);

  useEffect(() => {
    if (
      !isInView ||
      (typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    ) {
      setOffset(0);
      return;
    }

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const effectiveIntensity = isMobile
      ? intensity * mobileReduction
      : intensity;

    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (windowHeight - elementTop) / (windowHeight + elementHeight),
        ),
      );

      const parallaxOffset =
        (scrollProgress - 0.5) * speed * effectiveIntensity * 100;
      setOffset(parallaxOffset);
    };

    const throttledScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        handleScroll();
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isInView, speed, intensity, mobileReduction]);

  return {
    ref,
    offset,
    style: { transform: `translate3d(0, ${offset}px, 0)` },
  };
};

export default useParallaxDepth;
