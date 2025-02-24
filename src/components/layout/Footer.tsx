
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="glass mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tighter">AUTOLUX</h3>
            <p className="text-sm text-muted-foreground">
              Premium automotive accessories for the discerning enthusiast.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Key Cases</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Custom F1 Plates</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Spoiler Shelves</a></li>
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
            © {new Date().getFullYear()} AUTOLUX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
