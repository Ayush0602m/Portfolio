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
