"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const cardRef1 = useRef<HTMLDivElement | null>(null);
  const cardRef2 = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const updateActive = () => {
      const isMobile = window.innerWidth < 768;
      if (!isMobile) {
        setActiveIndex(null);
        return;
      }
      const centerY = window.innerHeight / 2;
      const dist = (el: HTMLDivElement | null) => {
        if (!el) return Number.POSITIVE_INFINITY;
        const rect = el.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        return Math.abs(mid - centerY);
      };
      const d1 = dist(cardRef1.current);
      const d2 = dist(cardRef2.current);
      const min = Math.min(d1, d2);
      const threshold = Math.min(window.innerHeight, 600) * 0.15; // ~15% of viewport height
      if (min === Number.POSITIVE_INFINITY || min > threshold) {
        setActiveIndex(null);
      } else {
        setActiveIndex(d1 <= d2 ? 0 : 1);
      }
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);
  return (
    <section id="about" className="min-h-screen w-full bg-black flex items-start justify-center relative overflow-hidden pt-[100px] md:pt-[120px] pb-8">
      {/* Purple organic background shape */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/azaleaflower.png"
          alt=""
          width={700}
          height={400}
          className="object-contain opacity-25 w-auto min-h-[60vh] scale-[1.5]"
          priority
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center min-h-[90vh] flex flex-col justify-start mx-4 md:mx-6">
        {/* About Section */}
        <div className="flex flex-col justify-start mb-8">
          <h2 className="text-2xl md:text-6xl font-bold text-white tracking-wide mb-6">ABOUT AZALEA</h2>
          <p className="text-white text-xs md:text-base leading-relaxed max-w-[22rem] md:max-w-4xl mx-auto px-4 md:px-0">
            Azalea is a sludge metal band that fuses crushing, slow-burning riffs with a deeper, mysterious view of the good in 
            the world. Their lyrics take you to another dimension, where light and darkness converge and the familiar takes 
            on a strange, new shape. With raw vocals, heavy breakdowns and an atmospheric undertone, Azalea challenges 
            listeners to experience reality from a different perspective. Brutality and reflection go hand in hand, a sonic 
            storm that both devastates and enlightens.
          </p>
        </div>

        {/* New Releases Section */}
        <div className="min-h-[40vh] flex flex-col justify-start mb-8">
          <h2 id="new-releases" className="text-2xl md:text-6xl font-bold text-white tracking-wide mb-6 scroll-mt-[100px] md:scroll-mt-[120px]">NEW RELEASES</h2>
          <div className="w-full px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
            <div 
              ref={cardRef1}
              className="backdrop-blur-sm rounded-lg border transition-all hover:border-[#7E4AB850] cursor-pointer bg-[#7E4AB820] border-[#7E4AB830] p-2 md:p-4 w-full" 
              onClick={() => window.open('https://open.spotify.com/track/55wp0T63NAchDk3vtFVqWY?si=9ccdbeca9e7c49f7', '_blank')}
            >
              <div className="relative overflow-hidden aspect-square bg-gray-800 rounded-lg mb-2 md:mb-3 w-full">
                <Image
                  src="/loveandpain.png"
                  alt="Love and Pain Album Cover"
                  fill
                  sizes="(max-width: 768px) 90vw, 50vw"
                  className={`object-cover transition-all duration-500 ${activeIndex === 0 ? "grayscale-0" : "grayscale"} md:grayscale md:hover:grayscale-0`}
                />
              </div>
              <h3 className="text-white font-bold text-sm md:text-lg mb-2">Love and Pain</h3>
              <p className="text-azalea-purple text-xs">2025</p>
            </div>
            <div 
              ref={cardRef2}
              className="backdrop-blur-sm rounded-lg border transition-all hover:border-[#7E4AB850] cursor-pointer bg-[#7E4AB820] border-[#7E4AB830] p-2 md:p-4 w-full" 
              onClick={() => window.open('https://open.spotify.com/track/6VKGiemdhBqc8Ow5jhrbOm?si=561ba92a7a04400a', '_blank')}
            >
              <div className="relative overflow-hidden aspect-square bg-gray-800 rounded-lg mb-2 md:mb-3 w-full">
                <Image
                  src="/thesehollowgraves.png"
                  alt="These Hollow Graves Album Cover"
                  fill
                  sizes="(max-width: 768px) 90vw, 50vw"
                  className={`object-cover transition-all duration-500 ${activeIndex === 1 ? "grayscale-0" : "grayscale"} md:grayscale md:hover:grayscale-0`}
                />
              </div>
              <h3 className="text-white font-bold text-sm md:text-xl mb-4">These Hollow Graves</h3>
              <p className="text-azalea-purple text-xs">2025</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}