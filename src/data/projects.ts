export type Project = {
  id: string;
  title: string;
  category: "Web App" | "AI" | "Website" | "Tool";
  description: string;
  longDescription: string;
  stack: string[];
  image: string;
  github?: string;
  demo?: string;
  caseStudy?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "shruti-fotography",
    title: "Shruti Fotography",
    category: "Website",
    description: "A portfolio website for a professional photography studio.",
    longDescription:
      "Designed and developed a responsive portfolio and booking website for Shruti Fotography. Features gallery views, service packages, client contact form, and smooth scroll animations.",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/shrutifotography.png",
    demo: "https://shrutifotography.online",
    featured: true,
  },
  {
    id: "gateway-computers",
    title: "Gateway Computers",
    category: "Website",
    description: "E-commerce & service platform for computer hardware, laptops, and IT services.",
    longDescription:
      "A modern e-commerce storefront for Gateway Computers featuring hardware product catalogs, tech service listings, search filtering, and customer inquiry management.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    image: "/gatewaycomputers.png",
    demo: "https://gatewaycomputers.shop/",
    featured: true,
  },
  {
    id: "dev-computers",
    title: "Dev Computers",
    category: "Website",
    description: "Computer retail & tech support site with product catalog and service inquiries.",
    longDescription:
      "Built a high-converting business website for Dev Computers with product showcases, service price lists, customer reviews, and direct inquiry booking.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    image: "/devcomputers.png",
    demo: "https://devcomputers.shop/",
    featured: true,
  },
];

export const projectCategories = ["All", "Web App", "AI", "Website", "Tool"] as const;
