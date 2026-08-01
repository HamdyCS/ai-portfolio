import type { Certificate } from "../types";
import cert1 from "../assets/certificates/شهادة اتمام الكورس 1-1.png";
import cert2 from "../assets/certificates/شهادة اتمام الكورس 2-1.png";
import cert3 from "../assets/certificates/شهادة اتمام الكورس 3-1.png";
import cert4 from "../assets/certificates/شهادة اتمام الكورس 4-1.png";
import cert5 from "../assets/certificates/شهادة اتمام الكورس 5-1.png";
import cert6 from "../assets/certificates/شهادة اتمام الكورس 6-1.png";
import cert7 from "../assets/certificates/شهادة اتمام الكورس 7-1.png";
import cert8 from "../assets/certificates/شهادة اتمام الكورس 8-1.png";
import cert10 from "../assets/certificates/شهادة اتمام الكورس 10-1.png";
import cert11 from "../assets/certificates/شهادة اتمام الكورس 11-1.png";
import cert12 from "../assets/certificates/شهادة اتمام الكورس 12-1.png";
import cert13 from "../assets/certificates/شهادة اتمام الكورس 13-1.png";
import cert14 from "../assets/certificates/شهادة اتمام الكورس 14-1.png";
import cert15 from "../assets/certificates/شهادة اتمام الكورس 15-1.png";
import cert16 from "../assets/certificates/شهادة اتمام الكورس 16-1.png";
import cert17 from "../assets/certificates/شهادة اتمام الكورس 17-1.png";
import cert18 from "../assets/certificates/شهادة اتمام الكورس 18-1.png";
import cert19 from "../assets/certificates/شهادة اتمام الكورس 19-1.png";
import cert20 from "../assets/certificates/شهادة اتمام الكورس 20-1.png";
import restfulApi from "../assets/certificates/RESTful API-1.png";
import solidPrinciples from "../assets/certificates/Solid Principles-1.png";
import jonasJs from "../assets/certificates/شهادة كورس جوناس js-1.png";

