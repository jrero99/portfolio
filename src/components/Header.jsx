import { GitHubIcon, LinkedInIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const links = [
  { label: "GitHub", href: "https://github.com/jrero99", Icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/redondorodriguezjavier/", Icon: LinkedInIcon },
];

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-900/5 bg-zinc-50/75 backdrop-blur-md dark:border-white/10 dark:bg-night/75">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-display text-base font-bold tracking-tight whitespace-nowrap text-zinc-900 sm:text-lg dark:text-white">
          Javier Redondo<span className="text-accent">.</span>
        </a>
        <ul className="flex items-center sm:gap-1">
          {links.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full text-sm sm:px-3 font-medium text-zinc-600 transition-colors duration-200 hover:bg-zinc-900/5 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <Icon className="size-5" />
                <span className="hidden sm:inline">{label}</span>
              </a>
            </li>
          ))}
          <li>
            <LanguageToggle />
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
