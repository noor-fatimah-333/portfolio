import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GlassCard from "./GlassCard";

const SkillCard = ({ icon: Icon, name, percentage, color = "primary" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const colorClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
  };

  const iconColorClass =
    color === "primary" ? "text-primary" : "text-secondary";

  return (
    <GlassCard ref={ref} className="relative overflow-hidden group" hover>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          {Icon && <Icon className={`w-6 h-6 ${iconColorClass}`} />}
          <span className="font-semibold text-text-primary text-sm">
            {name}
          </span>
        </div>
        <span className="text-sm text-text-secondary font-medium">
          {percentage}%
        </span>
      </div>
      <div className="h-2 w-full bg-surface-light rounded-full overflow-hidden">
        <motion.div
          className={`h-full w-full ${colorClasses[color]} rounded-full origin-left`}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: percentage / 100 } : { scaleX: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        />
      </div>
      <motion.div
        className={`absolute inset-0 ${colorClasses[color]} opacity-0 blur-xl -z-10`}
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />
    </GlassCard>
  );
};

export default SkillCard;
