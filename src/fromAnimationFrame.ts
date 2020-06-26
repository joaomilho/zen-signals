/**
 * fromAnimationFrame
 *
 * type: Stream creator
 */

import { Observable } from "./Observable";

export const fromAnimationFrame = (): Observable => {
  let id: number | null = null;

  return (next: Function) => {
    const frame = () => {
      id = requestAnimationFrame(frame);
      next();
    };
    frame();
  };

  //   signal.stop = () => {
  //     cancelAnimationFrame(id)
  //   }
};
