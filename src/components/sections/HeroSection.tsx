import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="md:w-1/2"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 dark:text-white">
              Full Stack Developer
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Building Scalable Solutions with Modern Technologies
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                className="border-2 border-blue-600 text-blue-600 dark:text-white px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
              >
                View Work
              </motion.a>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="md:w-1/2"
          >
            <img
              src="https://www.freecodecamp.org/news/content/images/2022/11/hire-full-stack-developers1546507474317-1.gif"
              alt="Full Stack Development Illustration"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
