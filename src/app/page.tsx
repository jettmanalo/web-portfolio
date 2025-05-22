import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
// import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
