import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { paths, noindexPaths } from '../dist-ssr/entry-server.js';

const origin = 'https://inventory.vintagemarqueelights.com';
const known = new Set([...paths, ...noindexPaths]);
const failures = [];
for (const route of known) {
  try {
    const html = await readFile(path.join('dist', route.slice(1), 'index.html'), 'utf8');
    const head = html.match(/<head>([\s\S]*?)<\/head>/i)[1];
    const tags = [...head.matchAll(/<(?:link|meta)\b[^>]*>/g)].map(m => m[0]);
    const canonicals = tags.filter(t => /rel="canonical"/.test(t));
    assert.equal(canonicals.length, 1, 'exactly one canonical');
    assert.ok(canonicals[0].includes(`href="${origin}${route}"`), 'correct route canonical');
    assert.equal((head.match(/<title\b/g) || []).length, 1, 'exactly one title');
    assert.equal(tags.filter(t => /name="description"/.test(t)).length, 1, 'one description');
    const robots = tags.filter(t => /name="robots"/.test(t));
    assert.equal(robots.length, 1, 'one robots directive');
    assert.equal(/noindex/.test(robots[0]), noindexPaths.includes(route), 'correct indexing policy');
    assert.ok(/<h1\b/.test(html), 'rendered heading');
    assert.ok(!html.includes('seo-fallback'), 'no summary placeholder');
    assert.ok(/type="module"[^>]*src="\/assets\//.test(html), 'browser application retained');
    for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      JSON.parse(match[1]);
    }
    for (const match of html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)[^"]*"/g)) {
      await access(path.join('dist', match[1].slice(1)));
    }
    for (const match of html.matchAll(/<a\b[^>]*href="(\/[^"?#]*)/g)) {
      const target = match[1].replace(/\/+$/, '') || '/';
      assert.ok(known.has(target) || target.startsWith('/product/') || /\.[a-z0-9]+$/i.test(target), `unregistered internal link ${target}`);
    }
  } catch (error) { failures.push(`${route}: ${error.message}`); }
}

// These deep-page details were absent from the previous HTML summaries.
const contentChecks = [
  ['/custom-marquee-signs', 'Exit Zero'],
  ['/event-standup-signs', 'Lexus'],
  ['/rental-inventory', '10-day'],
  ['/blog/how-much-does-a-custom-marquee-sign-cost', '$12,600'],
];
for (const [route, text] of contentChecks) {
  const html = await readFile(path.join('dist', route.slice(1), 'index.html'), 'utf8');
  if (!html.includes(text)) failures.push(`${route}: missing full-page content ${text}`);
}
assert.deepEqual(failures, [], failures.join('\n'));
console.log(`PASS: ${paths.length} public and ${noindexPaths.length} utility pages: full content, canonical, title, description, robots, JSON-LD, compiled assets, and internal links.`);
