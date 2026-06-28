import assert from "node:assert/strict";
import test from "node:test";

import { sortIncidentsBySeverity, type Incident } from "../src/lib/incidents";

test("critical incidents are sorted before lower severities", () => {
  const incidents = [
    incident("low", "Low"),
    incident("critical", "Critical"),
    incident("high", "High"),
  ];
  assert.deepEqual(sortIncidentsBySeverity(incidents).map((item) => item.title), [
    "Critical",
    "High",
    "Low",
  ]);
});

function incident(severity: Incident["severity"], title: string): Incident {
  return {
    id: title,
    title,
    severity,
    status: "open",
    owner: "Platform",
    dueAt: "2026-06-28T12:00:00.000Z",
  };
}
