import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    title: 'Tech Professional',
    image: '👩‍💻',
    rating: 5,
    text: 'Dr. Geeta\'s Vedic astrology consultation completely transformed my perspective on life. Her insights were incredibly accurate, and the remedies she suggested have brought remarkable positive changes to my relationships and career. Highly recommended!',
    service: 'Vedic Astrology & Kundli Analysis',
  },
  {
    id: 2,
    name: 'Rajesh Patel',
    title: 'Business Owner',
    image: '👨‍💼',
    rating: 5,
    text: 'The Vastu consultation for my office space was exactly what our business needed. Within three months of implementing Dr. Geeta\'s recommendations, our productivity increased and the work environment became more harmonious. She is truly an expert.',
    service: 'Vastu Consultation',
  },
  {
    id: 3,
    name: 'Aisha Khan',
    title: 'Wellness Enthusiast',
    image: '👩‍🦰',
    rating: 5,
    text: 'The Reiki healing sessions with Dr. Geeta are deeply transformative. I felt immediate relief from my anxiety and stress. Her compassionate approach and spiritual guidance have become an integral part of my wellness journey. Thank you!',
    service: 'Reiki Healing',
  },
  {
    id: 4,
    name: 'Vikram Desai',
    title: 'Student',
    image: '👨‍🎓',
    rating: 5,
    text: 'Dr. Geeta helped me understand my strengths through numerology and tarot reading. Her guidance gave me clarity about my career path when I was confused. The accuracy of her readings and her supportive nature is unmatched.',
    service: 'Numerology & Tarot Reading',
  },
  {
    id: 5,
    name: 'Neha Gupta',
    title: 'Entrepreneur',
    image: '👩‍💼',
    rating: 5,
    text: 'Crystal healing sessions combined with astrology insights provided me with emotional balance and clarity. Dr. Geeta\'s knowledge of crystals and their energies is remarkable. My life has shifted in beautiful ways since working with her.',
    service: 'Crystal Healing',
  },
  {
    id: 6,
    name: 'Sanjay Krishnan',
    title: 'Professional',
    image: '👨‍💻',
    rating: 5,
    text: 'The palm reading session revealed so much about my personality and future potential. Dr. Geeta\'s interpretation was not just accurate but also provided practical guidance for overcoming challenges. Worth every moment and investment!',
    service: 'Palm Reading',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAF8F5] to-white pointer-events-none" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-400/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm text-gold-600 uppercase tracking-[0.15em] font-semibold mb-4">Transformational Stories</p>
          <h2 className="text-5xl md:text-6xl font-serif text-[#2C241B] mb-8">Voices of Transformation</h2>
          <p className="text-lg text-[#5C4B3D] max-w-2xl mx-auto">
            Discover how Dr. Geeta Joshi has helped thousands transform their lives through spiritual guidance, healing, and authentic Vedic wisdom.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group h-full"
            >
              {/* Card */}
              <div className="relative h-full bg-white rounded-2xl border border-gold-200/50 shadow-lg hover:shadow-2xl hover:shadow-gold-500/20 transition-all duration-300 overflow-hidden p-8 flex flex-col">
                {/* Decorative Top Border */}
                <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-gold-400 via-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-[#5C4B3D] mb-8 flex-grow italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Service Tag */}
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 text-xs font-semibold rounded-full">
                    {testimonial.service}
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4 border-t border-gold-200/30 pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-200 to-orange-200 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-serif text-[#2C241B] font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-[#8C735D]">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block">
            <p className="text-lg text-[#5C4B3D] mb-8">
              Join thousands of satisfied clients who have transformed their lives.
            </p>
            <a
              href="#/consultation"
              className="inline-block px-10 py-4 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-500/40 transform hover:scale-105"
            >
              Share Your Story - Book Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
