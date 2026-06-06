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
    title: '3D Logo Signs & Dimensional Metal Signs | Vintage Marquee Lights',
    description:
      'Custom 3D layered logo signs made from dimensional metal with handcrafted depth, color separation, and optional lighting for businesses, restaurants, offices, and brands.',
    keywords:
      '3D logo signs, dimensional logo signs, layered metal signs, custom logo signs, business logo signs, restaurant logo signs',
    h1: 'Custom 3D Logo Signs and Dimensional Metal Signs',
    intro:
      'Vintage Marquee Lights turns business logos into dimensional metal signs with layered depth, hand-finished details, and optional lighting. These custom logo signs are designed for restaurants, retail stores, offices, studios, and branded spaces that need a permanent statement piece.',
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
    title: '36 and 48 Inch Event Marquee Letters | Vintage Marquee Lights',
    description:
      'Commercial-grade 36-inch and 48-inch stand-up marquee letters for weddings, corporate events, schools, venues, celebrations, and event rental professionals.',
    keywords:
      'event marquee letters, 36 inch marquee letters, 48 inch marquee letters, stand up marquee letters, wedding marquee letters, event letters',
    h1: '36-Inch and 48-Inch Stand-Up Event Marquee Letters',
    intro:
      'Our stand-up event marquee letters are commercial-grade freestanding letters built for weddings, corporate events, schools, venues, celebrations, and event rental professionals. They are designed for repeated setups, visual impact, and simple plug-in use.',
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
      'Vintage Marquee Lights sells commercial-grade marquee letter rental inventory packages for entrepreneurs and event rental companies. Packages include durable 36-inch and 48-inch letters designed for repeated bookings, event setups, and long-term rental business growth.',
    links: [
      ['Request a rental inventory quote', '/quote/rental-inventory'],
      ['Download the rental business guide', '/download/rental-guide'],
      ['Learn how to start a marquee rental business', '/start-marquee-rental-business'],
    ],
  },
  {
    path: '/custom-marquee-signs',
    title: 'Custom Marquee Signs Built to Own | Vintage Marquee Lights',
    description:
      'Custom marquee signs, marquee letters, lighted logo signs, and illuminated business signs handcrafted by Vintage Marquee Lights since 2008 for brands nationwide.',
    keywords:
      'custom marquee signs, marquee sign, marquee signs, marquee lights, custom marquee letters, lighted business signs, custom sign maker',
    h1: 'Custom Marquee Signs Built to Own',
    intro:
      'Vintage Marquee Lights designs and fabricates custom marquee signs for businesses, brands, restaurants, schools, venues, event companies, and mobile vendors. Choose wall-hanging marquee letters, 3D logo signs, food truck signs, event letters, or a fully custom illuminated sign made for your space.',
    links: [
      ['View wall-hanging marquee letters', '/wall-hanging-signs'],
      ['View 3D logo signs', '/3d-logos'],
      ['View food truck signs', '/mobile-vendor-signs'],
      ['Request a custom quote', '/quote/custom'],
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
