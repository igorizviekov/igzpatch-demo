# Active incident metric includes resolved incidents

## Problem

The dashboard's Active incidents metric counts every incident, including resolved ones. This inflates the operational load shown to responders and leadership.

## Reproduction

1. Load data containing open, investigating, monitoring, and resolved incidents.
2. Compare the Active incidents metric with the visible unresolved records.
3. Observe that resolved incidents are included in the total.

## Expected behavior

Only open, investigating, and monitoring incidents count as active. Resolved incidents must be excluded.

## Acceptance criteria

- Resolved incidents do not contribute to the active count.
- All non-resolved statuses continue to count.
- An empty incident list returns zero.
- `npm test` passes on the generated issue branch.

