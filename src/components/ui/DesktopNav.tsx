import { NavLink } from "./NavLink";
import { ThemeToggle } from "./ThemeToggle";
import { NAVIGATION } from "../../config/site";

export const DesktopNav = () => (
  <div className="hidden md:flex items-center gap-8">
    {NAVIGATION.map((item) => (
      <NavLink key={item.name} href={item.href}>
        {item.name}
      </NavLink>
    ))}
    <ThemeToggle />
  </div>
);
