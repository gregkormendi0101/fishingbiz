import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-blue-100 text-gray-800 font-sans">
      <header className="p-6 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-700">🐠 Coral Cat Charters</h1>
        <a href="#book" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Book Now</a>
      </header>

      <section className="text-center py-20 px-4">
        <h2 className="text-5xl font-extrabold mb-4">Adventure Awaits</h2>
        <p className="text-xl mb-6">Snorkel, fish, or chill at the sandbar with the coolest crew in the Keys.</p>
        <img src="https://source.unsplash.com/800x400/?cartoon,ocean" alt="hero" className="mx-auto rounded-lg shadow-lg" />
      </section>

      <section className="px-6 py-12 bg-white text-center">
        <h3 className="text-3xl font-bold mb-6">Why Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div><p className="text-lg">🎣 Expert Captains</p></div>
          <div><p className="text-lg">🏝️ Private Trips</p></div>
          <div><p className="text-lg">🤿 All Gear Included</p></div>
        </div>
      </section>

      <section className="py-12 text-center bg-blue-50">
        <h3 className="text-3xl font-bold mb-6">Top Trips</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="bg-white p-6 shadow rounded"><p>🐟 Half Day Fishing</p><p className="text-sm">$600</p></div>
          <div className="bg-white p-6 shadow rounded"><p>🌊 Reef Snorkeling</p><p className="text-sm">$500</p></div>
          <div className="bg-white p-6 shadow rounded"><p>🍹 Sandbar Escape</p><p className="text-sm">$400</p></div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white text-center">
        <h3 className="text-3xl font-bold mb-6">Happy Guests</h3>
        <blockquote className="italic text-lg">“Best trip of our lives! Captain Greg is the man.”</blockquote>
      </section>

      <section className="py-12 px-4 bg-yellow-50 text-center" id="book">
        <h3 className="text-3xl font-bold mb-4">Book Your Adventure</h3>
        <p className="mb-6">Limited slots fill fast. Reserve your spot today.</p>
        <a href="#" className="bg-yellow-500 text-white px-6 py-3 rounded-full text-xl hover:bg-yellow-600">Let’s Go 🚤</a>
      </section>

      <footer className="bg-blue-800 text-white text-center p-4 mt-12">
        <p>&copy; 2025 Coral Cat Charters</p>
      </footer>
    </div>
  );
}

export default App;