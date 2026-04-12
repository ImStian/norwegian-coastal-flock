import { useState, useRef, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import BirdMap from "@/components/BirdMap";
import AboutSection from "@/components/AboutSection";
import AmbientSound from "@/components/AmbientSound";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    gallery: useRef<HTMLDivElement>(null),
    map: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
  };

  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section);
    const ref = sectionRefs[section as keyof typeof sectionRefs];
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <AmbientSound />

      <div ref={sectionRefs.home}>
        <HeroSection onNavigate={handleNavigate} />
      </div>
      <div ref={sectionRefs.gallery}>
        <GallerySection />
      </div>
      <div ref={sectionRefs.map}>
        <BirdMap />
      </div>
      <div ref={sectionRefs.about}>
        <AboutSection />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
