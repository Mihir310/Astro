import { motion } from 'motion/react';
import { Heart, Shield, Sparkles, Zap, Leaf, Lightbulb } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Personalized Guidance',
    description: 'Custom solutions tailored to your unique cosmic blueprint and life circumstances',
    icon: Heart,
    color: 'from-red-400 to-pink-500',
  },
  {
    id: 2,
    title: 'Authentic Vedic Knowledge',
    description: 'Deep-rooted wisdom from ancient Vedic traditions, verified by PhD research',
    icon: Shield,
    color: 'from-gold-400 to-orange-500',
  },
  {
    id: 3,
    title: 'Positive Energy Healing',
    description: 'Transformative reiki, crystal, and spiritual healing sessions for holistic wellness',
    icon: Sparkles,
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: 4,
    title: 'Trusted Consultations',
    description: 'Confidential, judgment-free sessions with decades of verified client transformations',
    icon: Zap,
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 5,
    title: 'Spiritual Growth',
    description: 'Practical remedies and wisdom for lasting transformation without expensive rituals',
    icon: Leaf,
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 6,
    title: 'Holistic Wellness',
    description: 'Integration of astrology, Vastu, Reiki, and modern spiritual practices',
    icon: Lightbulb,
    color: 'from-yellow-400 to-orange-500',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#FBF9F6] to-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-saffron-300/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-red-400/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm text-gold-600 uppercase tracking-[0.15em] font-semibold mb-4">Why Our Clients Trust Us</p>
          <h2 className="text-5xl md:text-6xl font-serif text-[#2C241B] mb-8">Premium Benefits & Features</h2>
          <p className="text-lg text-[#5C4B3D] max-w-2xl mx-auto">
            Experience the transformative power of authentic spiritual guidance combined with modern wellness practices, delivered by a trusted expert with decades of excellence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-2xl p-8 border border-gold-200/50 shadow-lg hover:shadow-2xl hover:shadow-gold-500/20 transition-all duration-300 overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 relative inline-block">
                      <div className={`absolute -inset-3 bg-gradient-to-br ${feature.color} rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300`} />
                      <div className={`relative p-4 bg-gradient-to-br ${feature.color} rounded-full`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-serif text-[#2C241B] mb-4">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#5C4B3D] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Border Accent */}
                  <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-red-50 via-orange-50 to-gold-50 rounded-2xl border border-gold-200/50 p-12">
            <h3 className="text-3xl md:text-4xl font-serif text-[#2C241B] mb-6">
              Ready for Your Spiritual Journey?
            </h3>
            <p className="text-lg text-[#5C4B3D] mb-10 max-w-2xl mx-auto">
              Take the first step toward transformation. Book your personalized consultation with Dr. Geeta Joshi today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#/consultation"
                className="px-10 py-4 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-500/40 transform hover:scale-105"
              >
                Book Consultation
              </a>
              <a
                href="#/services"
                className="px-10 py-4 bg-transparent border-2 border-gold-500 hover:bg-gold-500/10 text-[#2C241B] font-semibold rounded-full transition-all duration-300"
              >
                View All Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
