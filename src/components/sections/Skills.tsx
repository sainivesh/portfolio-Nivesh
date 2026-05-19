import { motion } from "framer-motion";
import { skills, sections } from "../../data/portfolio";

export function Skills() {
  return (
    <section id="stack" className="scroll-mt-28 border-y border-border/60 bg-surface/50 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12 max-w-2xl"
        >
          <p className="mono-caps text-violet">{sections.skills.label}</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            {sections.skills.title}
          </h2>
          <p className="mt-4 text-muted">{sections.skills.subtitle}</p>
        </motion.div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <motion.li
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-void/40 p-5 transition hover:border-accent/30 hover:shadow-[0_0_0_1px_rgba(46,233,198,0.08)]">
                <span className="mono-caps text-muted group-hover:text-accent/80">{s.layer}</span>
                <p className="mt-6 font-semibold tracking-tight text-foreground">{s.name}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
