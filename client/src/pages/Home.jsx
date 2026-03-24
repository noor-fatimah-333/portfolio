import Hero from "../components/sections/Hero";
import FloatingStats from "../components/visual/FloatingStats";
import About from "../components/sections/About";
import TechStack from "../components/sections/TechStack";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";

const Home = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <FloatingStats />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
