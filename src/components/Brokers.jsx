import { ShieldCheck, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Brokers(){
  const [items,setItems]=useState([])
  useEffect(()=>{
    fetch(`${API}/api/brokers`).then(r=>r.json()).then(d=>setItems(d.items||[])).catch(()=>{})
  },[])

  return (
    <section id="brokers" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Trusted Brokers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.length === 0 ? (
            <div className="text-gray-500">No brokers yet.</div>
          ) : items.map(b => (
            <div key={b.id} className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="flex items-center gap-3">
                <img src={b.avatar_url || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(b.name||'Agent')}`} alt={b.name} className="h-12 w-12 rounded-full object-cover"/>
                <div>
                  <p className="font-semibold text-gray-900">{b.name}</p>
                  <p className="text-gray-600 text-sm">{b.title || 'Broker'}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-amber-500">
                <Star className="h-4 w-4 fill-current"/> <span className="text-sm font-medium">{(b.rating||4.8).toFixed(1)}</span>
                <span className="text-xs text-gray-500">({b.reviews_count||0} reviews)</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {(b.badges||['Verified']).map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">
                    <ShieldCheck className="h-3 w-3"/> {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
