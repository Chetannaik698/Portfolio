import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, Layers } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { services, pricingTiers, process, faqs } from "@/data/freelance";
import { cn } from "@/lib/utils";

export function Freelancing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="freelancing" className="section-shell">
      <SectionHeading
        eyebrow="Freelancing"
        title="Let's build something for your business."
        description="I take on a limited number of freelance projects each month — from landing pages to full AI-powered products."
      />

      {/* Services */}
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <GlassCard className="h-full p-6">
              <Layers size={18} className="text-accent" />
              <h3 className="mt-4 font-semibold text-ink">{service.title}</h3>
              <p className="body-muted mt-2 text-sm">{service.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Process */}
      <div className="mt-20">
        <h3 className="font-display text-2xl font-semibold text-ink">How we'll work together</h3>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative"
            >
              <span className="font-display text-4xl font-bold text-white/10">0{i + 1}</span>
              <p className="mt-2 font-semibold text-ink">{step.step}</p>
              <p className="body-muted mt-1 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="mt-20">
        <h3 className="font-display text-2xl font-semibold text-ink">Simple, transparent pricing</h3>
        <div className="mt-8 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <GlassCard
                className={cn(
                  "flex h-full flex-col p-8",
                  tier.highlighted && "border-accent/40 shadow-glow"
                )}
              >
                {tier.highlighted && (
                  <span className="mb-4 inline-block w-fit rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                    Most Popular
                  </span>
                )}
                <h4 className="font-display text-xl font-semibold text-ink">{tier.name}</h4>
                <p className="mt-2 font-display text-3xl font-bold text-ink">{tier.price}</p>
                <p className="body-muted mt-2 text-sm">{tier.description}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-muted">
                      <Check size={15} className="mt-0.5 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={cn("mt-8", tier.highlighted ? "btn-primary" : "btn-ghost")}
                >
                  Get Started
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h3 className="font-display text-2xl font-semibold text-ink">Frequently asked questions</h3>
          <p className="body-muted mt-3">Still curious about something? Reach out directly and I'll answer personally.</p>
          <MagneticButton
            className="mt-6"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start a Project
          </MagneticButton>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <GlassCard key={faq.question} className="overflow-hidden p-0" hover={false}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-medium text-ink">{faq.question}</span>
                <ChevronDown
                  size={16}
                  className={cn("shrink-0 text-ink-faint transition-transform", openFaq === i && "rotate-180")}
                />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="body-muted px-6 pb-5 text-sm">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
