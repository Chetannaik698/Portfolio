import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, Search, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { TiltCard } from "@/components/ui/TiltCard";
import { projects, projectCategories, Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  const [category, setCategory] = useState<(typeof projectCategories)[number]>("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.stack.some((s) => s.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Featured Work"
        title="A few things I've built."
        description="Client work, personal experiments, and AI-powered tools — filter by category or search by tech stack."
      />

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                category === cat
                  ? "border-accent/40 bg-accent/10 text-accent"
                  : "border-edge text-ink-muted hover:border-white/20 hover:text-ink"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="glass flex items-center gap-2 rounded-full px-4 py-2.5 sm:w-64">
          <Search size={15} className="text-ink-faint" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by stack..."
            className="w-full bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project, i) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
          >
            <TiltCard intensity={6}>
              <GlassCard className="group flex h-full flex-col overflow-hidden p-0">
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-accent/15 to-white/[0.02]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span className="font-display text-3xl font-semibold text-white/10">
                      {project.title.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-30" />
                  <span className="absolute right-3 top-3 z-10 rounded-full border border-edge bg-base/80 px-3 py-1 text-xs font-medium text-ink backdrop-blur-md shadow-md">
                    {project.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">{project.title}</h3>
                  <p className="body-muted mt-2 text-sm">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((s) => (
                      <span key={s} className="rounded-full bg-white/[0.05] px-2.5 py-1 text-xs text-ink-muted">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <button
                      onClick={() => setSelected(project)}
                      className="text-sm font-semibold text-accent hover:text-accent-soft"
                    >
                      View details →
                    </button>
                    <div className="ml-auto flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="GitHub repository"
                          className="text-ink-faint hover:text-ink"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Live demo"
                          className="text-ink-faint hover:text-ink"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </TiltCard>
          </motion.div>
        ))}

        {filtered.length === 0 && (
          <p className="body-muted col-span-full py-16 text-center">
            No projects match that search — try a different keyword or category.
          </p>
        )}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="https://github.com/Chetannaik698"
          target="_blank"
          rel="noreferrer"
          className="btn-ghost group flex items-center gap-2.5 rounded-2xl border border-edge bg-base/40 px-6 py-3 text-sm font-medium text-ink backdrop-blur-md hover:border-accent/40 hover:bg-base/80"
        >
          <Github size={18} className="text-accent transition-transform group-hover:scale-110" />
          <span>Explore more projects & repositories on GitHub</span>
          <ExternalLink size={14} className="text-ink-muted" />
        </a>
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
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl p-8 shadow-glass"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-5 top-5 text-ink-faint hover:text-ink"
              >
                <X size={20} />
              </button>
              {selected.image && (
                <div className="relative mb-6 h-52 w-full overflow-hidden rounded-2xl border border-edge bg-black/40">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              )}
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {selected.category}
              </span>
              <h3 className="font-display text-2xl font-semibold text-ink">{selected.title}</h3>
              <p className="body-muted mt-4">{selected.longDescription}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {selected.stack.map((s) => (
                  <span key={s} className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-ink-muted">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {selected.demo && (
                  <a href={selected.demo} target="_blank" rel="noreferrer" className="btn-primary">
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
                {selected.github && (
                  <a href={selected.github} target="_blank" rel="noreferrer" className="btn-ghost">
                    <Github size={15} /> Source Code
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
