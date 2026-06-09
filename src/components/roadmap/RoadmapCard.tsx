import type { Roadmap } from "@/data/roadmaps";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const diffColor = {
  Beginner: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Intermediate: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  Advanced: "bg-rose-500/15 text-rose-400 border-rose-500/30",
};

export function RoadmapCard({ roadmap }: { roadmap: Roadmap }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-primary/40">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-4 p-6 text-left"
      >
        <div className="text-3xl">{roadmap.icon}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-lg font-semibold">{roadmap.title}</h3>
            <span className={cn("rounded-full border px-2 py-0.5 text-xs font-medium", diffColor[roadmap.difficulty])}>
              {roadmap.difficulty}
            </span>
            <span className="text-xs text-muted-foreground">· {roadmap.duration}</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{roadmap.tagline}</p>
        </div>
        <ChevronDown className={cn("h-5 w-5 text-muted-foreground transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="border-t border-border bg-background/40 p-6 pt-4">
          <ol className="relative space-y-6 ml-2">
            {roadmap.steps.map((step, i) => (
              <li key={i} className="relative pl-8">
                <span className="absolute left-0 top-1 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-primary to-accent-glow text-xs font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                {i < roadmap.steps.length - 1 && (
                  <span className="absolute left-3 top-7 bottom-[-1.5rem] w-px bg-border" />
                )}
                <h4 className="font-semibold">{step.title}</h4>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {step.topics.map((t) => (
                    <span key={t} className="rounded-md bg-secondary/60 px-2 py-1 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
                {step.resources.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-3 text-xs">
                    {step.resources.map((r) => (
                      <a
                        key={r.url}
                        href={r.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary hover:underline"
                      >
                        ↗ {r.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
