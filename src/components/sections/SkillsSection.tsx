import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FiTerminal,
  FiGlobe,
  FiLayout,
  FiShare2,
  FiKey,
  FiCpu,
  FiGitBranch,
  FiZap,
  FiCheckCircle,
  FiCircle,
} from "react-icons/fi";
import { skills } from "../../data/skills";

function DevIcon({
  className,
  devicon,
}: {
  className?: string;
  devicon: string;
}) {
  return (
    <i
      style={{ fontSize: "30px" }}
      className={`${devicon} ${className ?? ""}`}
    />
  );
}

const skillIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "ASP.NET Core": (props) => (
    <DevIcon {...props} devicon="devicon-dotnetcore-plain colored" />
  ),
  "C#": (props) => (
    <DevIcon {...props} devicon="devicon-csharp-plain colored" />
  ),
  "Entity Framework Core": (props) => (
    <DevIcon {...props} devicon="devicon-dotnetcore-plain colored" />
  ),
  "SQL Server": (props) => (
    <DevIcon {...props} devicon="devicon-microsoftsqlserver-plain colored" />
  ),
  Redis: (props) => (
    <DevIcon {...props} devicon="devicon-redis-plain colored" />
  ),
  "REST APIs": (props) => (
    <DevIcon {...props} devicon="devicon-fastapi-plain" />
  ),
  "JWT Authentication": () => <FiKey className="text-2xl text-primary" />,
  "Clean Architecture": () => <FiLayout className="text-2xl text-primary" />,
  "CQRS / MediatR": () => <FiShare2 className="text-2xl text-primary" />,
  FluentValidation: () => <FiCheckCircle className="text-2xl text-primary" />,
  React: (props) => (
    <DevIcon {...props} devicon="devicon-react-original colored" />
  ),
  TypeScript: (props) => (
    <DevIcon {...props} devicon="devicon-typescript-plain colored" />
  ),
  JavaScript: (props) => (
    <DevIcon {...props} devicon="devicon-javascript-plain colored" />
  ),
  "Tailwind CSS": (props) => (
    <DevIcon {...props} devicon="devicon-tailwindcss-plain colored" />
  ),
  "React Query": (props) => (
    <DevIcon {...props} devicon="devicon-tailwindcss-plain" />
  ),
  "Redux Toolkit": (props) => (
    <DevIcon {...props} devicon="devicon-redux-original colored" />
  ),
  Jotai: () => <FiCircle className="text-2xl text-primary" />,
  "Framer Motion": () => <FiZap className="text-2xl text-primary" />,
  Vite: (props) => (
    <DevIcon {...props} devicon="devicon-vitejs-plain colored" />
  ),
  Git: (props) => <DevIcon {...props} devicon="devicon-git-plain colored" />,
  GitHub: (props) => <DevIcon {...props} devicon="devicon-github-plain" />,
  Postman: (props) => (
    <DevIcon {...props} devicon="devicon-postman-plain colored" />
  ),
  Swagger: (props) => (
    <DevIcon {...props} devicon="devicon-swagger-plain colored" />
  ),
  "Visual Studio": (props) => (
    <DevIcon {...props} devicon="devicon-visualstudio-plain colored" />
  ),
  "VS Code": (props) => (
    <DevIcon {...props} devicon="devicon-vscode-plain colored" />
  ),
  "SQL Server Management Studio": (props) => (
    <DevIcon {...props} devicon="devicon-azuresqldatabase-plain colored" />
  ),
  "Redis Insight": (props) => (
    <DevIcon {...props} devicon="devicon-redis-plain colored" />
  ),
};

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
      className="px-6 py-24 transition-all duration-1000 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
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
                <FiTerminal className="text-xl text-teal-700 dark:text-primary" />
              </div>
              <h3 className="text-xl font-bold">{t("skills.backend")}</h3>
            </div>
            <p className="mb-6 leading-relaxed text-slate-500 dark:text-text-secondary">
              {t("skills.backendDesc")}
            </p>
            <div className="flex flex-wrap gap-3">
              {backendSkills.slice(0, 7).map((skill) => {
                const Icon = skillIconMap[skill.name];
                return (
                  <div
                    key={skill.id}
                    className="flex flex-col items-center gap-2 group"
                  >
                    {Icon ? (
                      <Icon className="h-10 w-10 transition-transform group-hover:scale-110" />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-teal-50 dark:bg-primary/10">
                        <FiTerminal className="text-teal-700 dark:text-primary" />
                      </div>
                    )}
                    <span className="text-[10px] text-slate-500 dark:text-text-secondary">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="glass-card rounded-xl p-8 transition-colors hover:border-sky-300 md:col-span-2 card-hover dark:hover:border-secondary/50"
            variants={item}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-lg bg-sky-50 p-3 dark:bg-secondary/10">
                <FiGlobe className="text-xl text-sky-700 dark:text-secondary" />
              </div>
              <h3 className="text-xl font-bold">{t("skills.frontend")}</h3>
            </div>
            <p className="mb-6 leading-relaxed text-slate-500 dark:text-text-secondary">
              {t("skills.frontendDesc")}
            </p>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.slice(0, 6).map((skill) => {
                const Icon = skillIconMap[skill.name];
                return (
                  <div
                    key={skill.id}
                    className="flex flex-col items-center gap-2 group"
                  >
                    {Icon ? (
                      <Icon className="h-10 w-10 transition-transform group-hover:scale-110" />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-sky-50 dark:bg-secondary/10">
                        <FiGlobe className="text-sky-700 dark:text-secondary" />
                      </div>
                    )}
                    <span className="text-[10px] text-slate-500 dark:text-text-secondary">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
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
              {toolSkills.map((tool) => {
                const Icon = skillIconMap[tool.name];
                return (
                  <li
                    key={tool.id}
                    className="flex items-center gap-3 text-sm text-slate-500 group dark:text-text-secondary"
                  >
                    {Icon ? (
                      <Icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    ) : (
                      <FiTerminal className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    )}
                    {tool.name}
                  </li>
                );
              })}
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
                  <FiLayout className="text-sm" /> Clean Architecture
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-teal-700 dark:text-primary">
                  <FiShare2 className="text-sm" /> CQRS & MediatR
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-teal-700 dark:text-primary">
                  <FiTerminal className="text-sm" /> REST API Design
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-teal-700 dark:text-primary">
                  <FiKey className="text-sm" /> Auth & Authorization
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-teal-700 dark:text-primary">
                  <FiCpu className="text-sm" /> Database Optimization
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-teal-700 dark:text-primary">
                  <FiZap className="text-sm" /> Caching Strategies
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-teal-700 dark:text-primary">
                  <FiGitBranch className="text-sm" /> Background Services
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-teal-700 dark:text-primary">
                  <FiCheckCircle className="text-sm" /> System Design
                </div>
              </div>
            
            </div>
            <div className="flex h-32 w-full items-center justify-center rounded-lg border border-teal-200 bg-teal-50 md:w-48 dark:border-primary/20 dark:bg-primary/5">
              <FiZap className="text-6xl text-teal-600/30 dark:text-primary/30" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
