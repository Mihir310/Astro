import { motion } from 'motion/react';
import { CheckCircle, Star } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    'PhD in Jyotish Shastra',
    '20+ Years of Guidance Experience',
    'Founder of Astro Vastu Reiki',
    'Vedic Astrology Specialist',
    'Vastu Architecture Expert',
    'Reiki Grand Master',
    'Crystal & Energy Healer',
    'Tarot & Numerology Master',
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FAF8F5] to-white pointer-events-none" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-saffron-300/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <p className="text-sm text-gold-600 uppercase tracking-[0.15em] font-semibold mb-4 flex items-center gap-2">
                <Star className="w-4 h-4" />
                About Dr. Geeta Joshi
              </p>
              <h2 className="text-5xl md:text-6xl font-sans font-bold text-charcoal-900 leading-tight mb-8">
                Your Trusted Guide to <span className="text-red-600">Spiritual Transformation</span>
              </h2>
            </div>

            <div className="space-y-6 mb-10">
              <p className="text-lg text-[#5C4B3D] leading-relaxed">
                Welcome to a sacred space of wisdom, healing, and transformation. Dr. Geeta Joshi is a distinguished spiritual guide and healer dedicated to illuminating your path toward greater clarity, purpose, and wellness.
              </p>

              <p className="text-lg text-[#5C4B3D] leading-relaxed">
                With a PhD in Jyotish Shastra and two decades of dedicated practice, Dr. Geeta combines the ancient wisdom of Vedic astrology with modern spiritual healing modalities. Her approach is deeply rooted in authentic Vedic knowledge, offering practical remedies and profound insights without the need for expensive rituals.
              </p>

              <p className="text-lg text-[#5C4B3D] leading-relaxed">
                As the founder of Astro Vastu Reiki, she seamlessly integrates astrology, Vastu architecture, Reiki healing, and crystal therapy to create holistic solutions for her clients. Her compassionate, personalized approach has transformed thousands of lives.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                  <span className="text-[#5C4B3D] font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#/consultation"
              className="inline-block px-10 py-4 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-500/40"
            >
              Connect with Dr. Geeta
            </motion.a>
          </motion.div>

          {/* Right Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Frame */}
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-gold-400/30 via-red-400/20 to-orange-400/30 rounded-2xl blur-2xl" />

              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-gold-200 via-orange-100 to-red-200 rounded-2xl p-1 overflow-hidden">
                <div className="bg-white rounded-xl p-8 min-h-[500px] flex flex-col items-center justify-center">
                  {/* Placeholder for Dr. Geeta's Photo */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gold-100 via-orange-50 to-red-100 rounded-lg">
                    <div className="text-center">
                      <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-gold-300 to-orange-400 rounded-full flex items-center justify-center">
                        <span className="text-6xl">🙏</span>
                      </div>
                      <p className="text-[#8C735D] font-sans text-xl mb-2">Dr. Geeta Joshi</p>
                      <p className="text-sm text-gold-600 font-semibold">PhD in Jyotish Shastra</p>
                      <p className="text-xs text-[#8C735D] mt-4 italic">
                        "Guiding souls toward their true potential"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 bg-white rounded-full p-6 shadow-2xl shadow-gold-500/30 border-2 border-gold-400"
              >
                <div className="text-center">
                  <p className="text-2xl font-sans text-red-600 font-bold">20+</p>
                  <p className="text-xs text-[#8C735D] font-semibold mt-1">Years of Service</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
