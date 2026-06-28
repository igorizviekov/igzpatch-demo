import assert from "node:assert/strict";
import test from "node:test";

import { isSlaBreached } from "../src/lib/incidents";

test("an incident is breached at the exact SLA deadline", () => {
  const deadline = "2026-06-28T12:00:00.000Z";
  assert.equal(isSlaBreached(deadline, new Date(deadline)), true);
});
