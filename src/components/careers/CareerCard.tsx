import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Career } from "@/data/careers";

export function CareerCard({ career }: { career: Career }) {
  return (
    <Link
      to="/careers/$careerId"
      params={{ careerId: career.id }}
      className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-glow hover:-translate-y-1"
    >
      <div className="flex items-start justify-between">
        <div className="text-4xl">{career.icon}</div>
        <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
          {career.category}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight">{career.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground flex-1">{career.shortDescription}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {career.skills.slice(0, 3).map((s) => (
          <span key={s} className="rounded-md bg-secondary/60 px-2 py-1 text-xs text-foreground/80">
            {s}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between text-sm">
        <span className="font-medium text-primary">{career.averageSalary.split(" ")[0]}+</span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
      </div>
    </Link>
  );
}
