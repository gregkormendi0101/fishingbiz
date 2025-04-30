import Head from 'next/head';
import Link from 'next/link';

export default function Offshore() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 text-white">
      <Head>
        <title>Offshore Fishing | Two Fins Charters</title>
        <meta name="description" content="Offshore fishing adventures with Two Fins Charters in the Upper Keys." />
      </Head>
      <section className="relative flex flex-col items-center justify-center text-center pt-20 pb-12 px-4">
        <div className="absolute inset-0 -z-10">
          <img src="/offshore1.png" alt="Offshore Fishing" className="w-full h-full object-cover object-center opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-cyan-400/30" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Offshore Fishing</h1>
        <p className="max-w-xl mx-auto text-lg md:text-2xl mb-8 text-cyan-100 drop-shadow">Chase pelagics, reel in monsters, and experience the thrill of deep water fishing in the beautiful blue waters of the Upper Keys. Our expert crew and top-tier gear make every trip unforgettable.</p>
        <Link href="/#contact" className="inline-block bg-gradient-to-r from-blue-700 to-cyan-400 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all">Book Your Offshore Adventure</Link>
      </section>
      <section className="max-w-3xl mx-auto px-4 py-8 text-white/90">
        <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
        <ul className="list-disc list-inside mb-6 text-lg">
          <li>Target species: mahi, tuna, wahoo, sailfish, snapper, grouper, and more</li>
          <li>State-of-the-art rods, reels, and tackle provided</li>
          <li>Comfortable, fully-equipped boat with shade and seating</li>
          <li>Expert guidance from seasoned captains</li>
          <li>All skill levels welcome</li>
        </ul>
        <img src="/offshore.png" alt="Offshore Action" className="w-full rounded-2xl shadow-lg mb-6" />
        <p className="mb-4">Whether you’re after a trophy catch or just want to experience the excitement of offshore fishing, we’ll put you on the fish and make sure you have a blast. Bring your friends, family, or just yourself—adventure awaits!</p>
        <Link href="/" className="text-cyan-200 underline hover:text-white">← Back to Home</Link>
      </section>
    </div>
  );
}
