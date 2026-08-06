import { useEffect, useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Freelancing } from "@/components/sections/Freelancing";
import { Resume } from "@/components/sections/Resume";
import { YouTubeSection } from "@/components/sections/YouTubeSection";
import { Certificates } from "@/components/sections/Certificates";
import { TechStack } from "@/components/sections/TechStack";
import { GitHubStats } from "@/components/sections/GitHubStats";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useLenis();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Freelancing />
        <Resume />
        <YouTubeSection />
        <Certificates />
        <TechStack />
        <GitHubStats />
        <Blog />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
