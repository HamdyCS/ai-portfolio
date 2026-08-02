import type { ReactNode } from "react";
import { iconClassName, iconMap } from "./icons";

export function Icon({
  name,
  className = "",
  fontSize,
  fallback,
}: {
  name: string;
  className?: string;
  fontSize?: string;
  fallback?: ReactNode;
}) {
  const entry = iconMap[name];
  if (!entry) {
    return fallback ?? null;
  }
  if (entry.type === "devicon") {
    return (
      <i
        aria-hidden="true"
        style={fontSize ? { fontSize } : undefined}
        className={`${entry.className} ${className}`}
      />
    );
  }
  const Component = entry.component;
  return (
    <Component
      aria-hidden="true"
      className={`${iconClassName} ${entry.className ?? ""} ${className}`}
    />
  );
}
