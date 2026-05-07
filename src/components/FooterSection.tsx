import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const currentYear = new Date().getFullYear();

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com', color: 'hover:text-blue-600' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com', color: 'hover:text-pink-600' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', color: 'hover:text-blue-400' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-blue-700' },
];

const quickLinks = [
  { label: 'Home', href: '#/' },
  { label: 'Services', href: '#/services' },
  { label: 'About Dr. Geeta', href: '#/' },
  { label: 'Testimonials', href: '#/' },
  { label: 'Blog', href: '#/blog' },
  { label: 'FAQs', href: '#/faq' },
];

const services = [
  'Vedic Astrology',
  'Kundli Analysis',
  'Vastu Consultation',
  'Reiki Healing',
  'Crystal Healing',
  'Tarot Reading',
  'Numerology',
  'Palm Reading',
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#2C241B] to-[#1A120F] text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mandala" x="200" y="200" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#C99C3D" strokeWidth="1" opacity="0.3" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="#C99C3D" strokeWidth="1" opacity="0.3" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="#C99C3D" strokeWidth="1" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="1000" height="1000" fill="url(#mandala)" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-sans font-bold text-gold-400 mb-2">Astro Vastu Reiki</h3>
                <p className="text-gold-300 text-sm">Spiritual Healing & Guidance</p>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Transforming lives through authentic Vedic wisdom, spiritual healing, and holistic wellness practices.
              </p>
              <div className="space-y-3">
                <p className="text-xs text-gold-400 font-semibold uppercase tracking-wider">Follow Dr. Geeta</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`text-gray-400 transition-colors ${social.color}`}
                        title={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-sans font-semibold text-gold-400 mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-gold-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-sans font-semibold text-gold-400 mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#/services"
                      className="text-gray-300 hover:text-gold-400 transition-colors duration-300 text-sm"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-lg font-serif font-semibold text-gold-400">Contact Info</h4>
              
              <div className="space-y-4">
                {/* Address */}
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-300 text-sm">Anand, Gujarat</p>
                    <p className="text-xs text-gray-400">India</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-300 text-sm">+91 XXXXX XXXXX</p>
                    <p className="text-xs text-gray-400">Mon-Fri, 9 AM - 7 PM</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-300 text-sm">geeta@astrovastu.com</p>
                    <p className="text-xs text-gray-400">24h Response</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent mb-12" />

          {/* Spiritual Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 py-8 border-b border-gold-400/20"
          >
            <p className="text-gold-300 text-lg font-serif italic mb-2">
              "Your destiny is not fixed; it is a canvas waiting for your conscious choices."
            </p>
            <p className="text-gray-400 text-sm">— Dr. Geeta Joshi</p>
          </motion.div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} Dr. Geeta Joshi - Astro Vastu Reiki. All rights reserved.
            </p>

            {/* Links */}
            <div className="flex gap-8 text-sm">
              <a href="#/" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#/" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#/" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="h-1 bg-gradient-to-r from-gold-500 via-orange-500 to-red-500" />
      </div>
    </footer>
  );
}
