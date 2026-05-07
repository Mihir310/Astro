import { motion } from 'motion/react';
import { ChevronLeft, Sparkles } from 'lucide-react';
import { useState } from 'react';

const colorMappings = {
  1: {
    colors: ['#FF4D4D', '#FF8C42'],
    names: ['Red', 'Orange'],
    hex: ['#FF4D4D', '#FF8C42'],
    meaning: 'Leadership, courage, and new beginnings',
    guidance: [
      'Wear red or orange to boost confidence and take charge',
      'Paint your office accent wall in these power colors',
      'Use as phone wallpaper to energize your day',
      'Red wallet attracts prosperity and success energy'
    ]
  },
  2: {
    colors: ['#FFFFFF', '#FFF8DC'],
    names: ['White', 'Cream'],
    hex: ['#FFFFFF', '#FFF8DC'],
    meaning: 'Balance, peace, and harmony',
    guidance: [
      'White clothing brings calm and clarity to your mind',
      'Cream-colored spaces promote emotional peace',
      'Use for meditation and introspection',
      'Cream wallet attracts gentle prosperity flow'
    ]
  },
  3: {
    colors: ['#FFD700', '#FFC700'],
    names: ['Yellow', 'Gold'],
    hex: ['#FFD700', '#FFC700'],
    meaning: 'Creativity, joy, and expression',
    guidance: [
      'Wear yellow to boost creative energy and optimism',
      'Bright workspace accents enhance communication',
      'Use as wallpaper to invite happiness daily',
      'Yellow wallet attracts joyful abundance'
    ]
  },
  4: {
    colors: ['#4169E1', '#00BFFF'],
    names: ['Blue', 'Sky Blue'],
    hex: ['#4169E1', '#00BFFF'],
    meaning: 'Stability, trust, and integrity',
    guidance: [
      'Blue clothing boosts confidence and trust',
      'Paint workspace in blue for focus and calm',
      'Use for concentration and mental clarity',
      'Blue wallet attracts stable, steady wealth'
    ]
  },
  5: {
    colors: ['#00AA44', '#32CD32'],
    names: ['Green', 'Lime Green'],
    hex: ['#00AA44', '#32CD32'],
    meaning: 'Growth, freedom, and renewal',
    guidance: [
      'Green clothing attracts change and new opportunities',
      'Add green plants to your workspace for energy',
      'Use as wallpaper to welcome transformation',
      'Green wallet invites growth and expansion'
    ]
  },
  6: {
    colors: ['#FFB6C1', '#FF69B4'],
    names: ['Pink', 'Hot Pink'],
    hex: ['#FFB6C1', '#FF69B4'],
    meaning: 'Love, compassion, and harmony',
    guidance: [
      'Pink clothing opens your heart and attracts love',
      'Soft pink decor creates nurturing atmosphere',
      'Use for relationships and family focus',
      'Pink wallet attracts generous abundance'
    ]
  },
  7: {
    colors: ['#9370DB', '#8A2BE2'],
    names: ['Violet', 'Purple'],
    hex: ['#9370DB', '#8A2BE2'],
    meaning: 'Wisdom, spirituality, and intuition',
    guidance: [
      'Purple clothing enhances intuition and perception',
      'Violet spaces support meditation and reflection',
      'Use for spiritual practice and growth',
      'Purple wallet attracts mystical abundance'
    ]
  },
  8: {
    colors: ['#000000', '#1C1C7C'],
    names: ['Black', 'Dark Blue'],
    hex: ['#000000', '#1C1C7C'],
    meaning: 'Power, strength, and material success',
    guidance: [
      'Black clothing projects power and authority',
      'Dark accents in office enhance financial focus',
      'Use for business and wealth building',
      'Black wallet attracts serious wealth accumulation'
    ]
  },
  9: {
    colors: ['#8B0000', '#DC143C'],
    names: ['Maroon', 'Crimson'],
    hex: ['#8B0000', '#DC143C'],
    meaning: 'Compassion, completion, and universal love',
    guidance: [
      'Maroon clothing supports healing and service',
      'Deep red spaces promote transformation',
      'Use for endings and new beginnings',
      'Maroon wallet attracts generous abundance'
    ]
  },
  11: {
    colors: ['#00D9FF', '#1E90FF'],
    names: ['Cyan', 'Dodger Blue'],
    hex: ['#00D9FF', '#1E90FF'],
    meaning: 'Spiritual insight, intuition, and inspiration',
    guidance: [
      'Master number colors enhance spiritual connection',
      'Wear cyan to amplify intuitive abilities',
      'Use for meditation and higher consciousness',
      'Cyan wallet attracts spiritual abundance'
    ]
  },
  22: {
    colors: ['#FFD700', '#DAA520'],
    names: ['Gold', 'Goldenrod'],
    hex: ['#FFD700', '#DAA520'],
    meaning: 'Mastery, building legacy, and grand vision',
    guidance: [
      'Gold clothing supports major projects and vision',
      'Golden accents create manifestation energy',
      'Use for ambitious goals and legacy building',
      'Gold wallet attracts master-builder abundance'
    ]
  },
  33: {
    colors: ['#FF1493', '#9370DB'],
    names: ['Deep Pink', 'Violet'],
    hex: ['#FF1493', '#9370DB'],
    meaning: 'Universal healing, compassion, and service',
    guidance: [
      'These colors support healing professions',
      'Wear for service and compassionate work',
      'Use in healing spaces and clinics',
      'Magenta wallet attracts healing abundance'
    ]
  }
};

