import { lazy, Suspense } from "react";
import Hero from "../components/sections/Hero";
import FloatingStats from "../components/visual/FloatingStats";

const About = lazy(() => import("../components/sections/About"));
const TechStack = lazy(() => import("../components/sections/TechStack"));
const Experience = lazy(() => import("../components/sections/Experience"));
const Projects = lazy(() => import("../components/sections/Projects"));
const Services = lazy(() => import("../components/sections/Services"));
const Contact = lazy(() => import("../components/sections/Contact"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Home = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <FloatingStats />
      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <TechStack />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Services />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
