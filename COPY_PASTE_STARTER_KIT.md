# 📋 Template Starter Kit - Copy & Paste for New Lovable Projects

When starting a new Lovable project with the template system, follow these steps:

## 🚀 Quick Start Steps

1. **Create a new Lovable project**
2. **Copy and paste the files below** into your new project
3. **Choose your sign type configuration**
4. **Customize as needed**

---

## 📁 Essential Files to Copy (Paste Each File)

### 1. Template Types Definition
**File Path:** `src/types/template.ts`

```typescript
export interface TemplateConfig {
  // Page Identity
  pageTitle: string;
  metaDescription: string;
  keywords: string[];
  
  // Hero Section
  hero: {
    headline: string;
    subheadline: string;
    ctaText: string;
    ctaAction: string;
    heroImage: string;
    heroImageAlt: string;
    layout: 'image-left' | 'image-right' | 'centered';
  };
  
  // Features Section
  features: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
      image?: string;
    }>;
  };
  
  // Testimonials
  testimonials: {
    title: string;
    items: Array<{
      name: string;
      role: string;
      content: string;
      rating: number;
      image: string;
    }>;
  };
  
  // Pricing
  pricing: {
    title: string;
    subtitle: string;
    packages: Array<{
      name: string;
      description: string;
      priceRange: string;
      features: string[];
      ctaText: string;
    }>;
  };
  
  // Gallery
  gallery: {
    title: string;
    subtitle: string;
    images: Array<{
      src: string;
      alt: string;
      caption?: string;
    }>;
  };
  
  // FAQ
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  
  // SEO & Business Info
  business: {
    name: string;
    description: string;
    type: 'LocalBusiness' | 'Product' | 'Service';
    industry: string;
    location?: {
      address: string;
      city: string;
      state: string;
      zip: string;
      phone: string;
    };
  };
  
  // Styling
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    gradientFrom: string;
    gradientTo: string;
  };
}
```

---

### 2. Sign Type Configurations
**File Path:** `src/config/templateConfigs.ts`

