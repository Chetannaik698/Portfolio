import { motion } from "framer-motion";
import { Play, Eye, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { videos } from "@/data/media";

export function YouTubeSection() {
  const featured = videos.find((v) => v.featured) ?? videos[0];
  const rest = videos.filter((v) => v.id !== featured.id);

  return (
    <section id="youtube" className="section-shell">
      <SectionHeading
        eyebrow="YouTube"
        title="Science, Tech & Documentaries."
        description="Creating documentaries on technology, science history, modern innovations, and software development."
      />

      <motion.a
        href={featured.url}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group mt-12 block"
      >
        <GlassCard className="grid grid-cols-1 overflow-hidden p-0 md:grid-cols-[1.3fr_1fr]">
          <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-black/40">
            <img
              src={featured.thumbnail}
              alt={featured.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-base shadow-lg transition-transform group-hover:scale-110">
              <Play size={22} className="ml-1 fill-black text-black" />
            </div>
            <span className="absolute bottom-3 right-3 z-10 rounded-md bg-black/80 px-2 py-1 text-xs text-white backdrop-blur-sm">
              {featured.duration}
            </span>
            <span className="absolute left-3 top-3 z-10 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white shadow-glow">
              Latest
            </span>
          </div>
          <div className="flex flex-col justify-center p-8">
            <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-accent">
              {featured.title}
            </h3>
            <p className="body-muted mt-3 text-sm">{featured.description}</p>
            <div className="mt-5 flex items-center gap-4 text-xs text-ink-faint">
              <span className="flex items-center gap-1">
                <Eye size={13} /> {featured.views}
              </span>
              <span>•</span>
              <span>{featured.uploaded}</span>
            </div>
          </div>
        </GlassCard>
      </motion.a>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((video, i) => (
          <motion.a
            key={video.id}
            href={video.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            className="group"
          >
            <GlassCard className="overflow-hidden p-0">
              <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-black/40">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-md transition-transform group-hover:scale-110">
                  <Play size={16} className="ml-0.5 fill-black text-black" />
                </div>
                <span className="absolute bottom-2.5 right-2.5 z-10 flex items-center gap-1 rounded-md bg-black/80 px-2 py-0.5 text-[11px] text-white backdrop-blur-sm">
                  <Clock size={10} /> {video.duration}
                </span>
              </div>
              <div className="p-4">
                <h4 className="line-clamp-2 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                  {video.title}
                </h4>
                <div className="mt-2.5 flex items-center gap-3 text-xs text-ink-faint">
                  <span>{video.views} views</span>
                  <span>•</span>
                  <span>{video.uploaded}</span>
                </div>
              </div>
            </GlassCard>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
