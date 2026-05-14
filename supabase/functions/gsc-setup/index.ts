// Edge function to manage Google Search Console verification + sitemap submission
// via the Lovable connector gateway.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";
const SITE = "https://inventory.vintagemarqueelights.com/";
const SITE_ENC = encodeURIComponent(SITE);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function authHeaders() {
  const lov = Deno.env.get("LOVABLE_API_KEY");
  const gsc = Deno.env.get("GOOGLE_SEARCH_CONSOLE_API_KEY");
  if (!lov) throw new Error("LOVABLE_API_KEY is not configured");
  if (!gsc) throw new Error("GOOGLE_SEARCH_CONSOLE_API_KEY is not configured");
  return {
    Authorization: `Bearer ${lov}`,
    "X-Connection-Api-Key": gsc,
    "Content-Type": "application/json",
  };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { action } = await req.json();
    const headers = authHeaders();

    if (action === "get-token") {
      const r = await fetch(`${GATEWAY}/siteVerification/v1/token`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          site: { identifier: SITE, type: "SITE" },
          verificationMethod: "META",
        }),
      });
      const data = await r.json();
      return Response.json({ status: r.status, data }, { headers: corsHeaders });
    }

    if (action === "verify-and-submit") {
      const v = await fetch(
        `${GATEWAY}/siteVerification/v1/webResource?verificationMethod=META`,
        {
          method: "POST",
          headers,
          body: JSON.stringify({ site: { identifier: SITE, type: "SITE" } }),
        }
      );
      const verifyData = await v.json();

      // Add site to Search Console
      const add = await fetch(`${GATEWAY}/webmasters/v3/sites/${SITE_ENC}`, {
        method: "PUT",
        headers,
      });
      const addText = await add.text();

      // Submit sitemap
      const sitemapUrl = encodeURIComponent(`${SITE}sitemap.xml`);
      const sm = await fetch(
        `${GATEWAY}/webmasters/v3/sites/${SITE_ENC}/sitemaps/${sitemapUrl}`,
        { method: "PUT", headers }
      );
      const smText = await sm.text();

      return Response.json(
        {
          verify: { status: v.status, data: verifyData },
          addSite: { status: add.status, body: addText },
          sitemap: { status: sm.status, body: smText },
        },
        { headers: corsHeaders }
      );
    }

    if (action === "list-sites") {
      const r = await fetch(`${GATEWAY}/webmasters/v3/sites`, { headers });
      const data = await r.json();
      return Response.json({ status: r.status, data }, { headers: corsHeaders });
    }

    return Response.json({ error: "Unknown action" }, { status: 400, headers: corsHeaders });
  } catch (e) {
    return Response.json(
      { error: e instanceof Error ? e.message : String(e) },
      { status: 500, headers: corsHeaders }
    );
  }
});
