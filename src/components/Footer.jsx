import { useLanguage } from "../i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center gap-3 border-t border-white/10 bg-slate-950 py-8 text-center text-xs font-medium tracking-wide text-slate-400">
      <a
        href="mailto:jredondorodriguez99@gmail.com"
        className="text-sm text-slate-300 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
      >
        jredondorodriguez99@gmail.com
      </a>
      <p>
        © {currentYear} Javier Redondo · {t.footer.rights}
      </p>
    </footer>
  );
};

export default Footer;
