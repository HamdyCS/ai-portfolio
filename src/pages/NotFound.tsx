import { useCallback, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "../components/common/Button";
import { GlitchNumber } from "../components/not-found/GlitchNumber";
import { NotFoundBackground } from "../components/not-found/NotFoundBackground";
import { DiagnosticCard } from "../components/not-found/DiagnosticCard";
import { Magnetic } from "../components/not-found/Magnetic";
import { Ripple } from "../components/not-found/Ripple";
import { AutoRecovery } from "../components/not-found/AutoRecovery";
import "../components/not-found/not-found.css";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const statusLineKeys = ["route", "status", "server", "uptime"] as const;

export function NotFound() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef({ px: 0, py: 0, cx: 0, cy: 0 });

  useEffect(() => {
    return () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const el = sectionRef.current;
      if (!el || reduce) return;
      const rect = el.getBoundingClientRect();
      mouseRef.current = {
        px: ((e.clientX - rect.left) / rect.width - 0.5) * 60,
        py: ((e.clientY - rect.top) / rect.height - 0.5) * 60,
        cx: e.clientX - rect.left,
        cy: e.clientY - rect.top,
      };
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const { px, py, cx, cy } = mouseRef.current;
        el.style.setProperty("--nf-px", `${px.toFixed(2)}px`);
        el.style.setProperty("--nf-py", `${py.toFixed(2)}px`);
        el.style.setProperty("--nf-cx", `${cx.toFixed(2)}px`);
        el.style.setProperty("--nf-cy", `${cy.toFixed(2)}px`);
      });
    },
    [reduce],
  );

  const handleRedirect = useCallback(() => {
    document.documentElement.style.scrollBehavior = "auto";
    navigate("/");
    window.setTimeout(() => {
      document.documentElement.style.scrollBehavior = "";
    }, 600);
  }, [navigate]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="nf-section relative flex min-h-[calc(100vh-5rem)] flex-col overflow-hidden"
    >
      <div className="nf-cursor-glow" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 pb-16 pt-8 text-center md:px-12">
        <GlitchNumber />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 0.7, duration: 0.6, ease: EASE }}
          className="mt-10 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-text-primary"
        >
          {t("notFound.title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 0.82, duration: 0.6, ease: EASE }}
          className="mt-4 max-w-xl text-base leading-relaxed text-slate-500 md:text-lg dark:text-text-secondary"
        >
          {t("notFound.description")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduce ? 0 : 0.92, duration: 0.6 }}
          className="mt-3 text-sm font-semibold text-teal-700 dark:text-primary"
        >
          {t("notFound.recoveryLine")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 1.05, duration: 0.6, ease: EASE }}
          className="mt-12 grid w-full grid-cols-1 gap-4 text-start sm:grid-cols-2"
        >
          <DiagnosticCard
            title={t("notFound.requestLabel")}
            value={t("notFound.requestPath")}
            rows={[
              {
                label: t("notFound.statusLabel"),
                value: t("notFound.statusValue"),
              },
              {
                label: t("notFound.latencyLabel"),
                value: t("notFound.latencyValue"),
              },
            ]}
            delay={reduce ? 0 : 1.05}
          />
          <DiagnosticCard
            title={t("notFound.systemLabel")}
            value={t("notFound.runtimeValue")}
            rows={[
              {
                label: t("notFound.recoveryLabel"),
                value: t("notFound.recoveryValue"),
              },
              {
                label: t("notFound.suggestionLabel"),
                value: t("notFound.suggestionValue"),
              },
            ]}
            delay={reduce ? 0 : 1.2}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 1.4, duration: 0.6, ease: EASE }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic>
            <Ripple>
              <Button
                onClick={handleRedirect}
                className="shadow-[0_8px_24px_-10px_rgba(45,212,191,0.55)] hover:shadow-[0_14px_34px_-10px_rgba(45,212,191,0.65)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {t("notFound.returnPortfolio")}
              </Button>
            </Ripple>
          </Magnetic>
          <Magnetic>
            <Ripple>
              <Button
                variant="secondary"
                onClick={() => navigate("/projects")}
                className="hover:shadow-[0_12px_28px_-12px_rgba(45,212,191,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {t("notFound.viewProjects")}
              </Button>
            </Ripple>
          </Magnetic>
          <Link
            to="/contact"
            className="rounded-md px-2 text-sm font-semibold text-slate-600 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-teal-700 hover:decoration-teal-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:text-text-secondary dark:decoration-outline-variant dark:hover:text-primary dark:hover:decoration-primary"
          >
            {t("notFound.contactMe")}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduce ? 0 : 1.55, duration: 0.6 }}
        >
          <AutoRecovery onComplete={handleRedirect} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduce ? 0 : 1.7, duration: 0.6 }}
        className="w-full border-t border-slate-200 bg-slate-100 py-5 dark:border-outline-variant dark:bg-surface-container-lowest"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 md:justify-between">
          {statusLineKeys.map((key) => (
            <span
              key={key}
              className="font-mono text-[11px] tracking-wider text-slate-500 dark:text-text-secondary"
            >
              {t(`notFound.statusLine.${key}`)}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
