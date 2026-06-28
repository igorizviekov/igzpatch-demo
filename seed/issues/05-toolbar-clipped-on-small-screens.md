# Filter toolbar is clipped on small screens

## Problem

The filter toolbar has a fixed width and keeps every control on one row. On tablets and phones, controls extend beyond the viewport and some actions become inaccessible.

## Reproduction

1. Open the dashboard at a viewport width below 900px.
2. Inspect the filter toolbar.
3. Observe that the toolbar remains 900px wide and controls do not wrap.

## Expected behavior

The toolbar should fill the available width and controls should wrap when horizontal space is limited.

## Acceptance criteria

- The toolbar does not declare a fixed pixel width.
- Its width is constrained to the available container.
- Controls can wrap onto additional rows.
- Existing spacing and desktop presentation remain readable.
- `npm test` passes on the generated issue branch.

