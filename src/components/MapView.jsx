import { MapPin } from 'lucide-react'

export default function MapView(){
  return (
    <section id="map" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-10">
        <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white">
          <div className="h-96 w-full relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              <MapPin className="h-5 w-5 mr-2"/> Interactive map placeholder
            </div>
            <iframe
              title="map"
              className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
              src="about:blank"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
