import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "../lib/Icon";
import { personalInfo } from "../data/personal";
import DarkLogo from "../assets/DarkLogo.png";
import Container from "../components/layout/Container";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const whatIDoCards = [
  {
    icon: "FiDatabase",
    colorKey: "primary" as const,
    titleKey: "about.cardBackendTitle",
    descKey: "about.cardBackendDesc",
  },
  {
    icon: "FiLayers",
    colorKey: "secondary" as const,
    titleKey: "about.cardFrontendTitle",
    descKey: "about.cardFrontendDesc",
  },
  {
    icon: "FiLayout",
    colorKey: "tertiary" as const,
    titleKey: "about.cardArchitectureTitle",
    descKey: "about.cardArchitectureDesc",
  },
  {
    icon: "FiSettings",
    colorKey: "primaryFixed" as const,
    titleKey: "about.cardDatabaseTitle",
    descKey: "about.cardDatabaseDesc",
  },
];

const colorMap = {
  primary: {
    iconBg: "bg-primary/10",
    iconText: "text-primary",
  },
  secondary: {
    iconBg: "bg-secondary/10",
    iconText: "text-secondary",
  },
  tertiary: {
    iconBg: "bg-tertiary/10",
    iconText: "text-tertiary",
  },
  primaryFixed: {
    iconBg: "bg-primary-light/10",
    iconText: "text-primary-light",
  },
};

export function AboutMe() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <div className="pb-20 pt-16 md:pt-24">
      <Container>
        {/* Hero Section */}
        <section className="grid items-center gap-12 md:grid-cols-2 md:min-h-[60vh]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1 font-mono text-xs tracking-widest text-primary">
              {t("about.badge")}
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl dark:text-text-primary">
              {t("about.greeting")}{" "}
              <span className="text-primary">
                {isAr ? personalInfo.nameAr : personalInfo.name}
              </span>
            </h1>

            <h2 className="text-xl font-bold text-secondary md:text-2xl">
              {isAr ? personalInfo.titleAr : personalInfo.title}
            </h2>

            <p className="max-w-xl text-lg leading-relaxed text-slate-500 dark:text-text-secondary">
              {isAr ? personalInfo.summaryAr : personalInfo.summary}
            </p>

            <div className="flex gap-4 pt-2">
              <Link
                to="/projects"
                className="rounded-lg bg-primary px-8 py-3 font-bold text-on-primary transition-all duration-200 hover:brightness-110 active:scale-95"
              >
                {t("about.viewProjects")}
              </Link>
              <Link
                to="/#contact"
                className="rounded-lg border border-outline-variant px-8 py-3 font-bold text-slate-900 transition-all duration-200 hover:bg-slate-100 dark:text-text-primary dark:hover:bg-surface-highest"
              >
                {t("about.contactMe")}
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-end"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Glow background */}
            <div className="absolute inset-0 scale-150 blur-3xl opacity-60 logo-glow" />

            {/* Animated Logo */}
            <div className="relative z-10 w-full max-w-[300px] animate-float-logo">
              <img
                src={DarkLogo}
                alt={personalInfo.name}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </section>

        {/* What I Do Section */}
        <section className="mt-24">
          <motion.h2
            className="mb-10 text-center text-3xl font-bold text-slate-900 dark:text-text-primary"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("about.whatIDo")}
          </motion.h2>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whatIDoCards.map((card) => {
              const colors = colorMap[card.colorKey];
              return (
                <motion.div
                  key={card.titleKey}
                  variants={fadeInUp}
                  transition={{ duration: 0.4 }}
                  className={`glass-card group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_10px_40px_-10px_rgba(45,212,191,0.25)] dark:hover:border-primary/40 dark:hover:shadow-[0_10px_40px_-10px_rgba(87,241,219,0.2)]`}
                >
                  <div
                    className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 ${colors.iconBg}`}
                  >
                    <Icon name={card.icon} className={colors.iconText} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-text-primary">
                    {t(card.titleKey)}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500 dark:text-text-secondary">
                    {t(card.descKey)}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="mt-24 transition-all duration-300 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_10px_40px_-10px_rgba(45,212,191,0.25)] dark:hover:border-primary/40 dark:hover:shadow-[0_10px_40px_-10px_rgba(87,241,219,0.2)]">
          <motion.div
            className="glass-card relative overflow-hidden rounded-3xl p-10 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at center, #57f1db 0%, transparent 70%)",
              }}
            />
            <h2 className="relative z-10 mb-6 text-3xl font-bold text-slate-900 md:text-4xl dark:text-text-primary">
              {t("about.ctaHeading")}
            </h2>
            <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/projects"
                className="rounded-xl bg-primary px-8 py-3 text-lg font-bold text-on-primary shadow-[0_0_20px_rgba(87,241,219,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(87,241,219,0.6)]"
              >
                {t("about.viewProjects")}
              </Link>
              <Link
                to="/#contact"
                className="rounded-xl border border-outline-variant px-8 py-3 text-lg font-bold text-slate-900 transition-all duration-200 hover:bg-slate-100 dark:text-text-primary dark:hover:bg-surface-highest"
              >
                {t("about.contactMe")}
              </Link>
            </div>
          </motion.div>
        </section>
      </Container>
    </div>
  );
}
