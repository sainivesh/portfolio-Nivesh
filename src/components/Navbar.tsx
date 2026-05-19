import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ResumeButton } from "./ResumeButton";
import { site } from "../data/portfolio";

const links = [
  { href: "#thesis", label: "Thesis" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Work" },
  { href: "#path", label: "Path" },
  { href: "#signal", label: "Signal" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a href="#" className="group flex items-center gap-2">
          <span className="font-mono text-xs font-medium text-accent">◈</span>
          <span className="text-sm font-semibold tracking-tight text-foreground/90 transition group-hover:text-accent">
            {site.brand}
          </span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-elevated hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <ResumeButton variant="primary" />
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-muted md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass mx-4 mt-2 overflow-hidden rounded-xl md:hidden"
          >
            <div className="flex flex-col gap-1 p-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-4 py-3 text-sm text-foreground/90 hover:bg-void/50"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <div className="px-2 py-2">
                <ResumeButton variant="outline" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
