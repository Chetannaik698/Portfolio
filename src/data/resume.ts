export type TimelineItem = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
};

export const education: TimelineItem[] = [
  {
    year: "2023 — 2026",
    title: "Bachelor of Computer Applications (BCA)",
    subtitle: "RNS First Grade College",
    description: "Affiliated to Karnatak University, Dharwad — Graduated with 9.2 CGPA.",
  },
  {
    year: "2021 — 2022",
    title: "Pre-University Course (PUC)",
    subtitle: "RNS PU College",
    description: "Built a strong academic foundation in computer science and basic programming.",
  },
];

export const experience: TimelineItem[] = [
  {
    year: "2026 — Present",
    title: "Freelance Full Stack Developer",
    subtitle: "Self-employed",
    description: "Delivering websites and web apps for small businesses and creators.",
  },
  {
    year: "2026 — Present",
    title: "Content Creator",
    subtitle: "YouTube",
    description: "Documenting the process of building web and AI projects for a growing audience.",
  },
];

export const achievements = [
  { title: "8-10+ Projects Shipped", description: "Across freelance clients, personal builds, and web apps." },
  { title: "9.2 CGPA Distinction", description: "Graduated with distinction in Bachelor of Computer Applications." },
  { title: "YouTube Channel Started", description: "Documenting the developer journey & building in public." },
  { title: "Open Source Contributor", description: "Merged contributions to community tooling projects." },
];

export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  image?: string;
  credentialId?: string;
  link?: string;
};

export const certificates: Certificate[] = [
  {
    title: "Sigma (Full Stack Web Development)",
    issuer: "Apna College",
    year: "Dec 2024",
    image: "/apnacollege.png",
    credentialId: "671638a6f6dbca7e12077637",
    link: "https://drive.google.com/file/d/1tgPYFudr-jQzeRgjmtT7B7aT7-wa1lum/view",
  },
  {
    title: "Full Stack Development Internship",
    issuer: "StormX Technologies Pvt Ltd",
    year: "Mar 2025",
    image: "/stormx.png",
    link: "https://drive.google.com/file/d/1yhFMwvzaKyZRNx6lylebr7t6_V7y5A6s/view",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    year: "Mar 2026",
    image: "/claude.png",
    link: "https://drive.google.com/file/d/1iX3MtZYISBGHd4XFvet6eZq642jZmT7x/view",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    year: "Mar 2026",
    image: "/aws.png",
    link: "https://drive.google.com/file/d/1567eH6dI57AZqvpVRYCuKFsN4qZdhjZB/view",
  },
  {
    title: "Explore Machine Learning using Python",
    issuer: "Infosys Springboard",
    year: "Apr 2025",
  },
];

export const stats: Array<{ label: string; value: number | string }> = [
  { label: "Projects Completed", value: "8-10" },
  { label: "Happy Clients", value: "6-8" },
  { label: "Technologies", value: 25 },
  { label: "Videos Created", value: 3 },
  { label: "Years Learning", value: 4 },
];
