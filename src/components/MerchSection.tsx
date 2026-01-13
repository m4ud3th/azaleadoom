export default function MerchSection() {
  return (
    <section id="merch" className="min-h-screen md:min-h-[calc(100vh-96px)] w-full bg-black flex items-start justify-center relative overflow-hidden pt-[100px] md:pt-[120px] pb-8">
      <div className="absolute inset-0 bg-[linear-gradient(315deg,#7E4AB830_0%,rgba(0,0,0,0.9)_100%)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center min-h-[90vh] md:min-h-0 flex flex-col justify-start space-y-12 md:space-y-20">
        <div className="min-h-[40vh] flex flex-col justify-center">
          <h2 className="text-3xl md:text-6xl font-bold text-white tracking-wide mb-4 md:mb-8">MERCHANDISE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="backdrop-blur-sm rounded-lg p-4 md:p-6 border transition-all hover:border-[#7E4AB850] bg-[#7E4AB820] border-[#7E4AB830]">
            <div className="aspect-square bg-gray-800 rounded-lg mb-4 relative overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-white text-sm md:text-base">T-Shirt</div>
            </div>
            <h3 className="text-white font-bold text-lg md:text-xl mb-2">Band T-Shirt</h3>
            <p className="text-azalea-purple">€25.00</p>
          </div>
          <div className="backdrop-blur-sm rounded-lg p-4 md:p-6 border transition-all hover:border-[#7E4AB850] bg-[#7E4AB820] border-[#7E4AB830]">
            <div className="aspect-square bg-gray-800 rounded-lg mb-4 relative overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-white text-sm md:text-base">Hoodie</div>
            </div>
            <h3 className="text-white font-bold text-lg md:text-xl mb-2">Band Hoodie</h3>
            <p className="text-azalea-purple">€45.00</p>
          </div>
          <div className="backdrop-blur-sm rounded-lg p-4 md:p-6 border transition-all hover:border-[#7E4AB850] bg-[#7E4AB820] border-[#7E4AB830]">
            <div className="aspect-square bg-gray-800 rounded-lg mb-4 relative overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-white text-sm md:text-base">Vinyl</div>
            </div>
            <h3 className="text-white font-bold text-lg md:text-xl mb-2">Vinyl Record</h3>
            <p className="text-azalea-purple">€30.00</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}