import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

function formatPrice(v){
  return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(v||0)
}

export default function ListingGrid(){
  const [items,setItems]=useState([])
  const [loading,setLoading]=useState(true)
  const [filters,setFilters]=useState({ q:'', min_price:'', max_price:'' })

  useEffect(()=>{
    fetch(`${API}/api/properties/sample`).then(r=>r.json()).then(d=>{
      setItems(d.items||[])
      setLoading(false)
    }).catch(()=>setLoading(false))
  },[])

  const filtered = items.filter(p=>{
    const q = (filters.q||'').toLowerCase()
    const okQ = !q || p.title?.toLowerCase().includes(q) || p.city?.toLowerCase().includes(q)
    const okMin = !filters.min_price || p.price >= Number(filters.min_price)
    const okMax = !filters.max_price || p.price <= Number(filters.max_price)
    return okQ && okMin && okMax
  })

  return (
    <section id="listings" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Featured Listings</h2>
            <p className="text-gray-600">Curated homes designed for modern urban living</p>
          </div>
          <div className="flex gap-2">
            <input value={filters.q} onChange={e=>setFilters({...filters,q:e.target.value})} className="px-4 py-2 rounded-lg border border-gray-200" placeholder="Search" />
            <input value={filters.min_price} onChange={e=>setFilters({...filters,min_price:e.target.value})} className="px-4 py-2 rounded-lg border border-gray-200 w-36" placeholder="Min" />
            <input value={filters.max_price} onChange={e=>setFilters({...filters,max_price:e.target.value})} className="px-4 py-2 rounded-lg border border-gray-200 w-36" placeholder="Max" />
          </div>
        </div>

        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p=> (
              <article key={p.id} className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition bg-white">
                <div className="relative h-52 bg-gradient-to-br from-slate-200 to-slate-100">
                  {/* Image placeholder */}
                  {p.images?.[0] ? (
                    <img src={p.images[0]} alt={p.title} className="h-full w-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">No image</div>
                  )}
                  {p.tour_3d_url && (
                    <span className="absolute top-3 left-3 text-xs bg-black/70 text-white px-2 py-1 rounded">3D Tour</span>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">{p.title}</h3>
                    <span className="text-indigo-600 font-bold">{formatPrice(p.price)}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{p.city} • {p.bedrooms} bd • {p.bathrooms} ba • {p.area_sqft} sqft</p>
                  <div className="mt-4 flex gap-2">
                    {p.tags?.slice(0,3).map(t=> <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{t}</span>)}
                  </div>
                  <div className="mt-4 flex gap-2">
                    {p.tour_3d_url && (
                      <a href={p.tour_3d_url} target="_blank" className="px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm">View 3D</a>
                    )}
                    <a href="#booking" className="px-3 py-2 rounded-lg bg-gray-900 text-white text-sm hover:bg-black">Book visit</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
