"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      
      // Show header at top of page
      if (currentScrollY < 100) {
        setIsVisible(true);
      } 
      // Hide header when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-black/95 backdrop-blur-sm border-b border-zinc-800 h-[180px] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full relative py-6">
        {/* Logo - Centered at top */}
        <Image
          src="/azalealogo.png"
          alt="Azalea Logo"
          width={160}
          height={120}
          className="h-[120px] w-[160px] object-cover mb-6"
          style={{ objectPosition: "center 70%" }}
          priority
        />
        {/* Navigation - Centered below logo */}
        <nav className="flex gap-8">
          <button 
            onClick={() => scrollToSection("home")} 
            className="text-white text-lg font-medium pb-1 border-b-2 border-azalea-purple transition-all"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection("about")} 
            className="text-white text-lg font-medium pb-1 hover:border-b-2 hover:border-azalea-purple transition-all hover:text-azalea-purple"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("music")} 
            className="text-white text-lg font-medium pb-1 hover:border-b-2 hover:border-azalea-purple transition-all hover:text-azalea-purple"
          >
            Music
          </button>
          <button 
            onClick={() => scrollToSection("live")} 
            className="text-white text-lg font-medium pb-1 hover:border-b-2 hover:border-azalea-purple transition-all hover:text-azalea-purple"
          >
            Live
          </button>
          <button 
            onClick={() => scrollToSection("merch")} 
            className="text-white text-lg font-medium pb-1 hover:border-b-2 hover:border-azalea-purple transition-all hover:text-azalea-purple"
          >
            Merch
          </button>
        </nav>
        {/* Cart Icon - Positioned absolute and vertically centered */}
        <div className="absolute top-1/2 -translate-y-1/2 right-8">
          <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </div>
      </div>
    </header>
  );
}