import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Github, Linkedin, Mail, Globe, Code2, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Developer — CareerCompass" },
      { name: "description", content: "Meet the developer behind CareerCompass." },
      { property: "og:title", content: "About the Developer — CareerCompass" },
      { property: "og:description", content: "Meet the developer behind CareerCompass." },
      { property: "og:url", content: "https://compass-pathfinder-fe.lovable.app/about" },
    ],
    links: [
      { rel: "canonical", href: "https://compass-pathfinder-fe.lovable.app/about" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeader eyebrow="About" title="Hi, I'm building CareerCompass" />

      <div className="mt-10 rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-accent-glow/5 p-8 sm:p-12">
        <div className="flex items-center gap-6 flex-wrap">
          <div className="grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br from-primary to-accent-glow text-4xl shadow-glow">
            👨‍💻
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">A student-developer building for students</h2>
            <p className="mt-2 text-muted-foreground">
              Full-stack curious · React enthusiast · Always learning
            </p>
          </div>
        </div>

        <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
          I built CareerCompass because choosing a career path feels overwhelming. There are
          countless YouTube videos, scattered roadmaps, and outdated advice. I wanted a single,
          beautifully simple place that helps students explore careers, learn the right skills,
          and prep for real interviews — no signup, no paywall, no noise.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-3 gap-5">
        {[
          { icon: Code2, title: "Built with", value: "React + TanStack + Tailwind" },
          { icon: Heart, title: "Made for", value: "Curious students" },
          { icon: Globe, title: "Open & free", value: "Always, forever" },
        ].map((b) => (
          <div key={b.title} className="rounded-2xl border border-border bg-card p-6">
            <b.icon className="h-5 w-5 text-primary" />
            <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{b.title}</p>
            <p className="mt-1 font-semibold">{b.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-card p-8">
        <h3 className="text-lg font-semibold">Get in touch</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Have feedback or want to contribute? Reach out — I'd love to hear from you.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <SocialLink icon={Github} label="GitHub" href="https://github.com" />
          <SocialLink icon={Linkedin} label="LinkedIn" href="https://linkedin.com" />
          <SocialLink icon={Mail} label="Email" href="mailto:hello@example.com" />
        </div>
      </div>
    </div>
  );
}

function SocialLink({ icon: Icon, label, href }: { icon: any; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors"
    >
      <Icon className="h-4 w-4" /> {label}
    </a>
  );
}
