import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects, sections } from "../../data/portfolio";

export function Projects() {
  return (
    <section id="work" className="scroll-mt-28 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <p className="mono-caps text-violet">{sections.projects.label}</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            {sections.projects.title}
          </h2>
          <p className="mt-4 text-muted">{sections.projects.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col rounded-2xl border border-border bg-elevated/60 p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold tracking-tight">{p.title}</h3>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 rounded-lg p-2 text-muted transition hover:bg-void hover:text-accent"
                    aria-label={`${p.linkLabel ?? "Open"} — ${p.title}`}
                    title={p.linkLabel ?? undefined}
                  >
                    <ExternalLink className="size-4" />
                  </a>
                ) : null}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 text-sm font-medium text-accent hover:underline"
                >
                  {p.linkLabel}
                </a>
              ) : null}
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-void/60 px-3 py-1 font-mono text-[11px] text-foreground/80"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mono-caps mt-6 border-t border-border pt-4 text-accent/70">
                ref · {p.ref}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
