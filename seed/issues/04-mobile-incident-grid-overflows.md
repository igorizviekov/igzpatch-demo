# Incident cards overflow narrow mobile viewports

## Problem

The incident grid uses three fixed-width columns. On phones, the page becomes wider than the viewport and forces horizontal scrolling, making incident details difficult to read.

## Reproduction

1. Open the dashboard at a viewport width below 640px.
2. Scroll to the incident cards.
3. Observe horizontal overflow caused by fixed 320px columns.

## Expected behavior

The grid collapses to a single fluid column on narrow screens without horizontal scrolling. Desktop layouts should remain multi-column.

## Acceptance criteria

- A mobile media query is present.
- The incident grid uses one fluid column on narrow screens.
- Cards can shrink within the viewport.
- Desktop grid behavior remains intact.
- `npm test` passes on the generated issue branch.

