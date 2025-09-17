import { motion } from 'motion/react';

// Created by Subhasish - All Rights Reserved
export function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/subhasish-nayak-' },
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com/subhasish_nayak' },
    { name: 'GitHub', icon: '👨‍💻', url: 'https://github.com/subhasish12345' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/subhasish_dev' },
  ];

  const quickLinks = [
    { name: 'Portfolio', url: 'https://subhasish-nayak.onrender.com' },
    { name: 'Resume', url: '#' },
    { name: 'Blog', url: '#' },
    { name: 'Contact', url: '#' },
  ];

  return (
    <footer className="relative py-16 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-xl sm:text-2xl mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Subhasish Nayak
            </motion.h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
              Full-stack developer and designer from India, creating innovative digital solutions that transform 
              businesses and deliver exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-xl hover:bg-cyan-400/20 hover:border-cyan-400/30 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: '0 10px 20px rgba(0, 255, 247, 0.3)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.span
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {link.icon}
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg sm:text-xl mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index}>
                  <motion.a
                    href={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 block"
                    whileHover={{ x: 10, color: '#00fff7' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg sm:text-xl mb-6 text-white">Let's Connect</h4>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Stay updated with my latest projects, tech insights, and development journey.
            </p>
            <div className="flex">
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                whileFocus={{ scale: 1.02, borderColor: '#00fff7' }}
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-r-lg hover:shadow-lg transition-all duration-300 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ✉️
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-gray-400 mb-4 md:mb-0 text-sm sm:text-base text-center md:text-left"
            whileHover={{ color: '#00fff7' }}
            transition={{ duration: 0.3 }}
          >
            © 2024 Subhasish Nayak. All rights reserved. | subhasishnayak38@gmail.com
          </motion.p>
          
          <motion.div 
            className="flex items-center space-x-2 text-gray-400"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <span>Made with</span>
            <motion.span
              className="text-red-400 text-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ❤️
            </motion.span>
            <span>by Subhasish</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 right-10 w-4 h-4 bg-cyan-400 rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-3 h-3 bg-purple-400 rounded-full opacity-60"
        animate={{
          y: [0, 15, 0],
          scale: [1, 0.8, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
    </footer>
  );
}