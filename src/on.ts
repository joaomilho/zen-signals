import { Observable } from "./Observable";

export const on = (
  source: Observable,
  process: Function,
  sideEffect: Function
) => process(source)(sideEffect);
