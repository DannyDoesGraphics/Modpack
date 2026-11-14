import { $LevelSimulatedReader } from "@package/net/minecraft/world/level";
import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $IntProvider_ } from "@package/net/minecraft/util/valueproviders";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/levelgen/feature/foliageplacers" {
    export interface $FoliagePlacerType<P> extends RegistryMarked<RegistryTypes.WorldgenFoliagePlacerTypeTag, RegistryTypes.WorldgenFoliagePlacerType> {}
    export class $FoliagePlacer {
        createFoliage(level: $LevelSimulatedReader, blockSetter: $FoliagePlacer$FoliageSetter, random: $RandomSource, config: $TreeConfiguration, maxFreeTreeHeight: number, attachment: $FoliagePlacer$FoliageAttachment, foliageHeight: number, foliageRadius: number): void;
        foliageHeight(random: $RandomSource, height: number, config: $TreeConfiguration): number;
        foliageRadius(random: $RandomSource, radius: number): number;
        static CODEC: $Codec<$FoliagePlacer>;
        constructor(radius: $IntProvider_, offset: $IntProvider_);
    }
    export class $FoliagePlacer$FoliageAttachment {
        radiusOffset(): number;
        doubleTrunk(): boolean;
        pos(): $BlockPos;
        constructor(pos: $BlockPos_, radiusOffset: number, doubleTrunk: boolean);
    }
    export class $FancyFoliagePlacer extends $BlobFoliagePlacer {
        static CODEC: $MapCodec<$FancyFoliagePlacer>;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_, arg2: number);
    }
    export class $RandomSpreadFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$RandomSpreadFoliagePlacer>;
        constructor(radius: $IntProvider_, offset: $IntProvider_, foliageHeight: $IntProvider_, leafPlacementAttempts: number);
    }
    export class $PineFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$PineFoliagePlacer>;
        constructor(radius: $IntProvider_, offset: $IntProvider_, height: $IntProvider_);
    }
    export class $FoliagePlacerType<P extends $FoliagePlacer> {
        codec(): $MapCodec<P>;
        static MEGA_PINE_FOLIAGE_PLACER: $FoliagePlacerType<$MegaPineFoliagePlacer>;
        static PINE_FOLIAGE_PLACER: $FoliagePlacerType<$PineFoliagePlacer>;
        static RANDOM_SPREAD_FOLIAGE_PLACER: $FoliagePlacerType<$RandomSpreadFoliagePlacer>;
        static MEGA_JUNGLE_FOLIAGE_PLACER: $FoliagePlacerType<$MegaJungleFoliagePlacer>;
        static SPRUCE_FOLIAGE_PLACER: $FoliagePlacerType<$SpruceFoliagePlacer>;
        static BUSH_FOLIAGE_PLACER: $FoliagePlacerType<$BushFoliagePlacer>;
        static ACACIA_FOLIAGE_PLACER: $FoliagePlacerType<$AcaciaFoliagePlacer>;
        static BLOB_FOLIAGE_PLACER: $FoliagePlacerType<$BlobFoliagePlacer>;
        static DARK_OAK_FOLIAGE_PLACER: $FoliagePlacerType<$DarkOakFoliagePlacer>;
        static CHERRY_FOLIAGE_PLACER: $FoliagePlacerType<$CherryFoliagePlacer>;
        static FANCY_FOLIAGE_PLACER: $FoliagePlacerType<$FancyFoliagePlacer>;
        constructor(codec: $MapCodec_<P>);
    }
    /**
     * Values that may be interpreted as {@link $FoliagePlacerType}.
     */
    export type $FoliagePlacerType_<P> = RegistryTypes.WorldgenFoliagePlacerType;
    export class $MegaPineFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$MegaPineFoliagePlacer>;
        constructor(radius: $IntProvider_, offset: $IntProvider_, crownHeight: $IntProvider_);
    }
    export class $DarkOakFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$DarkOakFoliagePlacer>;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_);
    }
    export class $BushFoliagePlacer extends $BlobFoliagePlacer {
        static CODEC: $MapCodec<$BushFoliagePlacer>;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_, arg2: number);
    }
    export class $BlobFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$BlobFoliagePlacer>;
        constructor(radius: $IntProvider_, offset: $IntProvider_, height: number);
    }
    export class $SpruceFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$SpruceFoliagePlacer>;
        constructor(radius: $IntProvider_, offset: $IntProvider_, trunkHeight: $IntProvider_);
    }
    export class $CherryFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$CherryFoliagePlacer>;
        constructor(radius: $IntProvider_, offset: $IntProvider_, height: $IntProvider_, wideBottomLayerHoleChance: number, cornerHoleChance: number, hangingLeavesChance: number, hangingLeavesExtensionChance: number);
    }
    export class $MegaJungleFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$MegaJungleFoliagePlacer>;
        constructor(radius: $IntProvider_, offset: $IntProvider_, height: number);
    }
    export class $AcaciaFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$AcaciaFoliagePlacer>;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_);
    }
    export class $FoliagePlacer$FoliageSetter {
    }
    export interface $FoliagePlacer$FoliageSetter {
        set(pos: $BlockPos_, state: $BlockState_): void;
        isSet(pos: $BlockPos_): boolean;
    }
}
