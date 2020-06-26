/**
 * Fold
 *
 *
 *
 */
import { Observable } from "./Observable";
export declare const fold: <A, B>(step: (acc: A, current: B) => A, initial: A) => (source: Observable) => (next: Function) => void;
