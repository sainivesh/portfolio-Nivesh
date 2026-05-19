import { motion } from "framer-motion";
import { ArrowDownRight, Layers } from "lucide-react";
import { ResumeButton } from "../ResumeButton";
import { site } from "../../data/portfolio";

export function Hero() {
  return (
    <section className="relative px-5 pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mono-caps mb-6 text-accent">
            <span className="inline-flex items-center gap-2">
              <Layers className="size-3.5 text-accent" aria-hidden />
              {site.tagline}
            </span>
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {site.hero.lineBefore}{" "}
            <span className="text-gradient">{site.hero.highlight}</span>
            <br />
            {site.hero.lineAfter}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            {site.name} — {site.role}. {site.location}. {site.availability}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-void transition hover:bg-accent/90"
            >
              View selected work
              <ArrowDownRight className="size-4" />
            </a>
            <ResumeButton variant="outline" />
            <a
              href="#signal"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground/90 transition hover:border-accent/50 hover:text-accent"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
