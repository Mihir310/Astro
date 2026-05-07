import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const signs = [
  { name: 'Aries', symbol: '♈' },
  { name: 'Taurus', symbol: '♉' },
  { name: 'Gemini', symbol: '♊' },
  { name: 'Cancer', symbol: '♋' },
  { name: 'Leo', symbol: '♌' },
  { name: 'Virgo', symbol: '♍' },
  { name: 'Libra', symbol: '♎' },
  { name: 'Scorpio', symbol: '♏' },
  { name: 'Sagittarius', symbol: '♐' },
  { name: 'Capricorn', symbol: '♑', active: true },
  { name: 'Aquarius', symbol: '♒' },
  { name: 'Pisces', symbol: '♓' }
];

const zodiacProducts = [
  {
    image: "https://images.unsplash.com/photo-1601058268499-e52658b8ebf8?q=80&w=400&auto=format&fit=crop",
    title: "7 Mukhi Rudraksha - Nepal",
    price: "Rs. 690.00",
    oldPrice: "Rs. 1,500.00"
  },
  {
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400&auto=format&fit=crop",
    title: "Sanctified Ball Pen",
    price: "Rs. 492.00",
    oldPrice: "Rs. 780.00"
  },
  {
    image: "https://images.unsplash.com/photo-1629705912959-197e41b2413e?q=80&w=400&auto=format&fit=crop",
    title: "Shri Baglamukhi Brass Yantra",
    price: "Rs. 996.00",
    oldPrice: "Rs. 1,230.00"
  },
  {
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop",
    title: "Black Tourmaline Diamond Cut",
    price: "Rs. 555.00",
    oldPrice: "Rs. 780.00"
  }
];

export default function Features() {
  return (
    <section className="py-24 relative bg-[#FAF8F5] border-y border-[#C99C3D]/10" id="zodiac">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-sans text-[#2C241B]">
             Shop by Zodiac — <span className="italic text-[#5C4B3D]">What the universe recommends.</span>
           </h2>
        </div>

        <div className="flex flex-col xl:flex-row gap-10 items-start">
           
           {/* Left: Zodiac Grid */}
           <div className="w-full xl:w-[45%] shrink-0">
             <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
               {signs.map((sign, idx) => (
                  <button 
                    key={idx}
                    className={`p-4 rounded-2xl flex flex-col items-center justify-center gap-2 border transition-all ${
                      sign.active 
                        ? 'bg-gold-500/10 border-gold-500 text-gold-600 shadow-[0_0_15px_rgba(212,175,55,0.15)]' 
                        : 'bg-white border-[#C99C3D]/20 text-[#5C4B3D] hover:bg-[#FAF8F5] hover:border-[#C99C3D]/30'
                    }`}
                  >
                     <span className={`text-3xl ${sign.active ? 'text-gold-600' : 'text-orange-600'}`}>{sign.symbol}</span>
                     <span className="text-sm font-medium tracking-wide">{sign.name}</span>
                  </button>
               ))}
             </div>
           </div>

           {/* Right: Products Carousel */}
           <div className="w-full xl:w-[55%] relative group">
              <div className="overflow-x-auto pb-4 hide-scrollbar flex gap-6 snap-x snap-mandatory">
                 {zodiacProducts.map((prod, idx) => (
                    <div key={idx} className="min-w-[280px] w-[280px] shrink-0 snap-start bg-white border border-[#C99C3D]/10 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all cursor-pointer group/card block">
                       <div className="aspect-[4/3] bg-[#FAF8F5] overflow-hidden relative">
                         <img src={prod.image} className="w-full h-full object-cover opacity-90 group-hover/card:scale-105 transition-transform duration-500" alt={prod.title} />
                       </div>
                       <div className="p-5">
                          <h4 className="text-[#2C241B] font-sans text-lg mb-3 line-clamp-2">{prod.title}</h4>
                          <div className="flex items-center gap-3">
                             <span className="text-gold-600 font-bold text-lg">{prod.price}</span>
                             <span className="text-[#8C735D] line-through text-sm">{prod.oldPrice}</span>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
              
              {/* Fake carousel buttons */}
              <button className="absolute left-[-20px] top-[40%] -translate-y-1/2 w-12 h-12 bg-white border border-[#C99C3D]/20 rounded-full flex items-center justify-center text-[#2C241B] shadow-xl hover:bg-gold-500 hover:border-gold-500 hover:text-[#2C241B] transition-colors z-10 hidden xl:flex">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="absolute right-[-20px] top-[40%] -translate-y-1/2 w-12 h-12 bg-white border border-[#C99C3D]/20 rounded-full flex items-center justify-center text-[#2C241B] shadow-xl hover:bg-gold-500 hover:border-gold-500 hover:text-[#2C241B] transition-colors z-10 hidden xl:flex">
                <ChevronRight className="w-6 h-6" />
              </button>
           </div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
