import { $SharedSuggestionProvider, $CommandSourceStack, $CommandBuildContext } from "@package/net/minecraft/commands";
import { $JsonObject_, $JsonObject } from "@package/com/google/gson";
import { $Supplier_, $Function_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $SuggestionProvider_, $SuggestionProvider } from "@package/com/mojang/brigadier/suggestion";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $Class } from "@package/java/lang";
import { $Map, $Set } from "@package/java/util";
import { $CommandNode } from "@package/com/mojang/brigadier/tree";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";
export * as brigadier from "@package/net/minecraft/commands/synchronization/brigadier";

declare module "@package/net/minecraft/commands/synchronization" {
    export class $SingletonArgumentInfo<A extends $ArgumentType<never>> implements $ArgumentTypeInfo<A, $SingletonArgumentInfo$Template> {
        static contextFree<T extends $ArgumentType<never>>(argumentTypeSupplier: $Supplier_<T>): $SingletonArgumentInfo<T>;
        static contextAware<T extends $ArgumentType<never>>(argumentType: $Function_<$CommandBuildContext, T>): $SingletonArgumentInfo<T>;
        serializeToNetwork(template: $SingletonArgumentInfo$Template, buffer: $FriendlyByteBuf): void;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $SingletonArgumentInfo$Template;
        serializeToJson(template: $SingletonArgumentInfo$Template, json: $JsonObject_): void;
        unpack(argument: A): $SingletonArgumentInfo$Template;
    }
    export class $ArgumentTypeInfos {
        static registerByClass<A extends $ArgumentType<never>, T extends $ArgumentTypeInfo$Template<A>, I extends $ArgumentTypeInfo<A, T>>(arg0: $Class<A>, arg1: I): I;
        static isClassRecognized(clazz: $Class<never>): boolean;
        static byClass<A extends $ArgumentType<never>>(argument: A): $ArgumentTypeInfo<A, never>;
        static bootstrap(registry: $Registry<$ArgumentTypeInfo_<never, never>>): $ArgumentTypeInfo<never, never>;
        static unpack<A extends $ArgumentType<never>>(argument: A): $ArgumentTypeInfo$Template<A>;
        static BY_CLASS: $Map<$Class<never>, $ArgumentTypeInfo<never, never>>;
        constructor();
    }
    export class $SuggestionProviders$Wrapper implements $SuggestionProvider<$SharedSuggestionProvider> {
    }
    export interface $ArgumentTypeInfo<A, T> extends RegistryMarked<RegistryTypes.CommandArgumentTypeTag, RegistryTypes.CommandArgumentType> {}
    export class $ArgumentUtils {
        static serializeNodeToJson<S>(dispatcher: $CommandDispatcher<S>, node: $CommandNode<S>): $JsonObject;
        static findUsedArgumentTypes<T>(node: $CommandNode<T>): $Set<$ArgumentType<never>>;
        static numberHasMin(number: number): boolean;
        static createNumberFlags(min: boolean, max: boolean): number;
        static numberHasMax(number: number): boolean;
        constructor();
    }
    export class $ArgumentTypeInfo<A extends $ArgumentType<never>, T extends $ArgumentTypeInfo$Template<A>> {
    }
    export interface $ArgumentTypeInfo<A extends $ArgumentType<never>, T extends $ArgumentTypeInfo$Template<A>> {
        serializeToNetwork(template: T, buffer: $FriendlyByteBuf): void;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): T;
        serializeToJson(template: T, json: $JsonObject_): void;
        unpack(argument: A): T;
    }
    /**
     * Values that may be interpreted as {@link $ArgumentTypeInfo}.
     */
    export type $ArgumentTypeInfo_<A, T> = RegistryTypes.CommandArgumentType;
    export class $ArgumentTypeInfo$Template<A extends $ArgumentType<never>> {
    }
    export interface $ArgumentTypeInfo$Template<A extends $ArgumentType<never>> {
        type(): $ArgumentTypeInfo<A, never>;
        instantiate(context: $CommandBuildContext): A;
    }
    export class $SingletonArgumentInfo$Template implements $ArgumentTypeInfo$Template<A> {
        type(): $ArgumentTypeInfo<A, never>;
        instantiate(context: $CommandBuildContext): A;
    }
    export class $SuggestionProviders {
        /**
         * Checks to make sure that the given suggestion provider is a wrapped one that was created via `#register`. If not, returns `#ASK_SERVER`. Needed because custom providers don't have a known ID to send to the client, but ASK_SERVER always works.
         */
        static safelySwap(provider: $SuggestionProvider_<$SharedSuggestionProvider>): $SuggestionProvider<$SharedSuggestionProvider>;
        /**
         * Gets the ID for the given provider. If the provider is not a wrapped one created via `#register`, then it returns `#ASK_SERVER_ID` instead, as there is no known ID but ASK_SERVER always works.
         */
        static getName(provider: $SuggestionProvider_<$SharedSuggestionProvider>): $ResourceLocation;
        static register<S extends $SharedSuggestionProvider>(name: $ResourceLocation_, provider: $SuggestionProvider_<$SharedSuggestionProvider>): $SuggestionProvider<S>;
        static getProvider(name: $ResourceLocation_): $SuggestionProvider<$SharedSuggestionProvider>;
        static AVAILABLE_SOUNDS: $SuggestionProvider<$CommandSourceStack>;
        static ALL_RECIPES: $SuggestionProvider<$CommandSourceStack>;
        static SUMMONABLE_ENTITIES: $SuggestionProvider<$CommandSourceStack>;
        static ASK_SERVER: $SuggestionProvider<$SharedSuggestionProvider>;
        constructor();
    }
}
