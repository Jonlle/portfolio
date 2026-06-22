import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SOCIAL_LINKS } from "../../config/site";

export const Footer = () => {
  return (
    <footer className="mt-8 pb-6">
      <div className="flex justify-center gap-6 mb-4">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label={`Visit my ${link.label}`}
          >
            {link.icon === "github" ? (
              <FiGithub className="text-2xl" />
            ) : link.icon === "linkedin" ? (
              <FiLinkedin className="text-2xl" />
            ) : (
              <FiMail className="text-2xl" />
            )}
          </a>
        ))}
      </div>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Jhonatan Llerena. All rights reserved.
      </p>
    </footer>
  );
};
