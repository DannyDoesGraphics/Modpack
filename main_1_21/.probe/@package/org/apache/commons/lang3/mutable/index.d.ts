import { $Serializable } from "@package/java/io";
import { $Number, $Comparable } from "@package/java/lang";

declare module "@package/org/apache/commons/lang3/mutable" {
    export class $Mutable<T> {
    }
    export interface $Mutable<T> {
        getValue(): T;
        setValue(arg0: T): void;
    }
    export class $MutableObject<T> implements $Mutable<T>, $Serializable {
        getValue(): T;
        setValue(arg0: T): void;
        constructor();
        constructor(arg0: T);
    }
    export class $MutableInt extends $Number implements $Comparable<$MutableInt>, $Mutable<$Number> {
        compareTo(arg0: $MutableInt): number;
        getValue(): number;
        add(arg0: number): void;
        add(arg0: $Number): void;
        increment(): void;
        setValue(arg0: $Number): void;
        setValue(arg0: number): void;
        getAndAdd(arg0: $Number): number;
        getAndAdd(arg0: number): number;
        incrementAndGet(): number;
        getAndIncrement(): number;
        getAndDecrement(): number;
        decrementAndGet(): number;
        addAndGet(arg0: $Number): number;
        addAndGet(arg0: number): number;
        subtract(arg0: number): void;
        subtract(arg0: $Number): void;
        decrement(): void;
        toInteger(): number;
        constructor(arg0: string);
        constructor(arg0: $Number);
        constructor(arg0: number);
        constructor();
        get andIncrement(): number;
        get andDecrement(): number;
    }
    export class $MutableFloat extends $Number implements $Comparable<$MutableFloat>, $Mutable<$Number> {
        isInfinite(): boolean;
        compareTo(arg0: $MutableFloat): number;
        getValue(): number;
        add(arg0: number): void;
        add(arg0: $Number): void;
        increment(): void;
        isNaN(): boolean;
        setValue(arg0: number): void;
        setValue(arg0: $Number): void;
        getAndAdd(arg0: $Number): number;
        getAndAdd(arg0: number): number;
        incrementAndGet(): number;
        getAndIncrement(): number;
        getAndDecrement(): number;
        decrementAndGet(): number;
        addAndGet(arg0: number): number;
        addAndGet(arg0: $Number): number;
        subtract(arg0: number): void;
        subtract(arg0: $Number): void;
        decrement(): void;
        toFloat(): number;
        constructor(arg0: string);
        constructor(arg0: $Number);
        constructor(arg0: number);
        constructor();
        get infinite(): boolean;
        get naN(): boolean;
        get andIncrement(): number;
        get andDecrement(): number;
    }
    export class $MutableBoolean implements $Mutable<boolean>, $Serializable, $Comparable<$MutableBoolean> {
        setFalse(): void;
        isFalse(): boolean;
        compareTo(arg0: $MutableBoolean): number;
        booleanValue(): boolean;
        getValue(): boolean;
        setValue(arg0: boolean): void;
        setValue(arg0: boolean): void;
        toBoolean(): boolean;
        isTrue(): boolean;
        setTrue(): void;
        constructor();
        constructor(arg0: boolean);
        constructor(arg0: boolean);
    }
}