export default function LuckyColourCalculator() {
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [lifePathNumber, setLifePathNumber] = useState<number | null>(null);
  const [colors, setColors] = useState<any>(null);
  const [error, setError] = useState('');

  const reduceToSingleOrMaster = (num: number): number => {
    while (num > 9 && ![11, 22, 33].includes(num)) {
      num = Math.floor(num / 10) + (num % 10);
    }
    return num;
  };

  const calculateColors = () => {
    setError('');
    if (!name || !day || !month || !year) {
      setError('Please fill in all fields');
      return;
    }

    const dayNum = parseInt(day);
    const monthNum = parseInt(month);

    if (dayNum < 1 || dayNum > 31 || monthNum < 1 || monthNum > 12) {
      setError('Please enter a valid date');
      return;
    }

    // Calculate Life Path Number
    const daySum = Math.floor(dayNum / 10) + (dayNum % 10);
    const monthSum = Math.floor(monthNum / 10) + (monthNum % 10);
    const yearSum = Array.from(year).reduce((sum, digit) => sum + parseInt(digit), 0);

    const total = daySum + monthSum + yearSum;
    const lifePath = reduceToSingleOrMaster(total);

    setLifePathNumber(lifePath);
    setColors(colorMappings[lifePath as keyof typeof colorMappings]);
  };

  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-br from-[#FFFAF5] via-white to-[#FBF9F6] pt-32 pb-16">
      <div className="max-w-5xl mx-auto px-4 w-full flex-grow flex flex-col">
        {/* Header */}
        <motion.button
          onClick={() => window.location.hash = '#/calculators'}
          className="flex items-center gap-2 text-gold-600 hover:text-gold-700 mb-8 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Back to Calculators</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-charcoal-900 mb-3">
            Lucky Colour Calculator
          </h1>
          <p className="text-charcoal-700 text-lg">Discover your power colors based on numerology</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/60 backdrop-blur-xl border border-gold-500/20 rounded-2xl p-8 shadow-lg"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-charcoal-900 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gold-500/30 rounded-lg bg-white/50 text-charcoal-900 placeholder-charcoal-500 focus:outline-none focus:border-gold-500 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal-900 mb-2">Date of Birth</label>
                <div className="flex gap-3">
                  <input
                    type="number"
                    placeholder="DD"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    min="1"
                    max="31"
                    className="flex-1 px-4 py-3 border border-gold-500/30 rounded-lg bg-white/50 text-charcoal-900 placeholder-charcoal-500 focus:outline-none focus:border-gold-500 focus:bg-white transition-all"
                  />
                  <input
                    type="number"
                    placeholder="MM"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    min="1"
                    max="12"
                    className="flex-1 px-4 py-3 border border-gold-500/30 rounded-lg bg-white/50 text-charcoal-900 placeholder-charcoal-500 focus:outline-none focus:border-gold-500 focus:bg-white transition-all"
                  />
                  <input
                    type="number"
                    placeholder="YYYY"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gold-500/30 rounded-lg bg-white/50 text-charcoal-900 placeholder-charcoal-500 focus:outline-none focus:border-gold-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-red-700 text-sm font-medium">{error}</p>
                </div>
              )}

              <button
                onClick={calculateColors}
                className="w-full py-4 bg-gradient-to-r from-burgundy-600 to-copper-500 hover:from-burgundy-700 hover:to-copper-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-burgundy-600/30 flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                Discover Lucky Colors
              </button>
            </div>
          </motion.div>

          {/* Result Card */}
          {colors && lifePathNumber && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/60 backdrop-blur-xl border border-gold-500/30 rounded-2xl p-8 shadow-lg"
            >
              {/* Life Path Number */}
              <div className="text-center mb-8">
                <p className="text-sm text-gold-600 uppercase font-bold tracking-widest mb-2">Your Life Path Number</p>
                <div className="text-6xl font-bold text-charcoal-900 mb-4">{lifePathNumber}</div>
              </div>

              {/* Color Swatches */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {colors.hex.map((hex: string, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="space-y-2"
                  >
                    <div
                      className="w-full h-32 rounded-lg shadow-lg border-2 border-white cursor-pointer hover:scale-105 transition-transform"
                      style={{ backgroundColor: hex }}
                    />
                    <p className="text-center text-sm font-semibold text-charcoal-900">{colors.names[idx]}</p>
                    <p className="text-center text-xs text-charcoal-600">{hex}</p>
                  </motion.div>
                ))}
              </div>

              {/* Meaning */}
              <div className="mb-6 p-4 bg-gold-500/10 rounded-lg border border-gold-500/30">
                <p className="text-sm text-charcoal-900">
                  <span className="font-bold">Meaning: </span>
                  {colors.meaning}
                </p>
              </div>

              {/* Guidance */}
              <div className="space-y-2">
                <p className="text-sm font-bold text-charcoal-900 mb-3">How to Use These Colors:</p>
                {colors.guidance.map((item: string, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="flex gap-3 text-sm text-charcoal-700"
                  >
                    <span className="text-gold-600 font-bold">•</span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Info Section */}
        {!colors && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 bg-gradient-to-r from-gold-100/50 to-copper-100/50 backdrop-blur-sm border border-gold-500/30 rounded-2xl p-8"
          >
            <h3 className="text-lg font-bold text-charcoal-900 mb-4">Understanding Your Lucky Colors</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-charcoal-700">
              <div>
                <p className="font-semibold mb-2">✨ Life Path Number</p>
                <p className="text-xs">Calculated from your birth date, your Life Path Number reveals your core character and lucky colors that amplify your natural energy.</p>
              </div>
              <div>
                <p className="font-semibold mb-2">🎨 Color Vibrational Energy</p>
                <p className="text-xs">Each color carries unique vibrations. Wearing or surrounding yourself with your lucky colors attracts positive energy and opportunities.</p>
              </div>
              <div>
                <p className="font-semibold mb-2">👗 Practical Applications</p>
                <p className="text-xs">Wear in clothing, decorate your space, use on accessories, or set as wallpaper - consistent exposure amplifies benefits.</p>
              </div>
              <div>
                <p className="font-semibold mb-2">⚡ Power Activation</p>
                <p className="text-xs">Your lucky colors work best when you wear them with intention and awareness of their meaning and energy.</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
