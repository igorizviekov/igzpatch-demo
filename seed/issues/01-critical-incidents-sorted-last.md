# Critical incidents appear below low-severity incidents

## Problem

The incident board sorts low-severity incidents before critical incidents. During an outage, responders must scan the full list to find the most urgent work.

## Reproduction

1. Open the incident board with incidents of mixed severity.
2. Review the first incident card.
3. Observe that low-severity incidents appear before critical incidents.

## Expected behavior

Incidents are sorted from highest to lowest severity: critical, high, medium, then low. Incidents with the same severity retain their original order.

## Acceptance criteria

- Critical incidents appear first.
- High, medium, and low incidents follow in that order.
- The existing public API remains unchanged.
- `npm test` passes on the generated issue branch.

