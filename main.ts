export function add(...args: number[]): number {
  return args.reduce((result, item) => result + item, 0);
}

export function withinTruthy(list: unknown[]): boolean {
  return list.some(Boolean);
}

export function withoutFalsy(list: unknown[]): boolean {
  return list.every(Boolean);
}

export function timeout(delay: number = 0): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(resolve, delay));
}

export function toStringTag(param: unknown): string {
  return Object.prototype.toString
    .call(param)
    .replace(/\[object (\w+)\]/, "$1")
    .toLocaleLowerCase();
}

export function stringToColor(string: string): string {
  let hash = 0;

  for (let i = 0; i < string.length; i++) {
    // 9 << 3 => 9 * (2 ** 3) = 36
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

export function minmax(
  num: number,
  { min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY } = {}
): number {
  return Math.min(max, Math.max(min, num));
}

export function jsonClose<TData>(data: TData): TData {
  return JSON.parse(JSON.stringify(data)) as TData;
}

export function uniqBy<TItem extends NonNullable<unknown>>(
  items: TItem[],
  {
    overwrite = false,
    key = "id",
  }: { overwrite?: boolean; key: string | symbol }
): TItem[] {
  return Array.from(
    items
      .reduce((map, item) => {
        const mapKey = Reflect.get(item, key);

        if (overwrite) {
          map.set(mapKey, item);
          return map;
        }

        map.get(mapKey) ?? map.set(mapKey, item);

        return map;
      }, new Map<unknown, TItem>())
      .values()
  );
}
