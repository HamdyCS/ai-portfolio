import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "../../lib/Icon";
import { certificates } from "../../data/certificates";
import type { Certificate } from "../../types";
import { useMemo, useState } from "react";
import { CertificateViewerModal } from "../certificates/CertificateViewerModal";
import Container from "../layout/Container";

const certIcons: Record<string, React.ReactNode> = {
  "csharp-level2": (
    <Icon name="FiAward" className="text-primary-ink" />
  ),
  "solid-principles": (
    <Icon name="FiBook" className="text-secondary-ink" />
  ),
  "rest-api": (
    <Icon name="FiCode" className="text-tertiary-ink" />
  ),
  javascript: (
    <Icon name="FiBookOpen" className="text-primary-ink" />
  ),
  adonet: (
    <Icon name="FiDatabase" className="text-secondary-ink" />
  ),
  "tsql-level2": (
    <Icon name="FiShield" className="text-tertiary-ink" />
  ),
};

const certColors: Record<string, { bg: string; text: string; link: string }> = {
  "csharp-level2": {
    bg: "bg-brand-soft-hover",
    text: "text-primary-ink",
    link: "text-primary-ink",
  },
  "solid-principles": {
    bg: "bg-secondary-soft-hover",
    text: "text-secondary-ink",
    link: "text-secondary-ink",
  },
  "rest-api": {
    bg: "bg-tertiary-soft",
    text: "text-tertiary-ink",
    link: "text-tertiary-ink",
  },
  javascript: {
    bg: "bg-brand-soft-hover",
    text: "text-primary-ink",
    link: "text-primary-ink",
  },
  adonet: {
    bg: "bg-secondary-soft-hover",
    text: "text-secondary-ink",
    link: "text-secondary-ink",
  },
  "tsql-level2": {
    bg: "bg-tertiary-soft",
    text: "text-tertiary-ink",
    link: "text-tertiary-ink",
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
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const featuredCertificates = useMemo(
    () => certificates.filter((cert) => cert.featured),
    [],
  );

  return (
    <section id="certificates" className="transition-all duration-1000 ">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            {t("certificates.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {t("certificates.subtitle")}
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCertificates.map((cert, index) => {
            const colors = certColors[cert.id] || {
              bg: "bg-brand-soft-hover",
              text: "text-primary-ink",
              link: "text-primary-ink",
            };
            return (
              <motion.div
                key={cert.id}
                className="cert-card card-hover cursor-pointer rounded-xl border border-border bg-card p-6"
                role="button"
                tabIndex={0}
                onClick={() => setSelectedCert(cert)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedCert(cert);
                  }
                }}
                aria-haspopup="dialog"
                aria-label={getLocalizedName(cert, "courseName", i18n.language)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${colors.bg}`}
                >
                  {certIcons[cert.id] || (
                    <Icon name="FiAward" className="text-primary" />
                  )}
                </div>
                <h4 className="mb-1 text-lg font-bold">
                  {getLocalizedName(cert, "courseName", i18n.language)}
                </h4>
                <p className={`mb-1 text-xs ${colors.text}`}>
                  {getLocalizedName(cert, "issuer", i18n.language)}
                </p>
                <p className="mb-4 text-xs text-muted-foreground">
                  {cert.category}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className={`flex cursor-pointer items-center gap-1 text-xs font-medium ${colors.link} hover:underline`}
                >
                  {t("certificates.viewDetails")}
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link
            to="/certificates"
            className="flex items-center gap-2 rounded-lg border border-teal-edge bg-brand-soft-dim px-8 py-4 font-bold text-primary-ink transition-all hover:bg-brand-soft-hover"
          >
            {t("certificates.viewAll")} <Icon name="FiArrowRight" />
          </Link>
        </div>

        <CertificateViewerModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      </Container>
    </section>
  );
}
