/** Single registry of chapter anchors and numbers. Sections, header nav and footer all read from here. */
export const chapters = {
  overview: { id: 'overview', index: '00' },
  scope: { id: 'chapter-01', index: '01' },
  architecture: { id: 'chapter-02', index: '02' },
  engagements: { id: 'chapter-03', index: '03' },
  method: { id: 'chapter-04', index: '04' },
  toolbox: { id: 'chapter-05', index: '05' },
  lab: { id: 'chapter-06', index: '06' },
  credentials: { id: 'chapter-07', index: '07' },
  contact: { id: 'chapter-08', index: '08' },
} as const;

/** Chapters listed in the header navigation: every chapter except the overview (the page top). */
export const navChapters = Object.values(chapters).filter((c) => c.id !== chapters.overview.id);

/** DOM ids inside the engagements chapter, derived from its registry id. */
export const engagementIds = {
  /** Heading id of the n-th (1-based) case study. */
  caseTitle: (n: number) => `${chapters.engagements.id}-case-${n}`,
  /** Heading id of the "more engagements" block. */
  more: `${chapters.engagements.id}-more`,
};
