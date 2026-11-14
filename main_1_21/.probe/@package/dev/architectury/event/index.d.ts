import { $InteractionResult } from "@package/net/minecraft/world";
export * as events from "@package/dev/architectury/event/events";
export * as forge from "@package/dev/architectury/event/forge";

declare module "@package/dev/architectury/event" {
    export class $EventResult {
        interruptsFurtherEvaluation(): boolean;
        asMinecraft(): $InteractionResult;
        static interruptFalse(): $EventResult;
        static interruptTrue(): $EventResult;
        static interruptDefault(): $EventResult;
        isFalse(): boolean;
        static interrupt(value: boolean): $EventResult;
        value(): boolean;
        isEmpty(): boolean;
        isPresent(): boolean;
        static pass(): $EventResult;
        isTrue(): boolean;
        get false(): boolean;
        get empty(): boolean;
        get present(): boolean;
        get true(): boolean;
    }
    export class $EventActor<T> {
    }
    export interface $EventActor<T> {
        act(arg0: T): $EventResult;
    }
    /**
     * Values that may be interpreted as {@link $EventActor}.
     */
    export type $EventActor_<T> = ((arg0: T) => $EventResult);
    export class $Event<T> {
    }
    export interface $Event<T> {
        clearListeners(): void;
        isRegistered(arg0: T): boolean;
        register(arg0: T): void;
        invoker(): T;
        unregister(arg0: T): void;
    }
}
