export function compact<TItem>(list: Array<TItem | Falsey>): TItem[] {
  return list.filter(Boolean) as TItem[];
}

type Falsey = null | undefined | false | "" | 0 | 0n;
