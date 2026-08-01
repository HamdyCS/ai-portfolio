import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { FiCalendar, FiExternalLink, FiAward } from "react-icons/fi";
import { certificates } from "../data/certificates";
import type { CertCategory, Certificate } from "../types";
import { CertificateViewerModal } from "../components/certificates/CertificateViewerModal";

type FilterKey = "all" | CertCategory;

const filters: { key: FilterKey; labelKey: string }[] = [
  { key: "all", labelKey: "certificates.filterAll" },
  { key: "Backend", labelKey: "certificates.filterBackend" },
  { key: "Frontend", labelKey: "certificates.filterFrontend" },
  { key: "Fullstack", labelKey: "certificates.filterFullstack" },
  { key: "Software Design", labelKey: "certificates.filterSoftwareDesign" },
  { key: "Fundamentals", labelKey: "certificates.filterFundamentals" },
];

const categoryBadges: Record<CertCategory, string> = {
  Backend:
    "border border-transparent bg-teal-500/90 text-white dark:border-primary/30 dark:bg-primary/20 dark:text-primary",
  Frontend:
    "border border-transparent bg-orange-500/90 text-white dark:border-tertiary/30 dark:bg-tertiary/20 dark:text-tertiary",
  Fullstack:
    "border border-transparent bg-sky-500/90 text-white dark:border-secondary/30 dark:bg-secondary/20 dark:text-secondary",
  "Software Design":
    "border border-transparent bg-violet-500/90 text-white dark:border-violet-500/30 dark:bg-violet-500/20 dark:text-violet-300",
  Fundamentals:
    "border border-transparent bg-slate-500/90 text-white dark:border-slate-400/30 dark:bg-slate-400/20 dark:text-slate-300",
};

const categoryLabelKeys: Record<CertCategory, string> = {
  Backend: "certificates.filterBackend",
  Frontend: "certificates.filterFrontend",
  Fullstack: "certificates.filterFullstack",
  "Software Design": "certificates.filterSoftwareDesign",
  Fundamentals: "certificates.filterFundamentals",
};

const getLocalizedName = (cert: Certificate, lang: string) =>
  lang === "ar" ? cert.courseNameAr : cert.courseName;

const getLocalizedInstructor = (cert: Certificate, lang: string) =>
  lang === "ar" ? cert.instructorAr : cert.instructor;

export function Certificates() {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const filteredCertificates = useMemo(
    () =>
      activeFilter === "all"
        ? certificates
        : certificates.filter((cert) => cert.category === activeFilter),
    [activeFilter],
  );

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:pt-24">
      <div className="mb-16 text-center md:text-start">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl dark:text-text-primary"
        >
          {t("certificates.pageTitle")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-500 md:mx-0 md:text-xl dark:text-text-secondary"
        >
          {t("certificates.pageSubtitle")}
        </motion.p>
      </div>

      <div className="mb-12 flex flex-wrap items-center gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.key;
          return (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActiveFilter(filter.key)}
              className={`cursor-pointer rounded-full px-6 py-2 font-semibold transition-all ${
                isActive
                  ? "bg-primary text-white shadow-sm dark:text-on-primary"
                  : "border border-slate-200 bg-white text-slate-600 shadow-sm hover:bg-slate-50 dark:border-transparent dark:bg-surface-high dark:text-text-secondary dark:shadow-none dark:hover:bg-surface-highest"
              }`}
            >
              {t(filter.labelKey)}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="wait">
          {filteredCertificates.map((cert, index) => {
            const badge = categoryBadges[cert.category];
            return (
              <motion.article
                key={`${cert.id}-${activeFilter}-${index}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="glass-card card-hover group flex h-full flex-col overflow-hidden rounded-xl"
              >
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="relative block h-48 w-full cursor-pointer overflow-hidden text-start"
                  aria-haspopup="dialog"
                  aria-label={getLocalizedName(cert, i18n.language)}
                >
                  <img
                    src={cert.image}
                    alt={getLocalizedName(cert, i18n.language)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute end-4 top-4 rounded-full px-3 py-1 backdrop-blur-md ${badge}`}
                  >
                    <span className="font-mono text-[11px] font-medium uppercase tracking-wider">
                      {t(categoryLabelKeys[cert.category])}
                    </span>
                  </div>
                </button>

                <div className="flex flex-grow flex-col p-6">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold leading-tight text-slate-900 dark:text-text-primary">
                      {getLocalizedName(cert, i18n.language)}
                    </h3>
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 shrink-0 text-slate-400 transition-colors hover:text-teal-700 dark:text-text-secondary dark:hover:text-primary"
                      aria-label={t("common.openInNew")}
                    >
                      <FiExternalLink className="text-[20px]" />
                    </a>
                  </div>

                  <p className="mb-4 text-sm text-slate-500 dark:text-text-secondary">
                    {t("certificates.instructor")}:{" "}
                    {getLocalizedInstructor(cert, i18n.language)}
                  </p>

                  {cert.dateIssued && (
                    <div className="mb-6 flex items-center gap-1.5 text-xs text-slate-400 dark:text-outline">
                      <FiCalendar className="text-[16px]" />
                      <span>{cert.dateIssued}</span>
                    </div>
                  )}

                  <div className="mt-auto flex gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="flex-1 cursor-pointer rounded-lg border border-slate-200 bg-slate-50 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-slate-100 dark:border-outline-variant/30 dark:bg-surface-highest dark:font-semibold dark:text-primary-light dark:hover:bg-surface-bright"
                    >
                      {t("certificates.viewDetails")}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="cursor-pointer rounded-lg border border-slate-200 bg-slate-50 px-3 text-primary transition-colors hover:bg-slate-100 dark:border-outline-variant/30 dark:bg-surface-highest dark:text-primary-light dark:hover:bg-surface-bright"
                      aria-label={t("certificates.verifiedCredential")}
                    >
                      <FiAward />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>

      <CertificateViewerModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}
