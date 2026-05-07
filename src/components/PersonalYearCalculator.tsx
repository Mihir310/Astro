import { motion } from 'motion/react';
import { Calendar, ChevronLeft, Sparkles, Heart, TrendingUp, Brain } from 'lucide-react';
import { useState, useEffect } from 'react';

const personalYearInsights = {
  1: {
    title: "New Beginnings & Fresh Start",
    color: "text-red-500",
    bg: "from-red-500/10 to-orange-500/5",
    insights: [
      { icon: TrendingUp, title: "Career", text: "Launch new projects, leadership opportunities, career advancement awaits" },
      { icon: Heart, title: "Relationships", text: "Single? New romantic connections possible. Couples should refresh their bond" },
      { icon: "💰", title: "Finances", text: "Start new ventures. Avoid major spending early in the year" },
      { icon: Brain, title: "Spiritual", text: "Powerful year for personal growth, self-discovery, and independence" }
    ]
  },
  2: {
    title: "Harmony, Patience & Cooperation",
    color: "text-pink-500",
    bg: "from-pink-500/10 to-rose-500/5",
    insights: [
      { icon: Heart, title: "Career", text: "Teamwork and partnerships thrive. Focus on collaboration and diplomacy" },
      { icon: Heart, title: "Relationships", text: "Emotional deepening in relationships. Balance and understanding essential" },
      { icon: "💰", title: "Finances", text: "Avoid major financial risks. Build steady, secure foundations" },
      { icon: Brain, title: "Spiritual", text: "Year of inner peace, intuition, and spiritual partnerships" }
    ]
  },
  3: {
    title: "Creativity, Joy & Expression",
    color: "text-yellow-500",
    bg: "from-yellow-500/10 to-orange-400/5",
    insights: [
      { icon: Sparkles, title: "Career", text: "Creative projects flourish. Communication and networking bring success" },
      { icon: Heart, title: "Relationships", text: "Social gatherings, joy, and fun in relationships. Travel potential" },
      { icon: "💰", title: "Finances", text: "Good time for creative income. Avoid overextending financially" },
      { icon: Brain, title: "Spiritual", text: "Artistic expression, joy, and optimism guide your path" }
    ]
  },
  4: {
    title: "Stability, Hard Work & Foundation",
    color: "text-blue-500",
    bg: "from-blue-500/10 to-cyan-500/5",
    insights: [
      { icon: TrendingUp, title: "Career", text: "Solid progress through hard work. Build strong professional foundations" },
      { icon: Heart, title: "Relationships", text: "Relationships need work but rewards are lasting and stable" },
      { icon: "💰", title: "Finances", text: "Excellent for saving, investing, and building wealth systematically" },
      { icon: Brain, title: "Spiritual", text: "Discipline, structure, and grounding practices bring peace" }
    ]
  },
  5: {
    title: "Change, Freedom & Adventure",
    color: "text-green-500",
    bg: "from-green-500/10 to-emerald-500/5",
    insights: [
      { icon: TrendingUp, title: "Career", text: "Unexpected changes and opportunities. Adaptability is key to success" },
      { icon: Heart, title: "Relationships", text: "Adventure and excitement. Relationships may go through transitions" },
      { icon: "💰", title: "Finances", text: "Opportunities for extra income but avoid risky ventures" },
      { icon: Brain, title: "Spiritual", text: "Freedom, exploration, and liberation guide this transformative year" }
    ]
  },
  6: {
    title: "Responsibility, Harmony & Home",
    color: "text-purple-500",
    bg: "from-purple-500/10 to-pink-500/5",
    insights: [
      { icon: Heart, title: "Career", text: "Service and responsibility bring recognition. Help others in your field" },
      { icon: Heart, title: "Relationships", text: "Focus on family and loved ones. Commitment and care are central" },
      { icon: "💰", title: "Finances", text: "Use resources to help family. Financial responsibility rewards you" },
      { icon: Brain, title: "Spiritual", text: "Healing, compassion, and nurturing relationships are priorities" }
    ]
  },
  7: {
    title: "Introspection, Wisdom & Spirituality",
    color: "text-indigo-500",
    bg: "from-indigo-500/10 to-purple-500/5",
    insights: [
      { icon: Brain, title: "Career", text: "Research and analysis roles excel. Teaching and wisdom sharing blessed" },
      { icon: Heart, title: "Relationships", text: "Time for introspection. Solitude and spiritual growth are key" },
      { icon: "💰", title: "Finances", text: "Quiet year financially. Focus on understanding, not growth" },
      { icon: Brain, title: "Spiritual", text: "Seek knowledge, meditation, and inner wisdom this year" }
    ]
  },
  8: {
    title: "Power, Success & Abundance",
    color: "text-amber-700",
    bg: "from-amber-600/10 to-yellow-600/5",
    insights: [
      { icon: TrendingUp, title: "Career", text: "Peak career success. Leadership and authority positions available" },
      { icon: Heart, title: "Relationships", text: "Power dynamics matter. Be generous and balanced with loved ones" },
      { icon: "💰", title: "Finances", text: "Financial abundance year. Business ventures and investments prosper" },
      { icon: Brain, title: "Spiritual", text: "Manifestation power is strong. Direct your energy wisely" }
    ]
  },
  9: {
    title: "Completion, Closure & Compassion",
    color: "text-rose-500",
    bg: "from-rose-500/10 to-red-500/5",
    insights: [
      { icon: Heart, title: "Career", text: "Completion of projects. Prepare for new cycles. Humanitarian work blessed" },
      { icon: Heart, title: "Relationships", text: "Letting go and forgiveness. Relationship cycles complete or transform" },
      { icon: "💰", title: "Finances", text: "Year of endings. Avoid major new financial commitments" },
      { icon: Brain, title: "Spiritual", text: "Universal love, service, and spiritual completion guide this cycle" }
    ]
  },
  11: {
    title: "Master Number - Spiritual Awakening",
    color: "text-cyan-500",
    bg: "from-cyan-500/10 to-blue-400/5",
    insights: [
      { icon: Brain, title: "Career", text: "Heightened intuition in career. Teaching and inspiring others blessed" },
      { icon: Heart, title: "Relationships", text: "Deep spiritual connections. Relationships evolve to higher consciousness" },
      { icon: "💰", title: "Finances", text: "Financial flow through spiritual alignment and higher purpose" },
      { icon: Brain, title: "Spiritual", text: "Peak spiritual awakening year. Trust your intuition completely" }
    ]
  },
  22: {
    title: "Master Number - Master Builder",
    color: "text-gold-500",
    bg: "from-gold-500/10 to-yellow-600/5",
    insights: [
      { icon: TrendingUp, title: "Career", text: "Build something lasting and significant. Major projects succeed" },
      { icon: Heart, title: "Relationships", text: "Create stable, long-lasting partnerships. Legacy building year" },
      { icon: "💰", title: "Finances", text: "Large-scale financial plans materialize. Building wealth dynasty" },
      { icon: Brain, title: "Spiritual", text: "Master builder energy. Create transformative change in the world" }
    ]
  },
  33: {
    title: "Master Number - Master Healer",
    color: "text-fuchsia-500",
    bg: "from-fuchsia-500/10 to-purple-500/5",
    insights: [
      { icon: Heart, title: "Career", text: "Healing professions thrive. Teaching with compassion brings rewards" },
      { icon: Heart, title: "Relationships", text: "Unconditional love flows. Healing family and community relationships" },
      { icon: "💰", title: "Finances", text: "Abundance through service and healing work" },
      { icon: Brain, title: "Spiritual", text: "Year of universal healing, compassion, and spiritual service" }
    ]
  }
};

