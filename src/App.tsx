import { lazy, Suspense } from "react";
import { MotionConfig } from "framer-motion";
import { Header, MainContainer, Footer } from "./components/layout";

const HeroSection = lazy(() => import("./components/sections/HeroSection"));
const AboutSkillsSection = lazy(
  () => import("./components/sections/AboutSkillsSection"),
);
const ProjectsSection = lazy(
  () => import("./components/sections/ProjectsSection"),
);
const ContactSection = lazy(
  () => import("./components/sections/ContactSection"),
);

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex flex-col min-h-screen">
        <Header />
        <MainContainer>
          <Suspense
            fallback={
              <div className="min-h-screen animate-pulse bg-gray-100 dark:bg-gray-800" />
            }
          >
            <HeroSection />
            <AboutSkillsSection />
            <ProjectsSection />
            <ContactSection />
          </Suspense>
        </MainContainer>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
