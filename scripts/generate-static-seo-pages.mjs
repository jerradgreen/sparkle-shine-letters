import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const siteOrigin = 'https://inventory.vintagemarqueelights.com';
const distDir = path.resolve('dist');
const baseHtmlPath = path.join(distDir, 'index.html');

const routes = [
  {
    path: '/',
    title: 'Custom Marquee Signs & Letters | Vintage Marquee Lights',
    description:
      'Custom marquee signs and letters built to own since 2008. Wall-hanging letters, 3D logo signs, food truck signage, event letters, and rental inventory.',
    keywords:
      'custom marquee signs, marquee signs, marquee lights, custom marquee letters, wall hanging marquee letters, food truck signs, event marquee letters, rental inventory packages',
    h1: 'Custom Marquee Signs & Letters — Trusted by Thousands Since 2008',
    intro:
      'Vintage Marquee Lights designs and builds custom marquee signs, illuminated marquee letters, 3D logo signs, food truck signs, wall-hanging letters, event stand-up letters, and rental inventory packages for businesses, brands, schools, restaurants, event professionals, and rental companies nationwide.',
    links: [
      ['Individual wall-hanging marquee letters', '/wall-hanging-signs'],
      ['3D layered logo signs', '/3d-logos'],
      ['food truck and mobile vendor signs', '/mobile-vendor-signs'],
      ['36-inch and 48-inch event marquee letters', '/event-standup-signs'],
      ['rental inventory packages', '/rental-inventory'],
    ],
  },
  {
    path: '/wall-hanging-signs',
    title: 'Wall-Hanging Marquee Letters & Custom Signs | Vintage Marquee Lights',
    description:
      'Custom wall-hanging marquee letters and steel lighted signs for restaurants, bars, retail stores, offices, studios, and homes. Handcrafted by Vintage Marquee Lights since 2008.',
    keywords:
      'wall hanging marquee letters, custom wall signs, marquee letters, lighted wall signs, vintage marquee letters, restaurant signs, bar signs',
    h1: 'Wall-Hanging Marquee Letters and Custom Lighted Signs',
    intro:
      'Our wall-hanging marquee letters are handcrafted steel signs that hang like artwork and plug in like a lamp. They are built for restaurants, bars, retail shops, offices, studios, homes, and branded interiors that need a custom illuminated focal point.',
    links: [
      ['Request a wall-hanging sign quote', '/quote/wall-hanging'],
      ['See 3D logo signs', '/3d-logos'],
      ['Compare custom sign styles', '/'],
    ],
  },
  {
    path: '/3d-logos',
    title: 'Custom Business Signs & Logo Signs | Vintage Marquee Lights',
    description:
      'Custom metal signs built from your logo, design, or idea. Handcrafted for restaurants, bars, offices, retail stores, and any business that wants a sign that actually looks like them. Plug in and glow.',
    keywords:
      'custom business sign, custom metal sign, custom logo sign, custom sign for restaurant, custom sign for office, custom lighted business sign, custom sign maker',
    h1: 'Custom Signs Built From Your Design',
    intro:
      'Send us your logo, your name, or just an idea. We build it from metal by hand and ship it ready to hang. Restaurants, bars, offices, retail stores, and homes across the country have one on their wall.',
    links: [
      ['Request a 3D logo sign quote', '/quote/3d-logos'],
      ['See wall-hanging marquee letters', '/wall-hanging-signs'],
      ['Explore food truck signs', '/mobile-vendor-signs'],
    ],
  },
  {
    path: '/mobile-vendor-signs',
    title: 'Food Truck Signs & Mobile Vendor Marquee Signs | Vintage Marquee Lights',
    description:
      'Custom food truck signs and mobile vendor marquee signs built from steel for food trucks, trailers, carts, pop-ups, and mobile businesses nationwide.',
    keywords:
      'food truck signs, mobile vendor signs, food truck marquee sign, custom food truck signage, trailer signs, mobile business signs',
    h1: 'Food Truck Signs and Mobile Vendor Marquee Signs',
    intro:
      'Vintage Marquee Lights builds bold custom signage for food trucks, trailers, pop-ups, carts, and mobile vendors. Each sign is designed to help mobile businesses stand out, attract attention, and create a recognizable brand presence at events and high-traffic locations.',
    links: [
      ['Request a mobile vendor sign quote', '/quote/mobile-vendor'],
      ['See 3D logo signs', '/3d-logos'],
      ['Explore all custom marquee sign styles', '/'],
    ],
  },
  {
    path: '/event-standup-signs',
    title: 'Commercial Stand-Up Marquee Letters for Sale | 36" & 48" Freestanding Letters',
    description:
      'Commercial-grade 36" and 48" freestanding marquee letters for sale. Built for repeated event use by universities, venues, event companies, brands, and schools for graduations, activations, and stage displays.',
    keywords:
      'commercial marquee letters for sale, freestanding marquee letters, 36 inch marquee letters, 48 inch marquee letters, stand-up marquee letters for events, marquee letters for universities, marquee letters for corporate events, event marquee letters',
    h1: 'Own Your Event Branding — Reusable Marquee Letters Built for Years of Use',
    intro:
      'Vintage Marquee Lights builds and sells commercial-grade 36-inch and 48-inch freestanding marquee letters you own. They are purchased by businesses, corporations, schools, universities, churches, venues, athletic departments, and organizations that need reusable event signage for graduations, brand activations, conferences, recruiting events, banquets, and stage displays — not one-time decoration and not a rental.',
    links: [
      ['Request an event letter quote', '/quote/event-standup'],
      ['Start or expand a rental inventory', '/rental-inventory'],
      ['Learn about marquee letters for event pros', '/marquee-letters-for-event-pros'],
    ],

  },
  {
    path: '/rental-inventory',
    title: 'Marquee Letter Rental Inventory Packages | Vintage Marquee Lights',
    description:
      'Commercial-grade marquee letter rental inventory packages for entrepreneurs and event rental companies. Start or expand a marquee light rental business with 36-inch and 48-inch letters.',
    keywords:
      'marquee letter rental inventory, marquee light rental business, rental inventory packages, event rental letters, commercial marquee letters',
    h1: 'Marquee Letter Rental Inventory Packages',
    intro:
      'Vintage Marquee Lights sells commercial-grade marquee letter rental inventory packages for entrepreneurs and event rental companies. Packages include durable 36-inch and 48-inch letters designed for repeated bookings, event setups, and long-term rental business growth. Every package includes a 10-day inspection window after delivery. Equipment financing is available for qualified buyers through APPROVE, which connects applicants with a network of third-party lenders; rates and terms vary and are subject to lender approval.',
    links: [
      ['Request a rental inventory quote', '/quote/rental-inventory'],
      ['Learn how to start a marquee rental business', '/start-marquee-rental-business'],
      ['Rental business education hub', '/rental-business'],
      ['Explore financing through APPROVE', 'https://vintagemarqueelights.approvepayments.com/'],
    ],
  },
  {
    path: '/custom-marquee-signs',
    title: 'Custom Marquee Signs & Custom Signs | Vintage Marquee Lights',
    description:
      'Custom marquee signs, light-up signs, logo signs and one-of-a-kind custom signs made to order since 2008. Send your logo, design or idea and get a quote.',
    keywords:
      'custom marquee signs, custom marquee sign, custom signs, custom business signs, custom light up signs, custom logo signs, custom wall signs, vintage marquee signs, marquee lights, light bulb signs',
    h1: 'Custom Marquee Signs & One-of-a-Kind Custom Signs',
    intro:
      'Vintage Marquee Lights creates one-of-a-kind custom signs for businesses, brands and spaces across the country. Start with your logo, your design, or just an idea. Explore wall-hanging marquee signs and letters, custom logo and layered signs, mobile vendor and food truck signs, or send us something completely custom.',
    links: [
      ['Explore wall-hanging marquee signs and letters', '/wall-hanging-signs'],
      ['Explore custom logo signs', '/3d-logos'],
      ['Explore mobile vendor signs', '/mobile-vendor-signs'],
      ['Request a custom quote', '/quote/custom'],
    ],
  },
  {
    path: '/wedding-marquee-signs',
    title: 'Wedding Marquee Letters & Signs | Vintage Marquee Lights',
    description:
      'Commercial-grade wedding marquee letters and illuminated signs for ceremonies, receptions, venues, and wedding rental professionals nationwide.',
    keywords:
      'wedding marquee letters, wedding marquee signs, wedding signage, wedding letters, marquee letters wedding, illuminated wedding signs',
    h1: 'Wedding Marquee Letters and Illuminated Wedding Signs',
    intro:
      'Vintage Marquee Lights builds commercial-grade 36-inch and 48-inch wedding marquee letters used by venues, planners, and rental professionals for ceremonies, receptions, and branded wedding experiences.',
    links: [
      ['See 36-inch and 48-inch event marquee letters', '/event-standup-signs'],
      ['Start or expand a wedding rental inventory', '/rental-inventory'],
      ['Marquee letters for event pros', '/marquee-letters-for-event-pros'],
    ],
  },
  {
    path: '/corporate-marquee-signs',
    title: 'Corporate Marquee Letters & Event Signage | Vintage Marquee Lights',
    description:
      'Commercial-grade corporate marquee letters and branded illuminated signs for conferences, brand activations, trade shows, and corporate events.',
    keywords:
      'corporate marquee letters, corporate event signage, conference signs, brand activation signs, illuminated corporate signs, trade show signs',
    h1: 'Corporate Marquee Letters and Branded Event Signage',
    intro:
      'Vintage Marquee Lights manufactures commercial-grade marquee letters and branded illuminated signs used at corporate events, conferences, brand activations, product launches, and trade show installations.',
    links: [
      ['See 36-inch and 48-inch event marquee letters', '/event-standup-signs'],
      ['View 3D logo signs', '/3d-logos'],
      ['Marquee letters for event pros', '/marquee-letters-for-event-pros'],
    ],
  },
  {
    path: '/marquee-letters-for-event-pros',
    title: 'Marquee Letters for Event Pros | Vintage Marquee Lights',
    description:
      'Commercial-grade marquee letters built for event professionals, planners, venues, and rental companies that need durable inventory for repeated bookings.',
    keywords:
      'marquee letters for event pros, event professional marquee letters, event planner marquee letters, venue marquee letters, marquee letter rental',
    h1: 'Marquee Letters Built for Event Professionals',
    intro:
      'Vintage Marquee Lights supplies event pros, planners, venues, and rental companies with commercial-grade marquee letters engineered for repeated setups, transport, and long-term inventory use.',
    links: [
      ['See 36-inch and 48-inch event marquee letters', '/event-standup-signs'],
      ['Rental inventory packages', '/rental-inventory'],
      ['How to start a marquee rental business', '/start-marquee-rental-business'],
    ],
  },
  {
    path: '/rental-business',
    title: 'How to Start a Marquee Letter Rental Business | Vintage Marquee Lights',
    description:
      'Learn how to start a profitable marquee letter rental business. Discover startup costs, inventory strategy, ROI planning, and commercial-grade equipment recommendations.',
    keywords:
      'marquee letter rental business, start rental business, marquee rental business guide, event rental business, rental business education',
    h1: 'How to Start a Marquee Letter Rental Business',
    intro:
      'Startup costs, inventory strategy, profit margins, and the equipment decisions that separate a real rental operation from an expensive hobby. Qualified buyers can also finance inventory through APPROVE, an equipment-financing platform that connects applicants with a network of third-party lenders, to spread the purchase over monthly payments instead of paying upfront; all financing is subject to lender approval.',
    links: [
      ['Startup cost breakdown', '/rental-business/startup-cost'],
      ['Building a scalable inventory', '/rental-business/building-a-scalable-inventory'],
      ['Profitability and unit economics', '/rental-business/profitability'],
      ['Marquee letter rental inventory packages', '/rental-inventory'],
      ['Request rental inventory pricing', '/quote/rental-inventory'],
      ['Explore financing through APPROVE', 'https://vintagemarqueelights.approvepayments.com/'],
    ],
  },
  {
    path: '/rental-business/startup-cost',
    title: 'Marquee Letter Rental Startup Cost | Vintage Marquee Lights',
    description:
      'What it actually costs to start a marquee letter rental business — inventory, transportation, storage, insurance, and operating expenses explained.',
    keywords:
      'marquee letter rental startup cost, rental business startup cost, marquee rental business investment, start marquee rental business',
    h1: 'Marquee Letter Rental Startup Cost',
    intro:
      'A practical breakdown of the real costs involved in launching a marquee letter rental business, including inventory, transportation, storage, insurance, and ongoing operating expenses.',
    links: [
      ['Building a scalable inventory', '/rental-business/building-a-scalable-inventory'],
      ['Profitability and unit economics', '/rental-business/profitability'],
      ['Browse rental inventory packages', '/rental-inventory'],
    ],
  },
  {
    path: '/rental-business/building-a-scalable-inventory',
    title: 'Building a Scalable Marquee Letter Rental Inventory | Vintage Marquee Lights',
    description:
      'How to plan, expand, and scale a marquee letter rental inventory — letter counts, sizing strategy, and reinvestment milestones for rental entrepreneurs.',
    keywords:
      'scalable rental inventory, marquee letter inventory planning, rental business growth, marquee rental inventory expansion',
    h1: 'Building a Scalable Marquee Letter Rental Inventory',
    intro:
      'How rental entrepreneurs plan, expand, and scale a marquee letter rental inventory over time — including letter counts, size mix, and reinvestment milestones.',
    links: [
      ['Startup cost breakdown', '/rental-business/startup-cost'],
      ['Profitability and unit economics', '/rental-business/profitability'],
      ['Browse rental inventory packages', '/rental-inventory'],
    ],
  },
  {
    path: '/rental-business/profitability',
    title: 'Marquee Letter Rental Profitability | Vintage Marquee Lights',
    description:
      'How marquee letter rental businesses make money — booking rates, average ticket size, payback period, and long-term profitability fundamentals.',
    keywords:
      'marquee letter rental profitability, rental business profit, marquee rental income, rental unit economics',
    h1: 'Marquee Letter Rental Profitability',
    intro:
      'How marquee letter rental businesses generate revenue and reach profitability — booking cadence, average ticket size, payback period, and operating margin fundamentals.',
    links: [
      ['Startup cost breakdown', '/rental-business/startup-cost'],
      ['Building a scalable inventory', '/rental-business/building-a-scalable-inventory'],
      ['Browse rental inventory packages', '/rental-inventory'],
    ],
  },
  {
    path: '/start-marquee-rental-business',
    title: 'How to Start a Marquee Letter Rental Business | Vintage Marquee Lights',
    description:
      'Step-by-step guidance for starting a marquee letter rental business — from initial inventory and pricing to booking your first events.',
    keywords:
      'how to start marquee rental business, start marquee letter rental business, marquee rental startup, rental business guide',
    h1: 'How to Start a Marquee Letter Rental Business',
    intro:
      'A step-by-step guide for entrepreneurs starting a marquee letter rental business — covering initial inventory selection, pricing strategy, marketing, and booking your first events.',
    links: [
      ['Marquee letter rental inventory packages', '/rental-inventory'],
      ['Startup cost breakdown', '/rental-business/startup-cost'],
      ['Profitability and unit economics', '/rental-business/profitability'],
    ],
  },
  {
    path: '/blog',
    title: 'Marquee Signs Blog | Vintage Marquee Lights',
    description:
      'Articles and guides on custom marquee signs, marquee letters, rental business strategy, and signage for schools, events, and food trucks.',
    keywords:
      'marquee signs blog, marquee letters blog, rental business articles, signage guides, marquee sign articles',
    h1: 'Marquee Signs Blog',
    intro:
      'Articles, guides, and educational resources from Vintage Marquee Lights covering custom marquee signs, marquee letters, rental business strategy, and signage for schools, events, and food trucks.',
    links: [
      ['Why schools buy commercial marquee letters', '/blog/why-schools-buy-commercial-marquee-letters'],
      ['36 vs 48 inch marquee letters', '/blog/36-vs-48-inch-marquee-letters'],
      ['Universities, teams, and marquee letter branding', '/blog/universities-teams-marquee-letters-branding'],
      ['Food truck and mobile vendor signage guide', '/blog/food-truck-mobile-vendor-signage-guide'],
      ['Marquee letter rental pricing guide', '/blog/marquee-letter-rental-pricing-guide'],
    ],
  },
  {
    path: '/blog/why-schools-buy-commercial-marquee-letters',
    title: 'Why Schools Buy Commercial-Grade Marquee Letters | Vintage Marquee Lights',
    description:
      'Why K-12 schools, universities, and athletic programs invest in commercial-grade marquee letters for events, ceremonies, and school spirit branding.',
    keywords:
      'school marquee letters, university marquee letters, commercial marquee letters for schools, school event signage, school branding signage',
    h1: 'Why Schools Buy Commercial-Grade Marquee Letters',
    intro:
      'Why K-12 schools, universities, and athletic programs invest in commercial-grade marquee letters for graduations, homecomings, sporting events, ceremonies, and ongoing school spirit branding.',
    links: [
      ['Universities, teams, and marquee letter branding', '/blog/universities-teams-marquee-letters-branding'],
      ['36-inch and 48-inch event marquee letters', '/event-standup-signs'],
      ['Marquee Signs Blog', '/blog'],
    ],
  },
  {
    path: '/blog/36-vs-48-inch-marquee-letters',
    title: '36 vs 48 Inch Marquee Letters: Which Size Is Right? | Vintage Marquee Lights',
    description:
      'Compare 36-inch and 48-inch marquee letters by visual impact, transport, storage, and rental pricing to choose the right size for your event or business.',
    keywords:
      '36 inch marquee letters, 48 inch marquee letters, marquee letter sizes, marquee letter size comparison, large marquee letters',
    h1: '36 vs 48 Inch Marquee Letters: Which Size Is Right for You?',
    intro:
      'A side-by-side comparison of 36-inch and 48-inch marquee letters covering visual impact, transport, storage, rental pricing, and the right use case for each size.',
    links: [
      ['36-inch and 48-inch event marquee letters', '/event-standup-signs'],
      ['Marquee letter rental pricing guide', '/blog/marquee-letter-rental-pricing-guide'],
      ['Marquee Signs Blog', '/blog'],
    ],
  },
  {
    path: '/blog/universities-teams-marquee-letters-branding',
    title: 'Universities and Teams: Marquee Letter Branding | Vintage Marquee Lights',
    description:
      'How universities, college athletic programs, and professional teams use commercial-grade marquee letters for branding, events, and fan activations.',
    keywords:
      'university marquee letters, college team marquee letters, athletic branding signage, team marquee letters, university event signage',
    h1: 'Universities and Teams: Marquee Letter Branding',
    intro:
      'How universities, college athletic programs, and professional teams use commercial-grade marquee letters for branded events, fan activations, recruitment, and game-day environments.',
    links: [
      ['Why schools buy commercial marquee letters', '/blog/why-schools-buy-commercial-marquee-letters'],
      ['36-inch and 48-inch event marquee letters', '/event-standup-signs'],
      ['Marquee Signs Blog', '/blog'],
    ],
  },
  {
    path: '/blog/food-truck-mobile-vendor-signage-guide',
    title: 'Food Truck and Mobile Vendor Signage Guide | Vintage Marquee Lights',
    description:
      'A complete guide to food truck signage and mobile vendor marquee signs — visibility, branding, materials, and design considerations for mobile food businesses.',
    keywords:
      'food truck signage guide, mobile vendor signs, food truck branding, trailer signage, mobile food business signs',
    h1: 'Food Truck and Mobile Vendor Signage Guide',
    intro:
      'A complete guide for food trucks, trailers, carts, and mobile vendors covering signage visibility, branding, materials, and design considerations that help mobile food businesses stand out.',
    links: [
      ['Food truck and mobile vendor signs', '/mobile-vendor-signs'],
      ['3D logo signs', '/3d-logos'],
      ['Marquee Signs Blog', '/blog'],
    ],
  },
  {
    path: '/blog/marquee-letter-rental-pricing-guide',
    title: 'Marquee Letter Rental Pricing Guide | Vintage Marquee Lights',
    description:
      'How to price marquee letter rentals — per-letter rates, package pricing, delivery fees, and market positioning for rental business operators.',
    keywords:
      'marquee letter rental pricing, rental pricing guide, marquee letter price, rental business pricing, per letter rental rates',
    h1: 'Marquee Letter Rental Pricing Guide',
    intro:
      'A pricing guide for marquee letter rental operators — covering per-letter rates, package pricing, delivery fees, market positioning, and how to set rates that protect margin.',
    links: [
      ['Marquee letter rental inventory packages', '/rental-inventory'],
      ['Rental profitability and unit economics', '/rental-business/profitability'],
      ['Marquee Signs Blog', '/blog'],
    ],
  },
  {
    path: '/faq',
    title: 'Frequently Asked Questions | Vintage Marquee Lights',
    description:
      'Answers to common questions about custom marquee signs, marquee letters, rental inventory packages, shipping, lead times, and warranty.',
    keywords:
      'vintage marquee lights faq, marquee signs faq, marquee letters faq, rental inventory questions, marquee sign warranty',
    h1: 'Frequently Asked Questions',
    intro:
      'Answers to common questions about Vintage Marquee Lights custom marquee signs, marquee letters, rental inventory packages, shipping, lead times, and warranty coverage.',
    links: [
      ['How it works', '/how-it-works'],
      ['Press and media', '/press'],
      ['Explore all custom marquee sign styles', '/'],
    ],
  },
  {
    path: '/press',
    title: 'Press and Media | Vintage Marquee Lights',
    description:
      'Press, media features, and notable installations from Vintage Marquee Lights — the original manufacturer of commercial-grade marquee letters since 2008.',
    keywords:
      'vintage marquee lights press, marquee signs media, marquee letters in the news, marquee sign manufacturer press',
    h1: 'Press and Media',
    intro:
      'Press features, media coverage, and notable installations from Vintage Marquee Lights, the original manufacturer of commercial-grade marquee letters since 2008.',
    links: [
      ['How it works', '/how-it-works'],
      ['FAQ', '/faq'],
      ['Explore all custom marquee sign styles', '/'],
    ],
  },
  {
    path: '/how-it-works',
    title: 'How It Works | Vintage Marquee Lights',
    description:
      'How Vintage Marquee Lights designs, manufactures, and ships custom marquee signs, marquee letters, and rental inventory packages nationwide.',
    keywords:
      'how vintage marquee lights works, custom marquee sign process, marquee letter manufacturing, marquee sign ordering process',
    h1: 'How It Works',
    intro:
      'How Vintage Marquee Lights designs, manufactures, and ships custom marquee signs, marquee letters, 3D logo signs, food truck signs, and rental inventory packages to customers nationwide.',
    links: [
      ['FAQ', '/faq'],
      ['Press and media', '/press'],
      ['Explore all custom marquee sign styles', '/'],
    ],
  },
];

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function canonicalFor(routePath) {
  return `${siteOrigin}${routePath === '/' ? '/' : routePath}`;
}

