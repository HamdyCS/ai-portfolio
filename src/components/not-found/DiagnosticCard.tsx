import { motion, useReducedMotion } from "framer-motion";
import { Card } from "../common/Card";

interface DiagnosticRow {
  label: string;
  value: string;
}

interface DiagnosticCardProps {
  title: string;
  value: string;
  rows: DiagnosticRow[];
  delay: number;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function DiagnosticCard({ title, value, rows, delay }: DiagnosticCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: reduce ? 0 : delay, duration: 0.6, ease: EASE }}
    >
      <Card hover={!reduce} className="h-full">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-primary-ink">
            {title}
          </span>
        </div>
        <p className="mb-4 font-mono text-sm text-foreground">
          {value}
        </p>
        <dl className="space-y-2.5 border-t border-hairline pt-4">
          {rows.map((row) => (
            <div key={row.label} className="flex items-center justify-between gap-4">
              <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">
                {row.label}
              </dt>
              <dd className="font-mono text-xs text-foreground">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </Card>
    </motion.div>
  );
}
