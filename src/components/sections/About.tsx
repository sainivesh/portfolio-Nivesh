import { motion } from "framer-motion";
import { site } from "../../data/portfolio";

export function About() {
  return (
    <section id="thesis" className="scroll-mt-28 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <p className="mono-caps text-violet">01 — Thesis</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              {site.about.sectionTitle}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-8"
          >
            <p className="font-mono text-sm leading-relaxed text-accent/90 md:text-base">
              {site.thesisComment}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/85 md:text-xl">
              {site.thesis}
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {site.about.principles.map((c) => (
                <motion.div key={c.title} className="glass rounded-2xl p-5">
                  <h3 className="font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
