import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Booking(){
  const [form,setForm]=useState({name:'',email:'',phone:'',preferred_date:'',preferred_time:'',notes:'', property_id:''})
  const [status,setStatus]=useState(null)

  async function submit(e){
    e.preventDefault()
    setStatus('Submitting...')
    try{
      const res = await fetch(`${API}/api/bookings`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)})
      const data = await res.json()
      if(res.ok){ setStatus('Booked! Reference created.') }
      else { setStatus(data.detail || 'Error') }
    }catch(err){ setStatus('Network error') }
  }

  return (
    <section id="booking" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="rounded-2xl border border-gray-200 p-6 md:p-8 bg-gray-50">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Book a Site Visit</h3>
          <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required className="px-4 py-3 rounded-lg border border-gray-200" placeholder="Full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
            <input required type="email" className="px-4 py-3 rounded-lg border border-gray-200" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
            <input className="px-4 py-3 rounded-lg border border-gray-200" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/>
            <input className="px-4 py-3 rounded-lg border border-gray-200" placeholder="Property ID (optional)" value={form.property_id} onChange={e=>setForm({...form,property_id:e.target.value})}/>
            <input required type="date" className="px-4 py-3 rounded-lg border border-gray-200" value={form.preferred_date} onChange={e=>setForm({...form,preferred_date:e.target.value})}/>
            <input required type="time" className="px-4 py-3 rounded-lg border border-gray-200" value={form.preferred_time} onChange={e=>setForm({...form,preferred_time:e.target.value})}/>
            <textarea className="md:col-span-2 px-4 py-3 rounded-lg border border-gray-200" placeholder="Notes" value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})}/>
            <div className="md:col-span-2 flex items-center gap-3">
              <button className="px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-black">Book visit</button>
              {status && <span className="text-sm text-gray-600">{status}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
