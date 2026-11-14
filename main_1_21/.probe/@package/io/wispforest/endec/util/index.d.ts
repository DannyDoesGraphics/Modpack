import { $SerializationContext, $Endec } from "@package/io/wispforest/endec";
import { $Function_ } from "@package/java/util/function";
import { $AutoCloseable } from "@package/java/lang";
import { $KeyedEndec } from "@package/io/wispforest/endec/impl";

declare module "@package/io/wispforest/endec/util" {
    export class $MapCarrier {
    }
    export interface $MapCarrier {
        get<T>(arg0: $SerializationContext, arg1: $KeyedEndec<T>): T;
        get<T>(arg0: $KeyedEndec<T>): T;
        put<T>(arg0: $KeyedEndec<T>, arg1: T): void;
        put<T>(arg0: $SerializationContext, arg1: $KeyedEndec<T>, arg2: T): void;
        "delete"<T>(arg0: $KeyedEndec<T>): void;
        copy<T>(arg0: $KeyedEndec<T>, arg1: $MapCarrier): void;
        copy<T>(arg0: $SerializationContext, arg1: $KeyedEndec<T>, arg2: $MapCarrier): void;
        has<T>(arg0: $KeyedEndec<T>): boolean;
        getWithErrors<T>(arg0: $KeyedEndec<T>): T;
        getWithErrors<T>(arg0: $SerializationContext, arg1: $KeyedEndec<T>): T;
        putIfNotNull<T>(arg0: $SerializationContext, arg1: $KeyedEndec<T>, arg2: T): void;
        putIfNotNull<T>(arg0: $KeyedEndec<T>, arg1: T): void;
        copyIfPresent<T>(arg0: $SerializationContext, arg1: $KeyedEndec<T>, arg2: $MapCarrier): void;
        /**
         * @deprecated
         */
        copyIfPresent<T>(arg0: $KeyedEndec<T>, arg1: $SerializationContext, arg2: $MapCarrier): void;
        copyIfPresent<T>(arg0: $KeyedEndec<T>, arg1: $MapCarrier): void;
        /**
         * @deprecated
         */
        mutate<T>(arg0: $KeyedEndec<T>, arg1: $SerializationContext, arg2: $Function_<T, T>): void;
        mutate<T>(arg0: $SerializationContext, arg1: $KeyedEndec<T>, arg2: $Function_<T, T>): void;
        mutate<T>(arg0: $KeyedEndec<T>, arg1: $Function_<T, T>): void;
    }
    export class $EndecBuffer {
    }
    export interface $EndecBuffer {
        write<T>(arg0: $Endec<T>, arg1: T): void;
        write<T>(arg0: $SerializationContext, arg1: $Endec<T>, arg2: T): void;
        read<T>(arg0: $SerializationContext, arg1: $Endec<T>): T;
        read<T>(arg0: $Endec<T>): T;
    }
    export class $Endable {
    }
    export interface $Endable extends $AutoCloseable {
        end(): void;
        close(): void;
    }
    /**
     * Values that may be interpreted as {@link $Endable}.
     */
    export type $Endable_ = (() => void);
}
