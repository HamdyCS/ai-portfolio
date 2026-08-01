interface ChipProps {
  label: string;
  className?: string;
}

export function Chip({ label, className = "" }: ChipProps) {
  return (
    <span
      className={`inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 dark:bg-[rgba(45,212,191,0.1)] dark:text-[#2dd4bf] ${className}`}
    >
      {label}
    </span>
  );
}
