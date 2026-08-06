import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { blogPosts } from "@/data/media";

export function Blog() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p !== featured);

  return (
    <section id="blog" className="section-shell">
      <SectionHeading
        eyebrow="Writing"
        title="Notes from the build."
        description="Longer-form thoughts on freelancing, frontend craft, and working with AI."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="group flex h-full cursor-pointer flex-col justify-between p-8">
            <div>
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {featured.category}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink transition-colors group-hover:text-accent">
                {featured.title}
              </h3>
              <p className="body-muted mt-3">{featured.excerpt}</p>
            </div>
            <div className="mt-8 flex items-center justify-between text-xs text-ink-faint">
              <span className="flex items-center gap-3">
                <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                <span>{featured.date}</span>
              </span>
              <ArrowUpRight size={16} className="text-ink-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
            </div>
          </GlassCard>
        </motion.div>

        <div className="grid grid-cols-1 gap-4">
          {rest.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlassCard className="group cursor-pointer p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium text-accent">{post.category}</span>
                    <h4 className="mt-1.5 font-semibold text-ink transition-colors group-hover:text-accent">
                      {post.title}
                    </h4>
                    <p className="body-muted mt-2 text-sm">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-ink-faint">
                      <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="mt-1 shrink-0 text-ink-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
