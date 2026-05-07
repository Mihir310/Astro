import { motion } from 'motion/react';
import { ShoppingBag, Clock, Star, Heart, Sparkles, Zap, Home, Gem } from 'lucide-react';
import { useState } from 'react';

type ServiceItem = {
  id: string;
  title: string;
  posterTitle: string;
  price: string;
  image: string;
  description: string;
  astrologyValue: string;
  category?: string;
  deliveryTime?: string;
  icon?: React.ComponentType<{ className: string }>;
  isFeatured?: boolean;
};

const categoryTabs = [
  { id: 'all', label: 'All Services' },
  { id: 'numerology', label: 'Numerology' },
  { id: 'signature', label: 'Signature' },
  { id: 'astrology', label: 'Astrology' },
  { id: 'remedies', label: 'Remedies' },
];

const getServiceIcon = (id: string) => {
  const iconMap: { [key: string]: React.ComponentType<{ className: string }> } = {
    'numerology-name': Sparkles,
    'lucky-signature': Zap,
    'lucky-name-signature': Star,
    'vehicle-number': Home,
    'shubh-muhurat': Clock,
    'mobile-number': Heart,
    'gemstone': Gem,
    'baby-alphabet': Star,
    'kundali-matching': Heart,
    'name-analysis': Sparkles,
    'lucky-bracelet': Gem,
    'switchword': Zap,
    'rudraksha': Gem,
    'remedies': Sparkles,
    'crystal': Gem,
    'lal-kitab': Star,
    'rudraksha-health': Heart,
    'marriage-muhurat': Heart,
    'engagement-muhurat': Sparkles,
  };
  return iconMap[id] || Sparkles;
};

const getServiceCategory = (id: string): string => {
  if (id.includes('numerology') || id.includes('name') || id.includes('signature')) return 'numerology';
  if (id.includes('signature')) return 'signature';
  if (id.includes('muhurat') || id.includes('kundali') || id.includes('marriage') || id.includes('engagement')) return 'astrology';
  if (id.includes('remedy') || id.includes('lal') || id.includes('crystal') || id.includes('gemstone') || id.includes('rudraksha')) return 'remedies';
  return 'all';
};

