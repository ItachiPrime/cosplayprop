
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="glass mt-20">
      <div className="container mx-auto px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tighter">COSPLAY PROPS</h3>
            <p className="text-sm text-muted-foreground">
            Handcrafted Cosplay Props & 3D Collectibles
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Masks</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Collectibles</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">3D Figures</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <form className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-l focus:outline-none focus:ring-1 focus:ring-white/20"
                />
                <button
                  type="submit"
                  className="px-4 bg-white text-black rounded-r hover:bg-white/90 transition-colors"
                >
                  <Mail size={20} />
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Subscribe to get updates on new products and special offers.
              </p>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} COSPLAY PROPS. All rights reserved.
          </p>
        </div>
        <div className="text-sm text-center text-gray-600 pt-4 pb-0">
        Developed by <a href="https://github.com/ItachiPrime" className="text-red-600 font-semibold hover:text-red-500" target="blank">ItachiPrime</a>
      </div>
      </div>
    </footer>
  );
}
