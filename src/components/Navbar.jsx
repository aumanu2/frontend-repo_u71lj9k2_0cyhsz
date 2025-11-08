import { motion, useScroll, useSpring } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.3 });

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-zinc-900/60 border-b border-zinc-200/60 dark:border-zinc-800/60">
      {/* Scroll progress bar */}
      <motion.div
        className="absolute left-0 right-0 top-0 h-[2px] origin-left bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        style={{ scaleX }}
      />

      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <motion.a
          href="#home"
          className="inline-flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span>AlfiDev</span>
        </motion.a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          {[{ id: 'about', label: 'About' }, { id: 'projects', label: 'Projects' }].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="relative text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors"
            >
              {link.label}
              <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-zinc-300 dark:border-zinc-700 px-3 py-1.5 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
