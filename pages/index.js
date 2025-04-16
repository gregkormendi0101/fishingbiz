
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Coral Cat Charters</title>
        <meta name="description" content="Florida Keys fishing, diving & sandbar adventures" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-blue-100 to-teal-100 font-sans">
        <header className="bg-teal-600 text-white p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">🐠 Coral Cat Charters</h1>
          <a href="#book" className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300">Book Now</a>
        </header>

        <section className="text-center py-16 px-4">
          <h2 className="text-4xl font-bold mb-4">Your Ultimate Florida Keys Adventure</h2>
          <p className="text-lg mb-6">Fishing. Diving. Sandbars. All in one epic day.</p>
          <img src="https://source.unsplash.com/800x400/?boat,fun" alt="Hero" className="rounded-lg mx-auto shadow-lg" />
        </section>

        <section className="bg-white py-16 px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">🌴 Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>🎣 Experienced Captains</div>
            <div>🤿 All Gear Included</div>
            <div>🏝️ Custom Adventures</div>
          </div>
        </section>

        <section className="py-16 px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">Top Trips</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded shadow">🐟 Half Day Fishing - $600</div>
            <div className="bg-white p-4 rounded shadow">🌊 Reef Snorkeling - $500</div>
            <div className="bg-white p-4 rounded shadow">🍹 Sandbar Chill - $400</div>
          </div>
        </section>

        <section className="bg-yellow-100 py-16 px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">💬 Testimonials</h3>
          <blockquote className="italic">“Best charter ever! We saw dolphins and caught a huge mahi!”</blockquote>
        </section>

        <section id="book" className="bg-teal-600 text-white py-16 px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
          <p className="mb-6">Limited spots. Book your trip now.</p>
          <a href="tel:+13055550199" className="bg-white text-teal-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100">📞 Call (305) 555-0199</a>
        </section>

        <footer className="bg-gray-900 text-white text-center py-6">
          <p>&copy; 2025 Coral Cat Charters</p>
        </footer>
      </main>
    </>
  )
}
