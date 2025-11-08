import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-zinc-900/60 border-b border-zinc-200/60 dark:border-zinc-800/60">
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
          <a href="#about" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors">Projects</a>
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
