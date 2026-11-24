import FloatingNav from "@/components/navigation/FloatingNav";
import Hero from "@/components/home/Hero";
import TechStack from "@/components/home/TechStack";
import Projects from "@/components/home/Projects";
import Experience from "@/components/home/Experience";
import Research from "@/components/home/Research";
import Art from "@/components/home/Art";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main>
      <FloatingNav />
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Research />
      <Art />
      <Contact />
    </main>
  );
}
