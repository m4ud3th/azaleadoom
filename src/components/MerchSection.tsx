export default function MerchSection() {
  return (
    <section id="merch" className="h-screen w-full bg-black flex items-start justify-center relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(315deg, #7E4AB830 0%, rgba(0,0,0,0.9) 100%)" }} />
      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center min-h-[90vh] flex flex-col justify-start space-y-20" style={{ paddingTop: '140px' }}>
        <div className="min-h-[40vh] flex flex-col justify-center">
          <h2 className="text-6xl font-bold text-white tracking-wide" style={{ marginBottom: '2rem' }}>MERCHANDISE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="backdrop-blur-sm rounded-lg p-6 border transition-all hover:border-[#7E4AB850]" style={{ backgroundColor: "#7E4AB820", borderColor: "#7E4AB830" }}>
            <div className="aspect-square bg-gray-800 rounded-lg mb-4 relative overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-white">T-Shirt</div>
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Band T-Shirt</h3>
            <p style={{ color: "#7E4AB8" }}>€25.00</p>
          </div>
          <div className="backdrop-blur-sm rounded-lg p-6 border transition-all hover:border-[#7E4AB850]" style={{ backgroundColor: "#7E4AB820", borderColor: "#7E4AB830" }}>
            <div className="aspect-square bg-gray-800 rounded-lg mb-4 relative overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-white">Hoodie</div>
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Band Hoodie</h3>
            <p style={{ color: "#7E4AB8" }}>€45.00</p>
          </div>
          <div className="backdrop-blur-sm rounded-lg p-6 border transition-all hover:border-[#7E4AB850]" style={{ backgroundColor: "#7E4AB820", borderColor: "#7E4AB830" }}>
            <div className="aspect-square bg-gray-800 rounded-lg mb-4 relative overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-white">Vinyl</div>
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Vinyl Record</h3>
            <p style={{ color: "#7E4AB8" }}>€30.00</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}