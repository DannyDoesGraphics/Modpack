import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Consumer_ } from "@package/java/util/function";
import { $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $Codec_, $Codec } from "@package/com/mojang/serialization";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $WithConditions, $WithConditions_ } from "@package/net/neoforged/neoforge/common/conditions";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $Map_, $Map, $Set, $List_ } from "@package/java/util";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
export * as builtin from "@package/net/neoforged/neoforge/registries/datamaps/builtin";

declare module "@package/net/neoforged/neoforge/registries/datamaps" {
    export class $DataMapEntry$Removal<T, R> extends $Record {
        remover(): ($DataMapValueRemover<R, T>) | undefined;
        key(): $Either<$TagKey<R>, $ResourceKey<R>>;
        static codec<T, R>(arg0: $Codec_<$Either<$TagKey_<R>, $ResourceKey_<R>>>, arg1: $DataMapType<R, T>): $Codec<$DataMapEntry$Removal<T, R>>;
        constructor(key: $Either<$TagKey_<R>, $ResourceKey_<R>>, remover: ($DataMapValueRemover_<R, T>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $DataMapEntry$Removal}.
     */
    export type $DataMapEntry$Removal_<T, R> = { key?: $Either<$TagKey_<any>, $ResourceKey_<any>>, remover?: ($DataMapValueRemover_<R, T>) | undefined,  } | [key?: $Either<$TagKey_<any>, $ResourceKey_<any>>, remover?: ($DataMapValueRemover_<R, T>) | undefined, ];
    export class $DataMapFile<T, R> extends $Record {
        values(): $Map<$Either<$TagKey<R>, $ResourceKey<R>>, ($WithConditions<$DataMapEntry<T>>) | undefined>;
        replace(): boolean;
        removals(): $List<$DataMapEntry$Removal<T, R>>;
        static codec<T, R>(arg0: $ResourceKey_<$Registry<R>>, arg1: $DataMapType<R, T>): $Codec<$DataMapFile<T, R>>;
        constructor(replace: boolean, values: $Map_<$Either<$TagKey_<R>, $ResourceKey_<R>>, ($WithConditions_<$DataMapEntry_<T>>) | undefined>, removals: $List_<$DataMapEntry$Removal_<T, R>>);
    }
    /**
     * Values that may be interpreted as {@link $DataMapFile}.
     */
    export type $DataMapFile_<T, R> = { removals?: $List_<$DataMapEntry$Removal_<any, any>>, replace?: boolean, values?: $Map_<$Either<$TagKey_<any>, $ResourceKey_<any>>, ($WithConditions_<$DataMapEntry_<T>>) | undefined>,  } | [removals?: $List_<$DataMapEntry$Removal_<any, any>>, replace?: boolean, values?: $Map_<$Either<$TagKey_<any>, $ResourceKey_<any>>, ($WithConditions_<$DataMapEntry_<T>>) | undefined>, ];
    /**
     * Event fired on the game event bus when the data maps of
     * a registry have either been synced to the client or reloaded on the server.
     * 
     * This event can be used to build caches (like weighed lists) or for post-processing the data map values.
     * 
     * Remember however that the data map values should **not** end up referencing their owner, as they're not copied when attached to tags.
     */
    export class $DataMapsUpdatedEvent extends $Event {
        /**
         * @return the key of the registry that had its data maps updated
         */
        getRegistryKey(): $ResourceKey<$Registry<never>>;
        /**
         * Runs the given `consumer` if the registry is of the given `type`.
         */
        ifRegistry<T>(type: $ResourceKey_<$Registry<T>>, consumer: $Consumer_<$Registry<T>>): void;
        getCause(): $DataMapsUpdatedEvent$UpdateCause;
        /**
         * @return the registry that had its data maps updated
         */
        getRegistry(): $Registry<never>;
        /**
         * @return a registry access
         */
        getRegistries(): $RegistryAccess;
        constructor(arg0: $RegistryAccess, arg1: $Registry<never>, arg2: $DataMapsUpdatedEvent$UpdateCause_);
        get registryKey(): $ResourceKey<$Registry<never>>;
        get cause(): $DataMapsUpdatedEvent$UpdateCause;
        get registry(): $Registry<never>;
        get registries(): $RegistryAccess;
    }
    /**
     * A version of data map types that has two more features for compatibility and conflict handling: mergers and removers.
     * 
     * A remover will be used to support targeted removals that
     * support decomposition, instead of the removal of the entire value. That way, for instance, one is able to remove just a value with
     * a specific key from a map-based data map, instead of the entire map.
     * 
     * To use a remover one has to change the structure of the `remove` list, to an object:
     * 
     * `"remove": {
     * "someobject:someid": {} // Remover object
     * }`
     * 
     * Or, to an object list:
     * 
     * `"remove": [
     * {
     * "key": someobject:someid",
     * "remover": {} // Remover object. Optional. If not provided, the attached value will be removed from the object completely, without invoking the remover
     * }
     * ]`
     * 
     * Advanced data map types also have the ability of handling conflicts between datapacks that attach an object to the same registry object.
     * Using mergers, collection-based data maps can, as such, merge values provided by multiple packs
     * in the same collection.
     * 
     * The default merge will however have the overriding behaviour of "last come wins", similar to recipes.
     */
    export class $AdvancedDataMapType<R, T, VR extends $DataMapValueRemover<R, T>> extends $DataMapType<R, T> {
        /**
         * @return the codec used to create removers
         */
        remover(): $Codec<VR>;
        /**
         * @return an advanced data map type builder
         */
        static builder<T, R>(id: $ResourceLocation_, registry: $ResourceKey_<$Registry<R>>, codec: $Codec_<T>): $AdvancedDataMapType$Builder<T, R, $DataMapValueRemover$Default<T, R>>;
        /**
         * @return the merger that handles data map conflicts
         */
        merger(): $DataMapValueMerger<R, T>;
    }
    export class $DataMapType<R, T> {
        networkCodec(): $Codec<T>;
        mandatorySync(): boolean;
        static builder<T, R>(arg0: $ResourceLocation_, arg1: $ResourceKey_<$Registry<R>>, arg2: $Codec_<T>): $DataMapType$Builder<T, R>;
        id(): $ResourceLocation;
        codec(): $Codec<T>;
        registryKey(): $ResourceKey<$Registry<R>>;
    }
    /**
     * An interface used to remove values from registry data maps. This allows "decomposing" the data
     * and removing only a specific part of it (like a specific key in the case of map-based data).
     */
    export class $DataMapValueRemover<R, T> {
    }
    export interface $DataMapValueRemover<R, T> {
        remove(arg0: T, arg1: $Registry<R>, arg2: $Either<$TagKey_<R>, $ResourceKey_<R>>, arg3: R): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $DataMapValueRemover}.
     */
    export type $DataMapValueRemover_<R, T> = ((arg0: T, arg1: $Registry<R>, arg2: $Either<$TagKey<R>, $ResourceKey<R>>, arg3: R) => (T) | undefined);
    export class $DataMapsUpdatedEvent$UpdateCause extends $Enum<$DataMapsUpdatedEvent$UpdateCause> {
        static values(): $DataMapsUpdatedEvent$UpdateCause[];
        static valueOf(arg0: string): $DataMapsUpdatedEvent$UpdateCause;
        static CLIENT_SYNC: $DataMapsUpdatedEvent$UpdateCause;
        static SERVER_RELOAD: $DataMapsUpdatedEvent$UpdateCause;
    }
    /**
     * Values that may be interpreted as {@link $DataMapsUpdatedEvent$UpdateCause}.
     */
    export type $DataMapsUpdatedEvent$UpdateCause_ = "client_sync" | "server_reload";
    /**
     * An interface used to merge two conflicting registry data map values attached to the same object.
     * 
     * Using a merger you can, for example, merge list data maps that come from different sources, when
     * otherwise the newest entry would win and override the older one.
     */
    export class $DataMapValueMerger<R, T> {
        /**
         * @return a default merger that overrides the old value with the new one
         */
        static defaultMerger<T, R>(): $DataMapValueMerger<R, T>;
        /**
         * @return a default merger that overrides the old value with the new one
         */
        static setMerger<T, R>(): $DataMapValueMerger<R, $Set<T>>;
        /**
         * @return a default merger that overrides the old value with the new one
         */
        static listMerger<T, R>(): $DataMapValueMerger<R, $List<T>>;
        /**
         * @return a default merger that overrides the old value with the new one
         */
        static mapMerger<K, V, R>(): $DataMapValueMerger<R, $Map<K, V>>;
    }
    export interface $DataMapValueMerger<R, T> {
        merge(arg0: $Registry<R>, arg1: $Either<$TagKey_<R>, $ResourceKey_<R>>, arg2: T, arg3: $Either<$TagKey_<R>, $ResourceKey_<R>>, arg4: T): T;
    }
    /**
     * Values that may be interpreted as {@link $DataMapValueMerger}.
     */
    export type $DataMapValueMerger_<R, T> = ((arg0: $Registry<R>, arg1: $Either<$TagKey<R>, $ResourceKey<R>>, arg2: T, arg3: $Either<$TagKey<R>, $ResourceKey<R>>, arg4: T) => T);
    export class $DataMapType$Builder<T, R> {
        synced(arg0: $Codec_<T>, arg1: boolean): $DataMapType$Builder<T, R>;
        build(): $DataMapType<R, T>;
    }
    /**
     * A builder for advanced data map types.
     */
    export class $AdvancedDataMapType$Builder<T, R, VR extends $DataMapValueRemover<R, T>> extends $DataMapType$Builder<T, R> {
        /**
         * Configures a remover for the data map.
         */
        remover<VR1 extends $DataMapValueRemover<R, T>>(remover: $Codec_<VR1>): $AdvancedDataMapType$Builder<T, R, VR1>;
        /**
         * Configures the merger that will handle conflicting values for the same registry object.
         */
        merger(merger: $DataMapValueMerger_<R, T>): $AdvancedDataMapType$Builder<T, R, VR>;
    }
    /**
     * Event fired on the mod event bus, in order to register data map types.
     */
    export class $RegisterDataMapTypesEvent extends $Event implements $IModBusEvent {
        /**
         * Register a registry data map.
         */
        register<T, R>(type: $DataMapType<R, T>): void;
        constructor(attachments: $Map_<$ResourceKey_<$Registry<never>>, $Map_<$ResourceLocation_, $DataMapType<never, never>>>);
    }
    export class $DataMapValueRemover$Default<T, R> implements $DataMapValueRemover<R, T> {
        static defaultRemover<T, R>(): $DataMapValueRemover$Default<T, R>;
        remove(arg0: T, arg1: $Registry<R>, arg2: $Either<$TagKey_<R>, $ResourceKey_<R>>, arg3: R): (T) | undefined;
        static codec<T, R>(): $Codec<$DataMapValueRemover$Default<T, R>>;
        static INSTANCE: $DataMapValueRemover$Default<never, never>;
    }
    export class $DataMapEntry<T> extends $Record {
        value(): T;
        replace(): boolean;
        static codec<T>(arg0: $DataMapType<never, T>): $Codec<$DataMapEntry<T>>;
        constructor(value: T, replace: boolean);
    }
    /**
     * Values that may be interpreted as {@link $DataMapEntry}.
     */
    export type $DataMapEntry_<T> = { replace?: boolean, value?: any,  } | [replace?: boolean, value?: any, ];
    /**
     * Represents a registry object (usually a `Holder`) that has data maps.
     */
    export class $IWithData<R> {
    }
    export interface $IWithData<R> {
        getData<T>(arg0: $DataMapType<R, T>): T;
    }
}
