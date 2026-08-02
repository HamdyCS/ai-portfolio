import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Icon } from "../lib/Icon";
import { techIconClassName } from "../lib/icons";
import { skills } from "../data/skills";

const backendSkills = skills.filter((s) => s.category === "backend");
const frontendSkills = skills.filter((s) => s.category === "frontend");
const toolSkills = skills.filter((s) => s.category === "tools");

const coreCompetencyIds = [
  "aspnet-core",
  "react",
  "typescript",
  "sql-server",
  "redis",
  "git",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Skills() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:pt-24">
      <div className="mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-4xl font-bold md:text-6xl"
        >
          {t("skills.pageTitle")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl text-lg leading-relaxed text-slate-500 dark:text-text-secondary"
        >
          {t("skills.pageSubtitle")}
        </motion.p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-6 md:grid-cols-12 auto-rows-[minmax(180px,auto)]"
      >
        {/* Backend */}
        <motion.div
          variants={item}
          className="bento-card flex flex-col justify-between rounded-xl p-8 md:col-span-8 md:row-span-2 h-170 overflow-y-auto"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <Icon name="FiTerminal" className="text-3xl text-primary" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-text-primary">
                {t("skills.backendTitle")}
              </h2>
            </div>
            <p className="mb-8 max-w-xl text-slate-500 dark:text-text-secondary">
              {t("skills.backendDesc")}
            </p>
            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {backendSkills.map((skill) => (
                <div
                  key={skill.id}
                  className={`tech-badge flex flex-col items-center justify-center gap-2 rounded-lg p-4 hover:bg-slate-100!  dark:hover:bg-surface-high! transition${
                    skill.id === "rest-api"
                      ? "border-primary/20 bg-primary/5"
                      : ""
                  }`}
                >
                  <Icon
                    name={skill.id}
                    className={techIconClassName}
                    fontSize="2rem"
                  />
                  <span
                    className={`text-center font-mono text-xs ${
                      skill.id === "rest-api" ? "text-primary" : ""
                    }`}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-auto flex items-center gap-2 font-mono text-sm text-primary">
            <Icon name="FiAward" className="text-xs" />
            <span>{t("skills.backendNote")}</span>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="bento-card flex flex-col rounded-xl p-8 md:col-span-4 md:row-span-3 h-230 overflow-y-auto"
        >
          <div className="mb-6 flex items-center gap-3">
            <Icon name="FiGlobe" className="text-3xl text-secondary" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-text-primary">
              {t("skills.frontendTitle")}
            </h2>
          </div>
          <p className="mb-6 text-sm text-slate-500 dark:text-text-secondary">
            {t("skills.frontendDesc")}
          </p>
          <div className="flex-grow space-y-3">
            {frontendSkills.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center gap-4 rounded-lg border border-slate-200/50 bg-slate-50 p-3 transition-colors hover:bg-slate-100 dark:border-outline-variant/10 dark:bg-surface-container-low dark:hover:bg-surface-high"
              >
                <Icon
                  name={skill.id}
                  className={techIconClassName}
                  fontSize="2rem"
                />
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-text-primary">
                    {skill.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-text-secondary">
                    {t(`skills.tags.${skill.id}`)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-slate-200 pt-6 dark:border-outline-variant/20">
            <div className="mb-4 font-mono text-xs uppercase tracking-widest text-slate-700 dark:text-tertiary">
              {t("skills.coreCompetencies")}
            </div>
            <div className="flex flex-wrap gap-2">
              {coreCompetencyIds.map((id) => {
                const skill = skills.find((s) => s.id === id);
                return skill ? (
                  <span
                    key={id}
                    className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[10px] text-slate-600 dark:border-outline-variant dark:bg-surface-highest dark:text-text-secondary"
                  >
                    {skill.name}
                  </span>
                ) : null;
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="group relative overflow-hidden rounded-xl p-8 md:col-span-8 md:row-span-1 bento-card"
        >
          <div className="absolute -mr-16 -mt-16 right-0 top-0 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-all duration-700 group-hover:bg-primary/10" />
          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-3">
              <Icon name="FiCpu" className="text-3xl text-tertiary" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-text-primary">
                {t("skills.engineeringTitle")}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <div className="mb-2 flex items-center gap-2 font-bold text-slate-900 dark:text-text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {t("skills.principleCleanArch")}
                </div>
                <p className="text-xs leading-relaxed text-slate-500 dark:text-text-secondary">
                  {t("skills.principleCleanArchDesc")}
                </p>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2 font-bold text-slate-900 dark:text-text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  {t("skills.principleSolid")}
                </div>
                <p className="text-xs leading-relaxed text-slate-500 dark:text-text-secondary">
                  {t("skills.principleSolidDesc")}
                </p>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2 font-bold text-slate-900 dark:text-text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
                  {t("skills.principleRest")}
                </div>
                <p className="text-xs leading-relaxed text-slate-500 dark:text-text-secondary">
                  {t("skills.principleRestDesc")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="bento-card rounded-xl p-8 md:col-span-12"
        >
          <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <Icon name="FiSettings" className="text-3xl text-slate-900 dark:text-text-primary" />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-text-primary">
                  {t("skills.toolsTitle")}
                </h2>
              </div>
              <p className="text-sm text-slate-500 dark:text-text-secondary">
                {t("skills.toolsDesc")}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {toolSkills.map((skill) => (
              <div
                key={skill.id}
                className="group flex flex-col items-center gap-3 rounded-xl border border-slate-200 p-4 transition-colors hover:border-primary/40 dark:border-outline-variant/20"
              >
                <Icon
                  name={skill.id}
                  className={`${techIconClassName} grayscale transition-all group-hover:grayscale-0`}
                  fontSize="2rem"
                />
                <span className="font-mono text-sm text-slate-700 dark:text-text-secondary">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
