import { $Consumer_ } from "@package/java/util/function";
import { $Iterator } from "@package/java/util";

declare module "@package/appeng/util/iterators" {
    export class $ChainedIterator<T> implements $Iterator<T> {
        remove(): void;
        hasNext(): boolean;
        next(): T;
        forEachRemaining(arg0: $Consumer_<T>): void;
        constructor(...arg0: T[]);
    }
}
