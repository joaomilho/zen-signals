/**
 * map
 *
 * type: Stream value transformation
 */
import { Observable } from "./Observable";
export declare const map: <A, B>(handler: (arg: A) => B) => (source: Observable) => (next: Function) => void;
