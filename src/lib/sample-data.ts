import type { Incident } from "@/lib/incidents";

export const sampleIncidents: Incident[] = [
  {
    id: "INC-4821",
    title: "Checkout latency above SLO",
    severity: "critical",
    status: "investigating",
    owner: "Payments",
    dueAt: "2026-06-28T11:30:00.000Z",
  },
  {
    id: "INC-4819",
    title: "Delayed analytics exports",
    severity: "medium",
    status: "open",
    owner: "Data Platform",
    dueAt: "2026-06-28T15:00:00.000Z",
  },
  {
    id: "INC-4812",
    title: "Mobile navigation overlap",
    severity: "high",
    status: "resolved",
    owner: "Web Experience",
    dueAt: "2026-06-27T19:00:00.000Z",
  },
];
