import { Github, Linkedin, Youtube, Instagram } from "lucide-react";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/chetannaik1/",
  github: "https://github.com/Chetannaik698",
  youtube: "https://www.youtube.com/@chetannaik2005",
  instagram: "https://www.instagram.com/chetannaik2005/",
};

export const SOCIALS = [
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
  { icon: Youtube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
];
