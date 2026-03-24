import { useState, useEffect, useRef } from "react";

const useScrollVelocity = () => {
  const [velocity, setVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());
  const rafRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const currentTime = Date.now();
        const timeDelta = currentTime - lastTime.current;

        if (timeDelta > 0) {
          const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
          const newVelocity = scrollDelta / timeDelta;

          setVelocity(newVelocity);
          lastScrollY.current = currentScrollY;
          lastTime.current = currentTime;
        }

        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return velocity;
};

export default useScrollVelocity;
