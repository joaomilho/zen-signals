/**
 * fromValues
 *
 * type: Stream creator
 */

import { Observable } from "./Observable";

export const fromValues = <T>(values: Array<T> = []): Observable => (
  next: Function
) => {
  values.map((value) => next(value));

  return (value: T) => next(value);
};
