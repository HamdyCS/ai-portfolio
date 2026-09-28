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
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
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
            className="glass-card rounded-xl p-8 transition-colors hover:border-teal-edge-hover md:col-span-2 card-hover"
            variants={item}
          >
            <div className="mb-6 flex items-center gap-4 ">
              <div className="rounded-lg bg-brand-soft p-3">
                <Icon name="FiTerminal" className="text-xl text-primary-ink" />
              </div>
              <h3 className="text-xl font-bold">{t("skills.backend")}</h3>
            </div>
            <p className="mb-6 leading-relaxed text-muted-foreground">
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
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-brand-soft">
                        <Icon
                          name="FiTerminal"
                          className="text-primary-ink"
                        />
                      </div>
                    }
                  />
                  <span className="text-[10px] text-muted-foreground">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass-card rounded-xl p-8 transition-colors hover:border-sky-edge-hover md:col-span-2 card-hover"
            variants={item}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-lg bg-secondary-soft p-3">
                <Icon name="FiGlobe" className="text-xl text-secondary-ink" />
              </div>
              <h3 className="text-xl font-bold">{t("skills.frontend")}</h3>
            </div>
            <p className="mb-6 leading-relaxed text-muted-foreground">
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
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary-soft">
                        <Icon
                          name="FiGlobe"
                          className="text-secondary-ink"
                        />
                      </div>
                    }
                  />
                  <span className="text-[10px] text-muted-foreground">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass-card rounded-xl border-l-4 border-l-orange-bar p-8 md:col-span-1 card-hover"
            variants={item}
          >
            <h3 className="mb-4 text-xl font-bold">{t("skills.tools")}</h3>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              {t("skills.toolsDesc")}
            </p>
            <ul className="space-y-4">
              {toolSkills.map((tool) => (
                <li
                  key={tool.id}
                  className="flex items-center gap-3 text-sm text-muted-foreground group"
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
              <p className="mb-6 leading-relaxed text-muted-foreground">
                {t("skills.engineeringFocusDesc")}
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="flex items-center gap-2 text-xs font-medium text-primary-ink">
                  <Icon name="FiLayout" className="text-sm" /> Clean Architecture
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-primary-ink">
                  <Icon name="FiShare2" className="text-sm" /> CQRS & MediatR
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-primary-ink">
                  <Icon name="FiTerminal" className="text-sm" /> REST API Design
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-primary-ink">
                  <Icon name="FiKey" className="text-sm" /> Auth & Authorization
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-primary-ink">
                  <Icon name="FiCpu" className="text-sm" /> Database Optimization
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-primary-ink">
                  <Icon name="FiZap" className="text-sm" /> Caching Strategies
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-primary-ink">
                  <Icon name="FiGitBranch" className="text-sm" /> Background Services
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-primary-ink">
                  <Icon name="FiCheckCircle" className="text-sm" /> System Design
                </div>
              </div>
            
            </div>
            <div className="flex h-32 w-full items-center justify-center rounded-lg border border-teal-edge-soft bg-brand-soft-dim md:w-48">
              <Icon name="FiZap" className="text-6xl text-primary-ink/30" />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
