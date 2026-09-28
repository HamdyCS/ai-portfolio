import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Icon } from "../../lib/Icon";
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

  const localized = (
    cert: Certificate,
    field: "courseName" | "issuer" | "instructor",
  ) => {
    const isAr = i18n.language === "ar";

    if (isAr) {
      if (field === "courseName") return cert.courseNameAr;
      if (field === "issuer") return cert.issuerAr;
      if (field === "instructor") return cert.instructorAr;
    } else {
      if (field === "courseName") return cert.courseName;
      if (field === "issuer") return cert.issuer;
      if (field === "instructor") return cert.instructor;
    }
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-overlay p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={localized(certificate, "courseName")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-[1.5rem] viewer-panel shadow-2xl md:flex-row"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-[110] rounded-full p-2 text-subtle transition-colors hover:text-primary-ink md:hidden"
              onClick={onClose}
              aria-label={t("certificates.closeViewer")}
            >
              <Icon name="MdOutlineClose" className="text-2xl" />
            </button>

            <div className="flex w-full items-center justify-center bg-viewer-well p-6 md:w-3/5 md:p-8">
              <div className="group relative w-full cursor-zoom-in overflow-hidden rounded-sm border border-viewer-edge shadow-viewer">
                <img
                  src={certificate.image}
                  alt={localized(certificate, "courseName")}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[var(--t-sheen-from)] via-transparent to-[var(--t-sheen-to)] opacity-50" />
              </div>
            </div>

            <div className="flex w-full flex-col overflow-y-auto border-t border-hairline-soft bg-viewer-side p-8 md:w-2/5 md:border-l md:border-t-0 md:p-10">
              <div className="mb-4 hidden justify-end md:flex">
                <button
                  type="button"
                  className="rounded-full p-2 text-subtle transition-colors hover:bg-inset-hover hover:text-primary-ink cursor-pointer"
                  onClick={onClose}
                  aria-label={t("certificates.closeViewer")}
                >
                  <Icon name="MdOutlineClose" className="text-2xl" />
                </button>
              </div>

              <div className="flex-grow space-y-8">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-primary-ink">
                    <Icon name="MdVerified" className="text-sm" />
                    <span className="font-mono text-xs label-strong uppercase tracking-widest">
                      {t("certificates.verifiedCredential")}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold leading-tight text-foreground">
                    {localized(certificate, "courseName")}
                  </h2>
                  {description && (
                    <p className="mt-2 text-base text-muted-foreground">
                      {description}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-cell-bg p-2 text-cell-teal">
                      <Icon name="MdOutlinePerson" className="text-2xl" />
                    </div>
                    <div>
                      <p className="text-xs label-strong uppercase tracking-wider text-muted-foreground">
                        {t("certificates.instructor")}
                      </p>
                      <p className="text-base font-semibold text-foreground">
                        {localized(certificate, "instructor")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-cell-bg p-2 text-cell-sky">
                      <Icon name="CgWebsite" className="text-2xl" />
                    </div>
                    <div>
                      <p className="text-xs label-strong uppercase tracking-wider text-muted-foreground">
                        {t("certificates.issuer")}
                      </p>
                      <p className="text-base font-semibold text-foreground">
                        {localized(certificate, "issuer")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-cell-bg p-2 text-cell-sky">
                      <Icon name="MdOutlineCategory" className="text-2xl" />
                    </div>
                    <div>
                      <p className="text-xs label-strong uppercase tracking-wider text-muted-foreground">
                        {t("certificates.category")}
                      </p>
                      <p className="text-base font-semibold text-foreground">
                        {certificate.category}
                      </p>
                    </div>
                  </div>

                  {certificate.dateIssued && (
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-cell-bg p-2 text-cell-orange">
                        <Icon name="MdOutlineCalendarToday" className="text-2xl" />
                      </div>
                      <div>
                        <p className="text-xs label-strong uppercase tracking-wider text-muted-foreground">
                          {t("certificates.issuedDate")}
                        </p>
                        <p className="text-base font-semibold text-foreground">
                          {certificate.dateIssued}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2 rounded-lg border border-hairline-soft bg-quiet p-4">
                  <p className="text-xs label-strong uppercase tracking-wider text-muted-foreground label-mono">
                    {t("certificates.verificationId")}
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    <code className="font-mono text-lg tracking-wider text-primary-ink">
                      {certificate.verifiyId}
                    </code>
                    <button
                      type="button"
                      className="text-subtle transition-colors hover:text-primary-ink"
                      onClick={handleCopy}
                      aria-label={t("certificates.copyId")}
                    >
                      {copied ? (
                        <Icon name="MdOutlineCheck" className="text-2xl" />
                      ) : (
                        <Icon name="MdOutlineContentCopy" className="text-2xl" />
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
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 font-bold text-on-vivid shadow-cta transition-all hover:bg-cta-hover active:scale-95"
                >
                  <Icon name="MdOutlineSecurity" className="text-2xl" />
                  {t("certificates.verifyCertificate")}
                </a>
                <button
                  type="button"
                  className="w-full rounded-lg border border-border px-6 py-4 font-medium text-action-ink transition-all hover:bg-inset-hover cursor-pointer"
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
