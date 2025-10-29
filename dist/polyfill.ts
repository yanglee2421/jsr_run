export const minmax = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

export const inRange = (value: number, min: number, max: number): boolean => {
  return Object.is(value, minmax(value, min, max));
};

type CallbackFn<TArgs extends unknown[], TReturn> = (...args: TArgs) => TReturn;

export const promiseTry = <TArgs extends unknown[], TReturn>(
  callback: CallbackFn<TArgs, TReturn>,
  ...args: TArgs
): Promise<TReturn> => {
  return new Promise<TReturn>((resolve) => resolve(callback(...args)));
};

export const chunk = <TElement>(
  array: TElement[],
  size: number
): TElement[][] => {
  const result: TElement[][] = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
};

export const debounce = <TArgs extends unknown[]>(
  fn: CallbackFn<TArgs, void>,
  delay = 0
): CallbackFn<TArgs, void> => {
  let timer: number;
  return (...args: TArgs) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

export const mapGroupBy = <TElement, TKey>(
  items: TElement[],
  callbackFn: CallbackFn<[TElement, number], TKey>
): Map<TKey, TElement[]> => {
  const resultMap = new Map<TKey, TElement[]>();

  items.reduce((latestResult, item, index) => {
    const mapKey = callbackFn(item, index);
    const mapValue = latestResult.get(mapKey);

    if (Array.isArray(mapValue)) {
      mapValue.push(item);
    } else {
      latestResult.set(mapKey, [item]);
    }

    return latestResult;
  }, resultMap);

  return resultMap;
};
