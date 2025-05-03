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
  const [isTransitioning, setIsTransitioning] = useState(false);

  const extendedImages = [heroImages[heroImages.length - 1], ...heroImages, heroImages[0]];

  const [sliderIndex, setSliderIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    const formData = new FormData(e.target);
    const formDataObj = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObj),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setFormStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      
      // Reset form
      e.target.reset();
      
      // Auto-hide success message after a few seconds
      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          submitted: false
        }));
      }, 5000);

    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus({
        submitting: false,
        submitted: false,
        error: error.message || 'Something went wrong. Please try again.'
      });
    }
  };

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
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setTransitioning(true);
    setSliderIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setTransitioning(true);
    setSliderIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setTransitioning(false);
    // If we've reached the clone at the end, jump to the real first slide without transition
    if (sliderIndex >= extendedImages.length - 1) {
      setSliderIndex(1);
    }
    // If we've reached the clone at the beginning, jump to the real last slide without transition
    else if (sliderIndex <= 0) {
      setSliderIndex(extendedImages.length - 2);
    }
  };

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const swipeThreshold = 50;
    if (distance > swipeThreshold) {
      nextSlide();
    } else if (distance < -swipeThreshold) {
      prevSlide();
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
        <link rel="icon" href="/favicon.ico" />
        {/* Add Font Awesome for the phone icon */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      {/* Floating Call Now Button */}
      <a 
        href="tel:+13058421045" 
        className="fixed top-16 right-6 hover:scale-110 transition-transform duration-300 z-50"
        aria-label="Call Now"
      >
        <img src="/phone-icon.png" alt="Call Now" className="h-20 w-20 drop-shadow-lg" />
      </a>

      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 w-full bg-white bg-opacity-70 backdrop-blur-md text-black shadow-md z-50 h-12">
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
              <img src="/logoBig.png" alt="Two Fins Logo" className="h-10 w-auto" />
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
      <section id="home" className="relative scroll-mt-16 min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img src="/hero-image1.png" alt="Hero Background" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-700/60 to-cyan-500/40" />
        </div>
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center py-8 px-2 sm:px-0">
          {/* Logo positioned half on the slider */}
          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-[-25px] z-20">
              <img src="/logoBig.png" alt="Two Fins Logo" className="h-40 drop-shadow-2xl animate-fade-in" />
            </div>
            
            <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-2xl mb-20 px-0 mt-14">
              <div
                className="flex w-full"
                style={{
                  transform: `translateX(-${sliderIndex * 100}%)`,
                  transition: transitioning ? 'transform 1s cubic-bezier(0.4,0,0.2,1)' : 'none',
                  willChange: 'transform',
                  backfaceVisibility: 'hidden'
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedImages.map((image, index) => (
                  <div
                    key={index}
                    className="w-full h-[45vh] md:h-[60vh] flex-shrink-0 flex-grow-0 align-top relative group"
                    style={{ minWidth: '100%' }}
                  >
                    <img src={image} alt="Hero Slide" className="w-full h-full object-cover object-center rounded-3xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-cyan-400/20 group-hover:from-pink-700/60 transition-all duration-500 rounded-3xl" />
                  </div>
                ))}
              </div>
              {/* Slider Controls */}
              <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-pink-600/80 text-3xl rounded-full p-2 shadow-lg z-20 transition-all duration-200">
                ‹
              </button>
              <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-pink-600/80 text-3xl rounded-full p-2 shadow-lg z-20 transition-all duration-200">
                ›
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {heroImages.map((_, index) => (
                  <span
                    key={index}
                    className={`h-3 w-3 rounded-full border-2 border-white ${sliderIndex === index + 1 ? 'bg-pink-600' : 'bg-white/60'}`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
          <h1 className={`text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg ${dmSerif.className}`}>Hunt Fish. Dive Deep.</h1>
          <p className="text-xl md:text-2xl text-cyan-100 mb-10 max-w-2xl mx-auto animate-fade-in-slow">Upper Keys fishing & spearfishing with badass gear, expert guides, and real-deal captains. You show up—we handle the rest.</p>
          <a 
            href="https://www.fishingbooker.com/charters/view/123456" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block hover:scale-105 transition-transform duration-300 drop-shadow-xl"
          >
            <img src="/booknow-tuna.png" alt="BOOK NOW" className="h-75 w-auto" />
          </a>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900 to-transparent pointer-events-none" />
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 bg-stone-100 text-center px-6 md:px-12 lg:px-16 mt-0 scroll-mt-16">
        <div className="container mx-auto">
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-8 text-blue-900 ${dmSerif.className}`}>About Two Fins</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/about-us.png" 
                alt="Two Fins Charters Team" 
                className="rounded-2xl shadow-xl w-full max-w-lg mx-auto"
              />
            </div>
            <div className="md:w-1/2 text-left">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">OFFSHORE, INSHORE FISHING & SPEARFISHING</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Hunt fish. Dive deep. We operate in the Upper Keys with badass gear, expert guides, and real-deal captains. You show up—we handle the rest.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Two Fins Charters was born from a passion for the ocean and a desire to share the incredible fishing and diving experiences the Florida Keys has to offer. Our experienced team consists of licensed captains and guides who know these waters like the back of their hands.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether you're looking to battle offshore pelagics, stalk the flats for trophy fish, or dive into the clear waters for a spearfishing adventure, we provide top-quality equipment and unforgettable experiences tailored to your skill level.
              </p>
              <div className="flex gap-4 mt-8">
                <a 
                  href="https://www.fishingbooker.com/charters/view/123456" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
                >
                  Book a Trip
                </a>
                <Link href="#trips" scroll={false} className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all">
                  View Our Trips
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trips Section */}
      <section id="trips" className="py-8 bg-gradient-to-br from-blue-50 via-cyan-100 to-blue-200 scroll-mt-16 mt-0">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-12 text-blue-900 drop-shadow ${dmSerif.className}`}>Oceanic Adventures</h2>
          <div className="flex flex-col md:flex-row md:space-x-8 gap-8 md:gap-0 justify-center">
            <div className="group relative bg-white/90 rounded-3xl shadow-2xl p-6 flex-1 hover:scale-105 hover:shadow-blue-400/40 transition-all duration-300 border-2 border-blue-100">
              <img 
                src="/offshore1.png" 
                alt="Offshore Fishing" 
                className="w-full h-56 object-cover object-top mb-6 rounded-2xl shadow-lg group-hover:brightness-110 group-hover:scale-105 transition-all duration-300"
              />
              <h3 className="text-2xl font-bold text-blue-800 mb-2 tracking-wide">OFFSHORE FISHING</h3>
              <p className="text-blue-700 mb-4">Big game, deep water, adrenaline. Chase pelagics and trophy fish offshore with our expert crew.</p>
              <span className="inline-block bg-gradient-to-r from-blue-700 to-cyan-400 text-white px-4 py-2 rounded-full font-semibold text-sm shadow hover:from-cyan-400 hover:to-blue-700 transition-all">
                <Link href="/offshore">Learn More</Link>
              </span>
            </div>
            <div className="group relative bg-white/90 rounded-3xl shadow-2xl p-6 flex-1 hover:scale-105 hover:shadow-cyan-400/40 transition-all duration-300 border-2 border-cyan-100">
              <img 
                src="/spearfishing.png" 
                alt="Spearfishing" 
                className="w-full h-56 object-cover object-top mb-6 rounded-2xl shadow-lg group-hover:brightness-110 group-hover:scale-105 transition-all duration-300"
              />
              <h3 className="text-2xl font-bold text-cyan-800 mb-2 tracking-wide">SPEARFISHING</h3>
              <p className="text-cyan-700 mb-4">Crystal clear water, reefs, and wrecks. Freedive or scuba for the ultimate underwater hunt.</p>
              <span className="inline-block bg-gradient-to-r from-cyan-700 to-blue-400 text-white px-4 py-2 rounded-full font-semibold text-sm shadow hover:from-blue-400 hover:to-cyan-700 transition-all">
                <Link href="/spearfishing">Learn More</Link>
              </span>
            </div>
            <div className="group relative bg-white/90 rounded-3xl shadow-2xl p-6 flex-1 hover:scale-105 hover:shadow-pink-400/40 transition-all duration-300 border-2 border-pink-100">
              <img 
                src="/inshore.png" 
                alt="Inshore Fishing" 
                className="w-full h-56 object-cover object-top mb-6 rounded-2xl shadow-lg group-hover:brightness-110 group-hover:scale-105 transition-all duration-300"
              />
              <h3 className="text-2xl font-bold text-pink-800 mb-2 tracking-wide">INSHORE FISHING</h3>
              <p className="text-pink-700 mb-4">Shallow water, mangroves, and flats. Target snook, tarpon, and more in the scenic backcountry.</p>
              <span className="inline-block bg-gradient-to-r from-pink-700 to-yellow-400 text-white px-4 py-2 rounded-full font-semibold text-sm shadow hover:from-yellow-400 hover:to-pink-700 transition-all">
                <Link href="/inshore">Learn More</Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Gallery Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900">Follow Us On Instagram</h2>
          <p className="mb-8 text-gray-600">@twofinspro</p>
          {/* LightWidget Instagram Embed */}
          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-lg">
            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            <iframe src="//lightwidget.com/widgets/0b289165e002597ea89bc6693abf39e0.html" scrolling="no" allowtransparency="true" className="lightwidget-widget" style={{width:'100%', border:0, overflow:'hidden'}}></iframe>
          </div>
          <div className="mt-8">
            <a href="https://www.instagram.com/twofinspro/?igsh=eHI4cDd6ZmV2aWEy" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-blue-700 to-cyan-400 text-white px-6 py-2 rounded-full font-semibold shadow hover:scale-105 transition">See More On Instagram</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 scroll-mt-16 mt-0">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-white drop-shadow-lg">Testimonials</h2>
          <div className="flex flex-col md:flex-row md:space-x-4 gap-6 md:gap-0 justify-center items-center md:items-stretch">
            <div className="bg-white/90 rounded-xl shadow p-4 mb-6 md:mb-0 flex-1 flex flex-col items-center max-w-xs w-full">
              <p className="text-gray-800 italic text-sm mb-2 text-center">"Had an amazing time! Caught the biggest fish of my life. The crew was fantastic and very helpful. Highly recommend for anyone looking to have a great fishing experience."</p>
              <p className="font-semibold text-blue-900 text-xs text-center">- Alex G.</p>
            </div>
            <div className="bg-white/90 rounded-xl shadow p-4 mb-6 md:mb-0 flex-1 flex flex-col items-center max-w-xs w-full">
              <p className="text-gray-800 italic text-sm mb-2 text-center">"Our family trip was wonderful. The kids loved it and the captain was very knowledgeable and friendly. We will definitely be back next year!"</p>
              <p className="font-semibold text-cyan-900 text-xs text-center">- Maria R.</p>
            </div>
            <div className="bg-white/90 rounded-xl shadow p-4 flex-1 flex flex-col items-center max-w-xs w-full">
              <p className="text-gray-800 italic text-sm mb-2 text-center">"Professional crew and excellent service. Everything from booking to the day on the water was top-notch. We had a blast and caught plenty of fish."</p>
              <p className="font-semibold text-pink-900 text-xs text-center">- David L.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100 scroll-mt-16 mt-0">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-left text-gray-700">Name</label>
              <input 
                type="text" 
                name="name"
                className="w-full border border-gray-300 rounded px-3 py-2" 
                placeholder="Your Name" 
                required
              />
            </div>
            <div>
              <label className="block text-left text-gray-700">Email</label>
              <input 
                type="email" 
                name="email"
                className="w-full border border-gray-300 rounded px-3 py-2" 
                placeholder="Your Email" 
                required
              />
            </div>
            <div>
              <label className="block text-left text-gray-700">Message</label>
              <textarea 
                name="message"
                className="w-full border border-gray-300 rounded px-3 py-2" 
                rows="4" 
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 cursor-pointer"
              disabled={formStatus.submitting}
            >
              {formStatus.submitting ? 'Sending...' : 'Send Message'}
            </button>
            {formStatus.error && <p className="text-red-500 mt-2">{formStatus.error}</p>}
            {formStatus.submitted && <p className="text-green-500 mt-2">Message sent successfully!</p>}
          </form>
        </div>
      </section>

      {/* Footer with Google Map Embed */}
      <footer className="bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 text-white mt-0">
        <div className="container mx-auto px-4 py-12">
          <h3 className="text-2xl font-bold text-center mb-6">Find Us</h3>
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg mb-6">
            <iframe
              src="https://maps.google.com/maps?q=Key%20Largo&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://www.instagram.com/twofinspro?igsh=eHI4cDd6ZmV2aWEy" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors text-2xl">
              <i className="fab fa-instagram"></i>Instagram
            </a>
            <a href="https://www.facebook.com/people/Two-Fins-Pro-Charters/61575298637006/?mibextid=wwXIfr&rdid=LdVMUPPjXBu0rfc0&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252F166KYnn6Kn%252F%253Fmibextid%253DwwXIfr&checkpoint_src=any" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors text-2xl">
              <i className="fab fa-facebook"></i>Facebook
            </a>
            <a href="#" className="hover:text-cyan-300 transition-colors text-2xl"><i className="fab fa-tiktok"></i>TikTok</a>
          </div>
          <p className="text-center text-cyan-100 mt-4">
            &copy; 2025 Two Fins Charters. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}