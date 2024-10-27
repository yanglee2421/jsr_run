export { add } from "@/utils/add.ts";
export { catchError } from "@/utils/catchError.ts";
export { compact } from "@/utils/compact.ts";
export { jsonClone } from "@/utils/jsonClone.ts";
export { minmax } from "@/utils/minmax.ts";
export { stringToColor } from "@/utils/stringToColor.ts";
export { timeout } from "@/utils/timeout.ts";
export { toStringTag } from "@/utils/toStringTag.ts";
export { uniqBy } from "@/utils/uniqBy.ts";

// #region Array
export { chunk } from "@/array/chunk.ts";

export function withinTruthy(list: unknown[]): boolean {
  return list.some(Boolean);
}

export function withoutFalsy(list: unknown[]): boolean {
  return list.every(Boolean);
}
// #endregion
