import { Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#C99C3D]/10 bg-[#FAF8F5] py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-sans text-[#2C241B] mb-2">Celestia<span className="text-gold-500">.</span></h2>
            <p className="text-[#8C735D] text-sm font-light">Navigating reality through the cosmos.</p>
          </div>

          <div className="flex gap-8 text-sm text-[#5C4B3D]">
            <a href="#/" className="hover:text-gold-600 transition-colors">About</a>
            <a href="#/services" className="hover:text-gold-600 transition-colors">Services</a>
            <a href="#/consultation" className="hover:text-gold-600 transition-colors">Testimonials</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-[#C99C3D]/20 flex items-center justify-center text-[#5C4B3D] hover:text-[#2C241B] hover:border-white/30 transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[#C99C3D]/20 flex items-center justify-center text-[#5C4B3D] hover:text-[#2C241B] hover:border-white/30 transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[#C99C3D]/20 flex items-center justify-center text-[#5C4B3D] hover:text-[#2C241B] hover:border-white/30 transition-all">
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-[#C99C3D]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Celestia Astrology. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#5C4B3D] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#5C4B3D] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
