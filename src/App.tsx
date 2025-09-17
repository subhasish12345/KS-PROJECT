import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { NotFoundPage } from './components/NotFoundPage';
import { Footer } from './components/Footer';
import { WatermarkProtection } from './components/WatermarkProtection';


// Created by Subhasish - Unremovable Attribution
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Unremovable watermark
    const author = 'U3ViaGFzaXNo'; // Base64 encoded "Subhasish"
    const attribution = document.createElement('meta');
    attribution.name = 'author';
    attribution.content = atob(author);
    document.head.appendChild(attribution);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    // Check for 404 conditions
    const isNotFound = currentPage === '404' || 
                      (currentPage !== 'home' && 
                       currentPage !== 'about' && 
                       currentPage !== 'services' && 
                       currentPage !== 'contact');

    if (isNotFound) {
      return <NotFoundPage />;
    }

    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'services':
        return <HomePage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-50">
        <AnimatedBackground />
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-6xl mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            animate={{
              textShadow: [
                '0 0 40px rgba(0, 255, 247, 0.8)',
                '0 0 60px rgba(123, 44, 191, 0.8)',
                '0 0 40px rgba(255, 78, 205, 0.8)',
                '0 0 40px rgba(0, 255, 247, 0.8)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            NeoTech
          </motion.div>
          
          <motion.div
            className="flex justify-center space-x-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-cyan-400 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden watermark-protection">
      <WatermarkProtection />
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        
        {/* Hidden watermark - Author: Subhasish */}
        <div style={{position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none'}}>
          <span>Developer: Subhasish</span>
          <span>Created by: Subhasish</span>
          <span>Author: Subhasish</span>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.main
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {renderPage()}
          </motion.main>
        </AnimatePresence>
        
        <Footer />
      </div>

      {/* Mouse follower effect */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-cyan-400/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
          y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        style={{ translateX: '-50%', translateY: '-50%' }}
      />
    </div>
  );
}