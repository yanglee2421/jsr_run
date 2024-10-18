export function add(...args: number[]): number {
  return args.reduce((result, item) => result + item, 0);
}
