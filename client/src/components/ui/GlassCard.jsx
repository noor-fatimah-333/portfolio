import { forwardRef } from "react";
import { motion } from "framer-motion";

const GlassCard = forwardRef(
  ({ children, className = "", hover = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={`glass-card ${className}`}
        whileHover={hover ? { scale: 1.05, y: -5 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
