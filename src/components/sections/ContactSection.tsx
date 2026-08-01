import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiMapPin,
  FiStar,
  FiArrowRight,
} from "react-icons/fi";
import { personalInfo } from "../../data/personal";

export function ContactSection() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-24 transition-all duration-1000 md:px-0"
    >
      <motion.div
        className="glass-card overflow-hidden rounded-2xl border border-slate-200/70 shadow-2xl dark:border-outline-variant/30"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col justify-between bg-slate-100 p-8 md:p-12 lg:w-2/5 dark:bg-surface-container-lowest">
            <div>
              <div className="mb-8 inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-teal-700 dark:bg-primary/10 dark:text-primary">
                {t("contact.title")}
              </div>
              <h2 className="mb-6 text-4xl font-extrabold tracking-tight leading-tight text-slate-900 md:text-5xl dark:text-text-primary">
                {t("contact.heading1")} <br />
                <span className="text-teal-600 dark:text-primary">
                  {t("contact.heading2")}
                </span>{" "}
                <br />
                {t("contact.heading3")}
              </h2>
              <p className="mb-12 text-lg leading-relaxed text-slate-500 dark:text-text-secondary">
                {t("contact.description")}
              </p>
              <div className="mb-12 flex flex-wrap gap-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-on-primary transition-all duration-200 hover:brightness-110 active:scale-95"
                >
                  <FiMail className="text-sm" /> {t("contact.contactMe")}
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 font-bold text-slate-900 transition-all hover:bg-slate-200 dark:border-outline-variant dark:bg-surface dark:text-text-primary dark:hover:bg-surface-highest"
                >
                  <FiLinkedin className="text-sm" /> LinkedIn
                </a>
              </div>
            </div>

            <div className="space-y-6 border-t border-slate-200 pt-8 dark:border-outline-variant/30">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-primary/10">
                  <FiMapPin className="text-teal-700 dark:text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-text-primary">
                    {t("contact.basedIn", {
                      location: personalInfo.location,
                    })}
                  </p>
                  {/* <p className="text-[10px] text-text-secondary">
                    {t("contact.remote")}
                  </p> */}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 dark:bg-secondary/10">
                  <FiStar className="text-sky-700 dark:text-secondary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-text-primary">
                    {t("contact.availableFor")}
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-text-secondary">
                    {t("contact.availableForRoles")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-100/50 p-8 md:p-12 lg:w-3/5 dark:bg-surface-high/50">
            <div className="grid h-full grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="glass-card group flex flex-col rounded-xl border border-slate-200/70 p-6 transition-all hover:border-teal-300 card-hover dark:border-outline-variant/30 dark:hover:border-primary/50">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 dark:bg-surface-highest">
                  <FiGithub className="text-lg text-slate-900 grayscale transition-all group-hover:grayscale-0 dark:text-text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-text-primary">
                  {t("contact.gitHubProjects")}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500 dark:text-text-secondary">
                  {t("contact.gitHubProjectsDesc")}
                </p>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-teal-700 group-hover:underline dark:text-primary"
                >
                  {t("contact.viewGitHub")} <FiArrowRight className="text-sm" />
                </a>
              </div>

              <div className="glass-card group flex flex-col rounded-xl border border-slate-200/70 p-6 transition-all hover:border-sky-300 card-hover dark:border-outline-variant/30 dark:hover:border-secondary/50">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 dark:bg-surface-highest">
                  <FiLinkedin className="text-lg text-sky-700 grayscale transition-all group-hover:grayscale-0 dark:text-secondary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-text-primary">
                  {t("contact.professionalNetwork")}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500 dark:text-text-secondary">
                  {t("contact.professionalNetworkDesc")}
                </p>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-sky-700 group-hover:underline dark:text-secondary"
                >
                  {t("contact.connectLinkedIn")}{" "}
                  <FiArrowRight className="text-sm" />
                </a>
              </div>

              <div className="glass-card group flex flex-col rounded-xl border border-slate-200/70 p-6 transition-all hover:border-orange-300 card-hover sm:col-span-2 dark:border-outline-variant/30 dark:hover:border-tertiary/50">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 dark:bg-surface-highest">
                  <FiMail className="text-lg text-orange-700 dark:text-tertiary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-text-primary">
                  {t("contact.getInTouch")}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500 dark:text-text-secondary">
                  {t("contact.getInTouchDesc")}
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 text-sm font-bold text-orange-700 group-hover:underline dark:text-tertiary"
                >
                  {t("contact.sendEmail")} <FiArrowRight className="text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
