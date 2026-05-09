import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    image: "https://images.unsplash.com/photo-1615114814213-a245ffc79e9a?q=80&w=600&auto=format&fit=crop",
    title: "1 Mukhi Rudraksha (Nepal)",
    category: "Sacred Beads",
    price: "$299",
    tag: "Best Seller"
  },
  {
    image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=600&auto=format&fit=crop",
    title: "Pyrite Abundance Bracelet",
    category: "Crystal Bracelets",
    price: "$45",
    tag: "Energized"
  },
  {
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop",
    title: "Premium Blue Sapphire",
    category: "Gemstones",
    price: "$1,200",
    tag: "Certified"
  },
  {
    image: "https://images.unsplash.com/photo-1579758629938-03607fc88448?q=80&w=600&auto=format&fit=crop",
    title: "Shree Yantra Brass (3x3)",
    category: "Yantras",
    price: "$85",
    tag: "Handcrafted"
  }
];

export default function ShopSection() {
  return (
    <section className="py-12 sm:py-24 relative bg-white border-y border-[#C99C3D]/10" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 sm:mb-16 gap-4 sm:gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-xs sm:text-sm text-gold-600 uppercase tracking-[0.2em] mb-2 sm:mb-4">Sacred Treasures</h2>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#2C241B] leading-tight">
              Curated <span className="italic text-[#8C735D]">Spiritual Tools</span>
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="#/shop" className="px-4 sm:px-6 py-2 sm:py-3 border border-[#C99C3D]/30 hover:border-gold-500 text-[#2C241B] hover:text-gold-600 font-medium rounded-full transition-all text-xs sm:text-sm uppercase tracking-wider flex items-center whitespace-nowrap">
              View All Products
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 auto-rows-max mobile-card-grid">
          {products.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-xl sm:rounded-[2rem] overflow-hidden mb-2 sm:mb-6 bg-[#FAF8F5] border border-[#C99C3D]/20">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                />
                {item.tag && (
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-[#FAF8F5]/80 backdrop-blur-md border border-[#C99C3D]/20 px-2 sm:px-3 py-1 rounded-full text-[8px] sm:text-[10px] uppercase tracking-widest text-gold-600">
                    {item.tag}
                  </div>
                )}
                {/* Add to cart overlay button */}
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 translate-y-0 opacity-100 sm:translate-y-12 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-300">
                  <button className="w-9 sm:w-12 h-9 sm:h-12 rounded-full bg-gold-500 text-[#2C241B] flex flex-col items-center justify-center hover:bg-gold-400 shadow-lg">
                    <ShoppingBag className="w-4 sm:w-5 h-4 sm:h-5" />
                  </button>
                </div>
              </div>
              <div className="min-w-0 text-center sm:text-left">
                <span className="text-[9px] sm:text-xs text-orange-600 uppercase tracking-widest block mb-1 sm:mb-2 truncate">{item.category}</span>
                <h4 className="text-xs sm:text-lg font-serif text-[#2C241B] mb-1 sm:mb-2 line-clamp-2 min-h-[2rem] sm:min-h-0 leading-snug">{item.title}</h4>
                <span className="text-gold-600 text-sm sm:text-lg font-medium">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
