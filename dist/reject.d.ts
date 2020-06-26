/**
 * reject
 *
 * type: Stream value transformation
 *
 * `reject` is the opposite of `filter`, passing the received value only if the
 * condition is _not_ satisfied.
 *
 * ```
 * reject(x => x === 5)
 * ```
 * changes 1234565432123456
 * emits   1234-6-4321234-6
 *
 */
import { Observable } from "./Observable";
export declare const reject: (predicate: (arg: any) => boolean) => (source: Observable) => (next: Function) => void;
