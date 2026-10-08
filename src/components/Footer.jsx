import { useLanguage } from "../i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-8 text-center text-xs font-medium tracking-wide text-slate-400">
      © {currentYear} Javier Redondo · {t.footer.rights}
    </footer>
  );
};

export default Footer;
