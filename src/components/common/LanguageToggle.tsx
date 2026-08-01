import { useTranslation } from "react-i18next";
import { useAtom } from "jotai";
import { languageDirectionAtom } from "../../atoms/languageAtom";
import { FiGlobe } from "react-icons/fi";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const [, setDirection] = useAtom(languageDirectionAtom);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    void i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
    setDirection(newLang === "ar" ? "rtl" : "ltr");
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  return (
    <button
      onClick={toggleLanguage}
      className="rounded-lg p-2 text-teal-700 transition-all duration-200 hover:bg-slate-200/50 active:scale-95 dark:text-primary dark:hover:bg-surface-highest/50"
      aria-label="Toggle language"
    >
      <FiGlobe className="text-lg" />
    </button>
  );
}
