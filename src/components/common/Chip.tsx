interface ChipProps {
  label: string;
  className?: string;
}

export function Chip({ label, className = "" }: ChipProps) {
  return (
    <span
      className={`inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-primary-ink ${className}`}
    >
      {label}
    </span>
  );
}
