/**
 * id
 *
 * type: Stream value transformation
 *
 * `id` simply passes along the value received. Analog to `id` in Haskell
 * and other languages.
 *
 * ```
 * id
 * ```
 * changes 1234567890
 * emits   1234567890
 *
 */
import { Observable } from "./Observable";
export declare const id: () => (source: Observable) => (next: Function) => void;
