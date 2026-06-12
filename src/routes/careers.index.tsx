import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { careers, categories } from "@/data/careers";
import { CareerCard } from "@/components/careers/CareerCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/careers/")({
  head: () => ({
    meta: [
      { title: "Career Explorer — CareerCompass" },
      { name: "description", content: "Browse curated careers by category. See salary, skills and growth at a glance." },
      { property: "og:title", content: "Career Explorer — CareerCompass" },
      { property: "og:description", content: "Browse curated careers by category. See salary, skills and growth at a glance." },
      { property: "og:url", content: "https://compass-pathfinder-fe.lovable.app/careers" },
    ],
    links: [
      { rel: "canonical", href: "https://compass-pathfinder-fe.lovable.app/careers" },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    return careers.filter((c) => {
      const matchesCat = category === "All" || c.category === category;
      const q = query.toLowerCase();
      const matchesQ =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.shortDescription.toLowerCase().includes(q) ||
        c.skills.some((s) => s.toLowerCase().includes(q));
      return matchesCat && matchesQ;
    });
  }, [query, category]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeader
        eyebrow="Career Explorer"
        title="Find a path that fits you"
        description="Search across our curated set of careers. Filter by category and discover what each one is really like."
      />

      <div className="mt-10 flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
        <div className="relative w-full lg:max-w-sm">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search careers, skills..."
            className="w-full rounded-full border border-border bg-card pl-11 pr-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-medium border transition-colors",
                category === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">No careers match your search.</p>
      ) : (
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((c) => <CareerCard key={c.id} career={c} />)}
        </div>
      )}
    </div>
  );
}
