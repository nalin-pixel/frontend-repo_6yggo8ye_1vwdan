import { useState } from 'react'

function cmToIn(cm) {
  return cm / 2.54
}

function FitFinder({ onResult }) {
  const [underbust, setUnderbust] = useState('')
  const [bust, setBust] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    if (!underbust || !bust) {
      setError('Please enter both measurements.')
      return
    }
    try {
      setLoading(true)
      const res = await fetch(`${baseUrl}/fit/recommend`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ underbust_cm: parseFloat(underbust), bust_cm: parseFloat(bust) })
      })
      if (!res.ok) throw new Error('Failed to get recommendation')
      const data = await res.json()
      onResult?.(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="fit" className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Find your fit</h2>
        <p className="text-slate-200 mt-2">Use two measurements in centimeters for the most accurate starting size.</p>
        <form onSubmit={submit} className="mt-6 grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Snug underbust (cm)</label>
            <input type="number" step="0.1" value={underbust} onChange={e=>setUnderbust(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="e.g. 78" />
            <p className="text-xs text-slate-400 mt-1">≈ {underbust ? cmToIn(parseFloat(underbust)).toFixed(1) : '—'} in</p>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Bust over fullest (cm)</label>
            <input type="number" step="0.1" value={bust} onChange={e=>setBust(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="e.g. 95" />
            <p className="text-xs text-slate-400 mt-1">≈ {bust ? cmToIn(parseFloat(bust)).toFixed(1) : '—'} in</p>
          </div>
          <div className="flex items-end">
            <button disabled={loading} className="w-full h-11 rounded-lg bg-rose-500 hover:bg-rose-600 text-white font-semibold transition-colors disabled:opacity-60">
              {loading ? 'Calculating…' : 'Get recommendation'}
            </button>
          </div>
        </form>
        {error && <p className="text-rose-300 mt-3 text-sm">{error}</p>}
      </div>
    </section>
  )
}

export default FitFinder
