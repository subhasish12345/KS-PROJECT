import { motion } from 'motion/react';
import { GlassCard } from './GlassCard';
import { SocialMediaCard } from './SocialMediaCard';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [hoveredField, setHoveredField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'subhasishnayak38@gmail.com',
      description: 'Send me a message anytime',
    },
    {
      icon: '📱',
      title: 'Phone',
      content: '+91 7750096113',
      description: 'Available Mon-Fri 9AM-9PM IST',
    },
    {
      icon: '🌍',
      title: 'Location',
      content: 'India',
      description: 'Based in India, serving globally',
    },
    {
      icon: '⚡',
      title: 'Response Time',
      content: '<12 Hours',
      description: 'Quick response guaranteed',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch with Subhasish
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to transform your business? Let's discuss your next project and create something extraordinary together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <GlassCard className="p-8">
                <h2 className="text-xl sm:text-2xl mb-6 text-white">Send me a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      onFocus={() => setHoveredField('name')}
                      onBlur={() => setHoveredField(null)}
                    >
                      <label className="block text-gray-300 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                        style={{
                          boxShadow: hoveredField === 'name' ? '0 0 20px rgba(0, 255, 247, 0.3)' : 'none',
                        }}
                      />
                    </motion.div>
                    
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      onFocus={() => setHoveredField('email')}
                      onBlur={() => setHoveredField(null)}
                    >
                      <label className="block text-gray-300 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                        style={{
                          boxShadow: hoveredField === 'email' ? '0 0 20px rgba(0, 255, 247, 0.3)' : 'none',
                        }}
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    onFocus={() => setHoveredField('company')}
                    onBlur={() => setHoveredField(null)}
                  >
                    <label className="block text-gray-300 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                      style={{
                        boxShadow: hoveredField === 'company' ? '0 0 20px rgba(0, 255, 247, 0.3)' : 'none',
                      }}
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    onFocus={() => setHoveredField('message')}
                    onBlur={() => setHoveredField(null)}
                  >
                    <label className="block text-gray-300 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300 resize-none"
                      style={{
                        boxShadow: hoveredField === 'message' ? '0 0 20px rgba(0, 255, 247, 0.3)' : 'none',
                      }}
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:shadow-2xl transition-all duration-300 text-white relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="relative z-10">Send Message</span>
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      style={{
                        background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
                      }}
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    />
                  </motion.button>
                </form>
              </GlassCard>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-6"
            >
              <GlassCard className="p-8">
                <h2 className="text-xl sm:text-2xl mb-6 text-white">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div
                        className="text-2xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {info.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-lg text-cyan-400 mb-1">{info.title}</h3>
                        <p className="text-white mb-1">{info.content}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>

              {/* Skills & Expertise */}
              <GlassCard className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl mb-6 text-white">Skills & Expertise</h2>
                <div className="space-y-4">
                  <motion.div
                    className="flex justify-between items-center p-2 rounded-lg"
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(0, 255, 247, 0.05)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-gray-300">⚛️ React/Next.js</span>
                    <span className="text-cyan-400">Expert</span>
                  </motion.div>
                  <motion.div
                    className="flex justify-between items-center p-2 rounded-lg"
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(0, 255, 247, 0.05)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-gray-300">🚀 Node.js/Python</span>
                    <span className="text-purple-400">Advanced</span>
                  </motion.div>
                  <motion.div
                    className="flex justify-between items-center p-2 rounded-lg"
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(0, 255, 247, 0.05)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-gray-300">🎨 UI/UX Design</span>
                    <span className="text-pink-400">Proficient</span>
                  </motion.div>
                  <motion.div
                    className="flex justify-between items-center p-2 rounded-lg"
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(0, 255, 247, 0.05)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-gray-300">☁️ Cloud/DevOps</span>
                    <span className="text-green-400">Skilled</span>
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Social Media Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex justify-center lg:justify-start"
            >
              <SocialMediaCard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 text-center" hoverable={false}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Start Your Digital Transformation?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8">
                Let's work together to bring your ideas to life with cutting-edge technology and creative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl hover:shadow-2xl transition-all duration-300 text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a Call
                </motion.button>
                <motion.button
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Brochure
                </motion.button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}