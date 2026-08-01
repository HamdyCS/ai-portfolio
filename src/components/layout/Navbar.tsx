import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX, FiMoon, FiSun, FiDownload } from "react-icons/fi";
import { LanguageToggle } from "../common/LanguageToggle";
import { Button } from "../common/Button";
import { personalInfo } from "../../data/personal";
import DarkLogo from "../../assets/DarkLogo.png";
import { useAtom } from "jotai";
import themeAtom from "../../atoms/themeAtom";

const navItems = [
  { key: "nav.projects", href: "#projects" },
  { key: "nav.skills", href: "#skills" },
  { key: "nav.certificates", href: "#certificates" },
  { key: "nav.about", href: "#about" },
  { key: "nav.contact", href: "#contact" },
];

export function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useAtom(themeAtom);

  //handle theme change in local storage
  const handleThemeChange = (newTheme: "light" | "dark") => {
    localStorage.setItem("theme", newTheme);

    if (newTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }

    setTheme(newTheme);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 shadow-sm backdrop-blur-md dark:border-outline-variant/30 dark:bg-surface/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-0 py-4">
        <a
          href="#"
          className="flex items-center gap-2 text-sm  md:text-lg  font-bold text-teal-700 text-nowrap dark:text-primary"
          aria-label={personalInfo.name}
        >
          <img src={DarkLogo} alt="DarkLogo" className="w-10 h-10" />
          {personalInfo.name}
        </a>

        <nav
          className="hidden items-center gap-8 text-sm md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-slate-500 transition-colors hover:text-teal-700 dark:text-text-secondary dark:hover:text-primary"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            href={`mailto:${personalInfo.email}`}
            className="hidden px-4 py-2 md:inline-flex"
          >
            <FiDownload className="text-base" />
            {t("hero.downloadCV")}
          </Button>
          <button
            className="rounded-lg p-2 text-teal-700 transition-all duration-200 hover:bg-slate-200/50 active:scale-95 dark:text-primary dark:hover:bg-surface-highest/50"
            aria-label="Toggle dark mode"
            onClick={() =>
              handleThemeChange(theme === "light" ? "dark" : "light")
            }
          >
            {theme === "dark" ? (
              <FiSun className="text-lg" />
            ) : (
              <FiMoon className="text-lg" />
            )}
          </button>
          <LanguageToggle />
          <button
            className="rounded-lg p-2 text-slate-900 md:hidden dark:text-text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FiX className="text-lg" />
            ) : (
              <FiMenu className="text-lg" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          className="border-t border-slate-200 bg-white px-4 py-4 md:hidden dark:border-outline-variant/30 dark:bg-surface"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="block py-3 text-sm text-slate-500 transition-colors hover:text-teal-700 dark:text-text-secondary dark:hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t(item.key)}
            </a>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-on-primary transition-all hover:brightness-110 active:scale-95"
            onClick={() => setIsMenuOpen(false)}
          >
            <FiDownload className="text-base" />
            {t("hero.downloadCV")}
          </a>
        </nav>
      )}
    </nav>
  );
}
