import { motion } from "framer-motion";
import { Download, GraduationCap, Briefcase, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { education, experience, achievements, TimelineItem } from "@/data/resume";

function TimelineColumn({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof GraduationCap;
  title: string;
  items: TimelineItem[];
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Icon size={18} className="text-accent" />
        <h3 className="font-semibold text-ink">{title}</h3>
      </div>
      <div className="mt-6 space-y-6 border-l border-edge pl-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[26px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-glow" />
            <p className="text-xs font-medium uppercase tracking-wide text-accent">{item.year}</p>
            <p className="mt-1 font-medium text-ink">{item.title}</p>
            <p className="text-sm text-ink-muted">{item.subtitle}</p>
            <p className="body-muted mt-1 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Resume() {
  return (
    <section id="resume" className="section-shell">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Resume"
          title="My journey so far."
          description="Education, experience, and a few milestones I'm proud of — or grab the full PDF."
        />
        <a
          href="/Chetan%20Naik%20-%20Full%20Stack%20Developer.pdf"
          target="_blank"
          rel="noreferrer"
          download="Chetan_Naik_Resume.pdf"
          className="btn-primary shrink-0"
        >
          <Download size={15} /> Download Resume
        </a>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <TimelineColumn icon={GraduationCap} title="Education" items={education} />
        <TimelineColumn icon={Briefcase} title="Experience" items={experience} />
      </div>

      <div className="mt-16">
        <div className="flex items-center gap-2">
          <Award size={18} className="text-accent" />
          <h3 className="font-semibold text-ink">Achievements</h3>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <GlassCard className="h-full p-5">
                <p className="font-medium text-ink">{a.title}</p>
                <p className="body-muted mt-1 text-sm">{a.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
