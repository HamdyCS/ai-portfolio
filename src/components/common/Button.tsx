import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-lg font-semibold transition-colors";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-6 py-3 text-sm",
  };

  const variants = {
    primary: "bg-[#2dd4bf] text-[#051424] hover:bg-[#3cddc7]",
    secondary:
      "border border-teal-600 text-teal-700 hover:bg-teal-50 dark:border-[#2dd4bf] dark:text-[#2dd4bf] dark:hover:bg-[rgba(45,212,191,0.1)]",
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
