export function timeout(delay: number = 0): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(resolve, delay));
}
