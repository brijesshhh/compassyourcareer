import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, TrendingUp, GraduationCap, Building2, Check, X, ListChecks } from "lucide-react";
import { careers } from "@/data/careers";

export const Route = createFileRoute("/careers/$careerId")({
  head: ({ params }) => {
    const c = careers.find((x) => x.id === params.careerId);
    return {
      meta: [
        { title: c ? `${c.title} — CareerCompass` : "Career — CareerCompass" },
        { name: "description", content: c?.shortDescription ?? "Career details" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="text-3xl font-bold">Career not found</h1>
      <Link to="/careers" className="mt-6 inline-block text-primary hover:underline">
        ← Back to all careers
      </Link>
    </div>
  ),
  component: CareerDetailsPage,
});

function CareerDetailsPage() {
  const { careerId } = Route.useParams();
  const career = careers.find((c) => c.id === careerId);
  if (!career) {
    throw notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <Link
        to="/careers"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" /> Back to careers
      </Link>

      {/* HEADER */}
      <div className="mt-6 rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-accent-glow/5 p-8 sm:p-12">
        <div className="flex items-start gap-6 flex-wrap">
          <div className="text-6xl">{career.icon}</div>
          <div className="flex-1 min-w-0">
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">{career.category}</span>
            <h1 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight">{career.title}</h1>
            <p className="mt-3 text-lg text-muted-foreground">{career.description}</p>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <Stat icon={TrendingUp} label="Avg Salary" value={career.averageSalary} />
          <Stat icon={GraduationCap} label="Education" value={career.education} />
          <Stat icon={Building2} label="Growth" value={career.growth} />
        </div>
      </div>

      {/* SKILLS */}
      <Section title="Key Skills" icon={ListChecks}>
        <div className="flex flex-wrap gap-2">
          {career.skills.map((s) => (
            <span key={s} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
              {s}
            </span>
          ))}
        </div>
      </Section>

      {/* DAILY TASKS */}
      <Section title="A day in the life">
        <ul className="space-y-3">
          {career.dailyTasks.map((t, i) => (
            <li key={i} className="flex gap-3 rounded-xl border border-border bg-card p-4">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                {i + 1}
              </span>
              <span className="text-sm">{t}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* PROS / CONS */}
      <div className="mt-12 grid md:grid-cols-2 gap-5">
        <ProsCons title="Pros" items={career.pros} positive />
        <ProsCons title="Cons" items={career.cons} positive={false} />
      </div>

      {/* COMPANIES */}
      <Section title="Top Companies Hiring">
        <div className="flex flex-wrap gap-2">
          {career.topCompanies.map((c) => (
            <span key={c} className="rounded-lg border border-border bg-card px-4 py-2 text-sm">
              {c}
            </span>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Stat({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card/70 backdrop-blur p-5">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
        <Icon className="h-3.5 w-3.5" /> {label}
      </div>
      <p className="mt-2 text-sm font-semibold">{value}</p>
    </div>
  );
}

function Section({ title, icon: Icon, children }: { title: string; icon?: any; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        {Icon && <Icon className="h-5 w-5 text-primary" />} {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function ProsCons({ title, items, positive }: { title: string; items: string[]; positive: boolean }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((i, idx) => (
          <li key={idx} className="flex gap-2 text-sm">
            {positive ? (
              <Check className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
            ) : (
              <X className="h-4 w-4 shrink-0 text-rose-500 mt-0.5" />
            )}
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
