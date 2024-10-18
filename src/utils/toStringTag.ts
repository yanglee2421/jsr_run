export function toStringTag(param: unknown): string {
  return Object.prototype.toString
    .call(param)
    .replace(/\[object (\w+)\]/, "$1")
    .toLocaleLowerCase();
}
