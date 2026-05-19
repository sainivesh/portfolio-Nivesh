import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { ResumeButton } from "../ResumeButton";
import { site, sections } from "../../data/portfolio";

export function Contact() {
  return (
    <section id="signal" className="scroll-mt-28 px-5 pb-24 pt-10 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-elevated via-void to-surface p-8 md:p-12">
          <div className="absolute -right-20 -top-20 size-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 size-72 rounded-full bg-violet/10 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-2xl"
          >
            <p className="mono-caps text-accent">{sections.contact.label}</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              {sections.contact.title}
            </h2>
            <p className="mt-4 text-muted">{sections.contact.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ResumeButton variant="outline" />
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-void transition hover:opacity-90"
              >
                <Mail className="size-4" />
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground/90 transition hover:border-accent/40 hover:text-accent"
              >
                <Phone className="size-4" />
                {site.phone}
              </a>
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground/90 transition hover:border-accent/40 hover:text-accent"
                >
                  {s.label}
                  <Send className="size-3.5 opacity-70" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
