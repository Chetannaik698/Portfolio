export const services = [
  { title: "Landing Pages", description: "High-converting, animated single-page sites for launches and campaigns." },
  { title: "Business Websites", description: "Multi-page sites that give small businesses a credible online presence." },
  { title: "Portfolio Websites", description: "Personal and creative portfolios that showcase work distinctively." },
  { title: "Restaurant Websites", description: "Menu-first sites with ordering flows and location details." },
  { title: "Studio Websites", description: "Cinematic, scroll-driven sites for design and creative studios." },
  { title: "AI Integration", description: "Adding AI-assisted features — chat, generation, automation — to existing products." },
  { title: "Website Redesign", description: "Modernizing dated sites with better UX, performance, and visual design." },
];

export type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "₹4,000 – ₹6,000",
    description: "A focused single-page or landing website to get your business online fast.",
    features: [
      "1–4 sections",
      "Mobile responsive & fast",
      "Custom animations",
      "Basic SEO setup",
      "1 round of revisions",
      "3–5 day delivery",
    ],
  },
  {
    name: "Premium",
    price: "₹12,000 – ₹18,000",
    description: "A complete multi-page business site or custom web app with advanced features.",
    features: [
      "Up to 8 pages / Custom app",
      "Full mobile & tablet optimization",
      "Database & API integration",
      "Advanced custom animations",
      "Complete SEO setup",
      "Priority support & maintenance",
    ],
    highlighted: true,
  },
];

export const process = [
  { step: "Consultation", description: "We talk through goals, audience, and scope on a short call." },
  { step: "Design", description: "I share a design direction and content plan for your approval." },
  { step: "Development", description: "I build the site with regular progress previews." },
  { step: "Launch", description: "We test, polish, and ship — with a walkthrough of how to update it." },
];

export const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most landing pages take 5–7 days; full business sites take 2–3 weeks depending on scope.",
  },
  {
    question: "Do you work with clients outside your timezone?",
    answer: "Yes — I work async-first with clients across timezones and keep communication in Slack or email.",
  },
  {
    question: "Can you redesign an existing site?",
    answer: "Yes, I can rebuild an existing site with modern UX and performance while keeping your brand intact.",
  },
  {
    question: "What do you need from me to get started?",
    answer: "A short brief, any brand assets you have, and example sites you like — I'll handle the rest.",
  },
];

export const testimonials = [
  {
    name: "Anita Rao",
    role: "Founder, Studio Verve",
    quote:
      "Chetan turned our vague brief into a site that actually felt like us. Communication was smooth the whole way through.",
  },
  {
    name: "Rahul Mehta",
    role: "Owner, Spice Route Restaurant",
    quote:
      "Our new site brought in noticeably more table bookings in the first month. Fast delivery and great attention to detail.",
  },
  {
    name: "Priya Nair",
    role: "Product Lead, Loopwork",
    quote:
      "He integrated an AI feature into our app faster than we expected, and explained every decision clearly along the way.",
  },
  {
    name: "Dev Shah",
    role: "Indie Hacker",
    quote:
      "Great eye for motion and detail — the portfolio he built for me still gets compliments from recruiters.",
  },
];
