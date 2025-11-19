import Hero from './components/Hero'
import FitFinder from './components/FitFinder'
import ProductGrid from './components/ProductGrid'
import Newsletter from './components/Newsletter'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <header className="sticky top-0 z-10 backdrop-blur bg-slate-900/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-white font-extrabold tracking-tight text-xl">atelier:volume</a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#shop" className="text-slate-300 hover:text-white">Shop</a>
            <a href="#fit" className="text-slate-300 hover:text-white">Fit</a>
            <a href="/test" className="text-slate-300 hover:text-white">System</a>
          </nav>
          <button className="px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold hover:bg-rose-50 transition-colors">Sign In</button>
        </div>
      </header>

      <main>
        <Hero />
        <FitFinder />
        <ProductGrid />
        <Newsletter />
      </main>

      <footer className="border-t border-white/10 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-6 text-slate-400 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} atelier:volume — Designed for D+ cups</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Care</a>
            <a href="#" className="hover:text-white">Shipping</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
