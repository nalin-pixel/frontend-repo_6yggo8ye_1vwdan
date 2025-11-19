import { useEffect, useState } from 'react'

function ProductCard({ item }) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-rose-400/40 transition-colors">
      <div className="aspect-[4/5] bg-cover bg-center" style={{backgroundImage:`url(${item.hero_image || item.images?.[0] || 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop'})`}} />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold truncate">{item.title}</h3>
          <span className="text-rose-300 font-medium">${item.price.toFixed(2)}</span>
        </div>
        {item.style && <p className="text-slate-300 text-sm mt-1">{item.style}</p>}
        {item.support_level && <p className="text-slate-400 text-xs">Support: {item.support_level}</p>}
        {item.sizes?.length ? (
          <p className="text-slate-400 text-xs mt-2">Sizes: {item.sizes.slice(0,8).join(', ')}{item.sizes.length>8?'…':''}</p>
        ) : null}
        <button className="mt-3 w-full h-10 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors">View details</button>
      </div>
    </div>
  )
}

function ProductGrid() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${baseUrl}/products`)
        if (!res.ok) throw new Error('Failed to load products')
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [baseUrl])

  return (
    <section id="shop" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Featured pieces</h2>
        <a href="#" className="text-sm text-slate-300 hover:text-white">View all</a>
      </div>
      {loading && <p className="text-slate-300">Loading…</p>}
      {error && <p className="text-rose-300">{error}</p>}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <ProductCard key={idx} item={item} />
          ))}
        </div>
      )}
    </section>
  )
}

export default ProductGrid
