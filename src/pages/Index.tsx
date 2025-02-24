
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Index() {
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
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/548370291.hd.mp4?s=7de96c44e740179619e2e7fc11fed75875fc0edf" type="video/mp4" />
        </video>
        
        <div className="container relative z-20 px-4 text-center">
          <span className="inline-block mb-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm">
            Premium Automotive Accessories
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
            Elevate Your Drive
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Discover our collection of premium key cases, custom F1 plates, and spoiler shelves.
          </p>
          <Link
            to="/shop"
            className="inline-block px-8 py-4 bg-white text-black font-medium rounded hover:bg-white/90 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 tracking-tighter">Featured Products</h2>
          <p className="text-white/60">Handpicked selection of our finest accessories</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Carbon Fiber Key Case",
              price: "$129",
              image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80"
            },
            {
              title: "Custom F1 Plate",
              price: "$299",
              image: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&q=80"
            },
            {
              title: "Premium Spoiler Shelf",
              price: "$199",
              image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&q=80"
            }
          ].map((product, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-white/80">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-20">
        <div className="glass rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-tighter">Stay Updated</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and be the first to know about new products and exclusive offers.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-l focus:outline-none focus:ring-1 focus:ring-white/20"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-black font-medium rounded-r hover:bg-white/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
