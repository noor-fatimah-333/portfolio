import { motion } from "framer-motion";
import {
  Code,
  Database,
  Cloud,
  Server,
  Package,
  GitBranch,
  Terminal,
  Layers,
  FileCode,
} from "lucide-react";
import Section from "../ui/Section";
import SkillCard from "../ui/SkillCard";

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "React", percentage: 95, icon: Code },
        { name: "Next.js", percentage: 85, icon: Package },
        { name: "Redux", percentage: 90, icon: Layers },
        { name: "Tailwind CSS", percentage: 95, icon: FileCode },
        { name: "TypeScript", percentage: 88, icon: Code },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", percentage: 92, icon: Server },
        { name: "Express", percentage: 90, icon: Server },
        { name: "MongoDB", percentage: 88, icon: Database },
        { name: "REST APIs", percentage: 93, icon: Terminal },
        { name: "GraphQL", percentage: 80, icon: Database },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", percentage: 85, icon: Cloud },
        { name: "Docker", percentage: 82, icon: Package },
        { name: "CI/CD", percentage: 80, icon: GitBranch },
        { name: "Git", percentage: 95, icon: GitBranch },
        { name: "Linux", percentage: 88, icon: Terminal },
      ],
    },
  ];

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Section
      id="tech-stack"
      title="Tech Stack"
      subtitle="Technologies I Work With"
      className="bg-surface-dark/30"
    >
      <div className="space-y-12">
        {techCategories.map((category, categoryIndex) => {
          const CategoryIcon = category.icon;
          return (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="glass-card p-3">
                  <CategoryIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                  {category.title}
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const SkillIcon = skill.icon || Code;
                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: categoryIndex * 0.2 + skillIndex * 0.05,
                        duration: 0.4,
                      }}
                    >
                      <SkillCard
                        icon={SkillIcon}
                        name={skill.name}
                        percentage={skill.percentage}
                        color={
                          categoryIndex % 2 === 0 ? "primary" : "secondary"
                        }
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default TechStack;
