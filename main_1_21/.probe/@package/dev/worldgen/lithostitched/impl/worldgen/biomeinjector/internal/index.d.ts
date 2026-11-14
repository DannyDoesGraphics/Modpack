import { $DensityFunctionWrapper } from "@package/dev/worldgen/lithostitched/api/worldgen/util";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $Climate$TargetPoint_ } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $HashMap, $Map_ } from "@package/java/util";
import { $BiomeInjector$ClimateParameter_ } from "@package/dev/worldgen/lithostitched/api/worldgen/biomeinjector";
import { $DensityFunction_, $DensityFunction$FunctionContext } from "@package/net/minecraft/world/level/levelgen";
import { $Region } from "@package/dev/worldgen/lithostitched/impl/worldgen/biomeinjector/region";
import { $InclusiveRange_ } from "@package/net/minecraft/util";

declare module "@package/dev/worldgen/lithostitched/impl/worldgen/biomeinjector/internal" {
    export class $ParameterMap {
        mapAll(noiseHelper: $DensityFunctionWrapper): void;
        matches(context: $DensityFunction$FunctionContext, point: $Climate$TargetPoint_, densities: $HashMap<$DensityFunction_, number>, currentRegion: $ResourceKey_<$Region>): boolean;
        static CODEC: $MapCodec<$ParameterMap>;
        constructor(parameters: $Map_<$Either<$BiomeInjector$ClimateParameter_, $DensityFunction_>, $InclusiveRange_<number>>, region: ($ResourceKey_<$Region>) | undefined);
    }
}
