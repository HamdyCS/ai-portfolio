import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useAtom } from "jotai";
import { FiExternalLink, FiCode } from "react-icons/fi";
import { projects } from "../../data/projects";
import { projectFilterAtom } from "../../atoms/projectFilterAtom";
import type { ProjectFilterType, Project } from "../../types";

const filters: { key: ProjectFilterType; labelKey: string }[] = [
  { key: "all", labelKey: "projects.all" },
  { key: "backend", labelKey: "projects.backend" },
  { key: "frontend", labelKey: "projects.frontend" },
];

const tagColors = [
  {
    key: ".NET",
    bg: "bg-violet-100 dark:bg-violet-500/10",
    text: "text-violet-700 dark:text-violet-400",
  },
  {
    key: "ASP.NET Core",
    bg: "bg-violet-100 dark:bg-violet-500/10",
    text: "text-violet-700 dark:text-violet-400",
  },
  {
    key: "React",
    bg: "bg-cyan-100 dark:bg-cyan-500/10",
    text: "text-cyan-700 dark:text-cyan-400",
  },
  {
    key: "TypeScript",
    bg: "bg-blue-100 dark:bg-blue-500/10",
    text: "text-blue-700 dark:text-blue-400",
  },
  {
    key: "JavaScript",
    bg: "bg-yellow-100 dark:bg-yellow-500/10",
    text: "text-yellow-700 dark:text-yellow-400",
  },
  {
    key: "HTML",
    bg: "bg-orange-100 dark:bg-orange-500/10",
    text: "text-orange-700 dark:text-orange-400",
  },
  {
    key: "CSS",
    bg: "bg-sky-100 dark:bg-sky-500/10",
    text: "text-sky-700 dark:text-sky-400",
  },
  {
    key: "Tailwind CSS",
    bg: "bg-teal-100 dark:bg-teal-500/10",
    text: "text-teal-700 dark:text-teal-400",
  },
  {
    key: "Bootstrap",
    bg: "bg-purple-100 dark:bg-purple-500/10",
    text: "text-purple-700 dark:text-purple-400",
  },
  {
    key: "Material UI",
    bg: "bg-indigo-100 dark:bg-indigo-500/10",
    text: "text-indigo-700 dark:text-indigo-400",
  },
  {
    key: "SQL Server",
    bg: "bg-red-100 dark:bg-red-500/10",
    text: "text-red-700 dark:text-red-400",
  },
];
const getLocalizedField = (
  project: Project,
  field: "title" | "description",
  lang: string,
) => {
  if (lang === "ar") {
    return field === "title" ? project.titleAr : project.descriptionAr;
  }
  return field === "title" ? project.title : project.description;
};

export function ProjectsSection() {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useAtom(projectFilterAtom);

  const filteredProjects =
    activeFilter === "all"
      ? projects.filter((p) => p.featured)
      : projects.filter((p) => p.category === activeFilter && p.featured);

  return (
    <section
      id="projects"
      className="bg-slate-100/50 py-24  dark:bg-surface-container-lowest/50"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-0">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="mb-2 text-2xl font-bold text-slate-900 md:text-3xl dark:text-text-primary">
              {t("projects.title")}
            </h2>
            <p className="text-slate-500 dark:text-text-secondary">
              {t("projects.subtitle")}
            </p>
          </div>
          <div className="flex rounded-full border border-slate-200 bg-white p-1 dark:border-outline-variant dark:bg-surface">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`rounded-full px-6 py-2 text-sm font-bold transition-all ${
                  activeFilter === filter.key
                    ? "bg-primary text-on-primary"
                    : "text-slate-500 hover:text-teal-700 dark:text-text-secondary dark:hover:text-primary"
                }`}
              >
                {t(filter.labelKey)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="project-card group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-outline-variant dark:bg-surface-container-low"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 flex items-center justify-center gap-4 bg-white/40 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-surface/40">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-primary p-3 text-on-primary transition-all hover:scale-110"
                      >
                        <FiExternalLink />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white p-3 text-slate-900 transition-all hover:scale-110 dark:bg-surface dark:text-text-primary"
                      >
                        <FiCode />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex gap-2">
                    {project.technologies.slice(0, 2).map((tech) => {
                      const tag = tagColors.find((t) => t.key === tech);
                      const colors = tag
                        ? { bg: tag.bg, text: tag.text }
                        : {
                            bg: "bg-teal-100 dark:bg-primary/10",
                            text: "text-teal-700 dark:text-primary",
                          };
                      return (
                        <span
                          key={tech}
                          className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${colors.bg} ${colors.text}`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                  <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-teal-700 dark:group-hover:text-primary">
                    {getLocalizedField(project, "title", i18n.language)}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-500 dark:text-text-secondary">
                    {getLocalizedField(project, "description", i18n.language)}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
