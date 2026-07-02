// Edge function to manage Google Search Console verification + sitemap submission
// via the Lovable connector gateway. Restricted to authenticated site owners.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";
const SITE = "https://inventory.vintagemarqueelights.com/";
const SITE_ENC = encodeURIComponent(SITE);
const ALLOWED_ORIGIN = SITE.replace(/\/$/, "");

const corsHeaders = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

async function requireAuth(req: Request) {
  const auth = req.headers.get("Authorization");
  if (!auth) throw new Error("Unauthorized");
  const token = auth.replace("Bearer ", "");
  const { data: { user }, error } = await supabase.auth.getUser(token);
  if (error || !user) throw new Error("Unauthorized");
  return user;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    await requireAuth(req);
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

      const add = await fetch(`${GATEWAY}/webmasters/v3/sites/${SITE_ENC}`, {
        method: "PUT",
        headers,
      });
      const addText = await add.text();

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
    console.error(e);
    const message = e instanceof Error && e.message === "Unauthorized" ? "Unauthorized" : "Internal server error";
    const status = message === "Unauthorized" ? 401 : 500;
    return Response.json({ error: message }, { status, headers: corsHeaders });
  }
});
