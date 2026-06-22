// components/AboutSection.tsx
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

export const AboutSection = () => {
  return (
    <motion.section
      id="about"
      aria-label="About me"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center py-20"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
            Crafting Digital Excellence
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
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

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block text-3xl text-blue-500 cursor-pointer"
          >
            <FiArrowDown />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
