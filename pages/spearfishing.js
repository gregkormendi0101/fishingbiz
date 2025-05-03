import Head from 'next/head';
import Link from 'next/link';

export default function Spearfishing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-800 via-blue-700 to-pink-400 text-white">
      <Head>
        <title>Spearfishing | Two Fins Charters</title>
        <meta name="description" content="Spearfishing adventures with Two Fins Charters in the Upper Keys." />
      </Head>
      <section className="relative flex flex-col items-center justify-center text-center pt-20 pb-12 px-4">
        <div className="absolute inset-0 -z-10">
          <img src="/spearfishing.png" alt="Spearfishing" className="w-full h-full object-cover object-center opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-800/80 via-transparent to-pink-400/30" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Spearfishing</h1>
        <p className="max-w-xl mx-auto text-lg md:text-2xl mb-8 text-cyan-100 drop-shadow">Dive into the clear waters of the Upper Keys and hunt for snapper, grouper, hogfish, and more. Freedive or scuba—our expert guides and top gear make it safe, fun, and unforgettable.</p>
        <a 
          href="https://www.fishingbooker.com/charters/view/123456" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-gradient-to-r from-pink-700 to-yellow-400 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all"
        >
          Book Your Spearfishing Trip
        </a>
      </section>
      <section className="max-w-3xl mx-auto px-4 py-8 text-white/90">
        <h2 className="text-2xl font-bold mb-4">Why Spearfish With Us?</h2>
        <ul className="list-disc list-inside mb-6 text-lg">
          <li>Crystal clear water, reefs, and wrecks</li>
          <li>All equipment provided—just bring your sense of adventure</li>
          <li>Freedive or scuba options available</li>
          <li>Guidance from experienced, safety-focused instructors</li>
          <li>Perfect for both beginners and seasoned hunters</li>
        </ul>
        <img src="/spearfishing.png" alt="Spearfishing Action" className="w-full rounded-2xl shadow-lg mb-6" />
        <p className="mb-4">Spearfishing with Two Fins is the ultimate underwater adventure. Whether you’re new to the sport or a seasoned pro, we’ll help you make memories—and bring home dinner!</p>
        <Link href="/" className="text-cyan-200 underline hover:text-white">← Back to Home</Link>
      </section>
    </div>
  );
}
