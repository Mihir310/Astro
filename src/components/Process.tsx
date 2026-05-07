import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Book Your Session",
    description: "Choose the reading that resonates with your current journey and select a time that fits your schedule."
  },
  {
    number: "02",
    title: "Share Your Details",
    description: "Provide your precise birth date, time, and location to allow me to cast your unique astrological chart."
  },
  {
    number: "03",
    title: "Receive Guidance",
    description: "Connect via a private 1-on-1 video call to explore your cosmic blueprint and unlock deep insights."
  }
];

export default function Process() {
  return (
    <section className="py-24 relative" id="process">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm text-gold-600 uppercase tracking-[0.2em] mb-4">The Journey</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-[#2C241B]">
            How It <span className="italic text-[#8C735D]">Works</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 rounded-full border border-gold-500/20 bg-[#FAF8F5] flex items-center justify-center relative z-10 mb-8 overflow-hidden group">
                <div className="absolute inset-0 bg-gold-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="font-serif text-4xl text-[#2C241B] group-hover:text-gold-600 transition-colors">{step.number}</span>
              </div>
              <h4 className="text-xl font-serif text-[#2C241B] mb-4">{step.title}</h4>
              <p className="text-[#5C4B3D] font-light leading-relaxed max-w-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
