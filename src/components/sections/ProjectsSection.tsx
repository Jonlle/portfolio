import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Task Management System",
      description:
        "Full-featured web application for task management with role-based access control",
      tech: ["Next.js", "TailwindCSS", "Zustand", "Flowbite", "TypeScript"],
      image:
        "https://github.com/Jonlle/task-management-system/blob/main/screenshots/dashboard.jpeg",
      demo: "https://tms-tool.vercel.app",
      github: "https://github.com/Jonlle/task-management-system",
    },
    {
      title: "Google Maps Measurement Tool",
      description:
        "Professional-grade mapping tool for precise distance and area calculations",
      tech: ["React", "TypeScript", "Google Maps API", "Vite"],
      image:
        "https://github.com/Jonlle/google-maps-measure-tools/blob/main/screenshots/radius_measurement.png",
      demo: "https://measuremap.vercel.app/",
      github: "https://github.com/Jonlle/google-maps-measure-tools",
    },
    {
      title: "Pokémon Favorites App",
      description:
        "Modern Pokémon collection platform with SSR implementation and SEO optimization",
      tech: ["Next.js", "React", "TypeScript", "TailwindCSS"],
      image:
        "https://github.com/Jonlle/next-pokemon-static/blob/main/screenshots/pokemon_details.png",
      demo: "https://next-pokemon-static.vercel.app",
      github: "https://github.com/Jonlle/next-pokemon-static",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 dark:text-white"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-gray-600 text-blue-800 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <FiExternalLink />
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <FiGithub />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Jonlle?tab=repositories"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            <FiGithub />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};
