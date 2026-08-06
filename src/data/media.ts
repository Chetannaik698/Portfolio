export type Video = {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  uploaded: string;
  description: string;
  url: string;
  featured?: boolean;
};

export const videos: Video[] = [
  {
    id: "v1",
    title: "The Untold Story of the Calculator | 4,000 Years of Human Intelligence",
    thumbnail: "https://img.youtube.com/vi/hSF1Yt-NMVc/hqdefault.jpg",
    duration: "Watch Now",
    views: "Documentary",
    uploaded: "Latest Video",
    description: "Human Intelligence, Unplugged. A historical documentary exploring how 4,000 years of mathematics and mechanics birthed modern computing.",
    url: "https://youtu.be/hSF1Yt-NMVc?si=JoLKOBsTNiZUnrHK",
    featured: true,
  },
  {
    id: "v2",
    title: "The Birth of the Indian Government | How 2,300 Years Shaped Modern India",
    thumbnail: "https://img.youtube.com/vi/gzB-L01k1x0/hqdefault.jpg",
    duration: "Watch Now",
    views: "Documentary",
    uploaded: "Featured Video",
    description: "How 2,300 years of Indian history, governance systems, and political evolution shaped modern India.",
    url: "https://youtu.be/gzB-L01k1x0?si=0mFsCHDO5V0TcM9T",
  },
  {
    id: "v3",
    title: "The Complete History of Artificial Intelligence (400 BCE–2026) | AI Documentary",
    thumbnail: "https://img.youtube.com/vi/yMw5DTUy7EM/hqdefault.jpg",
    duration: "Watch Now",
    views: "Documentary",
    uploaded: "Featured Video",
    description: "From Da Vinci to ChatGPT — a comprehensive historical documentary on the origin, evolution, and future of artificial intelligence.",
    url: "https://youtu.be/yMw5DTUy7EM?si=UopxUV72gwWS1Pzn",
  },
];

export type Repo = {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url?: string;
};

export const repos: Repo[] = [
  {
    name: "Shruti-Fotography",
    description: "Responsive portfolio and booking website for professional photography studio.",
    language: "JavaScript",
    stars: 1,
    forks: 0,
    url: "https://github.com/Chetannaik698/Shruti-Fotography",
  },
  {
    name: "Gateway-Computers",
    description: "E-commerce storefront & hardware service platform for Gateway Computers.",
    language: "JavaScript",
    stars: 1,
    forks: 0,
    url: "https://github.com/Chetannaik698/Gateway-Computers",
  },
  {
    name: "Dev_Computers",
    description: "Computer retail & tech support site with product catalog and service booking.",
    language: "JavaScript",
    stars: 1,
    forks: 0,
    url: "https://github.com/Chetannaik698/Dev_Computers",
  },
  {
    name: "KlordGPT",
    description: "AI-powered web assistant & intelligent chat platform.",
    language: "JavaScript",
    stars: 1,
    forks: 0,
    url: "https://github.com/Chetannaik698/KlordGPT",
  },
  {
    name: "Klord-Browser-Release-Web",
    description: "Web application landing page for Klord web browser.",
    language: "JavaScript",
    stars: 1,
    forks: 0,
    url: "https://github.com/Chetannaik698/Klord-Browser-Release-Web",
  },
  {
    name: "E-PICK",
    description: "Full-stack e-commerce product catalog & ordering application.",
    language: "JavaScript",
    stars: 1,
    forks: 1,
    url: "https://github.com/Chetannaik698/E-PICK",
  },
];

export const languageBreakdown = [
  { name: "JavaScript", percent: 55, color: "#F7DF6B" },
  { name: "TypeScript", percent: 25, color: "#4F8CFF" },
  { name: "Python", percent: 12, color: "#7FACFF" },
  { name: "CSS / HTML", percent: 8, color: "#B892FF" },
];

export const githubStats = {
  totalRepos: 22,
  totalStars: 5,
  totalCommits: 350,
  contributionWeeks: 52,
};

export type BlogPost = {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    title: "How I Structure Every Freelance Project",
    excerpt: "The exact process I follow from first client call to final handoff, and why it keeps scope creep away.",
    category: "Freelancing",
    readTime: "6 min read",
    date: "Jul 2026",
    featured: true,
  },
  {
    title: "Framer Motion Patterns I Reuse in Every Project",
    excerpt: "A short library of animation variants that consistently feel premium without being excessive.",
    category: "Frontend",
    readTime: "5 min read",
    date: "Jun 2026",
  },
  {
    title: "What I Learned Shipping My First AI Feature",
    excerpt: "Notes on prompt design, error handling, and cost management from a real client integration.",
    category: "AI",
    readTime: "7 min read",
    date: "May 2026",
  },
];
