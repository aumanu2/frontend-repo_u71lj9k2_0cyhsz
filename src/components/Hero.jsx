import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-sm bg-white/60 dark:bg-zinc-900/60 rounded-xl p-6 border border-zinc-200/60 dark:border-zinc-800/60"
        >
          <p className="text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400">Young Cloud & Web Enthusiast</p>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white">
            Hi, I’m AlfiDev
          </h1>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Hi, I’m AlfiDev — an 11th-grade social science student who loves exploring web technologies and building cloud-based projects. I believe that age is never a limit to creating something meaningful.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#projects" className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors">View Projects</a>
            <a href="#contact" className="px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">Contact</a>
          </div>
        </motion.div>

        <div className="hidden md:block" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent" />
    </section>
  );
}
