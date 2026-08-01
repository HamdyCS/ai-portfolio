import { useTranslation } from "react-i18next";
import { personalInfo } from "../../data/personal";

const socialLinks = [
  { platform: "LinkedIn", url: personalInfo.linkedin },
  { platform: "GitHub", url: personalInfo.github },
  { platform: "WhatsApp", url: personalInfo.whatsapp },
  { platform: "Email", url: `mailto:${personalInfo.email}` },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-slate-200 bg-slate-100 py-12 dark:border-outline-variant dark:bg-surface-container-lowest">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 md:px-0 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <span className="text-lg font-bold text-slate-900 dark:text-text-primary">
            {personalInfo.name}
          </span>
          <p className="text-xs text-slate-500 dark:text-text-secondary">
            {t("footer.copyright", {
              year: new Date().getFullYear(),
              name: personalInfo.name,
            })}
          </p>
        </div>

        <div className="flex items-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-slate-500 opacity-80 transition-all hover:text-teal-700 hover:underline hover:opacity-100 dark:text-text-secondary dark:hover:text-primary"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
