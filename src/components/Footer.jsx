export default function Footer(){
  return (
    <footer className="py-10 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">© {new Date().getFullYear()} XP State. All rights reserved.</p>
        <div className="flex gap-4 text-sm text-gray-600">
          <a href="#listings" className="hover:text-gray-900">Listings</a>
          <a href="#map" className="hover:text-gray-900">Map</a>
          <a href="#brokers" className="hover:text-gray-900">Brokers</a>
        </div>
      </div>
    </footer>
  )
}
