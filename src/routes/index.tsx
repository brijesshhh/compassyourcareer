import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Compass, Map, Briefcase, MessageSquareText, GraduationCap, Target } from "lucide-react";
import { careers } from "@/data/careers";
import { CareerCard } from "@/components/careers/CareerCard";
import { SectionHeader } from "@/components/common/SectionHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CareerCompass — Find your direction in tech & beyond" },
      { name: "description", content: "Explore careers, technology roadmaps, internship & interview prep — built for students." },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: Compass, title: "Career Explorer", desc: "Browse curated career paths with salary, skills, and growth.", to: "/careers" },
  { icon: Map, title: "Tech Roadmaps", desc: "Step-by-step roadmaps from beginner to job-ready.", to: "/roadmaps" },
  { icon: Briefcase, title: "Internship Prep", desc: "Resume, portfolio and application strategies that work.", to: "/internships" },
  { icon: MessageSquareText, title: "Interview Prep", desc: "Top questions across behavioral, technical and system design.", to: "/interviews" },
];

const stats = [
  { value: "50+", label: "Career paths" },
  { value: "20+", label: "Roadmaps" },
  { value: "100+", label: "Interview questions" },
  { value: "100%", label: "Free, forever" },
];

function HomePage() {
  const featured = careers.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl animate-float" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Your guide to a confident career start
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Navigate your <span className="text-gradient">future career</span> with clarity.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              CareerCompass helps students explore careers, master roadmaps, and ace internships &
              interviews — all in one beautifully simple place.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
              >
                Explore careers <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/roadmaps"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors"
              >
                View roadmaps
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold text-gradient">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          eyebrow="What's inside"
          title="Everything you need to launch a career"
          description="Four focused tools that take you from curious student to confident candidate."
          center
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <Link
              key={f.title}
              to={f.to}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent-glow text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              <ArrowRight className="absolute top-6 right-6 h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED CAREERS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <SectionHeader eyebrow="Trending paths" title="Discover your next career" />
          <Link to="/careers" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((c) => <CareerCard key={c.id} career={c} />)}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader eyebrow="How it works" title="Three steps to clarity" center />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "1. Explore", desc: "Browse careers and find paths that match your interests and strengths." },
            { icon: GraduationCap, title: "2. Learn", desc: "Follow curated roadmaps to build the right skills, in the right order." },
            { icon: Briefcase, title: "3. Apply", desc: "Use our internship & interview prep to land your first offer." },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-8">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/20 via-card to-accent-glow/10 p-10 sm:p-16 text-center">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Your career, mapped out.</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Start exploring careers, follow a roadmap, and prep for your first interview — all in one place.
            </p>
            <Link
              to="/careers"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
            >
              Get started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
