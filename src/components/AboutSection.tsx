import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen w-full bg-black flex items-start justify-center relative overflow-hidden py-8 md:py-0">
      {/* Purple organic background shape */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/azaleaflower.png"
          alt=""
          width={700}
          height={400}
          className="object-contain opacity-25"
          style={{ 
            width: "auto", 
            minHeight: "60vh",
            transform: "scale(1.5)"
          }}
          priority
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center min-h-[90vh] flex flex-col justify-start" style={{ paddingTop: '60px', marginLeft: '1.5rem', marginRight: '1.5rem' }}>
        {/* About Section */}
        <div className="min-h-[40vh] flex flex-col justify-center" style={{ marginBottom: '1rem' }}>
          <h2 className="text-2xl md:text-6xl font-bold text-white tracking-wide" style={{ marginBottom: '1.5rem' }}>ABOUT AZALEA</h2>
          <p className="text-white text-xs md:text-base leading-relaxed max-w-4xl mx-auto" style={{ marginLeft: '1rem', marginRight: '1rem' }}>
            Azalea is a sludge metal band that fuses crushing, slow-burning riffs with a deeper, mysterious view of the good in 
            the world. Their lyrics take you to another dimension, where light and darkness converge and the familiar takes 
            on a strange, new shape. With raw vocals, heavy breakdowns and an atmospheric undertone, Azalea challenges 
            listeners to experience reality from a different perspective. Brutality and reflection go hand in hand, a sonic 
            storm that both devastates and enlightens.
          </p>
        </div>

        {/* New Releases Section */}
        <div className="min-h-[40vh] flex flex-col justify-start" style={{ marginBottom: '2rem' }}>
          <h2 className="text-2xl md:text-6xl font-bold text-white tracking-wide" style={{ marginBottom: '1.5rem' }}>NEW RELEASES</h2>
          <div className="flex justify-center w-full" style={{ marginLeft: '1rem', marginRight: '1rem' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 max-w-xl w-full">
            <div 
              className="backdrop-blur-sm rounded-lg border transition-all hover:border-[#7E4AB850] cursor-pointer" 
              style={{ backgroundColor: "#7E4AB820", borderColor: "#7E4AB830", padding: '1rem' }}
              onClick={() => window.open('https://open.spotify.com/track/55wp0T63NAchDk3vtFVqWY?si=9ccdbeca9e7c49f7', '_blank')}
            >
              <div className="aspect-square bg-gray-800 rounded-lg relative overflow-hidden" style={{ marginBottom: '0.75rem' }}>
                <Image
                  src="/loveandpain.png"
                  alt="Love and Pain Album Cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-white font-bold text-sm md:text-lg" style={{ marginBottom: '0.5rem' }}>Love and Pain</h3>
              <p style={{ color: "#7E4AB8", fontSize: '0.75rem' }}>2025</p>
            </div>
            <div 
              className="backdrop-blur-sm rounded-lg border transition-all hover:border-[#7E4AB850] cursor-pointer" 
              style={{ backgroundColor: "#7E4AB820", borderColor: "#7E4AB830", padding: '1rem' }}
              onClick={() => window.open('https://open.spotify.com/track/6VKGiemdhBqc8Ow5jhrbOm?si=561ba92a7a04400a', '_blank')}
            >
              <div className="aspect-square bg-gray-800 rounded-lg relative overflow-hidden" style={{ marginBottom: '0.75rem' }}>
                <Image
                  src="/thesehollowgraves.png"
                  alt="These Hollow Graves Album Cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-white font-bold text-sm md:text-xl" style={{ marginBottom: '1rem' }}>These Hollow Graves</h3>
              <p style={{ color: "#7E4AB8", fontSize: '0.75rem' }}>2025</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}