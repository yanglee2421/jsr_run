export function chunk<TItem>(list: TItem[], size: number): Array<TItem[]> {
  if (!list.length) {
    return [];
  }

  const result: Array<TItem[]> = [];
  let firstIndexInNextLine = 0;

  while (firstIndexInNextLine < list.length) {
    result.push(list.slice(
      firstIndexInNextLine,
      firstIndexInNextLine += size,
    ));
  }

  return result;
}
