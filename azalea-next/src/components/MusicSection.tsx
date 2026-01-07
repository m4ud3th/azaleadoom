import Image from "next/image";

export default function MusicSection() {
  return (
    <section id="music" className="h-screen w-full bg-black flex items-center justify-center relative">
      <div className="absolute inset-0" style={{ background: "linear-gradient(315deg, #7E4AB830 0%, rgba(0,0,0,0.9) 100%)" }} />
      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        <h2 className="text-6xl font-bold text-white mb-12 tracking-wide">NEW RELEASES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="backdrop-blur-sm rounded-lg p-4 border transition-all hover:border-[#7E4AB850]" style={{ backgroundColor: "#7E4AB820", borderColor: "#7E4AB830" }}>
            <div className="aspect-square bg-gray-800 rounded-lg mb-4 relative overflow-hidden">
              <Image
                src="/album1.jpg"
                alt="Album Cover 1"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Latest Album</h3>
            <p style={{ color: "#7E4AB8" }}>2024</p>
          </div>
          <div className="backdrop-blur-sm rounded-lg p-4 border transition-all hover:border-[#7E4AB850]" style={{ backgroundColor: "#7E4AB820", borderColor: "#7E4AB830" }}>
            <div className="aspect-square bg-gray-800 rounded-lg mb-4 relative overflow-hidden">
              <Image
                src="/album2.jpg"
                alt="Album Cover 2"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Previous Release</h3>
            <p style={{ color: "#7E4AB8" }}>2023</p>
          </div>
        </div>
      </div>
    </section>
  );
}