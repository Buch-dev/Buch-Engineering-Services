'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SunIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.footer 
      className="bg-gray-900 text-white py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div 
          className="grid md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <div className="flex items-center space-x-2 mb-4">
              <motion.div 
                className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <SunIcon className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-xl font-semibold">Buch Engineering</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in solar energy solutions. Powering a sustainable future.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.2 }}
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.2 }}
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white"><motion.span whileHover={{ x: 5 }}>Home</motion.span></Link></li>
              <li><Link href="/products" className="hover:text-white"><motion.span whileHover={{ x: 5 }}>Products</motion.span></Link></li>
              <li><Link href="/contact" className="hover:text-white"><motion.span whileHover={{ x: 5 }}>Contact</motion.span></Link></li>
              <li><motion.a href="#" className="hover:text-white" whileHover={{ x: 5 }}>About Us</motion.a></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><motion.a href="#" className="hover:text-white" whileHover={{ x: 5 }}>Solar Panel Sales</motion.a></li>
              <li><motion.a href="#" className="hover:text-white" whileHover={{ x: 5 }}>System Installation</motion.a></li>
              <li><motion.a href="#" className="hover:text-white" whileHover={{ x: 5 }}>Maintenance & Repair</motion.a></li>
              <li><motion.a href="#" className="hover:text-white" whileHover={{ x: 5 }}>Energy Consultation</motion.a></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ x: 5 }}
              >
                <PhoneIcon className="w-5 h-5" />
                <span>+234 8169769575</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ x: 5 }}
              >
                <EnvelopeIcon className="w-5 h-5" />
                <span>buchengineering23@gmail.com</span>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-2"
                whileHover={{ x: 5 }}
              >
                <MapPinIcon className="w-5 h-5 mt-0.5" />
                <span>123 Solar Street<br />Energy City, EC 12345</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>&copy; {new Date().getFullYear()} Buch Engineering Services. All rights reserved. Powering your future with clean energy.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}