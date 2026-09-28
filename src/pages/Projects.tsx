import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useAtom } from "jotai";
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
  all: "pill-all",
  backend:
    "pill-sky",
  frontend:
    "pill-teal",
  fullstack:
    "pill-violet",
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

// function updateSpot(e: MouseEvent<HTMLElement>) {
//   const rect = e.currentTarget.getBoundingClientRect();
//   e.currentTarget.style.setProperty(
//     "--spot-x",
//     `${((e.clientX - rect.left) / rect.width) * 100}%`,
//   );
//   e.currentTarget.style.setProperty(
//     "--spot-y",
//     `${((e.clientY - rect.top) / rect.height) * 100}%`,
//   );
// }

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
    "floaty-btn flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110";
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

  // //sort all projects by the length of their technologies array
  // const featuredProject =
  //   projects
  //     .filter((p) => p.featured)
  //     .sort((a, b) => b.technologies.length - a.technologies.length)[0] ??
  //   projects[0];

  const featuredProject =
    projects.find((project) => project.featured) || projects[0];

  //sort all projects by the length of their technologies array
  const filteredGridProjects =
    activeFilter === "all"
      ? projects
          .filter((project) => project.id !== featuredProject.id)
          .sort((a, b) => b.technologies.length - a.technologies.length)
      : projects
          .filter((project) => project.category === activeFilter)
          .sort((a, b) => b.technologies.length - a.technologies.length);

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
            <h1 className="mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl page-title">
              {t("projects.pageTitle")}
            </h1>
            <p className="text-base font-light leading-relaxed text-muted-foreground md:text-lg">
              {t("projects.pageSubtitle")}
            </p>
          </div>

          <div className="mt-8">
            <div className="flex w-fit flex-nowrap rounded-full border border-border bg-card p-1">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setActiveFilter(filter.key)}
                  className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-bold transition-all md:px-6 md:py-2 md:text-sm ${
                    activeFilter === filter.key
                      ? "bg-primary text-on-primary"
                      : "text-muted-foreground hover:text-primary-bright"
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
                // onMouseMove={updateSpot}
                className="projects-card group relative flex flex-col gap-6 overflow-hidden rounded-xl p-6 md:col-span-2 lg:flex-row lg:gap-8 lg:p-7 xl:col-span-3"
              >
                <SpotlightLayer />
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-plate lg:w-3/5">
                  <img
                    src={featuredProject.image}
                    alt={getLocalizedField(
                      featuredProject,
                      "title",
                      i18n.language,
                    )}
                    className="h-full w-full object-cover transition-all duration-300 ease-out group-hover:scale-[1.05] group-hover:media-dim"
                  />
                  <span className="pill-teal absolute start-4 top-4 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-xl">
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
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground lg:text-2xl">
                    {getLocalizedField(featuredProject, "title", i18n.language)}
                  </h3>
                  <p className="mb-5 line-clamp-3 text-sm font-light leading-relaxed text-muted-foreground">
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
                        className="flex items-center gap-2 text-sm font-bold text-primary-bright transition-all hover:gap-3 md:text-base"
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
                        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground md:text-base"
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
                // onMouseMove={updateSpot}
                className="projects-card group relative flex flex-col gap-3 overflow-hidden rounded-xl p-4"
              >
                <SpotlightLayer />
                <div className="relative aspect-video w-full overflow-hidden rounded-md bg-plate">
                  <img
                    src={project.image}
                    alt={getLocalizedField(project, "title", i18n.language)}
                    className="h-full w-full object-cover transition-all duration-300 ease-out group-hover:scale-[1.05] group-hover:media-dim"
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
                  <h3 className="mb-1 text-base font-bold text-foreground">
                    {getLocalizedField(project, "title", i18n.language)}
                  </h3>
                  <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {getLocalizedField(project, "description", i18n.language)}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-primary-bright hover:underline"
                      >
                        {t("projects.liveDemo")}
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground transition-colors hover:text-foreground"
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
