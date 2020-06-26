/**
 * map
 *
 * type: Stream value transformation
 */

import { Observable } from "./Observable";

export const map = <A, B>(handler: (arg: A) => B) => (source: Observable) => (
  next: Function
) => source((value: any) => next(handler(value)));
