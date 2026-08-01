import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FiAward,
  FiBook,
  FiCode,
  FiBookOpen,
  FiDatabase,
  FiShield,
  FiExternalLink,
  FiArrowRight,
} from "react-icons/fi";
import { certificates } from "../../data/certificates";
import type { Certificate } from "../../types";
import { useMemo } from "react";

const certIcons: Record<string, React.ReactNode> = {
  "csharp-level2": <FiAward className="text-teal-700 dark:text-primary" />,
  "solid-principles": <FiBook className="text-sky-700 dark:text-secondary" />,
  "rest-api": <FiCode className="text-orange-700 dark:text-tertiary" />,
  javascript: <FiBookOpen className="text-teal-700 dark:text-primary" />,
  adonet: <FiDatabase className="text-sky-700 dark:text-secondary" />,
  "tsql-level2": <FiShield className="text-orange-700 dark:text-tertiary" />,
};

const certColors: Record<string, { bg: string; text: string; link: string }> = {
  "csharp-level2": {
    bg: "bg-teal-100 dark:bg-primary/10",
    text: "text-teal-700 dark:text-primary",
    link: "text-teal-700 dark:text-primary",
  },
  "solid-principles": {
    bg: "bg-sky-100 dark:bg-secondary/10",
    text: "text-sky-700 dark:text-secondary",
    link: "text-sky-700 dark:text-secondary",
  },
  "rest-api": {
    bg: "bg-orange-100 dark:bg-tertiary/10",
    text: "text-orange-700 dark:text-tertiary",
    link: "text-orange-700 dark:text-tertiary",
  },
  javascript: {
    bg: "bg-teal-100 dark:bg-primary/10",
    text: "text-teal-700 dark:text-primary",
    link: "text-teal-700 dark:text-primary",
  },
  adonet: {
    bg: "bg-sky-100 dark:bg-secondary/10",
    text: "text-sky-700 dark:text-secondary",
    link: "text-sky-700 dark:text-secondary",
  },
  "tsql-level2": {
    bg: "bg-orange-100 dark:bg-tertiary/10",
    text: "text-orange-700 dark:text-tertiary",
    link: "text-orange-700 dark:text-tertiary",
  },
};

const getLocalizedName = (
  cert: Certificate,
  field: "courseName" | "issuer",
  lang: string,
) => {
  if (lang === "ar") {
    return field === "courseName" ? cert.courseNameAr : cert.issuerAr;
  }
  return field === "courseName" ? cert.courseName : cert.issuer;
};

export function CertificatesSection() {
  const { t, i18n } = useTranslation();

  const featuredCertificates = useMemo(
    () => certificates.filter((cert) => cert.featured),
    [],
  );

  return (
    <section
      id="certificates"
      className="mx-auto max-w-7xl px-6 md:px-0 py-24 transition-all duration-1000 "
    >
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl dark:text-text-primary">
          {t("certificates.title")}
        </h2>
        <p className="mx-auto max-w-2xl text-slate-500 dark:text-text-secondary">
          {t("certificates.subtitle")}
        </p>
      </div>

      <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredCertificates.map((cert, index) => {
          const colors = certColors[cert.id] || {
            bg: "bg-teal-100 dark:bg-primary/10",
            text: "text-teal-700 dark:text-primary",
            link: "text-teal-700 dark:text-primary",
          };
          return (
            <motion.div
              key={cert.id}
              className="cert-card card-hover rounded-xl border border-slate-200 bg-white p-6 dark:border-outline-variant dark:bg-surface"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${colors.bg}`}
              >
                {certIcons[cert.id] || <FiAward className="text-primary" />}
              </div>
              <h4 className="mb-1 text-lg font-bold">
                {getLocalizedName(cert, "courseName", i18n.language)}
              </h4>
              <p className={`mb-1 text-xs ${colors.text}`}>
                {getLocalizedName(cert, "issuer", i18n.language)}
              </p>
              <p className="mb-4 text-xs text-slate-500 dark:text-text-secondary">
                {cert.category}
              </p>
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 text-xs font-medium ${colors.link} hover:underline`}
              >
                {t("certificates.viewCertificate")}{" "}
                <FiExternalLink className="text-[14px]" />
              </a>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <a
          href="#"
          className="flex items-center gap-2 rounded-lg border border-teal-300 bg-teal-50 px-8 py-4 font-bold text-teal-700 transition-all hover:bg-teal-100 dark:border-primary/30 dark:bg-primary/5 dark:text-primary dark:hover:bg-primary/10"
        >
          {t("certificates.viewAll")} <FiArrowRight />
        </a>
      </div>
    </section>
  );
}
