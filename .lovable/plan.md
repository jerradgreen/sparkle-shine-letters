

## Fixes — Internal Link Reinforcement

### 1. Homepage (`src/pages/Index.tsx`) — Move paragraph down

Remove the "Custom Logo Signs" paragraph from its current position above the grid (lines 119-124) and insert it between the "Rental Business Contextual Link" paragraph (line 272-277) and the "Contextual Authority / SEO Section" (line 279-291). This places it alongside the other contextual link paragraphs near the bottom of the page.

Same copy, same styling (`max-w-3xl mx-auto mb-8 text-muted-foreground`). Just relocated.

### 2. Wall-Hanging Page (`src/pages/WallHangingMarqueeSigns.tsx`) — Verify visibility

The link IS in the code (lines 539-545) and appears correctly after the "freestanding letters" cross-link. It may not have been visible due to caching or the preview not refreshing. No code change needed here — but I will re-verify by checking the rendered page after the homepage edit is applied.

---

### Files Edited

| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Move Custom Logo Signs paragraph from above grid to bottom contextual section |

### What stays untouched
- Wall-Hanging page (link already present and correct)
- Stand-Up Letters page (unchanged)
- No copy or layout changes beyond the relocation

