/**
 * Simplify catch error for promise
 * @param promise a promise
 * @returns a tuple, first element is the error last element is the data
 */
export async function catchError<TData>(
  promise: Promise<TData>
): Promise<readonly [undefined, TData] | [unknown]> {
  try {
    const data = await promise;
    return [void 0, data] as const;
  } catch (error) {
    return [error] as const;
  }
}
