import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
}

export function Magnetic({ children, strength = 5 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useSpring(0, { stiffness: 180, damping: 14, mass: 0.1 });
  const y = useSpring(0, { stiffness: 180, damping: 14, mass: 0.1 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || reduce) return;
    const rect = el.getBoundingClientRect();
    x.set(((e.clientX - rect.left - rect.width / 2) / rect.width) * strength);
    y.set(((e.clientY - rect.top - rect.height / 2) / rect.height) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
