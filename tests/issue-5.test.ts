import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("toolbar remains fluid and wraps controls on narrow screens", () => {
  const css = readFileSync("src/app/globals.css", "utf8");
  assert.match(css, /\.toolbar\s*\{[\s\S]*?width:\s*100%/);
  assert.match(
    css,
    /@media\s*\(max-width:\s*640px\)[\s\S]*?\.toolbar\s*\{[\s\S]*?flex-wrap:\s*wrap/,
  );
});
