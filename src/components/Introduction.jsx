import { ArrowDownIcon, LinkedInIcon, MailIcon } from "./Icons";
import { useLanguage } from "../i18n/LanguageContext";

const Introduction = () => {
  const { t } = useLanguage();
  return (
    <section id="top" className="flex min-h-svh items-center px-6 pt-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-xs font-medium tracking-widest text-zinc-500 uppercase dark:text-zinc-400 motion-safe:animate-fade-up">
          <span className="inline-flex items-center gap-2.5">
            <span className="relative flex size-2 shrink-0">
              <span className="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span>{t.intro.availability}</span>
          </span>
          <span className="hidden text-zinc-300 sm:inline dark:text-zinc-700" aria-hidden="true">|</span>
          <span>Barcelona</span>
        </p>

        <h1 className="mt-8 font-display text-5xl font-bold tracking-tight text-balance text-zinc-900 dark:text-white motion-safe:animate-fade-up motion-safe:[animation-delay:120ms] sm:text-6xl md:text-7xl">
          {t.intro.titleStart}{" "}
          <span className="text-zinc-500 dark:text-zinc-400">{t.intro.titleHighlight}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-pretty text-zinc-600 dark:text-zinc-400 motion-safe:animate-fade-up motion-safe:[animation-delay:240ms]">
          {t.intro.summary}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 motion-safe:animate-fade-up motion-safe:[animation-delay:360ms] sm:flex-row">
          <a
            href="#content"
            className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-zinc-900 px-7 text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {t.intro.explore}
            <ArrowDownIcon className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/redondorodriguezjavier/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-zinc-900/10 bg-white px-7 text-sm font-semibold tracking-wide text-zinc-900 transition-colors duration-200 hover:border-zinc-900/20 hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-white/20 dark:hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <LinkedInIcon className="size-4 text-[#0A66C2] dark:text-white" />
            {t.intro.linkedin}
          </a>
          <a href="mailto:jredondorodriguez99@gmail.com" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-zinc-900/10 bg-white px-7 text-sm font-semibold tracking-wide text-zinc-900 transition-colors duration-200 hover:border-zinc-900/20 hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-white/20 dark:hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
            <MailIcon className="size-4" />
            {t.intro.email}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
