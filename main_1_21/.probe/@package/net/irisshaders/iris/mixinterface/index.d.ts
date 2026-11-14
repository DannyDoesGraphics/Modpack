import { $MethodHandle } from "@package/java/lang/invoke";
import { $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";

declare module "@package/net/irisshaders/iris/mixinterface" {
    export class $ShaderInstanceInterface {
    }
    export interface $ShaderInstanceInterface {
        setShouldSkip(arg0: $MethodHandle): void;
        iris$createExtraShaders(arg0: $ResourceProvider_, arg1: string): void;
        set shouldSkip(value: $MethodHandle);
    }
    export class $ShadowRenderRegion {
    }
    export interface $ShadowRenderRegion {
        swapToRegularRenderList(): void;
        swapToShadowRenderList(): void;
        iris$forceClearAllBatches(): void;
    }
    export class $ItemInHandInterface {
    }
    export interface $ItemInHandInterface {
        iris$isAnyHandTranslucent(): boolean;
        iris$isAnyHandSolid(): boolean;
    }
    export class $ExtendedBiome {
    }
    export interface $ExtendedBiome {
        getBiomeCategory(): number;
        setBiomeCategory(arg0: number): void;
        getDownfall(): number;
        get downfall(): number;
    }
    export class $BiomeAmbienceInterface {
    }
    export interface $BiomeAmbienceInterface {
        getConstantMood(): number;
        get constantMood(): number;
    }
    /**
     * Values that may be interpreted as {@link $BiomeAmbienceInterface}.
     */
    export type $BiomeAmbienceInterface_ = (() => number);
    export class $LocalPlayerInterface {
    }
    export interface $LocalPlayerInterface {
        getCurrentConstantMood(): number;
        get currentConstantMood(): number;
    }
    /**
     * Values that may be interpreted as {@link $LocalPlayerInterface}.
     */
    export type $LocalPlayerInterface_ = (() => number);
}
