import assert from "node:assert/strict";
import test from "node:test";

import { sampleIncidents } from "../src/lib/sample-data";

test("demo data exposes a compact production-like incident queue", () => {
  assert.equal(sampleIncidents.length, 3);
  assert.ok(sampleIncidents.every((incident) => incident.id.startsWith("INC-")));
});
