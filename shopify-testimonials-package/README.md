# Shopify Testimonials Section Package

A complete, responsive testimonials section for Shopify stores with beautiful animations and professional styling.

## 📦 Package Contents

- `testimonials.html` - Complete HTML structure
- `testimonials.css` - Professional responsive styling
- `testimonials.js` - Interactive animations and effects
- `README.md` - This installation guide

## 🚀 Quick Installation

### Step 1: Upload Files to Shopify

1. **Upload CSS file:**
   - Go to `Online Store > Themes > Actions > Edit Code`
   - Navigate to `Assets` folder
   - Click `Add a new asset`
   - Upload `testimonials.css`

2. **Upload JavaScript file:**
   - In the same `Assets` folder
   - Upload `testimonials.js`

3. **Upload testimonial images:**
   - Upload your testimonial images to `Assets` folder
   - Make sure filenames match: `testimonial-sarah.jpg` and `testimonial-mike.jpg`

### Step 2: Add to Your Theme

#### Option A: Create a New Section (Recommended)

1. Go to `Sections` folder in theme editor
2. Click `Add a new section`
3. Name it `testimonials.liquid`
4. Copy the content from `testimonials.html` and paste it
5. Wrap the content in Liquid tags:

```liquid
<link rel="stylesheet" href="{{ 'testimonials.css' | asset_url }}">

<!-- Paste the HTML content here -->
<section class="testimonials-section">
  <!-- ... rest of HTML content ... -->
</section>

<script src="{{ 'testimonials.js' | asset_url }}"></script>
```

#### Option B: Add to Existing Template

1. Open the template where you want testimonials (e.g., `templates/page.liquid`)
2. Add this code where you want the testimonials to appear:

```liquid
<link rel="stylesheet" href="{{ 'testimonials.css' | asset_url }}">

<!-- Paste the HTML content here -->

<script src="{{ 'testimonials.js' | asset_url }}"></script>
```

### Step 3: Customize for Your Brand

#### Update Colors in CSS

Edit the CSS variables in `testimonials.css` (lines 8-40):

```css
:root {
  --primary-color: #YOUR_BRAND_COLOR;
  --primary-gradient: linear-gradient(135deg, #YOUR_COLOR_1, #YOUR_COLOR_2);
  /* ... other variables ... */
}
```

#### Update Content

Replace the testimonial content in the HTML with your actual customer reviews:

- Customer names
- Roles/titles
- Testimonial quotes
- Star ratings
- Profile images

## 🎨 Customization Options

### Colors
- Change `--primary-color` for brand color
- Modify `--primary-gradient` for gradient effects
- Update text colors via `--text-primary`, `--text-secondary`

### Layout
- Adjust `--container-max-width` for section width
- Modify `--card-padding` for card spacing
- Change grid layout in `.testimonials-grid`

### Typography
- Font sizes are responsive using `clamp()`
- Modify font families by adding CSS

### Animations
- Disable animations by removing JavaScript file
- Customize timing in `CONFIG` object in JavaScript

## 📱 Features

### ✅ Responsive Design
- Mobile-first approach
- Flexible grid layout
- Optimized for all screen sizes

### ✅ Professional Styling
- Glass morphism effects
- Gradient backgrounds
- Smooth hover animations
- Star rating displays

### ✅ Interactive Elements
- Scroll-triggered animations
- Hover effects
- Keyboard accessibility
- Smooth transitions

### ✅ Performance Optimized
- Lazy loading animations
- Efficient JavaScript
- CSS-only animations where possible
- Minimal file sizes

## 🔧 Advanced Usage

### Adding More Testimonials

Add more testimonial cards by duplicating the testimonial card HTML structure:

```html
<div class="testimonial-card">
  <div class="testimonial-content">
    <!-- Rating, quote, and customer info -->
  </div>
</div>
```

### Dynamic Testimonials

Use the JavaScript API to add testimonials dynamically:

```javascript
TestimonialsSection.addTestimonial({
  name: "Customer Name",
  role: "Customer Title",
  content: "Testimonial quote here",
  rating: 5,
  image: "customer-image.jpg"
});
```

### Star Ratings

Generate star ratings programmatically:

```javascript
const starsHTML = TestimonialsSection.generateStars(4, 5); // 4 out of 5 stars
```

## 🎯 SEO Benefits

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Schema markup ready
- Fast loading performance

## 🆘 Troubleshooting

### CSS Not Loading
- Ensure file is uploaded to `Assets` folder
- Check asset URL syntax: `{{ 'testimonials.css' | asset_url }}`
- Clear browser cache

### JavaScript Not Working
- Verify JavaScript file is uploaded
- Check browser console for errors
- Ensure proper asset URL syntax

### Images Not Displaying
- Confirm images are uploaded to `Assets` folder
- Check filename spelling matches exactly
- Verify image file extensions

### Mobile Issues
- Test on actual devices
- Check viewport meta tag in theme
- Verify responsive CSS is loading

## 🔄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers
- Graceful fallbacks for older browsers

## 📞 Support

For questions or customizations, refer to Shopify's theme development documentation or consult with a Shopify developer.

## 📄 License

This code is provided as-is for use in Shopify stores. Customize freely to match your brand and requirements.