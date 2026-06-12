import { createFileRoute } from "@tanstack/react-router";
import { internshipResources } from "@/data/resources";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/internships")({
  head: () => ({
    meta: [
      { title: "Internship Preparation — CareerCompass" },
      { name: "description", content: "Resume, portfolio, applications and networking guides for landing your first internship." },
      { property: "og:title", content: "Internship Preparation — CareerCompass" },
      { property: "og:description", content: "Resume, portfolio, applications and networking guides for landing your first internship." },
      { property: "og:url", content: "https://compass-pathfinder-fe.lovable.app/internships" },
    ],
    links: [
      { rel: "canonical", href: "https://compass-pathfinder-fe.lovable.app/internships" },
    ],
  }),
  component: InternshipsPage,
});

function InternshipsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeader
        eyebrow="Internship Prep"
        title="Land your first offer with confidence"
        description="The playbook we wish we had — resume, portfolio, applications, networking and behavioral prep."
      />

      <div className="mt-12 space-y-6">
        {internshipResources.map((r, idx) => (
          <article
            key={r.id}
            className="rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {idx + 1}
              </span>
              <span className="rounded-full bg-secondary px-3 py-0.5 text-xs font-medium">{r.category}</span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight">{r.title}</h3>
            <p className="mt-2 text-muted-foreground">{r.description}</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {r.tips.map((t, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
