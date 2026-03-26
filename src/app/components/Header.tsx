import { motion } from 'motion/react';
import { Github, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="relative w-full h-[150px] overflow-visible mt-0 mb-1">
      {/* Map Background */}
      <div
        className="absolute top-0 bottom-0 -left-6 -right-6 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 0, 100, 0.05) 25%, transparent 25%), linear-gradient(225deg, rgba(255, 0, 100, 0.05) 25%, transparent 25%)',
        }}
      >
        {/* Grid lines - horizontal */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mapGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              {/* Main grid lines */}
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(255, 0, 100, 0.15)"
                strokeWidth="2"
              />
            </pattern>
            <pattern id="mapGridLarge" width="180" height="180" patternUnits="userSpaceOnUse">
              {/* Larger grid lines */}
              <path
                d="M 180 0 L 0 0 0 180"
                fill="none"
                stroke="rgba(255, 0, 100, 0.25)"
                strokeWidth="1.5"
              />
            </pattern>
            {/* Radial gradient for orb glow */}
            <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255, 20, 80, 0.4)" />
              <stop offset="50%" stopColor="rgba(255, 20, 80, 0.1)" />
              <stop offset="100%" stopColor="rgba(255, 20, 80, 0)" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#mapGrid)" />
          <rect width="100%" height="100%" fill="url(#mapGridLarge)" />

          {/* Diagonal street lines */}
          <line x1="0" y1="100" x2="200" y2="300" stroke="rgba(255, 0, 100, 0.2)" strokeWidth="1" />
          <line x1="50" y1="0" x2="250" y2="200" stroke="rgba(255, 0, 100, 0.15)" strokeWidth="1" />
          <line x1="100" y1="150" x2="300" y2="350" stroke="rgba(255, 0, 100, 0.18)" strokeWidth="1" />
          <line x1="150" y1="50" x2="350" y2="250" stroke="rgba(255, 0, 100, 0.12)" strokeWidth="1" />
          <line x1="200" y1="0" x2="400" y2="200" stroke="rgba(255, 0, 100, 0.2)" strokeWidth="1" />

          {/* Curved street lines */}
          <path d="M 0 200 Q 100 150 200 200 T 400 200" fill="none" stroke="rgba(255, 0, 100, 0.2)" strokeWidth="1" />
          <path d="M 0 300 Q 150 250 300 300 T 600 300" fill="none" stroke="rgba(255, 0, 100, 0.15)" strokeWidth="1" />
          <path d="M 100 0 Q 150 100 100 200 T 100 400" fill="none" stroke="rgba(255, 0, 100, 0.18)" strokeWidth="1" />

          {/* Additional random street segments */}
          <line x1="20" y1="80" x2="120" y2="80" stroke="rgba(255, 0, 100, 0.25)" strokeWidth="1" />
          <line x1="30" y1="160" x2="180" y2="160" stroke="rgba(255, 0, 100, 0.2)" strokeWidth="1" />
          <line x1="80" y1="240" x2="220" y2="240" stroke="rgba(255, 0, 100, 0.22)" strokeWidth="1" />
          <line x1="60" y1="320" x2="200" y2="320" stroke="rgba(255, 0, 100, 0.18)" strokeWidth="1" />

          {/* Vertical segments */}
          <line x1="140" y1="40" x2="140" y2="180" stroke="rgba(255, 0, 100, 0.2)" strokeWidth="1" />
          <line x1="220" y1="100" x2="220" y2="280" stroke="rgba(255, 0, 100, 0.15)" strokeWidth="1" />
        </svg>
      </div>

      {/* Floating Orb - overlaps below header */}
      <motion.div
        className="absolute left-3 md:left-10 bottom-0 translate-y-1/2 z-10"
        // initial={{ scale: 0.8, opacity: 0 }}
        // animate={{ scale: 1, opacity: 1 }}
        // transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Outer glow */}
        <div
          className="absolute -inset-8 rounded-full blur-3xl"
          // style={{
          //   background: 'radial-gradient(circle, rgba(255, 30, 80, 0.4) 0%, rgba(255, 30, 80, 0) 70%)',
          // }}
        />
        {/* Main orb */}
        <motion.div
          className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full -left-3 sm:-left-5"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #ff4d6d 0%, #c9184a 40%, #800f2f 70%, #590d22 100%)',
            
          }}
          
        >
          <img
    src="/profile.jpg"
    alt="Ayush Mangla profile"
    className="w-full h-full rounded-full object-cover border border-black/20"
    style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
  />
        </motion.div>
      </motion.div>

      {/* Top Right Controls - inside the background */}
      <div className="absolute top-8 right-8 md:right-12 flex items-center gap-3 z-20">
        {/* GitHub with star count */}
        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github className="w-5 h-5 text-white" />
          <span className="text-white text-sm font-medium">14</span>
        </motion.a>

        {/* Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5 text-white" />
          ) : (
            <Sun className="w-5 h-5 text-yellow" />
          )}
        </motion.button>
      </div>
    </header>
  );
}
