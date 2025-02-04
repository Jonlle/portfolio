// components/ui/NavLink.tsx
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => (
  <motion.a
    href={href}
    className="font-medium text-heading hover:text-accent transition-colors duration-200"
    whileHover={{ y: -2 }}
  >
    {children}
  </motion.a>
);
