import { motion } from 'motion/react';
import { ChevronLeft, Sparkles, CheckCircle, AlertCircle, Zap } from 'lucide-react';
import { useState } from 'react';

export default function VehicleNumberCalculator() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [userLifePath, setUserLifePath] = useState<number | null>(null);
  const [vehicleVibration, setVehicleVibration] = useState<number | null>(null);
  const [compatibility, setCompatibility] = useState<number | null>(null);
  const [error, setError] = useState('');

  const reduceToSingleOrMaster = (num: number): number => {
    while (num > 9 && ![11, 22, 33].includes(num)) {
      num = Math.floor(num / 10) + (num % 10);
    }
    return num;
  };

  const extractNumbers = (str: string): number => {
    const digits = str.match(/\d/g);
    if (!digits) return 0;
    return digits.reduce((sum, digit) => sum + parseInt(digit), 0);
  };

  const calculateCompatibility = () => {
    setError('');
    if (!day || !month || !year || !vehicleNumber) {
      setError('Please fill in all fields');
      return;
    }

    const dayNum = parseInt(day);
    const monthNum = parseInt(month);

    if (dayNum < 1 || dayNum > 31 || monthNum < 1 || monthNum > 12) {
      setError('Please enter a valid date');
      return;
    }

    // Calculate user's life path number
    const daySum = Math.floor(dayNum / 10) + (dayNum % 10);
    const monthSum = Math.floor(monthNum / 10) + (monthNum % 10);
    const yearSum = Array.from(year).reduce((sum, digit) => sum + parseInt(digit), 0);

    const userTotal = daySum + monthSum + yearSum;
    const userPath = reduceToSingleOrMaster(userTotal);

    // Calculate vehicle number vibration
    const vehicleDigitSum = extractNumbers(vehicleNumber);
    const vehicleVib = reduceToSingleOrMaster(vehicleDigitSum);

    // Calculate compatibility (0-100%)
    const diff = Math.abs(userPath - vehicleVib);
    const maxDiff = 8;
    const compat = Math.round(((maxDiff - Math.min(diff, maxDiff)) / maxDiff) * 100);

    setUserLifePath(userPath);
    setVehicleVibration(vehicleVib);
    setCompatibility(compat);
  };

  const getCompatibilityAnalysis = () => {
    if (!compatibility || !userLifePath || !vehicleVibration) return null;

    const analysis = {
      excellent: {
        range: [85, 100],
        status: 'Excellent Match',
        color: 'text-green-600',
        bg: 'from-green-500/10 to-emerald-500/5',
        icon: CheckCircle,
        description: 'This vehicle number perfectly aligns with your life path. Expect smooth journeys, protection, and positive energy.'
      },
      good: {
        range: [70, 84],
        status: 'Good Compatibility',
        color: 'text-emerald-600',
        bg: 'from-emerald-500/10 to-teal-500/5',
        icon: CheckCircle,
        description: 'Strong alignment with your numerology. This vehicle will serve you well with mostly positive influences.'
      },
      moderate: {
        range: [50, 69],
        status: 'Moderate Compatibility',
        color: 'text-amber-600',
        bg: 'from-amber-500/10 to-orange-500/5',
        icon: AlertCircle,
        description: 'Acceptable compatibility. This vehicle is neutral to slightly positive. Add astrological remedies for better results.'
      },
      fair: {
        range: [30, 49],
        status: 'Fair Match',
        color: 'text-orange-600',
        bg: 'from-orange-500/10 to-red-500/5',
        icon: AlertCircle,
        description: 'Some conflicts with your numerology. Consider alternative numbers for better fortune and safety.'
      },
      challenging: {
        range: [0, 29],
        status: 'Challenging',
        color: 'text-red-600',
        bg: 'from-red-500/10 to-rose-500/5',
        icon: AlertCircle,
        description: 'Misaligned with your life path. We recommend choosing a different vehicle number.'
      }
    };

    for (const [key, value] of Object.entries(analysis)) {
      if (compatibility >= value.range[0] && compatibility <= value.range[1]) {
        return { key, ...value };
      }
    }
    return null;
  };

  const getLuckyAlternatives = () => {
    if (!userLifePath) return [];
    const alternatives: string[] = [];

    // Generate compatible numbers
    const baseNumbers = [
      userLifePath,
      userLifePath === 9 ? 1 : userLifePath + 1,
      userLifePath === 1 ? 9 : userLifePath - 1,
    ];

    baseNumbers.forEach(num => {
      alternatives.push(`${num * 10}`);
      alternatives.push(`${num * 10 + 1}`);
      alternatives.push(`${num * 10 + 8}`);
    });

    return [...new Set(alternatives)].slice(0, 6);
  };

  const analysis = getCompatibilityAnalysis();
  const Icon = analysis?.icon || AlertCircle;

  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] pt-32 pb-16">
      <div className="max-w-5xl mx-auto px-4 w-full flex-grow flex flex-col">
        {/* Header */}
        <motion.button
          onClick={() => window.location.hash = '#/calculators'}
          className="flex items-center gap-2 text-gold-400 hover:text-gold-300 mb-8 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Back to Calculators</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-white mb-3">
            Lucky Vehicle Number Calculator
          </h1>
          <p className="text-gray-300 text-lg">Check numerology compatibility for your vehicle</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-xl border border-gold-500/30 rounded-2xl p-8 shadow-2xl"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-100 mb-2">Your Date of Birth</label>
                <div className="flex gap-3">
                  <input
                    type="number"
                    placeholder="DD"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    min="1"
                    max="31"
                    className="flex-1 px-4 py-3 border border-gold-500/30 rounded-lg bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:bg-white/10 transition-all"
                  />
                  <input
                    type="number"
                    placeholder="MM"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    min="1"
                    max="12"
                    className="flex-1 px-4 py-3 border border-gold-500/30 rounded-lg bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:bg-white/10 transition-all"
                  />
                  <input
                    type="number"
                    placeholder="YYYY"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gold-500/30 rounded-lg bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:bg-white/10 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-100 mb-2">Vehicle Registration Number</label>
                <input
                  type="text"
                  placeholder="e.g., GJ05AB4587 or 1234"
                  value={vehicleNumber}
                  onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
                  className="w-full px-4 py-3 border border-gold-500/30 rounded-lg bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:bg-white/10 transition-all"
                />
                <p className="text-xs text-gray-400 mt-1">Enter full or partial registration number</p>
              </div>

              {error && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-red-300 text-sm font-medium">{error}</p>
                </div>
              )}

              <button
                onClick={calculateCompatibility}
                className="w-full py-4 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white font-bold rounded-lg transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 flex items-center justify-center gap-2 group"
              >
                <Zap className="w-5 h-5 group-hover:animate-pulse" />
                Calculate Compatibility
              </button>
            </div>
          </motion.div>

          {/* Result Card */}
          {compatibility !== null && userLifePath && vehicleVibration && analysis && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className={`bg-gradient-to-br ${analysis.bg} backdrop-blur-xl border border-gold-500/30 rounded-2xl p-8 shadow-2xl`}
            >
              {/* Numbers */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <p className="text-gray-400 text-xs font-semibold mb-2">YOUR NUMBER</p>
                  <p className="text-5xl font-bold text-white">{userLifePath}</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-3xl text-gold-400">⚖️</div>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-xs font-semibold mb-2">VEHICLE NUMBER</p>
                  <p className="text-5xl font-bold text-white">{vehicleVibration}</p>
                </div>
              </div>

              {/* Compatibility Percentage */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-300 font-semibold">Compatibility Score</p>
                  <p className={`text-2xl font-bold ${analysis.color}`}>{compatibility}%</p>
                </div>
                <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${compatibility}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${
                      compatibility >= 85
                        ? 'from-green-400 to-emerald-500'
                        : compatibility >= 70
                        ? 'from-emerald-400 to-teal-500'
                        : compatibility >= 50
                        ? 'from-amber-400 to-orange-500'
                        : 'from-orange-400 to-red-500'
                    }`}
                  />
                </div>
              </div>

              {/* Status */}
              <div className="mb-6 p-4 bg-white/10 rounded-lg border border-white/20 flex items-start gap-3">
                <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${analysis.color}`} />
                <div>
                  <p className={`font-bold mb-1 ${analysis.color}`}>{analysis.status}</p>
                  <p className="text-sm text-gray-300">{analysis.description}</p>
                </div>
              </div>

              {/* Analysis Details */}
              <div className="space-y-3">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-xs text-gray-400 mb-1">POSITIVE EFFECTS</p>
                  <p className="text-sm text-gray-200">
                    {compatibility >= 70
                      ? '✨ Protection during travel, smooth journeys, reduced accidents'
                      : compatibility >= 50
                      ? '✓ Generally safe vehicle choice with positive energy'
                      : '⚠ May experience occasional challenges'}
                  </p>
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-xs text-gray-400 mb-1">RECOMMENDATION</p>
                  <p className="text-sm text-gray-200">
                    {compatibility >= 85
                      ? '🌟 Perfect match! Keep this number.'
                      : compatibility >= 70
                      ? '✓ Recommended. Safe to use.'
                      : compatibility >= 50
                      ? 'Consider alternatives or use remedies'
                      : 'Consider changing to a compatible number'}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Lucky Alternatives */}
        {userLifePath && compatibility !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 bg-white/10 backdrop-blur-xl border border-gold-500/30 rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold-400" />
              Suggested Compatible Vehicle Numbers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {getLuckyAlternatives().map((num, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.05 }}
                  className="p-4 bg-gold-500/20 border border-gold-500/50 rounded-lg text-center hover:bg-gold-500/30 transition-all cursor-pointer"
                >
                  <p className="text-2xl font-bold text-gold-300">{num}</p>
                  <p className="text-xs text-gray-400 mt-1">Highly Compatible</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Info Section */}
        {compatibility === null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 bg-white/10 backdrop-blur-xl border border-gold-500/30 rounded-2xl p-8"
          >
            <h3 className="text-lg font-bold text-white mb-4">How Vehicle Number Numerology Works</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300">
              <div>
                <p className="font-semibold text-gold-300 mb-2">📊 Calculation</p>
                <p className="text-xs">Sum all digits in your vehicle registration number and reduce to single digit (or master 11, 22, 33)</p>
              </div>
              <div>
                <p className="font-semibold text-gold-300 mb-2">🔢 Example</p>
                <p className="text-xs">GJ05AB4587 → 0+5+4+5+8+7 = 29 → 2+9 = 11</p>
              </div>
              <div>
                <p className="font-semibold text-gold-300 mb-2">⚡ Compatibility</p>
                <p className="text-xs">Your Life Path number is compared with vehicle vibration for alignment</p>
              </div>
              <div>
                <p className="font-semibold text-gold-300 mb-2">🛡️ Benefits</p>
                <p className="text-xs">Compatible numbers enhance safety, reduce accidents, improve travel luck</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
