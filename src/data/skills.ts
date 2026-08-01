import type { Skill } from "../types";

export const skills: Skill[] = [
  // Backend
  {
    id: "aspnet-core",
    name: "ASP.NET Core",
    icon: "SiDotnet",
    category: "backend",
  },
  { id: "csharp", name: "C#", icon: "SiCsharp", category: "backend" },
  {
    id: "ef-core",
    name: "Entity Framework Core",
    icon: "SiEntityframework",
    category: "backend",
  },
  {
    id: "sql-server",
    name: "SQL Server",
    icon: "SiMicrosoftsqlserver",
    category: "backend",
  },
  { id: "redis", name: "Redis", icon: "SiRedis", category: "backend" },
  { id: "rest-api", name: "REST APIs", icon: "SiSwagger", category: "backend" },

  // Frontend
  { id: "react", name: "React", icon: "SiReact", category: "frontend" },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "SiTypescript",
    category: "frontend",
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "SiJavascript",
    category: "frontend",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "SiTailwindcss",
    category: "frontend",
  },
  {
    id: "redux-toolkit",
    name: "Redux Toolkit",
    icon: "SiRedux",
    category: "frontend",
  },
 
  { id: "vite", name: "Vite", icon: "SiVite", category: "frontend" },

  // Tools
  {
    id: "visual-studio",
    name: "Visual Studio",
    icon: "SiVisualstudio",
    category: "tools",
  },
  {
    id: "vscode",
    name: "VS Code",
    icon: "SiVisualstudiocode",
    category: "tools",
  },
  { id: "git", name: "Git", icon: "SiGit", category: "tools" },
  { id: "github", name: "GitHub", icon: "SiGithub", category: "tools" },
  { id: "postman", name: "Postman", icon: "SiPostman", category: "tools" },
  { id: "swagger", name: "Swagger", icon: "SiSwagger", category: "tools" },
  {
    id: "ssms",
    name: "SQL Server Management Studio",
    icon: "SiMicrosoftsqlserver",
    category: "tools",
  },
  {
    id: "redis-insight",
    name: "Redis Insight",
    icon: "SiRedis",
    category: "tools",
  },
];