function rootFallback(route) {
  const links = route.links
    .map(([label, href]) => `<li><a href="${escapeHtml(href)}">${escapeHtml(label)}</a></li>`)
    .join('');

  return `<div id="root"><main class="seo-fallback" style="max-width:960px;margin:0 auto;padding:40px 24px;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;line-height:1.6;color:#0f3f4f;background:#fff8ed;"><h1>${escapeHtml(route.h1)}</h1><p>${escapeHtml(route.intro)}</p><nav aria-label="Related Vintage Marquee Lights pages"><ul>${links}</ul></nav></main></div>`;
}

function replaceOrInsertHead(html, tagRegex, replacement, before = '</head>') {
  if (tagRegex.test(html)) {
    return html.replace(tagRegex, replacement);
  }

  return html.replace(before, `  ${replacement}\n${before}`);
}

function buildHtml(baseHtml, route) {
  const canonical = canonicalFor(route.path);
  let html = baseHtml;

  html = replaceOrInsertHead(html, /<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);
  html = replaceOrInsertHead(html, /<meta[^>]+name=["']description["'][^>]*>/i, `<meta name="description" content="${escapeHtml(route.description)}">`);
  html = replaceOrInsertHead(html, /<meta[^>]+name=["']keywords["'][^>]*>/i, `<meta name="keywords" content="${escapeHtml(route.keywords)}">`);
  html = replaceOrInsertHead(html, /<link[^>]+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${canonical}">`);
  html = replaceOrInsertHead(html, /<meta[^>]+property=["']og:url["'][^>]*>/i, `<meta property="og:url" content="${canonical}">`);
  html = replaceOrInsertHead(html, /<meta[^>]+property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${escapeHtml(route.title)}">`);
  html = replaceOrInsertHead(html, /<meta[^>]+property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${escapeHtml(route.description)}">`);
  html = replaceOrInsertHead(html, /<meta[^>]+name=["']twitter:title["'][^>]*>/i, `<meta name="twitter:title" content="${escapeHtml(route.title)}">`);
  html = replaceOrInsertHead(html, /<meta[^>]+name=["']twitter:description["'][^>]*>/i, `<meta name="twitter:description" content="${escapeHtml(route.description)}">`);
  html = replaceOrInsertHead(html, /<meta[^>]+name=["']robots["'][^>]*>/i, '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">');

  html = html.replace(/<div id="root"><\/div>/, rootFallback(route));

  return html;
}

const baseHtml = await readFile(baseHtmlPath, 'utf8');

for (const route of routes) {
  const html = buildHtml(baseHtml, route);
  const outputDir = route.path === '/' ? distDir : path.join(distDir, route.path.slice(1));
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, 'index.html'), html);
}

console.log(`Generated static SEO HTML for ${routes.length} routes.`);
