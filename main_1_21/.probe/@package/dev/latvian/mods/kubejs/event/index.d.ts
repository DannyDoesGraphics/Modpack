import { $Consumer_, $Predicate_, $Supplier_, $Supplier } from "@package/java/util/function";
import { $TypeInfo_ } from "@package/dev/latvian/mods/rhino/type";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $Registry } from "@package/net/minecraft/core";
import { $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Map, $Set } from "@package/java/util";
import { $Throwable, $Enum, $Exception, $Object, $Class } from "@package/java/lang";
import { $Context, $BaseFunction } from "@package/dev/latvian/mods/rhino";
import { $ScriptTypePredicate, $ScriptType_, $ScriptTypeHolder_, $ScriptTypePredicate_, $ConsoleJS } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/dev/latvian/mods/kubejs/event" {
    export class $EventHandler extends $BaseFunction {
        hasResult(): $EventHandler;
        requiredTarget<E>(type: $EventTargetType<E>): $TargetedEventHandler<E>;
        supportsTarget<E>(type: $EventTargetType<E>): $TargetedEventHandler<E>;
        forEachListener(type: $ScriptType_, callback: $Consumer_<$EventHandlerContainer>): void;
        hasListeners(): boolean;
        listen(type: $ScriptType_, extraId: $Object, handler: $IEventHandler_): void;
        post(event: $KubeEvent): $EventResult;
        post(scriptType: $ScriptTypeHolder_, event: $KubeEvent): $EventResult;
        static DONTENUM: number;
        eventType: $Supplier<$Class<$KubeEvent>>;
        scriptTypePredicate: $ScriptTypePredicate;
        static CONST: number;
        name: string;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        group: $EventGroup;
    }
    export class $EventTargetType<T> {
        toString(factory: $EventTargetType$Transformer_): $EventTargetType<T>;
        identity(): $EventTargetType<T>;
        static create<T>(type: $Class<T>): $EventTargetType<T>;
        transformer(factory: $EventTargetType$Transformer_): $EventTargetType<T>;
        validator(validator: $Predicate_<$Object>): $EventTargetType<T>;
        static fromEnum<T extends $Enum<T>>(type: $Class<T>): $EventTargetType<T>;
        static registryKey<T>(registry: $ResourceKey_<$Registry<T>>, type: $Class<never>): $EventTargetType<$ResourceKey<T>>;
        describeType(describeType: $TypeInfo_): $EventTargetType<T>;
        static STRING: $EventTargetType<string>;
        static ID: $EventTargetType<$ResourceLocation>;
        type: $Class<T>;
        static REGISTRY: $EventTargetType<$ResourceKey<$Registry<never>>>;
    }
    export class $KubeStartupEvent {
        static BASIC: $KubeStartupEvent;
    }
    export interface $KubeStartupEvent extends $KubeEvent {
    }
    export class $EventGroup {
        add(name: string, scriptType: $ScriptTypePredicate_, eventType: $Supplier_<$Class<$KubeEvent>>): $EventHandler;
        static of(name: string): $EventGroup;
        common(name: string, eventType: $Supplier_<$Class<$KubeEvent>>): $EventHandler;
        getHandlers(): $Map<string, $EventHandler>;
        client(name: string, eventType: $Supplier_<$Class<$KubeEvent>>): $EventHandler;
        server(name: string, eventType: $Supplier_<$Class<$KubeEvent>>): $EventHandler;
        startup(name: string, eventType: $Supplier_<$Class<$KubeEvent>>): $EventHandler;
        name: string;
        get handlers(): $Map<string, $EventHandler>;
    }
    export class $EventExit extends $Exception {
        result: $EventResult;
        constructor(result: $EventResult);
    }
    export class $EventResult$Type extends $Enum<$EventResult$Type> {
        exit(value: $Object): $EventExit;
        static values(): $EventResult$Type[];
        static valueOf(name: string): $EventResult$Type;
        static INTERRUPT_TRUE: $EventResult$Type;
        static PASS: $EventResult$Type;
        static INTERRUPT_FALSE: $EventResult$Type;
        static INTERRUPT_DEFAULT: $EventResult$Type;
        static ERROR: $EventResult$Type;
    }
    /**
     * Values that may be interpreted as {@link $EventResult$Type}.
     */
    export type $EventResult$Type_ = "error" | "pass" | "interrupt_default" | "interrupt_false" | "interrupt_true";
    export class $IEventHandler {
    }
    export interface $IEventHandler {
        onEvent(event: $KubeEvent): $Object;
    }
    /**
     * Values that may be interpreted as {@link $IEventHandler}.
     */
    export type $IEventHandler_ = ((event: $KubeEvent) => $Object);
    export class $TargetedEventHandler<E> extends $EventHandler {
        findUniqueExtraIds(type: $ScriptType_): $Set<E>;
        hasListeners(extraId: E): boolean;
        post(type: $ScriptTypeHolder_, extraId: E, event: $KubeEvent): $EventResult;
        post(event: $KubeEvent, extraId: E): $EventResult;
        static DONTENUM: number;
        eventType: $Supplier<$Class<$KubeEvent>>;
        scriptTypePredicate: $ScriptTypePredicate;
        static CONST: number;
        name: string;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        group: $EventGroup;
    }
    export class $EventExceptionHandler {
    }
    export interface $EventExceptionHandler {
        handle(event: $KubeEvent, container: $EventHandlerContainer, ex: $Throwable): $Throwable;
    }
    /**
     * Values that may be interpreted as {@link $EventExceptionHandler}.
     */
    export type $EventExceptionHandler_ = ((event: $KubeEvent, container: $EventHandlerContainer, ex: $Throwable) => $Throwable);
    export class $KubeEvent {
    }
    export interface $KubeEvent {
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
    }
    export class $EventResult {
        interruptFalse(): boolean;
        applyCancel(event: $ICancellableEvent): boolean;
        applyTristate(consumer: $Consumer_<$TriState>): void;
        interruptTrue(): boolean;
        interruptDefault(): boolean;
        type(): $EventResult$Type;
        value(): $Object;
        override(): boolean;
        pass(): boolean;
        cx(): $Context;
        static PASS: $EventResult;
    }
    export class $EventTargetType$Transformer {
        static IDENTITY: $EventTargetType$Transformer;
    }
    export interface $EventTargetType$Transformer {
        transform(source: $Object): $Object;
    }
    /**
     * Values that may be interpreted as {@link $EventTargetType$Transformer}.
     */
    export type $EventTargetType$Transformer_ = ((source: $Object) => $Object);
    export class $EventHandlerContainer {
        static isEmpty(array: $EventHandlerContainer[]): boolean;
        add(extraId: $Object, handler: $IEventHandler_, source: string, line: number): void;
        handle(console: $ConsoleJS, handler: $EventHandler, event: $KubeEvent): $EventResult;
        handler: $IEventHandler;
        line: number;
        source: string;
        target: $Object;
        constructor(target: $Object, handler: $IEventHandler_, source: string, line: number);
    }
}
