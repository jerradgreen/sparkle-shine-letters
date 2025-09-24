import { TemplateConfig } from '@/types/template';

// Marquee Letters Template (Current Page)
export const marqueeLettersConfig: TemplateConfig = {
  pageTitle: "Premium Marquee Letter Rental Business Package - Start Your Sign Rental Empire",
  metaDescription: "Launch your marquee letter rental business with our complete package. High-quality signs, marketing materials, and training included. Fast ROI potential.",
  keywords: ["marquee letters", "sign rental", "event rentals", "wedding signs", "business opportunity"],
  
  hero: {
    headline: "Launch Your Marquee Letter Rental Business",
    subheadline: "Complete package with premium letters, marketing materials, and business training. Start earning in 30 days.",
    ctaText: "Get Package Pricing Now",
    ctaAction: "pricing",
    heroImage: "/src/assets/marquee-1.png",
    heroImageAlt: "Premium marquee letters spelling LOVE at wedding venue",
    layout: "image-right"
  },
  
  features: {
    title: "Why Choose Our Marquee Letter Package",
    subtitle: "Everything you need to start and grow a successful rental business",
    items: [
      {
        title: "Premium Quality Letters",
        description: "Commercial-grade marquee letters built to last with LED bulbs and professional finish",
        icon: "⭐",
        image: "/src/assets/marquee-detail.jpg"
      },
      {
        title: "Complete Marketing Kit",
        description: "Professional photos, social media templates, and website materials included",
        icon: "📱"
      },
      {
        title: "Business Training",
        description: "Step-by-step guide to pricing, booking, and growing your rental business",
        icon: "🎓"
      }
    ]
  },
  
  testimonials: {
    title: "Success Stories from Our Partners",
    items: [
      {
        name: "Mike Johnson",
        role: "Rental Business Owner",
        content: "Made back my investment in just 3 months. The quality and support are incredible!",
        rating: 5,
        image: "/src/assets/testimonial-mike.jpg"
      },
      {
        name: "Sarah Chen",
        role: "Event Planner",
        content: "These letters are a game-changer for my events. Clients love them and pay premium prices.",
        rating: 5,
        image: "/src/assets/testimonial-sarah.jpg"
      }
    ]
  },
  
  pricing: {
    title: "Investment Packages",
    subtitle: "Choose the package that fits your business goals",
    packages: [
      {
        name: "Starter Package",
        description: "Perfect for testing the market",
        priceRange: "$2,500 - $5,000",
        features: ["4-letter set", "Basic marketing kit", "Training materials", "Email support"],
        ctaText: "Start Small"
      },
      {
        name: "Professional Package",
        description: "Most popular choice for serious entrepreneurs",
        priceRange: "$8,000 - $15,000",
        features: ["8-letter set", "Complete marketing kit", "1-on-1 training", "Phone support", "Territory protection"],
        ctaText: "Get Full Package"
      },
      {
        name: "Enterprise Package",
        description: "Maximum earning potential",
        priceRange: "$20,000 - $35,000",
        features: ["16-letter set", "Premium marketing", "Personal mentor", "Priority support", "Multiple territories"],
        ctaText: "Go Big"
      }
    ]
  },
  
  gallery: {
    title: "See Our Letters in Action",
    subtitle: "Real events, real results from our rental partners",
    images: [
      { src: "/src/assets/carousel-1.jpg", alt: "Wedding marquee letters" },
      { src: "/src/assets/carousel-2.jpg", alt: "Corporate event signage" },
      { src: "/src/assets/carousel-3.jpg", alt: "Birthday party letters" }
    ]
  },
  
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "How quickly can I start earning?",
        answer: "Most partners book their first event within 30 days. With proper marketing, you can see ROI in 2-3 months."
      },
      {
        question: "Do you provide territory protection?",
        answer: "Yes, Professional and Enterprise packages include territory protection to ensure you're the only provider in your area."
      },
      {
        question: "What kind of support do you provide?",
        answer: "We provide comprehensive training, marketing materials, and ongoing support via email and phone."
      }
    ]
  },
  
  business: {
    name: "Marquee Letter Rentals",
    description: "Premium marquee letter rental business opportunity",
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

// Neon Signs Template
export const neonSignsConfig: TemplateConfig = {
  pageTitle: "Custom Neon Sign Business Package - LED Neon Sign Rental Opportunity",
  metaDescription: "Start your custom neon sign rental business. Energy-efficient LED neon signs for events, businesses, and parties. Complete business package included.",
  keywords: ["neon signs", "LED neon", "custom signs", "event lighting", "neon rental business"],
  
  hero: {
    headline: "Launch Your Custom Neon Sign Business",
    subheadline: "Energy-efficient LED neon signs for events, businesses, and special occasions. Complete business package with training and support.",
    ctaText: "Get Neon Package Info",
    ctaAction: "pricing",
    heroImage: "/placeholder-neon-hero.jpg",
    heroImageAlt: "Custom LED neon sign at trendy event",
    layout: "centered"
  },
  
  features: {
    title: "Why LED Neon Signs Are In Demand",
    subtitle: "Energy-efficient, customizable, and perfect for any occasion",
    items: [
      {
        title: "Energy Efficient",
        description: "LED neon uses 80% less energy than traditional neon while providing the same vibrant glow",
        icon: "💡"
      },
      {
        title: "Fully Customizable",
        description: "Any text, any color, any size. Create unique signs for every client's needs",
        icon: "🎨"
      },
      {
        title: "Durable & Safe",
        description: "Unbreakable, cool to touch, and weather-resistant for indoor and outdoor use",
        icon: "🛡️"
      }
    ]
  },
  
  testimonials: {
    title: "Neon Success Stories",
    items: [
      {
        name: "Alex Rodriguez",
        role: "Neon Business Owner",
        content: "The demand for custom neon is incredible. I'm booked every weekend!",
        rating: 5,
        image: "/placeholder-testimonial.jpg"
      }
    ]
  },
  
  pricing: {
    title: "Neon Business Packages",
    subtitle: "Start your LED neon sign rental business",
    packages: [
      {
        name: "Neon Starter",
        description: "Basic neon cutting and shaping kit",
        priceRange: "$3,000 - $6,000",
        features: ["Basic cutting kit", "5 colors", "Training videos", "Design templates"],
        ctaText: "Start with Neon"
      },
      {
        name: "Neon Pro",
        description: "Professional neon business package",
        priceRange: "$10,000 - $18,000",
        features: ["Professional kit", "12 colors", "Live training", "Marketing materials", "Territory rights"],
        ctaText: "Go Pro"
      }
    ]
  },
  
  gallery: {
    title: "Custom Neon Creations",
    subtitle: "See what's possible with LED neon technology",
    images: [
      { src: "/placeholder-neon-1.jpg", alt: "Custom business neon sign" },
      { src: "/placeholder-neon-2.jpg", alt: "Wedding neon backdrop" }
    ]
  },
  
  faq: {
    title: "Neon Business FAQ",
    items: [
      {
        question: "How hard is it to make custom neon signs?",
        answer: "With our training and tools, you can create professional neon signs in 2-3 hours per piece."
      },
      {
        question: "What's the profit margin on neon signs?",
        answer: "Typical rentals range from $150-500 per event with material costs of $30-80 per sign."
      }
    ]
  },
  
  business: {
    name: "Custom Neon Signs",
    description: "Custom LED neon sign rental business",
    type: "LocalBusiness",
    industry: "custom signage"
  },
  
  theme: {
    primaryColor: "#EC4899",
    secondaryColor: "#8B5CF6",
    accentColor: "#06B6D4",
    gradientFrom: "#EC4899",
    gradientTo: "#8B5CF6"
  }
};

// Channel Letters Template
export const channelLettersConfig: TemplateConfig = {
  pageTitle: "Channel Letter Business Package - Professional LED Channel Letter Signs",
  metaDescription: "Start your channel letter sign business. Professional illuminated business signs for storefronts and commercial properties. Complete training included.",
  keywords: ["channel letters", "business signs", "storefront signs", "illuminated signs", "commercial signage"],
  
  hero: {
    headline: "Professional Channel Letter Business",
    subheadline: "High-end illuminated business signs for storefronts and commercial properties. Premium pricing, professional results.",
    ctaText: "Get Channel Letter Info",
    ctaAction: "pricing",
    heroImage: "/placeholder-channel-hero.jpg",
    heroImageAlt: "Professional channel letter storefront sign",
    layout: "image-left"
  },
  
  features: {
    title: "Why Channel Letters Command Premium Prices",
    subtitle: "Professional-grade signage for serious businesses",
    items: [
      {
        title: "Professional Appearance",
        description: "3D illuminated letters that make businesses stand out and look established",
        icon: "🏢"
      },
      {
        title: "High Durability",
        description: "Built to last 10+ years outdoors with minimal maintenance required",
        icon: "⚡"
      },
      {
        title: "Premium Pricing",
        description: "Channel letters command $2,000-$15,000+ per installation",
        icon: "💰"
      }
    ]
  },
  
  testimonials: {
    title: "Channel Letter Success Stories",
    items: [
      {
        name: "David Kim",
        role: "Sign Business Owner",
        content: "Channel letters transformed my business. Average project value increased 5x!",
        rating: 5,
        image: "/placeholder-testimonial.jpg"
      }
    ]
  },
  
  pricing: {
    title: "Channel Letter Business Packages",
    subtitle: "Professional signage business opportunity",
    packages: [
      {
        name: "Channel Starter",
        description: "Basic channel letter fabrication",
        priceRange: "$15,000 - $25,000",
        features: ["Basic fabrication tools", "LED modules", "Installation training", "Design software"],
        ctaText: "Start Professional"
      },
      {
        name: "Channel Master",
        description: "Complete channel letter business",
        priceRange: "$35,000 - $50,000",
        features: ["Professional equipment", "Advanced training", "Business development", "Territory protection"],
        ctaText: "Go Master Level"
      }
    ]
  },
  
  gallery: {
    title: "Professional Channel Letter Projects",
    subtitle: "See the quality that commands premium prices",
    images: [
      { src: "/placeholder-channel-1.jpg", alt: "Restaurant channel letters" },
      { src: "/placeholder-channel-2.jpg", alt: "Retail store illuminated sign" }
    ]
  },
  
  faq: {
    title: "Channel Letter Business FAQ",
    items: [
      {
        question: "What's the typical profit margin?",
        answer: "Channel letter projects typically have 60-80% profit margins with proper pricing and efficiency."
      },
      {
        question: "How long does installation take?",
        answer: "Most channel letter installations take 4-8 hours depending on size and complexity."
      }
    ]
  },
  
  business: {
    name: "Channel Letter Signs",
    description: "Professional channel letter sign business",
    type: "LocalBusiness",
    industry: "commercial signage"
  },
  
  theme: {
    primaryColor: "#0EA5E9",
    secondaryColor: "#1E40AF",
    accentColor: "#F59E0B",
    gradientFrom: "#0EA5E9",
    gradientTo: "#1E40AF"
  }
};