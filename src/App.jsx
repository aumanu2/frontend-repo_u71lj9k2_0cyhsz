import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';

function App() {
  // Automatic theme switching based on system preference
  useEffect(() => {
    const root = document.documentElement;
    const mql = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (isDark) => {
      if (isDark) {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
      }
    };

    applyTheme(mql.matches);
    const handler = (e) => applyTheme(e.matches);
    mql.addEventListener ? mql.addEventListener('change', handler) : mql.addListener(handler);

    return () => {
      mql.removeEventListener ? mql.removeEventListener('change', handler) : mql.removeListener(handler);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <Navbar />
      <main>
        <Hero />

        <section id="about" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">About</h2>
              <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Hi, I’m <span className="font-semibold">AlfiDev</span> — an 11th-grade social science student who loves exploring web technologies and building
                cloud-based projects. I believe that age is never a limit to creating something meaningful. My interests include modern web frameworks,
                scalable cloud architectures, and crafting delightful user experiences.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 bg-gradient-to-br from-blue-50/60 to-purple-50/60 dark:from-blue-950/30 dark:to-purple-950/30">
              <ul className="grid sm:grid-cols-2 gap-4 text-sm">
                <li className="p-4 rounded-lg bg-white/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">Web Development</li>
                <li className="p-4 rounded-lg bg-white/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">Cloud & DevOps</li>
                <li className="p-4 rounded-lg bg-white/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">UI/UX & Design</li>
                <li className="p-4 rounded-lg bg-white/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">Open Source</li>
              </ul>
            </div>
          </div>
        </section>

        <Projects />

        <section id="contact" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Get in touch</h2>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300 max-w-2xl">
              I’m always excited to collaborate or chat about web and cloud ideas. Feel free to reach out!
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:hello@alfidev.dev"
                className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                Email
              </a>
              <a
                href="https://cloudkuimages.guru"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                CloudKuImages
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
