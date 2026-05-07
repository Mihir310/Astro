import { motion } from 'motion/react';
import { Sunrise, Sunset, Moon, MoonStar, RefreshCw, AlertCircle, Calculator } from 'lucide-react';
import { useState, useEffect } from 'react';

interface PanchangData {
  day: string;
  tithi: { name: string; end_time: string };
  nakshatra: { name: string; end_time: string };
  yoga: { name: string; end_time: string };
  karan: { name: string; end_time: string };
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  hindu_month: { amanta: string; purnimanta: string };
  vikram_samvat: string;
  shaka_samvat: string;
  abhijit_muhurta: { start: string; end: string };
  rahu_kaal: { start: string; end: string };
}

interface ChoghadiyaPeriod {
  name: string;
  starts_at: string;
  ends_at: string;
}

interface BirthDetails {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  city: string;
}

interface NatalChartResult {
  [key: string]: any;
}

export default function PanchangReports() {
  const [panchang, setPanchang] = useState<PanchangData | null>(null);
  const [choghadiya, setChoghadiya] = useState<Record<string, ChoghadiyaPeriod> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'panchang' | 'choghadiya' | 'natal'>('panchang');

  // Natal Chart States
  const [natalLoading, setNatalLoading] = useState(false);
  const [natalError, setNatalError] = useState<string | null>(null);
  const [natalResult, setNatalResult] = useState<NatalChartResult | null>(null);
  const [natalChartImage, setNatalChartImage] = useState<string | null>(null);
  const [birthDetails, setBirthDetails] = useState<BirthDetails>({
    year: 1990,
    month: 5,
    day: 15,
    hour: 14,
    minute: 30,
    city: "New York"
  });

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      // API calls removed - placeholder component only
      try {
        // Component removed - no API functionality
        setPanchang(null);
        setChoghadiya(null);
      } catch (err: any) {
        setError('API functionality removed');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleNatalCalculation = async () => {
    const apiKey = import.meta.env.VITE_FREE_ASTRO_API_KEY;
    if (!apiKey) {
      setNatalError('Missing VITE_FREE_ASTRO_API_KEY in .env file');
      return;
    }

    setNatalLoading(true);
    setNatalError(null);
    setNatalResult(null);
    setNatalChartImage(null);

    try {
      const response = await fetch('https://api.freeastroapi.com/api/v1/natal/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify(birthDetails),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setNatalResult(data);

      // Try to fetch chart image
      try {
        const chartResponse = await fetch('https://api.freeastroapi.com/api/v1/natal/chart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
          },
          body: JSON.stringify(birthDetails),
        });

        if (chartResponse.ok) {
          const chartData = await chartResponse.json();
          // Chart data might contain image URL or base64 data
          if (chartData.image) {
            setNatalChartImage(chartData.image);
          } else if (chartData.chart) {
            setNatalChartImage(chartData.chart);
          } else if (chartData.url) {
            setNatalChartImage(chartData.url);
          }
        }
      } catch (chartError) {
        console.log('Chart image not available:', chartError);
        // Chart is optional, don't fail if unavailable
      }
    } catch (err: any) {
      setNatalError(err.message || 'Failed to calculate natal chart');
      console.error('Natal calculation error:', err);
    } finally {
      setNatalLoading(false);
    }
  };

  const handleInputChange = (field: keyof BirthDetails, value: any) => {
    setBirthDetails((prev: BirthDetails) => ({
      ...prev,
      [field]: field === 'year' || field === 'month' || field === 'day' || field === 'hour' || field === 'minute' ? parseFloat(value) : value
    }));
  };

  const currentDateDisplay = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <section className="py-16 relative bg-[#FAF8F5]" id="panchang">
      <div className="max-w-7xl flex flex-col mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Numerology Report Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gold-500/20 bg-gradient-to-b from-white to-[#FAF8F5] p-8 flex flex-col items-center text-center relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-gold-500/10 transition-all" />
             <h3 className="text-xl font-sans text-[#2C241B] mb-6 uppercase tracking-wider">Get Your Professional<br/><span className="text-3xl text-gold-600 mt-2 block">Numerology Report</span></h3>
             
             <div className="relative w-48 h-48 mb-8">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-gold-500/30 animate-[spin_60s_linear_infinite]" />
                <img src="https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?q=80&w=400&auto=format&fit=crop" alt="Numerology" className="w-full h-full object-cover rounded-full p-4 mix-blend-multiply opacity-80" />
             </div>
             
             <button className="mt-auto px-8 py-3 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-[#2C241B] font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all uppercase tracking-widest text-sm">
               Get Your Report
             </button>
          </motion.div>

          {/* Rudraksha Report Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl border border-gold-500/20 bg-gradient-to-b from-white to-[#FAF8F5] p-8 flex flex-col items-center text-center relative overflow-hidden group"
          >
             <div className="absolute top-0 left-0 w-64 h-64 bg-orange-400/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-orange-400/10 transition-all" />
             <h3 className="text-xl font-sans text-[#2C241B] mb-6 uppercase tracking-wider">Get Your<br/><span className="text-3xl text-gold-600 mt-2 block">Rudraksha Report</span></h3>
             
             <div className="relative w-48 h-48 mb-8">
                <div className="absolute inset-0 rounded-full bg-gold-500/5 animate-pulse" />
                <img src="https://images.unsplash.com/photo-1601058268499-e52658b8ebf8?q=80&w=400&auto=format&fit=crop" alt="Rudraksha" className="w-full h-full object-cover rounded-full p-2 opacity-90 mix-blend-multiply" />
             </div>
             
             <button className="mt-auto px-8 py-3 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-[#2C241B] font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all uppercase tracking-widest text-sm">
               Get Your Report
             </button>
          </motion.div>

          {/* Panchang Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl border border-gold-500/30 overflow-hidden bg-white/90 flex flex-col relative"
          >
            <div className="bg-gradient-to-r from-gold-600 to-gold-400 text-[#2C241B] text-center pt-4 pb-2">
              <h3 className="text-3xl font-sans font-bold tracking-wide">Today's Alignments</h3>
              <div className="flex justify-center gap-4 mt-4">
                 <button 
                   onClick={() => setActiveTab('panchang')}
                   className={`px-4 py-1 pb-2 border-b-2 font-medium tracking-widest uppercase text-xs transition-colors ${activeTab === 'panchang' ? 'border-[#2C241B] text-[#2C241B]' : 'border-transparent text-[#2C241B]/60 hover:text-[#2C241B]'}`}
                 >
                   Panchang
                 </button>
                 <button 
                   onClick={() => setActiveTab('choghadiya')}
                   className={`px-4 py-1 pb-2 border-b-2 font-medium tracking-widest uppercase text-xs transition-colors ${activeTab === 'choghadiya' ? 'border-[#2C241B] text-[#2C241B]' : 'border-transparent text-[#2C241B]/60 hover:text-[#2C241B]'}`}
                 >
                   Choghadiya
                 </button>
                 <button 
                   onClick={() => setActiveTab('natal')}
                   className={`px-4 py-1 pb-2 border-b-2 font-medium tracking-widest uppercase text-xs transition-colors ${activeTab === 'natal' ? 'border-[#2C241B] text-[#2C241B]' : 'border-transparent text-[#2C241B]/60 hover:text-[#2C241B]'}`}
                 >
                   Natal Chart
                 </button>
              </div>
            </div>
            
            {loading ? (
              <div className="p-6 flex-grow flex flex-col items-center justify-center min-h-[400px]">
                <RefreshCw className="w-8 h-8 text-gold-600 animate-spin mb-4" />
                <p className="text-[#5C4B3D] uppercase tracking-widest text-sm">Aligning Stars...</p>
              </div>
            ) : error ? (
              <div className="p-6 flex-grow flex flex-col items-center justify-center text-center min-h-[400px]">
                <AlertCircle className="w-8 h-8 text-orange-600 mb-4" />
                <p className="text-[#2C241B] font-medium mb-2">{error}</p>
              </div>
            ) : activeTab === 'panchang' && panchang ? (
              <>
                <div className="p-6 flex-grow flex flex-col pb-0 animate-fade-in">
                  <h4 className="text-center text-[#2C241B] font-medium mb-6 uppercase tracking-widest bg-black/5 py-2 rounded-lg">
                    {panchang.day}
                  </h4>
                  
                  <div className="grid grid-cols-4 gap-2 text-center border-b border-[#C99C3D]/20 pb-6 mb-6">
                     <div className="flex flex-col items-center">
                        <Sunrise className="w-6 h-6 text-gold-600 mb-2" />
                        <span className="text-xs text-[#5C4B3D]">{panchang.sunrise}</span>
                     </div>
                     <div className="flex flex-col items-center">
                        <Sunset className="w-6 h-6 text-gold-600 mb-2" />
                        <span className="text-xs text-[#5C4B3D]">{panchang.sunset}</span>
                     </div>
                     <div className="flex flex-col items-center">
                        <Moon className="w-6 h-6 text-orange-600 mb-2" />
                        <span className="text-xs text-[#5C4B3D]">{panchang.moonrise}</span>
                     </div>
                     <div className="flex flex-col items-center">
                        <MoonStar className="w-6 h-6 text-orange-600 mb-2" />
                        <span className="text-xs text-[#5C4B3D]">{panchang.moonset}</span>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm mb-6 flex-grow">
                     <div>
                       <span className="block text-gold-600 uppercase tracking-wider text-xs mb-1">Month</span>
                       <span className="block text-[#4A3C31]">Amanta: {panchang.hindu_month.amanta}</span>
                       <span className="block text-[#4A3C31]">Purnimanta: {panchang.hindu_month.purnimanta}</span>
                     </div>
                     <div>
                       <span className="block text-gold-600 uppercase tracking-wider text-xs mb-1">Samvat</span>
                       <span className="block text-[#4A3C31]">Vikram: {panchang.vikram_samvat}</span>
                       <span className="block text-[#4A3C31]">Shaka: {panchang.shaka_samvat}</span>
                     </div>
                     <div className="col-span-2 border-t border-[#C99C3D]/10 my-1"></div>
                     
                     <div className="col-span-2 flex justify-between">
                        <div><span className="text-gold-600 uppercase tracking-wider text-xs">Tithi:</span> <span className="text-[#4A3C31]">{panchang.tithi.name}</span></div>
                        <div className="text-[#5C4B3D]">Till: {panchang.tithi.end_time}</div>
                     </div>
                     <div className="col-span-2 border-t border-[#C99C3D]/10 my-1"></div>

                     <div className="col-span-2 flex justify-between">
                        <div><span className="text-gold-600 uppercase tracking-wider text-xs">Nakshatra:</span> <span className="text-[#4A3C31]">{panchang.nakshatra.name}</span></div>
                        <div className="text-[#5C4B3D]">Till: {panchang.nakshatra.end_time}</div>
                     </div>
                     <div className="col-span-2 border-t border-[#C99C3D]/10 my-1"></div>
                     
                     <div className="col-span-2 flex justify-between">
                        <div><span className="text-gold-600 uppercase tracking-wider text-xs">Yog:</span> <span className="text-[#4A3C31]">{panchang.yoga.name}</span></div>
                        <div className="text-[#5C4B3D]">Till: {panchang.yoga.end_time}</div>
                     </div>
                     <div className="col-span-2 border-t border-[#C99C3D]/10 my-1"></div>

                     <div className="col-span-2 flex justify-between border-b border-[#C99C3D]/20 pb-4">
                        <div><span className="text-gold-600 uppercase tracking-wider text-xs">Karan:</span> <span className="text-[#4A3C31]">{panchang.karan.name}</span></div>
                        <div className="text-[#5C4B3D]">Till: {panchang.karan.end_time}</div>
                     </div>

                     <div>
                        <span className="block text-gold-600 uppercase tracking-wider text-xs mb-1">Abhijit Muhurta</span>
                        <span className="block text-[#8C735D]">Start : <span className="text-[#4A3C31]">{panchang.abhijit_muhurta.start}</span></span>
                        <span className="block text-[#8C735D]">End : <span className="text-[#4A3C31]">{panchang.abhijit_muhurta.end}</span></span>
                     </div>
                     <div>
                        <span className="block text-gold-600 uppercase tracking-wider text-xs mb-1">Rahu Kaal</span>
                        <span className="block text-[#8C735D]">Start : <span className="text-[#4A3C31]">{panchang.rahu_kaal.start}</span></span>
                        <span className="block text-[#8C735D]">End : <span className="text-[#4A3C31]">{panchang.rahu_kaal.end}</span></span>
                     </div>
                  </div>
                </div>
                <button className="bg-gold-500 hover:bg-gold-400 text-[#2C241B] py-4 font-bold uppercase tracking-widest text-sm transition-colors border-t border-gold-500/20 mt-4 rounded-b-[-1px]">
                  Full Detailed Panchang
                </button>
              </>
            ) : activeTab === 'choghadiya' && choghadiya ? (
              <>
                <div className="p-6 flex-grow flex flex-col pb-0 overflow-y-auto max-h-[500px] animate-fade-in custom-scrollbar">
                   <h4 className="text-center text-[#2C241B] font-medium mb-6 uppercase tracking-widest bg-black/5 py-2 rounded-lg">
                    Day & Night Choghadiya
                  </h4>
                   <div className="space-y-1 mb-4">
                     {Object.entries(choghadiya).map(([key, period]: [string, any]) => {
                        const isAuspicious = ['Amrit', 'Shubh', 'Labh'].includes(period.name);
                        const isNeutral = ['Char'].includes(period.name);
                        return (
                          <div key={key} className={`flex justify-between items-center p-3 rounded-lg border border-transparent ${isAuspicious ? 'bg-green-50/50 border-green-100' : isNeutral ? 'bg-blue-50/50 border-blue-100' : 'bg-red-50/50 border-red-100'}`}>
                             <div className="flex flex-col">
                                <span className={`font-sans font-bold ${isAuspicious ? 'text-green-800' : isNeutral ? 'text-blue-800' : 'text-red-800'}`}>{period.name}</span>
                                <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-0.5">{isAuspicious ? 'Auspicious' : isNeutral ? 'Neutral' : 'Inauspicious'}</span>
                             </div>
                             <div className="text-right">
                                <span className="text-sm font-medium text-[#2C241B]">
                                  {period.starts_at.split(' ')[1]?.substring(0, 5)} - {period.ends_at.split(' ')[1]?.substring(0, 5)}
                                </span>
                             </div>
                          </div>
                        );
                     })}
                   </div>
                </div>
                <button className="bg-gold-500 hover:bg-gold-400 text-[#2C241B] py-4 font-bold uppercase tracking-widest text-sm transition-colors border-t border-gold-500/20 mt-4 rounded-b-[-1px] shrink-0">
                  Calculate For Your City
                </button>
              </>
            ) : activeTab === 'natal' ? (
              <div className="p-6 flex-grow flex flex-col pb-0 animate-fade-in">
                <h4 className="text-center text-[#2C241B] font-medium mb-6 uppercase tracking-widest bg-black/5 py-2 rounded-lg">
                  Calculate Your Natal Chart
                </h4>
                
                {natalResult ? (
                  <div className="flex-grow overflow-y-auto max-h-[400px]">
                    {natalChartImage && (
                      <div className="mb-6 border border-gold-500/20 rounded-lg overflow-hidden bg-black/5">
                        <img 
                          src={natalChartImage} 
                          alt="Natal Chart" 
                          className="w-full h-auto"
                        />
                      </div>
                    )}
                    <div className="space-y-4 text-sm">
                      <div className="border-b border-gold-500/20 pb-4">
                        <h5 className="text-gold-600 font-bold uppercase tracking-wider mb-3">Birth Information</h5>
                        <div className="grid grid-cols-2 gap-2 text-[#2C241B]">
                          <p><span className="text-gold-600">Date:</span> {birthDetails.day}/{birthDetails.month}/{birthDetails.year}</p>
                          <p><span className="text-gold-600">Time:</span> {String(birthDetails.hour).padStart(2, '0')}:{String(birthDetails.minute).padStart(2, '0')}</p>
                          <p><span className="text-gold-600">City:</span> {birthDetails.city}</p>
                        </div>
                      </div>
                      
                      {Object.entries(natalResult).map(([key, value]) => (
                        <div key={key} className="border-b border-gold-500/20 pb-3 last:border-b-0">
                          <span className="text-gold-600 font-bold uppercase tracking-wider text-xs block mb-1">{key.replace(/_/g, ' ')}</span>
                          <span className="text-[#2C241B] block whitespace-pre-wrap break-words">{typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex-grow">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-[#5C4B3D] text-xs font-bold uppercase tracking-wider mb-2">Year</label>
                        <input
                          type="number"
                          min="1900"
                          max={new Date().getFullYear()}
                          value={birthDetails.year}
                          onChange={(e) => handleInputChange('year', e.target.value)}
                          className="w-full px-3 py-2 border border-gold-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                        />
                      </div>
                      <div>
                        <label className="block text-[#5C4B3D] text-xs font-bold uppercase tracking-wider mb-2">Month</label>
                        <input
                          type="number"
                          min="1"
                          max="12"
                          value={birthDetails.month}
                          onChange={(e) => handleInputChange('month', e.target.value)}
                          className="w-full px-3 py-2 border border-gold-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                        />
                      </div>
                      <div>
                        <label className="block text-[#5C4B3D] text-xs font-bold uppercase tracking-wider mb-2">Day</label>
                        <input
                          type="number"
                          min="1"
                          max="31"
                          value={birthDetails.day}
                          onChange={(e) => handleInputChange('day', e.target.value)}
                          className="w-full px-3 py-2 border border-gold-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                        />
                      </div>
                      <div>
                        <label className="block text-[#5C4B3D] text-xs font-bold uppercase tracking-wider mb-2">Hour</label>
                        <input
                          type="number"
                          min="0"
                          max="23"
                          value={birthDetails.hour}
                          onChange={(e) => handleInputChange('hour', e.target.value)}
                          className="w-full px-3 py-2 border border-gold-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                        />
                      </div>
                      <div>
                        <label className="block text-[#5C4B3D] text-xs font-bold uppercase tracking-wider mb-2">Minute</label>
                        <input
                          type="number"
                          min="0"
                          max="59"
                          value={birthDetails.minute}
                          onChange={(e) => handleInputChange('minute', e.target.value)}
                          className="w-full px-3 py-2 border border-gold-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                        />
                      </div>
                      <div>
                        <label className="block text-[#5C4B3D] text-xs font-bold uppercase tracking-wider mb-2">City</label>
                        <input
                          type="text"
                          value={birthDetails.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className="w-full px-3 py-2 border border-gold-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                        />
                      </div>
                    </div>
                    
                    {natalError && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                        <p className="text-red-700 text-sm"><strong>Error:</strong> {natalError}</p>
                      </div>
                    )}
                  </div>
                )}
                
                <button
                  onClick={natalResult ? () => setNatalResult(null) : handleNatalCalculation}
                  disabled={natalLoading}
                  className="bg-gold-500 hover:bg-gold-400 disabled:bg-gray-400 text-[#2C241B] py-4 font-bold uppercase tracking-widest text-sm transition-colors border-t border-gold-500/20 mt-4 rounded-b-[-1px] flex items-center justify-center gap-2"
                >
                  {natalLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Calculating...
                    </>
                  ) : natalResult ? (
                    <>
                      <Calculator className="w-4 h-4" />
                      Calculate Again
                    </>
                  ) : (
                    <>
                      <Calculator className="w-4 h-4" />
                      Calculate Natal Chart
                    </>
                  )}
                </button>
              </div>
            ) : null}
          </motion.div>
        
        </div>
      </div>
    </section>
  );
}
