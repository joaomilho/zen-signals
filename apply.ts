import { Observable } from "./Observable";

export const apply = (source: Observable, process: Function) => process(source);
