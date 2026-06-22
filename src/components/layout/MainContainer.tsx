import { motion } from "framer-motion";
import { ReactNode } from "react";

type MainContainerProps = {
  children: ReactNode;
  className?: string;
};

export const MainContainer = ({
  children,
  className = "",
}: MainContainerProps) => {
  return (
    <motion.main
      id="main-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex-1 min-h-0 text-body transition-colors duration-300 snap-container ${className}`}
    >
      {children}
    </motion.main>
  );
};