const serviceItems: ServiceItem[] = [
  {
    id: 'numerology-name',
    title: 'Numerology Name Suggestion Report',
    posterTitle: 'Name Change Report',
    price: 'Rs. 4,200.00',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop',
    description: 'Align your name with cosmic vibrations for prosperity.',
    astrologyValue: 'Aligns your name with cosmic vibrations.',
    category: 'numerology',
    deliveryTime: '3-5 days',
    isFeatured: false
  },
  {
    id: 'lucky-signature',
    title: 'Lucky Signature Suggestion Report',
    posterTitle: 'Lucky Signature Report',
    price: 'Rs. 5,100.00',
    image: 'https://images.unsplash.com/photo-1516321728826-10f4c20de600?w=400&h=400&fit=crop',
    description: 'Design a signature that amplifies your personal power.',
    astrologyValue: 'Enhances personal magnetism and authority.',
    category: 'signature',
    deliveryTime: '3-5 days',
    isFeatured: true
  },
  {
    id: 'lucky-name-signature',
    title: 'Lucky Name with Signature Report',
    posterTitle: 'Lucky Name Signature Report',
    price: 'Rs. 7,701.00',
    image: 'https://images.unsplash.com/photo-1533000971552-74f7b1dd90a8?w=400&h=400&fit=crop',
    description: 'Complete numerology package for your destiny.',
    astrologyValue: 'Creates synergistic cosmic alignment.',
    category: 'numerology',
    deliveryTime: '5-7 days',
    isFeatured: false
  },
  {
    id: 'vehicle-number',
    title: 'Lucky Vehicle Number Suggestion',
    posterTitle: 'Vehicle Number Suggestion',
    price: 'Rs. 996.00',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop',
    description: 'Choose an auspicious vehicle number for protection.',
    astrologyValue: 'Protects and guides your travels.',
    category: 'numerology',
    deliveryTime: '1-2 days',
    isFeatured: false
  },
  {
    id: 'shubh-muhurat',
    title: 'Shubh Muhurat Suggestion',
    posterTitle: 'Shubh Muhurat Report',
    price: 'Rs. 501.00',
    image: 'https://images.unsplash.com/photo-1533884642892-4c88ffe44dab?w=400&h=400&fit=crop',
    description: 'Find the most auspicious time for your events.',
    astrologyValue: 'Aligns with favorable planetary positions.',
    category: 'astrology',
    deliveryTime: '1-2 days',
    isFeatured: false
  },
  {
    id: 'mobile-number',
    title: 'Lucky Mobile Number Suggestion',
    posterTitle: 'Lucky Mobile Number',
    price: 'Rs. 996.00',
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=400&h=400&fit=crop',
    description: 'Select a mobile number with positive energy flow.',
    astrologyValue: 'Attracts beneficial contacts and opportunities.',
    category: 'numerology',
    deliveryTime: '1-2 days',
    isFeatured: false
  },
  {
    id: 'gemstone',
    title: 'Lucky Gemstone Suggestion',
    posterTitle: 'Lucky Gemstone Suggestion',
    price: 'Rs. 996.00',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
    description: 'Discover gemstones for cosmic alignment and wellness.',
    astrologyValue: 'Harnesses planetary energies for wellness.',
    category: 'remedies',
    deliveryTime: '2-3 days',
    isFeatured: false
  },
  {
    id: 'baby-alphabet',
    title: 'Newborn Baby Alphabet Suggestion',
    posterTitle: 'Baby Alphabet Suggestion',
    price: 'Rs. 501.00',
    image: 'https://images.unsplash.com/photo-1503454537688-e6c6ff1e7178?w=400&h=400&fit=crop',
    description: 'Choose an auspicious letter for your baby.',
    astrologyValue: 'Shapes personality and life trajectory.',
    category: 'numerology',
    deliveryTime: '1-2 days',
    isFeatured: false
  },
  {
    id: 'kundali-matching',
    title: 'Kundali Matching for Marriage',
    posterTitle: 'Marriage Matching Report',
    price: 'Rs. 3,300.00',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
    description: 'Ensure compatibility and cosmic harmony in relationships.',
    astrologyValue: 'Analyzes astrological compatibility between partners.',
    category: 'astrology',
    deliveryTime: '5-7 days',
    isFeatured: true
  },
  {
    id: 'name-analysis',
    title: 'Name and Signature Analysis Report',
    posterTitle: 'Name Signature Analysis',
    price: 'Rs. 2,400.00',
    image: 'https://images.unsplash.com/photo-1524657634328-a4e3e48da7ba?w=400&h=400&fit=crop',
    description: 'Analyze hidden meanings and energies in your identity.',
    astrologyValue: 'Reveals your life purpose and potential.',
    category: 'numerology',
    deliveryTime: '3-5 days',
    isFeatured: false
  },
  {
    id: 'lucky-bracelet',
    title: 'Lucky Bracelet Suggestion',
    posterTitle: 'Lucky Bracelet Suggestion',
    price: 'Rs. 996.00',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
    description: 'Wear auspicious bracelets for prosperity and protection.',
    astrologyValue: 'Creates protective talismans for success.',
    category: 'remedies',
    deliveryTime: '2-3 days',
    isFeatured: false
  },
  {
    id: 'switchword',
    title: 'Get a Switchword',
    posterTitle: 'Order Your Switchword',
    price: 'Rs. 996.00',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop',
    description: 'Personalized switchwords for manifestation and success.',
    astrologyValue: 'Reprograms your subconscious mind.',
    category: 'remedies',
    deliveryTime: '1-2 days',
    isFeatured: false
  },
  {
    id: 'rudraksha',
    title: 'Lucky Rudraksha Suggestion',
    posterTitle: 'Rudraksha Suggestion',
    price: 'Rs. 996.00',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
    description: 'Ancient Rudraksha beads for spiritual vibrations.',
    astrologyValue: 'Channels specific cosmic energies.',
    category: 'remedies',
    deliveryTime: '2-3 days',
    isFeatured: false
  },
  {
    id: 'remedies',
    title: 'Lucky Remedies Suggestions',
    posterTitle: 'Lucky Remedies Suggestion',
    price: 'Rs. 2,499.00',
    image: 'https://images.unsplash.com/photo-1599050775108-b95b0a3a3f10?w=400&h=400&fit=crop',
    description: 'Astrological remedies to balance planetary influences.',
    astrologyValue: 'Neutralizes negative effects effectively.',
    category: 'remedies',
    deliveryTime: '3-5 days',
    isFeatured: false
  },
  {
    id: 'crystal',
    title: 'Lucky Crystal Suggestion',
    posterTitle: 'Lucky Crystal Suggestion',
    price: 'Rs. 996.00',
    image: 'https://images.unsplash.com/photo-1548365328-c9403de7d6a7?w=400&h=400&fit=crop',
    description: 'Healing crystals for zodiac and numerology balance.',
    astrologyValue: 'Amplifies positive cosmic vibrations.',
    category: 'remedies',
    deliveryTime: '2-3 days',
    isFeatured: false
  },
  {
    id: 'lal-kitab',
    title: 'Lal Kitab Varshphal Remedies',
    posterTitle: 'Lal Kitab Remedies',
    price: 'Rs. 6,000.00',
    image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=400&fit=crop',
    description: 'Ancient Lal Kitab remedies with practical solutions.',
    astrologyValue: 'Offers unique and effective remedies.',
    category: 'remedies',
    deliveryTime: '5-7 days',
    isFeatured: false
  },
  {
    id: 'rudraksha-health',
    title: 'Rudraksha Report - A Complete Guide for Health',
    posterTitle: 'Lucky Rudraksha Report',
    price: 'Rs. 0.00',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop',
    description: 'Comprehensive guide to Rudraksha benefits.',
    astrologyValue: 'Reveals spiritual and health properties.',
    category: 'remedies',
    deliveryTime: 'Instant',
    isFeatured: false
  },
  {
    id: 'marriage-muhurat',
    title: 'Shubh Muhurat For Marriage',
    posterTitle: 'Marriage Muhurat',
    price: 'Rs. 1,140.00',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
    description: 'Find the perfect astrological timing for marriage.',
    astrologyValue: 'Ensures divine blessings for marriage.',
    category: 'astrology',
    deliveryTime: '2-3 days',
    isFeatured: false
  },
  {
    id: 'engagement-muhurat',
    title: 'Shubh Muhurat For Engagement',
    posterTitle: 'Engagement Muhurat',
    price: 'Rs. 1,140.00',
    image: 'https://images.unsplash.com/photo-1552035159-d68ef8c17f0e?w=400&h=400&fit=crop',
    description: 'Auspicious timing for your engagement ceremony.',
    astrologyValue: 'Sets positive tone for your relationship.',
    category: 'astrology',
    deliveryTime: '2-3 days',
    isFeatured: false
  },
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleServiceClick = (serviceId: string) => {
    window.location.hash = `#/service/${serviceId}`;
  };

  const filteredServices = selectedCategory === 'all' 
    ? serviceItems 
    : serviceItems.filter(s => s.category === selectedCategory);

  return (
    <section className="relative py-32 overflow-hidden" id="services">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFFAF5] via-[#FDF8F3] to-[#FAF6F1]"></div>
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_50%,rgba(212,175,55,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(107,28,35,0.08),transparent_50%)]"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Premium Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-[0.3em] text-gold-600 font-semibold">Premium Spiritual Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-sans font-bold text-charcoal-900 mb-6 leading-tight">
              Transform Your Destiny with <span className="text-gold-600">Personalized Guidance</span>
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Expert consultation designed to align your path with cosmic energies. Each service is personalized to your unique spiritual journey.
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === tab.id
                    ? 'bg-gold-600 text-white shadow-lg shadow-gold-600/30'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-gold-300 hover:shadow-md'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const IconComponent = getServiceIcon(service.id);
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.5 }}
                  onClick={() => handleServiceClick(service.id)}
                  className="group cursor-pointer h-full"
                >
                  {/* Premium Card */}
                  <div className="relative h-full bg-white/60 backdrop-blur-md rounded-3xl border border-white/80 hover:border-gold-400/60 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/20 hover:-translate-y-2">
                    
                    {/* Featured Badge */}


                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden bg-gray-200">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Premium Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>
                      
                      {/* Icon Badge on Image */}
                      <div className="absolute bottom-4 left-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/30 group-hover:bg-gold-500/30 group-hover:border-gold-400/60 transition-all duration-300"
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                      {/* Title */}
                      <h3 className="text-xl font-sans font-semibold text-charcoal-900 mb-3 group-hover:text-gold-600 transition-colors leading-snug">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed line-clamp-2">
                        {service.description}
                      </p>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-gray-200 via-gold-300/30 to-gray-200 mb-4"></div>

                      {/* Price Section */}
                      <div className="mb-5">
                        <div className="flex items-baseline gap-1">
                          <span className="text-sm text-gray-600">Rs.</span>
                          <span className="text-2xl font-bold text-charcoal-900">
                            {service.price.replace('Rs. ', '').replace('.00', '')}
                          </span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold py-3 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30 relative overflow-hidden group/btn"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative">Book Consultation</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20 pt-12 border-t border-gray-200/50 flex flex-col sm:flex-row justify-around items-center gap-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-charcoal-900 mb-1">5000+</div>
              <p className="text-sm text-gray-600">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-charcoal-900 mb-1">20+ Years</div>
              <p className="text-sm text-gray-600">Experience & Expertise</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-charcoal-900 mb-1">100%</div>
              <p className="text-sm text-gray-600">Personalized Approach</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