```typescript
import { TemplateConfig } from '@/types/template';

// 3D Layered Signs Template
export const layeredSignsConfig: TemplateConfig = {
  pageTitle: "3D Layered Sign Rental Business - Premium Dimensional Signage Package",
  metaDescription: "Start your 3D layered sign rental business. Premium dimensional signs that create stunning visual impact for events and businesses. Complete package included.",
  keywords: ["3D signs", "layered signs", "dimensional signage", "event decor", "premium signs", "3D letters"],
  
  hero: {
    headline: "Launch Your 3D Layered Sign Business",
    subheadline: "Create stunning dimensional displays with premium layered signs. Eye-catching depth and professional appeal that commands premium pricing.",
    ctaText: "Get 3D Package Info",
    ctaAction: "pricing",
    heroImage: "/src/assets/layered-signs.jpg",
    heroImageAlt: "Premium 3D layered sign with dimensional depth at elegant event",
    layout: "image-right"
  },
  
  features: {
    title: "Why 3D Layered Signs Dominate Events",
    subtitle: "Dimensional appeal that flat signs simply cannot match",
    items: [
      {
        title: "Stunning Visual Impact",
        description: "Multi-layer depth creates dramatic shadows and professional appeal that photographs beautifully",
        icon: "🎭"
      },
      {
        title: "Premium Materials",
        description: "High-quality wood, acrylic, and metal layers designed for durability and elegance",
        icon: "⭐"
      },
      {
        title: "Versatile Designs",
        description: "From rustic wood to modern metal - adaptable to any event style or brand aesthetic",
        icon: "🎨"
      }
    ]
  },
  
  testimonials: {
    title: "3D Sign Success Stories",
    items: [
      {
        name: "Jessica Martinez",
        role: "Event Designer",
        content: "These 3D signs are absolute show-stoppers! Clients pay 3x more for the dimensional effect. My bookings doubled!",
        rating: 5,
        image: "/placeholder-testimonial.jpg"
      }
    ]
  },
  
  pricing: {
    title: "3D Layered Sign Packages",
    subtitle: "Dimensional signage business opportunity",
    packages: [
      {
        name: "3D Starter Kit",
        description: "Perfect for entering the premium market",
        priceRange: "$3,500 - $7,000",
        features: ["5 layered letter sets", "Basic material kit", "Design templates", "Assembly training", "Email support"],
        ctaText: "Start 3D Business"
      },
      {
        name: "3D Professional",
        description: "Complete dimensional sign business",
        priceRange: "$12,000 - $22,000",
        features: ["12 layered sets", "Premium materials", "Advanced training", "Custom design service", "Territory protection"],
        ctaText: "Go Professional"
      }
    ]
  },
  
  gallery: {
    title: "3D Layered Sign Gallery",
    subtitle: "See the dimensional difference that commands premium prices",
    images: [
      { src: "/placeholder-1.jpg", alt: "Elegant 3D layered wedding sign" },
      { src: "/placeholder-2.jpg", alt: "Corporate 3D dimensional signage" }
    ]
  },
  
  faq: {
    title: "3D Layered Signs FAQ",
    items: [
      {
        question: "How much more can I charge for 3D signs?",
        answer: "3D layered signs typically command 200-400% higher pricing than flat signs due to their premium appeal and visual impact."
      }
    ]
  },
  
  business: {
    name: "3D Layered Signs",
    description: "Premium 3D dimensional sign rental business",
    type: "LocalBusiness",
    industry: "event rental"
  },
  
  theme: {
    primaryColor: "#8B5CF6",
    secondaryColor: "#06B6D4",
    accentColor: "#F59E0B",
    gradientFrom: "#8B5CF6",
    gradientTo: "#06B6D4"
  }
};

// Wall-Hanging Marquee Signs Template
export const wallHangingConfig: TemplateConfig = {
  pageTitle: "Wall-Hanging Marquee Sign Rental - Space-Saving Event Signage Business",
  metaDescription: "Start your wall-hanging marquee sign business. Space-efficient illuminated signs perfect for venues with limited floor space. Easy installation, maximum impact.",
  keywords: ["wall hanging signs", "marquee signs", "space saving signs", "wall mounted letters", "venue signage"],
  
  hero: {
    headline: "Wall-Hanging Marquee Sign Business",
    subheadline: "Space-saving illuminated signs that maximize impact in any venue. Perfect for walls, backdrops, and tight spaces where floor signs won't work.",
    ctaText: "Get Wall Sign Package",
    ctaAction: "pricing",
    heroImage: "/placeholder-wall-hero.jpg",
    heroImageAlt: "Elegant wall-hanging marquee letters mounted on venue wall",
    layout: "image-left"
  },
  
  features: {
    title: "Why Wall-Hanging Signs Are Game-Changers",
    subtitle: "Solve the biggest venue challenge - limited floor space",
    items: [
      {
        title: "Space Efficiency",
        description: "Perfect for small venues, crowded dance floors, and spaces where floor signs create obstacles",
        icon: "📐"
      },
      {
        title: "Easy Installation",
        description: "Quick-mount system installs on any wall surface in minutes. No complex setup or floor space needed",
        icon: "🔧"
      }
    ]
  },
  
  testimonials: {
    title: "Wall-Hanging Success Stories",
    items: [
      {
        name: "Amanda Foster",
        role: "Wedding Planner",
        content: "These wall signs saved my business! So many venues have no floor space. Now I can do any location!",
        rating: 5,
        image: "/placeholder-testimonial.jpg"
      }
    ]
  },
  
  pricing: {
    title: "Wall-Hanging Sign Packages",
    subtitle: "Space-saving signage business solutions",
    packages: [
      {
        name: "Wall Starter",
        description: "Enter the wall-mounting market",
        priceRange: "$2,800 - $5,500",
        features: ["6 wall-mount letters", "Mounting hardware", "Installation guide", "Basic LED kit"],
        ctaText: "Start Wall Business"
      }
    ]
  },
  
  gallery: {
    title: "Wall-Hanging Sign Gallery",
    subtitle: "See how wall signs solve venue challenges",
    images: [
      { src: "/placeholder-wall-1.jpg", alt: "Wall-mounted marquee letters at wedding" }
    ]
  },
  
  faq: {
    title: "Wall-Hanging Signs FAQ",
    items: [
      {
        question: "Will they damage venue walls?",
        answer: "Our mounting system uses removable hardware that leaves no permanent marks. Venue-friendly and damage-free."
      }
    ]
  },
  
  business: {
    name: "Wall-Hanging Marquee Signs",
    description: "Space-saving wall-mounted sign rental business",
    type: "LocalBusiness",
    industry: "event rental"
  },
  
  theme: {
    primaryColor: "#EC4899",
    secondaryColor: "#8B5CF6",
    accentColor: "#06B6D4",
    gradientFrom: "#EC4899",
    gradientTo: "#8B5CF6"
  }
};

// Event Style Stand-Up Signs Template
export const standUpSignsConfig: TemplateConfig = {
  pageTitle: "Event Stand-Up Sign Rental Business - Portable Event Signage Package",
  metaDescription: "Start your event stand-up sign business. Portable, quick-setup signs perfect for any event. Easy transport, professional appearance, fast ROI.",
  keywords: ["stand up signs", "portable signs", "event signage", "quick setup signs", "mobile signage"],
  
  hero: {
    headline: "Event Stand-Up Sign Rental Business",
    subheadline: "Portable signs that set up anywhere in minutes. Perfect for events of all sizes - from intimate gatherings to large celebrations.",
    ctaText: "Get Stand-Up Package",
    ctaAction: "pricing",
    heroImage: "/placeholder-standup-hero.jpg",
    heroImageAlt: "Elegant stand-up marquee signs at outdoor event",
    layout: "centered"
  },
  
  features: {
    title: "Why Stand-Up Signs Win Every Event",
    subtitle: "Portable, versatile, and perfect for any venue or occasion",
    items: [
      {
        title: "Ultra Portable",
        description: "Lightweight design packs flat for easy transport. One person can carry multiple signs effortlessly",
        icon: "🚚"
      },
      {
        title: "Quick Setup",
        description: "Sets up in under 5 minutes with no tools required. Perfect for tight event timelines",
        icon: "⚡"
      }
    ]
  },
  
  testimonials: {
    title: "Stand-Up Sign Success Stories",
    items: [
      {
        name: "Lisa Thompson",
        role: "Mobile Event Business",
        content: "The portability changed everything! I can do 3 events per day now. Setup is so fast and clients love them!",
        rating: 5,
        image: "/placeholder-testimonial.jpg"
      }
    ]
  },
  
  pricing: {
    title: "Stand-Up Sign Packages",
    subtitle: "Portable event signage business opportunity",
    packages: [
      {
        name: "Mobile Starter",
        description: "Perfect for getting started mobile",
        priceRange: "$1,800 - $3,500",
        features: ["4 stand-up signs", "Transport cases", "Setup guide", "Basic lighting"],
        ctaText: "Start Mobile"
      }
    ]
  },
  
  gallery: {
    title: "Stand-Up Sign Gallery",
    subtitle: "See the versatility that books events everywhere",
    images: [
      { src: "/placeholder-standup-1.jpg", alt: "Outdoor wedding stand-up signs" }
    ]
  },
  
  faq: {
    title: "Stand-Up Signs FAQ",
    items: [
      {
        question: "How stable are they in wind?",
        answer: "Our weighted base system keeps signs stable in winds up to 25mph. Sandbag options available for extreme conditions."
      }
    ]
  },
  
  business: {
    name: "Event Stand-Up Signs",
    description: "Portable event stand-up sign rental business",
    type: "LocalBusiness",
    industry: "event rental"
  },
  
  theme: {
    primaryColor: "#0EA5E9",
    secondaryColor: "#1E40AF",
    accentColor: "#F59E0B",
    gradientFrom: "#0EA5E9",
    gradientTo: "#1E40AF"
  }
};
```

