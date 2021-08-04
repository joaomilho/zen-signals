/**
 * Observable
 *
 * Here we're oversimplifying Observable a lot. After all, zen-signals goal is to learn,
 * not to be production ready. For examples of the actual needed complexity, check RxJS's
 * codebase, particularly https://github.com/ReactiveX/rxjs/blob/master/src/internal/Observable.ts
 *
 * In this example we're omitting 2 very important aspects of any minimally decent
 * observable, namely, a way to stop it and a way of dealing with errors.
 */

export interface Observable {
  (next: Function): void;
}

export const observable = (): Observable => (next: Function) => {
  return (value: any) => next(value);
};
