import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Are the gemstones and products already 'energized' (Abhimantrit)?",
    answer: "Yes, all our Rudrakshas, Gemstones, and Yantras go through a rigorous Vedic energization process (Pran Pratishtha) by knowledgeable priests before they are dispatched to you."
  },
  {
    question: "How do I know which Bracelet or Crystal is right for me?",
    answer: "We recommend using our Free Gemstone Recommender or booking a short consultation. Based on your birth chart, we identify which ruling planet needs balancing."
  },
  {
    question: "How long does it take to receive a personalized Horoscope Report?",
    answer: "Typically, personalized reports take 3-5 business days. Each report is manually analyzed by our expert astrologers rather than being completely computer-generated."
  },
  {
    question: "Do you ship products outside of India?",
    answer: "Yes, we ship globally using secure, insured courier services to ensure your sacred items arrive safely."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-24 relative bg-white border-y border-[#C99C3D]/10 px-4 sm:px-0" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-[11px] sm:text-sm text-orange-600 uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4">Clarity</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-charcoal-900">
            Common <span className="italic text-[#8C735D]">Questions</span>
          </h3>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-[#C99C3D]/20 bg-white rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none hover:bg-[#FAF8F5]/50 transition-colors"
              >
                <span className="text-sm sm:text-lg font-sans text-[#2C241B] pr-4 sm:pr-8">{faq.question}</span>
                <div className="flex-shrink-0 text-gold-600">
                  {openIndex === index ? <Minus className="w-4 sm:w-5 h-4 sm:h-5" /> : <Plus className="w-4 sm:w-5 h-4 sm:h-5" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-[#5C4B3D] font-light leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
