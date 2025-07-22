import Image from "next/image";
import Hero from "../components/Hero";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Curriculum from "../components/Curriculum";
import Contact from "../components/Contact";
import CurrentStatus from "@/components/Currentstatus";

export default function Home() {
  return (
    <>
    <Hero />
    <Education/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Curriculum/>
    <Contact/>
    <CurrentStatus/>
    </>
  );
}
