import { TemplateConfig } from '@/types/template';

// Import testimonial images
import testimonialRealistic1 from '@/assets/testimonial-realistic-1.jpg';
import testimonialDavidBrick from '@/assets/testimonial-david-brick.jpg';
import testimonialLakeshaOutdoor from '@/assets/testimonial-lakesha-outdoor.jpg';

// Import gallery images
import image1969 from '@/assets/1969.jpeg';
import imageElev8 from '@/assets/elev8.jpeg';
import imageMarryMe from '@/assets/marry-me.jpg';
import imageDrewiaHill from '@/assets/drewia-hill.jpeg';
import imageSetup1 from '@/assets/setup-1.jpeg';
import imageSetup2 from '@/assets/setup-2.jpg';

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
        icon: "🎭",
        image: "/src/assets/marquee-detail.jpg"
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
        image: "/src/assets/testimonial-sarah.jpg"
      },
      {
        name: "Robert Chen",
        role: "Rental Business Owner",
        content: "The layered signs set me apart from competitors. Premium pricing and clients love the sophisticated look.",
        rating: 5,
        image: "/src/assets/testimonial-mike.jpg"
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
      },
      {
        name: "3D Master Package",
        description: "Ultimate dimensional signage empire",
        priceRange: "$25,000 - $45,000",
        features: ["25 layered sets", "All materials", "Personal mentor", "Marketing package", "Multiple territories"],
        ctaText: "Dominate Market"
      }
    ]
  },
  
  gallery: {
    title: "3D Layered Sign Gallery",
    subtitle: "See the dimensional difference that commands premium prices",
    images: [
      { src: "/src/assets/carousel-1.jpg", alt: "Elegant 3D layered wedding sign" },
      { src: "/src/assets/carousel-2.jpg", alt: "Corporate 3D dimensional signage" },
      { src: "/src/assets/carousel-3.jpg", alt: "Rustic layered wood signs" }
    ]
  },
  
  faq: {
    title: "3D Layered Signs FAQ",
    items: [
      {
        question: "How much more can I charge for 3D signs?",
        answer: "3D layered signs typically command 200-400% higher pricing than flat signs due to their premium appeal and visual impact."
      },
      {
        question: "Are they difficult to transport and set up?",
        answer: "Our modular design makes transport easy. Most signs assemble in 15-30 minutes with our simple connection system."
      },
      {
        question: "What events work best for 3D signs?",
        answer: "Weddings, corporate events, trade shows, and upscale parties. Any event where visual impact and photos matter."
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
  pageTitle: "Custom Wall-Hanging Marquee Signs - Vintage Painted Steel Letters",
  metaDescription: "Individual marquee letters designed to hang on walls like artwork. Painted steel construction with warm G30 bulbs, perfect for shops, studios, and home décor.",
  keywords: ["wall hanging marquee", "painted steel letters", "vintage marquee signs", "wall mounted lights", "retro signage", "industrial décor"],
  
  hero: {
    headline: "Custom Wall-Hanging Marquee Signs",
    subheadline: "Individual painted steel letters that hang like artwork. Classic warm glow with G30 bulbs for shops, studios, and homes.",
    ctaText: "Get Your Quote",
    ctaAction: "pricing",
    heroImage: "/src/assets/wall-hanging.jpg",
    heroImageAlt: "Vintage wall-hanging marquee letters on rustic wood wall",
    layout: "image-right"
  },
  
  features: {
    title: "Authentic Marquee Craftsmanship",
    subtitle: "Built to last, designed to impress",
    items: [
      {
        title: "Painted Steel Construction",
        description: "Solid steel hand-painted for that rustic, retro, vintage finish. Develops authentic patina outdoors over time.",
        icon: "🔨"
      },
      {
        title: "Classic Warm Glow",
        description: "Fitted with G30 globe bulbs—not LED—for that warm, inviting light that works beautifully day or night.",
        icon: "💡"
      },
      {
        title: "Simple Wall Mounting",
        description: "Hangs easily on any wall like a framed picture. No floor stands or complex installation required.",
        icon: "🖼️"
      },
      {
        title: "Custom Letter Combinations",
        description: "Order any combination of letters, numbers, or symbols. Spell out names, phrases, or simple words like BAR, LOVE, or OPEN.",
        icon: "✍️"
      },
      {
        title: "Indoor or Outdoor Use",
        description: "Perfect indoors, but also great outdoors where they naturally weather and develop unique character.",
        icon: "🏠"
      },
      {
        title: "Optional Upgrades",
        description: "Powder coating for modern weather resistance. Mounting bars and custom brackets for secure installation.",
        icon: "⚙️"
      }
    ]
  },
  
  testimonials: {
    title: "What Our Customers Say",
    items: [
      {
        name: "Sarah Mitchell",
        role: "Coffee Shop Owner",
        content: "The wall-hanging letters transformed our café! The warm glow creates the perfect ambiance and customers love taking photos with them.",
        rating: 5,
        image: "/src/assets/testimonial-sarah.jpg"
      },
      {
        name: "David Chen",
        role: "Wedding Planner",
        content: "These signs are perfect for photo backdrops! The vintage aesthetic and warm lighting photograph beautifully. Couples are obsessed!",
        rating: 5,
        image: "/src/assets/testimonial-david-brick.jpg"
      },
      {
        name: "LaKesha Williams",
        role: "Boutique Owner",
        content: "Love how they develop character over time! We have ours on our outdoor patio and the natural patina makes them look even better.",
        rating: 5,
        image: "/src/assets/testimonial-lakesha.jpg"
      }
    ]
  },
  
  pricing: {
    title: "Custom Pricing",
    subtitle: "Every sign is custom-made to your specifications",
    packages: [
      {
        name: "Get Your Quote",
        description: "Wall-hanging marquee signs are custom-made based on your specific letter combination, size preferences, and finish options. Contact us for a personalized quote.",
        priceRange: "Custom Pricing",
        features: [
          "Choose any letters, numbers, or symbols",
          "Hand-painted steel construction",
          "Warm G30 globe bulbs included",
          "Simple wall mounting hardware",
          "Indoor/outdoor rated",
          "Optional powder coating available",
          "Custom mounting brackets upon request"
        ],
        ctaText: "Request Custom Quote"
      }
    ]
  },
  
  gallery: {
    title: "Wall-Hanging Sign Gallery",
    subtitle: "See the vintage charm and warm glow in action",
    images: [
      { src: "/src/assets/wall-hanging.jpg", alt: "Rustic wall-hanging marquee letters on wood wall", caption: "Classic vintage finish on reclaimed wood" },
      { src: "/src/assets/carousel-1.jpg", alt: "Wall-mounted marquee sign at event", caption: "Perfect for photo backdrops" },
      { src: "/src/assets/carousel-2.jpg", alt: "Retail shop wall signage", caption: "Boutique storefront installation" },
      { src: "/src/assets/carousel-4.jpg", alt: "Wedding wall décor", caption: "Wedding reception signage" },
      { src: "/src/assets/carousel-5.jpg", alt: "Bar wall letters", caption: "Outdoor bar patio décor" },
      { src: "/src/assets/carousel-6.jpg", alt: "Studio wall marquee", caption: "Home studio statement piece" }
    ]
  },
  
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Will the signs damage my walls?",
        answer: "No! These letters hang just like a framed picture using standard wall mounting hardware. They're designed for easy installation and removal without damaging surfaces."
      },
      {
        question: "How heavy are the letters?",
        answer: "Each letter is made from painted steel but remains lightweight enough for standard wall mounting—typically 3-8 pounds depending on size. They work on any standard drywall with appropriate anchors."
      },
      {
        question: "Can I use these outdoors?",
        answer: "Absolutely! While they're perfect indoors, these signs also work great outdoors. The painted steel will naturally develop a beautiful patina over time, adding to their vintage charm. For enhanced weather resistance, consider our powder coating upgrade."
      },
      {
        question: "What kind of bulbs do they use?",
        answer: "We use classic G30 globe bulbs—not LED—for that authentic warm glow that defines vintage marquee lighting. Replacement bulbs are readily available at most hardware stores."
      },
      {
        question: "Can I order any letter combination?",
        answer: "Yes! Order any combination of letters (A-Z), numbers (0-9), and symbols (&, #, @, etc.) to create your perfect custom sign. Popular choices include business names, single words like LOVE or BAR, and personalized phrases."
      },
      {
        question: "What are the sizing options?",
        answer: "We offer multiple sizes to fit your space and budget. Contact us with your specific needs and we'll provide dimensions and pricing for your custom configuration."
      },
      {
        question: "Do you offer installation services?",
        answer: "While the signs are designed for easy DIY installation, we can recommend professional installers in your area or provide guidance for larger installations."
      },
      {
        question: "What's the difference between painted and powder-coated finishes?",
        answer: "Our standard painted finish offers authentic vintage charm and will naturally patina outdoors. Powder coating provides a more modern, uniform look with enhanced weather resistance—perfect if you want that vintage aesthetic without the weathering effect."
      }
    ]
  },
  
  business: {
    name: "Custom Wall-Hanging Marquee Signs",
    description: "Individual painted steel marquee letters with warm G30 bulbs, designed for wall mounting in retail shops, studios, homes, and outdoor spaces.",
    type: "Product",
    industry: "home décor"
  },
  
  theme: {
    primaryColor: "#D97706",
    secondaryColor: "#92400E",
    accentColor: "#F59E0B",
    gradientFrom: "#D97706",
    gradientTo: "#92400E"
  }
};

