import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";
import { useLanguage } from "../i18n/LanguageContext";

const THEME_COLORS = { light: "#fafafa", dark: "#09090b" };

const applyTheme = (theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[theme]);
};

const getSavedTheme = () => {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
};

const ThemeToggle = () => {
  const { t } = useLanguage();
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  // Follow the system preference until the user picks a theme explicitly
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (getSavedTheme()) return;
      const next = e.matches ? "dark" : "light";
      applyTheme(next);
      setTheme(next);
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage unavailable (private mode): the choice lasts for this visit only
    }
  };

  const isDark = theme === "dark";
  const Icon = isDark ? SunIcon : MoonIcon;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? t.header.toLight : t.header.toDark}
      title={isDark ? t.header.light : t.header.dark}
      className="flex size-11 cursor-pointer items-center justify-center rounded-full text-zinc-600 transition-colors duration-200 hover:bg-zinc-900/5 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white"
    >
      <Icon className="size-5" />
    </button>
  );
};

export default ThemeToggle;
