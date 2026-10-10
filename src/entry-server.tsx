import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Helmet, HelmetProvider } from "react-helmet-async";
import type { HelmetServerState } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { publicRoutes, utilityRoutes } from "./publicRoutes";

export const paths = Object.keys(publicRoutes);
export const noindexPaths = Object.keys(utilityRoutes);

export async function render(path: string) {
  const load = publicRoutes[path] || utilityRoutes[path];
  if (!load) throw new Error(`Unknown public route: ${path}`);
  const { default: Page } = await load();
  const context = {} as { helmet: HelmetServerState };
  const client = new QueryClient();
  const body = renderToString(
    <QueryClientProvider client={client}>
      <HelmetProvider context={context}>
        <StaticRouter location={path}><Page />
          {utilityRoutes[path] && <Helmet><meta name="robots" content="noindex, follow" /><link rel="canonical" href={`https://inventory.vintagemarqueelights.com${path}`} /></Helmet>}
        </StaticRouter>
      </HelmetProvider>
    </QueryClientProvider>
  );
  client.clear();
  const { helmet } = context;
  return { body, head: helmet.title.toString() + helmet.meta.toString() + helmet.link.toString() + helmet.script.toString() };
}
