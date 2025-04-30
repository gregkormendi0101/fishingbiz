import Head from 'next/head';
import { Poppins } from 'next/font/google';
import { DM_Serif_Text } from 'next/font/google';
const dmSerif = DM_Serif_Text({ subsets: ['latin'], weight: '400' });

const poppins = Poppins({ subsets: ['latin'], weight: '500' });
import Link from 'next/link';
import { useEffect, useState } from 'react';
const heroImages = ['/hero-image.png', '/hero-image2.png', '/hero-image3.png', '/hero-image4.png', '/hero-image5.png'];
import { Transition } from '@headlessui/react';

export default function Home() {
  const [showLogo, setShowLogo] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
  const handleScroll = () => {
    const heroHeight = window.innerHeight;
    setShowLogo(window.scrollY > heroHeight - 650);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const swipeThreshold = 50;
    if (distance > swipeThreshold) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    } else if (distance < -swipeThreshold) {
      setCurrentImageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
    setTouchStart(null);
    setTouchEnd(null);
  };
  return (
    <div className={`text-gray-700 ${poppins.className} font-semibold`}>
      <Head>
        <title>Two Fins Charters</title>
        <meta 
          name="description" 
          content="Fishing charter business offering inshore and offshore trips." 
        />
      </Head>

      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 w-full bg-white bg-opacity-70 backdrop-blur-md text-black shadow-md z-10 h-12">
          <nav className="container mx-auto flex justify-between items-center h-full px-4">
          <div className="flex items-center space-x-2">
            <Transition
              show={showLogo}
              enter="transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <img src="/logoFull.png" alt="Two Fins Logo" className="h-10 w-auto" />
            </Transition>
          </div>
          <ul className={`flex space-x-4 ${poppins.className}`}>
            <li>
              <Link href="#home" scroll={false} className="hover:text-gray-500 active:text-red-700">
                HOME
              </Link>
            </li>
            <li>
              <Link href="#about" scroll={false} className="hover:text-gray-500 active:text-red-700">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="#trips" scroll={false} className="hover:text-gray-500 active:text-red-700">
                TRIPS
              </Link>
            </li>
            <li>
              <Link href="#contact" scroll={false} className="hover:text-gray-500 active:text-red-700">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative scroll-mt-16">
        <div className="overflow-hidden relative h-[65vh]"
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd}>
          <div className="whitespace-nowrap transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${(currentImageIndex % heroImages.length) * 100}%)` }}>
            {heroImages.map((image, index) => (
              <div
                key={index}
                className="inline-block h-[65vh] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
          </div>
          <div className="absolute top-12 left-0 p-4">
            <img src="/logoFull.png" alt="Two Fins Charters Large Logo" className="h-36 mb-6" />
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
            <button onClick={() => setCurrentImageIndex((prevIndex) => Math.max(prevIndex - 1, 0))} className="text-2xl text-gray-600 hover:text-red-700">‹</button>
            <div className="flex space-x-2">
              {heroImages.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full ${currentImageIndex % heroImages.length === index ? 'bg-red-700' : 'bg-gray-300'}`}
                ></span>
              ))}
            </div>
            <button onClick={() => setCurrentImageIndex((prevIndex) => prevIndex + 1)} className="text-2xl text-gray-600 hover:text-red-700">›</button>
          </div>
        </div>
      </section>
      
      <section className="py-8 bg-stone-100 text-center px-6 md:px-12 lg:px-16">
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${dmSerif.className}`}>
          OFFSHORE, INSHORE FISHING & SPEARFISHING
        </h1>
        <p className="text-gray-700 leading-relaxed max-w-prose mx-auto mb-10">
          Hunt fish. Dive deep. We operate in the Upper Keys with badass gear, expert guides, and real-deal captains. You show up—we handle the rest.
        </p>
        <Link 
          href="#contact" 
          scroll={false} 
          className="bg-red-700 text-white px-6 py-3 font-semibold rounded hover:bg-red-900"
        >
          BOOK NOW
        </Link>
      </section>


      {/* Trips Section */}
      <section id="trips" className="py-16 bg-gray-100 scroll-mt-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <div className="flex flex-col md:flex-row md:space-x-3">
          <div className="mb-6 md:mb-0 flex-1">
              <img 
                src="/offshore.png" 
                alt="Inshore and Offshore" 
                className="w-full h-48 object-cover mb-4 rounded-lg mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">OFFSHORE FISHING</h3>
            </div>
          <div className="mb-6 md:mb-0 flex-1">
              <img 
                src="/spearfishing.png" 
                alt="Quality Equipment" 
                className="w-full h-48 object-cover mb-4 rounded-lg mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">SPEARFISHING</h3>
            </div>
          <div className="flex-1">
              <img 
                src="/inshore.png" 
                alt="Licensed Captains" 
                className="w-full h-48 object-cover mb-4 rounded-lg mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">INSHORE FISHING</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-stone-100 scroll-mt-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
          <div className="md:flex md:space-x-6">
            <div className="bg-white rounded-lg shadow p-6 mb-6 md:mb-0 flex-1">
              <p className="text-gray-800 italic">
                "Had an amazing time! Caught the biggest fish of my life. The crew was fantastic and very 
                helpful. Highly recommend for anyone looking to have a great fishing experience."
              </p>
              <p className="mt-4 font-semibold text-gray-900">- Alex G.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 mb-6 md:mb-0 flex-1">
              <p className="text-gray-800 italic">
                "Our family trip was wonderful. The kids loved it and the captain was very knowledgeable 
                and friendly. We will definitely be back next year!"
              </p>
              <p className="mt-4 font-semibold text-gray-900">- Maria R.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex-1">
              <p className="text-gray-800 italic">
                "Professional crew and excellent service. Everything from booking to the day on the water 
                was top-notch. We had a blast and caught plenty of fish."
              </p>
              <p className="mt-4 font-semibold text-gray-900">- David L.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100 scroll-mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="max-w-md mx-auto space-y-4">
            <div>
              <label className="block text-left text-gray-700">Name</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded px-3 py-2" 
                placeholder="Your Name" 
              />
            </div>
            <div>
              <label className="block text-left text-gray-700">Email</label>
              <input 
                type="email" 
                className="w-full border border-gray-300 rounded px-3 py-2" 
                placeholder="Your Email" 
              />
            </div>
            <div>
              <label className="block text-left text-gray-700">Message</label>
              <textarea 
                className="w-full border border-gray-300 rounded px-3 py-2" 
                rows="4" 
                placeholder="Your Message"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer with Google Map Embed */}
      <footer className="bg-stone-100">
        <div className="container mx-auto px-4 py-8">
          <h3 className="text-xl font-bold text-center mb-4">Find Us</h3>
          <div className="w-full h-64">
            <iframe
              src="https://maps.google.com/maps?q=Key%20Largo&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
          <p className="text-center text-gray-600 mt-4">
            &copy; 2025 Two Fins Charters. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}