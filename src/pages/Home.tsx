import { HeroSection } from "../components/sections/HeroSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { CertificatesSection } from "../components/sections/CertificatesSection";
import { ContactSection } from "../components/sections/ContactSection";
import { Helmet } from "react-helmet";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Hamdy Khaled Full Stack</title>
        <meta
          name="keywords"
          content="Hamdy Khaled, Full Stack Developer, .NET Developer, ASP.NET Core, C#, React, TypeScript, Tailwind CSS, Web Developer, Software Engineer, Clean Architecture, REST API, Portfolio"
        />
        <meta
          name="description"
          content="Portfolio of Hamdy Khaled, Full Stack .NET Developer specializing in ASP.NET Core, React, TypeScript, REST APIs, Clean Architecture, and high-performance web applications."
        />
      </Helmet>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
    </>
  );
}
