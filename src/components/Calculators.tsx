import { motion } from 'motion/react';

const calculators = [
  {
    title: "Numerology Personal Year Calculator",
    btnText: "Year Calculator",
    image: "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?q=80&w=200&auto=format&fit=crop",
    link: "#/calculator/personal-year"
  },
  {
    title: "Numerology Lucky Colour Calculator",
    btnText: "Colour Calculator",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=200&auto=format&fit=crop",
    link: "#/calculator/lucky-colour"
  },
  {
    title: "Lucky Vehicle Number Calculator",
    btnText: "Number Calculator",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=200&auto=format&fit=crop",
    link: "#/calculator/vehicle-number"
  },
  {
    title: "Lucky Bracelet Calculator",
    btnText: "Bracelet Calculator",
    image: "https://images.unsplash.com/photo-1579758629938-03607fc88448?q=80&w=200&auto=format&fit=crop",
    link: "#/calculator/bracelet"
  },
  {
    title: "Lucky Rudraksha Calculator",
    btnText: "Rudraksha Calculator",
    image: "https://images.unsplash.com/photo-1601058268499-e52658b8ebf8?q=80&w=200&auto=format&fit=crop",
    link: "#/calculator/rudraksha"
  },
  {
    title: "Lucky Date Calculator",
    btnText: "Date Calculator",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=200&auto=format&fit=crop",
    link: "#/calculator/date"
  }
];

export default function Calculators() {
  return (
    <section className="py-24 relative bg-[#253241]" id="calculators">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-sans text-white mb-4"
          >
            Know what’s lucky for you
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
             className="text-gray-400 font-light"
          >
            Find what truly suits you... and keeps working for you in the long run.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 xl:gap-6">
          {calculators.map((calc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-gradient-to-b from-[#FAF8F5] to-[#F1EDE4] rounded-2xl p-4 xl:p-6 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-[#C99C3D]/20 group cursor-pointer"
            >
              <div className="w-24 h-24 xl:w-32 xl:h-32 rounded-full border-4 border-white shadow-[0_4px_15px_rgba(0,0,0,0.1)] overflow-hidden mb-6 relative">
                 {/* Fake outer rings to simulate the numerology wheel from screenshot */}
                 <div className="absolute inset-0 border-2 border-dashed border-gold-500/30 rounded-full animate-[spin_40s_linear_infinite]" />
                 <img src={calc.image} alt={calc.title} className="w-full h-full object-cover p-2 rounded-full filter grayscale-[30%] opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all" />
              </div>
              
              <h4 className="text-navy-950 font-sans text-sm xl:text-base font-bold mb-6 flex-grow leading-tight">
                 {calc.title}
              </h4>
              
              {calc.link ? (
                <a href={calc.link} className="w-full py-3 bg-gradient-to-b from-[#DAB866] to-[#C99C3D] hover:from-[#EAD592] hover:to-[#DAB866] text-navy-950 font-bold rounded-lg text-xs xl:text-[13px] shadow-[0_4px_10px_rgba(201,156,61,0.4)] transition-all uppercase tracking-wide border border-[#F3E5AB]/50 mt-auto block text-center">
                  {calc.btnText}
                </a>
              ) : (
                <button className="w-full py-3 bg-gradient-to-b from-[#DAB866] to-[#C99C3D] hover:from-[#EAD592] hover:to-[#DAB866] text-navy-950 font-bold rounded-lg text-xs xl:text-[13px] shadow-[0_4px_10px_rgba(201,156,61,0.4)] transition-all uppercase tracking-wide border border-[#F3E5AB]/50 mt-auto">
                  {calc.btnText}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
