import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SOCIALS } from "@/data/socials";

const CONTACT_DETAILS = [
  { icon: Mail, label: "Email", value: "chetannnaik03@gmail.com", href: "mailto:chetannnaik03@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 86604 84797", href: "tel:+918660484797" },
  { icon: MapPin, label: "Location", value: "Murdeshwar, India", href: undefined },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // No backend — this is a static UI. Wire this up to an email service
    // (e.g. Formspree, Resend) when deploying.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Let's start a conversation."
        description="Have a project in mind, or just want to say hi? My inbox is always open."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {CONTACT_DETAILS.map((detail) => (
            <GlassCard key={detail.label} className="flex items-center gap-4 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <detail.icon size={18} />
              </div>
              <div>
                <p className="text-xs text-ink-faint">{detail.label}</p>
                {detail.href ? (
                  <a href={detail.href} className="text-sm font-medium text-ink hover:text-accent">
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-ink">{detail.value}</p>
                )}
              </div>
            </GlassCard>
          ))}

          <GlassCard className="p-5">
            <p className="text-xs text-ink-faint">Find me elsewhere</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-full text-ink-muted hover:text-accent"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GlassCard className="p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Send size={22} />
                </div>
                <p className="mt-4 font-display text-lg font-semibold text-ink">Message sent</p>
                <p className="body-muted mt-1 max-w-xs text-sm">
                  Thanks for reaching out — I'll get back to you within a day or two.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-xs font-medium text-ink-muted">Name</label>
                    <input
                      id="name"
                      required
                      type="text"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border border-edge bg-white/[0.02] px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent/50 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs font-medium text-ink-muted">Email</label>
                    <input
                      id="email"
                      required
                      type="email"
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-edge bg-white/[0.02] px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent/50 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="text-xs font-medium text-ink-muted">Subject</label>
                  <input
                    id="subject"
                    required
                    type="text"
                    placeholder="What's this about?"
                    className="mt-2 w-full rounded-xl border border-edge bg-white/[0.02] px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent/50 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-xs font-medium text-ink-muted">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me a bit about your project..."
                    className="mt-2 w-full resize-none rounded-xl border border-edge bg-white/[0.02] px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent/50 focus:outline-none"
                  />
                </div>
                <MagneticButton type="submit" className="w-full sm:w-auto">
                  <Send size={15} /> Send Message
                </MagneticButton>
              </form>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
