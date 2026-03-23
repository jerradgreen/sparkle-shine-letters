

## ROI Calculator — Integration Plan

The Manus-provided code is a fully self-contained component using inline styles and its own color system. Rather than pasting it as-is, I will rewrite it to match the site's existing design system: Tailwind classes, CSS variables, the site's Navigation/Footer, and existing UI components (Card, Slider, Button).

### What Changes

#### 1. Create `src/pages/RoiCalculator.tsx`

A new page component that:
- Uses `Navigation` and `Footer` (like every other page on the site)
- Uses Tailwind classes and the site's CSS color variables (`primary`, `foreground`, `muted`, `accent`, `background`, `card`, `border`) instead of the hardcoded `COLORS` object with hex values
- Uses the existing `Slider` UI component from `src/components/ui/slider.tsx` instead of a custom inline-styled range input
- Uses `Card` components for the stat cards and package selector
- Uses `Button` for CTAs
- Keeps the same calculator logic (package selection, pricing inputs, volume inputs, Shop Pay financing, animated numbers, revenue projections)
- Keeps the rotating hero images
- Adds SEO via `Helmet` with appropriate title/description
- Links CTA buttons to `/quote/rental-inventory` (the existing quote form) instead of an external URL

#### 2. Update `src/App.tsx`

Add one route:
```tsx
import RoiCalculator from "./pages/RoiCalculator";
// ...
<Route path="/roi-calculator" element={<RoiCalculator />} />
```

### Design Mapping

| Manus Code | Site Equivalent |
|---|---|
| `COLORS.navy` / `charcoal` | `text-foreground` / `bg-foreground` |
| `COLORS.gold` | `text-primary` / `bg-primary` (teal-blue) or `text-accent` / `bg-accent` (warm peach) |
| `COLORS.ivory` | `bg-background` |
| `COLORS.border` | `border-border` |
| `COLORS.muted` | `text-muted-foreground` |
| Custom header/footer | Reuse site `Navigation` + `Footer` |
| Inline-styled slider | Radix `Slider` from `src/components/ui/slider.tsx` |
| Inline-styled buttons | `Button` component |
| Inline-styled cards | `Card` / `CardHeader` / `CardContent` |

### What Stays the Same
- All calculator math and `useMemo` logic
- `useAnimatedNumber` hook
- `formatCurrency` / `formatMonths` utilities
- Package selection (Pro vs Elite)
- 4-step input flow (package, pricing, volume, financing)
- Hero image rotation
- Shop Pay financing section
- Results panel with per-event, monthly, annual, year-1 profit stats

