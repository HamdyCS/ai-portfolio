import { motion } from "framer-motion";

export function GlitchNumber() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="nf-glow absolute left-1/2 top-1/2 -z-10 h-52 w-52 rounded-full blur-3xl md:h-80 md:w-80" />
      <div className="nf-float relative">
        <span
          className="nf-glitch block select-none font-mono font-extrabold leading-none tracking-tighter text-slate-900 dark:text-text-primary"
          data-text="404"
          aria-hidden="true"
          style={{ fontSize: "clamp(7rem, 22vw, 15rem)" }}
        >
          404
        </span>
      </div>
    </motion.div>
  );
}
