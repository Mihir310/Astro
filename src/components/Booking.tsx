import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export default function Booking() {
  return (
    <section className="py-24 relative" id="book">
      {/* Background with blur and cosmic colors */}
      <div className="absolute inset-0 vedic-bg opacity-50" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-12 md:p-20 text-center rounded-[3rem] shadow-2xl relative overflow-hidden"
        >
          {/* Decorative glow inside card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-orange-400/20 rounded-full blur-[80px]" />

          <h2 className="text-4xl md:text-6xl font-sans font-bold text-charcoal-900 mb-6 relative z-10">
            Get Clarity About Your <br/>
            <span className="gold-gradient-text italic">Future Today</span>
          </h2>
          
          <p className="text-lg text-[#5C4B3D] mb-10 max-w-2xl mx-auto font-light relative z-10">
            The stars are aligning. Take the first step towards deep self-understanding and actionable cosmic guidance. Spaces are limited and fill up quickly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-[#2C241B] font-semibold rounded-full transition-all flex items-center justify-center min-w-[200px]">
              <Calendar className="w-5 h-5 mr-2" /> Book Your Session
            </button>
            <a 
              href="https://wa.me/919876543210?text=Hi Dr. Geeta! I would like to book a consultation session. Please let me know the available timings."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border border-[#C99C3D]/30 hover:bg-black/10 text-[#2C241B] font-medium rounded-full transition-all flex items-center justify-center min-w-[200px]"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.01-5.02 5.338-5.02 8.948 0 1.52.369 3.011 1.012 4.39L1.07 23.5l4.408-1.902c1.25.663 2.738 1.124 4.381 1.124 5.21 0 9.455-4.223 9.455-9.422 0-2.525-.738-4.952-2.147-7.001-1.41-2.047-3.57-3.496-5.77-3.496z"/>
              </svg>
              Contact via WhatsApp
            </a>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
