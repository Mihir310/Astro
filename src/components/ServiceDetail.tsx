import { motion } from 'motion/react';
import { ArrowLeft, Heart, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Service {
  id: string;
  title: string;
  price: string;
  image: string;
  description: string;
  astrologyValue: string;
  posterTitle: string;
}

const services: Record<string, Service> = {
  'numerology-name': {
    id: 'numerology-name',
    title: 'Numerology Name Suggestion Report',
    posterTitle: 'Name Change Report',
    price: 'Rs. 4,200.00',
    image: 'https://images.unsplash.com/photo-1544367567-0d6fcffe3c1d?w=600&h=400&fit=crop',
    description: 'Get a personalized name suggestion based on numerology principles to bring prosperity and success in your life.',
    astrologyValue: 'Numerology is the ancient science of numbers and their cosmic vibrations. Each letter holds a numerical value that influences your destiny. A personalized name suggestion aligns your vibrational frequency with your birth numbers (life path, destiny, soul urge) creating harmony between your energy and the universe. This alignment attracts success, prosperity, and fulfillment in all life areas.'
  },
  'lucky-signature': {
    id: 'lucky-signature',
    title: 'Lucky Signature Suggestion Report',
    posterTitle: 'Lucky Signature Report',
    price: 'Rs. 5,100.00',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    description: 'Discover how your signature can influence success and prosperity in business and personal endeavors.',
    astrologyValue: 'Your signature is your personal stamp of energy in the world. In numerology, each letter in your name has a vibrational frequency. A lucky signature designed specifically for you amplifies your positive traits, strengthens your authority, and attracts favorable outcomes in business deals, contracts, and important communications. It acts as a spiritual seal enhancing your personal magnetism.'
  },
  'lucky-name-signature': {
    id: 'lucky-name-signature',
    title: 'Lucky Name with Lucky Signature Report',
    posterTitle: 'Lucky Name Signature Report',
    price: 'Rs. 7,701.00',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    description: 'Complete numerological package combining name and signature for maximum cosmic alignment and success.',
    astrologyValue: 'This comprehensive report combines the power of both name and signature numerology, creating a synergistic effect. Your name shapes your core identity and life path, while your signature seals your intentions and actions. Together, they create a powerful frequency that resonates with the universe, dramatically increasing your success in personal relationships, business ventures, and spiritual growth.'
  },
  'vehicle-number': {
    id: 'vehicle-number',
    title: 'Lucky Vehicle Number Suggestion',
    posterTitle: 'Vehicle Number Suggestion',
    price: 'Rs. 996.00',
    image: 'https://images.unsplash.com/photo-1609708536965-3eb88aeb0bfd?w=600&h=400&fit=crop',
    description: 'Choose an auspicious vehicle number that brings safety, prosperity, and smooth journeys.',
    astrologyValue: 'Your vehicle number carries significant numerological weight in your life. It vibrates with energy that influences your safety, travel experiences, and prosperity. An auspicious vehicle number aligned with your birth chart protects you from accidents, ensures smooth journeys, attracts good fortune, and facilitates successful travels both professionally and personally. Numbers resonate with planetary energies - choosing the right one harmonizes these vibrations.'
  },
  'shubh-muhurat': {
    id: 'shubh-muhurat',
    title: 'Shubh Muhurat Suggestion',
    posterTitle: 'Shubh Muhurat Report',
    price: 'Rs. 501.00',
    image: 'https://images.unsplash.com/photo-1553729784-e91953dec042?w=600&h=400&fit=crop',
    description: 'Find the most auspicious time for important life events and decisions.',
    astrologyValue: 'Shubh Muhurat is a Sanskrit term meaning "auspicious moment." In Vedic astrology, certain times are incredibly favorable for starting new ventures, ceremonies, and life-changing decisions. These moments align with favorable planetary positions and moon phases. Performing important tasks during Shubh Muhurat ensures divine blessings, reduces obstacles, and exponentially increases the chances of success and longevity of your endeavors.'
  },
  'mobile-number': {
    id: 'mobile-number',
    title: 'Lucky Mobile Number Suggestion',
    posterTitle: 'Lucky Mobile Number',
    price: 'Rs. 996.00',
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=600&h=400&fit=crop',
    description: 'Select a mobile number that vibrates with positive energy and attracts success.',
    astrologyValue: 'Your mobile number is more than just a sequence of digits - it\'s a vibrational code that influences your communication, relationships, and business outcomes. In numerology, this frequency affects how people perceive you, their willingness to engage with you, and the quality of interactions. A lucky mobile number aligned with your numerological profile enhances business growth, improves customer relationships, and attracts beneficial contacts.'
  },
  'gemstone': {
    id: 'gemstone',
    title: 'Lucky Gemstone Suggestion',
    posterTitle: 'Lucky Gemstone Suggestion',
    price: 'Rs. 996.00',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
    description: 'Discover gemstones that amplify your cosmic energies and planetary influences.',
    astrologyValue: 'Gemstones are nature\'s most powerful amplifiers of planetary energies. Each stone vibrates at a specific frequency that corresponds to planetary rulers in your astrological chart. Wearing the correct gemstone for your weak or afflicted planets strengthens those planetary influences, neutralizing negative effects and enhancing positive outcomes. They act as cosmic batteries, continuously channeling benefic planetary energies into your aura.'
  },
  'baby-alphabet': {
    id: 'baby-alphabet',
    title: 'Newborn Baby Alphabet Suggestion',
    posterTitle: 'Baby Alphabet Suggestion',
    price: 'Rs. 501.00',
    image: 'https://images.unsplash.com/photo-1503454537688-e6c6ff1e7178?w=600&h=400&fit=crop',
    description: 'Choose an auspicious starting letter for your newborn\'s name.',
    astrologyValue: 'The first letter of a child\'s name is profoundly significant in numerology and Vedic astrology. It carries the primary vibrational signature that shapes the child\'s personality, talents, strengths, and life trajectory. Selecting an auspicious starting letter aligned with the child\'s birth chart ensures they inherit positive traits, experience fewer obstacles, develop strong character, and achieve success across all life domains naturally and effortlessly.'
  },
  'kundali-matching': {
    id: 'kundali-matching',
    title: 'Kundali Matching for Marriage',
    posterTitle: 'Marriage Matching Report',
    price: 'Rs. 3,300.00',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
    description: 'Ensure compatibility and cosmic harmony in marriage with Kundali matching.',
    astrologyValue: 'Kundali (birth chart) matching is the Vedic science of assessing astrological compatibility between partners. It analyzes eight aspects (Ashtakoot) including Moon signs, planetary positions, and doshas (afflictions). A successful match ensures emotional compatibility, financial stability, longevity of marriage, peaceful family life, and harmonious relationships. Marrying without proper Kundali matching can lead to misunderstandings, separation, and unhappiness.'
  },
  'name-analysis': {
    id: 'name-analysis',
    title: 'Name and Signature Analysis Report',
    posterTitle: 'Name Signature Analysis',
    price: 'Rs. 2,400.00',
    image: 'https://images.unsplash.com/photo-1516573398502-247d2c4185c7?w=600&h=400&fit=crop',
    description: 'Analyze the hidden meanings and energies behind your name and signature.',
    astrologyValue: 'Every name carries a unique numerological blueprint that reveals your life purpose, hidden talents, potential challenges, and destiny. Your signature reflects how you present yourself to the world and the energetic impact you have on others. This analysis unveils the hidden meanings, strengths, and weaknesses encoded in your name and signature, providing insights for personal transformation and success.'
  },
  'lucky-bracelet': {
    id: 'lucky-bracelet',
    title: 'Lucky Bracelet Suggestion',
    posterTitle: 'Lucky Bracelet Suggestion',
    price: 'Rs. 996.00',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
    description: 'Wear auspicious bracelets designed to enhance prosperity and protection.',
    astrologyValue: 'Lucky bracelets are specially designed combinations of gemstones, metals, and numerological elements that create a protective and prosperity-enhancing talisman. When worn around your wrist, they continuously emit beneficial vibrations, protect you from negative energies, attract good fortune, and strengthen your connection to cosmic forces. The proximity to your pulse point amplifies their energetic impact on your body and aura.'
  },
  'switchword': {
    id: 'switchword',
    title: 'Get a Switchword',
    posterTitle: 'Order Your Switchword',
    price: 'Rs. 996.00',
    image: 'https://images.unsplash.com/photo-1577720643272-265e434a1ce1?w=600&h=400&fit=crop',
    description: 'Discover personalized switchwords that reprogram your subconscious mind for success.',
    astrologyValue: 'Switchwords are powerful single words (often from numerology and ancient Sanskrit wisdom) that reprogram your subconscious mind and realign your energy. When repeated or meditated upon, a switchword targeted to your specific situation activates dormant potentials, removes mental blockages, and attracts desired outcomes. They work like cosmic passwords that unlock abundance, health, love, and success in specific life areas.'
  },
  'rudraksha': {
    id: 'rudraksha',
    title: 'Lucky Rudraksha Suggestion',
    posterTitle: 'Rudraksha Suggestion',
    price: 'Rs. 996.00',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
    description: 'Ancient Rudraksha beads that carry spiritual vibrations and divine protection.',
    astrologyValue: 'Rudraksha beads are sacred seeds from the Elaeocarpus ganitrus tree, mentioned in ancient Hindu scriptures as divine gifts from Lord Shiva. Each bead type (determined by its "mukhi" or faces) corresponds to different planets and deities. Wearing the correct Rudraksha aligns you with specific planetary energies, provides divine protection, enhances meditation, purifies your aura, and accelerates spiritual and material progress.'
  },
  'remedies': {
    id: 'remedies',
    title: 'Lucky Remedies Suggestions',
    posterTitle: 'Lucky Remedies Suggestion',
    price: 'Rs. 2,499.00',
    image: 'https://images.unsplash.com/photo-1609708536965-3eb88aeb0bfd?w=600&h=400&fit=crop',
    description: 'Astrological remedies to balance planetary influences and remove negative effects.',
    astrologyValue: 'When planets are weak or afflicted in your birth chart, Vedic remedies are prescribed to neutralize negative effects and strengthen positive influences. Remedies include gemstone wearing, mantras, yantras, charitable deeds (daana), specific rituals, and lifestyle modifications. These remedies don\'t change your destiny but optimize its expression, removing obstacles and enabling you to navigate life\'s challenges with grace and success.'
  },
  'crystal': {
    id: 'crystal',
    title: 'Lucky Crystal Suggestion',
    posterTitle: 'Lucky Crystal Suggestion',
    price: 'Rs. 996.00',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
    description: 'Healing crystals chosen for your zodiac and numerology to amplify positive vibrations.',
    astrologyValue: 'Crystals are earth\'s most concentrated forms of pure energy. Each crystal species vibrates at a unique frequency that corresponds to specific chakras, planets, and life purposes. When selected according to your birth chart and life goals, crystals act as amplifiers and filters of cosmic energy. Carrying or wearing the right crystal aligns you with desired frequencies, accelerates healing, and attracts circumstances aligned with your intentions.'
  },
  'lal-kitab': {
    id: 'lal-kitab',
    title: 'Lal Kitab Varshphal Remedies',
    posterTitle: 'Lal Kitab Remedies',
    price: 'Rs. 6,000.00',
    image: 'https://images.unsplash.com/photo-1585399543842-c0b2a0f0f1b8?w=600&h=400&fit=crop',
    description: 'Ancient Lal Kitab remedies with powerful yet simple astrological solutions.',
    astrologyValue: 'Lal Kitab ("Red Book") is an ancient Urdu text containing unique, practical astrological remedies from 300+ years of accumulated wisdom. Unlike classical Vedic astrology, Lal Kitab offers simpler, cost-effective remedies that produce rapid results. Its remedies (often household items and specific actions) work at the energetic level, neutralizing planetary afflictions and activating beneficial planetary energies with remarkable effectiveness.'
  },
  'rudraksha-health': {
    id: 'rudraksha-health',
    title: 'Rudraksha Report - A Complete Guide for Health',
    posterTitle: 'Lucky Rudraksha Report',
    price: 'Rs. 0.00',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
    description: 'Comprehensive guide to Rudraksha beads and their health and spiritual benefits.',
    astrologyValue: 'This free comprehensive guide details each Rudraksha type (1 to 16 mukhi), their planetary associations, health benefits, spiritual properties, and usage guidelines. Understanding Rudraksha properties helps you select the right bead that aligns with your health challenges, spiritual goals, and astrological needs, enabling you to harness their full potential for holistic wellness.'
  },
  'marriage-muhurat': {
    id: 'marriage-muhurat',
    title: 'Shubh Muhurat For Marriage',
    posterTitle: 'Marriage Muhurat',
    price: 'Rs. 1,140.00',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
    description: 'Find the perfect astrological timing for your marriage ceremony.',
    astrologyValue: 'Marriage timing is critical in Hindu astrology. The Shubh Muhurat for marriage is calculated by analyzing planetary positions, lunar phases, and the couple\'s birth charts. A auspicious marriage timing ensures the union begins under favorable planetary influence, grants divine blessings, ensures longevity of marriage, and creates a foundation of harmony, prosperity, and happiness for the couple.'
  },
  'engagement-muhurat': {
    id: 'engagement-muhurat',
    title: 'Shubh Muhurat For Engagement',
    posterTitle: 'Engagement Muhurat',
    price: 'Rs. 1,140.00',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
    description: 'Auspicious timing for your engagement ceremony to begin your journey together.',
    astrologyValue: 'Engagement marks the formal commitment and beginning of your marital journey. Performing engagement during a Shubh Muhurat sets a positive energetic tone for the entire relationship. The auspicious timing aligns both partners\' energies, ensures smooth relationship progression, and removes obstacles that might otherwise arise, creating a harmonious foundation for marriage and future life together.'
  }
};

export default function ServiceDetail() {
  const [serviceId, setServiceId] = useState<string>('');
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    const hash = window.location.hash;
    const id = hash.split('/service/')[1];
    if (id) {
      setServiceId(id);
      setService(services[id] || null);
    }
  }, []);

  if (!service) {
    return (
      <section className="min-h-screen bg-[#FAF8F5] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg text-gray-600">Service not found</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#FAF8F5] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-burgundy-600 hover:text-burgundy-700 font-semibold mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Services
        </motion.button>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-sans font-bold text-charcoal-900 mb-6 leading-tight">
              {service.title}
            </h1>

            <p className="text-xl text-charcoal-700 mb-8 leading-relaxed">
              {service.description}
            </p>

            {/* Astrological Value */}
            <div className="bg-gradient-to-br from-gold-50 to-saffron-50 border border-gold-200/60 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-sans text-burgundy-700 mb-4">Astrological Significance</h2>
              <p className="text-charcoal-900 leading-relaxed text-base">
                {service.astrologyValue}
              </p>
            </div>

            {/* Price and Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              <div>
                <p className="text-sm text-gray-600 mb-2">Price</p>
                <p className="text-4xl font-bold text-burgundy-600">{service.price}</p>
              </div>
              <div className="flex gap-4">
                <a 
                  href={`https://wa.me/919876543210?text=I'm interested in booking ${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-8 py-4 bg-gradient-to-r from-burgundy-600 to-gold-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-gold-500/30 transition-all flex items-center gap-2 justify-center"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.01-5.02 5.338-5.02 8.948 0 1.52.369 3.011 1.012 4.39L1.07 23.5l4.408-1.902c1.25.663 2.738 1.124 4.381 1.124 5.21 0 9.455-4.223 9.455-9.422 0-2.525-.738-4.952-2.147-7.001-1.41-2.047-3.57-3.496-5.77-3.496z"/>
                  </svg>
                  Contact Us
                </a>
                <button className="p-4 border-2 border-gold-400 text-gold-600 rounded-full hover:bg-gold-50 transition-all">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 text-gold-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-500" />
              ))}
              <span className="text-charcoal-700 font-semibold ml-2">Highly Rated Service</span>
            </div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-white rounded-2xl p-12 shadow-lg"
        >
          <h2 className="text-3xl font-sans text-charcoal-900 mb-8">Why Choose This Service?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-burgundy-600 to-copper-500 rounded-full flex items-center justify-center text-white flex-shrink-0 text-xl font-bold">✓</div>
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-2">Expert Analysis</h3>
                <p className="text-gray-600">Provided by certified Vedic astrology experts with years of experience</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-burgundy-600 to-copper-500 rounded-full flex items-center justify-center text-white flex-shrink-0 text-xl font-bold">✓</div>
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-2">Personalized Results</h3>
                <p className="text-gray-600">Tailored specifically to your birth chart and life circumstances</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-burgundy-600 to-copper-500 rounded-full flex items-center justify-center text-white flex-shrink-0 text-xl font-bold">✓</div>
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Thousands of satisfied clients with measurable positive life changes</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-burgundy-600 to-copper-500 rounded-full flex items-center justify-center text-white flex-shrink-0 text-xl font-bold">✓</div>
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-2">Lifetime Value</h3>
                <p className="text-gray-600">Insights and recommendations you can apply throughout your life</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
