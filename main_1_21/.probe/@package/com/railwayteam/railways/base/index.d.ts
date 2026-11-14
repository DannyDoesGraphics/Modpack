import { $Consumer_, $Function_, $IntFunction_ } from "@package/java/util/function";
import { $Iterable, $Enum, $Class } from "@package/java/lang";
import { $Spliterator, $Iterator } from "@package/java/util";
export * as data from "@package/com/railwayteam/railways/base/data";
export * as datafixerapi from "@package/com/railwayteam/railways/base/datafixerapi";
export * as datafixers from "@package/com/railwayteam/railways/base/datafixers";

declare module "@package/com/railwayteam/railways/base" {
    export class $EnumFilledList$EnumFilledListIterator implements $Iterator<T> {
        remove(): void;
        forEachRemaining(arg0: $Consumer_<T>): void;
    }
    export class $EnumFilledList<E extends $Enum<E>, T> implements $Iterable<T> {
        get(arg0: E): T;
        toArray(arg0: $IntFunction_<T[]>): T[];
        toArray(): T[];
        iterator(): $Iterator<T>;
        spliterator(): $Spliterator<T>;
        forEach(arg0: $Consumer_<T>): void;
        constructor(arg0: $Class<E>, arg1: $Function_<E, T>);
        [Symbol.iterator](): Iterator<T>
    }
}
