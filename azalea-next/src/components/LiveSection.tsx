export default function LiveSection() {
  return (
    <section id="live" className="h-screen w-full bg-black flex items-center justify-center relative">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,1) 0%, #7E4AB820 50%, rgba(0,0,0,1) 100%)" }} />
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-6xl font-bold text-white mb-12 tracking-wide">LIVE SHOWS</h2>
        <div className="space-y-6">
          <div className="backdrop-blur-sm rounded-lg p-6 border" style={{ backgroundColor: "#7E4AB820", borderColor: "#7E4AB830" }}>
            <div className="flex justify-between items-center">
              <div className="text-left">
                <h3 className="text-white font-bold text-xl">Venue Name</h3>
                <p style={{ color: "#7E4AB8" }}>City, Country</p>
              </div>
              <div className="text-right">
                <p className="text-white font-bold">March 15, 2024</p>
                <p style={{ color: "#7E4AB8" }}>8:00 PM</p>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-sm rounded-lg p-6 border" style={{ backgroundColor: "#7E4AB820", borderColor: "#7E4AB830" }}>
            <div className="flex justify-between items-center">
              <div className="text-left">
                <h3 className="text-white font-bold text-xl">Festival Name</h3>
                <p style={{ color: "#7E4AB8" }}>City, Country</p>
              </div>
              <div className="text-right">
                <p className="text-white font-bold">April 22, 2024</p>
                <p style={{ color: "#7E4AB8" }}>9:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}