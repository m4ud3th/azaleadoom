"use client";

import { useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import LiveSection from "@/components/LiveSection";
import MerchSection from "@/components/MerchSection";

export default function Home() {
  useEffect(() => {
    // Add smooth scrolling behavior to the entire document
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Handle wheel scrolling for section-to-section navigation
    let isScrolling = false;
    const sections = ["home", "about", "live", "merch"];
    
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      
      const currentSection = getCurrentSection();
      const currentIndex = sections.indexOf(currentSection);
      const isMobile = window.innerWidth < 768;
      
      if (isMobile) {
        // Mobile: Only navigate at section boundaries
        const currentElement = document.getElementById(currentSection);
        if (!currentElement) return;
        
        const rect = currentElement.getBoundingClientRect();
        const atTop = rect.top >= -10;
        const atBottom = rect.bottom <= window.innerHeight + 10;
        
        if (e.deltaY > 0 && currentIndex < sections.length - 1 && atBottom) {
          e.preventDefault();
          isScrolling = true;
          const nextSection = sections[currentIndex + 1];
          document.getElementById(nextSection)?.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => { isScrolling = false; }, 1000);
        } else if (e.deltaY < 0 && currentIndex > 0 && atTop) {
          e.preventDefault();
          isScrolling = true;
          const prevSection = sections[currentIndex - 1];
          document.getElementById(prevSection)?.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => { isScrolling = false; }, 1000);
        }
      } else {
        // Desktop: Simple one-scroll navigation
        if (e.deltaY > 0 && currentIndex < sections.length - 1) {
          e.preventDefault();
          isScrolling = true;
          const nextSection = sections[currentIndex + 1];
          document.getElementById(nextSection)?.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => { isScrolling = false; }, 1000);
        } else if (e.deltaY < 0 && currentIndex > 0) {
          e.preventDefault();
          isScrolling = true;
          const prevSection = sections[currentIndex - 1];
          document.getElementById(prevSection)?.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => { isScrolling = false; }, 1000);
        }
      }
    };
    
    const getCurrentSection = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            return section;
          }
        }
      }
      return "home";
    };
    
    window.addEventListener("wheel", handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="bg-black">
      <Header />

      {/* Home Section */}
      <section id="home" className="h-screen w-full bg-black flex flex-col pt-[80px] md:pt-[100px]">
        <div className="flex-1 w-full relative">
          <Image
            src="/bandfoto.png"
            alt="Azalea Band Photo"
            fill
            className="object-cover object-center md:object-bottom w-full h-full grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
      </section>

      <AboutSection />
      <LiveSection />
      <MerchSection />
    </div>
  );
}
