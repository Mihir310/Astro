import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-24 relative" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Image Placeholder with mystical styling */}
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop" 
                alt="Mystical portrait" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-75 contrast-125"
              />
              <div className="absolute inset-0 border border-gold-500/20 rounded-[2rem] z-20 m-4" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gold-500/10 rounded-full blur-[40px] -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm text-gold-600 uppercase tracking-[0.2em] mb-4">Meet Your Guide</h2>
            <h3 className="text-4xl md:text-5xl font-sans font-bold text-charcoal-900 mb-6 leading-tight">
              Bridging the Cosmos <br/>
              <span className="italic text-[#5C4B3D]">with Your Reality</span>
            </h3>
            
            <div className="space-y-6 text-[#5C4B3D] font-light text-lg leading-relaxed mb-10 text-justify">
              <p>
                I am Elena, a master astrologer with over 15 years of experience decoding the celestial language. My practice goes beyond simple horoscopes—it is a profound tool for self-discovery and life navigation.
              </p>
              <p>
                By blending ancient astrological wisdom with modern psychological insights, I help you understand your unique cosmic signature. Whether you are facing career crossroads, seeking relationship clarity, or searching for life purpose, the stars hold the map.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center">
                  <span className="text-xl">🌙</span>
                </div>
                <div>
                  <h4 className="text-[#2C241B] font-medium">Certified Astrologer</h4>
                  <p className="text-sm text-[#8C735D]">ISAR Accredited</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <h4 className="text-[#2C241B] font-medium">Intuitive Reader</h4>
                  <p className="text-sm text-[#8C735D]">Holistic Approach</p>
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
