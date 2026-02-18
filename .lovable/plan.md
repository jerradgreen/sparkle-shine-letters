

## Wall-Hanging Page — Authority Depth Pass

Content depth optimization only. No layout, pricing, or design changes.

---

### 1. Add "Built for Permanent Wall Installation" Micro-Section

**File:** `src/pages/WallHangingMarqueeSigns.tsx`

Insert a new section block just above the FAQ section (before line 497), styled consistently with the existing paragraph blocks:

```
<section className="py-8 px-4 bg-muted/20">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-2xl font-bold mb-4">Built for Permanent Wall Installation</h2>
    <p className="text-muted-foreground text-sm leading-relaxed">
      These wall-mounted marquee letters are fabricated from steel with reinforced backs designed for secure mounting. Whether installed on drywall, brick, wood, or concrete, they are built to hang like framed artwork while delivering the presence of architectural lighting. Each commissioned build is intended for long-term installation — not temporary decor.
    </p>
  </div>
</section>
```

---

### 2. Strengthen Mounting FAQ

**File:** `src/config/templateConfigs.ts` (line 307-308)

Change the first FAQ entry:

- **Question** from: `"How easy are these to hang?"`
  To: `"How do wall-mounted marquee letters install?"`

- **Answer** to: `"Our wall-mounted marquee letters install using reinforced mounting points on the back of each letter. They hang similarly to framed art using anchors appropriate for your wall type. For larger words or permanent commercial installations, custom mounting bars can be fabricated for additional structural support."`

---

### 3. Add Material Authority Sentence in Features

**File:** `src/config/templateConfigs.ts` (line 210)

Append to the Painted Steel Construction description:

From:
> "Solid steel hand-painted for that rustic, retro, vintage finish. Develops authentic patina outdoors over time."

To:
> "Solid steel hand-painted for that rustic, retro, vintage finish. Develops authentic patina outdoors over time. Unlike lightweight decorative alternatives, these are true custom metal marquee letters fabricated from steel for structural integrity and long-term durability."

---

### 4. Add Designer-Focused Line in Hero Area

**File:** `src/pages/WallHangingMarqueeSigns.tsx`

Add one line below the subheadline in both mobile (after line 76) and desktop (after line 137) layouts:

```
<p className="text-sm text-muted-foreground leading-relaxed mb-2">
  Frequently commissioned by interior designers, restaurant owners, and brand builders seeking distinctive marquee wall art.
</p>
```

Same size and styling as the existing subheadline paragraph — no font enlargement.

---

### 5. No Modifications To

- Pricing
- Gallery layout or images
- CTA buttons
- Testimonials
- Internal stand-up link at bottom
- No rental, stand-up, layered sign, or 3D logo language introduced

