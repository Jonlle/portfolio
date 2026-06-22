export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  demo: string;
  github: string;
}

export const projects: Project[] = [
  {
    title: "Task Management System",
    description:
      "Full-featured web application for task management with role-based access control",
    tech: ["Next.js", "TailwindCSS", "Zustand", "Flowbite", "TypeScript"],
    image:
      "https://github.com/Jonlle/task-management-system/blob/main/screenshots/dashboard.jpeg",
    demo: "https://tms-tool.vercel.app",
    github: "https://github.com/Jonlle/task-management-system",
  },
  {
    title: "Google Maps Measurement Tool",
    description:
      "Professional-grade mapping tool for precise distance and area calculations",
    tech: ["React", "TypeScript", "Google Maps API", "Vite"],
    image:
      "https://github.com/Jonlle/google-maps-measure-tools/blob/main/screenshots/radius_measurement.png",
    demo: "https://measuremap.vercel.app/",
    github: "https://github.com/Jonlle/google-maps-measure-tools",
  },
  {
    title: "Pokémon Favorites App",
    description:
      "Modern Pokémon collection platform with SSR implementation and SEO optimization",
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    image:
      "https://github.com/Jonlle/next-pokemon-static/blob/main/screenshots/pokemon_details.png",
    demo: "https://next-pokemon-static.vercel.app",
    github: "https://github.com/Jonlle/next-pokemon-static",
  },
];
