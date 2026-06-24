import { readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Build-time guard for the "always-in-sync" content requirement (spec
 * capability `bilingual-content-parity`): for each glob-loaded collection,
 * the set of bare slugs under `<collection>/en/` MUST equal the set under
 * `<collection>/es/`. Unequal sets throw, naming the offending collection
 * and the missing/extra slugs, so a partial-locale content change fails
 * the build loudly instead of shipping silently.
 *
 * STATUS (Phase 2 / Slice B — ACTIVE): collections were restructured into
 * `src/content/<collection>/en/*.json` + `<collection>/es/*.json` in this
 * phase. The guard is now ENFORCING: `es/` subfolders exist but are empty
 * pending Phase 3/4 Spanish content authoring, so `astro build` and
 * `astro dev` WILL FAIL on this guard until that content lands — this is
 * intentional (the guard proving it works), not a bug. The earlier
 * migration-tolerant no-op (`ok: true` when neither locale subfolder
 * exists) is kept only as a defensive fallback for any future collection
 * added before its `en/`/`es/` folders are created; it has no effect on
 * the 6 collections active today since their subfolders all exist now.
 */

export interface CollectionSyncResult {
  collection: string;
  ok: boolean;
  missingInEs: string[];
  missingInEn: string[];
}

function bareSlug(filename: string): string {
  return filename.replace(/\.json$/, '');
}

function listSlugs(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f: string) => f.endsWith('.json'))
    .map(bareSlug)
    .sort();
}

/**
 * Compares the EN/ES slug sets for one collection directory
 * (`contentRoot/<collection>/en`, `contentRoot/<collection>/es`).
 *
 * Migration-tolerant: if NEITHER locale subfolder exists (collection is
 * still flat, pre-Phase-2), this returns `ok: true` — there is nothing to
 * compare yet, and Phase 1 must not fail the build over a restructure
 * that hasn't happened. Once at least one locale subfolder exists, full
 * parity is enforced as designed.
 */
export function checkCollectionSync(contentRoot: string, collection: string): CollectionSyncResult {
  const enDir = join(contentRoot, collection, 'en');
  const esDir = join(contentRoot, collection, 'es');

  const enExists = existsSync(enDir);
  const esExists = existsSync(esDir);

  if (!enExists && !esExists) {
    // Flat, not-yet-migrated collection (Phase 1 / Slice A state) — inert.
    return { collection, ok: true, missingInEs: [], missingInEn: [] };
  }

  const enSlugs = new Set(listSlugs(enDir));
  const esSlugs = new Set(listSlugs(esDir));

  const missingInEs = [...enSlugs].filter((s) => !esSlugs.has(s));
  const missingInEn = [...esSlugs].filter((s) => !enSlugs.has(s));

  return {
    collection,
    ok: missingInEs.length === 0 && missingInEn.length === 0,
    missingInEs,
    missingInEn,
  };
}

/**
 * Singleton check for the `profile` collection: both locale files must
 * exist once the per-locale layout is adopted. Same migration-tolerant
 * rule — inert while `profile` is still a single flat file.
 */
export function checkProfileSync(contentRoot: string): CollectionSyncResult {
  const enFile = join(contentRoot, 'profile', 'en', 'profile.json');
  const esFile = join(contentRoot, 'profile', 'es', 'profile.json');

  const enExists = existsSync(enFile);
  const esExists = existsSync(esFile);

  if (!enExists && !esExists) {
    // Flat src/content/profile/profile.json — pre-Phase-2 state.
    return { collection: 'profile', ok: true, missingInEs: [], missingInEn: [] };
  }

  return {
    collection: 'profile',
    ok: enExists && esExists,
    missingInEs: enExists && !esExists ? ['profile'] : [],
    missingInEn: esExists && !enExists ? ['profile'] : [],
  };
}

// Directory names on disk (kebab-case), NOT the `content.config.ts`
// collection variable names (camelCase: `caseStudies`, `labEntries`).
// `src/content/<dir>/en|es/*.json` is what actually exists on disk.
const GLOB_COLLECTIONS = ['case-studies', 'lab', 'articles', 'services', 'certifications'] as const;

/**
 * Runs the full parity check across all 6 collections and throws a single
 * aggregated error naming every offending collection/slug if any mismatch
 * is found. No-op (does not throw) for collections still in their flat,
 * pre-restructure state — see module docstring.
 */
export function runSyncCheck(contentRoot: string): void {
  const results = [...GLOB_COLLECTIONS.map((c) => checkCollectionSync(contentRoot, c)), checkProfileSync(contentRoot)];

  const failures = results.filter((r) => !r.ok);
  if (failures.length === 0) return;

  const lines = failures.map((f) => {
    const parts: string[] = [];
    if (f.missingInEs.length) parts.push(`missing in es/: ${f.missingInEs.join(', ')}`);
    if (f.missingInEn.length) parts.push(`missing in en/: ${f.missingInEn.join(', ')}`);
    return `  - ${f.collection}: ${parts.join('; ')}`;
  });

  throw new Error(`i18n sync-check failed — EN/ES content is out of sync:\n${lines.join('\n')}`);
}