export const certificates: Certificate[] = [
  {
    id: "1",
    courseName: "Programming Foundations - Level 1",
    courseNameAr: "أساسيات البرمجة - المستوى الأول",
    description:
      "Core programming concepts: variables, data types, operators, control flow, and functions.",
    descriptionAr:
      "المفاهيم الأساسية للبرمجة: المتغيرات، أنواع البيانات، العوامل، هياكل التحكم، والدوال.",
    issuer: "Programming Advices",
    issuerAr: "Programming Advices",
    category: "Fundamentals",
    verificationUrl: "https://programmingadvices.com/p/00316b",
    dateIssued: "",
    image: cert1,
    featured: false,
    verifiyId: "cert_d00pzmkb",
    instructor: "Mohammed Abu-hadhoud",
    instructorAr: "محمد ابو هدهود",
  },
  {
    id: "2",
    courseName: "Algorithms & Problem-Solving Level 1",
    courseNameAr: "الخوارزميات وحل المشكلات - المستوى الأول",
    description:
      "Foundations of algorithmic thinking, problem decomposition, and basic problem-solving techniques.",
    descriptionAr:
      "أسس التفكير الخوارزمي، وتقسيم المشكلات، وتقنيات حل المشكلات الأساسية.",
    issuer: "Programming Advices",
    issuerAr: "Programming Advices",
    category: "Fundamentals",
    verificationUrl: "https://programmingadvices.com/p/00316b1",
    dateIssued: "",
    image: cert2,
    featured: false,
    verifiyId: "cert_67npt6z2",
    instructor: "Mohammed Abu-hadhoud",
    instructorAr: "محمد ابو هدهود",
  },
  {
    id: "3",
    courseName: "Programming Using C++ - Level 1",
    courseNameAr: "البرمجة باستخدام ++C - المستوى الأول",
    description:
      "Getting started with C++ syntax, language fundamentals, and structured programming.",
    descriptionAr: "البدء مع بناء جملة ++C وأساسيات اللغة والبرمجة المنظمة.",
    issuer: "Programming Advices",
    issuerAr: "Programming Advices",
    category: "Fundamentals",
    verificationUrl: "https://programmingadvices.com/p/00316b11",
    dateIssued: "",
    image: cert3,
    featured: false,
    verifiyId: "cert_96x4hwyl",
    instructor: "Mohammed Abu-hadhoud",
    instructorAr: "محمد ابو هدهود",
  },
  {
    id: "4",
    courseName: "Algorithms & Problem-Solving Level 1 Solutions",
    courseNameAr: "حلول الخوارزميات وحل المشكلات - المستوى الأول",
    description:
      "Hands-on solutions and practical application of algorithmic problems.",
    descriptionAr: "حلول عملية وتطبيقات على المسائل الخوارزمية.",
    issuer: "Programming Advices",
    issuerAr: "Programming Advices",
    category: "Fundamentals",
    verificationUrl: "https://programmingadvices.com/p/00316b111",
    dateIssued: "",
    image: cert4,
    featured: false,
    verifiyId: "cert_b0ysmfkv",
    instructor: "Mohammed Abu-hadhoud",
    instructorAr: "محمد ابو هدهود",
  },
  {
    id: "5",
    courseName: "Algorithms & Problem-Solving Level 2",
    courseNameAr: "الخوارزميات وحل المشكلات - المستوى الثاني",
    description:
      "Intermediate algorithms, data-driven thinking, and more complex problem decomposition.",
    descriptionAr:
      "خوارزميات متوسطة، والتفكير القائم على البيانات، وتقسيم المشكلات الأكثر تعقيداً.",
    issuer: "Programming Advices",
    issuerAr: "Programming Advices",
    category: "Fundamentals",
    verificationUrl: "https://programmingadvices.com/p/00316b1111",
    dateIssued: "",
    image: cert5,
    featured: false,
    verifiyId: "cert_gf9dz943",
    instructor: "Mohammed Abu-hadhoud",
    instructorAr: "محمد ابو هدهود",
  },
  {
    id: "6",
    courseName: "Introduction to Programming Using C++ Level 2",
    courseNameAr: "مقدمة في البرمجة باستخدام ++C - المستوى الثاني",
    description:
      "Advanced C++ topics including arrays, pointers, and structured problem solving.",
    descriptionAr:
      "موضوعات ++C متقدمة تشمل المصفوفات والمؤشرات وحل المشكلات المنظم.",
    issuer: "Programming Advices",
    issuerAr: "Programming Advices",
    category: "Fundamentals",
    verificationUrl:
      "https://programmingadvices.com/p/introduction-to-programming-using-c-level-2",
    dateIssued: "",
    image: cert6,
    featured: false,
    verifiyId: "cert_wjbt8bzr",
    instructor: "Mohammed Abu-hadhoud",
    instructorAr: "محمد ابو هدهود",
  },
  {
    id: "7",
    courseName: "Algorithms & Problem Solving Level 3",
    courseNameAr: "الخوارزميات وحل المشكلات - المستوى الثالث",
    description:
      "Advanced problem-solving strategies and analysis of algorithmic complexity.",
    descriptionAr: "استراتيجيات متقدمة لحل المشكلات وتحليل التعقيد الخوارزمي.",
    issuer: "Programming Advices",
    issuerAr: "Programming Advices",
    category: "Fundamentals",
    verificationUrl:
      "https://programmingadvices.com/p/algorithms-and-problem-solving-level-3",
    dateIssued: "",
    image: cert7,
    featured: false,
    verifiyId: "cert_4tynhwkk",
    instructor: "Mohammed Abu-hadhoud",
    instructorAr: "محمد ابو هدهود",
  },
  {
    id: "8",
    courseName: "Algorithms & Problem Solving Level 4",
    courseNameAr: "الخوارزميات وحل المشكلات - المستوى الرابع",
    description:
      "Recursion, backtracking, and optimization techniques for hard problems.",
    descriptionAr:
      "الاستدعاء الذاتي، والتراجع، وتقنيات التحسين للمشكلات الصعبة.",
    issuer: "Programming Advices",
    issuerAr: "Programming Advices",
    category: "Fundamentals",
    verificationUrl:
      "https://programmingadvices.com/p/08-algorithms-problem-solving-level-4",
    dateIssued: "",
    image: cert8,
    featured: false,
    verifiyId: "cert_761bjhpm",
    instructor: "Mohammed Abu-hadhoud",
    instructorAr: "محمد ابو هدهود",
  },
  {
    id: "9",
    courseName: "OOP as it Should Be (Concepts)",
    courseNameAr: "البرمجة كائنية التوجه - المفاهيم",
    description:
      "Core object-oriented programming principles and clean design thinking.",
    descriptionAr:
      "مبادئ البرمجة كائنية التوجه الأساسية والتفكير التصميمي النظيف.",
    issuer: "Programming Advices",
    issuerAr: "Programming Advices",
    category: "Fundamentals",
    verificationUrl:
      "https://programmingadvices.com/p/oop-as-it-should-be-concepts",
    dateIssued: "Fundamentals",
    image: cert10,
    featured: false,
    verifiyId: "cert_8r6jgqbb",
    instructor: "Mohammed Abu-hadhoud",
    instructorAr: "محمد ابو هدهود",
  },
  {
    id: "10",
    courseName: "OOP as it Should Be (Applications)",
    courseNameAr: "البرمجة كائنية التوجه - التطبيقات",
    description:
      "Applying OOP patterns to build maintainable, extensible applications.",
    descriptionAr:
      "تطبيق أنماط البرمجة كائنية التوجه لبناء تطبيقات قابلة للصيانة والتوسع.",
    issuer: "Programming Advices",
    issuerAr: "Programming Advices",
    category: "Fundamentals",
    verificationUrl:
      "https://programmingadvices.com/p/11-oop-as-it-should-be-applications",
    dateIssued: "",
    image: cert11,
    featured: false,
    verifiyId: "cert_fs4815lb",
    instructor: "Mohammed Abu-hadhoud",
    instructorAr: "محمد ابو هدهود",
  },
  {
    id: "11",
    courseName: "Data Structures - Level 1",
    courseNameAr: "هياكل البيانات - المستوى الأول",
    description:
      "Essential data structures: arrays, linked lists, stacks, and queues.",
    descriptionAr:
      "هياكل البيانات الأساسية: المصفوفات، القوائم المرتبطة، الأكوام، والطوابير.",
    issuer: "Programming Advices",
    issuerAr: "Programming Advices",
    category: "Fundamentals",
    verificationUrl:
      "https://programmingadvices.com/p/12-data-structures-level1",
    dateIssued: "",
    image: cert12,
    featured: false,
    verifiyId: "cert_0zh7qtf0",
    instructor: "Mohammed Abu-hadhoud",
    instructorAr: "محمد ابو هدهود",
  },
  {
    id: "12",
    courseName: "Algorithms & Problem Solving Level 5",
    courseNameAr: "الخوارزميات وحل المشكلات - المستوى الخامس",
    description:
      "Complex problem solving and performance-oriented algorithm design.",
    descriptionAr: "حل المشكلات المعقدة وتصميم الخوارزميات الموجهة نحو الأداء.",
    issuer: "Programming Advices",
    issuerAr: "Programming Advices",
    category: "Fundamentals",
    verificationUrl:
      "https://programmingadvices.com/p/13-algorithms-problem-solving-level-5",
    dateIssued: "",
    image: cert13,
    featured: false,
    verifiyId: "cert_9w246j1m",
    instructor: "Mohammed Abu-hadhoud",
    instructorAr: "محمد ابو هدهود",
  },
  {
    id: "13",
    courseName: "C# - Level 1",
    courseNameAr: "سي شارب - المستوى الأول",
    description:
      "C# language fundamentals and modern .NET programming foundations.",
    descriptionAr: "أساسيات لغة C# وأسس البرمجة الحديثة بإطار .NET.",
    issuer: "Programming Advices",
    issuerAr: "Programming Advices",
    category: "Backend",
    verificationUrl: "https://programmingadvices.com/p/14-c-level-1",
    dateIssued: "",
    image: cert14,
    featured: false,
    verifiyId: "cert_zwt02yhy",
    instructor: "Mohammed Abu-hadhoud",
    instructorAr: "محمد ابو هدهود",
  },
  {
    id: "14",
    courseName: "Database Level 1 - SQL (Concepts and Practice)",
    courseNameAr: "قواعد البيانات SQL - المستوى الأول",
    description:
      "SQL foundations: queries, joins, and relational database design.",
    descriptionAr:
      "أساسيات SQL: الاستعلامات، والربط، وتصميم قواعد البيانات العلائقية.",
    issuer: "Programming Advices",
    issuerAr: "Programming Advices",
    category: "Backend",
    verificationUrl:
      "https://programmingadvices.com/p/database-level-1-sql-concepts-and-practice",
    dateIssued: "",
    image: cert15,
    featured: false,
    verifiyId: "cert_107zm845",
    instructor: "Mohammed Abu-hadhoud",
    instructorAr: "محمد ابو هدهود",
  },
  {
    id: "15",
    courseName: "OOP As It Should Be In C#",
    courseNameAr: "البرمجة كائنية التوجه في C#",
    description:
      "Object-oriented design principles applied within the C# ecosystem.",
    descriptionAr: "تطبيق مبادئ التصميم كائني التوجه في بيئة C#.",
    issuer: "Programming Advices",
    issuerAr: "Programming Advices",
    category: "Backend",
    verificationUrl: "https://programmingadvices.com/p/16-oop-in-c",
    dateIssued: "",
    image: cert16,
    featured: false,
    verifiyId: "cert_767yyjsv",
    instructor: "Mohammed Abu-hadhoud",
    instructorAr: "محمد ابو هدهود",
  },
  {
    id: "16",
    courseName: "Database - SQL (Projects & Practice)",
    courseNameAr: "مشاريع وتطبيقات SQL",
    description:
      "Practical SQL projects and hands-on database engineering practice.",
    descriptionAr: "مشاريع SQL عملية وتدريب عملي على هندسة قواعد البيانات.",
    issuer: "Programming Advices",
    issuerAr: "Programming Advices",
    category: "Backend",
    verificationUrl:
      "https://programmingadvices.com/p/17-database-sql-practice",
    dateIssued: "",
    image: cert17,
    featured: true,
    verifiyId: "cert_bxtl9khx",
    instructor: "Mohammed Abu-hadhoud",
    instructorAr: "محمد ابو هدهود",
  },
  {
    id: "17",
    courseName: "C# & Database Connectivity",
    courseNameAr: "الربط بين C# وقواعد البيانات",
    description:
      "Connecting C# applications to databases using ADO.NET data access.",
    descriptionAr:
      "ربط تطبيقات C# بقواعد البيانات باستخدام الوصول للبيانات عبر ADO.NET.",
    issuer: "Programming Advices",
    issuerAr: "Programming Advices",
    category: "Backend",
    verificationUrl:
      "https://programmingadvices.com/p/db-connectivity-in-csharp",
    dateIssued: "",
    image: cert18,
    featured: false,
    verifiyId: "cert_73ssvyh2",
    instructor: "Mohammed Abu-hadhoud",
    instructorAr: "محمد ابو هدهود",
  },
  {
    id: "18",
    courseName: "Full Real Project",
    courseNameAr: "مشروع حقيقي بالكامل",
    description: "End-to-end real-world application development experience.",
    descriptionAr: "خبرة تطوير تطبيق حقيقي متكامل من البداية إلى النهاية.",
    issuer: "Programming Advices",
    issuerAr: "Programming Advices",
    category: "Fullstack",
    verificationUrl: "https://programmingadvices.com/p/19-fullrealproject",
    dateIssued: "",
    image: cert19,
    featured: true,
    verifiyId: "cert_d66p1z6t",
    instructor: "Mohammed Abu-hadhoud",
    instructorAr: "محمد ابو هدهود",
  },
  {
    id: "19",
    courseName: "C# Programming Level 2",
    courseNameAr: "برمجة C# - المستوى الثاني",
    description:
      "Advanced C# programming and professional .NET development techniques.",
    descriptionAr: "برمجة C# متقدمة وتقنيات تطوير .NET الاحترافية.",
    issuer: "Programming Advices",
    issuerAr: "Programming Advices",
    category: "Backend",
    verificationUrl: "https://programmingadvices.com/p/c-sharp-level2",
    dateIssued: "",
    image: cert20,
    featured: true,
    verifiyId: "cert_gygz98nz",
    instructor: "Mohammed Abu-hadhoud",
    instructorAr: "محمد ابو هدهود",
  },
  {
    id: "20",
    courseName: "RESTful API",
    courseNameAr: "RESTful API",
    description:
      "Designing and building RESTful APIs following modern best practices.",
    descriptionAr: "تصميم وبناء RESTful APIs وفق أفضل الممارسات الحديثة.",
    issuer: "Programming Advices",
    issuerAr: "Programming Advices",
    category: "Backend",
    verificationUrl: "https://programmingadvices.com/p/restful-api",
    dateIssued: "",
    image: restfulApi,
    featured: true,
    verifiyId: "cert_338y04yv",
    instructor: "Mohammed Abu-hadhoud",
    instructorAr: "محمد ابو هدهود",
  },
  {
    id: "21",
    courseName: "SOLID Principles",
    courseNameAr: "مبادئ SOLID",
    description:
      "Applying SOLID design principles for clean, maintainable architecture.",
    descriptionAr:
      "تطبيق مبادئ SOLID في التصميم لتحقيق هندسة برمجية نظيفة وقابلة للصيانة.",
    issuer: "Programming Advices",
    issuerAr: "Programming Advices",
    category: "Software Design",
    verificationUrl: "https://programmingadvices.com/p/solid-principles",
    dateIssued: "",
    image: solidPrinciples,
    featured: true,
    verifiyId: "cert_jdxlrvhd",
    instructor: "Mohammed Abu-hadhoud",
    instructorAr: "محمد ابو هدهود",
  },
  {
    id: "22",
    courseName: "The Complete JavaScript Course 2025",
    courseNameAr: "دورة JavaScript الكاملة 2025",
    description:
      "Modern JavaScript from fundamentals to advanced DOM and async patterns.",
    descriptionAr:
      "JavaScript الحديثة من الأساسيات إلى أنماط DOM المتقدمة والبرمجة غير المتزامنة.",
    issuer: "Udemy",
    issuerAr: "Udemy",
    category: "Frontend",
    verificationUrl:
      "https://www.udemy.com/certificate/UC-07a22acb-7819-491a-9813-f963bbc7515f/",
    dateIssued: "",
    image: jonasJs,
    featured: true,
    verifiyId: "UC-07a22acb-7819-491a-9813-f963bbc7515f",
    instructor: "Jonas Schmedtmann",
    instructorAr: "جونس شميدتمان",
  },
];
