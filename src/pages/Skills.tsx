import { useTranslation } from "react-i18next";
import { motion, type Variants } from "framer-motion";
import { Icon } from "../lib/Icon";
import { techIconClassName } from "../lib/icons";
import { skills } from "../data/skills";
import Container from "../components/layout/Container";
import { Helmet } from "react-helmet";

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

// Header animations
const headerFade: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const headerStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

// Card entrance — subtle scale + fade, spring-based
const cardVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

// Container that staggers its children badges/rows once in view
const gridStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.1 },
  },
};

// Individual badge/item entrance
const itemFade: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

export function Skills() {
  const { t } = useTranslation();

  return (
    <div className="pb-24 pt-16 md:pt-24">
      <Helmet>
        <title>Skills | Hamdy Khaled</title>
        <meta
          name="description"
          content="Discover my technical skills in ASP.NET Core, C#, React, TypeScript, SQL Server, Entity Framework Core, Tailwind CSS, and modern software architecture."
        />
      </Helmet>

      <Container>
        {/* Header */}
        <motion.div
          variants={headerStagger}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.h1
            variants={headerFade}
            className="mb-4 text-4xl font-bold md:text-6xl"
          >
            {t("skills.pageTitle")}
          </motion.h1>

          <motion.p
            variants={headerFade}
            className="max-w-2xl text-lg leading-relaxed text-slate-500 dark:text-text-secondary"
          >
            {t("skills.pageSubtitle")}
          </motion.p>
        </motion.div>

        {/* Skills */}
        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-6 md:grid-cols-12">
          {/* Backend */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="bento-card flex h-170 flex-col justify-between overflow-y-auto rounded-xl p-8 md:col-span-8 md:row-span-2"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-6 flex items-center gap-3"
              >
                <Icon name="FiTerminal" className="text-3xl text-primary" />

                <h2 className="text-2xl font-bold text-slate-900 dark:text-text-primary">
                  {t("skills.backendTitle")}
                </h2>
              </motion.div>

              <p className="mb-8 max-w-xl text-slate-500 dark:text-text-secondary">
                {t("skills.backendDesc")}
              </p>

              <motion.div
                variants={gridStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
              >
                {backendSkills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    variants={itemFade}
                    whileHover={{
                      y: -4,
                      scale: 1.03,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      },
                    }}
                    className={`tech-badge flex flex-col items-center justify-center gap-2 rounded-lg p-4 transition-colors hover:bg-slate-100! dark:hover:bg-surface-high! ${
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
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-auto flex items-center gap-2 font-mono text-sm text-primary"
            >
              <Icon name="FiAward" className="text-xs" />
              <span>{t("skills.backendNote")}</span>
            </motion.div>
          </motion.div>

          {/* Frontend */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="bento-card flex h-230 flex-col overflow-y-auto rounded-xl p-8 md:col-span-4 md:row-span-3"
          >
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-6 flex items-center gap-3"
            >
              <Icon name="FiGlobe" className="text-3xl text-secondary" />

              <h2 className="text-2xl font-bold text-slate-900 dark:text-text-primary">
                {t("skills.frontendTitle")}
              </h2>
            </motion.div>

            <p className="mb-6 text-sm text-slate-500 dark:text-text-secondary">
              {t("skills.frontendDesc")}
            </p>

            <motion.div
              variants={gridStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="flex-grow space-y-3"
            >
              {frontendSkills.map((skill) => (
                <motion.div
                  key={skill.id}
                  variants={itemFade}
                  whileHover={{
                    x: 6,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
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
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 border-t border-slate-200 pt-6 dark:border-outline-variant/20">
              <div className="mb-4 font-mono text-xs uppercase tracking-widest text-slate-700 dark:text-tertiary">
                {t("skills.coreCompetencies")}
              </div>

              <motion.div
                variants={gridStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {coreCompetencyIds.map((id) => {
                  const skill = skills.find((s) => s.id === id);

                  return skill ? (
                    <motion.span
                      key={id}
                      variants={itemFade}
                      whileHover={{ scale: 1.08 }}
                      className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[10px] text-slate-600 dark:border-outline-variant dark:bg-surface-highest dark:text-text-secondary"
                    >
                      {skill.name}
                    </motion.span>
                  ) : null;
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Engineering */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="bento-card group relative overflow-hidden rounded-xl p-8 md:col-span-8 md:row-span-1"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute right-0 top-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-all duration-700 group-hover:bg-primary/10"
            />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-6 flex items-center gap-3"
              >
                <Icon name="FiCpu" className="text-3xl text-tertiary" />

                <h2 className="text-2xl font-bold text-slate-900 dark:text-text-primary">
                  {t("skills.engineeringTitle")}
                </h2>
              </motion.div>

              <motion.div
                variants={gridStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                <motion.div variants={itemFade}>
                  <div className="mb-2 flex items-center gap-2 font-bold text-slate-900 dark:text-text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {t("skills.principleCleanArch")}
                  </div>

                  <p className="text-xs leading-relaxed text-slate-500 dark:text-text-secondary">
                    {t("skills.principleCleanArchDesc")}
                  </p>
                </motion.div>

                <motion.div variants={itemFade}>
                  <div className="mb-2 flex items-center gap-2 font-bold text-slate-900 dark:text-text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    {t("skills.principleSolid")}
                  </div>

                  <p className="text-xs leading-relaxed text-slate-500 dark:text-text-secondary">
                    {t("skills.principleSolidDesc")}
                  </p>
                </motion.div>

                <motion.div variants={itemFade}>
                  <div className="mb-2 flex items-center gap-2 font-bold text-slate-900 dark:text-text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
                    {t("skills.principleRest")}
                  </div>

                  <p className="text-xs leading-relaxed text-slate-500 dark:text-text-secondary">
                    {t("skills.principleRestDesc")}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="bento-card rounded-xl p-8 md:col-span-12"
          >
            <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="mb-2 flex items-center gap-3">
                  <Icon
                    name="FiSettings"
                    className="text-3xl text-slate-900 dark:text-text-primary"
                  />

                  <h2 className="text-2xl font-bold text-slate-900 dark:text-text-primary">
                    {t("skills.toolsTitle")}
                  </h2>
                </div>

                <p className="text-sm text-slate-500 dark:text-text-secondary">
                  {t("skills.toolsDesc")}
                </p>
              </motion.div>
            </div>

            <motion.div
              variants={gridStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6"
            >
              {toolSkills.map((skill) => (
                <motion.div
                  key={skill.id}
                  variants={itemFade}
                  whileHover={{
                    y: -3,
                    borderColor: "var(--color-primary)",
                    transition: { type: "spring", stiffness: 300, damping: 18 },
                  }}
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
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
