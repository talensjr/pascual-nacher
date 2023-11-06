/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// add netlifyIdentity to the global namespace
interface Window {
  netlifyIdentity: any;
}
