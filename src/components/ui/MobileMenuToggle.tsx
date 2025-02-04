import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface MobileMenuToggleProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const MobileMenuToggle = ({
  isMenuOpen,
  toggleMenu,
}: MobileMenuToggleProps) => (
  <button
    onClick={toggleMenu}
    className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
    aria-label="Toggle menu"
  >
    {isMenuOpen ? (
      <XMarkIcon className="w-6 h-6 text-heading" />
    ) : (
      <Bars3Icon className="w-6 h-6 text-heading" />
    )}
  </button>
);
