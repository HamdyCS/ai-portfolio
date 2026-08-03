import type { Project } from "../types";
import ecommerce from "../assets/projects/e-commerce.png";
import elzeroTempleteOne from "../assets/projects/elzero-templete-one.png";
import graphberryTemplete from "../assets/projects/Graphberry-templete.png";
import dashboard from "../assets/projects/dashboard.png";
import mapty from "../assets/projects/mapty.png";
import bankist from "../assets/projects/bankist.png";
import forkify from "../assets/projects/forkify.png";
import basicCartApp from "../assets/projects/basic-cart-app.png";
import socailMediaAppMui from "../assets/projects/socail-media-app-mui.png";
import DVLD from "../assets/projects/DVLD.png";
import ecommerceDashboard from "../assets/projects/e-commerce-nageeb-darwish-project-4.png";
import ecommerceFrontend from "../assets/projects/ecommerce-frontend.png";
import taskManagement from "../assets/projects/task-management.jpg";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce System",
    titleAr: "نظام تجارة إلكترونية",
    description:
      "A full-featured online shopping system with multi-user roles (customers, sellers, delivery agents, and admins). It includes product management, shopping cart, orders, secure payments, shipping, reviews, notifications, and an admin dashboard.",
    descriptionAr:
      "نظام تجارة إلكترونية متكامل يدعم العملاء والبائعين وموظفي التوصيل والمديرين، ويشمل إدارة المنتجات، وسلة المشتريات، والطلبات، والدفع الآمن، والشحن، والتقييمات، والإشعارات، ولوحة تحكم للإدارة.",
    image: ecommerce,
    technologies: [
      "ASP.NET Core",
      "3 tier Architecture",
      "Entity Framework Core",
      "SQL Server",
      "Redis",
      "JWT",
      "AutoMapper",
      "FluentValidation",
      "Serilog",
    ],
    category: "backend",
    repoUrl: "https://github.com/HamdyCS/Amazon_E_Commerce_Project",
    featured: true,
  },
  {
    id: "2",
    title: "Elzero Template One",
    titleAr: "قالب الزيرو الأول",
    description:
      "A clean and responsive static website template built with HTML and CSS to demonstrate modern web design fundamentals.",
    descriptionAr:
      "قالب موقع ثابت بتصميم نظيف ومتجاوب تم تطويره باستخدام HTML وCSS لإظهار أساسيات تصميم الويب الحديثة.",
    image: elzeroTempleteOne,
    technologies: ["HTML", "CSS"],
    category: "frontend",
    liveUrl: "https://hamdycs.github.io/Templete-one-elzero/",
    repoUrl: "https://github.com/HamdyCS/Templete-one-elzero",
    featured: false,
  },
  {
    id: "3",
    title: "Graphberry Template",
    titleAr: "قالب جرافبيري",
    description:
      "A responsive Bootstrap implementation of the Graphberry design, showcasing clean layouts and modern front-end practices.",
    descriptionAr:
      "تنفيذ متجاوب لقالب Graphberry باستخدام Bootstrap لإبراز تصميمات الواجهات الحديثة وأفضل ممارسات تطوير الويب.",
    image: graphberryTemplete,
    technologies: ["HTML", "CSS", "Bootstrap"],
    category: "frontend",
    liveUrl: "https://hamdycs.github.io/Graphberry-templete-bootstrap/",
    repoUrl: "https://github.com/HamdyCS/Graphberry-templete-bootstrap",
    featured: false,
  },
  {
    id: "4",
    title: "Dashboard Template",
    titleAr: "قالب لوحة تحكم",
    description:
      "A modern dashboard template recreated with Tailwind CSS, focusing on responsive layouts and reusable UI components.",
    descriptionAr:
      "قالب لوحة تحكم حديث تم تطويره باستخدام Tailwind CSS مع التركيز على التصميم المتجاوب والمكونات القابلة لإعادة الاستخدام.",
    image: dashboard,
    technologies: ["HTML", "CSS", "Tailwind CSS"],
    category: "frontend",
    liveUrl: "https://hamdycs.github.io/elzero-templete4-by-tailwind/",
    repoUrl: "https://github.com/HamdyCS/elzero-templete4-by-tailwind",
    featured: false,
  },
  {
    id: "5",
    title: "Mapty",
    titleAr: "مابتي",
    description:
      "A workout tracker built with JavaScript and Leaflet.js that allows users to record running and cycling activities on an interactive map.",
    descriptionAr:
      "تطبيق لتتبع التمارين الرياضية باستخدام JavaScript وLeaflet.js يتيح تسجيل أنشطة الجري وركوب الدراجات على خريطة تفاعلية.",
    image: mapty,
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    liveUrl: "https://hamdycs.github.io/mapty/",
    repoUrl: "https://github.com/HamdyCS/mapty",
    featured: false,
  },
  {
    id: "6",
    title: "Bankist",
    titleAr: "بانكست",
    description:
      "A banking application built with JavaScript featuring authentication simulation, transfers, loans, and account management.",
    descriptionAr:
      "تطبيق مصرفي مبني باستخدام JavaScript يحاكي تسجيل الدخول والتحويلات والقروض وإدارة الحسابات.",
    image: bankist,
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    liveUrl: "https://hamdycs.github.io/Bankist",
    repoUrl: "https://github.com/HamdyCS/Bankist",
    featured: false,
  },
  {
    id: "7",
    title: "Forkify",
    titleAr: "فوركيفاي",
    description:
      "A recipe search application built with JavaScript that supports searching, bookmarking, serving adjustments, and recipe uploads.",
    descriptionAr:
      "تطبيق للبحث عن الوصفات باستخدام JavaScript يدعم البحث، وحفظ الوصفات، وتعديل عدد الحصص، وإضافة وصفات جديدة.",
    image: forkify,
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    liveUrl: "https://forkify-hamdy.netlify.app/",
    repoUrl: "https://github.com/HamdyCS/Forkify",
    featured: false,
  },
  {
    id: "8",
    title: "Basic Cart App",
    titleAr: "تطبيق سلة مشتريات",
    description:
      "A shopping cart application built with React, TypeScript, and Tailwind CSS featuring product browsing and cart management.",
    descriptionAr:
      "تطبيق سلة مشتريات مبني باستخدام React وTypeScript وTailwind CSS يتيح استعراض المنتجات وإدارة السلة.",
    image: basicCartApp,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    category: "frontend",
    liveUrl: "https://basic-cart-app-hamdy.netlify.app/",
    repoUrl: "https://github.com/HamdyCS/basic-cart-app",
    featured: false,
  },
  {
    id: "9",
    title: "Social Media App",
    titleAr: "تطبيق تواصل اجتماعي",
    description:
      "A responsive social media interface built with React and Material UI featuring dark mode and interactive posts.",
    descriptionAr:
      "واجهة تطبيق تواصل اجتماعي متجاوبة باستخدام React وMaterial UI تدعم الوضع الداكن وعرض المنشورات.",
    image: socailMediaAppMui,
    technologies: ["React", "TypeScript", "Material UI"],
    category: "frontend",
    liveUrl: "https://socail-media-app-mui.netlify.app/",
    repoUrl: "https://github.com/HamdyCS/mui-responsive-project",
    featured: false,
  },
  {
    id: "10",
    title: "DVLD System",
    titleAr: "نظام إدارة رخص القيادة",
    description:
      "A complete desktop management system for driving license services, including applications, testing, renewals, replacements, detentions, and user management.",
    descriptionAr:
      "نظام مكتبي متكامل لإدارة خدمات رخص القيادة يشمل التقديم، والاختبارات، والتجديد، والاستبدال، والحجز، وإدارة المستخدمين.",
    image: DVLD,
    technologies: [".NET", "SQL Server"],
    category: "fullstack",
    repoUrl: "https://github.com/HamdyCS/DVLD",
    featured: false,
  },
  {
    id: "11",
    title: "E-Commerce Dashboard",
    titleAr: "لوحة تحكم متجر إلكتروني",
    description:
      "A professional React dashboard for e-commerce management featuring authentication, role-based authorization, and complete CRUD operations for users, categories, and products.",
    descriptionAr:
      "لوحة تحكم احترافية لمتجر إلكتروني باستخدام React تدعم تسجيل الدخول والصلاحيات وعمليات CRUD الكاملة للمستخدمين والتصنيفات والمنتجات.",
    image: ecommerceDashboard,
    technologies: ["React", "TypeScript", "Bootstrap"],
    category: "frontend",
    liveUrl: "https://e-commerce-nageeb-darwish-project-4.netlify.app/",
    repoUrl: "https://github.com/HamdyCS/e-commerce-nageeb-darwish-project-4",
    featured: false,
  },
  {
    id: "12",
    title: "E-Commerce Frontend",
    titleAr: "واجهة متجر إلكتروني",
    description:
      "A modern e-commerce frontend built with React and TypeScript, integrated with a .NET REST API. It provides a responsive shopping experience with user authentication, product browsing, category filtering, product details, shopping cart, wishlist, checkout flow, and profile management, following modern frontend development best practices.",
    descriptionAr:
      "واجهة متجر إلكتروني حديثة تم تطويرها باستخدام React وTypeScript، ومتصلة بواجهة REST API مبنية بـ .NET. توفر تجربة تسوق متكاملة تشمل تسجيل الدخول، واستعراض المنتجات، والتصفية حسب التصنيفات، وعرض تفاصيل المنتجات، وسلة المشتريات، والمفضلة، وإتمام الطلب، وإدارة الملف الشخصي، مع تصميم متجاوب وممارسات تطوير حديثة.",
    image: ecommerceFrontend,
    technologies: [
      "React",
      "TypeScript",
      "Bootstrap",
      "Redux Toolkit",
      "React Router",
      "Axios",
      "React Query",
    ],
    category: "frontend",
    repoUrl: "https://github.com/HamdyCS/e-commerce",
    featured: true,
  },
  {
    id: "13",
    title: "Task Management System API",
    titleAr: "واجهة برمجة نظام إدارة المهام",
    description:
      "A scalable task management backend built with ASP.NET Core following Clean Architecture and CQRS principles. It supports workspace and project management, task assignments, comments, attachments, JWT authentication with refresh tokens, role-based authorization, Redis caching, SignalR notifications, report generation, background services, and comprehensive validation using MediatR and FluentValidation.",
    descriptionAr:
      "واجهة برمجية متقدمة لإدارة المهام مبنية باستخدام ASP.NET Core وفق Clean Architecture وCQRS. تدعم إدارة مساحات العمل والمشاريع والمهام، والتعليقات، والمرفقات، والمصادقة باستخدام JWT، والصلاحيات، والتخزين المؤقت باستخدام Redis، وإشعارات SignalR، والتقارير، والخدمات الخلفية، والتحقق من صحة البيانات باستخدام MediatR وFluentValidation.",
    image: taskManagement,
    technologies: [
      "ASP.NET Core",
      "CQRS",
      "MediatR",
      "Entity Framework Core",
      "SQL Server",
      "Redis",
      "SignalR",
      "JWT",
      "Mapster",
      "FluentValidation",
      "Serilog",
    ],
    category: "backend",
    liveUrl: "",
    repoUrl: "https://github.com/HamdyCS/TaskManagments",
    featured: true,
  },
];
