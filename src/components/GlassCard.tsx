import { motion } from 'motion/react';
import { ReactNode, useState } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function GlassCard({ children, className = '', hoverable = true }: GlassCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={hoverable ? {
        rotateX: mousePosition.y * 0.5,
        rotateY: mousePosition.x * 0.5,
        boxShadow: mousePosition.x !== 0 || mousePosition.y !== 0
          ? '0 20px 40px rgba(0, 255, 247, 0.1), 0 0 20px rgba(123, 44, 191, 0.1)'
          : '0 10px 30px rgba(0, 0, 0, 0.3)',
      } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      whileHover={hoverable ? {
        scale: 1.02,
        borderColor: 'rgba(0, 255, 247, 0.3)',
      } : {}}
    >
      {/* Animated border glow */}
      {hoverable && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0"
          style={{
            background: 'linear-gradient(45deg, rgba(0, 255, 247, 0.3), rgba(123, 44, 191, 0.3), rgba(255, 78, 205, 0.3))',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: mousePosition.x !== 0 || mousePosition.y !== 0 
              ? ['0% 0%', '100% 100%', '0% 0%'] 
              : '0% 0%',
            opacity: mousePosition.x !== 0 || mousePosition.y !== 0 ? 0.3 : 0,
          }}
          transition={{
            backgroundPosition: { duration: 2, repeat: Infinity },
            opacity: { duration: 0.3 },
          }}
        />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}