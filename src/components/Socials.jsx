import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Socials() {
  const links = [
    { href: 'https://github.com/alfidev', label: 'GitHub', Icon: Github },
    { href: 'https://twitter.com/alfidev', label: 'X', Icon: Twitter },
    { href: 'https://linkedin.com/in/alfidev', label: 'LinkedIn', Icon: Linkedin },
  ];
  return (
    <div className="flex items-center gap-3">
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-zinc-300 dark:border-zinc-700 px-3 py-1.5 text-sm text-zinc-800 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
        >
          <Icon className="w-4 h-4" /> {label}
        </a>
      ))}
    </div>
  );
}
