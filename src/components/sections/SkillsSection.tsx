import { motion } from "framer-motion";
import { skills } from "../../data/skills";

export const SkillsSection = () => {
  return (
    <section id="skills" aria-label="Skills" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
            >
              <skill.icon className="text-4xl text-blue-500 mb-4" />
              <span className="text-gray-700 dark:text-gray-200 text-center font-medium">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
