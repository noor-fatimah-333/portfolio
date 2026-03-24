import { motion } from "framer-motion";
import { springConfigs, prefersReducedMotion } from "../../utils/motionTokens";
import useMagnetic from "../../hooks/useMagnetic";

const MagneticButton = ({
  children,
  className = "",
  strength = 0.25,
  onClick,
  type = "button",
  disabled = false,
  ...props
}) => {
  const magnetic = useMagnetic(strength, 120);

  return (
    <motion.button
      ref={magnetic.ref}
      style={magnetic.style}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`glass-button relative overflow-hidden ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      whileHover={
        prefersReducedMotion || disabled
          ? {}
          : {
              scale: 1.05,
              boxShadow:
                "0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(167, 139, 250, 0.2)",
            }
      }
      whileTap={prefersReducedMotion || disabled ? {} : { scale: 0.95 }}
      transition={springConfigs.magnetic}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-0"
        whileHover={prefersReducedMotion || disabled ? {} : { opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{ filter: "blur(20px)" }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default MagneticButton;
