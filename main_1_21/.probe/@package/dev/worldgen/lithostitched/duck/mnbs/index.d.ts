import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $Climate$ParameterList, $MultiNoiseBiomeSourceParameterList, $Biome } from "@package/net/minecraft/world/level/biome";

declare module "@package/dev/worldgen/lithostitched/duck/mnbs" {
    export class $MNBSDuck {
    }
    export interface $MNBSDuck {
        lithostitched$getEntries(): $Either<$Climate$ParameterList<$Holder<$Biome>>, $Holder<$MultiNoiseBiomeSourceParameterList>>;
        lithostitched$setEntries(either: $Either<$Climate$ParameterList<$Holder_<$Biome>>, $Holder_<$MultiNoiseBiomeSourceParameterList>>): void;
    }
    export class $MNBSPLDuck {
    }
    export interface $MNBSPLDuck {
        lithostitched$getMigrationBiome(): ($Holder<$Biome>) | undefined;
        lithostitched$setParameters(parameterList: $Climate$ParameterList<$Holder_<$Biome>>): void;
        lithostitched$setMigrationBiome(optional: ($Holder_<$Biome>) | undefined): void;
    }
}
