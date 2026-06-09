export interface InterviewQuestion {
  id: string;
  question: string;
  category: "Behavioral" | "Technical" | "System Design" | "HR";
  difficulty: "Easy" | "Medium" | "Hard";
  answer: string;
  tips: string[];
}

export const interviewQuestions: InterviewQuestion[] = [
  {
    id: "tell-me-about-yourself",
    question: "Tell me about yourself.",
    category: "HR",
    difficulty: "Easy",
    answer:
      "Use Present-Past-Future. Current role/study → relevant experience → why you're excited about THIS role. Keep it under 90 seconds.",
    tips: [
      "Don't recite your resume.",
      "End with a hook tying you to the company.",
      "Practice out loud at least 5 times.",
    ],
  },
  {
    id: "biggest-weakness",
    question: "What is your biggest weakness?",
    category: "Behavioral",
    difficulty: "Easy",
    answer:
      "Pick a real, non-critical weakness, explain how you're actively addressing it, and share progress. Avoid cliché humblebrags.",
    tips: ["Be specific.", "Show self-awareness.", "Show growth."],
  },
  {
    id: "conflict",
    question: "Tell me about a time you had conflict with a teammate.",
    category: "Behavioral",
    difficulty: "Medium",
    answer:
      "Use the STAR framework. Focus on how you listened, found common ground, and shipped a great outcome together.",
    tips: ["Never trash-talk.", "Take ownership of your role.", "End with what you learned."],
  },
  {
    id: "reverse-array",
    question: "Reverse a string in-place.",
    category: "Technical",
    difficulty: "Easy",
    answer:
      "Two-pointer approach. Swap characters from both ends until pointers meet. O(n) time, O(1) extra space.",
    tips: ["Talk through the approach first.", "Discuss edge cases (empty, single char).", "State complexity."],
  },
  {
    id: "design-url-shortener",
    question: "Design a URL shortener like bit.ly.",
    category: "System Design",
    difficulty: "Hard",
    answer:
      "Clarify requirements → estimate scale → API design → data model → encoding strategy (base62 of an ID) → storage → caching → analytics. Discuss trade-offs.",
    tips: [
      "Start with requirements, not solutions.",
      "Estimate QPS and storage early.",
      "Discuss trade-offs explicitly.",
    ],
  },
  {
    id: "why-company",
    question: "Why do you want to work here?",
    category: "HR",
    difficulty: "Easy",
    answer:
      "Mention something specific: a product, a value, a recent announcement. Tie it back to your goals.",
    tips: ["Avoid generic answers.", "Research the company for 30 min.", "Mention a real product moment."],
  },
  {
    id: "fizzbuzz",
    question: "Write FizzBuzz.",
    category: "Technical",
    difficulty: "Easy",
    answer:
      "Loop 1..n. If divisible by 15 print FizzBuzz, by 3 Fizz, by 5 Buzz, else the number. Watch order of checks.",
    tips: ["Order matters: check 15 first.", "Discuss edge cases.", "Mention readability."],
  },
  {
    id: "design-chat",
    question: "Design a real-time chat app.",
    category: "System Design",
    difficulty: "Hard",
    answer:
      "Requirements → WebSockets vs polling → message broker → storage → presence → delivery guarantees → scaling fan-out.",
    tips: ["Discuss delivery semantics.", "Cover offline support.", "Show you understand trade-offs."],
  },
];
