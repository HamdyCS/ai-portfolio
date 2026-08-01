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
  "csharp-level2": <FiAward className="text-primary" />,
  "solid-principles": <FiBook className="text-secondary" />,
  "rest-api": <FiCode className="text-tertiary" />,
  javascript: <FiBookOpen className="text-primary" />,
  adonet: <FiDatabase className="text-secondary" />,
  "tsql-level2": <FiShield className="text-tertiary" />,
};

const certColors: Record<string, { bg: string; text: string; link: string }> = {
  "csharp-level2": {
    bg: "bg-primary/10",
    text: "text-primary",
    link: "text-primary",
  },
  "solid-principles": {
    bg: "bg-secondary/10",
    text: "text-secondary",
    link: "text-secondary",
  },
  "rest-api": {
    bg: "bg-tertiary/10",
    text: "text-tertiary",
    link: "text-tertiary",
  },
  javascript: {
    bg: "bg-primary/10",
    text: "text-primary",
    link: "text-primary",
  },
  adonet: {
    bg: "bg-secondary/10",
    text: "text-secondary",
    link: "text-secondary",
  },
  "tsql-level2": {
    bg: "bg-tertiary/10",
    text: "text-tertiary",
    link: "text-tertiary",
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
        <h2 className="mb-4 text-2xl font-bold text-text-primary md:text-3xl">
          {t("certificates.title")}
        </h2>
        <p className="mx-auto max-w-2xl text-text-secondary">
          {t("certificates.subtitle")}
        </p>
      </div>

      <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredCertificates.map((cert, index) => {
          const colors = certColors[cert.id] || {
            bg: "bg-primary/10",
            text: "text-primary",
            link: "text-primary",
          };
          return (
            <motion.div
              key={cert.id}
              className="cert-card card-hover rounded-xl border border-outline-variant bg-surface p-6"
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
              <p className="mb-4 text-xs text-text-secondary">
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
          className="flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-8 py-4 font-bold text-primary transition-all hover:bg-primary/10"
        >
          {t("certificates.viewAll")} <FiArrowRight />
        </a>
      </div>
    </section>
  );
}
