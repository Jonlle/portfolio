import { lazy, Suspense } from "react";
import { MotionConfig } from "framer-motion";
import { Header, MainContainer } from "./components/layout";

const HeroSection = lazy(() => import("./components/sections/HeroSection"));
const AboutSection = lazy(() => import("./components/sections/AboutSection"));
const ProjectsSection = lazy(
  () => import("./components/sections/ProjectsSection"),
);
const ContactSection = lazy(
  () => import("./components/sections/ContactSection"),
);

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="h-screen flex flex-col">
        <Header />
        <MainContainer>
          <Suspense
            fallback={
              <div className="h-full animate-pulse bg-gray-100 dark:bg-gray-800" />
            }
          >
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
          </Suspense>
        </MainContainer>
      </div>
    </MotionConfig>
  );
}

export default App;
