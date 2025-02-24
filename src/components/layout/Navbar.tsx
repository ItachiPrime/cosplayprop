
import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold tracking-tighter">
            AUTOLUX
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm hover:text-white/80 transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-sm hover:text-white/80 transition-colors">
              Shop
            </Link>
            <Link to="/about" className="text-sm hover:text-white/80 transition-colors">
              About
            </Link>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ShoppingCart size={20} />
            </button>
          </div>

          <button 
            className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="block px-3 py-2 rounded-md text-base hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
