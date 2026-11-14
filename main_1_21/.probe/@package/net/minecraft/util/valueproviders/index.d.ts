import { $MapCodec_, $MapCodec, $Codec_, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $SimpleWeightedRandomList } from "@package/net/minecraft/util/random";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/util/valueproviders" {
    export class $ClampedNormalFloat extends $FloatProvider {
        static of(mean: number, deviation: number, min: number, max: number): $ClampedNormalFloat;
        static sample(random: $RandomSource, mean: number, deviation: number, min: number, max: number): number;
        static CODEC: $MapCodec<$ClampedNormalFloat>;
    }
    export class $TrapezoidFloat extends $FloatProvider {
        static of(min: number, max: number, plateau: number): $TrapezoidFloat;
        static CODEC: $MapCodec<$TrapezoidFloat>;
    }
    export interface $FloatProviderType<P> extends RegistryMarked<RegistryTypes.FloatProviderTypeTag, RegistryTypes.FloatProviderType> {}
    export interface $IntProviderType<P> extends RegistryMarked<RegistryTypes.IntProviderTypeTag, RegistryTypes.IntProviderType> {}
    export class $FloatProviderType<P extends $FloatProvider> {
        static register<P extends $FloatProvider>(name: string, codec: $MapCodec_<P>): $FloatProviderType<P>;
        static UNIFORM: $FloatProviderType<$UniformFloat>;
        static CONSTANT: $FloatProviderType<$ConstantFloat>;
        static CLAMPED_NORMAL: $FloatProviderType<$ClampedNormalFloat>;
        static TRAPEZOID: $FloatProviderType<$TrapezoidFloat>;
    }
    export interface $FloatProviderType<P extends $FloatProvider> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $FloatProviderType}.
     */
    export type $FloatProviderType_<P> = RegistryTypes.FloatProviderType | (() => $MapCodec_<P>);
    export class $IntProviderType<P extends $IntProvider> {
        static register<P extends $IntProvider>(name: string, codec: $MapCodec_<P>): $IntProviderType<P>;
        static BIASED_TO_BOTTOM: $IntProviderType<$BiasedToBottomInt>;
        static CLAMPED: $IntProviderType<$ClampedInt>;
        static WEIGHTED_LIST: $IntProviderType<$WeightedListInt>;
        static UNIFORM: $IntProviderType<$UniformInt>;
        static CONSTANT: $IntProviderType<$ConstantInt>;
        static CLAMPED_NORMAL: $IntProviderType<$ClampedNormalInt>;
    }
    export interface $IntProviderType<P extends $IntProvider> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $IntProviderType}.
     */
    export type $IntProviderType_<P> = RegistryTypes.IntProviderType | (() => $MapCodec_<P>);
    export class $WeightedListInt extends $IntProvider {
        static CODEC: $MapCodec<$WeightedListInt>;
        static NON_NEGATIVE_CODEC: $Codec<$IntProvider>;
        static POSITIVE_CODEC: $Codec<$IntProvider>;
        constructor(distribution: $SimpleWeightedRandomList<$IntProvider_>);
    }
    export class $ClampedInt extends $IntProvider {
        static of(source: $IntProvider_, minInclusive: number, maxInclusive: number): $ClampedInt;
        static CODEC: $MapCodec<$ClampedInt>;
        static NON_NEGATIVE_CODEC: $Codec<$IntProvider>;
        static POSITIVE_CODEC: $Codec<$IntProvider>;
        constructor(source: $IntProvider_, minInclusive: number, maxInclusive: number);
    }
    export class $IntProvider {
        static validateCodec<T extends $IntProvider>(min: number, max: number, codec: $Codec_<T>): $Codec<T>;
        getMinValue(): number;
        getMaxValue(): number;
        getType(): $IntProviderType<never>;
        /**
         * Creates a codec for an IntProvider that only accepts numbers in the given range.
         */
        static codec(minInclusive: number, maxInclusive: number): $Codec<$IntProvider>;
        sample(random: $RandomSource): number;
        static CODEC: $Codec<$IntProvider>;
        static NON_NEGATIVE_CODEC: $Codec<$IntProvider>;
        static POSITIVE_CODEC: $Codec<$IntProvider>;
        constructor();
        get minValue(): number;
        get maxValue(): number;
        get type(): $IntProviderType<never>;
    }
    /**
     * Values that may be interpreted as {@link $IntProvider}.
     */
    export type $IntProvider_ = number | [min: number, max: number, ] | { bounds: [min: number, max: number, ],  } | { min: number, max: number,  } | { min_inclusive: number, max_inclusive: number,  } | { value: number,  } | { clamped: $IntProvider,  } | { clamped_normal: $IntProvider,  };
    export class $UniformInt extends $IntProvider {
        static of(minInclusive: number, maxInclusive: number): $UniformInt;
        static CODEC: $MapCodec<$UniformInt>;
        static NON_NEGATIVE_CODEC: $Codec<$IntProvider>;
        static POSITIVE_CODEC: $Codec<$IntProvider>;
    }
    export class $BiasedToBottomInt extends $IntProvider {
        static of(minInclusive: number, maxInclusive: number): $BiasedToBottomInt;
        static CODEC: $MapCodec<$BiasedToBottomInt>;
        static NON_NEGATIVE_CODEC: $Codec<$IntProvider>;
        static POSITIVE_CODEC: $Codec<$IntProvider>;
    }
    export class $MultipliedFloats implements $SampledFloat {
        sample(random: $RandomSource): number;
        constructor(...values: $SampledFloat_[]);
    }
    export class $SampledFloat {
    }
    export interface $SampledFloat {
        sample(random: $RandomSource): number;
    }
    /**
     * Values that may be interpreted as {@link $SampledFloat}.
     */
    export type $SampledFloat_ = ((arg0: $RandomSource) => number);
    export class $ClampedNormalInt extends $IntProvider {
        static of(mean: number, deviation: number, minInclusive: number, maxInclusive: number): $ClampedNormalInt;
        static sample(random: $RandomSource, mean: number, deviation: number, minInclusive: number, maxInclusive: number): number;
        static CODEC: $MapCodec<$ClampedNormalInt>;
        static NON_NEGATIVE_CODEC: $Codec<$IntProvider>;
        static POSITIVE_CODEC: $Codec<$IntProvider>;
    }
    export class $UniformFloat extends $FloatProvider {
        static of(minInclusive: number, maxExclusive: number): $UniformFloat;
        static CODEC: $MapCodec<$UniformFloat>;
    }
    export class $ConstantFloat extends $FloatProvider {
        getValue(): number;
        static of(value: number): $ConstantFloat;
        static ZERO: $ConstantFloat;
        static CODEC: $MapCodec<$ConstantFloat>;
        get value(): number;
    }
    export class $ConstantInt extends $IntProvider {
        getValue(): number;
        static of(value: number): $ConstantInt;
        static ZERO: $ConstantInt;
        static CODEC: $MapCodec<$ConstantInt>;
        static NON_NEGATIVE_CODEC: $Codec<$IntProvider>;
        static POSITIVE_CODEC: $Codec<$IntProvider>;
        get value(): number;
    }
    export class $FloatProvider implements $SampledFloat {
        getMinValue(): number;
        getMaxValue(): number;
        getType(): $FloatProviderType<never>;
        /**
         * Creates a codec for a FloatProvider that only accepts numbers in the given range.
         */
        static codec(minInclusive: number, maxInclusive: number): $Codec<$FloatProvider>;
        static CODEC: $Codec<$FloatProvider>;
        constructor();
        get minValue(): number;
        get maxValue(): number;
        get type(): $FloatProviderType<never>;
    }
}
