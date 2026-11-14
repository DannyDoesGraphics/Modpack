import { $LevelSimulatedReader } from "@package/net/minecraft/world/level";
import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $BiConsumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $HolderSet, $HolderSet_ } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $IntProvider_ } from "@package/net/minecraft/util/valueproviders";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockStateProvider } from "@package/net/minecraft/world/level/levelgen/feature/stateproviders";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/levelgen/feature/rootplacers" {
    export class $RootPlacer {
        placeRoots(level: $LevelSimulatedReader, blockSetter: $BiConsumer_<$BlockPos, $BlockState>, random: $RandomSource, pos: $BlockPos_, trunkOrigin: $BlockPos_, treeConfig: $TreeConfiguration): boolean;
        getTrunkOrigin(pos: $BlockPos_, random: $RandomSource): $BlockPos;
        static CODEC: $Codec<$RootPlacer>;
        constructor(trunkOffset: $IntProvider_, rootProvider: $BlockStateProvider, aboveRootPlacement: ($AboveRootPlacement_) | undefined);
    }
    export class $AboveRootPlacement extends $Record {
        aboveRootPlacementChance(): number;
        aboveRootProvider(): $BlockStateProvider;
        static CODEC: $Codec<$AboveRootPlacement>;
        constructor(arg0: $BlockStateProvider, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $AboveRootPlacement}.
     */
    export type $AboveRootPlacement_ = { aboveRootProvider?: $BlockStateProvider, aboveRootPlacementChance?: number,  } | [aboveRootProvider?: $BlockStateProvider, aboveRootPlacementChance?: number, ];
    export interface $RootPlacerType<P> extends RegistryMarked<RegistryTypes.WorldgenRootPlacerTypeTag, RegistryTypes.WorldgenRootPlacerType> {}
    export class $MangroveRootPlacement extends $Record {
        canGrowThrough(): $HolderSet<$Block>;
        maxRootLength(): number;
        maxRootWidth(): number;
        randomSkewChance(): number;
        muddyRootsProvider(): $BlockStateProvider;
        muddyRootsIn(): $HolderSet<$Block>;
        static CODEC: $Codec<$MangroveRootPlacement>;
        constructor(arg0: $HolderSet_<$Block>, arg1: $HolderSet_<$Block>, arg2: $BlockStateProvider, arg3: number, arg4: number, arg5: number);
    }
    /**
     * Values that may be interpreted as {@link $MangroveRootPlacement}.
     */
    export type $MangroveRootPlacement_ = { randomSkewChance?: number, maxRootWidth?: number, maxRootLength?: number, canGrowThrough?: $HolderSet_<$Block>, muddyRootsIn?: $HolderSet_<$Block>, muddyRootsProvider?: $BlockStateProvider,  } | [randomSkewChance?: number, maxRootWidth?: number, maxRootLength?: number, canGrowThrough?: $HolderSet_<$Block>, muddyRootsIn?: $HolderSet_<$Block>, muddyRootsProvider?: $BlockStateProvider, ];
    export class $MangroveRootPlacer extends $RootPlacer {
        static CODEC: $MapCodec<$MangroveRootPlacer>;
        static ROOT_WIDTH_LIMIT: number;
        static ROOT_LENGTH_LIMIT: number;
        constructor(trunkOffset: $IntProvider_, rootProvider: $BlockStateProvider, aboveRootPlacement: ($AboveRootPlacement_) | undefined, mangroveRootPlacement: $MangroveRootPlacement_);
    }
    export class $RootPlacerType<P extends $RootPlacer> {
        codec(): $MapCodec<P>;
        static MANGROVE_ROOT_PLACER: $RootPlacerType<$MangroveRootPlacer>;
        constructor(codec: $MapCodec_<P>);
    }
    /**
     * Values that may be interpreted as {@link $RootPlacerType}.
     */
    export type $RootPlacerType_<P> = RegistryTypes.WorldgenRootPlacerType;
}
