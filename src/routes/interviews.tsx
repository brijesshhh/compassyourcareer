import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { interviewQuestions } from "@/data/interviewQuestions";
import { QuestionCard } from "@/components/interview/QuestionCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { cn } from "@/lib/utils";

const categories = ["All", "HR", "Behavioral", "Technical", "System Design"] as const;

export const Route = createFileRoute("/interviews")({
  head: () => ({
    meta: [
      { title: "Interview Preparation — CareerCompass" },
      { name: "description", content: "Top interview questions across HR, behavioral, technical and system design." },
      { property: "og:title", content: "Interview Preparation — CareerCompass" },
      { property: "og:description", content: "Top interview questions across HR, behavioral, technical and system design." },
      { property: "og:url", content: "https://compass-pathfinder-fe.lovable.app/interviews" },
    ],
    links: [
      { rel: "canonical", href: "https://compass-pathfinder-fe.lovable.app/interviews" },
    ],
  }),
  component: InterviewPage,
});

function InterviewPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (cat === "All" ? interviewQuestions : interviewQuestions.filter((q) => q.category === cat)),
    [cat]
  );

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeader
        eyebrow="Interview Prep"
        title="The questions you'll actually be asked"
        description="Strategies and sample answers for every interview round — HR to system design."
      />

      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              cat === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        {filtered.map((q) => <QuestionCard key={q.id} q={q} />)}
      </div>
    </div>
  );
}
