import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { productCategories } from '../data/productCategories';

export default function CategoryGrids() {
  return (
    <section className="py-16 relative bg-[#253241] border-y border-[#C99C3D]/20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {productCategories.map((cat, idx) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 rounded-xl p-6 flex flex-col border border-[#C99C3D]/20 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:border-gold-500/30 transition-colors"
            >
              <h3 className="text-xl font-sans text-white mb-6 pr-4">{cat.title}</h3>

              <div className="grid grid-cols-2 gap-4 mb-6 flex-grow">
                {cat.products.slice(0, 4).map((item) => (
                  <a key={item.name} href={`#/shop/${cat.slug}`} className="group">
                    <div className="aspect-square rounded-lg overflow-hidden bg-white mb-2 border border-[#C99C3D]/10 relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-110 opacity-90 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/10 transition-colors" />
                    </div>
                    <p className="text-sm text-gray-300 font-light group-hover:text-gold-400 transition-colors leading-tight">
                      {item.name}
                    </p>
                  </a>
                ))}
              </div>

              <a href={`#/shop/${cat.slug}`} className="flex items-center text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors mt-auto group">
                {cat.linkText}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
