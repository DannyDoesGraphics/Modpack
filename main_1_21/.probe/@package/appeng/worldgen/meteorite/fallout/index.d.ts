import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Holder_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $Enum } from "@package/java/lang";
import { $MeteoriteBlockPutter } from "@package/appeng/worldgen/meteorite";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/appeng/worldgen/meteorite/fallout" {
    export class $FalloutSand extends $FalloutCopy {
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $MeteoriteBlockPutter, arg3: $BlockState_, arg4: $RandomSource);
    }
    export class $FalloutMode extends $Enum<$FalloutMode> {
        static fromBiome(arg0: $Holder_<$Biome>): $FalloutMode;
        static values(): $FalloutMode[];
        static valueOf(arg0: string): $FalloutMode;
        matches(arg0: $Holder_<$Biome>): boolean;
        static ICE_SNOW: $FalloutMode;
        static SAND: $FalloutMode;
        static NONE: $FalloutMode;
        static DEFAULT: $FalloutMode;
        static TERRACOTTA: $FalloutMode;
    }
    /**
     * Values that may be interpreted as {@link $FalloutMode}.
     */
    export type $FalloutMode_ = "none" | "default" | "sand" | "terracotta" | "ice_snow";
    export class $FalloutCopy extends $Fallout {
        getOther(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: number): void;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $MeteoriteBlockPutter, arg3: $BlockState_, arg4: $RandomSource);
    }
    export class $Fallout {
        adjustCrater(): number;
        getRandomFall(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        getRandomInset(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        constructor(arg0: $MeteoriteBlockPutter, arg1: $BlockState_, arg2: $RandomSource);
    }
    export class $FalloutSnow extends $FalloutCopy {
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $MeteoriteBlockPutter, arg3: $BlockState_, arg4: $RandomSource);
    }
}
