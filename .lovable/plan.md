

## Move Pricing Text Below Headline on Mobile Only

**Problem:** On mobile, the pricing text and review are jumbled together at the bottom of the hero. On desktop it looks fine.

**Solution:** Show the pricing text right below "Make Every Event Unforgettable" on mobile only, and keep it in its current position (above the review) on desktop only.

### Technical Details

**File:** `src/components/MarqueeHeroSection.tsx`

1. Add a **mobile-only copy** of the pricing text inside the top content block (below "Make Every Event Unforgettable"), using `md:hidden` to hide it on desktop.

2. Add `hidden md:block` to the **existing pricing text block** so it only shows on desktop, keeping the current desktop layout unchanged.

This way:
- **Mobile:** Headline > Subheadline > Pricing text > (space) > Review at bottom
- **Desktop:** No change from current layout

