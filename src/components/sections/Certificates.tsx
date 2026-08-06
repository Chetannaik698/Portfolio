import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Download, X, FileBadge, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { certificates } from "@/data/resume";

export function Certificates() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<(typeof certificates)[number] | null>(null);

  function scroll(direction: "left" | "right") {
    trackRef.current?.scrollBy({ left: direction === "left" ? -320 : 320, behavior: "smooth" });
  }

  return (
    <section id="certificates" className="section-shell">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Certificates"
          title="Continuous learning, verified."
          description="A few of the courses and certifications behind the skills above."
        />
        <div className="hidden gap-2 sm:flex">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-full text-ink"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-full text-ink"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div ref={trackRef} className="mt-10 flex snap-x gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {certificates.map((cert, i) => (
          <motion.button
            key={cert.title}
            onClick={() => setSelected(cert)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="w-72 shrink-0 snap-start text-left"
          >
            <GlassCard className="group overflow-hidden p-0">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-accent/15 via-white/[0.03] to-transparent">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-accent shadow-inner">
                      {cert.issuer.includes("Anthropic") ? (
                        <span className="font-mono text-xl font-bold tracking-tighter text-white">A\</span>
                      ) : cert.issuer.includes("AWS") || cert.issuer.includes("Amazon") ? (
                        <span className="font-mono text-lg font-extrabold text-amber-400">aws</span>
                      ) : cert.issuer.includes("Infosys") ? (
                        <span className="font-display text-sm font-bold text-sky-400">Infosys</span>
                      ) : (
                        <FileBadge size={28} className="text-accent" />
                      )}
                    </div>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-ink-muted">{cert.issuer}</p>
                  </div>
                )}
                {cert.link && (
                  <span className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-base/80 text-ink backdrop-blur shadow-md transition-transform group-hover:scale-110">
                    <ExternalLink size={13} />
                  </span>
                )}
              </div>
              <div className="p-5">
                <p className="font-medium text-ink line-clamp-1">{cert.title}</p>
                <p className="mt-1 text-xs text-ink-muted">{cert.issuer} · {cert.year}</p>
                {cert.credentialId && (
                  <p className="mt-1 font-mono text-[10px] text-ink-faint">ID: {cert.credentialId}</p>
                )}
              </div>
            </GlassCard>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative w-full max-w-md rounded-3xl p-8 shadow-glass"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-5 top-5 text-ink-faint hover:text-ink"
              >
                <X size={20} />
              </button>
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-edge bg-gradient-to-br from-accent/15 via-white/[0.03] to-transparent">
                {selected.image ? (
                  <img
                    src={selected.image}
                    alt={selected.title}
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                    className="h-full w-full object-cover object-center"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-accent shadow-inner">
                      {selected.issuer.includes("Anthropic") ? (
                        <span className="font-mono text-2xl font-bold tracking-tighter text-white">A\</span>
                      ) : selected.issuer.includes("AWS") || selected.issuer.includes("Amazon") ? (
                        <span className="font-mono text-xl font-extrabold text-amber-400">aws</span>
                      ) : selected.issuer.includes("Infosys") ? (
                        <span className="font-display text-base font-bold text-sky-400">Infosys</span>
                      ) : (
                        <FileBadge size={32} className="text-accent" />
                      )}
                    </div>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-ink-muted">{selected.issuer}</p>
                  </div>
                )}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{selected.title}</h3>
              <p className="text-sm text-ink-muted">{selected.issuer} · {selected.year}</p>
              {selected.credentialId && (
                <p className="mt-1 font-mono text-xs text-ink-faint">Credential ID: {selected.credentialId}</p>
              )}
              <div className="mt-6 flex flex-wrap gap-3">
                {selected.link && (
                  <a href={selected.link} target="_blank" rel="noreferrer" className="btn-primary">
                    <ExternalLink size={15} /> View Credential
                  </a>
                )}
                {selected.image && (
                  <a href={selected.image} download className="btn-ghost">
                    <Download size={15} /> Download Image
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
