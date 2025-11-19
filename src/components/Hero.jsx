import { Flame } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(244,114,182,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.25),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-rose-300 mb-4">
            <Flame className="w-5 h-5" />
            <span className="uppercase tracking-widest text-xs">For fuller busts</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            High‑fashion lingerie that actually fits
          </h1>
          <p className="mt-5 text-lg text-slate-200 max-w-prose">
            Elevated design, engineered support. Discover pieces crafted for D+ cups without compromising on style.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#fit" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-rose-500 hover:bg-rose-600 text-white font-semibold transition-colors">
              Find your size
            </a>
            <a href="#shop" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur transition-colors">
              Explore collection
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
          <div className="absolute -bottom-6 -left-6 hidden md:block w-40 h-40 rounded-3xl bg-rose-500/20 blur-2xl" />
          <div className="absolute -top-6 -right-6 hidden md:block w-40 h-40 rounded-3xl bg-blue-500/20 blur-2xl" />
        </div>
      </div>
    </section>
  )
}

export default Hero
