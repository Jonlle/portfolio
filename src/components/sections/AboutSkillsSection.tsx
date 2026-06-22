import { AboutSection, SkillsSection } from ".";

export default function AboutSkillsSection() {
  return (
    <section className="relative">
      <AboutSection />
      <SkillsSection />

      {/* Visual connection effect */}
      <div className="absolute inset-x-0 top-full h-20 bg-gradient-to-t from-gray-50 dark:from-gray-800 to-transparent" />
    </section>
  );
};
