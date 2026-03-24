import { useState, useRef, useEffect } from "react";
import { prefersReducedMotion } from "../utils/motionTokens";

const useMagnetic = (strength = 0.3, proximity = 100) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (
      prefersReducedMotion ||
      (typeof window !== "undefined" &&
        window.matchMedia("(pointer: coarse)").matches)
    ) {
      return;
    }

    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < proximity) {
        const force = (proximity - distance) / proximity;
        const x = distanceX * force * strength;
        const y = distanceY * force * strength;

        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }

        rafRef.current = requestAnimationFrame(() => {
          setPosition({ x, y });
        });
      } else {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
        rafRef.current = requestAnimationFrame(() => {
          setPosition({ x: 0, y: 0 });
        });
      }
    };

    const handleMouseLeave = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => {
        setPosition({ x: 0, y: 0 });
      });
    };

    element.addEventListener("mousemove", handleMouseMove, { passive: true });
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [strength, proximity]);

  return {
    ref,
    style: {
      transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      transition: prefersReducedMotion
        ? "none"
        : "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
    },
  };
};

export default useMagnetic;
