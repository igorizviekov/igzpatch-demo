# Incident at its SLA deadline is not marked breached

## Problem

An unresolved incident is only marked as breached after the current time moves beyond its SLA deadline. At the exact deadline timestamp, the dashboard incorrectly reports the incident as still within SLA.

## Reproduction

1. Create an unresolved incident with an SLA deadline of `2026-06-28T12:00:00.000Z`.
2. Evaluate it at exactly `2026-06-28T12:00:00.000Z`.
3. Observe that the incident is not marked breached.

## Expected behavior

An unresolved incident is breached when the current time is equal to or later than its deadline. Resolved incidents remain exempt.

## Acceptance criteria

- Equality at the deadline is treated as breached.
- Times before the deadline remain within SLA.
- Resolved incidents never report an SLA breach.
- `npm test` passes on the generated issue branch.

