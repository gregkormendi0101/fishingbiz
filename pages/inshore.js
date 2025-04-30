import Head from 'next/head';
import Link from 'next/link';

export default function Inshore() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-600 to-blue-200 text-white">
      <Head>
        <title>Inshore Fishing | Two Fins Charters</title>
        <meta name="description" content="Inshore fishing adventures with Two Fins Charters in the Upper Keys." />
      </Head>
      <section className="relative flex flex-col items-center justify-center text-center pt-20 pb-12 px-4">
        <div className="absolute inset-0 -z-10">
          <img src="/inshore.png" alt="Inshore Fishing" className="w-full h-full object-cover object-center opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-transparent to-blue-200/30" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Inshore Fishing</h1>
        <p className="max-w-xl mx-auto text-lg md:text-2xl mb-8 text-cyan-100 drop-shadow">Explore the mangroves, flats, and backcountry for snook, tarpon, redfish, and more. Calm waters, beautiful scenery, and action-packed fishing for all ages and skill levels.</p>
        <Link href="/#contact" className="inline-block bg-gradient-to-r from-cyan-700 to-blue-400 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all">Book Your Inshore Trip</Link>
      </section>
      <section className="max-w-3xl mx-auto px-4 py-8 text-white/90">
        <h2 className="text-2xl font-bold mb-4">Why Go Inshore?</h2>
        <ul className="list-disc list-inside mb-6 text-lg">
          <li>Target snook, tarpon, redfish, trout, snapper, and more</li>
          <li>Perfect for families, kids, and beginners</li>
          <li>Shallow, calm waters and stunning natural beauty</li>
          <li>Light tackle and fly fishing options</li>
          <li>Flexible trip lengths and custom adventures</li>
        </ul>
        <img src="/inshore.png" alt="Inshore Action" className="w-full rounded-2xl shadow-lg mb-6" />
        <p className="mb-4">Inshore fishing is all about fun, variety, and accessibility. Whether you want to sight-cast for tarpon or just enjoy a relaxing day on the water, we’ll make it happen!</p>
        <Link href="/" className="text-cyan-200 underline hover:text-white">← Back to Home</Link>
      </section>
    </div>
  );
}
