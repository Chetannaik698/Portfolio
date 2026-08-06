import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillGroups[0].category);
  const activeGroup = skillGroups.find((g) => g.category === activeCategory) ?? skillGroups[0];

  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I reach for."
        description="A working toolkit across frontend, backend, and AI — built through real projects, not just tutorials."
      />

      <div className="mt-12 flex flex-wrap gap-2">
        {skillGroups.map((group) => (
          <button
            key={group.category}
            onClick={() => setActiveCategory(group.category)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all",
              activeCategory === group.category
                ? "border-accent/40 bg-accent/10 text-accent"
                : "border-edge text-ink-muted hover:border-white/20 hover:text-ink"
            )}
          >
            {group.category}
          </button>
        ))}
      </div>

      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        {activeGroup.skills.map((skill, i) => (
          <GlassCard key={skill.name} className="p-5" hover>
            <div className="flex items-center justify-between">
              <p className="font-medium text-ink">{skill.name}</p>
              <span className="text-sm text-ink-muted">{skill.level}%</span>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-accent-dim to-accent"
              />
            </div>
          </GlassCard>
        ))}
      </motion.div>
    </section>
  );
}
