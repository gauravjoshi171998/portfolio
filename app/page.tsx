import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import WhyChooseMe from "@/components/WhyChooseMe";
import Process from "@/components/Process";
import MobileBanner from "@/components/MobileBanner";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MobileBanner/>
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