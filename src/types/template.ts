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
    secondaryCtaText?: string;
    ctaAction: string;
    heroImage: string;
    heroImageAlt: string;
    layout: 'image-left' | 'image-right' | 'centered';
    trustBar?: string;
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
      imageStyle?: React.CSSProperties;
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