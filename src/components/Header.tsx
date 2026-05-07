import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

type HeaderProps = {
  currentPage?: string;
};

export default function Header({ currentPage = 'home' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#/', page: 'home' },
    { name: 'Services', href: '#/services', page: 'services' },
    { name: 'Consultation', href: '#/consultation', page: 'consultation' },
    { name: 'Shop', href: '#/shop', page: 'shop' },
    { name: 'Free Calculators', href: '#/calculators', page: 'calculators' },
    { name: 'Insights', href: '#/insights', page: 'insights' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#FFFAF5]/95 backdrop-blur-xl border-b border-gold-500/20 py-2 shadow-luxury' 
            : 'bg-gradient-to-b from-white/40 via-white/20 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#/" className="flex items-center gap-3 group" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-10 h-10 rounded-full border-2 border-gold-500 flex items-center justify-center bg-gradient-to-br from-gold-400/20 to-copper-400/10 group-hover:from-gold-400/30 group-hover:to-copper-400/20 transition-all duration-300 shadow-sm">
              <span className="text-gold-600 text-xl font-sans">☆</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-sans text-charcoal-900 tracking-wider font-semibold">Astro Vastu</span>
              <span className="text-xs text-gold-600 font-semibold uppercase tracking-[0.15em]">Reiki</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 tracking-wider uppercase font-sans ${
                  currentPage === link.page 
                    ? 'text-gold-600 border-b border-gold-500' 
                    : 'text-charcoal-800 hover:text-gold-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="#/consultation" 
              className="ml-4 px-8 py-3 bg-gradient-to-r from-gold-400 to-copper-500 hover:from-gold-500 hover:to-copper-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gold-500/30 transform hover:scale-105 text-sm uppercase tracking-wider"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-charcoal-700 hover:text-gold-600 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-gradient-to-b from-white/95 via-beige-100/90 to-white/95 backdrop-blur-lg pt-24 px-6 flex flex-col">
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-lg font-sans transition-all duration-300 ${
                  currentPage === link.page ? 'text-gold-600' : 'text-charcoal-700 hover:text-gold-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a 
              href="#/consultation" 
              className="mt-10 mx-auto w-full max-w-sm px-6 py-4 bg-gradient-to-r from-gold-400 to-copper-500 text-white text-center rounded-full font-semibold uppercase tracking-wider hover:shadow-lg transition-all" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Consultation
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
