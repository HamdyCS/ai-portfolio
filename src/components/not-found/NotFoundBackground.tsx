import { motion, useReducedMotion } from "framer-motion";

const particles = [
  { left: "8%", top: "20%", size: 3, delay: "0s", duration: "8s" },
  { left: "18%", top: "64%", size: 2, delay: "1.2s", duration: "10s" },
  { left: "28%", top: "34%", size: 2, delay: "2.4s", duration: "7.5s" },
  { left: "45%", top: "16%", size: 3, delay: "0.6s", duration: "9.5s" },
  { left: "55%", top: "72%", size: 2, delay: "3.1s", duration: "8.5s" },
  { left: "68%", top: "26%", size: 2, delay: "1.8s", duration: "11s" },
  { left: "78%", top: "58%", size: 3, delay: "0.3s", duration: "9s" },
  { left: "88%", top: "38%", size: 2, delay: "2.7s", duration: "7s" },
  { left: "34%", top: "80%", size: 2, delay: "1.5s", duration: "10.5s" },
  { left: "62%", top: "10%", size: 2, delay: "3.6s", duration: "8s" },
];

export function NotFoundBackground() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <motion.div
        className="hero-gradient absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduce ? 0 : 0.8 }}
      />
      <motion.div
        className="nf-parallax absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduce ? 0 : 0.2, duration: 1 }}
      >
        <div className="nf-grid absolute inset-0" />
        <div
          className="nf-data-line"
          style={{ top: "22%", left: "12%", width: "40%" }}
        />
        <div
          className="nf-data-line"
          style={{ top: "72%", left: "48%", width: "42%" }}
        />
        {particles.map((particle, index) => (
          <span
            key={index}
            className="nf-particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </motion.div>
      <div className="nf-scanlines absolute inset-0" />
      <div className="nf-vignette absolute inset-0" />
    </div>
  );
}
