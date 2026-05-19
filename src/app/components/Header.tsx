import { motion } from 'motion/react';
import { Github } from 'lucide-react';

export function Header() {
  return (
    <header className="relative w-full h-[180px] overflow-visible mt-0 mb-1">
      {/* Banner Background */}
      <div className="absolute top-0 bottom-0 -left-6 -right-6 overflow-hidden">
        <img
          src="/banner.png"
          alt="Portfolio banner"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
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
          href="https://github.com/Ayush0602m/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github className="w-5 h-5 text-white" />
         
        </motion.a>

      </div>
    </header>
  );
}
