export default {
  async fetch(request, env) {
    // Add your own routes here, e.g. if (new URL(request.url).pathname === "/api/...") { ... }
    // Everything else is served from the static site in /public
    return env.ASSETS.fetch(request);
  },
};
