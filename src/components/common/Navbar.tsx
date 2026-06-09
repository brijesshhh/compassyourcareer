import { Link, useRouterState } from "@tanstack/react-router";
import { Moon, Sun, Menu, X, Compass } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/careers", label: "Careers" },
  { to: "/roadmaps", label: "Roadmaps" },
  { to: "/internships", label: "Internships" },
  { to: "/interviews", label: "Interviews" },
  { to: "/about", label: "About" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent-glow shadow-glow transition-transform group-hover:scale-105">
            <Compass className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold tracking-tight">CareerCompass</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.to || (l.to !== "/" && pathname.startsWith(l.to));
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground hover:bg-secondary transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-border bg-card"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
