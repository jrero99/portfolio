import { createContext, useContext, useEffect, useState } from "react";
import translations from "./translations";

const STORAGE_KEY = "lang";
export const languages = ["es", "en"];

const getInitialLanguage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (languages.includes(saved)) return saved;
  } catch {
    // Storage unavailable (private mode, blocked cookies): fall back to the browser language.
  }
  const browserLang = navigator.languages?.[0] ?? navigator.language ?? "";
  return browserLang.toLowerCase().startsWith("es") ? "es" : "en";
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.querySelector('meta[name="description"]')?.setAttribute("content", translations[lang].meta.description);
  }, [lang]);

  const changeLanguage = (next) => {
    setLang(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore: the choice just won't persist across visits.
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLanguage, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
