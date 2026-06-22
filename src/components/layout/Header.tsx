import { useState } from "react";
import { MobileMenuToggle } from "../ui/MobileMenuToggle";
import { MobileMenu } from "../ui/MobileMenu";
import { DesktopNav } from "../ui/DesktopNav";
import { NAME } from "../../config/site";
import { motion } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-primary shadow-sm border-b border-gray-950/5 dark:border-white/10 z-50 backdrop-blur-lg">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      <nav className="container mx-auto px-6 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold text-heading hover:text-accent transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
          >
            {NAME}
          </motion.a>

          <DesktopNav />

          <MobileMenuToggle
            isMenuOpen={isMenuOpen}
            toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        <MobileMenu
          isOpen={isMenuOpen}
          closeMenu={() => setIsMenuOpen(false)}
        />
      </nav>
    </header>
  );
};
