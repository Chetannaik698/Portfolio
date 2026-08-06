import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Send } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SOCIALS } from "@/data/socials";

const ROLES = ["Full Stack Developer", "AI Enthusiast", "Freelancer", "Content Creator"];

function useTypingEffect(words: string[], typeSpeed = 70, deleteSpeed = 40, pause = 1600) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)));
        },
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypingEffect(ROLES);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      {/* Background radial glow */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]"
      />

      <div className="section-shell relative grid items-center gap-16 !py-0 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl"
          >
            Chetan Naik
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 flex h-8 items-center text-xl font-medium text-ink-muted sm:text-2xl"
          >
            <span className="text-accent">{typed}</span>
            <span className="ml-1 h-6 w-[2px] animate-pulse-glow bg-accent" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="body-muted mt-6 max-w-lg"
          >
            I build modern websites and AI-powered applications, and document the journey
            on YouTube — one project, one video at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <MagneticButton onClick={() => scrollTo("projects")}>
              View Projects
            </MagneticButton>
            <MagneticButton variant="ghost" onClick={() => scrollTo("freelancing")}>
              <Send size={15} /> Hire Me
            </MagneticButton>
            <a
              href="/Chetan%20Naik%20-%20Full%20Stack%20Developer.pdf"
              target="_blank"
              rel="noreferrer"
              download="Chetan_Naik_Resume.pdf"
              className="btn-ghost"
            >
              <Download size={15} /> Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex items-center gap-3"
          >
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-full text-ink-muted hover:text-accent"
              >
                <s.icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto mt-8 flex justify-center lg:mt-0 lg:block"
        >
          <div className="relative h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] lg:h-[380px] lg:w-[380px]">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-accent/40 via-accent/10 to-transparent blur-2xl" />
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/10 shadow-glass group"
            >
              <img
                src="/chetan.png"
                alt="Chetan Naik"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -bottom-4 -left-4 rounded-2xl px-3.5 py-2.5 shadow-glass sm:-bottom-6 sm:-left-8 sm:px-4 sm:py-3"
            >
              <p className="text-[11px] text-ink-muted sm:text-xs">Currently building</p>
              <p className="text-xs font-semibold text-ink sm:text-sm">AI Portfolio Tools</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="glass absolute -right-4 -top-4 flex items-center gap-2 rounded-2xl px-3.5 py-2.5 shadow-glass sm:-right-6 sm:-top-6 sm:px-4 sm:py-3"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-xs font-medium text-ink sm:text-sm">Open to work</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to about section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint hover:text-accent"
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  );
}
