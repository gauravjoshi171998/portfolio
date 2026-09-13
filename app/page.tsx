

import dynamic from "next/dynamic";


import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));
const Services = dynamic(() => import("@/components/Services"));
const WhyChooseMe = dynamic(() => import("@/components/WhyChooseMe"));
const Process = dynamic(() => import("@/components/Process"));
const Projects = dynamic(() => import("@/components/Projects"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About/>
        <Skills />
        <Services />
        <WhyChooseMe/>
        <Process/>
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}