import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Icon } from "../../lib/Icon";
import { skills } from "../../data/skills";
import Container from "../layout/Container";

const backendSkills = skills.filter((s) => s.category === "backend");
const frontendSkills = skills.filter((s) => s.category === "frontend");
const toolSkills = skills.filter((s) => s.category === "tools");

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className=" py-5 transition-all duration-1000 "
    >
      <Container>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl dark:text-text-primary">
            {t("skills.title")}
          </h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-primary" />
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="glass-card rounded-xl p-8 transition-colors hover:border-teal-300 md:col-span-2 card-hover dark:hover:border-primary/50"
            variants={item}
          >
            <div className="mb-6 flex items-center gap-4 ">
              <div className="rounded-lg bg-teal-50 p-3 dark:bg-primary/10">
                <Icon name="FiTerminal" className="text-xl text-teal-700 dark:text-primary" />
              </div>
              <h3 className="text-xl font-bold">{t("skills.backend")}</h3>
            </div>
            <p className="mb-6 leading-relaxed text-slate-500 dark:text-text-secondary">
              {t("skills.backendDesc")}
            </p>
            <div className="flex flex-wrap gap-3">
              {backendSkills.slice(0, 7).map((skill) => (
                <div
                  key={skill.id}
                  className="flex flex-col items-center gap-2 group"
                >
                  <Icon
                    name={skill.name}
                    className="h-10 w-10 transition-transform group-hover:scale-110"
                    fontSize="30px"
                    fallback={
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-teal-50 dark:bg-primary/10">
                        <Icon
                          name="FiTerminal"
                          className="text-teal-700 dark:text-primary"
                        />
                      </div>
                    }
                  />
                  <span className="text-[10px] text-slate-500 dark:text-text-secondary">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass-card rounded-xl p-8 transition-colors hover:border-sky-300 md:col-span-2 card-hover dark:hover:border-secondary/50"
            variants={item}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-lg bg-sky-50 p-3 dark:bg-secondary/10">
                <Icon name="FiGlobe" className="text-xl text-sky-700 dark:text-secondary" />
              </div>
              <h3 className="text-xl font-bold">{t("skills.frontend")}</h3>
            </div>
            <p className="mb-6 leading-relaxed text-slate-500 dark:text-text-secondary">
              {t("skills.frontendDesc")}
            </p>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.slice(0, 6).map((skill) => (
                <div
                  key={skill.id}
                  className="flex flex-col items-center gap-2 group"
                >
                  <Icon
                    name={skill.name}
                    className="h-10 w-10 transition-transform group-hover:scale-110"
                    fontSize="30px"
                    fallback={
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-sky-50 dark:bg-secondary/10">
                        <Icon
                          name="FiGlobe"
                          className="text-sky-700 dark:text-secondary"
                        />
                      </div>
                    }
                  />
                  <span className="text-[10px] text-slate-500 dark:text-text-secondary">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass-card rounded-xl border-l-4 border-l-orange-400 p-8 md:col-span-1 card-hover dark:border-l-tertiary"
            variants={item}
          >
            <h3 className="mb-4 text-xl font-bold">{t("skills.tools")}</h3>
            <p className="mb-6 text-sm leading-relaxed text-slate-500 dark:text-text-secondary">
              {t("skills.toolsDesc")}
            </p>
            <ul className="space-y-4">
              {toolSkills.map((tool) => (
                <li
                  key={tool.id}
                  className="flex items-center gap-3 text-sm text-slate-500 group dark:text-text-secondary"
                >
                  <Icon
                    name={tool.name}
                    className="h-6 w-6 group-hover:scale-110 transition-transform"
                    fontSize="30px"
                    fallback={
                      <Icon
                        name="FiTerminal"
                        className="h-6 w-6 group-hover:scale-110 transition-transform"
                      />
                    }
                  />
                  {tool.name}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="glass-card rounded-xl flex flex-col items-center gap-8 overflow-hidden p-8 md:col-span-2 lg:col-span-3 md:flex-row card-hover"
            variants={item}
          >
            <div className="flex-1">
              <h3 className="mb-4 text-2xl font-bold">
                {t("skills.engineeringFocus")}
              </h3>
              <p className="mb-6 leading-relaxed text-slate-500 dark:text-text-secondary">
                {t("skills.engineeringFocusDesc")}
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="flex items-center gap-2 text-xs font-medium text-teal-700 dark:text-primary">
                  <Icon name="FiLayout" className="text-sm" /> Clean Architecture
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-teal-700 dark:text-primary">
                  <Icon name="FiShare2" className="text-sm" /> CQRS & MediatR
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-teal-700 dark:text-primary">
                  <Icon name="FiTerminal" className="text-sm" /> REST API Design
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-teal-700 dark:text-primary">
                  <Icon name="FiKey" className="text-sm" /> Auth & Authorization
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-teal-700 dark:text-primary">
                  <Icon name="FiCpu" className="text-sm" /> Database Optimization
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-teal-700 dark:text-primary">
                  <Icon name="FiZap" className="text-sm" /> Caching Strategies
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-teal-700 dark:text-primary">
                  <Icon name="FiGitBranch" className="text-sm" /> Background Services
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-teal-700 dark:text-primary">
                  <Icon name="FiCheckCircle" className="text-sm" /> System Design
                </div>
              </div>
            
            </div>
            <div className="flex h-32 w-full items-center justify-center rounded-lg border border-teal-200 bg-teal-50 md:w-48 dark:border-primary/20 dark:bg-primary/5">
              <Icon name="FiZap" className="text-6xl text-teal-600/30 dark:text-primary/30" />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
