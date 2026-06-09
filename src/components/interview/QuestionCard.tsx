import { useState } from "react";
import type { InterviewQuestion } from "@/data/interviewQuestions";
import { ChevronDown, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const diffColor: Record<string, string> = {
  Easy: "bg-emerald-500/15 text-emerald-400",
  Medium: "bg-amber-500/15 text-amber-400",
  Hard: "bg-rose-500/15 text-rose-400",
};

export function QuestionCard({ q }: { q: InterviewQuestion }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-primary/40">
      <button onClick={() => setOpen((o) => !o)} className="w-full text-left p-5 flex items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium">{q.category}</span>
            <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", diffColor[q.difficulty])}>
              {q.difficulty}
            </span>
          </div>
          <h3 className="mt-2 font-semibold">{q.question}</h3>
        </div>
        <ChevronDown className={cn("h-5 w-5 text-muted-foreground mt-2 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="border-t border-border bg-background/40 p-5 space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">How to answer</p>
            <p className="text-sm leading-relaxed">{q.answer}</p>
          </div>
          <div className="rounded-xl border border-border bg-secondary/40 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              <Lightbulb className="h-3.5 w-3.5" /> Pro tips
            </div>
            <ul className="text-sm space-y-1.5">
              {q.tips.map((t, i) => (
                <li key={i} className="flex gap-2"><span className="text-primary">→</span>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
