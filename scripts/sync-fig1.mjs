#!/usr/bin/env node
/**
 * Builds public/fig1/ from the folder that holds the Fig. 1 HyperFrames compositions.
 *
 *   node scripts/sync-fig1.mjs [sourceDir]
 *   npm run fig1:sync -- ../path/to/out/web
 *
 * Default source: ../Video-Fig1/fig1-journey/out/web
 * Expected in the source: {portrait,landscape}-{en,es}.html, poster-{portrait,landscape}-{en,es}.webp, assets/.
 *
 * What it does:
 *  1. copies the four compositions, the four posters and assets/ into public/fig1/;
 *  2. copies the self-hosted HyperFrames runtime (@hyperframes/core/runtime) to public/fig1/assets/;
 *  3. injects <script src="assets/hyperframe.runtime.iife.js"> into each composition (idempotent),
 *     so the player never needs the CDN copy.
 */
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(process.argv[2] ?? join(root, '..', 'Video-Fig1', 'fig1-journey', 'out', 'web'));
const target = join(root, 'public', 'fig1');
const RUNTIME_FILE = 'hyperframe.runtime.iife.js';
const MARKER = 'data-hf-runtime';

const layouts = ['portrait', 'landscape'];
const locales = ['en', 'es'];
const compositions = layouts.flatMap((l) => locales.map((lang) => `${l}-${lang}.html`));
const posters = layouts.flatMap((l) => locales.map((lang) => `poster-${l}-${lang}.webp`));

const missing = [...compositions, ...posters, 'assets'].filter((name) => !existsSync(join(source, name)));
if (missing.length > 0) {
  console.error(`Source folder ${source} is missing: ${missing.join(', ')}`);
  process.exit(1);
}

rmSync(target, { recursive: true, force: true });
mkdirSync(join(target, 'assets'), { recursive: true });
cpSync(join(source, 'assets'), join(target, 'assets'), { recursive: true });
for (const name of posters) cpSync(join(source, name), join(target, name));

const runtimePath = createRequire(import.meta.url).resolve('@hyperframes/core/runtime');
cpSync(runtimePath, join(target, 'assets', RUNTIME_FILE));

const tag = `<script ${MARKER} src="assets/${RUNTIME_FILE}"></script>`;
for (const name of compositions) {
  let html = readFileSync(join(source, name), 'utf8');
  if (!html.includes(MARKER)) {
    // Right after <head> so the runtime exists before the composition script registers its timeline.
    const next = html.replace(/<head[^>]*>/i, (open) => `${open}\n    ${tag}`);
    if (next === html) {
      console.error(`${name}: no <head> element, cannot inject the runtime.`);
      process.exit(1);
    }
    html = next;
  }
  writeFileSync(join(target, name), html);
}

console.log(
  `public/fig1 ready from ${source}: ${compositions.length} compositions, ${posters.length} posters, runtime ${RUNTIME_FILE}.`,
);
