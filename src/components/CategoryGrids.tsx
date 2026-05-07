import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { productCategories } from '../data/productCategories';

export default function CategoryGrids() {
  return (
    <section className="py-8 sm:py-16 relative bg-[#253241] border-y border-[#C99C3D]/20 px-4 sm:px-0">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {productCategories.map((cat, idx) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 rounded-lg sm:rounded-xl p-4 sm:p-6 flex flex-col border border-[#C99C3D]/20 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:border-gold-500/30 transition-colors"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-sans text-white mb-4 sm:mb-6 pr-2 sm:pr-4 line-clamp-2">{cat.title}</h3>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6 flex-grow">
                {cat.products.slice(0, 4).map((item) => (
                  <a key={item.name} href={`#/shop/${cat.slug}`} className="group">
                    <div className="aspect-square rounded-lg overflow-hidden bg-white mb-1 sm:mb-2 border border-[#C99C3D]/10 relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-110 opacity-90 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/10 transition-colors" />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 font-light group-hover:text-gold-400 transition-colors leading-tight line-clamp-2">
                      {item.name}
                    </p>
                  </a>
                ))}
              </div>

              <a href={`#/shop/${cat.slug}`} className="flex items-center text-xs sm:text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors mt-auto group whitespace-nowrap">
                {cat.linkText}
                <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
