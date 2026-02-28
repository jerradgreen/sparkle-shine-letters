

## Add Shop Pay Installments Financing Messaging to Rental Inventory Page

Two subtle touchpoints — no new sections, no layout changes.

---

### File: `src/pages/RentalInventory.tsx`

**Change 1 — Hero financing line (both mobile + desktop)**

Add a single muted line directly below the pricing/investment paragraph in both layouts:

```
Financing available through Shop Pay Installments — apply in seconds at checkout.
```

- **Mobile** (after line 83, the `$15,000-$35,000` paragraph): Add a new `<p>` with `text-sm text-primary/80 font-medium`
- **Desktop** (after line 124, the same investment paragraph): Add a matching `<p>`

**Change 2 — "How to Get Started" Step 1 mention**

After the existing Step 1 description (line 499), append a second sentence:

```
Flexible financing is available through Shop Pay Installments — approval takes seconds, no lengthy application.
```

Same `<p>` tag, just extending the text.

---

Two files edited: `src/pages/RentalInventory.tsx` only. No new components, no layout changes.

