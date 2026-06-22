import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../../data/projects";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col"
    >
      {/* Image with placeholder fallback */}
      <div className="relative w-full h-36 bg-gray-100 dark:bg-gray-700 rounded-t-xl overflow-hidden">
        {!imgError && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover block"
            onError={() => setImgError(true)}
          />
        )}
        {imgError && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-300">
            <FiExternalLink className="text-4xl" />
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-1 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs bg-blue-100 dark:bg-gray-600 text-blue-800 dark:text-blue-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links - pushed to bottom with mt-auto */}
        <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100 dark:border-gray-600">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <FiExternalLink />
            Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FiGithub />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="snap-section h-full flex flex-col justify-center py-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-6 dark:text-white"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-6"
        >
          <a
            href="https://github.com/Jonlle?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm"
          >
            <FiGithub />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
