import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-12 sm:py-24 relative px-4 sm:px-0" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Image Placeholder with mystical styling */}
            <div className="relative aspect-[4/5] rounded-xl sm:rounded-2xl lg:rounded-[2rem] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop" 
                alt="Mystical portrait" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-75 contrast-125"
              />
              <div className="absolute inset-0 border border-gold-500/20 rounded-xl sm:rounded-2xl lg:rounded-[2rem] z-20 m-2 sm:m-4" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 sm:-bottom-8 -right-6 sm:-right-8 w-32 sm:w-40 h-32 sm:h-40 bg-gold-500/10 rounded-full blur-[40px] -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-[10px] sm:text-sm text-gold-600 uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4">Meet Your Guide</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-charcoal-900 mb-4 sm:mb-6 leading-tight">
              Bridging the Cosmos <br/>
              <span className="italic text-[#5C4B3D]">with Your Reality</span>
            </h3>
            
            <div className="space-y-4 sm:space-y-6 text-[#5C4B3D] font-light text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-10">
              <p className="text-justify">
                I am Elena, a master astrologer with over 15 years of experience decoding the celestial language. My practice goes beyond simple horoscopes—it is a profound tool for self-discovery and life navigation.
              </p>
              <p className="text-justify">
                By blending ancient astrological wisdom with modern psychological insights, I help you understand your unique cosmic signature. Whether you are facing career crossroads, seeking relationship clarity, or searching for life purpose, the stars hold the map.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg sm:text-xl">🌙</span>
                </div>
                <div>
                  <h4 className="text-[#2C241B] font-medium text-sm sm:text-base">Certified Astrologer</h4>
                  <p className="text-xs sm:text-sm text-[#8C735D]">ISAR Accredited</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg sm:text-xl">✨</span>
                </div>
                <div>
                  <h4 className="text-[#2C241B] font-medium text-sm sm:text-base">Intuitive Reader</h4>
                  <p className="text-xs sm:text-sm text-[#8C735D]">Holistic Approach</p>
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
