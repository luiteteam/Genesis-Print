import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container">
        <div className="py-12">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Company Name */}
            <motion.h2
              className="text-2xl font-semibold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Genesis Printers & Publishers
            </motion.h2>

            {/* Address */}
            <motion.div
              className="flex items-start justify-center space-x-3 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <MapPin className="w-5 h-5 text-neutral-400 mt-1 flex-shrink-0" />
              <div className="text-center">
                <p className="leading-relaxed">
                  348 Express Highway (VIP Road), Opp. Doordarshan Colony,
                </p>
                <p className="leading-relaxed">
                  Near Six Mile, Barbari, Guwahati-781036
                </p>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="tel:+918471916297"
                className="flex items-center space-x-2 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-4 h-4" />
                <span>8471916297</span>
              </motion.a>

              <motion.a
                href="mailto:genesispress@gmail.com"
                className="flex items-center space-x-2 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-4 h-4" />
                <span>genesispress@gmail.com</span>
              </motion.a>
            </motion.div>

            {/* Copyright */}
            <motion.div
              className="pt-6 border-t border-neutral-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-neutral-500">
                ©{currentYear} Genesis Printers & Publishers | All Rights Reserved
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;