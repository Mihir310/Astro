import { Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#C99C3D]/10 bg-[#FAF8F5] py-8 sm:py-16 relative z-10 px-4 sm:px-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:justify-between md:items-center md:gap-8">
          
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-sans text-[#2C241B] mb-2">Celestia<span className="text-gold-500">.</span></h2>
            <p className="text-[#8C735D] text-xs sm:text-sm font-light">Navigating reality through the cosmos.</p>
          </div>

          <div className="flex gap-6 sm:gap-8 text-xs sm:text-sm text-[#5C4B3D] justify-center md:justify-start">
            <a href="#/" className="hover:text-gold-600 transition-colors">About</a>
            <a href="#/services" className="hover:text-gold-600 transition-colors">Services</a>
            <a href="#/consultation" className="hover:text-gold-600 transition-colors">Testimonials</a>
          </div>

          <div className="flex gap-3 sm:gap-4 justify-center md:justify-end">
            <a href="#" className="w-9 sm:w-10 h-9 sm:h-10 rounded-full border border-[#C99C3D]/20 flex items-center justify-center text-[#5C4B3D] hover:text-[#2C241B] hover:border-white/30 transition-all">
              <Instagram className="w-4 sm:w-5 h-4 sm:h-5" />
            </a>
            <a href="#" className="w-9 sm:w-10 h-9 sm:h-10 rounded-full border border-[#C99C3D]/20 flex items-center justify-center text-[#5C4B3D] hover:text-[#2C241B] hover:border-white/30 transition-all">
              <Twitter className="w-4 sm:w-5 h-4 sm:h-5" />
            </a>
            <a href="#" className="w-9 sm:w-10 h-9 sm:h-10 rounded-full border border-[#C99C3D]/20 flex items-center justify-center text-[#5C4B3D] hover:text-[#2C241B] hover:border-white/30 transition-all">
              <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
            </a>
          </div>

        </div>
        
        <div className="mt-8 sm:mt-16 pt-6 sm:pt-8 border-t border-[#C99C3D]/10 flex flex-col gap-4 sm:gap-0 md:flex-row md:justify-between md:items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Celestia Astrology. All rights reserved.</p>
          <div className="flex gap-3 sm:gap-4 justify-center md:justify-end">
            <a href="#" className="hover:text-[#5C4B3D] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#5C4B3D] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
