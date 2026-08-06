import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "freelancing", label: "Freelancing" },
  { id: "resume", label: "Resume" },
  { id: "youtube", label: "YouTube" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(NAV_LINKS.map((l) => l.id));

  function scrollTo(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2.5 shadow-glass sm:px-6">
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-ink group"
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-accent/30 transition-transform duration-300 group-hover:scale-105">
            <img src="/chetan.png" alt="Chetan Naik" className="h-full w-full object-cover object-top" />
          </div>
          <span>CN<span className="text-accent">.</span></span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active === link.id ? "text-ink" : "text-ink-muted hover:text-ink"
                )}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.08]"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <button
            onClick={() => scrollTo("contact")}
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105 sm:inline-flex"
          >
            Hire Me
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="glass absolute left-4 right-4 top-[72px] rounded-3xl p-4 shadow-glass lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={cn(
                      "w-full rounded-xl px-4 py-3 text-left text-sm font-medium",
                      active === link.id ? "bg-white/[0.08] text-ink" : "text-ink-muted"
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-2 flex items-center justify-between px-4">
                <span className="text-sm text-ink-muted">Theme</span>
                <ThemeToggle />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
