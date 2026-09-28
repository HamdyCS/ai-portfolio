import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Icon } from "../../lib/Icon";
import { iconContainerClassName, socialIconClassName } from "../../lib/icons";
import { personalInfo } from "../../data/personal";
import Container from "../layout/Container";

export function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 transition-all duration-1000 ">
      <Container>
        <motion.div
          className="glass-card overflow-hidden rounded-2xl border border-glassline shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col justify-between bg-well p-8 md:p-12 lg:w-2/5 ">
              <div>
                <div className="mb-8 inline-flex items-center rounded-full bg-brand-soft-hover px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-primary-ink">
                  {t("contact.title")}
                </div>
                <h2 className="mb-6 text-4xl font-extrabold tracking-tight leading-tight text-foreground md:text-5xl">
                  {t("contact.heading1")} <br />
                  <span className="text-primary-ink">
                    {t("contact.heading2")}
                  </span>{" "}
                  <br />
                  {t("contact.heading3")}
                </h2>
                <p className="mb-12 text-lg leading-relaxed text-muted-foreground">
                  {t("contact.description")}
                </p>
                <div className="mb-12 flex flex-wrap gap-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-on-primary transition-all duration-200 hover:brightness-110 active:scale-95"
                  >
                    <Icon name="FiMail" className="text-sm" />{" "}
                    {t("contact.contactMe")}
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-bold text-foreground transition-all hover:bg-accent"
                  >
                    <Icon name="FiLinkedin" className="text-sm" /> LinkedIn
                  </a>
                </div>
              </div>

              <div className="space-y-6 border-t border-hairline pt-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft-hover">
                    <Icon
                      name="FiMapPin"
                      className="text-primary-ink"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">
                      {t("contact.basedIn", {
                        location: personalInfo.location,
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-soft-hover">
                    <Icon
                      name="FiStar"
                      className="text-secondary-ink"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">
                      {t("contact.availableFor")}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {t("contact.availableForRoles")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-8 md:p-12 lg:w-3/5">
              <div className="grid h-full grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="glass-card group flex flex-col rounded-xl border border-glassline p-6 transition-all hover:border-teal-edge-hover card-hover">
                  <div className={`mb-4 ${iconContainerClassName}`}>
                    <Icon
                      name="FiGithub"
                      className={`${socialIconClassName} text-foreground`}
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {t("contact.gitHubProjects")}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {t("contact.gitHubProjectsDesc")}
                  </p>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-primary-ink group-hover:underline"
                  >
                    {t("contact.viewGitHub")}{" "}
                    <Icon name="FiArrowRight" className="text-sm" />
                  </a>
                </div>

                <div className="glass-card group flex flex-col rounded-xl border border-glassline p-6 transition-all hover:border-sky-edge-hover card-hover">
                  <div className={`mb-4 ${iconContainerClassName}`}>
                    <Icon
                      name="FiLinkedin"
                      className={`${socialIconClassName} text-secondary-ink`}
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {t("contact.professionalNetwork")}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {t("contact.professionalNetworkDesc")}
                  </p>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-secondary-ink group-hover:underline"
                  >
                    {t("contact.connectLinkedIn")}{" "}
                    <Icon name="FiArrowRight" className="text-sm" />
                  </a>
                </div>

                <div className="glass-card group flex flex-col rounded-xl border border-glassline p-6 transition-all hover:border-orange-edge-hover card-hover sm:col-span-2">
                  <div className={`mb-4 ${iconContainerClassName}`}>
                    <Icon
                      name="FiMail"
                      className="text-lg text-secondary-ink"
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {t("contact.getInTouch")}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {t("contact.getInTouchDesc")}
                  </p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-2 text-sm font-bold text-tertiary-ink group-hover:underline"
                  >
                    {t("contact.sendEmail")}{" "}
                    <Icon name="FiArrowRight" className="text-sm" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
