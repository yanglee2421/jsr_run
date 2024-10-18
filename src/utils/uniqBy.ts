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
