import { motion } from 'motion/react';
import { useState } from 'react';

interface AnimatedTicketProps {
  name: string;
  role: string;
  experience: string;
  location: string;
  section: string;
  row: string;
  seat: string;
  delay?: number;
}

export function AnimatedTicket({ 
  name, 
  role, 
  experience, 
  location, 
  section, 
  row, 
  seat, 
  delay = 0 
}: AnimatedTicketProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-80 h-96"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Stars Background */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-30">
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 20px 30px, #eee, rgba(0, 0, 0, 0)),
              radial-gradient(1px 1px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
              radial-gradient(2px 2px at 90px 40px, #fff, rgba(0, 0, 0, 0))
            `,
            backgroundSize: '200px 200px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '0px -200px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <motion.div 
        className="relative w-full h-full cursor-pointer perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Animated Border */}
        <motion.div 
          className="absolute -inset-1 rounded-2xl overflow-hidden -z-10"
          animate={{
            background: isHovered 
              ? [
                  'conic-gradient(from 0deg, #00e5ff, #8a2be2, #ff00ff, #00e5ff)',
                  'conic-gradient(from 180deg, #00e5ff, #8a2be2, #ff00ff, #00e5ff)',
                  'conic-gradient(from 360deg, #00e5ff, #8a2be2, #ff00ff, #00e5ff)',
                ]
              : 'conic-gradient(from 0deg, transparent, transparent)',
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Ticket Flipper */}
        <motion.div 
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Front Card */}
          <motion.div 
            className="absolute inset-0 backface-hidden"
            animate={{
              rotateX: isHovered ? -5 : 0,
              rotateY: isHovered ? 5 : 0,
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div 
              className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col p-6 border border-gray-700"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(25, 25, 45, 0.95) 100%)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
              }}
            >
              {/* Holographic Overlay */}
              <motion.div 
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 247, 0.1), transparent 50%)',
                }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-gray-600 mb-6">
                <div>
                  <motion.h3 
                    className="text-2xl font-bold mb-1 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    NeoTech Team
                  </motion.h3>
                  <p className="text-xs uppercase tracking-wider text-cyan-400">
                    Development Squad
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 text-cyan-400 flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Developer</span>
                    <motion.p 
                      className="text-lg text-white font-semibold"
                      whileHover={{ color: '#00fff7' }}
                    >
                      {name}
                    </motion.p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 text-cyan-400 flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Role</span>
                    <p className="text-lg text-white font-semibold">{role}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 text-cyan-400 flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Experience</span>
                    <p className="text-lg text-white font-semibold">{experience}</p>
                  </div>
                </div>
              </div>

              {/* Stub Section */}
              <div className="mt-auto pt-4 border-t-2 border-dashed border-gray-600 flex justify-between items-center">
                <div className="flex gap-4">
                  <div className="text-center">
                    <span className="text-xs text-gray-400 uppercase">Level</span>
                    <p className="text-white font-semibold">{section}</p>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-400 uppercase">Team</span>
                    <p className="text-white font-semibold">{row}</p>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-400 uppercase">ID</span>
                    <p className="text-white font-semibold">{seat}</p>
                  </div>
                </div>
                
                {/* QR Code */}
                <motion.div 
                  className="w-16 h-16 bg-white rounded-lg p-1"
                  animate={{
                    boxShadow: [
                      '0 0 5px #00e5ff, 0 0 10px #00e5ff',
                      '0 0 10px #8a2be2, 0 0 20px #8a2be2',
                      '0 0 5px #00e5ff, 0 0 10px #00e5ff',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <svg viewBox="0 0 16 16" className="w-full h-full">
                    <path fill="#1A1A2E" d="M6 0H0v6h6zM5 5H1V1h4z" />
                    <path fill="#1A1A2E" d="M2 2h2v2H2zM0 16h6v-6H0zm1-5h4v4H1z" />
                    <path fill="#1A1A2E" d="M2 12h2v2H2zm8-12v6h6V0zm5 5h-4V1h4z" />
                    <path fill="#1A1A2E" d="M12 2h2v2h-2z" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Back Card */}
          <div 
            className="absolute inset-0 backface-hidden flex flex-col justify-between items-center p-6 text-center rounded-2xl border border-purple-500/30"
            style={{
              transform: 'rotateY(180deg)',
              background: 'linear-gradient(135deg, rgba(25, 0, 45, 0.95) 0%, rgba(15, 0, 35, 0.95) 100%)',
              backdropFilter: 'blur(10px)',
            }}
          >
            {/* Holographic Emblem */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              <motion.div 
                className="absolute inset-0 rounded-full opacity-30 blur-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                style={{
                  background: 'conic-gradient(from 0deg, #ff00ff, #00e5ff, #8a2be2, #ff00ff)',
                }}
              />
              <div 
                className="text-4xl font-bold text-white relative z-10"
                style={{ textShadow: '0 0 10px #fff, 0 0 20px #00e5ff' }}
              >
                NT
              </div>
            </div>

            {/* Back Content */}
            <div className="text-center text-gray-100">
              <motion.p 
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Thank You for Connecting!
              </motion.p>
              <p className="text-sm max-w-64 mb-6 text-gray-300">
                This card represents {name}'s contribution to our innovative team. 
                Together we're building the future of technology.
              </p>
            </div>

            <p className="text-xs text-gray-400">
              NeoTech Development Team • Confidential
            </p>
          </div>
        </motion.div>

        {/* Click Indicator */}
        <motion.div
          className="absolute top-4 right-4 text-cyan-400 text-xs opacity-60"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Click to flip
        </motion.div>
      </motion.div>
    </motion.div>
  );
}