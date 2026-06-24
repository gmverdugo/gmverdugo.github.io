// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { runSyncCheck } from './src/i18n/sync-check.ts';

const contentRoot = fileURLToPath(new URL('./src/content', import.meta.url));

/**
 * Runs the EN/ES content parity guard at the start of every build and dev
 * session. ACTIVE as of Phase 2 / Slice B: collections were restructured
 * into `en/`/`es/` subfolders and this guard now enforces parity for
 * real. `es/` subfolders are currently empty pending Phase 3/4 Spanish
 * content authoring, so `astro build`/`astro dev` intentionally FAIL
 * right now — see `src/i18n/sync-check.ts` docstring. Do not disable this
 * to "fix" the build; the fix is authoring the missing ES content.
 */
function i18nSyncCheck() {
  return {
    name: 'i18n-sync-check',
    hooks: {
      'astro:build:start': () => runSyncCheck(contentRoot),
      'astro:config:setup': () => runSyncCheck(contentRoot),
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://gmverdugo.github.io',
  base: '/',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [i18nSyncCheck()],
  vite: {
    plugins: [tailwindcss()],
  },
});
