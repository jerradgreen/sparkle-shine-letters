import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
const source = fs.readFileSync('src/lib/metaAnalytics.ts', 'utf8');
const compiled = ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
const data = new Map();
function setup({blocked=false,throwing=false,storageBlocked=false}={}) {
 const events=[];
 const storage={getItem:k=>{if(storageBlocked)throw Error('blocked');return data.get(k)??null},setItem:(k,v)=>{if(storageBlocked)throw Error('blocked');data.set(k,v)}};
 const window={localStorage:storage};
 if(!blocked) window.fbq=(...a)=>{if(throwing)throw Error('blocked');events.push(a)};
 const context={exports:{},window,Date,Set,encodeURIComponent};vm.runInNewContext(compiled,context);
 return {...context.exports,events,window};
}
let a=setup();
for(const id of [null,undefined,'','  '])a.trackMetaLeadOnce('rental-inventory',id);
assert.equal(a.events.length,0,'direct thank-you visit is not a lead');
a.trackMetaLeadOnce('rental-inventory',' entry-1 ');a.trackMetaLeadOnce('rental-inventory','entry-1');
assert.equal(a.events.length,1,'repeated effect does not duplicate');
assert.equal(JSON.stringify(a.events[0]),JSON.stringify(['track','Lead',{content_name:'rental-inventory'}]));
assert.ok(!JSON.stringify(a.events).includes('entry-1'),'entry IDs stay out of event data');
a=setup();a.trackMetaLeadOnce('rental-inventory','entry-1');assert.equal(a.events.length,0,'refresh deduplicates');
a.trackMetaLeadOnce('event-standup','entry-1');assert.equal(a.events.length,1,'separate form IDs do not collide');
a.trackMetaLeadOnce('event-standup','entry-2');assert.equal(a.events.length,2,'different submission counts');
a=setup({storageBlocked:true});a.trackMetaLeadOnce('mobile-vendor','private');a.trackMetaLeadOnce('mobile-vendor','private');assert.equal(a.events.length,1);
a=setup({blocked:true});assert.doesNotThrow(()=>a.trackMetaLeadOnce('custom','late'));
a.window.fbq=(...args)=>a.events.push(args);a.trackMetaLeadOnce('custom','late');assert.equal(a.events.length,1,'unavailable tracker does not prematurely mark sent');
a=setup({throwing:true});assert.doesNotThrow(()=>a.trackMetaLeadOnce('custom','retry'));
a.window.fbq=(...args)=>a.events.push(args);a.trackMetaLeadOnce('custom','retry');assert.equal(a.events.length,1);
data.set('vml_meta_lead:custom:expired',String(Date.now()-91*86400000));a.trackMetaLeadOnce('custom','expired');assert.equal(a.events.length,2);
for(const dir of ['src/pages/thank-you','src/pages/download']) for(const name of fs.readdirSync(dir).filter(x=>x.endsWith('ThankYou.tsx'))) {
 const text=fs.readFileSync(`${dir}/${name}`,'utf8');assert.ok(!text.includes("fbq?.('track', 'Lead')"));assert.ok(text.includes('trackMetaLeadOnce('));
}
console.log('PASS: missing IDs, repeated effects, reloads, per-form IDs, distinct submissions, blocked storage, missing/throwing pixel, retry, expiry, and confirmation-page wiring. No network calls.');
