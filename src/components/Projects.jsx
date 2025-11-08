import { motion } from 'framer-motion';
import { ExternalLink, Cloud, Github, Star } from 'lucide-react';

const projects = [
  {
    title: 'CloudKuImages',
    description:
      'A modern image hosting service designed for speed and simplicity with a focus on cloud-native infrastructure.',
    url: 'https://cloudkuimages.guru',
    icon: Cloud,
    stars: '1.2k',
    tags: ['Cloud', 'Next.js', 'Edge'],
  },
  {
    title: 'Portfolio v2',
    description: 'Animated portfolio with 3D hero, theme sync, and motion interactions.',
    url: '#',
    icon: Star,
    stars: '320',
    tags: ['React', 'Framer Motion', 'Spline'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.url}
              target={p.url.startsWith('http') ? '_blank' : undefined}
              rel={p.url.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900 hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <p.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{p.title}</h3>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-zinc-800 dark:text-zinc-400 dark:group-hover:text-zinc-100 transition-colors" />
              </div>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
                <span className="inline-flex items-center gap-1"><Github className="w-3.5 h-3.5" />{p.stars} stars</span>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
