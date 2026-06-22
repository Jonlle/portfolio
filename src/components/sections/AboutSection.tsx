import { motion } from "framer-motion";
import { skills } from "../../data/skills";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About me"
      className="snap-section h-full flex flex-col justify-center py-12"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          className="max-w-4xl mx-auto text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight pb-1 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
            Crafting Digital Excellence
          </h2>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Full-stack developer specializing in modern web architectures with
            5+ years of experience. I build performant applications using{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              React
            </span>
            ,
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              {" "}
              Next.js
            </span>
            , and cloud-native solutions. Focused on creating maintainable
            systems that scale elegantly with user growth.
          </p>
        </motion.div>

        {/* Skills Section */}
        <div id="skills" aria-label="Skills">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white"
          >
            Tech Stack
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="p-4 md:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
              >
                <skill.icon className="text-3xl md:text-4xl text-blue-500 mb-2 md:mb-4" />
                <span className="text-sm md:text-base text-gray-700 dark:text-gray-200 text-center font-medium">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
