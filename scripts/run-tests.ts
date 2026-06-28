import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const issueNumber = process.env.IGZPATCH_ISSUE_NUMBER ?? issueNumberFromBranch();
const testFile = issueNumber && ["1", "2", "3", "4", "5"].includes(issueNumber)
  ? `tests/issue-${issueNumber}.test.ts`
  : "tests/smoke.test.ts";
const tsxCli = resolve("node_modules/tsx/dist/cli.mjs");
const result = spawnSync(process.execPath, [tsxCli, "--test", testFile], {
  stdio: "inherit",
  env: process.env,
});

process.exit(result.status ?? 1);

function issueNumberFromBranch(): string | null {
  const branch = spawnSync("git", ["branch", "--show-current"], { encoding: "utf8" });
  return branch.stdout.match(/issue-(\d+)-/)?.[1] ?? null;
}
