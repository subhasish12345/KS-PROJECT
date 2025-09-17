import { motion } from 'motion/react';
import { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

// Author: Subhasish
export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
    { id: '404', label: '404', hidden: true }, // Hidden 404 page for testing
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-3 shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="cursor-pointer"
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
            >
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                NeoTech
              </h1>
            </motion.div>

            {/* Hamburger menu button for mobile */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Navigation Links */}
            <div className={`flex-col md:flex-row md:flex items-center md:space-x-8 absolute md:static top-full left-0 w-full md:w-auto bg-white/5 md:bg-transparent border border-white/10 md:border-0 rounded-2xl md:rounded-none px-6 py-4 md:p-0 shadow-2xl md:shadow-none transition-transform duration-300 ease-in-out transform md:transform-none ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none md:pointer-events-auto'}`}>
              {navItems.filter(item => !item.hidden).map((item) => (
                <motion.button
                  key={item.id}
                  className="relative w-full md:w-auto text-left md:text-center px-4 py-2 text-white/80 hover:text-white transition-colors duration-300"
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ 
                      scaleX: hoveredItem === item.id || currentPage === item.id ? 1 : 0,
                      boxShadow: hoveredItem === item.id || currentPage === item.id 
                        ? '0 0 10px rgba(0, 255, 247, 0.8)' 
                        : '0 0 0px rgba(0, 255, 247, 0)'
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                  
                  {/* Glow effect on hover */}
                  {hoveredItem === item.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg -z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
