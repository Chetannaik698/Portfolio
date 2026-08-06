import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { testimonials } from "@/data/freelance";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  function next() {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  }

  function prev() {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }

  const current = testimonials[index];

  return (
    <section className="section-shell">
      <SectionHeading eyebrow="Testimonials" title="What clients say." align="center" />

      <div className="relative mx-auto mt-14 max-w-2xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="p-10 text-center">
              <Quote className="mx-auto text-accent/50" size={28} />
              <p className="mt-5 text-lg leading-relaxed text-ink">{current.quote}</p>
              <p className="mt-6 font-semibold text-ink">{current.name}</p>
              <p className="text-sm text-ink-muted">{current.role}</p>
            </GlassCard>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-full text-ink"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-accent" : "w-1.5 bg-white/20"}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-full text-ink"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
