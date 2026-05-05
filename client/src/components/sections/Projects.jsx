import { useState, useCallback } from "react";
import Section from "../ui/Section";
import ProjectCard from "../ui/ProjectCard";
import FeaturedProject from "../ui/FeaturedProject";

const allProjects = [
  {
    id: "bvc",
    logo: "/projects/bvc/bvc-logo.svg",
    title: "Barrett Values Centre",
    tagline: "Organizational Culture Assessment SaaS Platform",
    description:
      "Core developer on a global SaaS platform serving 2,500+ consultants across 80+ countries and 6,000+ organisations worldwide.",
    role: "Full Stack Engineer — Built features end-to-end across the consultant dashboard, assessment tools, reporting, and integrations. Collaborated with product and QA teams in an agile environment.",
    metrics: [
      { icon: "users", value: "2500+", label: "Consultants" },
      { icon: "globe", value: "80+", label: "Countries" },
      { icon: "orgs", value: "6000+", label: "Organisations" },
      { icon: "orgs", value: "6", label: "Microservices" },
    ],
    achievements: [
      "Built 20+ responsive React.js/Ant Design components with an advanced filtering system (15+ dynamic criteria)",
      "Optimised PostgreSQL report queries using CTEs and multi-table joins across 10+ tables",
      "Developed Node.js/Express microservices with QuickBooks, DocuSign, Keycloak, and MS365 Mail API integrations",
      "Implemented admin impersonation with full audit logging and security controls",
      "Automated scheduled notifications via cron jobs",
      "Designed structured AI context system (bvc-context) using Claude Code and MCP",
    ],
    technologies: [
      "React",
      "Ant Design",
      "Node.js",
      "Express",
      "PostgreSQL",
      "AWS",
      "Keycloak",
      "QuickBooks",
      "DocuSign",
    ],
    screenshots: [
      "/projects/bvc/bvc-feature-photo.png",
      "/projects/bvc/bvc-dashboard.png",
      "/projects/bvc/bvc-assessments.png",
      "/projects/bvc/bvc-values-management.png",
      "/projects/bvc/bvc-filter-responses.png",
      "/projects/bvc/bvc-demographics-setup.png",
      "/projects/bvc/bvc-responses.png",
      "/projects/bvc/bvc-leaders-profile-report.png",
    ],
  },
  {
    id: "bvc-context",
    title: "bvc-context — AI Context Hub",
    tagline: "Open Source · AI Engineering",
    description:
      "Designed and built bvc-context, a structured AI context hub that equips Claude Code with deep, cross-repo knowledge of the Barrett Values Centre platform's six microservices (React/Umi frontend, Express backend, Hasura/Postgres, two Spring Boot services, and an SQS-driven integration hub). Includes service-specific operational packs, architecture docs, reusable agent skills and slash commands, a two-stage context-economy policy to minimise token sprawl, and an eval suite of 10 scored scenarios to measurably benchmark AI autonomy on real engineering tasks.",
    metrics: [
      { icon: "orgs", value: "6", label: "Microservices" },
      { icon: "users", value: "10", label: "Eval Scenarios" },
      { icon: "globe", value: "1", label: "Context Economy Policy" },
    ],
    image: "/projects/bvc-context/terminal-mockup.svg",
    technologies: ["Claude Code", "MCP"],
  },
  {
    id: "gamehub",
    title: "GameHub",
    description:
      "A comprehensive gaming platform featuring game discovery, reviews, and user interactions. Built with modern web technologies for optimal performance and user experience. Includes genre filtering, platform filters, search, light/dark mode, and Metacritic-style ratings.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "REST API"],
    githubUrl: "https://github.com/noor-fatimah-333/game-hub",
    liveUrl: "https://game-pps95gnlf-noor-fatimahs-projects.vercel.app/",
    screenshots: [
      "/projects/gamehub/gamehub-light-home.png",
      "/projects/gamehub/gamehub-dark-games.png",
      "/projects/gamehub/gamehub-casual.png",
      "/projects/gamehub/gamehub-sort-filter.png",
      "/projects/gamehub/gamehub-shooter.png",
    ],
    image: "/projects/gamehub/gamehub-light-home.png",
  },
  {
    id: "connectxpert",
    title: "ConnectXpert",
    description:
      "Online video conferencing platform tailored for educational institutions. Ensures lecture compliance against curriculum using NLP, compiles related Q&A into unified queries with AI, and tracks student attendance and engagement.",
    image: "/projects/connectxpert/connect-xpert.png",
    technologies: ["WebRTC", "mediasoup", "Node.js", "MySQL"],
    githubUrl:
      "https://github.com/noor-fatimah-333/https---github.com-khaaj-Polymathic",
    liveUrl: null,
  },
];

const Projects = () => {
  const [featuredId, setFeaturedId] = useState("bvc");

  const featuredProject = allProjects.find((p) => p.id === featuredId);

  const promoteToFeatured = useCallback((projectId) => {
    setFeaturedId(projectId);
    requestAnimationFrame(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const cardProjects = allProjects.filter((p) => p.id !== featuredId);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Featured Work"
      className="bg-surface-dark/20"
      staggerDelay={0.1}
    >
      <FeaturedProject {...featuredProject} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {cardProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image || project.screenshots?.[0]}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            index={index}
            onClick={() => promoteToFeatured(project.id)}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
