import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { useCounter } from "@/hooks/useCounter";
import { stats } from "@/data/resume";

function StatCounter({ value, label, active }: { value: number | string; label: string; active: boolean }) {
  const numericVal = typeof value === "number" ? value : parseInt(value, 10) || 0;
  const count = useCounter(numericVal, active);
  const displayVal = typeof value === "string" && isNaN(Number(value)) ? value : count;

  return (
    <div className="text-center">
      <p className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        {displayVal}
        <span className="text-accent">+</span>
      </p>
      <p className="mt-1 text-xs text-ink-muted sm:text-sm">{label}</p>
    </div>
  );
}

const journey = [
  {
    title: "Discovered Code",
    year: "2024",
    description: "Wrote my first line of HTML and got hooked on building things for the web.",
  },
  {
    title: "Started Freelancing",
    year: "2025",
    description: "Took on my first paid project — a landing page for a local business.",
  },
  {
    title: "Began Creating Content",
    year: "2026",
    description: "Started documenting builds on YouTube to teach what I was learning in real time.",
  },
  {
    title: "Went Full Stack + AI",
    year: "2026",
    description: "Expanded into backend systems and started integrating AI into client projects.",
  },
];

export function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About Me"
        title="Building things, learning in public."
        description="I'm a BCA graduate and full stack developer who learns by shipping — and shares the process along the way."
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="body-muted">
            I started out curious about how websites actually worked, and that curiosity turned
            into a full-blown craft. Today I split my time between client freelance work, personal
            AI-powered experiments, and building high-impact web apps — and I film the process for
            anyone learning alongside me.
          </p>
          <p className="body-muted mt-4">
            My goal is simple: build products that feel considered, not templated — and help other
            self-taught developers see that a polished result is just a series of small, deliberate
            decisions.
          </p>

          <div className="mt-8 space-y-5">
            {journey.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-glow" />
                  {i !== journey.length - 1 && <span className="mt-1 h-full w-px flex-1 bg-edge" />}
                </div>
                <div className="pb-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-accent">{item.year}</p>
                  <p className="mt-1 font-semibold text-ink">{item.title}</p>
                  <p className="body-muted mt-1 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <GlassCard className="h-full p-8">
            <h3 className="font-display text-lg font-semibold text-ink">What drives me</h3>
            <ul className="body-muted mt-4 space-y-3 text-sm">
              <li>— Designing interfaces that feel inevitable, not default.</li>
              <li>— Shipping fast without cutting corners on craft.</li>
              <li>— Making AI genuinely useful in everyday products.</li>
              <li>— Teaching what I learn as I learn it.</li>
            </ul>

            <div ref={ref} className="mt-10 grid grid-cols-2 gap-6 border-t border-edge pt-8 sm:grid-cols-3">
              {stats.map((s) => (
                <StatCounter key={s.label} value={s.value} label={s.label} active={inView} />
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
