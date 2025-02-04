import { AnimatePresence, motion } from "framer-motion";
import { NAVIGATION } from "../../config/site";
import { ThemeToggle } from "./ThemeToggle";

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export const MobileMenu = ({ isOpen, closeMenu }: MobileMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className="md:hidden overflow-hidden"
      >
        <div className="pt-4 pb-2 space-y-4">
          {NAVIGATION.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="block nav-link text-primary hover:text-accent px-4 py-2"
              onClick={closeMenu}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
          <div className="px-4 py-2">
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
