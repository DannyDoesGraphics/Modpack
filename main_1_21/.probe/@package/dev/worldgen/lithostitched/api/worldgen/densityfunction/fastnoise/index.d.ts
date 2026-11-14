import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";

declare module "@package/dev/worldgen/lithostitched/api/worldgen/densityfunction/fastnoise" {
    export class $FastNoiseConfig {
        frequency(): number;
        bind(seed: number): void;
        getCodec(): $MapCodec<$FastNoiseConfig>;
        salt(): number;
        sample(x: number, y: number, z: number): number;
        static CODEC: $Codec<$FastNoiseConfig>;
        get codec(): $MapCodec<$FastNoiseConfig>;
    }
    /**
     * Values that may be interpreted as {@link $FastNoiseConfig}.
     */
    export type $FastNoiseConfig_ = RegistryTypes.LithostitchedFastNoiseConfig;
    export interface $FastNoiseConfig extends RegistryMarked<RegistryTypes.LithostitchedFastNoiseConfigTag, RegistryTypes.LithostitchedFastNoiseConfig> {}
}
