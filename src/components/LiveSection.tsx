export default function LiveSection() {
  return (
    <section id="live" className="min-h-screen w-full bg-black flex items-start justify-center relative overflow-hidden pt-[120px] pb-8">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,1)_0%,#7E4AB820_50%,rgba(0,0,0,1)_100%)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-8 text-center min-h-[90vh] flex flex-col justify-start space-y-12 md:space-y-20">
        <div className="min-h-[40vh] flex flex-col justify-center">
          <h2 className="text-3xl md:text-6xl font-bold text-white tracking-wide mb-4 md:mb-8">LIVE SHOWS</h2>
        <div className="space-y-4 md:space-y-6">
          <div className="backdrop-blur-sm rounded-lg p-4 md:p-6 border bg-[#7E4AB820] border-[#7E4AB830]">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
              <div className="text-left">
                <h3 className="text-white font-bold text-lg md:text-xl">Venue Name</h3>
                <p className="text-azalea-purple">City, Country</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-white font-bold">March 15, 2024</p>
                <p className="text-azalea-purple">8:00 PM</p>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-sm rounded-lg p-4 md:p-6 border bg-[#7E4AB820] border-[#7E4AB830]">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
              <div className="text-left">
                <h3 className="text-white font-bold text-base md:text-xl">Festival Name</h3>
                <p className="text-azalea-purple text-sm">City, Country</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-white font-bold text-sm md:text-base">April 22, 2024</p>
                <p className="text-azalea-purple text-sm">9:30 PM</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}