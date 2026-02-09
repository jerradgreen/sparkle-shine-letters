

## Implement Topper Field Visibility via Space-Character Prefill

### Summary
When `showTopper=true` is in the URL (from quote selector or nav popup) and no `topper` value exists, prefill the Topper field with a single space to trigger Cognito's "Topper is filled out" condition. Remove the DOM-polling reveal logic since prefill handles it more reliably.

### Flow Behavior (unchanged)
- **Visualizer with topper**: Topper param has value, field prefilled and visible -- no change
- **Visualizer without topper**: No topper params at all, field stays hidden -- no change  
- **Quote selector / nav popup**: `showTopper=true`, field prefilled with space, becomes visible

### Changes

**File: `src/pages/forms/EventStandupQuote.tsx`**

1. In the prefill data block (around lines 30-37), add a condition: if `showTopper` is true and `topper` is empty, set `prefillData['Topper']` and `prefillData['Topper?']` to `" "` (single space)

2. Remove the DOM-polling `useEffect` block (lines 128-185) that was added in the last edit to "reveal" the Topper field by walking the DOM. This approach doesn't work because Cognito doesn't render the field at all until its condition is met. The prefill approach replaces it.

### Why This Works
Cognito's conditional logic for the Topper field is "show when Topper is filled out." A single space counts as "filled out" to Cognito, so it renders the field. The user sees an effectively empty field they can type into or leave blank.

