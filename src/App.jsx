import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ListingGrid from './components/ListingGrid'
import Brokers from './components/Brokers'
import Booking from './components/Booking'
import MapView from './components/MapView'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <main className="pt-16">
        <Hero />
        <ListingGrid />
        <MapView />
        <Brokers />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}

export default App
