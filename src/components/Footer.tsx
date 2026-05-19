import { site } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 text-sm text-muted md:flex-row md:items-center">
        <p>
          © {new Date().getFullYear()} {site.shortName}. Crafted for clarity in a noisy space.
        </p>
        <p className="font-mono text-xs text-foreground/40">
          {site.footerTagline}
        </p>
      </div>
    </footer>
  );
}
