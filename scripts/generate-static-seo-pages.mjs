import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';

const origin = 'https://inventory.vintagemarqueelights.com';
const dist = path.resolve('dist');
const base = await readFile(path.join(dist, 'index.html'), 'utf8');

// Compile the same components and assets used by the browser. No browser,
// analytics, form submissions, or remote fetches run during this build.
await build({
  ssr: { noExternal: ['react-helmet-async'] },
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: 'dist-ssr',
    rollupOptions: { output: { manualChunks: () => undefined } },
  },
});
const { paths, noindexPaths, render } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href);
const sitemap = await readFile('public/sitemap.xml', 'utf8');
const sitemapPaths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
if (JSON.stringify([...paths].sort()) !== JSON.stringify([...sitemapPaths].sort())) {
  throw new Error('Public routes and sitemap differ. Update them together.');
}

// Remove the generic metadata so each document has a single source of truth.
// Keep the original application scripts, styles, verification and connection hints.
const shell = base
  .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, '')
  .replace(/<meta\b[^>]*(?:name=["'](?:description|keywords|robots|twitter:[^"']*)["']|property=["']og:[^"']*["'])[^>]*>/gi, '')
  .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, '')
  .replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, '');

for (const route of [...paths, ...noindexPaths]) {
  const { body, head } = await render(route);
  if (!body.includes('<h1') || body.length < 1500) throw new Error(`Empty public page: ${route}`);
  if (!head.includes(`${origin}${route}`)) throw new Error(`Missing canonical: ${route}`);
  let html = shell.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  if (html === shell) throw new Error('Application root placeholder not found');
  const robots = /name="robots"/.test(head) ? '' : '<meta data-rh="true" name="robots" content="index, follow, max-image-preview:large">';
  html = html.replace('</head>', `${head}${robots}\n</head>`);
  const directory = path.join(dist, route.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, 'index.html'), html);
  console.log(`Rendered ${route}: ${body.length} bytes of page HTML`);
}
console.log(`Rendered all ${paths.length} public pages and ${noindexPaths.length} noindex utility pages from their actual React components.`);
