import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ORBIT_TECH = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind",
  "MongoDB", "Python", "SQL", "OpenAI", "Git",
];

export function TechStack() {
  return (
    <section className="section-shell overflow-hidden">
      <SectionHeading eyebrow="Tech Stack" title="The stack behind the work." align="center" />

      <div className="relative mx-auto mt-16 flex h-[380px] w-full max-w-2xl items-center justify-center sm:h-[440px]">
        {/* Orbit rings */}
        <div className="absolute h-[260px] w-[260px] rounded-full border border-edge sm:h-[320px] sm:w-[320px]" />
        <div className="absolute h-[380px] w-[380px] rounded-full border border-edge sm:h-[440px] sm:w-[440px]" />

        {/* Center node */}
        <div className="glass relative z-10 flex h-20 w-20 items-center justify-center rounded-full text-accent shadow-glow">
          <span className="font-display text-lg font-bold">CN</span>
        </div>

        {/* Outer orbit */}
        <motion.div
          className="absolute h-[380px] w-[380px] sm:h-[440px] sm:w-[440px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {ORBIT_TECH.slice(0, 5).map((tech, i) => {
            const angle = (i / 5) * 2 * Math.PI;
            const radius = 50;
            return (
              <div
                key={tech}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(-50%, -50%) translate(${Math.cos(angle) * radius}%, ${Math.sin(angle) * radius}%)`,
                }}
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="glass glass-hover rounded-full px-3.5 py-2 text-xs font-medium text-ink shadow-glass"
                >
                  {tech}
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* Inner orbit, opposite direction */}
        <motion.div
          className="absolute h-[260px] w-[260px] sm:h-[320px] sm:w-[320px]"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {ORBIT_TECH.slice(5).map((tech, i) => {
            const angle = (i / 5) * 2 * Math.PI;
            const radius = 50;
            return (
              <div
                key={tech}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(-50%, -50%) translate(${Math.cos(angle) * radius}%, ${Math.sin(angle) * radius}%)`,
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="glass glass-hover rounded-full px-3.5 py-2 text-xs font-medium text-ink shadow-glass"
                >
                  {tech}
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
