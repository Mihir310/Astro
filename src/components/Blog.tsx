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
    <section className="py-24 relative bg-[#FAF8F5]" id="blog">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm text-gold-600 uppercase tracking-[0.2em] mb-4">Library</h2>
          <h3 className="text-4xl md:text-5xl font-sans font-bold text-charcoal-900">
            Spiritual <span className="italic text-[#8C735D]">Insights</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <img 
                  src={article.image} 
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-75 group-hover:brightness-100"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-gold-600">
                  {article.category}
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-[#8C735D] uppercase tracking-widest mb-3">
                <span>{article.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                <span>{article.readTime}</span>
              </div>
              <h4 className="text-xl font-sans text-[#2C241B] leading-snug mb-4 group-hover:text-gold-600 transition-colors">
                {article.title}
              </h4>
              <div className="flex items-center text-sm text-gold-500/80 font-medium tracking-wide group-hover:translate-x-2 transition-transform uppercase">
                Read Article <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-transparent border border-[#C99C3D]/30 hover:border-gold-500 hover:text-gold-600 text-[#2C241B] font-medium rounded-full transition-all text-sm uppercase tracking-widest">
              Explore Library
            </button>
        </div>
      </div>
    </section>
  );
}
