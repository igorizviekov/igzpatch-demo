import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("incident cards collapse to one column on mobile viewports", () => {
  const css = readFileSync("src/app/globals.css", "utf8");
  assert.match(
    css,
    /@media\s*\(max-width:\s*720px\)[\s\S]*?\.incidentGrid\s*\{[\s\S]*?grid-template-columns:\s*1fr/,
  );
});
