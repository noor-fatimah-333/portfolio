import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import GlassCard from "./GlassCard";

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  index,
  featured = false,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <GlassCard
        onClick={onClick}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={onClick ? (e) => e.key === "Enter" && onClick() : undefined}
        aria-label={onClick ? `View ${title} details` : undefined}
        className={`relative h-full overflow-hidden ${onClick ? "cursor-pointer" : ""}`}
        hover
      >
        <div className="relative w-full h-48 md:h-64 lg:h-72 mb-4 rounded-lg overflow-hidden bg-surface-light/20 flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-surface-light/30 flex items-center justify-center">
                  <span className="text-2xl">📸</span>
                </div>
                <p className="text-text-muted text-xs">Image placeholder</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div
            className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-background/90 backdrop-blur-sm border border-glass-border hover:border-primary transition-colors"
                aria-label={`View ${title} on GitHub`}
              >
                <Github className="w-4 h-4 text-text-primary" />
              </motion.a>
            )}
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-background/90 backdrop-blur-sm border border-glass-border hover:border-primary transition-colors"
                aria-label={`View ${title} live`}
              >
                <ExternalLink className="w-4 h-4 text-text-primary" />
              </motion.a>
            )}
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default ProjectCard;
