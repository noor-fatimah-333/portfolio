import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const AnimatedCounter = ({ end, suffix = "", duration = 2, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1,
      );

      if (decimals > 0) {
        setCount(parseFloat((progress * end).toFixed(decimals)));
      } else {
        setCount(Math.floor(progress * end));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        if (decimals > 0) {
          setCount(parseFloat(end.toFixed(decimals)));
        } else {
          setCount(end);
        }
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration, decimals]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
