export interface PrepResource {
  id: string;
  title: string;
  description: string;
  category: "Resume" | "Application" | "Skills" | "Networking" | "Behavior";
  tips: string[];
}

export const internshipResources: PrepResource[] = [
  {
    id: "resume",
    title: "Crafting a Standout Resume",
    description:
      "A great resume is concise, results-oriented, and tailored to the role.",
    category: "Resume",
    tips: [
      "Keep it to one page — recruiters skim in 7 seconds.",
      "Lead bullets with strong verbs: 'Built', 'Shipped', 'Reduced'.",
      "Quantify impact: numbers, %, time saved.",
      "Use a clean single-column layout, no photos.",
      "Tailor the top third for every application.",
    ],
  },
  {
    id: "portfolio",
    title: "Building a Portfolio That Wins",
    description:
      "Your portfolio is proof of work. Pick depth over breadth.",
    category: "Skills",
    tips: [
      "3 great projects beat 10 average ones.",
      "Write a short case study: problem → approach → outcome.",
      "Host live demos and link the code.",
      "Include teamwork or open-source contributions.",
    ],
  },
  {
    id: "applications",
    title: "The Application Strategy",
    description:
      "Volume matters early, then narrow as you learn what fits.",
    category: "Application",
    tips: [
      "Apply to 5–10 roles per week consistently.",
      "Use referrals — 40% of hires come through them.",
      "Track every application in a sheet.",
      "Customize your cover letter in 3 sentences max.",
    ],
  },
  {
    id: "networking",
    title: "Networking Without Cringe",
    description:
      "Most internships are found through people, not portals.",
    category: "Networking",
    tips: [
      "Send 5 LinkedIn DMs a week to alumni.",
      "Ask for advice, not jobs.",
      "Attend 1 meetup or hackathon a month.",
      "Follow up after every conversation.",
    ],
  },
  {
    id: "soft-skills",
    title: "Soft Skills Recruiters Test For",
    description:
      "Communication and ownership often decide who gets the offer.",
    category: "Behavior",
    tips: [
      "Practice the STAR format: Situation, Task, Action, Result.",
      "Prepare 5 stories you can adapt to any question.",
      "Always ask 2 thoughtful questions at the end.",
      "Send a thank-you note within 24 hours.",
    ],
  },
];
