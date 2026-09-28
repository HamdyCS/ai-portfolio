const techColors: Record<string, { bg: string; text: string }> = {
  ".NET": {
    bg: "bg-violet-wash",
    text: "text-violet-ink",
  },
  "ASP.NET Core": {
    bg: "bg-violet-wash",
    text: "text-violet-ink",
  },
  React: {
    bg: "bg-cyan-wash",
    text: "text-cyan-ink",
  },
  TypeScript: {
    bg: "bg-blue-wash",
    text: "text-blue-ink",
  },
  JavaScript: {
    bg: "bg-yellow-wash",
    text: "text-yellow-ink",
  },
  HTML: {
    bg: "bg-orange-wash",
    text: "text-orange-ink",
  },
  CSS: {
    bg: "bg-sky-wash",
    text: "text-sky-ink",
  },
  "Tailwind CSS": {
    bg: "bg-teal-wash",
    text: "text-teal-ink",
  },
  Bootstrap: {
    bg: "bg-purple-wash",
    text: "text-purple-ink",
  },
  "Material UI": {
    bg: "bg-indigo-wash",
    text: "text-indigo-ink",
  },
  "SQL Server": {
    bg: "bg-red-wash",
    text: "text-red-ink",
  },
  "Redux Toolkit": {
    bg: "bg-pink-wash",
    text: "text-pink-ink",
  },
  "React Router": {
    bg: "bg-rose-wash",
    text: "text-rose-ink",
  },
  Axios: {
    bg: "bg-slate-wash",
    text: "text-slate-ink",
  },
  CQRS: {
    bg: "bg-emerald-wash",
    text: "text-emerald-ink",
  },
  MediatR: {
    bg: "bg-lime-wash",
    text: "text-lime-ink",
  },
  "Entity Framework Core": {
    bg: "bg-blue-wash",
    text: "text-blue-ink",
  },
  Redis: {
    bg: "bg-amber-wash",
    text: "text-amber-ink",
  },
  SignalR: {
    bg: "bg-fuchsia-wash",
    text: "text-fuchsia-ink",
  },
  JWT: {
    bg: "bg-cyan-wash",
    text: "text-cyan-ink",
  },

  Mapster: {
    bg: "bg-orange-wash",
    text: "text-orange-ink",
  },

  FluentValidation: {
    bg: "bg-teal-wash",
    text: "text-teal-ink",
  },

  Serilog: {
    bg: "bg-rose-wash",
    text: "text-rose-ink",
  },

  "3 Tier Architecture": {
    bg: "bg-indigo-wash",
    text: "text-indigo-ink",
  },

  AutoMapper: {
    bg: "bg-amber-wash",
    text: "text-amber-ink",
  },

  "React Query": {
    bg: "bg-fuchsia-wash",
    text: "text-fuchsia-ink",
  },
  Vite: {
    bg: "bg-purple-wash",
    text: "text-purple-ink",
  },
  Formik: {
    bg: "bg-sky-wash",
    text: "text-sky-ink",
  },
  Yup: {
    bg: "bg-green-wash",
    text: "text-green-ink",
  },
  "Chart.js": {
    bg: "bg-pink-wash",
    text: "text-pink-ink",
  },
  "Framer Motion": {
    bg: "bg-neutral-wash",
    text: "text-neutral-ink",
  },
  i18next: {
    bg: "bg-blue-wash",
    text: "text-blue-ink",
  },
  Sonner: {
    bg: "bg-zinc-wash",
    text: "text-zinc-ink",
  },
  "date-fns": {
    bg: "bg-emerald-wash",
    text: "text-emerald-ink",
  },
};

const fallbackColors = {
  bg: "bg-brand-soft-hover",
  text: "text-primary-ink",
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
