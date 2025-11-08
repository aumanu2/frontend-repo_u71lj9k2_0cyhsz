import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center overflow-hidden"
    >
      {/* Interactive Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/rwKT-aWtlkdY-8UV/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Floating content card */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
          className="backdrop-blur-sm bg-white/60 dark:bg-zinc-900/60 rounded-xl p-6 border border-zinc-200/60 dark:border-zinc-800/60 shadow-lg"
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400"
          >
            Young Cloud & Web Enthusiast
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.45 }}
            className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white"
          >
            Hi, I’m AlfiDev
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.45 }}
            className="mt-4 text-zinc-700 dark:text-zinc-300"
          >
            I’m an 11th-grade social science student exploring modern web technologies and building cloud-based projects. Age is never a limit to creating something meaningful.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.45 }}
            className="mt-6 flex items-center gap-3"
          >
            <a
              href="#projects"
              className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>

        <div className="hidden md:block" />
      </div>

      {/* Subtle vignette + bottom fade that never blocks Spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent" />

      {/* Interaction hint */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="pointer-events-none absolute right-4 bottom-4 md:right-8 md:bottom-8"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-zinc-900/70 border border-zinc-200/60 dark:border-zinc-800/60 px-3 py-1.5 text-xs text-zinc-700 dark:text-zinc-300 shadow">
          Click & drag the Game Boy to play
        </div>
      </motion.div>
    </section>
  );
}
