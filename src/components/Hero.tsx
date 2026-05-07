import { motion } from 'motion/react';
import { Star, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden luxury-bg vignette">
      {/* Cosmic Gradient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-burgundy-600/8 to-gold-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-tl from-copper-400/8 to-saffron-300/5 rounded-full blur-[120px]" />
      </div>

      {/* Main Content Container */}
      <div className="w-full h-full flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
          {/* Hero Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full lg:h-auto"
          >
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center py-8 lg:py-0">
              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-gold-700 uppercase text-xs md:text-sm font-bold tracking-[0.15em] mb-4"
              >
                Vedic Wisdom & Spiritual Healing
              </motion.p>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-5xl font-sans font-bold text-charcoal-900 mb-6 leading-[1.2] max-w-2xl"
              >
                Transform Your Life<br />
                <span className="text-copper-500">Through Astrology, Vastu & Spiritual Healing</span>
              </motion.h1>

              {/* Doctor Info */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-6"
              >
                <h2 className="text-2xl md:text-3xl font-sans font-bold text-charcoal-900 mb-1">
                  Dr. Geeta Joshi
                </h2>
                <p className="text-sm md:text-base text-burgundy-700 font-semibold mb-2">
                  PhD in Astrology
                </p>
                <p className="text-xs md:text-sm text-charcoal-700 leading-relaxed max-w-lg">
                  Vedic Astrology Consultant • Vastu Expert • Reiki Grand Master • Crystal Healer
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 pt-2"
              >
                <a
                  href="#/consultation"
                  className="group px-8 py-3 md:px-10 md:py-3.5 bg-gradient-to-r from-burgundy-600 to-copper-500 hover:from-burgundy-700 hover:to-copper-600 text-white font-semibold text-sm md:text-base rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-burgundy-600/30 hover:scale-105 flex items-center justify-center"
                >
                  Book Consultation
                  <Sparkles className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="#/services"
                  className="px-8 py-3 md:px-10 md:py-3.5 bg-transparent border-2 border-gold-500 hover:bg-gold-500/10 text-charcoal-900 font-semibold text-sm md:text-base rounded-full transition-all duration-300 flex items-center justify-center"
                >
                  Explore Services
                </a>
              </motion.div>

              {/* Trust Indicators - Compact */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex gap-8 mt-8 text-xs md:text-sm"
              >
                <div className="flex flex-col">
                  <span className="font-bold text-burgundy-600 text-lg md:text-xl">20+</span>
                  <span className="text-charcoal-700 font-medium">Years</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-gold-600 text-lg md:text-xl">5000+</span>
                  <span className="text-charcoal-700 font-medium">Clients</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-copper-500 text-lg md:text-xl">99%</span>
                  <span className="text-charcoal-700 font-medium">Satisfied</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex justify-center items-center py-8 lg:py-0 hidden lg:flex"
            >
              <div className="relative w-full max-w-xs">
                {/* Photo Frame */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-6 border-gold-200 aspect-[3/4]">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-100 to-saffron-100 z-0" />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
                    alt="Dr. Geeta Joshi"
                    className="relative z-10 w-full h-full object-cover"
                  />
                </div>

                {/* Decorative Floating Element */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-3 -right-3 text-gold-400 pointer-events-none"
                >
                  <Star className="w-8 h-8" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-charcoal-700/40 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium">Scroll to explore</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
