import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../../data/portfolio";

export function Education() {
  return (
    <section id="education" className="scroll-mt-28 border-t border-border/60 px-5 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl"
      >
        <p className="mono-caps text-violet">Education</p>
        <div className="glass mt-6 flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <GraduationCap className="size-6" aria-hidden />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight">{education.degree}</h3>
              <p className="mt-1 text-sm text-violet">
                {education.school} · {education.location}
              </p>
            </div>
          </div>
          <p className="mono-caps text-accent/90">{education.year}</p>
        </div>
      </motion.div>
    </section>
  );
}
