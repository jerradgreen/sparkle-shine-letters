import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
const compiled = ts.transpileModule(fs.readFileSync('src/lib/leadAttribution.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
function setup({ blocked = false, saved = new Map() } = {}) {
  const window = { location: new URL('https://inventory.vintagemarqueelights.com/custom-marquee-signs?gclid=click-1&utm_campaign=custom&email=private@example.com'),
    localStorage: { getItem: key => { if (blocked) throw Error(); return saved.get(key); },
      setItem: (key, value) => { if (blocked) throw Error(); saved.set(key, value); } } };
  const context = { exports: {}, window, document: { referrer: 'https://www.google.com/search?q=private' }, Date, URL, URLSearchParams };
  vm.runInNewContext(compiled, context);
  return { ...context.exports, window, saved };
}
for (const blocked of [false, true]) {
  const t = setup({ blocked });
  const first = t.captureLeadAttribution();
  assert.equal(first.first.parameters.gclid, 'click-1');
  assert.equal(first.first.referrer_host, 'www.google.com');
  t.window.location = new URL('https://inventory.vintagemarqueelights.com/quote/3d-logos');
  const quote = JSON.parse(t.getQuoteAttribution());
  assert.equal(quote.latest.parameters.gclid, 'click-1', 'navigation preserves acquisition');
  assert.equal(quote.quote_path, '/quote/3d-logos');
  assert.ok(!JSON.stringify(quote).includes('private'), 'arbitrary query and referrer search excluded');
  t.window.location = new URL('https://inventory.vintagemarqueelights.com/?gclid=click-2&utm_campaign=wall');
  const next = t.captureLeadAttribution();
  assert.equal(next.first.parameters.gclid, 'click-1');
  assert.equal(next.latest.parameters.gclid, 'click-2', 'latest acquisition remains separate');
  if (!blocked) {
    const returning = setup({ saved: t.saved });
    returning.window.location = new URL('https://inventory.vintagemarqueelights.com/quote/not-sure');
    assert.equal(returning.captureLeadAttribution().latest.parameters.gclid, 'click-2', 'direct return retains latest click');
  }
}
const expired = setup({saved: new Map([['vml_quote_attribution_v1', JSON.stringify({version:1, first:{at:Date.now()-91*86400000}, latest:{parameters:{gclid:'expired'}}})]])});
assert.equal(expired.captureLeadAttribution().first.parameters.gclid, 'click-1');
console.log('PASS: acquisition capture, internal navigation, direct return, first/latest touch, expiry, blocked storage, and query privacy.');
