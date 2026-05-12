/** Deterministic 0..1 PRNG for stable particle layouts (pure, lint-safe). */
export function createSeededRng(seed: number) {
  let s = seed >>> 0
  return () => {
    s = (Math.imul(1664525, s) + 1013904223) >>> 0
    return s / 4294967296
  }
}
