import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Award, BadgeCheck, Medal, X, ImageIcon } from "lucide-react";
import Section from "../ui/Section";
import GlassCard from "../ui/GlassCard";

const certifications = [
  {
    icon: BadgeCheck,
    name: "AWS Certified Cloud Practitioner (CLF-C02)",
    org: "Amazon Web Services",
    date: "Dec 12, 2025 · Expires Dec 12, 2028",
    status: "Active",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    iconColor: "text-primary",
    glowColor: "from-primary/20 to-primary/5",
    borderColor: "border-primary/20",
    images: [
      "/certifications/aws-badge.png",
      "/certifications/aws-cert.png",
    ],
  },
  {
    icon: Award,
    name: "Claude Code 101",
    org: "Anthropic Education",
    date: "April 26, 2026",
    status: "Completed",
    statusColor: "text-secondary bg-secondary/10 border-secondary/20",
    iconColor: "text-secondary",
    glowColor: "from-secondary/20 to-secondary/5",
    borderColor: "border-secondary/20",
    images: ["/certifications/claude-code-101.png"],
  },
  {
    icon: Award,
    name: "Introduction to Agent Skills",
    org: "Anthropic Education",
    date: "May 1, 2026",
    status: "Completed",
    statusColor: "text-secondary bg-secondary/10 border-secondary/20",
    iconColor: "text-secondary",
    glowColor: "from-secondary/20 to-secondary/5",
    borderColor: "border-secondary/20",
    images: ["/certifications/agent-skills.png"],
  },
  {
    icon: Award,
    name: "Introduction to Model Context Protocol",
    org: "Anthropic Education",
    date: "May 4, 2026",
    status: "Completed",
    statusColor: "text-secondary bg-secondary/10 border-secondary/20",
    iconColor: "text-secondary",
    glowColor: "from-secondary/20 to-secondary/5",
    borderColor: "border-secondary/20",
    images: ["/certifications/mcp-cert.png"],
  },
  {
    icon: Award,
    name: "Codex — The Practical Guide",
    org: "Udemy",
    date: "March 29, 2026",
    status: "Completed",
    statusColor: "text-secondary bg-secondary/10 border-secondary/20",
    iconColor: "text-primary",
    glowColor: "from-primary/20 to-primary/5",
    borderColor: "border-primary/20",
    images: ["/certifications/codex-udemy.png"],
  },
];

const honors = [
  {
    icon: Medal,
    name: "Cum Laude, Bachelor of Software Engineering",
    org: "FAST NUCES · Lahore Campus",
    date: "Batch Fall 2020 – Spring 2024",
    images: ["/certifications/cum-laude-degree.png"],
  },
  {
    icon: Medal,
    name: "Silver Medalist, Spring 2022",
    org: "FAST NUCES · Lahore Campus",
    date: "Spring 2022 · Awarded Oct 17, 2023",
    images: ["/certifications/silver-medal-with-medal.png"],
  },
  {
    icon: Medal,
    name: "Dean's List of Honor",
    org: "FAST NUCES",
    date: "Fall 2020 – Spring 2024 (8 consecutive semesters)",
    images: ["/certifications/deans-list.png"],
  },
];

const Lightbox = ({ images, startIndex, onClose }) => {
  const [current, setCurrent] = useState(startIndex);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % images.length);
      if (e.key === "ArrowLeft")
        setCurrent((c) => (c - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [images.length, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-6 cursor-zoom-out"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors z-10"
        aria-label="Close"
      >
        <X className="w-8 h-8 text-white" />
      </button>
      <motion.img
        key={current}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        src={images[current]}
        alt="Certificate"
        onClick={(e) => e.stopPropagation()}
        className="max-w-[min(95vw,1000px)] max-h-[85vh] w-auto h-auto object-contain shadow-2xl cursor-default rounded-lg"
      />
      {images.length > 1 && (
        <div className="absolute bottom-6 flex gap-2" onClick={(e) => e.stopPropagation()}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>,
    document.body,
  );
};

const CertCard = ({ cert, index, glowColor, borderColor, isHonor = false }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const Icon = cert.icon;
  const hasImages = cert.images?.length > 0;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="group"
      >
        <GlassCard className="relative h-full overflow-hidden flex flex-col" hover>
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${cert.glowColor ?? glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
          />
          <div className="mb-4">
            <div
              className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${cert.glowColor ?? glowColor} border ${cert.borderColor ?? borderColor}`}
            >
              <Icon className={`w-6 h-6 ${cert.iconColor ?? "text-primary"}`} />
            </div>
          </div>
          <h3 className="text-base font-bold text-text-primary mb-1 leading-snug">
            {cert.name}
          </h3>
          <p className="text-sm text-text-secondary mb-1">{cert.org}</p>
          <p className="text-xs text-text-muted mb-3 flex-1">{cert.date}</p>

          <div className="flex items-center justify-between flex-wrap gap-2 mt-auto">
            {cert.status && (
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${cert.statusColor}`}
              >
                {cert.status}
              </span>
            )}
            {hasImages && (
              <button
                onClick={() => setLightboxOpen(true)}
                className="flex items-center gap-1.5 text-xs text-text-muted hover:text-primary transition-colors ml-auto"
              >
                <ImageIcon className="w-3.5 h-3.5" />
                View
              </button>
            )}
          </div>

          {hasImages && (
            <motion.button
              onClick={() => setLightboxOpen(true)}
              className="mt-4 w-full h-36 rounded-lg overflow-hidden border border-glass-border bg-surface-light/10 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary/50 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={cert.images[0]}
                alt={cert.name}
                className="max-w-full max-h-full object-contain p-2"
              />
            </motion.button>
          )}
        </GlassCard>
      </motion.div>

      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={cert.images}
            startIndex={0}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const Certifications = () => {
  return (
    <Section
      id="certifications"
      title="Certifications & Honors"
      subtitle="CREDENTIALS & RECOGNITION"
    >
      <div className="space-y-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {certifications.map((cert, index) => (
            <CertCard key={index} cert={cert} index={index} />
          ))}
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-semibold uppercase tracking-wider mb-6 text-center"
          >
            Academic Honors
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {honors.map((honor, index) => (
              <CertCard
                key={index}
                cert={honor}
                index={index}
                glowColor="from-primary/20 to-primary/5"
                borderColor="border-primary/20"
                isHonor
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Certifications;
