import { Home, Search, Map, User } from 'lucide-react'

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/60 backdrop-blur-md border-b border-gray-200/50">
      <div className="container mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-sky-400" />
          <span className="font-semibold text-gray-900">XP State</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          <a href="#listings" className="hover:text-gray-900 flex items-center gap-2"><Home className="h-4 w-4"/>Home</a>
          <a href="#map" className="hover:text-gray-900 flex items-center gap-2"><Map className="h-4 w-4"/>Map</a>
          <a href="#brokers" className="hover:text-gray-900 flex items-center gap-2"><User className="h-4 w-4"/>Brokers</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg border border-gray-200 text-gray-700">
          <Search className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
