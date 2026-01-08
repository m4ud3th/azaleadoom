"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [showToggleButton, setShowToggleButton] = useState(false);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      
      // Show nav at top of page, hide toggle button
      if (currentScrollY < 100) {
        setIsNavVisible(true);
        setShowToggleButton(false);
      } 
      // When scrolled down, hide nav and show toggle button
      else {
        setIsNavVisible(false);
        setShowToggleButton(true);
      }
    };

    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, []);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
      
      // Hide nav after navigation when scrolled down
      if (window.scrollY > 100) {
        setIsNavVisible(false);
      }
    }
  };

  return (
    <>
      {/* Always visible logo header */}
      <div className={`fixed top-0 left-0 right-0 z-50 w-full h-[100px] transition-all duration-300 ${
        isNavVisible ? 'bg-black/95 backdrop-blur-sm' : 'bg-black/20 backdrop-blur-none'
      }`}>
        <div className="flex items-center justify-center h-full py-4 relative">
          <Image
            src="/azalealogo.png"
            alt="Azalea Logo"
            width={120}
            height={80}
            className="h-[80px] w-[120px] object-cover"
            style={{ objectPosition: "center 70%" }}
            priority
          />
          {/* Cart Icon - Always in header center */}
          <div className="absolute right-8">
            <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Navigation overlay */}
      <div className={`fixed top-[100px] left-0 right-0 z-40 w-full bg-black/95 backdrop-blur-sm transition-all duration-500 ease-in-out transform ${
        isNavVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
          <div className="flex items-center justify-center py-6">
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
                onClick={() => scrollToSection("about")} 
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
          </div>
        </div>

      {/* Simple toggle button */}
      {showToggleButton && (
        <button
          onClick={toggleNav}
          className="fixed top-[105px] right-8 z-[60] bg-black/80 hover:bg-azalea-purple text-white p-2 rounded transition-all duration-300"
          aria-label={isNavVisible ? "Hide navigation" : "Show navigation"}
        >
          <svg 
            width="20" 
            height="20" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
            className={`transform transition-transform duration-200 ${isNavVisible ? "rotate-180" : ""}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      )}
    </>
  );
}