import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { Certificates } from "./pages/Certificates";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { NotFound } from "./pages/NotFound";
import { AboutMe } from "./pages/AboutMe";
import { Contact } from "./pages/Contact";
import { useTranslation } from "react-i18next";
import { useAtom } from "jotai";
import themeAtom from "./atoms/themeAtom";
import { useEffect } from "react";

function App() {
  const { i18n } = useTranslation();
  const [theme] = useAtom(themeAtom);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div
      className="min-h-screen bg-slate-50 overflow-x-hidden dark:bg-background"
      dir={i18n.dir()}
    >
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
