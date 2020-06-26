/**
 * fromEvent
 *
 * type: Stream creator
 */
import { Observable } from "./Observable";
export declare const fromEvent: (node: EventTarget, event: string, useCapture?: boolean) => Observable;
