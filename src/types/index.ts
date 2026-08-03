export type SkillCategory = "backend" | "frontend" | "tools";
export type ProjectCategory = "all" | "fullstack" | "backend" | "frontend";
export type LanguageDirection = "ltr" | "rtl";
export type ProjectFilterType = "all" | "fullstack" | "backend" | "frontend";
export type CertCategory =
  | "Backend"
  | "Frontend"
  | "Fullstack"
  | "Software Design"
  | "Fundamentals";

export interface PersonalInfo {
  name: string;
  nameAr: string;
  title: string;
  titleAr: string;
  summary: string;
  summaryAr: string;
  // profileImage: string;
  email: string;
  linkedin: string;
  github: string;
  whatsapp: string;
  location: string;
  locationAr: string;
  yearsOfExperience: number;
  projectCount: number;
  specializations: string[];
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: SkillCategory;
}

export interface Project {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export interface Certificate {
  id: string;
  courseName: string;
  courseNameAr: string;
  description?: string;
  descriptionAr?: string;
  instructor: string;
  instructorAr: string;
  issuer: string;
  issuerAr: string;
  category: CertCategory;
  verificationUrl: string;
  dateIssued: string;
  image?: string;
  featured: boolean;
  verifiyId: string;
}

export interface NavigationItem {
  id: string;
  labelKey: string;
  href: string;
  icon?: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
  label: string;
}
