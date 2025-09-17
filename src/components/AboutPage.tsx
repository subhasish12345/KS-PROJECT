import { motion } from 'motion/react';
import { GlassCard } from './GlassCard';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedTicket } from './AnimatedTicket';
import { SocialMediaCard } from './SocialMediaCard';

export function AboutPage() {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '10+', label: 'Technologies' },
    { number: '99%', label: 'Client Satisfaction' },
  ];

  const team = [
    {
      name: 'Subhasish',
      role: 'Frontend Architect',
      experience: '5+ Years React/Next.js',
      location: 'Hyderabad, India',
      section: 'Sr',
      row: 'UI',
      seat: '01',
    },
    {
      name: 'Sasank',
      role: 'Backend Engineer',
      experience: '4+ Years Node.js/Python',
      location: 'Bangalore, India',
      section: 'Sr',
      row: 'API',
      seat: '02',
    },
    {
      name: 'Sai',
      role: 'DevOps Specialist',
      experience: '6+ Years Cloud/Docker',
      location: 'Chennai, India',
      section: 'Sr',
      row: 'OPS',
      seat: '03',
    },
    {
      name: 'Soumik',
      role: 'Full Stack Developer',
      experience: '3+ Years MERN Stack',
      location: 'Kolkata, India',
      section: 'Jr',
      row: 'DEV',
      seat: '04',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Subhasish
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              I'm a passionate full-stack developer and UI/UX designer from India, dedicated to creating innovative 
              digital solutions that bridge the gap between cutting-edge technology and exceptional user experience. 
              With expertise spanning frontend, backend, and design, I bring ideas to life through code.
            </p>
            <p className="text-base sm:text-lg text-gray-400 mb-8">
              Specializing in React, Next.js, Node.js, and modern web technologies, I've helped numerous clients 
              transform their digital presence. From startup MVPs to enterprise solutions, I deliver scalable, 
              performance-optimized applications that users love.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                >
                  <GlassCard className="p-4 text-center">
                    <motion.div
                      className="text-2xl md:text-3xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <GlassCard className="p-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1689443111384-1cf214df988a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc1ODAzNTI1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Futuristic Technology"
                className="w-full h-80 object-cover rounded-xl"
              />
              <motion.div
                className="absolute inset-8 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.02 }}
              />
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              My Mission & Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 h-full">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl sm:text-2xl mb-4 text-cyan-400">My Mission</h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  To democratize advanced technology and make it accessible to businesses of all sizes. 
                  I believe that innovation should not be limited by resources, and every organization 
                  deserves access to cutting-edge solutions that drive growth and success.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 h-full">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl sm:text-2xl mb-4 text-purple-400">My Vision</h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  To become a leading developer in transformative technology solutions, creating applications 
                  where artificial intelligence, modern web technologies, and exceptional design work seamlessly 
                  together to create a more connected, intuitive, and beautiful digital world.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Development Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the talented developers building the future with cutting-edge technology and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
            {team.map((member, index) => (
              <AnimatedTicket
                key={index}
                name={member.name}
                role={member.role}
                experience={member.experience}
                location={member.location}
                section={member.section}
                row={member.row}
                seat={member.seat}
                delay={index * 0.2}
              />
            ))}
          </div>
          
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              💡 <strong>Pro tip:</strong> Click on any ticket to see the back side with holographic effects!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values & Social Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 sm:p-12 text-center" hoverable={false}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl mb-8 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  My Core Values
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                  <div>
                    <div className="text-3xl mb-3">💡</div>
                    <h3 className="text-lg sm:text-xl mb-2 text-white">Innovation</h3>
                    <p className="text-sm sm:text-base text-gray-300">Pushing boundaries and exploring new possibilities</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-3">🤝</div>
                    <h3 className="text-lg sm:text-xl mb-2 text-white">Collaboration</h3>
                    <p className="text-sm sm:text-base text-gray-300">Working together to achieve extraordinary results</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-3">⚡</div>
                    <h3 className="text-lg sm:text-xl mb-2 text-white">Excellence</h3>
                    <p className="text-sm sm:text-base text-gray-300">Delivering quality that exceeds expectations</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Social Media Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <SocialMediaCard />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}