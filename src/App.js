
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-900">
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Coral Cat Charters</h1>
          <nav className="space-x-4">
            <a href="#trips" className="hover:text-blue-600">Trips</a>
            <a href="#gallery" className="hover:text-blue-600">Gallery</a>
            <a href="#faq" className="hover:text-blue-600">FAQ</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <a href="#booking" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Book Now</a>
          </nav>
        </div>
      </header>
      <section className="bg-cover bg-center h-[60vh] flex items-center justify-center text-white text-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1518873890627-d4dfd5252190?auto=format&fit=crop&w=1470&q=80)'}}>
        <div className="bg-black bg-opacity-40 p-6 rounded">
          <h2 className="text-4xl font-bold mb-2">Fishing, Diving & Sandbar Charters</h2>
          <p className="text-lg">From Key Largo to Islamorada — Book Your Next Ocean Adventure Today!</p>
        </div>
      </section>
      <section id="trips" className="max-w-6xl mx-auto py-12">
        <h3 className="text-3xl font-bold mb-6">Our Trips</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Half Day Fishing", price: "$600", description: "4 hrs of inshore/offshore fishing. Gear & bait included." },
            { title: "Full Day Fishing", price: "$1100", description: "8 hrs of serious offshore fishing. Target mahi, tuna, more." },
            { title: "Reef Diving", price: "$700", description: "2-tank dive on coral reefs. Dive gear & guide included." },
            { title: "Wreck Diving", price: "$800", description: "Advanced dive to iconic wrecks. Permits and tanks included." },
            { title: "Night Diving", price: "$600", description: "See the reef after dark! 1-2 tank guided dive." },
            { title: "Sandbar Trips", price: "$500", description: "Chill at the sandbar with floats, snorkels, and good vibes." },
          ].map((trip, index) => (
            <div key={index} className="bg-white shadow p-6 rounded">
              <h4 className="text-xl font-semibold mb-2">{trip.title}</h4>
              <p className="text-gray-600 mb-2">{trip.description}</p>
              <p className="font-bold text-blue-600">{trip.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="gallery" className="bg-white py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Photo Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map(i => (
              <img key={i} src={`https://source.unsplash.com/400x300/?ocean,boat,${i}`} alt="trip photo" className="rounded" />
            ))}
          </div>
        </div>
      </section>
      <section id="faq" className="max-w-4xl mx-auto py-12">
        <h3 className="text-3xl font-bold mb-6">FAQ</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">What should we bring?</h4>
            <p>Sun protection, snacks, towel, and good vibes. We provide the rest!</p>
          </div>
          <div>
            <h4 className="font-semibold">Can kids come?</h4>
            <p>Absolutely. We’re family friendly and have kids’ life jackets onboard.</p>
          </div>
          <div>
            <h4 className="font-semibold">Do I need a license?</h4>
            <p>Nope. You’re covered under our commercial fishing license or dive permits.</p>
          </div>
        </div>
      </section>
      <section id="contact" className="bg-blue-100 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Contact & Location</h3>
          <p className="mb-2">Based in Tavernier, FL • Serving Key Largo to Islamorada</p>
          <p className="mb-2">Email: bookings@coralcatcharters.com</p>
          <p>Phone: (305) 555-0199</p>
        </div>
      </section>
      <section id="booking" className="bg-white py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Book?</h3>
          <p className="mb-4">Click below to check availability and lock in your adventure.</p>
          <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Book Now</a>
        </div>
      </section>
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2025 Coral Cat Charters. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
