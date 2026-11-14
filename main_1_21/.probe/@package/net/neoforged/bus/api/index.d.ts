import { $Consumer_ } from "@package/java/util/function";
import { $Object, $Enum, $Class } from "@package/java/lang";

declare module "@package/net/neoforged/bus/api" {
    export class $ICancellableEvent {
    }
    export interface $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
    }
    export class $EventPriority extends $Enum<$EventPriority> {
        static values(): $EventPriority[];
        static valueOf(arg0: string): $EventPriority;
        static LOWEST: $EventPriority;
        static HIGH: $EventPriority;
        static LOW: $EventPriority;
        static HIGHEST: $EventPriority;
        static NORMAL: $EventPriority;
    }
    /**
     * Values that may be interpreted as {@link $EventPriority}.
     */
    export type $EventPriority_ = "highest" | "high" | "normal" | "low" | "lowest";
    export class $IEventBus {
    }
    export interface $IEventBus {
        register(arg0: $Object): void;
        start(): void;
        unregister(arg0: $Object): void;
        post<T extends $Event>(arg0: T): T;
        post<T extends $Event>(arg0: $EventPriority_, arg1: T): T;
        addListener<T extends $Event>(arg0: boolean, arg1: $Consumer_<T>): void;
        addListener<T extends $Event>(arg0: boolean, arg1: $Class<T>, arg2: $Consumer_<T>): void;
        addListener<T extends $Event>(arg0: $EventPriority_, arg1: boolean, arg2: $Class<T>, arg3: $Consumer_<T>): void;
        addListener<T extends $Event>(arg0: $Class<T>, arg1: $Consumer_<T>): void;
        addListener<T extends $Event>(arg0: $EventPriority_, arg1: $Consumer_<T>): void;
        addListener<T extends $Event>(arg0: $EventPriority_, arg1: $Class<T>, arg2: $Consumer_<T>): void;
        addListener<T extends $Event>(arg0: $EventPriority_, arg1: boolean, arg2: $Consumer_<T>): void;
        addListener<T extends $Event>(arg0: $Consumer_<T>): void;
    }
    export class $Event {
    }
}
