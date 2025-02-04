// components/ui/ThemeToggle.tsx
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../../context/theme/useTheme";

export const ThemeToggle = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-lg cursor-pointer transition-colors hover:bg-accent"
      aria-label="Toggle theme"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ rotate: -45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 45, opacity: 0 }}
          >
            <SunIcon className="w-6 h-6 text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -45, opacity: 0 }}
          >
            <MoonIcon className="w-6 h-6 text-blue-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
