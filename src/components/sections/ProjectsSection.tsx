import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useAtom } from "jotai";
import { Icon } from "../../lib/Icon";
import { TechBadge } from "../common/TechBadge";
import { projects } from "../../data/projects";
import { projectFilterAtom } from "../../atoms/projectFilterAtom";
import type { ProjectFilterType, Project } from "../../types";
import Container from "../layout/Container";

const filters: { key: ProjectFilterType; labelKey: string }[] = [
  { key: "all", labelKey: "projects.all" },
  { key: "backend", labelKey: "projects.backend" },
  { key: "frontend", labelKey: "projects.frontend" },
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
      className="bg-slate-100/50 py-5 dark:bg-surface-container-lowest/50"
    >
      <Container>
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
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${activeFilter}-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.35,
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
                        <Icon name="FiExternalLink" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white p-3 text-slate-900 transition-all hover:scale-110 dark:bg-surface dark:text-text-primary"
                      >
                        <Icon name="FiCode" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex gap-2">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
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
      </Container>
    </section>
  );
}
