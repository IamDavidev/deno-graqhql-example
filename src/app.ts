import { serve } from 'https://deno.land/std@0.119.0/http/server.ts';
import { EXAMPLE_ROUTE } from './constants/routes.ts';
import { PORT_SERVER } from './constants/server.const.ts';
import { errorRouteNoMatch } from './error/routes.error.ts';

export function handlerRoutes(req: Request) {
  const match_route: URLPatternResult | null = EXAMPLE_ROUTE.exec(req.url);
  console.info(
    '🚀 ~>  file: app.ts ~>  line 7 ~>  handlerRoutes ~>  match_route',
    match_route
  );

  if (match_route === null) return errorRouteNoMatch(req.url);
  return new Response('Hello World Example ');
}
console.log(`Server running on port ${PORT_SERVER}`);

serve(handlerRoutes, {
  port: PORT_SERVER,
});
