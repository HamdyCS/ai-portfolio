import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  MdVerified,
  MdOutlinePerson,
  MdOutlineCategory,
  MdOutlineCalendarToday,
  MdOutlineContentCopy,
  MdOutlineCheck,
  MdOutlineSecurity,
  MdOutlineClose,
} from "react-icons/md";
import type { Certificate } from "../../types";

interface CertificateViewerModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export function CertificateViewerModal({
  certificate,
  onClose,
}: CertificateViewerModalProps) {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false);

  const localized = (cert: Certificate, field: "courseName" | "issuer") => {
    const isAr = i18n.language === "ar";
    return isAr
      ? field === "courseName"
        ? cert.courseNameAr
        : cert.issuerAr
      : field === "courseName"
        ? cert.courseName
        : cert.issuer;
  };

  useEffect(() => {
    if (!certificate) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [certificate, onClose]);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    if (!certificate) return;
    try {
      await navigator.clipboard.writeText(certificate.verifiyId);
      setCopied(true);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = certificate.verifiyId;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
    }
  };

  const description = certificate
    ? i18n.language === "ar"
      ? certificate.descriptionAr
      : certificate.description
    : undefined;

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/20 p-4 backdrop-blur-sm md:p-8 dark:bg-surface-container-lowest/60"
          role="dialog"
          aria-modal="true"
          aria-label={localized(certificate, "courseName")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-2xl md:flex-row dark:border-primary/10 dark:bg-surface/70 dark:backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-[110] rounded-full p-2 text-slate-400 transition-colors hover:text-teal-600 md:hidden dark:text-text-secondary dark:hover:text-primary"
              onClick={onClose}
              aria-label={t("certificates.closeViewer")}
            >
              <MdOutlineClose className="text-2xl" />
            </button>

            <div className="flex w-full items-center justify-center bg-slate-50 p-6 md:w-3/5 md:p-8 dark:bg-black/40">
              <div className="group relative w-full cursor-zoom-in overflow-hidden rounded-sm border border-slate-200 shadow-lg dark:border-outline-variant/50 dark:shadow-2xl">
                <img
                  src={certificate.image}
                  alt={localized(certificate, "courseName")}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-teal-400/5 via-transparent to-teal-400/5 opacity-50 dark:from-primary/10 dark:to-secondary/5" />
              </div>
            </div>

            <div className="flex w-full flex-col overflow-y-auto border-t border-slate-100 bg-white p-8 md:w-2/5 md:border-l md:border-t-0 md:p-10 dark:border-outline-variant/30 dark:bg-surface-container-lowest/40">
              <div className="mb-4 hidden justify-end md:flex">
                <button
                  type="button"
                  className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-50 hover:text-teal-600 dark:text-text-secondary dark:hover:bg-surface-highest  dark:hover:text-primary cursor-pointer"
                  onClick={onClose}
                  aria-label={t("certificates.closeViewer")}
                >
                  <MdOutlineClose className="text-2xl" />
                </button>
              </div>

              <div className="flex-grow space-y-8">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-teal-600 dark:text-primary">
                    <MdVerified className="text-sm" />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest dark:font-medium">
                      {t("certificates.verifiedCredential")}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold leading-tight text-slate-900 dark:text-text-primary">
                    {localized(certificate, "courseName")}
                  </h2>
                  {description && (
                    <p className="mt-2 text-base text-slate-600 dark:text-text-secondary">
                      {description}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-slate-50 p-2 text-slate-600 dark:bg-surface-high dark:text-primary">
                      <MdOutlinePerson className="text-2xl" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:font-medium dark:text-text-secondary">
                        {t("certificates.instructor")}
                      </p>
                      <p className="text-base font-semibold text-slate-900 dark:text-text-primary">
                        {localized(certificate, "issuer")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-slate-50 p-2 text-slate-600 dark:bg-surface-high dark:text-secondary">
                      <MdOutlineCategory className="text-2xl" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:font-medium dark:text-text-secondary">
                        {t("certificates.category")}
                      </p>
                      <p className="text-base font-semibold text-slate-900 dark:text-text-primary">
                        {certificate.category}
                      </p>
                    </div>
                  </div>

                  {certificate.dateIssued && (
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-slate-50 p-2 text-slate-600 dark:bg-surface-high dark:text-tertiary">
                        <MdOutlineCalendarToday className="text-2xl" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:font-medium dark:text-text-secondary">
                          {t("certificates.issuedDate")}
                        </p>
                        <p className="text-base font-semibold text-slate-900 dark:text-text-primary">
                          {certificate.dateIssued}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2 rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-outline-variant/20 dark:bg-surface">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:font-mono dark:font-medium dark:text-text-secondary">
                    {t("certificates.verificationId")}
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    <code className="font-mono text-lg tracking-wider text-teal-600 dark:text-primary">
                      {certificate.verifiyId}
                    </code>
                    <button
                      type="button"
                      className="text-slate-400 transition-colors hover:text-teal-600 dark:text-text-secondary dark:hover:text-primary"
                      onClick={handleCopy}
                      aria-label={t("certificates.copyId")}
                    >
                      {copied ? (
                        <MdOutlineCheck className="text-2xl" />
                      ) : (
                        <MdOutlineContentCopy className="text-2xl" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3">
                <a
                  href={certificate.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#2dd4bf] px-6 py-4 font-bold text-white shadow-lg shadow-teal-500/20 transition-all hover:bg-teal-500 active:scale-95 dark:text-on-primary dark:shadow-[0_0_20px_rgba(87,241,219,0.3)] dark:hover:bg-primary-light"
                >
                  <MdOutlineSecurity className="text-2xl" />
                  {t("certificates.verifyCertificate")}
                </a>
                <button
                  type="button"
                  className="w-full rounded-lg border border-slate-200 px-6 py-4 font-medium text-slate-600 transition-all hover:bg-slate-50 dark:border-outline-variant dark:text-text-primary  dark:hover:bg-surface-highest cursor-pointer"
                  onClick={onClose}
                >
                  {t("certificates.closeViewer")}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
