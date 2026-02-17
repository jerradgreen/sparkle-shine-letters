import { TemplateConfig } from '@/types/template';

// Import testimonial images
import testimonialRealistic1 from '@/assets/testimonial-realistic-1.jpg';
import testimonialDavidBrick from '@/assets/testimonial-david-brick.jpg';
import testimonialLakeshaOutdoor from '@/assets/testimonial-lakesha-outdoor.jpg';
import testimonialIndoorWoman from '@/assets/testimonial-indoor-woman.jpg';
import testimonialOutdoorMan from '@/assets/testimonial-outdoor-man.jpg';
import testimonialChef from '@/assets/testimonial-chef-restaurant.jpg';
import testimonialWhiteMale from '@/assets/testimonial-white-male.jpg';
import testimonialBlackWoman from '@/assets/testimonial-black-woman.jpg';
import testimonialRealistic2 from '@/assets/testimonial-realistic-2.jpg';
import testimonialRealistic3 from '@/assets/testimonial-realistic-3.jpg';
import testimonialVintagePolaroid from '@/assets/testimonial-vintage-polaroid.jpg';
import testimonialFoodVendor1 from '@/assets/testimonial-food-vendor-1-bright.jpg';
import testimonialFoodVendor2 from '@/assets/testimonial-food-vendor-2.jpg';
import testimonialBarbcutieTruck from '@/assets/testimonial-barbcutie-truck.jpg';

// Import gallery images
import logoTucks1 from '@/assets/logo-tucks-1.jpg';
import logoTucks2 from '@/assets/logo-tucks-2.jpg';
import logoTucks3 from '@/assets/logo-tucks-3.jpg';
import image1969 from '@/assets/1969.jpeg';
import imageElev8 from '@/assets/elev8.jpeg';
import imageMarryMe from '@/assets/marry-me.jpg';
import imageDrewiaHill from '@/assets/drewia-hill.jpeg';
import imageSetup1 from '@/assets/setup-1.jpeg';
import imageSetup2 from '@/assets/setup-2.jpg';
import chicagoLayeredSign from '@/assets/chicago-layered-sign.jpg';
import exitzero1LayeredSign from '@/assets/exitzero1-layered-sign.jpg';
const layeredSignOffice = 'https://cdn.shopify.com/s/files/1/1403/8315/files/IMG_6390_layered-sign.jpg?v=1759694027';
const layeredSignWorkshop = 'https://cdn.shopify.com/s/files/1/1403/8315/files/BarbaryCoast2.jpg?v=1759690725';
const layeredSignRetail = 'https://cdn.shopify.com/s/files/1/1403/8315/files/IMG_4392_layered_sign.jpg?v=1759690802';
const layeredSignStudio = 'https://cdn.shopify.com/s/files/1/1403/8315/files/IMG_9105_2_1bbbf469-e3b3-4b57-b166-8bc3402e2d7c.jpg?v=1759697187';

