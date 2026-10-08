import { languages, useLanguage } from "../i18n/LanguageContext";

const names = { es: "Español", en: "English" };

const LanguageToggle = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div role="group" aria-label={t.header.language} className="flex items-center">
      {languages.map((code) => {
        const selected = lang === code;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            onClick={() => setLang(code)}
            aria-pressed={selected}
            aria-label={names[code]}
            title={names[code]}
            className={`flex size-11 cursor-pointer items-center justify-center rounded-full text-xs font-semibold tracking-wide uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              selected
                ? "text-zinc-900 dark:text-white"
                : "text-zinc-400 hover:bg-zinc-900/5 hover:text-zinc-900 dark:text-zinc-500 dark:hover:bg-white/10 dark:hover:text-white"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
