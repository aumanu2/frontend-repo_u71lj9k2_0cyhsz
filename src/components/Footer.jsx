export default function Footer() {
  return (
    <footer className="py-10 border-t border-zinc-200 dark:border-zinc-800 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-sm text-zinc-600 dark:text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} AlfiDev. Built with passion for the web and cloud.
        </p>
        <div className="flex items-center gap-4">
          <a href="#home" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">Home</a>
          <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
