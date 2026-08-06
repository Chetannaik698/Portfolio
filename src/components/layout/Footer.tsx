import { SOCIALS } from "@/data/socials";

const LINKS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "freelancing", label: "Freelancing" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <footer className="relative border-t border-edge">
      <div className="section-shell !py-16">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row">
          <div>
            <div className="font-display text-xl font-semibold text-ink">
              CN<span className="text-accent">.</span>
            </div>
            <p className="body-muted mt-3 max-w-xs">
              Full stack developer and AI enthusiast building modern web experiences, one project at a time.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink">Navigate</h4>
            <ul className="mt-4 space-y-2">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink">Connect</h4>
            <div className="mt-4 flex flex-wrap gap-2">
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
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-edge pt-6 text-sm text-ink-faint sm:flex-row">
          <p>© {new Date().getFullYear()} Chetan Naik. All rights reserved.</p>
          <p>Built with React, TypeScript &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
