import { Code, Cloud, Zap, Shield } from "lucide-react";
import Section from "../ui/Section";
import ServiceCard from "../ui/ServiceCard";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full Stack Product Development",
      description: "",
      skills: [
        "React.js / Next.js frontends with TypeScript",
        "Node.js / Express / NestJS backend APIs",
        "PostgreSQL & GraphQL data layers",
        "Third-party integrations (QuickBooks, DocuSign, MS365)",
      ],
      color: "primary",
    },
    {
      icon: Zap,
      title: "AI-Augmented Engineering",
      description: "",
      skills: [
        "Daily use of Claude Code, Cursor AI & Codex",
        "MCP context system design for multi-repo codebases",
        "Claude API integrations and agent skill development",
        "Faster delivery with measurable AI autonomy benchmarks",
      ],
      color: "secondary",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "",
      skills: [
        "AWS (EC2, RDS, S3, CodeDeploy, CodeArtifact)",
        "Docker containerisation basics",
        "CI/CD pipeline setup with Jenkins and GitHub Actions",
        "AWS Developer Associate certification in progress",
      ],
      color: "primary",
    },
    {
      icon: Shield,
      title: "Enterprise Security & Integrations",
      description: "",
      skills: [
        "JWT authentication, RBAC, session management",
        "OAuth flows and SSO with Keycloak",
        "Audit logging and admin impersonation controls",
        "Microsoft 365 Mail API and webhook integrations",
      ],
      color: "secondary",
    },
  ];

  return (
    <Section
      id="services"
      title="What I Bring to Your Team"
      staggerDelay={0.1}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Services;
