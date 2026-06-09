import { createFileRoute } from "@tanstack/react-router";
import { roadmaps } from "@/data/roadmaps";
import { RoadmapCard } from "@/components/roadmap/RoadmapCard";
import { SectionHeader } from "@/components/common/SectionHeader";

export const Route = createFileRoute("/roadmaps")({
  head: () => ({
    meta: [
      { title: "Technology Roadmaps — CareerCompass" },
      { name: "description", content: "Step-by-step roadmaps for frontend, backend, data science, DevOps and more." },
    ],
  }),
  component: RoadmapsPage,
});

function RoadmapsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeader
        eyebrow="Roadmaps"
        title="From zero to job-ready"
        description="Pick a track. Follow the steps. Build the skills employers actually look for."
      />
      <div className="mt-10 space-y-4">
        {roadmaps.map((r) => <RoadmapCard key={r.id} roadmap={r} />)}
      </div>
    </div>
  );
}
