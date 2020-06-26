/**
 * mergeAll
 *
 * type: Stream operation
 *
 * `mergeAll` combines any number of sources as if they were one. It doesn't
 * change values in any way.
 *
 * ```
 * mergeAll([sourceA, sourceB, sourceC])
 * ```
 * sourceA o---o---o--o----o
 * sourceB --x----x-x---x---
 * sourceC -א-------------א-
 * emits   oאx-o--xox-o-x-אo
 *
 */

import { Observable } from "./Observable";

export const mergeAll = (sources: Array<Observable>): Observable => (
  next: Function
) => sources.forEach((source) => source(next));
