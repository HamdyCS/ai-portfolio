import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useAtom } from "jotai";
import type { MouseEvent } from "react";
import { Icon } from "../lib/Icon";
import { TechBadge } from "../components/common/TechBadge";
import { projects } from "../data/projects";
import { projectFilterAtom } from "../atoms/projectFilterAtom";
import type { Project, ProjectCategory, ProjectFilterType } from "../types";
import Container from "../components/layout/Container";
import { Helmet } from "react-helmet";

const filters: { key: ProjectFilterType; labelKey: string }[] = [
  { key: "all", labelKey: "projects.all" },
  { key: "backend", labelKey: "projects.backend" },
  { key: "frontend", labelKey: "projects.frontend" },
  { key: "fullstack", labelKey: "projects.fullstack" },
];

const categoryBadge: Record<ProjectCategory, string> = {
  all: "border-slate-500/40 bg-slate-500/10 text-slate-700 dark:border-slate-400/30 dark:bg-slate-400/20 dark:text-slate-300",
  backend:
    "border-sky-500/40 bg-sky-500/10 text-sky-700 dark:border-[#7bd0ff]/30 dark:bg-[#7bd0ff]/20 dark:text-[#7bd0ff]",
  frontend:
    "border-teal-500/40 bg-teal-500/10 text-teal-700 dark:border-[#57f1db]/30 dark:bg-[#57f1db]/20 dark:text-[#57f1db]",
  fullstack:
    "border-violet-500/40 bg-violet-500/10 text-violet-700 dark:border-violet-400/30 dark:bg-violet-400/20 dark:text-violet-300",
};

const categoryLabelKey: Record<ProjectCategory, string> = {
  all: "projects.all",
  backend: "projects.backend",
  frontend: "projects.frontend",
  fullstack: "projects.fullstack",
};

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

function updateSpot(e: MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty(
    "--spot-x",
    `${((e.clientX - rect.left) / rect.width) * 100}%`,
  );
  e.currentTarget.style.setProperty(
    "--spot-y",
    `${((e.clientY - rect.top) / rect.height) * 100}%`,
  );
}

function OverlayActions({
  project,
  size = "md",
}: {
  project: Project;
  size?: "md" | "lg";
}) {
  const { t } = useTranslation();
  const isLg = size === "lg";
  const button =
    "flex items-center justify-center rounded-full bg-white text-teal-700 shadow-lg transition-transform hover:scale-110 dark:border dark:border-[#57f1db]/30 dark:bg-[rgba(1,15,31,0.8)] dark:text-[#57f1db]";
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("projects.liveDemo")}
          className={`${button} ${isLg ? "p-4" : "p-3"}`}
        >
          <Icon name="FiLink" className={isLg ? "h-6 w-6" : "h-5 w-5"} />
        </a>
      )}
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("projects.sourceCode")}
          className={`${button} ${isLg ? "p-4" : "p-3"}`}
        >
          <Icon name="FiCode" className={isLg ? "h-6 w-6" : "h-5 w-5"} />
        </a>
      )}
    </div>
  );
}

function SpotlightLayer() {
  return (
    <div
      aria-hidden="true"
      className="project-spotlight pointer-events-none absolute inset-0"
    />
  );
}

