export const minmax = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

type Callback<TArgs extends unknown[], TReturn> = (...args: TArgs) => TReturn;

export const promiseTry = <TArgs extends unknown[], TReturn>(
  callback: Callback<TArgs, TReturn>,
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
  fn: (...args: TArgs) => void,
  delay = 0
) => {
  let timer: number;
  return (...args: TArgs) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};
