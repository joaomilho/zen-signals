/**
 * Fold
 *
 *
 *
 */

import { Observable } from "./Observable";

export const fold = <A, B>(step: (acc: A, current: B) => A, initial: A) => (
  source: Observable
) => (next: Function) => {
  let acc = initial;

  return source((value: B) => next((acc = step(acc, value))));
};
