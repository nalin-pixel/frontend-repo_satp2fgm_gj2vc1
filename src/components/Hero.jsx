import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-2xl backdrop-blur-sm bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20">
            <span className="inline-flex items-center text-xs uppercase tracking-wider text-white/80 bg-white/10 px-3 py-1 rounded-full mb-4">XP State of Site</span>
            <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
              Effortless, premium real estate discovery
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              Explore cinematic spaces, intelligent search, and immersive 3D tours.
            </p>
            <div className="mt-6 w-full bg-white/10 rounded-xl p-2 backdrop-blur border border-white/20">
              <div className="flex flex-col md:flex-row gap-2">
                <input className="flex-1 px-4 py-3 rounded-lg bg-white/70 md:bg-transparent md:backdrop-blur-0 text-gray-900 placeholder-gray-500 focus:outline-none" placeholder="Search city, neighborhood, or keyword" />
                <input className="w-full md:w-40 px-4 py-3 rounded-lg bg-white/70 md:bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none" placeholder="Min Price" />
                <input className="w-full md:w-40 px-4 py-3 rounded-lg bg-white/70 md:bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none" placeholder="Max Price" />
                <button className="px-5 py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-100 transition">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
    </section>
  )
}
