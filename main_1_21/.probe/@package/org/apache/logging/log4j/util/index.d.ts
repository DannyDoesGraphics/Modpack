import { $StringBuilder } from "@package/java/lang";
import { $Message } from "@package/org/apache/logging/log4j/message";

declare module "@package/org/apache/logging/log4j/util" {
    export class $TriConsumer<K, V, S> {
    }
    export interface $TriConsumer<K, V, S> {
        accept(k: K, v: V, s: S): void;
    }
    /**
     * Values that may be interpreted as {@link $TriConsumer}.
     */
    export type $TriConsumer_<K, V, S> = ((k: K, v: V, s: S) => void);
    export class $MessageSupplier {
    }
    export interface $MessageSupplier {
        get(): $Message;
    }
    /**
     * Values that may be interpreted as {@link $MessageSupplier}.
     */
    export type $MessageSupplier_ = (() => $Message);
    export class $StringBuilderFormattable {
    }
    export interface $StringBuilderFormattable {
        formatTo(buffer: $StringBuilder): void;
    }
    /**
     * Values that may be interpreted as {@link $StringBuilderFormattable}.
     */
    export type $StringBuilderFormattable_ = ((buffer: $StringBuilder) => void);
    /**
     * @deprecated
     */
    export class $Supplier<T> {
    }
    export interface $Supplier<T> {
        get(): T;
    }
    /**
     * Values that may be interpreted as {@link $Supplier}.
     */
    export type $Supplier_<T> = (() => T);
}