import wallHanging from '@/assets/wall-hanging.jpg';
import galleryFreakshow from '@/assets/gallery-freakshow.jpg';
import carousel2 from '@/assets/carousel-2.jpg';
import galleryGoogle from '@/assets/gallery-google.jpg';
import wallHangingParliament from '@/assets/wall-hanging-parliament.jpg';
import galleryElement from '@/assets/gallery-element.jpg';
import wallHangingWineHouse from '@/assets/wall-hanging-wine-house.jpg';
import layeredSignsHero from '@/assets/layered-signs.jpg';
import chopSueySign from '@/assets/chop-suey-sign.jpg';
const marquee1 = 'https://cdn.shopify.com/s/files/1/1403/8315/files/1_lights_on_studio.webp';
const marquee2 = 'https://cdn.shopify.com/s/files/1/1403/8315/files/2_lights_on_studio.webp';
import foodTruckBarMonte from '@/assets/food-truck-bar-monte.jpg';
import foodTruckBar from '@/assets/food-truck-bar.jpg';
import foodTruckHouseFood from '@/assets/food-truck-house-food.jpg';
import foodTruckCoffeeBuns from '@/assets/food-truck-coffee-buns.jpg';
import foodTruckDonuts from '@/assets/food-truck-donuts.jpg';
import foodTruckSmokehouse from '@/assets/food-truck-smokehouse.jpg';
import foodTruckSteakstop from '@/assets/food-truck-steakstop.jpg';

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
    heroImage: layeredSignsHero,
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
    headline: "Bring Your Walls to Life with Vintage Marquee Letters",
    subheadline: "Handcrafted steel letters that hang like artwork and glow with timeless charm. Perfect for homes, restaurants, studios, shops, or any space that needs bold personality.",
    ctaText: "Get a Custom Quote in Under 5 Minutes",
    secondaryCtaText: "See Sign Examples",
    ctaAction: "pricing",
    heroImage: "https://cdn.shopify.com/s/files/1/1403/8315/files/IMG_89FDB5B68894-1.jpg?v=1759690677",
    heroImageAlt: "Vintage wall-hanging marquee letters on rustic wood wall",
    layout: "image-right",
    trustBar: "Trusted by shops, studios, and restaurants across the country"
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
        content: "The wall-hanging letters transformed our café! The warm glow creates the perfect ambiance.",
        rating: 5,
        image: testimonialIndoorWoman
      },
      {
        name: "James Thompson",
        role: "Bar Owner",
        content: "These signs are perfect for our outdoor patio! The vintage aesthetic and warm lighting create an amazing atmosphere.",
        rating: 5,
        image: testimonialOutdoorMan
      },
      {
        name: "David Chen",
        role: "Restaurant Owner",
        content: "The custom marquee sign has become the centerpiece of our restaurant. It creates the perfect ambiance and our customers love it!",
        rating: 5,
        image: testimonialChef
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
    title: "Real Signs in Real Spaces",
    subtitle: "See the vintage charm and warm glow in action",
    images: [
      { src: wallHanging, alt: "Rustic wall-hanging marquee letters on wood wall", caption: "Classic vintage finish on reclaimed wood" },
      { src: galleryFreakshow, alt: "FREAKSHOW marquee letters display", caption: "Bold vintage marquee lettering" },
      { src: carousel2, alt: "Retail shop wall signage", caption: "Boutique storefront installation" },
      { src: galleryGoogle, alt: "Google colorful marquee letters on wood wall", caption: "Custom colorful letter installation" },
      { src: wallHangingParliament, alt: "Parliament script marquee sign in coffee shop", caption: "Elegant script lettering in café setting" },
      { src: wallHangingWineHouse, alt: "Wine House marquee letters on building exterior", caption: "Outdoor patio installation with warm glow" }
    ]
  },
  
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "How easy are these to hang?",
        answer: "Super easy! These signs hang on your wall just like framed artwork using a simple nail or screw. More permanent mounting options are available if needed. Simply hang and plug in."
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
        answer: "We use G30 globe bulbs that can be replaced with any candelabra-sized base bulb that is 7w or less, including LEDs. Amazon is the best place to find a wide variety of bulb options."
      },
      {
        question: "What are the sizing options?",
        answer: "We charge the same price for letters from 12\" up to 24\", with tiered pricing after that. Pricing is based on size and font style. Decorative, serif, or script fonts are a little more than simple sans-serif style fonts."
      },
      {
        question: "Do you offer installation services?",
        answer: "These signs are easy to hang and plug in with a standard plug—no professional installation needed! Framing bars are an optional upgrade to connect all the letters together, making it hang as a single unit for ease of hanging in a high or difficult location."
      },
      {
        question: "What's the difference between painted and powder-coated finishes?",
        answer: "We can do the weathered/distressed vintage look when painting. If used outdoors, painted signs will continue to rust and patina over time for that authentic vintage character. If you don't want the rustic weathered look, the powder coat upgrade is available and gives it a smooth, shiny look with enhanced weather protection."
      },
      {
        question: "What's the turn-around time?",
        answer: "We need 4-6 weeks from the day the order is finalized to handcraft your custom sign. Rush orders are available for an additional fee if you need it sooner."
      },
      {
        question: "What kind of power do they require?",
        answer: "These signs use a standard 2-prong plug for power—just plug them in like you would a lamp. No special wiring or electrical work required."
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
  pageTitle: "Commercial Marquee Letters for Sale | 36\" & 48\" Stand-Up Letters for Events",
  metaDescription: "Commercial-grade 36\" and 48\" stand-up marquee letters for schools, universities, corporations, and event businesses. Self-standing, LED-lit, and built for repeat use. Letters, numbers, symbols, and topper phrases available.",
  keywords: ["commercial marquee letters", "marquee letters for sale", "36 inch marquee letters", "48 inch marquee letters", "stand-up marquee letters", "marquee letters for schools", "marquee letters for universities", "marquee letters for corporate events", "custom marquee letters for events", "marquee numbers and symbols"],
  
  hero: {
    headline: "Commercial 36\" & 48\" Stand-Up Marquee Letters for Sale",
    subheadline: "Built for schools, universities, corporations, and event companies that need bold, reusable signage for every occasion.",
    ctaText: "Get Your Quote",
    ctaAction: "pricing",
    heroImage: '/images/hero-lockwoods.webp',
    heroImageAlt: "36-inch stand-up marquee letters spelling THE LOCKWOODS at an elegant event venue",
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
        description: "At 36\" to 48\" tall with LED bulbs and a sleek finish, they make a big impact at graduations, pep rallies, corporate events, and brand activations.",
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
        name: "Events",
        role: "University of Texas",
        content: "We purchased marquee letters for multiple university events, including graduation and athletic pep rallies. The quality is exceptional, and they've become a core part of our campus event branding.",
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
        image: testimonialLakeshaOutdoor,
        imageStyle: { filter: 'sepia(0.2) contrast(0.9) brightness(1.05) saturate(0.85)' }
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
      { src: image1969, alt: "36-inch marquee numbers spelling 1969 at a themed event" },
      { src: imageElev8, alt: "36-inch stand-up marquee letters spelling ELEV8 at a corporate brand activation" },
      { src: imageMarryMe, alt: "36-inch marquee letters spelling MARRY ME at an outdoor proposal event" },
      { src: imageDrewiaHill, alt: "36-inch stand-up marquee letters spelling a custom name at an event venue" },
      { src: imageSetup1, alt: "Professional setup of 36-inch commercial marquee letters on stage" },
      { src: imageSetup2, alt: "Stand-up marquee letters displayed at a corporate event venue" }
    ]
  },
  
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What sizes are available?",
        answer: "We offer 36\" and 48\" stand-up marquee letters. The 36\" size is the most popular — it's easier to store, transport, and set up, and ships faster. The 48\" size is available for buyers who need maximum visibility at large venues or outdoor events."
      },
      {
        question: "What's the difference between 36\" and 48\" letters?",
        answer: "Both sizes are built the same way — powder-coated steel, LED-lit, self-standing. The 48\" letters are taller and more visible from a distance, making them ideal for large auditoriums, outdoor stadiums, or convention halls. The 36\" letters are easier to handle and store, and work great for most indoor venues, stages, and event spaces."
      },
      {
        question: "Do you sell numbers and symbols too?",
        answer: "Yes. We offer the full alphabet A–Z, numbers 0–9, and common symbols including the ampersand (&), hashtag (#), and heart (♥). This lets you spell out dates, years, scores, hashtags, and custom phrases beyond just names."
      },
      {
        question: "What are toppers?",
        answer: "Toppers are 15\" tall word signs like THE, MR&MRS, CLASS OF, and BABY. Each phrase is pre-mounted on a shared base so you can set them on top of your 36\" letters for layered displays — great for graduations, team events, and branded setups."
      },
      {
        question: "Do you offer display stands?",
        answer: "Yes. We offer optional double-row display stands that hold two rows of letters side by side. These are useful for spelling out longer names, dates, or phrases in a compact footprint."
      },
      {
        question: "How are the letters packaged for shipping?",
        answer: "Letters ship in reusable foam-lined boxes designed for repeated use. Each letter is individually cushioned to prevent damage during transit and storage. The boxes are built to last through many events — not just one shipment."
      },
      {
        question: "Where are these made?",
        answer: "We manufacture our letters overseas through a trusted production partner we've worked with for over 10 years. That relationship is what allows us to offer this level of quality, powder coating, precision packing, and attention to detail — all at a price that simply wouldn't be possible if made locally."
      },
      {
        question: "Is there a warranty?",
        answer: "Yes. We replace any items damaged beyond simple repair during shipping or due to a manufacturing issue. We do not replace items damaged from dropping, tipping, or misuse. The product is built strong and packed well — breakage is rare, and we'll always take care of you if it's something on our end."
      },
      {
        question: "What kind of bulbs do you use?",
        answer: "We use LED bulbs with E12 (candelabra) bases — long-lasting, energy efficient, and easy to replace. You'll receive spare bulbs with your order, and if you ever need more, we can ship replacements. You can also find compatible options on Amazon that fit the same base."
      }
    ]
  },
  
  business: {
    name: "Commercial Stand-Up Marquee Letters",
    description: "Commercial-grade stand-up marquee letters for schools, universities, corporations, and event businesses",
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

// Food Truck Signs Template
export const foodTruckSignsConfig: TemplateConfig = {
  pageTitle: "Custom Food Truck Marquee Signs - Illuminated Menu & Brand Signage",
  metaDescription: "Custom marquee signs designed specifically for food trucks and mobile vendors. Bright, eye-catching illuminated signage that attracts customers and showcases your menu.",
  keywords: ["food truck signs", "mobile vendor signs", "illuminated menu boards", "custom food signage", "food truck lighting", "vendor marquee signs"],
  
  hero: {
    headline: "Custom Signs That Make Your Food Truck Impossible to Ignore",
    subheadline: "Custom-fabricated metal signs built for food trucks, trailers, and pop-ups. From glowing marquee letters to bold layered logos, we create high-impact signage that draws attention and drives foot traffic.",
    ctaText: "Start My Custom Food Truck Sign",
    secondaryCtaText: "Explore Food Truck Projects",
    ctaAction: "pricing",
    heroImage: foodTruckBarMonte,
    heroImageAlt: "Bar Monte food truck with illuminated marquee sign",
    layout: "image-right",
    
  },
  
  features: {
    title: "Why Mobile Vendors Love Our Signs",
    subtitle: "Built for the road and designed to attract customers",
    items: [
      {
        title: "Made for the Road",
        description: "Bold and bright, secure, and built to handle mobile life — from streets to festivals",
        icon: "🚚"
      },
      {
        title: "Glows Day and Night",
        description: "Bright bulbs and bold letters get noticed, even in crowded vendor rows",
        icon: "💡"
      },
      {
        title: "Custom Words or Logos",
        description: "Spell your truck name, best-selling item, or show off your full logo in 3D",
        icon: "🎨"
      }
    ]
  },
  
  testimonials: {
    title: "Happy Food Truck Owners",
    items: [
      {
        name: "Tyrell M.",
        role: "Owner, Buns & BBQ",
        content: "Our trailer went from blending in to being the center of attention. We doubled our foot traffic after adding the sign.",
        rating: 5,
        image: testimonialFoodVendor1
      },
      {
        name: "Maria S.",
        role: "Food Truck Operator",
        content: "People spot us from blocks away now. The sign paid for itself in two months from the extra customers it brought in!",
        rating: 5,
        image: testimonialFoodVendor2
      },
      {
        name: "BAR-B-CUTIE Food Truck",
        role: "Mobile BBQ Vendor",
        content: "Best decision we made for our business. The glowing sign makes us impossible to miss at festivals and events.",
        rating: 5,
        image: testimonialBarbcutieTruck
      }
    ]
  },
  
  pricing: {
    title: "Custom Food Truck Sign Pricing",
    subtitle: "Every truck is different - we'll design the perfect sign for your setup",
    packages: [
      {
        name: "Get Your Custom Quote",
        description: "Food truck signs are custom-designed based on your specific needs—truck size, branding, mounting requirements, and budget. Contact us for a personalized quote.",
        priceRange: "Custom Pricing",
        features: [
          "Custom design matching your brand",
          "Any size to fit your truck or trailer",
          "Powder-coated steel construction",
          "Energy-efficient LED bulbs",
          "Weather-resistant outdoor rating",
          "Secure mounting hardware included",
          "Easy electrical hookup instructions",
          "Color and style options available"
        ],
        ctaText: "Request Food Truck Quote"
      }
    ]
  },
  
  gallery: {
    title: "Vendor Sign Gallery",
    subtitle: "",
    images: [
      { src: foodTruckBar, alt: "BAR illuminated marquee sign at food venue" },
      { src: foodTruckHouseFood, alt: "House Food & Booze turquoise marquee sign on food truck" },
      { src: foodTruckCoffeeBuns, alt: "Coffee & Buns illuminated marquee letters" },
      { src: foodTruckDonuts, alt: "Let's Eat Donuts marquee sign on orange food truck" },
      { src: foodTruckSmokehouse, alt: "Smokehouse red and yellow gradient marquee letters" },
      { src: foodTruckSteakstop, alt: "Steak Stop large red marquee letters" }
    ]
  },
  
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What kind of power system do these signs use?",
        answer: "Yes, they plug in like a lamp and are low wattage. LEDs are available as an upgrade."
      },
      {
        question: "Can the sign handle travel and weather?",
        answer: "Yes, we can build a bracket that folds down for easy transport. Our signs are built with durable metal construction and we offer various finish options including standard paint, natural patina/rust finishes, or powder coating for added weather resistance."
      },
      {
        question: "What kind of bulbs do you use?",
        answer: "We use commercial-grade incandescent bulbs that give that classic warm marquee glow. Each bulb is easily replaceable, and we include extras with your order."
      },
      {
        question: "What's the turnaround time?",
        answer: "For these signs, we need 6-8 weeks from design approval to completion. This allows us to craft each sign with the quality and attention to detail your business deserves."
      },
      {
        question: "How do I install the sign on my truck?",
        answer: "You are responsible for mounting to your truck. We don't do any installations. These are plug-n-play signs. We are not trailer builders, so you would be responsible for that aspect. There are some leaking concerns, etc. to consider, so it requires some experienced installers or builders to properly mount them."
      },
      {
        question: "What sizes do you offer?",
        answer: "We can make almost any size to fit your truck or trailer. We charge by the square-inch and per color. Let us know what space you're working with and we'll design the perfect sign for you."
      }
    ]
  },
  
  business: {
    name: "Food Truck Marquee Signs",
    description: "Custom illuminated marquee signs for food trucks, trailers, and mobile vendors.",
    type: "Product",
    industry: "food service"
  },
  
  theme: {
    primaryColor: "#DC2626",
    secondaryColor: "#EA580C",
    accentColor: "#FBBF24",
    gradientFrom: "#DC2626",
    gradientTo: "#EA580C"
  }
};

