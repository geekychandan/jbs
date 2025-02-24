"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Clock,
  CheckCircle,
  ArrowRight,
  Heart 
} from 'lucide-react';

const Footer = () => {
  const fadeInUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" legacyBehavior>
              <a className="inline-block mb-6">
                <h3 className="text-2xl font-bold text-white">Jbs interior</h3>
              </a>
            </Link>
            <p className="text-gray-400 mb-6">
              Transform your house into a dream home with our expert interior design solutions.
              Quality craftsmanship meets innovative design.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                'About Us',
                'Our Services',
                'Design Gallery',
                'Testimonials',
                'Pricing Plans',
                'Contact Us'
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 2 }}
                  className="flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-4">
              {[
                { icon: CheckCircle, text: 'Modular Kitchen' },
                { icon: CheckCircle, text: 'Bedroom Design' },
                { icon: CheckCircle, text: 'Living Room' },
                { icon: CheckCircle, text: 'Home Office' },
                { icon: CheckCircle, text: 'Wardrobe Design' },
                { icon: CheckCircle, text: 'Storage Solutions' }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 2 }}
                  className="flex items-center group"
                >
                  <item.icon className="w-4 h-4 mr-2 text-blue-500" />
                  <a href="#" className="hover:text-white transition-colors">
                    {item.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <motion.li
                whileHover={{ x: 2 }}
                className="flex items-start"
              >
                <MapPin className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-1" />
                <p> Nagarathnamma Layout, Belathur, Kadugodi, Bengaluru, Karnataka 560067</p>
              </motion.li>
              <motion.li
                whileHover={{ x: 2 }}
                className="flex items-center"
              >
                <Phone className="w-5 h-5 mr-3 text-blue-500" />
                <a href="tel:18001024663" className="hover:text-white transition-colors">
                  1800 102 4663
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 2 }}
                className="flex items-center"
              >
                <Mail className="w-5 h-5 mr-3 text-blue-500" />
                <a href="mailto:support@Jbs interior.com" className="hover:text-white transition-colors">
                  support@Jbs interior.com
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 2 }}
                className="flex items-center"
              >
                <Clock className="w-5 h-5 mr-3 text-blue-500" />
                <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Subscription */}
        {/* <motion.div
          variants={fadeInUpVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-lg font-semibold text-white mb-4">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-gray-400 mb-6">
              Stay updated with our latest designs, trends, and special offers
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div> */}
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Jbs interior. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>by Chandan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
