# RelayOps Incident Board

A deliberately small, production-shaped Next.js dashboard used to demonstrate [IgzPatch](https://github.com/igorizviekov/igz-patch) issue-to-draft-PR runs.

## Seeded scenarios

The files in `seed/issues` are published as GitHub issues `#1` through `#5`. Add the `igz:fix` label to one issue at a time.

| Issue | Failure type | Deterministic gate |
| --- | --- | --- |
| #1 | Severity ordering logic | Critical-first unit test |
| #2 | Incorrect operational metric | Status filtering unit test |
| #3 | SLA boundary condition | Exact-timestamp unit test |
| #4 | Mobile grid overflow | Responsive CSS contract test |
| #5 | Toolbar clipping | Fluid-width and wrapping CSS contract test |

`npm test` selects the issue-specific test from `IGZPATCH_ISSUE_NUMBER` inside the IgzPatch sandbox, or from an `igzpatch/issue-<number>-...` branch in CI. On `main`, it runs a passing smoke test so the seeded repository starts green.

## Local development

```bash
npm install
npm test
npm run typecheck
npm run build
npm run dev
```

`npm run test:all` intentionally exposes every seeded failure until all scenarios have been repaired.
