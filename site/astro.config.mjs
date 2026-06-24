// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { runSyncCheck } from './src/i18n/sync-check.ts';

const contentRoot = fileURLToPath(new URL('./src/content', import.meta.url));

/**
 * Runs the EN/ES content parity guard at the start of every build and dev
 * session. Inert today (Phase 1 / Slice A): collections are still flat,
 * so `runSyncCheck` no-ops per its own migration-tolerant rules. It
 * becomes meaningfully active once Phase 2 restructures collections into
 * `en/`/`es/` subfolders — see `src/i18n/sync-check.ts` docstring and
 * tasks.md Phase 2 item 2.9 (which proves it fails loud before relying
 * on it for Phase 3+).
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
