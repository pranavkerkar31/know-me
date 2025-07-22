import Image from "next/image";
import Hero from "../components/Hero";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Curriculum from "../components/Curriculum";

export default function Home() {
  return (
    <>
    <Hero />
    <Education/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Curriculum/>
    </>
  );
}
