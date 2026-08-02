import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "../../lib/Icon";
import { LanguageToggle } from "../common/LanguageToggle";
import { personalInfo } from "../../data/personal";
import DarkLogo from "../../assets/DarkLogo.png";
import { useAtom } from "jotai";
import themeAtom from "../../atoms/themeAtom";

const navItems = [
  { key: "nav.projects", href: "/projects" },
  { key: "nav.skills", href: "/skills" },
  { key: "nav.certificates", href: "/certificates" },
  { key: "nav.about", href: "/about" },
  { key: "nav.contact", href: "/#contact" },
];

const routePages = ["/projects", "/certificates", "/skills", "/about"];

export function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useAtom(themeAtom);
  const location = useLocation();

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
      <div className="container px-3 mx-auto w-full md:max-w-7xl">
        <div className="flex items-center justify-between py-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm  md:text-lg  font-bold text-teal-700 text-nowrap dark:text-primary"
            aria-label={personalInfo.name}
          >
            <img src={DarkLogo} alt="DarkLogo" className="w-10 h-10" />
            {personalInfo.name}
          </Link>

          <nav
            className="hidden items-center gap-6 text-sm md:flex"
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const isActive =
                routePages.includes(item.href) &&
                location.pathname === item.href;
              return (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`transition-colors ${
                    isActive
                      ? "font-bold text-teal-700 dark:text-primary"
                      : "text-slate-500 hover:text-teal-700 dark:text-text-secondary dark:hover:text-primary"
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center md:gap-2 sm:gap-0">
            <a
              href={`mailto:${personalInfo.email}`}
              className="hidden md:flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2 font-bold text-slate-900 transition-all hover:bg-slate-200 dark:border-outline dark:text-text-primary dark:hover:bg-surface-highest text-[12px] "
            >
              <Icon name="FiDownload" className="text-[14px]" />
              {t("hero.downloadCV")}
            </a>
            <button
              className="rounded-lg p-2 text-teal-700 transition-all duration-200 hover:bg-slate-200/50 active:scale-95 dark:text-primary dark:hover:bg-surface-highest/50"
              aria-label="Toggle dark mode"
              onClick={() =>
                handleThemeChange(theme === "light" ? "dark" : "light")
              }
            >
              {theme === "dark" ? (
                <Icon name="FiSun" className="text-lg" />
              ) : (
                <Icon name="FiMoon" className="text-lg" />
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
                <Icon name="FiX" className="text-lg" />
              ) : (
                <Icon name="FiMenu" className="text-lg" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav
            className="border-t border-slate-200 bg-white px-4 py-4 md:hidden dark:border-outline-variant/30 dark:bg-surface"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => {
              const isActive =
                routePages.includes(item.href) &&
                location.pathname === item.href;
              return (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`block py-3 text-sm transition-colors ${
                    isActive
                      ? "font-bold text-teal-700 dark:text-primary"
                      : "text-slate-500 hover:text-teal-700 dark:text-text-secondary dark:hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              );
            })}
            <div className="flex justify-center gap-4 mt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-8 py-4 font-bold text-slate-900 transition-all hover:bg-slate-200 dark:border-outline dark:text-text-primary dark:hover:bg-surface-highest"
              >
                <Icon name="FiDownload" className="text-[20px]" />
                {t("hero.downloadCV")}
              </a>
            </div>
          </nav>
        )}
      </div>
    </nav>
  );
}
