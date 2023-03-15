export function Resolve<T, E>(promise: Promise<T>): Promise<[E, undefined] | [null, T]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[E, undefined]>((err: E) => {
      return [err, undefined];
    });
}