export function Projects() {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useAtom(projectFilterAtom);

  //sort all projects by the length of their technologies array
  const featuredProject =
    projects
      .filter((p) => p.featured)
      .sort((a, b) => b.technologies.length - a.technologies.length)[0] ??
    projects[0];

  const filteredGridProjects =
    activeFilter === "all"
      ? projects.filter((project) => project.id !== featuredProject.id)
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="pt-16 md:pt-24 md:px-2">
      <Helmet>
        <title>Projects | Hamdy Khaled</title>
        <meta
          name="description"
          content="Browse my portfolio of full-stack and frontend projects built with ASP.NET Core, React, TypeScript, SQL Server, and modern web technologies."
        />
      </Helmet>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          <div className="max-w-4xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
              {t("projects.pageTitle")}
            </h1>
            <p className="text-base font-light leading-relaxed text-slate-500 md:text-lg dark:text-text-secondary">
              {t("projects.pageSubtitle")}
            </p>
          </div>

          <div className="mt-8">
            <div className="flex w-fit flex-nowrap rounded-full border border-slate-200 bg-white p-1 dark:border-outline-variant dark:bg-surface">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setActiveFilter(filter.key)}
                  className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-bold transition-all md:px-6 md:py-2 md:text-sm ${
                    activeFilter === filter.key
                      ? "bg-primary text-on-primary"
                      : "text-slate-500 hover:text-teal-700 dark:text-text-secondary dark:hover:text-[#57f1db]"
                  }`}
                >
                  {t(filter.labelKey)}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="wait">
            {activeFilter === "all" && (
              <motion.article
                key="featured"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.35 }}
                onMouseMove={updateSpot}
                className="projects-card group relative flex flex-col gap-6 overflow-hidden rounded-xl p-6 md:col-span-2 lg:flex-row lg:gap-8 lg:p-7 xl:col-span-3"
              >
                <SpotlightLayer />
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-200 lg:w-3/5 dark:bg-[#122131]">
                  <img
                    src={featuredProject.image}
                    alt={getLocalizedField(
                      featuredProject,
                      "title",
                      i18n.language,
                    )}
                    className="h-full w-full object-cover transition-all duration-300 ease-out group-hover:scale-[1.05] group-hover:brightness-75 dark:group-hover:brightness-[0.4]"
                  />
                  <span className="absolute start-4 top-4 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-teal-700 backdrop-blur-xl dark:border-[#57f1db]/30 dark:bg-[#57f1db]/20 dark:text-[#57f1db]">
                    {t("projects.featuredProduction")}
                  </span>
                  <OverlayActions project={featuredProject} size="lg" />
                </div>
                <div className="relative flex w-full flex-1 flex-col justify-center lg:w-2/5">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech) => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
                  </div>
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-900 lg:text-2xl dark:text-text-primary">
                    {getLocalizedField(featuredProject, "title", i18n.language)}
                  </h3>
                  <p className="mb-5 line-clamp-3 text-sm font-light leading-relaxed text-slate-500 dark:text-text-secondary">
                    {getLocalizedField(
                      featuredProject,
                      "description",
                      i18n.language,
                    )}
                  </p>
                  <div className="flex flex-wrap items-center gap-5">
                    {featuredProject.liveUrl && (
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-teal-700 transition-all hover:gap-3 md:text-base dark:text-[#57f1db]"
                      >
                        {t("projects.liveDemo")}
                        <Icon name="FiExternalLink" className="h-4 w-4" />
                      </a>
                    )}
                    {featuredProject.repoUrl && (
                      <a
                        href={featuredProject.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-900 md:text-base dark:text-text-secondary dark:hover:text-text-primary"
                      >
                        {t("projects.sourceCode")}
                        <Icon name="FiTerminal" className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            )}

            {filteredGridProjects.map((project) => (
              <motion.article
                key={`${project.id}-${activeFilter}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                onMouseMove={updateSpot}
                className="projects-card group relative flex flex-col gap-3 overflow-hidden rounded-xl p-4"
              >
                <SpotlightLayer />
                <div className="relative aspect-video w-full overflow-hidden rounded-md bg-slate-200 dark:bg-[#122131]">
                  <img
                    src={project.image}
                    alt={getLocalizedField(project, "title", i18n.language)}
                    className="h-full w-full object-cover transition-all duration-300 ease-out group-hover:scale-[1.05] group-hover:brightness-75 dark:group-hover:brightness-[0.4]"
                  />
                  <span
                    className={`absolute start-3 top-3 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md ${categoryBadge[project.category]}`}
                  >
                    {t(categoryLabelKey[project.category])}
                  </span>
                  <OverlayActions project={project} />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="mb-2 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <TechBadge key={tech} tech={tech} size="sm" />
                    ))}
                  </div>
                  <h3 className="mb-1 text-base font-bold text-slate-900 dark:text-text-primary">
                    {getLocalizedField(project, "title", i18n.language)}
                  </h3>
                  <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-slate-500 dark:text-text-secondary">
                    {getLocalizedField(project, "description", i18n.language)}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-teal-700 hover:underline dark:text-[#57f1db]"
                      >
                        {t("projects.liveDemo")}
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-slate-500 transition-colors hover:text-slate-900 dark:text-text-secondary dark:hover:text-text-primary"
                      >
                        {t("projects.sourceCode")}
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
}
