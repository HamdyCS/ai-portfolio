const techColors: Record<string, { bg: string; text: string }> = {
  ".NET": {
    bg: "bg-violet-100 dark:bg-violet-500/10",
    text: "text-violet-700 dark:text-violet-400",
  },
  "ASP.NET Core": {
    bg: "bg-violet-100 dark:bg-violet-500/10",
    text: "text-violet-700 dark:text-violet-400",
  },
  React: {
    bg: "bg-cyan-100 dark:bg-cyan-500/10",
    text: "text-cyan-700 dark:text-cyan-400",
  },
  TypeScript: {
    bg: "bg-blue-100 dark:bg-blue-500/10",
    text: "text-blue-700 dark:text-blue-400",
  },
  JavaScript: {
    bg: "bg-yellow-100 dark:bg-yellow-500/10",
    text: "text-yellow-700 dark:text-yellow-400",
  },
  HTML: {
    bg: "bg-orange-100 dark:bg-orange-500/10",
    text: "text-orange-700 dark:text-orange-400",
  },
  CSS: {
    bg: "bg-sky-100 dark:bg-sky-500/10",
    text: "text-sky-700 dark:text-sky-400",
  },
  "Tailwind CSS": {
    bg: "bg-teal-100 dark:bg-teal-500/10",
    text: "text-teal-700 dark:text-teal-400",
  },
  Bootstrap: {
    bg: "bg-purple-100 dark:bg-purple-500/10",
    text: "text-purple-700 dark:text-purple-400",
  },
  "Material UI": {
    bg: "bg-indigo-100 dark:bg-indigo-500/10",
    text: "text-indigo-700 dark:text-indigo-400",
  },
  "SQL Server": {
    bg: "bg-red-100 dark:bg-red-500/10",
    text: "text-red-700 dark:text-red-400",
  },
  "Redux Toolkit": {
    bg: "bg-pink-100 dark:bg-pink-500/10",
    text: "text-pink-700 dark:text-pink-400",
  },
  "React Router": {
    bg: "bg-rose-100 dark:bg-rose-500/10",
    text: "text-rose-700 dark:text-rose-400",
  },
  Axios: {
    bg: "bg-slate-100 dark:bg-slate-500/10",
    text: "text-slate-700 dark:text-slate-400",
  },
  CQRS: {
    bg: "bg-emerald-100 dark:bg-emerald-500/10",
    text: "text-emerald-700 dark:text-emerald-400",
  },
  MediatR: {
    bg: "bg-lime-100 dark:bg-lime-500/10",
    text: "text-lime-700 dark:text-lime-400",
  },
  "Entity Framework Core": {
    bg: "bg-blue-100 dark:bg-blue-500/10",
    text: "text-blue-700 dark:text-blue-400",
  },
  Redis: {
    bg: "bg-amber-100 dark:bg-amber-500/10",
    text: "text-amber-700 dark:text-amber-400",
  },
  SignalR: {
    bg: "bg-fuchsia-100 dark:bg-fuchsia-500/10",
    text: "text-fuchsia-700 dark:text-fuchsia-400",
  },
  JWT: {
    bg: "bg-cyan-100 dark:bg-cyan-500/10",
    text: "text-cyan-700 dark:text-cyan-400",
  },

  Mapster: {
    bg: "bg-orange-100 dark:bg-orange-500/10",
    text: "text-orange-700 dark:text-orange-400",
  },

  FluentValidation: {
    bg: "bg-teal-100 dark:bg-teal-500/10",
    text: "text-teal-700 dark:text-teal-400",
  },

  Serilog: {
    bg: "bg-rose-100 dark:bg-rose-500/10",
    text: "text-rose-700 dark:text-rose-400",
  },

  "3 Tier Architecture": {
    bg: "bg-indigo-100 dark:bg-indigo-500/10",
    text: "text-indigo-700 dark:text-indigo-400",
  },

  AutoMapper: {
    bg: "bg-amber-100 dark:bg-amber-500/10",
    text: "text-amber-700 dark:text-amber-400",
  },

  "React Query": {
    bg: "bg-fuchsia-100 dark:bg-fuchsia-500/10",
    text: "text-fuchsia-700 dark:text-fuchsia-400",
  },
};

const fallbackColors = {
  bg: "bg-teal-100 dark:bg-primary/10",
  text: "text-teal-700 dark:text-primary",
};

interface TechBadgeProps {
  tech: string;
  size?: "sm" | "md";
  className?: string;
}

export function TechBadge({
  tech,
  size = "md",
  className = "",
}: TechBadgeProps) {
  const colors = techColors[tech] ?? fallbackColors;
  const padding = size === "sm" ? "px-2.5 py-0.5" : "px-3 py-1";
  return (
    <span
      className={`inline-block rounded-full text-[10px] font-bold uppercase tracking-wider ${padding} ${colors.bg} ${colors.text} ${className}`}
    >
      {tech}
    </span>
  );
}
