import { FileDown } from "lucide-react";
import { site } from "../data/portfolio";

type Variant = "primary" | "outline";

const styles: Record<Variant, string> = {
  primary:
    "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground/90 transition hover:border-accent/50 hover:text-accent",
  outline:
    "inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/5 px-6 py-3 text-sm font-semibold text-accent transition hover:bg-accent/10",
};

export function ResumeButton({ variant = "primary" }: { variant?: Variant }) {
  return (
    <a
      href={site.resume.href}
      download
      className={styles[variant]}
    >
      <FileDown className="size-4" />
      {site.resume.label}
    </a>
  );
}
