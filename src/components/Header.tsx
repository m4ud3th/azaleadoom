"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [showToggleButton, setShowToggleButton] = useState(false);
  const [active, setActive] = useState<string>("home");

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

  useEffect(() => {
    const sections = ["home", "about", "live", "merch"] as const;
    const getActive = () => {
      const centerY = window.innerHeight / 2;
      const isMobile = window.innerWidth < 768;

      const inCenter = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= centerY && rect.bottom >= centerY;
      };

      const inRange = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        const upper = window.innerHeight * 0.2;
        const lower = window.innerHeight * 0.8;
        return rect.top < lower && rect.bottom > upper;
      };

      // Always resolve Home first so it doesn't get overridden on mobile
      if (inCenter("home")) return "home";

      // Mobile-specific logic: prioritize the item just below the header
      if (isMobile) {
        const headerBand = 120;
        const isPinned = (id: string) => {
          const el = document.getElementById(id);
          if (!el) return false;
          const top = el.getBoundingClientRect().top;
          return top >= 0 && top <= headerBand;
        };

        // Pinned priority under header
        if (isPinned("about-top")) return "about";
        if (isPinned("new-releases")) return "music";
        if (isPinned("live")) return "live";
        if (isPinned("merch")) return "merch";
        // If the About text area is centered, underline About
        if (inCenter("about-top")) return "about";

        // If a release is centered (image in color), underline Music
        const nr = document.getElementById("new-releases-section");
        if (nr && nr.getAttribute("data-active-release") === "true") return "music";

        // If the New Releases section itself is centered, underline Music
        if (inCenter("new-releases-section")) return "music";

        // Note: top-pinned heading cases are handled by isPinned above
      }

      // Unified behavior (desktop + mobile):
      // - About underlines only when About content is in view
      // - Music underlines in the New Releases area (desktop handled here; mobile handled above)
      
      // Desktop: treat New Releases as Music
      if (!isMobile) {
        if (inCenter("new-releases-section") || inCenter("new-releases")) return "music";
        const h2 = document.getElementById("new-releases");
        if (h2) {
          const top = h2.getBoundingClientRect().top;
          if (top >= 0 && top <= 140) return "music";
        }
      }

      // About only when About content is centered
      if (inCenter("about-top") || inCenter("about")) return "about";

      if (inCenter("live")) return "live";
      if (inCenter("merch")) return "merch";
      return "home";
    };

    const onScroll = () => setActive(getActive());
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
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

  const scrollToMusic = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const target = isMobile ? "new-releases" : "about";
    scrollToSection(target);
  };

  const goHome = () => scrollToSection("home");

  return (
    <>
      {/* Always visible logo header */}
      <div className={`fixed top-0 left-0 right-0 z-50 w-full h-[80px] md:h-[100px] transition-all duration-300 ${
        isNavVisible ? 'bg-black/95 backdrop-blur-sm' : 'bg-black/20 backdrop-blur-none'
      }`}>
        <div className="flex items-center justify-center h-full py-2 md:py-4 relative px-4">
          <button
            onClick={goHome}
            onWheel={(e) => { e.preventDefault(); goHome(); }}
            aria-label="Go to top"
            className="focus:outline-none"
          >
            <Image
              src="/azalealogo.png"
              alt="Azalea Logo"
              width={120}
              height={80}
              className="h-[60px] w-[90px] md:h-[80px] md:w-[120px] object-cover object-[center_70%] cursor-pointer"
              priority
            />
          </button>
          {/* Cart Icon - Always in header center */}
          <div className="absolute right-4 md:right-8">
            <svg width="20" height="20" className="md:w-6 md:h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Navigation overlay */}
      <div className={`fixed top-[80px] md:top-[100px] left-0 right-0 z-40 w-full bg-black/95 backdrop-blur-sm transition-all duration-500 ease-in-out transform ${
        isNavVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
          <div className="flex items-center justify-center py-4 md:py-6 px-4">
            <nav className="flex gap-6 md:gap-8 text-center">
              <button 
                onClick={() => scrollToSection("home")} 
                className={`text-base md:text-lg font-medium pb-1 transition-all whitespace-nowrap ${active === "home" ? "text-azalea-purple border-b-2 border-azalea-purple" : "text-white hover:text-azalea-purple hover:border-b-2 hover:border-azalea-purple"}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")} 
                className={`text-base md:text-lg font-medium pb-1 transition-all whitespace-nowrap ${active === "about" ? "text-azalea-purple border-b-2 border-azalea-purple" : "text-white hover:text-azalea-purple hover:border-b-2 hover:border-azalea-purple"}`}
              >
                About
              </button>
              <button 
                onClick={scrollToMusic} 
                className={`text-base md:text-lg font-medium pb-1 transition-all whitespace-nowrap ${active === "music" ? "text-azalea-purple border-b-2 border-azalea-purple" : "text-white hover:text-azalea-purple hover:border-b-2 hover:border-azalea-purple"}`}
              >
                Music
              </button>
              <button 
                onClick={() => scrollToSection("live")} 
                className={`text-base md:text-lg font-medium pb-1 transition-all whitespace-nowrap ${active === "live" ? "text-azalea-purple border-b-2 border-azalea-purple" : "text-white hover:text-azalea-purple hover:border-b-2 hover:border-azalea-purple"}`}
              >
                Live
              </button>
              <button 
                onClick={() => scrollToSection("merch")} 
                className={`text-base md:text-lg font-medium pb-1 transition-all whitespace-nowrap ${active === "merch" ? "text-azalea-purple border-b-2 border-azalea-purple" : "text-white hover:text-azalea-purple hover:border-b-2 hover:border-azalea-purple"}`}
              >
                Merch
              </button>
            </nav>
          </div>
          {/* Spacer div to add extra black space below navigation */}
          <div className="h-1"></div>
        </div>

      {/* Simple toggle button */}
      {showToggleButton && (
        <button
          onClick={toggleNav}
          className="fixed top-[85px] md:top-[105px] right-4 md:right-8 z-[60] bg-black/80 hover:bg-azalea-purple text-white p-2 rounded transition-all duration-300"
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