// Event Style Stand-Up Signs Template
export const standUpSignsConfig: TemplateConfig = {
  pageTitle: "Event Stand-Up Sign Rental Business - Portable Event Signage Package",
  metaDescription: "Start your event stand-up sign business. Portable, quick-setup signs perfect for any event. Easy transport, professional appearance, fast ROI.",
  keywords: ["stand up signs", "portable signs", "event signage", "quick setup signs", "mobile signage"],
  
  hero: {
    headline: "MARQUEE LETTER RENTALS",
    subheadline: "Commercial-quality stand-up marquee letters that make every event unforgettable",
    ctaText: "Get Your Quote",
    ctaAction: "pricing",
    heroImage: "/src/assets/hero-lockwoods.jpg",
    heroImageAlt: "THE LOCKWOODS marquee letters with couple dancing at elegant event",
    layout: "centered"
  },
  
  features: {
    title: "Why marquee letters and signs win every event",
    subtitle: "Durable, bold, and easy - the perfect combination for any event",
    items: [
      {
        title: "Durable & Self-Standing",
        description: "Made from powder-coated steel with extra-deep sides, these letters are built to last and stand on their own.",
        icon: "✓"
      },
      {
        title: "Bold & Bright",
        description: "At 36\" to 48\" tall with LED bulbs and a sleek finish, they make a big impact at weddings, proms, and parties.",
        icon: "✨"
      },
      {
        title: "Easy to Use & Transport",
        description: "Arrive pre-lit and ready to go, with optional reusable foam-lined boxes for simple storage and travel.",
        icon: "⚡"
      }
    ]
  },
  
  testimonials: {
    title: "Event Success Stories",
    items: [
      {
        name: "Sarah M.",
        role: "Wedding Planner",
        content: "Letters arrived safe and were amazing quality. The color-changing bulbs were a huge hit at the reception!",
        rating: 5,
        image: testimonialRealistic1
      },
      {
        name: "David K.",
        role: "Corporate Event Manager", 
        content: "Perfect for our stage setup - everyone could see them and took pictures. The neon style was modern and professional.",
        rating: 5,
        image: testimonialDavidBrick
      },
      {
        name: "LaKesha J.",
        role: "Event Coordinator",
        content: "Ready to set up right out of the boxes. Great quality and exactly what we needed for our venue and event.",
        rating: 5,
        image: testimonialLakeshaOutdoor
      }
    ]
  },
  
  pricing: {
    title: "Get Your Custom Quote",
    subtitle: "Every event is unique - let us create the perfect package for you",
    packages: []
  },
  
  gallery: {
    title: "Event Gallery",
    subtitle: "See our marquee lights in action",
    images: [
      { src: image1969, alt: "1969 marquee letters at elegant event" },
      { src: imageElev8, alt: "ELEV8 marquee letters corporate event" },
      { src: imageMarryMe, alt: "MARRY ME marquee proposal setup" },
      { src: imageDrewiaHill, alt: "DREWIA HILL marquee letters wedding celebration" },
      { src: imageSetup1, alt: "Professional event setup with marquee letters" },
      { src: imageSetup2, alt: "Corporate event marquee letter display" }
    ]
  },
  
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What size are the letters? And do you offer larger ones?",
        answer: "The event style letters are 36\" or 48\", but 36\" letters are recommended for quicker ship time and ease of storage, transport and setup. We can do larger letters if needed, just reach out for that."
      },
      {
        question: "What are toppers?",
        answer: "Toppers are smaller word signs like THE, MR&MRS, CLASS OF, and BABY. Each phrase is pre-mounted on a shared base so you can easily set them on top of your 36\" letters for layered displays — and extra rental income."
      },
      {
        question: "How much can I rent the letters for?",
        answer: "Typical rates range from $75–$150 per letter, depending on your market. You can also offer bundles, delivery/setup add-ons, or even client pickup (with proper documentation and damage policies). You're in control of the pricing — it's your business."
      },
      {
        question: "Where are these made?",
        answer: "We manufacture our letters overseas through a trusted production partner I've worked with for over 10 years. That relationship is what allows us to offer this level of quality, powder coating, precision packing, and attention to detail — all at a price that simply wouldn't be possible if made locally."
      },
      {
        question: "Is there a warranty?",
        answer: "Yes. We replace any items damaged beyond simple repair during shipping or due to a manufacturing issue. We do not replace items damaged from dropping, tipping, or event misuse. That said, the product is built strong and packed well — breakage is rare, and we'll always take care of you if it's something on our end."
      },
      {
        question: "What kind of bulbs do you use?",
        answer: "We use LED bulbs with E12 (candelabra) bases — long-lasting, energy efficient, and easy to replace. You'll receive spare bulbs with your order, and if you ever need more, we can ship replacements. You can also find fun or creative options on Amazon that fit the same base."
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