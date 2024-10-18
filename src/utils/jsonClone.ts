export function jsonClone<TData>(data: TData): TData {
  return JSON.parse(JSON.stringify(data)) as TData;
}
