/**
 * merge
 *
 * type: Stream operation
 *
 * `merge` combines 2 sources as if they were one. It doesn't change values
 * in any way.
 *
 * ```
 * merge(sourceA, sourceB)
 * ```
 * sourceA o---o---o--o----o
 * sourceB --x----x-x---x---
 * emits   o-x-o--xox-o-x--o
 *
 */
import { Observable } from "./Observable";
export declare const merge: (sourceA: Observable, sourceB: Observable) => Observable;
