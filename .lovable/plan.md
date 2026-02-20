

## Internal Link Reinforcement — 3 Pages (Final)

Three contextual links to `/3d-logos` using anchor text "Custom Logo Signs." No layout changes, no extra links, no changes to existing copy.

---

### 1. Homepage (`src/pages/Index.tsx`)

Insert contextual paragraph **before** the sign styles grid, directly beneath the intro text and before the grid wrapper.

**Copy:**
> Our [Custom Logo Signs](/3d-logos) are fabricated in layered metal with dimensional depth and hand-finished detail, designed to become the focal point of restaurants, boutiques, and office interiors. These commissioned builds elevate brand presence beyond flat signage and create a statement that feels architectural and intentional.

Uses `max-w-3xl mx-auto mb-8 text-muted-foreground` styling.

---

### 2. Wall-Hanging Page (`src/pages/WallHangingMarqueeSigns.tsx`) — UPDATED WORDING

Insert one sentence before the FAQ CTA button, after existing cross-link paragraphs.

**Copy (updated):**
> If you need a fully branded mark rather than individual letters, explore our [Custom Logo Signs](/3d-logos) fabricated in layered metal.

Uses `text-muted-foreground text-sm` styling matching adjacent paragraphs.

---

### 3. Stand-Up Letters Page (`src/pages/EventStandUpSigns.tsx`)

Insert one sentence after existing cross-link paragraphs in the FAQ section.

**Copy:**
> If your project calls for a fully integrated brand mark rather than freestanding letters, our [Custom Logo Signs](/3d-logos) offer layered metal fabrication with dimensional depth and hand-finished detail.

Uses `text-sm text-muted-foreground mt-4` styling.

---

### Files Edited

| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Add 1 contextual paragraph with link before sign grid |
| `src/pages/WallHangingMarqueeSigns.tsx` | Add 1 contextual sentence (updated wording) before FAQ CTA |
| `src/pages/EventStandUpSigns.tsx` | Add 1 contextual sentence after existing cross-links |

### What stays untouched
- No layout changes
- No existing copy altered
- No additional links beyond the three specified

