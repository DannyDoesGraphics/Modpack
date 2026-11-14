import { $LevelSimulatedReader } from "@package/net/minecraft/world/level";
import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $BiConsumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $HolderSet_ } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $IntProvider_, $UniformInt } from "@package/net/minecraft/util/valueproviders";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $FoliagePlacer$FoliageAttachment } from "@package/net/minecraft/world/level/levelgen/feature/foliageplacers";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $List } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/levelgen/feature/trunkplacers" {
    export class $ForkingTrunkPlacer extends $TrunkPlacer {
        static CODEC: $MapCodec<$ForkingTrunkPlacer>;
        static MAX_HEIGHT: number;
        constructor(baseHeight: number, heightRandA: number, heightRandB: number);
    }
    export class $TrunkPlacerType<P extends $TrunkPlacer> {
        codec(): $MapCodec<P>;
        static GIANT_TRUNK_PLACER: $TrunkPlacerType<$GiantTrunkPlacer>;
        static BENDING_TRUNK_PLACER: $TrunkPlacerType<$BendingTrunkPlacer>;
        static UPWARDS_BRANCHING_TRUNK_PLACER: $TrunkPlacerType<$UpwardsBranchingTrunkPlacer>;
        static DARK_OAK_TRUNK_PLACER: $TrunkPlacerType<$DarkOakTrunkPlacer>;
        static FANCY_TRUNK_PLACER: $TrunkPlacerType<$FancyTrunkPlacer>;
        static CHERRY_TRUNK_PLACER: $TrunkPlacerType<$CherryTrunkPlacer>;
        static STRAIGHT_TRUNK_PLACER: $TrunkPlacerType<$StraightTrunkPlacer>;
        static FORKING_TRUNK_PLACER: $TrunkPlacerType<$ForkingTrunkPlacer>;
        static MEGA_JUNGLE_TRUNK_PLACER: $TrunkPlacerType<$MegaJungleTrunkPlacer>;
        constructor(codec: $MapCodec_<P>);
    }
    /**
     * Values that may be interpreted as {@link $TrunkPlacerType}.
     */
    export type $TrunkPlacerType_<P> = RegistryTypes.WorldgenTrunkPlacerType;
    export class $BendingTrunkPlacer extends $TrunkPlacer {
        static CODEC: $MapCodec<$BendingTrunkPlacer>;
        static MAX_HEIGHT: number;
        constructor(baseHeight: number, heightRandA: number, heightRandB: number, minHeightForLeaves: number, bendLength: $IntProvider_);
    }
    export class $CherryTrunkPlacer extends $TrunkPlacer {
        static CODEC: $MapCodec<$CherryTrunkPlacer>;
        static MAX_HEIGHT: number;
        constructor(baseHeight: number, heightRandA: number, heightRandB: number, branchCount: $IntProvider_, branchHorizontalLength: $IntProvider_, branchStartOffsetFromTop: $UniformInt, branchEndOffsetFromTop: $IntProvider_);
    }
    export class $FancyTrunkPlacer$FoliageCoords {
    }
    export class $UpwardsBranchingTrunkPlacer extends $TrunkPlacer {
        static CODEC: $MapCodec<$UpwardsBranchingTrunkPlacer>;
        static MAX_HEIGHT: number;
        constructor(baseHeight: number, heightRandA: number, heightRandB: number, extraBranchSteps: $IntProvider_, placeBranchPerLogProbability: number, extraBranchLength: $IntProvider_, canGrowThrough: $HolderSet_<$Block>);
    }
    export class $DarkOakTrunkPlacer extends $TrunkPlacer {
        static CODEC: $MapCodec<$DarkOakTrunkPlacer>;
        static MAX_HEIGHT: number;
        constructor(baseHeight: number, heightRandA: number, heightRandB: number);
    }
    export class $FancyTrunkPlacer extends $TrunkPlacer {
        static CODEC: $MapCodec<$FancyTrunkPlacer>;
        static MAX_HEIGHT: number;
        constructor(baseHeight: number, heightRandA: number, heightRandB: number);
    }
    export class $GiantTrunkPlacer extends $TrunkPlacer {
        static CODEC: $MapCodec<$GiantTrunkPlacer>;
        static MAX_HEIGHT: number;
        constructor(baseHeight: number, heightRandA: number, heightRandB: number);
    }
    export class $MegaJungleTrunkPlacer extends $GiantTrunkPlacer {
        static CODEC: $MapCodec<$MegaJungleTrunkPlacer>;
        static MAX_HEIGHT: number;
        constructor(baseHeight: number, heightRandA: number, heightRandB: number);
    }
    export class $TrunkPlacer {
        placeTrunk(level: $LevelSimulatedReader, blockSetter: $BiConsumer_<$BlockPos, $BlockState>, random: $RandomSource, freeTreeHeight: number, pos: $BlockPos_, config: $TreeConfiguration): $List<$FoliagePlacer$FoliageAttachment>;
        getTreeHeight(random: $RandomSource): number;
        isFree(level: $LevelSimulatedReader, pos: $BlockPos_): boolean;
        static CODEC: $Codec<$TrunkPlacer>;
        static MAX_HEIGHT: number;
        constructor(baseHeight: number, heightRandA: number, heightRandB: number);
    }
    export interface $TrunkPlacerType<P> extends RegistryMarked<RegistryTypes.WorldgenTrunkPlacerTypeTag, RegistryTypes.WorldgenTrunkPlacerType> {}
    export class $StraightTrunkPlacer extends $TrunkPlacer {
        static CODEC: $MapCodec<$StraightTrunkPlacer>;
        static MAX_HEIGHT: number;
        constructor(baseHeight: number, heightRandA: number, heightRandB: number);
    }
}
