import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    category: "Astrology",
    title: "Understanding Mangal Dosh: Myths and Realities",
    date: "May 12, 2026",
    readTime: "5 min read"
  },
  {
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=800&auto=format&fit=crop",
    category: "Crystals",
    title: "Rose Quartz vs. Rhodonite: Healing the Heart Chakra",
    date: "April 28, 2026",
    readTime: "7 min read"
  },
  {
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=800&auto=format&fit=crop",
    category: "Numerology",
    title: "How to Calculate Your Personal Year Number",
    date: "April 15, 2026",
    readTime: "4 min read"
  }
];

export default function Blog() {
  return (
    <section className="py-12 sm:py-24 relative bg-[#FAF8F5] px-4 sm:px-0" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-[10px] sm:text-sm text-gold-600 uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4">Library</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-charcoal-900">
            Spiritual <span className="italic text-[#8C735D]">Insights</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 mobile-card-grid">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] rounded-xl sm:rounded-3xl overflow-hidden mb-2 sm:mb-6">
                <img 
                  src={article.image} 
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-75 group-hover:brightness-100"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/90 backdrop-blur-md px-2 sm:px-3 py-1 rounded-full text-[8px] sm:text-[10px] uppercase tracking-widest text-gold-600">
                  {article.category}
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 text-[8px] sm:text-xs text-[#8C735D] uppercase tracking-widest mb-1.5 sm:mb-3">
                <span className="truncate">{article.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-700 flex-shrink-0"></span>
                <span className="truncate">{article.readTime}</span>
              </div>
              <h4 className="text-xs sm:text-lg md:text-xl font-sans text-[#2C241B] leading-snug mb-2 sm:mb-4 group-hover:text-gold-600 transition-colors flex-grow line-clamp-3">
                {article.title}
              </h4>
              <div className="flex items-center text-[10px] sm:text-sm text-gold-500/80 font-medium tracking-wide group-hover:translate-x-2 transition-transform uppercase">
                Read Article <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 text-center">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-[#C99C3D]/30 hover:border-gold-500 hover:text-gold-600 text-[#2C241B] font-medium rounded-full transition-all text-xs sm:text-sm uppercase tracking-widest min-h-[44px] sm:min-h-[48px] flex items-center justify-center">
              Explore Library
            </button>
        </div>
      </div>
    </section>
  );
}
