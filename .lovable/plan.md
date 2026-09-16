# Update the Custom Marquee Signs page

## Scope
- Add the four supplied real photographs as durable project assets.
- Replace the requested hero and gallery images, preserving natural framing and avoiding sign cutoff.
- Update the custom quote destinations and add the three direct product-specific quote links.
- Replace the corporate contextual sentence exactly as requested.
- Add short, literal gallery captions based only on visible details.
- Keep existing SEO metadata, pricing, forms, tracking, and unrelated content unchanged.

## Technical details
- Import the new asset pointers into `CustomMarqueeSigns.tsx`.
- Use a 16:9 hero frame for the Cold Beer image, `object-contain` where requested, and disable zoom on the Shark triptych.
- Verify `/custom-marquee-signs` at desktop and mobile widths, inspect image loading/framing and all affected links, and open each quote route to confirm its form renders without submission.
- Run the production build and review current diagnostics.
- Report the separate read-only review of the shared quote-form heading and navigation as recommendations only.
