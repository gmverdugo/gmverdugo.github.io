import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

/**
 * i18n layout note (portfolio-i18n, Phase 2 / Slice B): each of the 5 glob
 * collections below now stores entries under locale subfolders
 * (`<collection>/en/*.json`, `<collection>/es/*.json`) instead of flat
 * files. The `pattern: '**\/*.json'` glob is already recursive, so no
 * loader change was needed — only the on-disk layout moved. Pages MUST
 * filter `getCollection()` results by `entry.id.startsWith('en/')` (or
 * `'es/'`) until both locales are populated; see `src/i18n/sync-check.ts`
 * for the build-time parity guard across `en/`/`es/`. Schemas are
 * unchanged and apply identically to both locales.
 */

/**
 * Case studies — 3 non-conflatable engagements (A: MELI HOT-tier,
 * B: MELI maturity assessment, C: ICBC consolidation).
 * Schema enforces attribution: each metric carries its own `source`
 * flag, so a verified per-client number can never be authored into
 * a generic/catalog slot (see `services` below for the inverse rule).
 */
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/case-studies' }),
  schema: z.object({
    slug: z.string(),
    client: z.string(),
    engagementId: z.enum(['A', 'B', 'C']),
    title: z.string(),
    summary: z.string(),
    dataIntegrity: z.enum(['verified', 'illustrative']),
    sections: z.object({
      challenge: z.string(),
      architecture: z.string(),
      implementation: z.string(),
      stack: z.array(z.string()),
      results: z.string(),
      lessons: z.array(z.string()),
    }),
    metrics: z.array(
      z.object({
        label: z.string(),
        before: z.union([z.string(), z.number()]).optional(),
        after: z.union([z.string(), z.number()]).optional(),
        delta: z.string().optional(),
        unit: z.string().optional(),
        source: z.enum(['verified', 'illustrative']),
      }),
    ),
    diagram: z.object({
      type: z.enum(['bar-before-after', 'maturity-tracker', 'otel-flow', 'consolidation-before-after']),
      data: z.record(z.string(), z.any()),
    }),
  }),
});

/** Lab entries — mix of real snippets (status: real) and draft/illustrative topics. */
const labEntries = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/lab' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['real', 'illustrative']),
    tags: z.array(z.string()),
    snippet: z.string().optional(),
    body: z.string(),
  }),
});

/** Articles — all placeholder/illustrative per content scope. */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['real', 'illustrative']),
    topic: z.string(),
    body: z.string(),
  }),
});

/**
 * Engagement Models (services) catalog. `ranges` are ALWAYS generic
 * aspirational figures sourced from the public services catalog —
 * the schema deliberately has no `verified` flag on ranges, so a
 * specific engagement's number can never be authored into this slot.
 */
const services = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/services' }),
  schema: z.object({
    name: z.string(),
    category: z.string(),
    description: z.string(),
    ranges: z
      .array(
        z.object({
          metric: z.string(),
          low: z.number(),
          high: z.number(),
          unit: z.string(),
        }),
      )
      .optional(),
    source: z.literal('catalog'),
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/certifications' }),
  schema: z.object({
    name: z.string(),
    issuer: z.string(),
    status: z.enum(['certified', 'training']),
    year: z.number().optional(),
  }),
});

/**
 * Profile — single entry per locale, identity/availability for sidebar +
 * Contact. Two `file()` collections (one per locale) rather than a single
 * glob: `profile.json` is a `file()`-loader document keyed by a top-level
 * entry id (`gonzalo-verdugo`), not a directory of one-object-per-file
 * documents like the other 5 collections, so reusing `glob()` here would
 * require reshaping the JSON itself — out of scope for a mechanical
 * relocation. Two `file()` loaders keep the JSON shape byte-for-byte
 * unchanged while still giving each locale its own collection to query.
 */
const profileEn = defineCollection({
  loader: file('./src/content/profile/en/profile.json'),
  schema: z.object({
    identity: z.string(),
    availability: z.string(),
    location: z.string(),
    languages: z.array(z.string()),
    focusAreas: z.array(z.string()),
  }),
});

const profileEs = defineCollection({
  loader: file('./src/content/profile/es/profile.json'),
  schema: z.object({
    identity: z.string(),
    availability: z.string(),
    location: z.string(),
    languages: z.array(z.string()),
    focusAreas: z.array(z.string()),
  }),
});

export const collections = {
  caseStudies,
  labEntries,
  articles,
  services,
  certifications,
  profileEn,
  profileEs,
};