// 3D Logo Layered Signs Template
export const logoSignsConfig: TemplateConfig = {
  pageTitle: "3D Logo Layered Signs - Custom Brand Signage with Depth & Dimension",
  metaDescription: "Custom layered metal signs that bring your logo to life with depth, color, and bold dimension. Perfect for walls, lobbies, event backdrops, and branded spaces.",
  keywords: ["3D logo signs", "layered logo signs", "dimensional logo", "brand signage", "custom logo", "3D metal signs", "office signage"],
  
  hero: {
    headline: "Custom Fabricated 3D Metal Signs That Command Attention",
    subheadline: "Each piece is custom-built in metal with layered depth, hand-finished detail, and a bold vintage edge. Designed for brands, boutiques, restaurants, and spaces that want more than a standard sign — they want a focal point.",
    ctaText: "Start Your Custom Project",
    secondaryCtaText: "Explore Past Custom Builds",
    ctaAction: "pricing",
    heroImage: "https://cdn.shopify.com/s/files/1/1403/8315/files/logo-tucks-1.jpg?v=1759693606",
    heroImageAlt: "Tuck's Truffles 3D layered logo sign with dimensional depth",
    layout: "image-left",
    trustBar: "Trusted by businesses, creators, and event pros nationwide"
  },
  
  features: {
    title: "Why People Love Our 3D Logo Signs",
    subtitle: "Built to make your brand impossible to ignore",
    items: [
      {
        title: "Multi-Layer Metal Build",
        description: "Each layer is precision-cut and assembled by hand to create stunning visual depth that makes your logo pop off the wall.",
        icon: "🔧"
      },
      {
        title: "Bold Branding That Pops",
        description: "Eye-catching dimensional design that photographs beautifully and creates lasting impressions with clients and customers.",
        icon: "✨"
      },
      {
        title: "Lightweight & Mount-Ready",
        description: "Despite the dramatic appearance, our signs are surprisingly lightweight and easy to install on any wall or backdrop.",
        icon: "⚡"
      },
      {
        title: "Indoor & Event-Ready",
        description: "Perfect for office lobbies, retail stores, trade show booths, conference backdrops, and branded photo walls.",
        icon: "🏢"
      },
      {
        title: "Fully Custom Colors",
        description: "Match your exact brand colors with precision painting. We can replicate any Pantone, hex code, or color sample you provide.",
        icon: "🎨"
      },
      {
        title: "Optional LED Backlighting",
        description: "Add dramatic LED backlighting to make your logo glow and stand out even more in dim environments or evening events.",
        icon: "💡"
      }
    ]
  },
  
  testimonials: {
    title: "What Business Owners Are Saying",
    items: [
      {
        name: "Crystal R.",
        role: "Boutique Owner",
        content: "We love our new sign! It completely transformed our office wall and made our brand pop. Everyone asks where we got it.",
        rating: 5,
        image: testimonialVintagePolaroid
      },
      {
        name: "Marcus T.",
        role: "Event Planner",
        content: "The 3D logo signs are a game-changer for our corporate events. Clients are blown away by the professional look and dimensional impact.",
        rating: 5,
        image: testimonialWhiteMale
      },
      {
        name: "Jennifer L.",
        role: "Marketing Director",
        content: "Our layered sign is the centerpiece of our lobby. It's a conversation starter and perfectly represents our brand's bold personality.",
        rating: 5,
        image: testimonialRealistic3
      }
    ]
  },
  
  pricing: {
    title: "Custom Pricing for Your Brand",
    subtitle: "Every logo is unique - let us create the perfect sign for you",
    packages: [
      {
        name: "Get Your Custom Quote",
        description: "3D logo signs are custom-made based on your logo complexity, size, color requirements, and finish options. Contact us for a personalized quote.",
        priceRange: "Custom Pricing",
        features: [
          "Precision-cut metal layers",
          "Hand-assembled construction",
          "Exact brand color matching",
          "Multiple size options available",
          "Optional LED backlighting",
          "Professional installation hardware",
          "Perfect for offices, events, retail spaces"
        ],
        ctaText: "Request Custom Quote"
      }
    ]
  },
  
  gallery: {
    title: "3D Layered Logo Sign Gallery",
    subtitle: "",
    images: [
      { src: "https://cdn.shopify.com/s/files/1/1403/8315/files/chicago_layered-sign.jpg?v=1759695333", alt: "Chicago layered 3D logo sign" },
      { src: "https://cdn.shopify.com/s/files/1/1403/8315/files/image_-_2023-06-08T131820.287.png?v=1759695499", alt: "Exit Zero layered dimensional logo" },
      { src: layeredSignOffice, alt: "3D layered logo in office setting" },
      { src: layeredSignWorkshop, alt: "Layered logo sign in workshop" },
      { src: layeredSignRetail, alt: "3D logo in retail space" },
      { src: layeredSignStudio, alt: "Dimensional logo in studio" }
    ]
  },
  
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What kind of file do you need?",
        answer: "We prefer an Illustrator or vector file for the best quality, but we can work with most file types including JPG, PNG, and PDF."
      },
      {
        question: "Can you match my brand colors exactly?",
        answer: "Yes! We can color-match using provided HEX, Pantone, or CMYK references. Custom color matching is an additional cost."
      },
      {
        question: "What sizes do you offer?",
        answer: "We can make almost any size, but most signs range from 24\" to 60\" wide. Let us know what space you're working with. We charge by the square-inch and per color."
      },
      {
        question: "Can I use my logo or design?",
        answer: "Yes — just upload it! We work from logos, sketches, or even rough concepts."
      },
      {
        question: "How do they ship?",
        answer: "Typically we ship UPS ground unless the size is too large, then we use freight."
      },
      {
        question: "What's the turn-around time?",
        answer: "We need 4-6 weeks from the day the order is finalized to handcraft your custom sign. Rush orders are available for an additional fee if you need it sooner."
      }
    ]
  },
  
  business: {
    name: "3D Logo Layered Signs",
    description: "Custom layered metal signs that bring logos to life with depth, color, and dimension for offices, events, and retail spaces.",
    type: "Product",
    industry: "commercial signage"
  },
  
  theme: {
    primaryColor: "#7C3AED",
    secondaryColor: "#2563EB",
    accentColor: "#8B5CF6",
    gradientFrom: "#7C3AED",
    gradientTo: "#2563EB"
  }
};