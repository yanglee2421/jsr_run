export function minmax(
  num: number,
  { min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY } = {}
): number {
  return Math.min(max, Math.max(min, num));
}
