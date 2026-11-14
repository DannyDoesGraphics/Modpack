import { $Consumer_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Iterable_ } from "@package/java/lang";
import { $Map, $Set } from "@package/java/util";

declare module "@package/net/minecraft/world/flag" {
    export class $FeatureElement {
        static FILTERED_REGISTRIES: $Set<$ResourceKey<$Registry<$FeatureElement>>>;
    }
    export interface $FeatureElement {
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        requiredFeatures(): $FeatureFlagSet;
    }
    /**
     * Values that may be interpreted as {@link $FeatureElement}.
     */
    export type $FeatureElement_ = (() => $FeatureFlagSet);
    export class $FeatureFlagSet {
        isSubsetOf(set: $FeatureFlagSet): boolean;
        isEmpty(): boolean;
        join(other: $FeatureFlagSet): $FeatureFlagSet;
        static of(): $FeatureFlagSet;
        static of(flag: $FeatureFlag): $FeatureFlagSet;
        static of(flag: $FeatureFlag, ...others: $FeatureFlag[]): $FeatureFlagSet;
        contains(flag: $FeatureFlag): boolean;
        subtract(other: $FeatureFlagSet): $FeatureFlagSet;
        intersects(set: $FeatureFlagSet): boolean;
        static MAX_CONTAINER_SIZE: number;
        get empty(): boolean;
    }
    export class $FeatureFlagRegistry$Builder {
        createVanilla(id: string): $FeatureFlag;
        create(arg0: $ResourceLocation_, arg1: boolean): $FeatureFlag;
        /**
         * @deprecated
         */
        create(location: $ResourceLocation_): $FeatureFlag;
        build(): $FeatureFlagRegistry;
        constructor(id: string);
    }
    export class $FeatureFlags {
        static printMissingFlags(registry: $FeatureFlagRegistry, enabledFeatures: $FeatureFlagSet, requestedFeatures: $FeatureFlagSet): string;
        static printMissingFlags(enabledFeatures: $FeatureFlagSet, requestedFeatures: $FeatureFlagSet): string;
        static isExperimental(set: $FeatureFlagSet): boolean;
        static BUNDLE: $FeatureFlag;
        static CODEC: $Codec<$FeatureFlagSet>;
        static VANILLA: $FeatureFlag;
        static DEFAULT_FLAGS: $FeatureFlagSet;
        static TRADE_REBALANCE: $FeatureFlag;
        static VANILLA_SET: $FeatureFlagSet;
        static REGISTRY: $FeatureFlagRegistry;
        constructor();
    }
    export class $FeatureFlagUniverse {
        constructor(id: string);
    }
    export class $FeatureFlag {
        isModded(): boolean;
        get modded(): boolean;
    }
    export class $FeatureFlagRegistry {
        toNames(set: $FeatureFlagSet): $Set<$ResourceLocation>;
        fromNames(names: $Iterable_<$ResourceLocation>): $FeatureFlagSet;
        fromNames(names: $Iterable_<$ResourceLocation>, onError: $Consumer_<$ResourceLocation>): $FeatureFlagSet;
        isSubset(set: $FeatureFlagSet): boolean;
        hasAnyModdedFlags(): boolean;
        getAllFlags(): $Map<$ResourceLocation, $FeatureFlag>;
        getFlag(arg0: $ResourceLocation_): $FeatureFlag;
        allFlags(): $FeatureFlagSet;
        subset(...flags: $FeatureFlag[]): $FeatureFlagSet;
        codec(): $Codec<$FeatureFlagSet>;
    }
}
