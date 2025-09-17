import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SocialMediaCard() {
  const [isGrabbing, setIsGrabbing] = useState(false);

  return (
    <motion.div
      className="social-card relative w-80 h-96 flex flex-col items-center justify-center text-white p-6 rounded-3xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-95 rounded-3xl" />
      
      {/* Animated gradient border */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 rounded-3xl opacity-0"
        animate={{
          opacity: [0, 0.6, 0],
          background: [
            'linear-gradient(45deg, #8B5CF6, #06B6D4, #8B5CF6)',
            'linear-gradient(90deg, #06B6D4, #8B5CF6, #06B6D4)',
            'linear-gradient(135deg, #8B5CF6, #06B6D4, #8B5CF6)',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Inner background */}
      <motion.div 
        className="absolute inset-1 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl"
        animate={{
          background: [
            'linear-gradient(135deg, rgb(17, 24, 39), rgb(31, 41, 55), rgb(0, 0, 0))',
            'linear-gradient(135deg, rgb(31, 41, 55), rgb(17, 24, 39), rgb(0, 0, 0))',
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
      />

      {/* Floating Stars Background */}
      <div className="stars-layer absolute inset-0 overflow-hidden rounded-3xl">
        {/* Star Layer 1 */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(1px 1px at 20px 30px, #fff, transparent),
              radial-gradient(1px 1px at 40px 70px, #fff, transparent),
              radial-gradient(1px 1px at 90px 40px, #fff, transparent),
              radial-gradient(1px 1px at 120px 130px, #fff, transparent),
              radial-gradient(1px 1px at 180px 176px, #fff, transparent)
            `,
            backgroundSize: '200px 200px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '200px 200px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Star Layer 2 */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(1px 1px at 140px 20px, #fff, transparent),
              radial-gradient(1px 1px at 70px 120px, #fff, transparent),
              radial-gradient(1px 1px at 280px 80px, #fff, transparent),
              radial-gradient(1px 1px at 220px 190px, #fff, transparent)
            `,
            backgroundSize: '300px 300px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '300px 300px'],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Glowing orb effect */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 rounded-full opacity-20 blur-xl"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8), transparent)',
        }}
        animate={{
          x: [0, 200, 100, 0],
          y: [0, 100, 200, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Developer Avatar */}
      <motion.div
        className="relative z-10 mb-6"
        animate={{
          y: [0, -8, 8, 0],
          x: [0, -4, 4, 0],
          rotate: [0, -2, 2, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        onMouseDown={() => setIsGrabbing(true)}
        onMouseUp={() => setIsGrabbing(false)}
        onMouseLeave={() => setIsGrabbing(false)}
        style={{ cursor: isGrabbing ? 'grabbing' : 'grab' }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1648293821367-b39c09679658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBhdmF0YXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTgxMzMwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Subhasish - Developer"
          className="w-32 h-32 rounded-full object-cover border-4 border-cyan-400/50 shadow-lg shadow-cyan-400/25"
        />
        
        {/* Shooting stars when grabbing */}
        {isGrabbing && (
          <>
            <motion.div
              className="absolute -top-16 -right-16 w-20 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: [0, 1, 0], x: [-80, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{ transform: 'rotate(-45deg)' }}
            />
            <motion.div
              className="absolute -top-20 -left-12 w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: [0, 1, 0], x: [-60, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
              style={{ transform: 'rotate(-30deg)' }}
            />
          </>
        )}
      </motion.div>

      {/* Heading */}
      <motion.h3 
        className="text-xl font-bold mb-6 text-center relative z-10"
        animate={{
          letterSpacing: ['0em', '0.025em', '0em'],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        Connect with Subhasish
      </motion.h3>

      {/* Social Icons */}
      <motion.div 
        className="flex items-center justify-center gap-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {/* Instagram */}
        <motion.a
          href="https://instagram.com/subhasish_nayak_"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram relative p-3 rounded-full transition-all duration-300"
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 25" fill="none" className="relative z-10">
            <path
              d="M17.0459 7.5H17.0559M3.0459 12.5C3.0459 9.986 3.0459 8.73 3.3999 7.72C3.71249 6.82657 4.22237 6.01507 4.89167 5.34577C5.56096 4.67647 6.37247 4.16659 7.2659 3.854C8.2759 3.5 9.5329 3.5 12.0459 3.5C14.5599 3.5 15.8159 3.5 16.8269 3.854C17.7202 4.16648 18.5317 4.67621 19.201 5.34533C19.8702 6.01445 20.3802 6.82576 20.6929 7.719C21.0459 8.729 21.0459 9.986 21.0459 12.5C21.0459 15.014 21.0459 16.27 20.6929 17.28C20.3803 18.1734 19.8704 18.9849 19.2011 19.6542C18.5318 20.3235 17.7203 20.8334 16.8269 21.146C15.8169 21.5 14.5599 21.5 12.0469 21.5C9.5329 21.5 8.2759 21.5 7.2659 21.146C6.37268 20.8336 5.56131 20.324 4.89202 19.6551C4.22274 18.9862 3.71274 18.1751 3.3999 17.282C3.0459 16.272 3.0459 15.015 3.0459 12.501V12.5ZM15.8239 11.94C15.9033 12.4387 15.8829 12.9481 15.7641 13.4389C15.6453 13.9296 15.4304 14.392 15.1317 14.7991C14.833 15.2063 14.4566 15.5501 14.0242 15.8108C13.5917 16.0715 13.1119 16.2439 12.6124 16.318C12.1129 16.392 11.6037 16.3663 11.1142 16.2422C10.6248 16.1182 10.1648 15.8983 9.76082 15.5953C9.35688 15.2923 9.01703 14.9123 8.76095 14.4771C8.50486 14.0419 8.33762 13.5602 8.2689 13.06C8.13201 12.0635 8.39375 11.0533 8.99727 10.2487C9.6008 9.44407 10.4974 8.91002 11.4923 8.76252C12.4873 8.61503 13.5002 8.86599 14.3112 9.46091C15.1222 10.0558 15.6658 10.9467 15.8239 11.94Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="absolute inset-0 bg-white rounded-full scale-0 transition-transform duration-300" />
          
          {/* Shooting star */}
          <motion.div
            className="absolute -top-12 -right-12 w-16 h-0.5 bg-gradient-to-r from-white to-transparent opacity-0"
            animate={{ 
              opacity: [0, 1, 0],
              x: [-80, 0],
              y: [0, 80],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: 1,
              ease: 'easeOut'
            }}
            style={{ transform: 'rotate(-45deg)' }}
          />
        </motion.a>

        {/* Twitter/X */}
        <motion.a
          href="https://twitter.com/subhasish_dev"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon x relative p-3 rounded-full transition-all duration-300"
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative z-10">
            <path
              d="M19.8003 3L13.5823 10.105L19.9583 19.106C20.3923 19.719 20.6083 20.025 20.5983 20.28C20.594 20.3896 20.5657 20.4969 20.5154 20.5943C20.4651 20.6917 20.3941 20.777 20.3073 20.844C20.1043 21 19.7293 21 18.9793 21H17.2903C16.8353 21 16.6083 21 16.4003 20.939C16.2168 20.8847 16.0454 20.7957 15.8953 20.677C15.7253 20.544 15.5943 20.358 15.3313 19.987L10.6813 13.421L4.64033 4.894C4.20733 4.281 3.99033 3.975 4.00033 3.72C4.00478 3.61035 4.03323 3.50302 4.08368 3.40557C4.13414 3.30812 4.20536 3.22292 4.29233 3.156C4.49433 3 4.87033 3 5.62033 3H7.30833C7.76333 3 7.99033 3 8.19733 3.061C8.38119 3.1152 8.55295 3.20414 8.70333 3.323C8.87333 3.457 9.00433 3.642 9.26733 4.013L13.5833 10.105M4.05033 21L10.6823 13.421"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="absolute inset-0 bg-white rounded-full scale-0 transition-transform duration-300" />
          
          {/* Shooting star */}
          <motion.div
            className="absolute -top-16 -right-8 w-16 h-0.5 bg-gradient-to-r from-white to-transparent opacity-0"
            animate={{ 
              opacity: [0, 1, 0],
              x: [-80, 0],
              y: [0, 80],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: 3,
              ease: 'easeOut'
            }}
            style={{ transform: 'rotate(-45deg)' }}
          />
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/subhasish"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon github relative p-3 rounded-full transition-all duration-300"
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative z-10">
            <path
              d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z"
              fill="currentColor"
            />
          </svg>
          <div className="absolute inset-0 bg-white rounded-full scale-0 transition-transform duration-300" />
          
          {/* Shooting star */}
          <motion.div
            className="absolute -top-20 -right-8 w-16 h-0.5 bg-gradient-to-r from-white to-transparent opacity-0"
            animate={{ 
              opacity: [0, 1, 0],
              x: [-80, 0],
              y: [0, 80],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: 5,
              ease: 'easeOut'
            }}
            style={{ transform: 'rotate(-45deg)' }}
          />
        </motion.a>
      </motion.div>

      <style>{`
        .social-icon {
          color: #9ca3af;
          position: relative;
          overflow: visible;
        }
        
        .social-icon::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0.5em;
          height: 0.5em;
          background-color: white;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0px 0px 10px rgba(233, 233, 233, 0.5);
          z-index: -1;
          transition: all 0.3s ease-in-out;
          opacity: 0;
          scale: 0;
        }
        
        .social-icon:hover::after {
          opacity: 1;
          scale: 4;
        }
        
        .social-icon.instagram:hover {
          color: #cc39a4;
        }
        
        .social-icon.x:hover {
          color: #000000;
        }
        
        .social-icon.github:hover {
          color: #8c9eff;
        }
        
        .stars-layer {
          animation: glowing-stars 1s linear alternate infinite;
        }
        
        @keyframes glowing-stars {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
      `}</style>
    </motion.div>
  );
}