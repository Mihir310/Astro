import { motion } from 'motion/react';
import { Star, Moon, Home, Heart, Gem, Eye, Hash, Hand } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Vedic Astrology',
    description: 'Ancient wisdom for modern life guidance',
    icon: Star,
    color: 'bg-orange-400',
  },
  {
    id: 2,
    title: 'Kundli Analysis',
    description: 'Deep birth chart insights and remedies',
    icon: Moon,
    color: 'bg-red-500',
  },
  {
    id: 3,
    title: 'Vastu Consultation',
    description: 'Harmonize spaces for positive energy',
    icon: Home,
    color: 'bg-orange-500',
  },
  {
    id: 4,
    title: 'Reiki Healing',
    description: 'Energy healing for mind & body wellness',
    icon: Heart,
    color: 'bg-pink-500',
  },
  {
    id: 5,
    title: 'Crystal Healing',
    description: 'Harness natural gemstone energies',
    icon: Gem,
    color: 'bg-purple-500',
  },
  {
    id: 6,
    title: 'Tarot Reading',
    description: 'Clarity through divine card guidance',
    icon: Eye,
    color: 'bg-blue-500',
  },
  {
    id: 7,
    title: 'Numerology',
    description: 'Numbers reveal your life path destiny',
    icon: Hash,
    color: 'bg-yellow-400',
  },
  {
    id: 8,
    title: 'Palm Reading',
    description: 'Your hands hold your life story',
    icon: Hand,
    color: 'bg-yellow-500',
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#FAF8F5] via-white to-[#FBF9F6] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm text-gold-600 uppercase tracking-[0.15em] font-semibold mb-4">Holistic Wellness</p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold text-charcoal-900 mb-6">Premium Services</h2>
          <p className="text-sm sm:text-lg text-[#5C4B3D] max-w-2xl mx-auto">
            Explore our comprehensive range of spiritual and healing services, each designed to guide you toward greater clarity, wellness, and transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 mobile-card-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="relative h-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-xl sm:rounded-2xl p-3 sm:p-6 md:p-8 overflow-hidden transition-all duration-300 shadow-lg">
                  {/* Color Background */}
                  <div className={`absolute inset-0 ${service.color} opacity-0`} />

                  {/* Content */}
                  <div className="relative z-10 flex h-full min-h-[230px] flex-col sm:min-h-[240px]">
                    {/* Button with Icon and Title */}
                    <div className="relative mb-3 flex min-h-[90px] items-start sm:mb-6 sm:min-h-[72px]">
                      <div className="flex min-h-[82px] w-full flex-col items-center justify-center gap-1.5 rounded-xl bg-white px-2 py-2 text-center shadow-lg sm:min-h-[64px] sm:flex-row sm:gap-3 sm:rounded-full sm:px-6 sm:py-4 sm:text-left">
                        <Icon className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-black flex-shrink-0" />
                        <h3 className="flex min-h-[2rem] items-center text-center text-[11px] font-bold leading-tight text-black sm:min-h-0 sm:text-left sm:text-base md:text-lg">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-3 min-h-[44px] text-center text-[11px] leading-snug text-[#5C4B3D] sm:mb-6 sm:min-h-[48px] sm:text-left sm:text-sm sm:leading-normal">
                      {service.description}
                    </p>

                    {/* CTA Link */}
                    <a
                      href="#/services"
                      className="mt-auto inline-flex items-center justify-center text-[11px] font-semibold text-gold-600 sm:justify-start sm:text-sm"
                    >
                      Learn More
                      <span className="ml-2">→</span>
                    </a>
                  </div>


                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        
      </div>
    </section>
  );
}
