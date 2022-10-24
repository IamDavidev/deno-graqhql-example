export function errorRouteNoMatch(route: string) {
  return new Response(`Route [${route}] not found in server`, {
    status: 404,
  });
}
