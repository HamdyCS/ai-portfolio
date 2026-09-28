import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Icon } from "../lib/Icon";
import { personalInfo } from "../data/personal";
import Container from "../components/layout/Container";
import { Helmet } from "react-helmet";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

interface ContactCardConfig {
  icon: string;
  titleKey: string;
  descKey: string;
  linkKey: string;
  href: string;
  iconColor: string;
  linkColor: string;
  fullWidth: boolean;
}

const contactCards: ContactCardConfig[] = [
  {
    icon: "FiGithub",
    titleKey: "contact.gitHubProjects",
    descKey: "contact.gitHubProjectsDesc",
    linkKey: "contact.viewGitHub",
    href: personalInfo.github,
    iconColor: "text-foreground",
    linkColor: "text-primary-ink group-hover:underline",
    fullWidth: false,
  },
  {
    icon: "FiLinkedin",
    titleKey: "contact.professionalNetwork",
    descKey: "contact.professionalNetworkDesc",
    linkKey: "contact.connectLinkedIn",
    href: personalInfo.linkedin,
    iconColor: "text-secondary-ink",
    linkColor: "text-secondary-ink group-hover:underline",
    fullWidth: false,
  },
  {
    icon: "FiMail",
    titleKey: "contact.getInTouch",
    descKey: "contact.getInTouchDesc",
    linkKey: "contact.sendEmail",
    href: `mailto:${personalInfo.email}`,
    iconColor: "text-tertiary-ink",
    linkColor:
      "text-tertiary-hot group-hover:underline",
    fullWidth: true,
  },
];

function ContactTiltCard({ config }: { config: ContactCardConfig }) {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Contact | Hamdy Khaled</title>
        <meta
          name="description"
          content="Get in touch with Hamdy Khaled for freelance opportunities, collaborations, or full-time Full Stack .NET development roles."
        />
      </Helmet>
      <motion.div
        variants={fadeInUp}
        transition={{ duration: 0.4 }}
        className={`glass-card group flex h-full flex-col rounded-xl p-8 transition duration-200 ease-out hover:shadow-glow ${config.fullWidth ? "md:col-span-2" : ""}`}
      >
        <div
          className={`mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-well-edge bg-accent ${config.iconColor}`}
        >
          <Icon name={config.icon} className="text-lg" />
        </div>
        <h3 className="mb-4 text-xl font-bold text-foreground">
          {t(config.titleKey)}
        </h3>
        <p className="mb-8 flex-grow text-sm leading-relaxed text-muted-foreground">
          {t(config.descKey)}
        </p>
        <a
          href={config.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3 ${config.linkColor}`}
        >
          {t(config.linkKey)}
          <Icon name="FiArrowRight" className="text-sm" />
        </a>
      </motion.div>
    </div>
  );
}

export function Contact() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <div className="relative pb-24 pt-16 md:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[-10%] top-[-10%] h-[50%] w-[50%] rounded-full bg-blob-teal blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-blob-sky blur-[120px]" />
      </div>

      <Container>
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary-ink">
                {t("contact.title")}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl"
            >
              {t("contact.heading1")}{" "}
              <span className="text-primary-ink">
                {t("contact.heading2")}
              </span>{" "}
              {t("contact.heading3")}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-lg text-lg leading-relaxed text-muted-foreground"
            >
              {t("contact.pageDescription")}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 pt-4 "
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 rounded-lg bg-primary px-8 py-4 font-bold text-on-primary shadow-lg shadow-primary/10 transition-transform duration-200 hover:scale-[1.02] active:scale-95 w-45"
              >
                <Icon name="FiMail" className="text-sm" />
                {t("contact.contactMe")}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-hairline bg-inset px-8 py-4 font-bold text-foreground transition-all duration-200 hover:bg-chip w-45"
              >
                <Icon name="FiLink" className="text-sm" />
                {t("contact.linkedin")}
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 flex flex-col gap-8 border-t border-hairline pt-12"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-hairline bg-muted text-primary-ink">
                  <Icon name="FiMapPin" className="text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">
                    {t("contact.basedIn", {
                      location: isAr
                        ? personalInfo.locationAr
                        : personalInfo.location,
                    })}
                  </h3>
                  <p className="text-sm text-muted-foreground"></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-hairline bg-muted text-secondary-ink">
                  <Icon name="FiStar" className="text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">
                    {t("contact.availableFor")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("contact.availableForRoles")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          <motion.section
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {contactCards.map((card) => (
              <ContactTiltCard key={card.titleKey} config={card} />
            ))}
          </motion.section>
        </div>
      </Container>
    </div>
  );
}
