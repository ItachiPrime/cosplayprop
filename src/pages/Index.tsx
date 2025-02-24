
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Index() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrolled = window.scrollY;
      const rate = scrolled * 0.5;
      parallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-background z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
        >
          <source src="vid.mp4" type="video/mp4" />
        </video>
        
        <div className="container relative z-20 px-4 text-center" ref={parallaxRef}>
          <span className="inline-block mb-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm animate-fade-in">
            Premium Automotive Modifications
          </span>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter animate-slide-up">
            VROOM MODS
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in">
            Transform your ride with our premium modifications and accessories.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-white text-black font-medium rounded hover:bg-white/90 transition-all hover:scale-105 transform"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 tracking-tighter">Featured Mods</h2>
          <p className="text-white/60">Elevate your driving experience</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Carbon Fiber Key Case",
              price: "$129",
              image: "3.png"
            },
            {
              title: "Custom F1 Plate",
              price: "$299",
              image: "2.png"
            },
            {
              title: "Premium Spoiler Shelf",
              price: "$199",
              image: "1.jpg"
            }
          ].map((product, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg aspect-square hover:scale-105 transform transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
