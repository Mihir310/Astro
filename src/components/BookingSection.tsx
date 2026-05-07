import { motion } from 'motion/react';
import { Calendar, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const services = [
  'Vedic Astrology',
  'Kundli Analysis',
  'Vastu Consultation',
  'Reiki Healing',
  'Crystal Healing',
  'Tarot Card Reading',
  'Numerology',
  'Palm Reading',
];

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        birthDate: '',
        birthTime: '',
        birthPlace: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FBF9F6] via-white to-[#FAF8F5] pointer-events-none" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-400/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm text-gold-600 uppercase tracking-[0.15em] font-semibold mb-4">Next Steps</p>
          <h2 className="text-5xl md:text-6xl font-sans font-bold text-charcoal-900 mb-8">Book Your Consultation</h2>
          <p className="text-lg text-[#5C4B3D] max-w-2xl mx-auto">
            Begin your journey toward clarity and transformation. Fill out the form below to book your personalized consultation with Dr. Geeta Joshi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative bg-white rounded-2xl border border-gold-200/50 shadow-xl p-10 overflow-hidden">
              {/* Gradient Border Accent */}
              <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-gold-400 via-orange-500 to-red-500" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-orange-500 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-sans text-[#2C241B] mb-4">Consultation Booked!</h3>
                  <p className="text-[#5C4B3D] text-center mb-2">
                    Thank you for submitting your booking request.
                  </p>
                  <p className="text-[#5C4B3D] text-center">
                    Dr. Geeta will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-[#2C241B] mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-[#2C241B] mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-[#2C241B] mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    {/* Birth Date */}
                    <div>
                      <label className="block text-sm font-semibold text-[#2C241B] mb-2">Birth Date *</label>
                      <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all"
                      />
                    </div>

                    {/* Birth Time */}
                    <div>
                      <label className="block text-sm font-semibold text-[#2C241B] mb-2">Birth Time</label>
                      <input
                        type="time"
                        name="birthTime"
                        value={formData.birthTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all"
                      />
                    </div>

                    {/* Birth Place */}
                    <div>
                      <label className="block text-sm font-semibold text-[#2C241B] mb-2">Birth Place *</label>
                      <input
                        type="text"
                        name="birthPlace"
                        value={formData.birthPlace}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2C241B] mb-2">Select Service *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all"
                    >
                      <option value="">Choose a service...</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2C241B] mb-2">Message (Optional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all resize-none"
                      placeholder="Tell us more about what you're looking for..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-500/40 transform hover:scale-105"
                  >
                    Book Now
                  </button>

                  <p className="text-xs text-[#8C735D] text-center">
                    * Required fields. Your information is secure and confidential.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Info Card 1 */}
            <div className="bg-gradient-to-br from-gold-50 to-orange-50 rounded-2xl border border-gold-200/50 p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-gold-400 to-orange-500 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C241B] mb-2">Phone</h4>
                  <p className="text-[#5C4B3D]">+91 XXXXX XXXXX</p>
                  <p className="text-sm text-[#8C735D] mt-2">Mon-Fri, 9 AM - 7 PM IST</p>
                </div>
              </div>
            </div>

            {/* Info Card 2 */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-gold-200/50 p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-red-400 to-orange-500 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C241B] mb-2">Email</h4>
                  <p className="text-[#5C4B3D]">geeta@astrovastu.com</p>
                  <p className="text-sm text-[#8C735D] mt-2">Response within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Info Card 3 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-gold-200/50 p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C241B] mb-2">Location</h4>
                  <p className="text-[#5C4B3D]">Anand, Gujarat</p>
                  <p className="text-sm text-[#8C735D] mt-2">Online & In-person sessions</p>
                </div>
              </div>
            </div>

            {/* Info Card 4 */}
            <div className="bg-gradient-to-br from-saffron-50 to-gold-50 rounded-2xl border border-gold-200/50 p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-gold-400 to-yellow-500 rounded-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C241B] mb-2">Availability</h4>
                  <p className="text-[#5C4B3D]">Flexible scheduling</p>
                  <p className="text-sm text-[#8C735D] mt-2">Limited slots available</p>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-white rounded-2xl border-2 border-gold-300 p-8 text-center">
              <p className="text-3xl mb-3">🙏</p>
              <p className="font-sans text-[#2C241B] font-semibold mb-2">Trusted Since 2004</p>
              <p className="text-sm text-[#8C735D]">Guiding thousands toward spiritual transformation</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
