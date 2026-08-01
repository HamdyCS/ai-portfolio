import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX, FiMoon } from "react-icons/fi";
import { LanguageToggle } from "../common/LanguageToggle";
import { personalInfo } from "../../data/personal";
import DarkLogo from "../../assets/DarkLogo.png";

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

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/80 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-0 py-4">
        <a
          href="#"
          className="flex items-center gap-2 text-sm  md:text-lg  font-bold text-primary text-nowrap"
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
              className="text-text-secondary transition-colors hover:text-primary"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            className="rounded-lg p-2 text-primary transition-all duration-200 hover:bg-surface-highest/50 active:scale-95"
            aria-label="Toggle dark mode"
          >
            <FiMoon className="text-lg" />
          </button>
          <LanguageToggle />
          <button
            className="rounded-lg p-2 text-text-primary md:hidden"
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
          className="border-t border-outline-variant/30 bg-surface px-4 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="block py-3 text-sm text-text-secondary transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t(item.key)}
            </a>
          ))}
        </nav>
      )}
    </nav>
  );
}
