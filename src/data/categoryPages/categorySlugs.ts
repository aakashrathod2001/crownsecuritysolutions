// export const CATEGORY_SLUGS = [
//   "branding",
//   "content",
//   "tech",
//   "marketing",
//   "ai",
// ] as const;

export const CATEGORY_SLUGS = [
  "branding",
  "content",
  "tech",
  "marketing",
  "ai",
] as const;

export type CategorySlug = typeof CATEGORY_SLUGS[number];