import Navbar from "@/components/navigation/Navbar";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Technologies from "@/components/sections/Technologies";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
