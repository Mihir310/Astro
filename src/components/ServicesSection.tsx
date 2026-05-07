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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm text-gold-600 uppercase tracking-[0.15em] font-semibold mb-4">Holistic Wellness</p>
          <h2 className="text-5xl md:text-6xl font-sans font-bold text-charcoal-900 mb-6">Premium Services</h2>
          <p className="text-lg text-[#5C4B3D] max-w-2xl mx-auto">
            Explore our comprehensive range of spiritual and healing services, each designed to guide you toward greater clarity, wellness, and transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="relative h-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-8 overflow-hidden transition-all duration-300 shadow-lg">
                  {/* Color Background */}
                  <div className={`absolute inset-0 ${service.color} opacity-0`} />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Button with Icon and Title */}
                    <div className="mb-6 relative inline-block">
                      <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-full shadow-lg">
                        <Icon className="w-6 h-6 text-black flex-shrink-0" />
                        <h3 className="text-lg font-sans text-black whitespace-nowrap">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#5C4B3D] mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* CTA Link */}
                    <a
                      href="#/services"
                      className="inline-flex items-center text-gold-600 font-semibold text-sm"
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
