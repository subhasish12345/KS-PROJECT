import { motion } from 'motion/react';
import { GlassCard } from './GlassCard';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomePage() {
  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence that transforms your business operations and drives innovation.',
      icon: '🤖',
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions that grow with your business needs.',
      icon: '☁️',
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security protocols to protect your digital assets and maintain data integrity.',
      icon: '🛡️',
    },
    {
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics platform.',
      icon: '📊',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 40px rgba(0, 255, 247, 0.3)',
              }}
              animate={{
                textShadow: [
                  '0 0 40px rgba(0, 255, 247, 0.3)',
                  '0 0 60px rgba(123, 44, 191, 0.4)',
                  '0 0 40px rgba(255, 78, 205, 0.3)',
                  '0 0 40px rgba(0, 255, 247, 0.3)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Future of Tech
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Pioneering tomorrow's technology today. We deliver cutting-edge solutions that transform businesses and shape the digital landscape.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl hover:shadow-2xl transition-all duration-300 text-white relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
                  }}
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                />
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 247, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating 3D Object */}
        <motion.div
          className="absolute top-1/2 right-1/4 w-32 h-32 opacity-20"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            y: [0, -20, 0],
          }}
          transition={{
            rotateX: { duration: 20, repeat: Infinity, ease: 'linear' },
            rotateY: { duration: 15, repeat: Infinity, ease: 'linear' },
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg shadow-xl" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 h-full">
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      textShadow: '0 0 20px rgba(0, 255, 247, 0.8)'
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard className="p-12" hoverable={false}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies that trust us with their digital transformation.
              </p>
              <motion.button
                className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl hover:shadow-2xl transition-all duration-300 text-white relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Contact Us Today</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.button>
            </motion.div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}