import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [status, setStatus] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      const res = await fetch(`${baseUrl}/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, first_name: firstName, source: 'landing' })
      })
      if (!res.ok) throw new Error('Sign up failed')
      setStatus('Thanks — you’re in!')
      setEmail('')
      setFirstName('')
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="bg-gradient-to-br from-rose-500/20 to-blue-500/20 border border-white/10 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white">Join the waitlist</h3>
        <p className="text-slate-200 mt-1">Be first to shop new drops, size expansions, and limited editions.</p>
        <form onSubmit={submit} className="mt-6 grid sm:grid-cols-[1fr_auto_auto] gap-3">
          <input value={firstName} onChange={e=>setFirstName(e.target.value)} placeholder="First name" className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500" />
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email address" required className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500" />
          <button className="px-6 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-rose-50 transition-colors">Notify me</button>
        </form>
        {status && <p className="text-slate-200 mt-3">{status}</p>}
      </div>
    </section>
  )
}

export default Newsletter
