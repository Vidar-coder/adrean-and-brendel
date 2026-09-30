/** Mobile invitation photo marquee — `public/mobile-background` */
export const MOBILE_BACKGROUND_PHOTO_COUNT = 10;

export const MOBILE_BACKGROUND_PHOTOS = Array.from(
  { length: MOBILE_BACKGROUND_PHOTO_COUNT },
  (_, index) => encodeURI(`/mobile-background/couple (${index + 1}).webp`),
);

/** Loader + preload — same set as hero mobile backdrop for visual continuity */
export const LOADING_BG_PHOTOS = MOBILE_BACKGROUND_PHOTOS;
