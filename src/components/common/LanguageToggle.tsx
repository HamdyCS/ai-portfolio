import { useTranslation } from "react-i18next";
import { useAtom } from "jotai";
import { languageDirectionAtom } from "../../atoms/languageAtom";
import { Icon } from "../../lib/Icon";

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
      className="rounded-lg p-2 text-primary-ink transition-all duration-200 hover:bg-accent/50 active:scale-95"
      aria-label="Toggle language"
    >
      <Icon name="FiGlobe" className="text-lg" />
    </button>
  );
}
