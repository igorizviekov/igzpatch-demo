import assert from "node:assert/strict";
import test from "node:test";

import { countActiveIncidents, type Incident } from "../src/lib/incidents";

test("resolved incidents are excluded from the active incident metric", () => {
  const incidents: Incident[] = [
    { id: "1", title: "Open", severity: "high", status: "open", owner: "A", dueAt: "2026-06-28T12:00:00Z" },
    { id: "2", title: "Investigating", severity: "critical", status: "investigating", owner: "B", dueAt: "2026-06-28T12:00:00Z" },
    { id: "3", title: "Resolved", severity: "medium", status: "resolved", owner: "C", dueAt: "2026-06-28T12:00:00Z" },
  ];
  assert.equal(countActiveIncidents(incidents), 2);
});
