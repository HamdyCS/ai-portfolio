import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";

interface Ripple {
  id: number;
  left: number;
  top: number;
  size: number;
}

interface RippleProps {
  children: ReactNode;
}

export function Ripple({ children }: RippleProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const addRipple = (e: React.PointerEvent<HTMLSpanElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const id = Date.now() + Math.random();
    setRipples((prev) => [
      ...prev,
      {
        id,
        left: e.clientX - rect.left - size / 2,
        top: e.clientY - rect.top - size / 2,
        size,
      },
    ]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 650);
  };

  return (
    <span className="relative inline-flex" onPointerDown={addRipple}>
      {children}
      <span
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg"
        aria-hidden="true"
      >
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full bg-slate-900/10 dark:bg-white/20"
            style={{
              left: ripple.left,
              top: ripple.top,
              width: ripple.size,
              height: ripple.size,
            }}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          />
        ))}
      </span>
    </span>
  );
}
