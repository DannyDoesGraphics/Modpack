import { $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $IntStream } from "@package/java/util/stream";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $List_ } from "@package/java/util";
import { $Record, $StringBuilder } from "@package/java/lang";
import { $IPerlinNoiseSampler, $IInterpolatedNoiseSampler, $IOctavePerlinNoiseSampler, $IDoublePerlinNoiseSampler, $ISimplexNoiseSampler } from "@package/com/ishland/c2me/base/mixin/access";
import { $DensityFunction$FunctionContext, $DensityFunction$ContextProvider, $DensityFunction, $DensityFunction$SimpleFunction, $DensityFunction$Visitor_ } from "@package/net/minecraft/world/level/levelgen";
import { $RandomSource, $KeyDispatchDataCodec } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/levelgen/synth" {
    /**
     * This samples the sum of two individual samplers of perlin noise octaves.
     * The input coordinates are scaled by `#INPUT_FACTOR`, and the result is scaled by `#valueFactor`.
     */
    export class $NormalNoise implements $IDoublePerlinNoiseSampler {
        /**
         * @deprecated
         */
        static createLegacyNetherBiome(random: $RandomSource, parameters: $NormalNoise$NoiseParameters_): $NormalNoise;
        getValue(x: number, arg1: number, y: number): number;
        parameters(): $NormalNoise$NoiseParameters;
        static create(random: $RandomSource, firstOctave: number, ...amplitudes: number[]): $NormalNoise;
        static create(random: $RandomSource, parameters: $NormalNoise$NoiseParameters_): $NormalNoise;
        maxValue(): number;
        parityConfigString(builder: $StringBuilder): void;
        getFirstSampler(): $PerlinNoise;
        getSecondSampler(): $PerlinNoise;
        getAmplitude(): number;
        get firstSampler(): $PerlinNoise;
        get secondSampler(): $PerlinNoise;
        get amplitude(): number;
    }
    /**
     * This class wraps three individual perlin noise octaves samplers.
     * It computes the octaves of the main noise, and then uses that as a linear interpolation value between the minimum and maximum limit noises.
     */
    export class $BlendedNoise implements $DensityFunction$SimpleFunction, $IInterpolatedNoiseSampler {
        static createUnseeded(xzScale: number, arg1: number, yScale: number, arg3: number, xzFactor: number): $BlendedNoise;
        withNewRandom(random: $RandomSource): $BlendedNoise;
        compute(context: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        parityConfigString(builder: $StringBuilder): void;
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        getYScale(): number;
        getLowerInterpolatedNoise(): $PerlinNoise;
        getUpperInterpolatedNoise(): $PerlinNoise;
        getInterpolationNoise(): $PerlinNoise;
        getScaledXzScale(): number;
        getScaledYScale(): number;
        getXzFactor(): number;
        getYFactor(): number;
        getSmearScaleMultiplier(): number;
        getXzScale(): number;
        getMaxValue(): number;
        static CODEC: $KeyDispatchDataCodec<$BlendedNoise>;
        constructor(random: $RandomSource, xzScale: number, arg2: number, yScale: number, arg4: number, xzFactor: number);
        get YScale(): number;
        get lowerInterpolatedNoise(): $PerlinNoise;
        get upperInterpolatedNoise(): $PerlinNoise;
        get interpolationNoise(): $PerlinNoise;
        get scaledXzScale(): number;
        get scaledYScale(): number;
        get xzFactor(): number;
        get YFactor(): number;
        get smearScaleMultiplier(): number;
        get xzScale(): number;
    }
    /**
     * This class generates multiple octaves of perlin noise. Each individual octave is an instance of `ImprovedNoise`.
     * Mojang uses the term 'Perlin' to describe octaves or fBm (Fractal Brownian Motion) noise.
     */
    export class $PerlinNoise implements $IOctavePerlinNoiseSampler {
        /**
         * @deprecated
         */
        static createLegacyForLegacyNetherBiome(random: $RandomSource, firstOctave: number, amplitudes: $DoubleList): $PerlinNoise;
        maxBrokenValue(multiplier: number): number;
        /**
         * @deprecated
         */
        static createLegacyForBlendedNoise(random: $RandomSource, octaves: $IntStream): $PerlinNoise;
        /**
         * @return A single octave of Perlin noise.
         */
        getOctaveNoise(octave: number): $ImprovedNoise;
        static wrap(multiplier: number): number;
        getValue(x: number, y: number, y: number): number;
        /**
         * @deprecated
         */
        getValue(x: number, arg1: number, y: number, arg3: number, z: number, arg5: boolean): number;
        static create(random: $RandomSource, octaves: $IntStream): $PerlinNoise;
        static create(random: $RandomSource, firstOctave: number, amplitudes: $DoubleList): $PerlinNoise;
        static create(random: $RandomSource, firstOctave: number, firstAmplitude: number, ...arg3: number[]): $PerlinNoise;
        static create(random: $RandomSource, octaves: $List_<number>): $PerlinNoise;
        parityConfigString(builder: $StringBuilder): void;
        getOctaveSamplers(): $ImprovedNoise[];
        getAmplitudes(): $DoubleList;
        getPersistence(): number;
        getLacunarity(): number;
        get octaveSamplers(): $ImprovedNoise[];
        get amplitudes(): $DoubleList;
        get persistence(): number;
        get lacunarity(): number;
    }
    export interface $NormalNoise$NoiseParameters extends RegistryMarked<RegistryTypes.WorldgenNoiseTag, RegistryTypes.WorldgenNoise> {}
    /**
     * Generates a single octave of Perlin noise.
     */
    export class $ImprovedNoise implements $IPerlinNoiseSampler {
        noiseWithDerivative(x: number, arg1: number, y: number, arg3: number[]): number;
        noise(x: number, arg1: number, y: number): number;
        /**
         * @deprecated
         */
        noise(x: number, y: number, y: number, yScale: number, z: number): number;
        parityConfigString(builder: $StringBuilder): void;
        getPermutation(): number[];
        zo: number;
        yo: number;
        xo: number;
        constructor(random: $RandomSource);
        get permutation(): number[];
    }
    /**
     * This class generates multiple octaves of simplex noise. Each individual octave is an instance of `SimplexNoise`.
     * Mojang uses the term 'Perlin' to describe octaves or fBm (Fractal Brownian Motion) noise and this class does not actually generate Perlin noise.
     */
    export class $PerlinSimplexNoise {
        getValue(x: number, arg1: number, y: boolean): number;
        constructor(random: $RandomSource, octaves: $List_<number>);
    }
    export class $NormalNoise$NoiseParameters extends $Record {
        firstOctave(): number;
        amplitudes(): $DoubleList;
        static CODEC: $Codec<$Holder<$NormalNoise$NoiseParameters>>;
        static DIRECT_CODEC: $Codec<$NormalNoise$NoiseParameters>;
        constructor(firstOctave: number, amplitudes: $List_<number>);
        constructor(arg0: number, arg1: $DoubleList);
        constructor(firstOctave: number, amplitude: number, ...arg2: number[]);
    }
    /**
     * Values that may be interpreted as {@link $NormalNoise$NoiseParameters}.
     */
    export type $NormalNoise$NoiseParameters_ = RegistryTypes.WorldgenNoise | { amplitudes?: $DoubleList, firstOctave?: number,  } | [amplitudes?: $DoubleList, firstOctave?: number, ];
    export class $NoiseUtils {
        /**
         * Takes an input value and biases it using a sine function towards two larger magnitude values.
         */
        static biasTowardsExtreme(value: number, arg1: number): number;
        static parityNoiseOctaveConfigString(builder: $StringBuilder, xo: number, arg2: number, yo: number, arg4: number[]): void;
        static parityNoiseOctaveConfigString(builder: $StringBuilder, xo: number, arg2: number, yo: number, arg4: number[]): void;
        constructor();
    }
    /**
     * A generator for a single octave of Simplex noise.
     */
    export class $SimplexNoise implements $ISimplexNoiseSampler {
        getValue(x: number, arg1: number, y: number): number;
        getValue(x: number, arg1: number): number;
        getPermutation(): number[];
        zo: number;
        yo: number;
        xo: number;
        static GRADIENT: number[][];
        constructor(random: $RandomSource);
        get permutation(): number[];
    }
}
