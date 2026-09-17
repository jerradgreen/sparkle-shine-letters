# Wall-Hanging Cold Beer Project Update

## Scope
- Update only `/wall-hanging-signs`; preserve its hero, gallery, product details, pricing, metadata, quote flow, and tracking.
- Add the existing full approved founder introduction immediately after the gallery.
- Add the Cold Beer project story after the founder section, followed by the existing three-photo fabrication crew feature.

## Implementation
1. Normalize the uploaded images’ orientation and create optimized WebP versions. Render the supplied one-page PDF at high resolution, inspect it, and create an optimized WebP mockup.
2. Permanently host the four resulting project images through Lovable Assets and reference their asset pointers from the wall-hanging page.
3. Build the project story with:
   - Nighttime installed image as the lead, preserving the complete sign and arrow.
   - Exact approved headline and paragraph.
   - Three stages: Original pencil sketch, Design mockup, Finished piece.
   - Full-image `object-contain` presentation and responsive three-column/mobile-stacked layout.
4. Reuse the approved Jerrad portrait and exact founder copy from `/3d-logos`.
5. Reuse all three approved fabrication crew assets in the established 2:3 layout with the exact heading and caption.

## Verification
- Confirm all eight images load upright and remain complete at 1280px desktop and 390px mobile.
- Confirm the sketch and mockup remain legible, no horizontal overflow occurs, and the founder copy is complete.
- Confirm metadata is unchanged and the existing wall-hanging quote route opens without submitting the form.
- Run the production build and stop before deployment.
