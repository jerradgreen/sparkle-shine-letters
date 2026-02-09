

## Make Cognito "Topper?" Field Visible When Coming from Quote Selector/Nav Popup

### Problem
When users click "Stand-Up Letters" from the quote selector page (`/quote`) or the navigation popup, they go to `/quote/event-standup` without any URL parameters. The Cognito form (form ID 7) has a "Topper?" field that is conditionally hidden by default, and only becomes visible when a `topper` URL parameter is present (from the visualizer flow). Users coming from the selector/popup never see this field.

### Solution
Add a URL parameter `showTopper=true` when navigating from the quote selector and navigation popup, then update the EventStandupQuote component to detect this parameter and force the Cognito "Topper?" field group to be visible via DOM manipulation.

### Changes

**1. `src/pages/QuoteSelector.tsx`**
- Update the Stand-Up Letters option path from `/quote/event-standup` to `/quote/event-standup?showTopper=true`

**2. `src/components/Navigation.tsx`**
- Update the Stand-Up Letters option path in `signTypeOptions` from `/quote/event-standup` to `/quote/event-standup?showTopper=true`

**3. `src/pages/forms/EventStandupQuote.tsx`**
- Read a new `showTopper` URL parameter
- Add a new `useEffect` that runs when `showTopper` is true (and no `topper` value is already set from the visualizer)
- This effect will poll the Cognito form DOM (similar to the existing topper-fill logic) and find the Topper field's container, then force it to be visible by removing `display: none` or similar hidden styling
- The logic will search for the field group containing the "Topper?" label and ensure both the label/section and input are visible

### Technical Detail

The new DOM visibility effect will:
1. Wait for the Cognito form to render (polling every 400ms, up to 30 attempts)
2. Search for the Topper field by looking for labels containing "Topper" text
3. Find the parent field container (`.c-field`, `.c-section`, or similar Cognito wrapper)
4. Remove any `display: none` styling to make it visible
5. Also look for any Cognito section wrapper that might be hiding the topper group and unhide it
