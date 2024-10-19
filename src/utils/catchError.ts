/**
 * Simplify catch error for promise
 * @param promise a promise with data
 * @param errMsg a string as error message if throwed is not a error
 * @returns a tuple, first element is the error last element is the data
 */
export async function catchError<TData>(
  promise: Promise<TData>,
  errMsg = ""
): Promise<readonly [Error, undefined] | readonly [undefined, TData]> {
  try {
    const data = await promise;
    return [void 0, data] as const;
  } catch (error) {
    if (error instanceof Error) {
      return [error, void 0] as const;
    }

    return [new Error(errMsg, { cause: error }), void 0] as const;
  }
}