export default function PersonalYearCalculator() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear().toString());
  const [personalYear, setPersonalYear] = useState<number | null>(null);
  const [error, setError] = useState('');

  const reduceToSingleOrMaster = (num: number): number => {
    while (num > 9 && ![11, 22, 33].includes(num)) {
      num = Math.floor(num / 10) + (num % 10);
    }
    return num;
  };

  const calculatePersonalYear = () => {
    setError('');
    if (!day || !month || !year || !currentYear) {
      setError('Please fill in all fields');
      return;
    }

    const dayNum = parseInt(day);
    const monthNum = parseInt(month);

    if (dayNum < 1 || dayNum > 31 || monthNum < 1 || monthNum > 12) {
      setError('Please enter valid date');
      return;
    }

    const daySum = Math.floor(dayNum / 10) + (dayNum % 10);
    const monthSum = Math.floor(monthNum / 10) + (monthNum % 10);
    const yearSum = Array.from(currentYear).reduce((sum, digit) => sum + parseInt(digit), 0);

    const total = daySum + monthSum + yearSum;
    const result = reduceToSingleOrMaster(total);
    setPersonalYear(result);
  };

  const insight = personalYear ? personalYearInsights[personalYear as keyof typeof personalYearInsights] : null;

  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-br from-[#FFFAF5] via-white to-[#FBF9F6] pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 w-full flex-grow flex flex-col">
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
            Personal Year Number Calculator
          </h1>
          <p className="text-charcoal-700 text-lg">Discover your numerology guidance for the year ahead</p>
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
                <label className="block text-sm font-semibold text-charcoal-900 mb-2">Birth Date</label>
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

              <div>
                <label className="block text-sm font-semibold text-charcoal-900 mb-2">Current Year</label>
                <input
                  type="number"
                  value={currentYear}
                  onChange={(e) => setCurrentYear(e.target.value)}
                  className="w-full px-4 py-3 border border-gold-500/30 rounded-lg bg-white/50 text-charcoal-900 focus:outline-none focus:border-gold-500 focus:bg-white transition-all"
                />
                <p className="text-xs text-charcoal-600 mt-1">For future readings, enter the desired year</p>
              </div>

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-red-700 text-sm font-medium">{error}</p>
                </div>
              )}

              <button
                onClick={calculatePersonalYear}
                className="w-full py-4 bg-gradient-to-r from-burgundy-600 to-copper-500 hover:from-burgundy-700 hover:to-copper-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-burgundy-600/30 flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                Calculate Personal Year
              </button>
            </div>
          </motion.div>

          {/* Result Card */}
          {personalYear && insight && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className={`bg-gradient-to-br ${insight.bg} backdrop-blur-xl border border-gold-500/30 rounded-2xl p-8 shadow-lg`}
            >
              {/* Personal Year Number */}
              <div className="text-center mb-8">
                <p className="text-sm text-gold-600 uppercase font-bold tracking-widest mb-2">Your Personal Year</p>
                <div className="flex justify-center">
                  <div className={`text-7xl font-bold ${insight.color} drop-shadow-lg`}>
                    {personalYear}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h2 className={`text-2xl font-sans font-bold text-charcoal-900 text-center mb-6`}>
                {insight.title}
              </h2>

              {/* Insights Grid */}
              <div className="space-y-4">
                {insight.insights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-white/50"
                  >
                    <p className="font-bold text-charcoal-900 mb-1 text-sm">{item.title}</p>
                    <p className="text-charcoal-700 text-sm leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* Footer Note */}
              <p className="text-xs text-charcoal-600 text-center mt-6 italic">
                Use this guidance for the year. Your free will shapes your outcome.
              </p>
            </motion.div>
          )}
        </div>

        {/* Info Section */}
        {!personalYear && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 bg-gradient-to-r from-gold-100/50 to-copper-100/50 backdrop-blur-sm border border-gold-500/30 rounded-2xl p-8"
          >
            <h3 className="text-lg font-bold text-charcoal-900 mb-4">How Personal Year Numbers Work</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-charcoal-700">
              <div>
                <p className="font-semibold mb-2">Calculation Method:</p>
                <p className="text-xs">Add birth day + birth month + current year digits, then reduce to single digit or master number (11, 22, 33)</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Example:</p>
                <p className="text-xs">DOB: 14/08 | Year: 2026 = 1+4+8+2+0+2+6 = 23 → 2+3 = 5</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
