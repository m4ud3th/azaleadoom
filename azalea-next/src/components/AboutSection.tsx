import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="h-screen w-full bg-black flex items-center justify-center relative overflow-hidden">
      {/* Purple organic background shape */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/azaleaflower.png"
          alt=""
          width={700}
          height={400}
          className="object-contain opacity-25"
          style={{ transform: "scale(6.7)", width: "auto" }}
          priority
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        {/* About Section */}
        <div className="mb-24">
          <h2 className="text-7xl font-bold text-white mb-12 tracking-wide">ABOUT AZALEA</h2>
          <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Azalea is a sludge metal band that fuses crushing, slow-burning riffs with a deeper, mysterious view of the good in 
            the world. Their lyrics take you to another dimension, where light and darkness converge and the familiar takes 
            on a strange, new shape. With raw vocals, heavy breakdowns and an atmospheric undertone, Azalea challenges 
            listeners to experience reality from a different perspective. Brutality and reflection go hand in hand, a sonic 
            storm that both devastates and enlightens.
          </p>
        </div>

        {/* New Releases Section */}
        <div>
          <h2 className="text-7xl font-bold text-white mb-16 tracking-wide">NEW RELEASES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="backdrop-blur-sm rounded-lg p-4 border transition-all hover:border-[#7E4AB850]" style={{ backgroundColor: "#7E4AB820", borderColor: "#7E4AB830" }}>
              <div className="aspect-square bg-gray-800 rounded-lg mb-6 relative overflow-hidden">
                <Image
                  src="/loveandpain.png"
                  alt="Album Cover 1"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-white font-bold text-xl mb-4">Latest Album</h3>
              <p style={{ color: "#7E4AB8" }}>2024</p>
            </div>
            <div className="backdrop-blur-sm rounded-lg p-4 border transition-all hover:border-[#7E4AB850]" style={{ backgroundColor: "#7E4AB820", borderColor: "#7E4AB830" }}>
              <div className="aspect-square bg-gray-800 rounded-lg mb-6 relative overflow-hidden">
                <Image
                  src="/thesehollowgraves.png"
                  alt="Album Cover 2"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-white font-bold text-xl mb-4">Previous Release</h3>
              <p style={{ color: "#7E4AB8" }}>2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}