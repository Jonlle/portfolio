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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex-1 text-body transition-colors duration-300 pt-16 md:pt-20 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {children}
      </div>
    </motion.main>
  );
};
