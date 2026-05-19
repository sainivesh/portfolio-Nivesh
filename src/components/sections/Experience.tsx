import { motion } from "framer-motion";
import { experience, sections } from "../../data/portfolio";

export function Experience() {
  return (
    <section id="path" className="scroll-mt-28 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <p className="mono-caps text-violet">{sections.experience.label}</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            {sections.experience.title}
          </h2>
          <p className="mt-4 text-muted">{sections.experience.subtitle}</p>
        </motion.div>

        <ul className="relative ml-1.5 space-y-10 border-l border-border pl-9 md:ml-2 md:pl-10">
          {experience.map((e, i) => (
            <motion.li
              key={e.period}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05 }}
              className="relative"
            >
              <span
                className="absolute -left-[23px] top-1.5 size-2.5 rounded-full border-2 border-accent bg-void md:-left-[26px]"
                aria-hidden
              />
              <p className="mono-caps text-accent/80">{e.period}</p>
              <h3 className="mt-2 text-xl font-bold">{e.title}</h3>
              <p className="mt-0.5 text-sm text-violet">{e.org}</p>
              <div className="glass mt-4 max-w-2xl rounded-2xl p-5">
                <p className="text-sm leading-relaxed text-muted">{e.detail}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
