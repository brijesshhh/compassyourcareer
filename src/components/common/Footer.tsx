import { Compass } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent-glow">
              <Compass className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold">CareerCompass</p>
              <p className="text-xs text-muted-foreground">Your guide to the right career.</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CareerCompass. Built for curious students.
          </p>
        </div>
      </div>
    </footer>
  );
}
