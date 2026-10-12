// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Kept host-neutral on purpose: plain static output, no adapter, so the same
// `dist/` deploys to Vercel or Cloudflare Pages unchanged.
export default defineConfig({
  site: 'https://www.coralblinds.in',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
