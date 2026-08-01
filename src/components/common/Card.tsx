import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <motion.div
      className={`rounded-lg border border-[#273647] bg-[#122131] p-6 ${className}`}
      whileHover={hover ? { y: -4, borderColor: "#2dd4bf" } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
