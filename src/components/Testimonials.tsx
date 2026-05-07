import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Creative Director",
    content: "Elena's reading was astonishingly accurate. She highlighted aspects of my career path that I had been too afraid to acknowledge. I left our session feeling empowered and crystal clear on my next steps.",
  },
  {
    name: "Michael Chen",
    role: "Entrepreneur",
    content: "I have always been skeptical, but the year-ahead forecast provided me with precise timelines that completely aligned with my business launches. An invaluable asset to my planning.",
  },
  {
    name: "Emma Robertson",
    role: "Therapist",
    content: "The synastry reading for my partner and me was beautiful. Elena approached it with such warmth and lack of judgment. It helped us understand our communication styles on a profound level.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative bg-white border-y border-[#C99C3D]/10" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 justify-between items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-sm text-gold-600 uppercase tracking-[0.2em] mb-4">Client Experiences</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#2C241B] leading-tight">
              Words from the <br/>
              <span className="italic text-[#8C735D]">Constellation</span>
            </h3>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-2 pb-2"
          >
             <div className="flex text-gold-600">
               {[...Array(5)].map((_, i) => (
                 <Star key={i} className="w-5 h-5 fill-current" />
               ))}
             </div>
             <span className="text-[#2C241B] ml-2">5.0 Average Rating</span>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#C99C3D]/10 relative"
            >
              <div className="absolute top-8 right-8 text-gold-500/20 font-serif text-6xl leading-none">"</div>
              <p className="text-[#5C4B3D] font-light leading-relaxed mb-8 relative z-10 text-justify">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="text-[#2C241B] font-medium mb-1">{testimonial.name}</h4>
                <p className="text-sm text-[#8C735D]">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