---

## 🎯 How to Use for New Pages

### Option 1: Quick New Page in Current Project
```typescript
// Create new page file: src/pages/ThreeDSigns.tsx
import { PageTemplate } from '@/components/templates/PageTemplate';
import { HeroSection } from '@/components/templates/HeroSection';
import { FeatureGrid } from '@/components/templates/FeatureGrid';
import { TestimonialSection } from '@/components/templates/TestimonialSection';
import { PricingSection } from '@/components/templates/PricingSection';
import { GallerySection } from '@/components/templates/GallerySection';
import { FAQSection } from '@/components/templates/FAQSection';
import { CTASection } from '@/components/templates/CTASection';
import { layeredSignsConfig } from '@/config/templateConfigs'; // Choose your config

export default function ThreeDSigns() {
  return (
    <PageTemplate config={layeredSignsConfig}>
      <HeroSection config={layeredSignsConfig} />
      <FeatureGrid config={layeredSignsConfig} />
      <TestimonialSection config={layeredSignsConfig} />
      <PricingSection config={layeredSignsConfig} />
      <GallerySection config={layeredSignsConfig} />
      <FAQSection config={layeredSignsConfig} />
      <CTASection config={layeredSignsConfig} />
    </PageTemplate>
  );
}
```

### Option 2: Replace Main Index Page
```typescript
// Replace content in src/pages/Index.tsx
import { PageTemplate } from '@/components/templates/PageTemplate';
import { HeroSection } from '@/components/templates/HeroSection';
import { FeatureGrid } from '@/components/templates/FeatureGrid';
import { TestimonialSection } from '@/components/templates/TestimonialSection';
import { PricingSection } from '@/components/templates/PricingSection';
import { GallerySection } from '@/components/templates/GallerySection';
import { FAQSection } from '@/components/templates/FAQSection';
import { CTASection } from '@/components/templates/CTASection';
import { wallHangingConfig } from '@/config/templateConfigs'; // Choose your config

export default function Index() {
  return (
    <PageTemplate config={wallHangingConfig}>
      <HeroSection config={wallHangingConfig} />
      <FeatureGrid config={wallHangingConfig} />
      <TestimonialSection config={wallHangingConfig} />
      <PricingSection config={wallHangingConfig} />
      <GallerySection config={wallHangingConfig} />
      <FAQSection config={wallHangingConfig} />
      <CTASection config={wallHangingConfig} />
    </PageTemplate>
  );
}
```

---

## 🎨 Sign Type Quick Reference

**3D Layered Signs** → `layeredSignsConfig`
- Premium dimensional signs
- Purple/cyan theme
- High-end pricing

**Wall-Hanging Signs** → `wallHangingConfig`
- Space-saving wall-mounted
- Pink/purple theme
- Mid-range pricing

**Stand-Up Signs** → `standUpSignsConfig`
- Portable event signs
- Blue theme
- Entry-level pricing

---

## 🔧 Dependencies to Add

```bash
# Add these dependencies to your new project:
npm install react-helmet-async
```

---

## 📝 Next Steps After Copy/Paste

1. **Choose your sign type** from the three configurations
2. **Update image paths** to match your uploaded images
3. **Customize content** for your specific business
4. **Add to routing** if creating new pages
5. **Update navigation** links if needed

**That's it!** Your template system is ready to use. Simply paste the files and choose your configuration! 🚀