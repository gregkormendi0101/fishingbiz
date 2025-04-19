import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fishing Charter</title>
        <meta 
          name="description" 
          content="Fishing charter business offering inshore and offshore trips." 
        />
      </Head>

      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 w-full bg-blue-900 text-white z-10">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-xl font-bold">Fishing Charter</div>
          <ul className="flex space-x-4">
            <li>
              <Link href="#home" scroll={false} className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" scroll={false} className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="#trips" scroll={false} className="hover:text-gray-300">
                Trips
              </Link>
            </li>
            <li>
              <Link href="#contact" scroll={false} className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        className="h-screen flex items-center justify-center bg-cover bg-center relative scroll-mt-16" 
        style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?fishing)' }}
      >
        {/* Dark overlay */}
        <div className="bg-black bg-opacity-50 absolute top-0 left-0 w-full h-full"></div>
        <div className="relative z-10 text-center text-white p-4 flex flex-col items-center">
          {/* Logo (placeholder image) */}
          <img 
            src="https://via.placeholder.com/150x50?text=Logo" 
            alt="Fishing Charter Logo" 
            className="h-auto mb-4" 
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Experience the Best Fishing Adventures
          </h1>
          <p className="text-xl mb-6">
            Join us for an unforgettable day on the water.
          </p>
          <Link 
            href="#contact" 
            scroll={false} 
            className="bg-yellow-500 text-black px-6 py-3 font-semibold rounded hover:bg-yellow-600"
          >
            Book a Trip
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white scroll-mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-gray-700 leading-relaxed max-w-prose mx-auto">
            We are a premier fishing charter offering inshore and offshore adventures in Florida. 
            Our experienced crew and comfortable vessels ensure that you'll have a safe and memorable 
            fishing experience. Whether you're a seasoned angler or a first-timer, we provide all the 
            gear and guidance you need for a great day on the water.
          </p>
        </div>
      </section>

      {/* Trips Section */}
      <section id="trips" className="py-16 bg-gray-100 scroll-mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Trips</h2>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="bg-white rounded shadow p-6 mb-6 md:mb-0 flex-1">
              <img 
                src="https://source.unsplash.com/400x300/?fishing-boat" 
                alt="Inshore and Offshore" 
                className="w-full h-48 object-cover mb-4 rounded" 
              />
              <h3 className="text-xl font-semibold mb-2">Inshore & Offshore</h3>
              <p className="text-gray-600">
                From calm inshore waters to deep-sea fishing, we offer a range of trips 
                to suit all preferences and skill levels.
              </p>
            </div>
            <div className="bg-white rounded shadow p-6 mb-6 md:mb-0 flex-1">
              <img 
                src="https://source.unsplash.com/400x300/?fishing-rod" 
                alt="Quality Equipment" 
                className="w-full h-48 object-cover mb-4 rounded" 
              />
              <h3 className="text-xl font-semibold mb-2">Quality Equipment</h3>
              <p className="text-gray-600">
                We provide top-of-the-line rods, reels, and tackle. Our boats are well-maintained 
                and fully equipped for your comfort and safety.
              </p>
            </div>
            <div className="bg-white rounded shadow p-6 flex-1">
              <img 
                src="https://source.unsplash.com/400x300/?fishing-guide" 
                alt="Licensed Captains" 
                className="w-full h-48 object-cover mb-4 rounded" 
              />
              <h3 className="text-xl font-semibold mb-2">Licensed Captains</h3>
              <p className="text-gray-600">
                Our experienced captains are fully licensed and know the best fishing spots. They are 
                committed to providing a fun and safe trip for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white scroll-mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
          <div className="md:flex md:space-x-6">
            <div className="bg-gray-100 rounded p-6 mb-6 md:mb-0 flex-1">
              <p className="text-gray-800 italic">
                "Had an amazing time! Caught the biggest fish of my life. The crew was fantastic and very 
                helpful. Highly recommend for anyone looking to have a great fishing experience."
              </p>
              <p className="mt-4 font-semibold text-gray-900">- Alex G.</p>
            </div>
            <div className="bg-gray-100 rounded p-6 mb-6 md:mb-0 flex-1">
              <p className="text-gray-800 italic">
                "Our family trip was wonderful. The kids loved it and the captain was very knowledgeable 
                and friendly. We will definitely be back next year!"
              </p>
              <p className="mt-4 font-semibold text-gray-900">- Maria R.</p>
            </div>
            <div className="bg-gray-100 rounded p-6 flex-1">
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
      <footer className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <h3 className="text-xl font-bold text-center mb-4">Find Us</h3>
          <div className="w-full h-64">
            <iframe
              src="https://maps.google.com/maps?q=Fort%20Lauderdale&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
          <p className="text-center text-gray-600 mt-4">
            &copy; 2025 Fishing Charter. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}