export function add(...args: number[]) {
  return args.reduce((result, item) => result + item, 0);
}
