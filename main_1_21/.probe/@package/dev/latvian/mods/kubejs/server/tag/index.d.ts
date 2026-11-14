import { $Consumer } from "@package/java/util/function";
import { $TagLoader$EntryWithSource, $TagLoader$EntryWithSource_ } from "@package/net/minecraft/tags";
import { $Registry } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List, $List_, $Map_, $Map, $Set } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $KubeEvent, $EventExceptionHandler } from "@package/dev/latvian/mods/kubejs/event";

declare module "@package/dev/latvian/mods/kubejs/server/tag" {
    export class $PreTagKubeEvent extends $TagKubeEvent {
        static handle(tagEventHolders: $Map_<$ResourceKey_<never>, $PreTagKubeEvent>): void;
        registryKey: $ResourceKey<never>;
        totalRemoved: number;
        invalid: boolean;
        static SOURCE: string;
        vanillaRegistry: $Registry<never>;
        totalAdded: number;
        static TAG_EVENT_HANDLER: $EventExceptionHandler;
        actions: $List<$Consumer<$TagKubeEvent>>;
        tags: $Map<$ResourceLocation, $PreTagWrapper>;
        constructor(registryKey: $ResourceKey_<never>);
    }
    export class $TagWrapper {
        getObjectIds(): $List<$ResourceLocation>;
        entries: $List<$TagLoader$EntryWithSource>;
        id: $ResourceLocation;
        event: $TagKubeEvent;
        constructor(e: $TagKubeEvent, i: $ResourceLocation_, t: $List_<$TagLoader$EntryWithSource_>);
        get objectIds(): $List<$ResourceLocation>;
    }
    export class $TagKubeEvent implements $KubeEvent {
        getElementIds(): $Set<$ResourceLocation>;
        getType(): $ResourceLocation;
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
        registryKey: $ResourceKey<never>;
        totalRemoved: number;
        static SOURCE: string;
        vanillaRegistry: $Registry<never>;
        totalAdded: number;
        static TAG_EVENT_HANDLER: $EventExceptionHandler;
        tags: $Map<$ResourceLocation, $TagWrapper>;
        constructor(registryKey: $ResourceKey_<never>, vr: $Registry<never>);
        get elementIds(): $Set<$ResourceLocation>;
        get type(): $ResourceLocation;
    }
    export class $PreTagWrapper extends $TagWrapper {
        preEvent: $PreTagKubeEvent;
        entries: $List<$TagLoader$EntryWithSource>;
        id: $ResourceLocation;
        event: $TagKubeEvent;
        constructor(e: $PreTagKubeEvent, i: $ResourceLocation_);
    }
}
