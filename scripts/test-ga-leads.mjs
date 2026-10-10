import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const compiled = ts.transpileModule(fs.readFileSync('src/lib/analytics.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
const persisted = new Map();
function setup({ storageBlocked = false, trackerMissing = false, trackerThrows = false } = {}) {
  const events = [];
  const storage = {
    getItem: key => { if (storageBlocked) throw Error('blocked'); return persisted.get(key) ?? null; },
    setItem: (key, value) => { if (storageBlocked) throw Error('blocked'); persisted.set(key, value); },
  };
  const window = { localStorage: storage, sessionStorage: storage };
  if (!trackerMissing) window.gtag = (...args) => { if (trackerThrows) throw Error('blocked'); events.push(args); };
  const context = {
    exports: {}, window, Date, Set, encodeURIComponent,
    require: () => ({ ADS_CONVERSION_ID: 'AW-test', ADS_CONVERSION_LABELS: { rental: 'rental-label', custom: 'custom-label' } }),
  };
  vm.runInNewContext(compiled, context);
  return { ...context.exports, events, window };
}
let tracker = setup();
for (const id of [null, undefined, '', '  ']) tracker.trackLeadOnce('rental', 'rental', id);
assert.equal(tracker.events.length, 0, 'unconfirmed visits never count');
tracker.trackLeadOnce('rental', 'rental', ' 123 ');
tracker.trackLeadOnce('rental', 'rental', '123');
assert.equal(tracker.events.length, 2, 'one GA event and one Ads event');
assert.ok(!JSON.stringify(tracker.events).includes('123'), 'submission ID stays out of analytics payload');
tracker = setup();
tracker.trackLeadOnce('rental', 'rental', '123');
assert.equal(tracker.events.length, 0, 'reload deduplicates');
tracker.trackLeadOnce('custom', 'custom', '123');
assert.equal(tracker.events.length, 2, 'same entry number in another form is distinct');
tracker = setup({ storageBlocked: true });
tracker.trackLeadOnce('rental', 'rental', 'blocked');
tracker.trackLeadOnce('rental', 'rental', 'blocked');
assert.equal(tracker.events.length, 2, 'memory deduplicates when storage is blocked');
for (const options of [{ trackerMissing: true }, { trackerThrows: true }]) {
  tracker = setup(options);
  tracker.trackLeadOnce('rental', 'rental', 'retry');
  assert.equal(tracker.events.length, 0);
  tracker.window.gtag = (...args) => tracker.events.push(args);
  tracker.trackLeadOnce('rental', 'rental', 'retry');
  assert.equal(tracker.events.length, 2, 'unavailable tracker can retry');
  persisted.delete('vml_ga_lead:rental:retry');
}
persisted.set('vml_ga_lead:rental:expired', String(Date.now() - 91 * 86400000));
tracker = setup();
tracker.trackLeadOnce('rental', 'rental', 'expired');
assert.equal(tracker.events.length, 2, 'expired marker does not suppress a lead');
console.log('PASS: confirmed submissions, repeated effects, reloads, form isolation, blocked storage, retry, expiry, and private IDs. No network events sent.');
