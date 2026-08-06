export type Skill = {
  name: string;
  level: number; // 0-100
};

export type SkillGroup = {
  category: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 92 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 82 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      { name: "C++", level: 70 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    category: "AI Tools",
    skills: [
      { name: "OpenAI API", level: 85 },
      { name: "Claude", level: 88 },
      { name: "ChatGPT", level: 85 },
      { name: "Cursor", level: 82 },
    ],
  },
  {
    category: "Tools & Cloud",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 78 },
      { name: "Vercel", level: 88 },
      { name: "Render", level: 80 },
    ],
  },
];
