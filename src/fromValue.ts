/**
 * fromValue
 *
 * type: Stream creator
 */

import { Observable } from "./Observable";

export const fromValue = <T>(value?: T): Observable => (next: Function) => {
  next(value);

  return (value: T) => next(value);
};
