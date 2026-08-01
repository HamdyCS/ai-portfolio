import { useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiTerminal,
  FiClock,
  FiZap,
  FiCheckCircle,
} from "react-icons/fi";
import { personalInfo } from "../../data/personal";
import HamdyBlackBG from "../../assets/HamdyBlackBG.png";

export function HeroSection() {
  const { t, i18n } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !wrapper) return;

    const rect = container.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / (rect.height / 2)) * -8;
    const rotateY = (mouseX / (rect.width / 2)) * 8;

    wrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[921px] items-center overflow-hidden px-6 transition-all duration-1000 md:px-12"
    >
      <div className="hero-gradient absolute inset-0 -z-10" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center rounded-full border border-teal-300 bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700 dark:border-primary/30 dark:bg-primary/5 dark:text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="ltr:mr-2 rtl:ml-2 inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
            {t("hero.available")}
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 md:text-7xl dark:text-text-primary">
              {t("hero.greeting")}
              <span className="text-teal-600 dark:text-primary">
                {i18n.language == "ar"
                  ? personalInfo.nameAr
                  : personalInfo.name}
              </span>
            </h1>

            <h2 className="text-2xl font-semibold text-sky-700 md:text-3xl dark:text-secondary">
              {t("hero.title", {
                title:
                  i18n.language == "ar"
                    ? personalInfo.titleAr
                    : personalInfo.title,
              })}
            </h2>

            <p className="max-w-lg text-lg leading-relaxed text-slate-500 dark:text-text-secondary">
              {t("hero.summary", {
                summary:
                  i18n.language == "ar"
                    ? personalInfo.summaryAr
                    : personalInfo.summary,
              })}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-bold text-on-primary transition-all duration-200 hover:brightness-110 active:scale-95"
            >
              {t("hero.viewProjects")}
              <FiArrowRight />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-8 py-4 font-bold text-slate-900 transition-all hover:bg-slate-200 dark:border-outline dark:text-text-primary dark:hover:bg-surface-highest"
            >
              <FiDownload className="text-[20px]" />
              {t("hero.downloadCV")}
            </a>
          </div>
        </motion.div>

        <div
          className="relative hidden md:block hero-illustration-container"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={
            {
              "--hero-mouse-x": "50%",
              "--hero-mouse-y": "50%",
            } as React.CSSProperties
          }
        >
          <div
            className="hero-tilt-wrapper"
            ref={wrapperRef}
            style={{ transform: "rotateX(0deg) rotateY(0deg)" }}
          >
            <div className="relative flex aspect-square w-full items-center justify-center">
              <div className="hero-magnetic-glow" />

              <div className="hero-tilt-inner relative h-4/5 w-4/5 overflow-hidden rounded-2xl border border-slate-200/70 shadow-2xl dark:border-outline-variant/30">
                <img
                  alt="Hamdy Khaled Portrait"
                  className="h-full w-full object-cover transition-all duration-500 grayscale hover:grayscale-0"
                  src={HamdyBlackBG}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50/80 to-transparent dark:from-background/80" />
              </div>

              <div className="hero-tilt-inner glass-card absolute -left-8 -top-4 max-w-[200px] rounded-xl border border-teal-200 p-4 shadow-xl dark:border-primary/20">
                <div className="mb-2 flex items-center gap-2">
                  <FiTerminal className="text-xs text-teal-700 dark:text-primary" />
                  <span className="text-[10px] uppercase tracking-wider text-teal-700/70 dark:text-primary/70">
                    {t("hero.techStack")}
                  </span>
                </div>
                <h4 className="mb-2 text-xs font-bold">
                  {t("hero.coreTechnologies")}
                </h4>
                <ul className="space-y-1">
                  {[
                    "ASP.NET Core",
                    "React",
                    "TypeScript",
                    "SQL Server",
                    "Redis",
                  ].map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-text-secondary"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hero-tilt-inner glass-card absolute -right-4 top-0 rounded-xl border border-sky-200 p-4 shadow-xl dark:border-secondary/20">
                <div className="mb-1 flex items-start justify-between">
                  <span className="text-[10px] uppercase tracking-wider opacity-60">
                    {t("hero.experience")}
                  </span>
                  <FiClock className="text-sm text-sky-700 dark:text-secondary" />
                </div>
                <div className="text-2xl font-extrabold text-sky-700 dark:text-secondary">
                  {personalInfo.yearsOfExperience}+
                </div>
                <div className="mb-2 text-[10px] text-slate-500 dark:text-text-secondary">
                  {t("hero.yearsBuildingWebApplications")}
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-surface">
                  <div className="h-full w-full bg-sky-500 dark:bg-secondary" />
                </div>
              </div>

              <div className="hero-tilt-inner glass-card absolute -left-12 bottom-12 rounded-xl border border-slate-200/70 p-4 shadow-xl dark:border-outline-variant/30">
                <div className="mb-2 flex items-center gap-2">
                  <FiZap className="text-xs text-teal-700 dark:text-primary" />
                  <span className="text-[10px] uppercase tracking-wider opacity-60">
                    {t("hero.projects")}
                  </span>
                </div>
                <div className="text-2xl font-extrabold text-teal-600 dark:text-primary">
                  {personalInfo.projectCount}+
                </div>
                <div className="text-[10px] text-slate-500 dark:text-text-secondary">
                  {t("hero.completedFullStackProjects")}
                </div>
              </div>

              <div className="hero-tilt-inner glass-card absolute -bottom-4 -right-8 rounded-xl border border-orange-200 p-4 shadow-xl dark:border-tertiary/20">
                <div className="mb-2 flex items-center gap-2">
                  <FiCheckCircle className="text-sm text-orange-700 dark:text-tertiary" />
                  <span className="text-[10px] uppercase tracking-wider opacity-60">
                    {t("hero.specialization")}
                  </span>
                </div>
                <ul className="mt-2 space-y-1">
                  {personalInfo.specializations.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-text-secondary"
                    >
                      <span className="h-1 w-1 rounded-full bg-tertiary" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
