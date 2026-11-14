import { $ChunkPos, $ClipContext, $BlockGetter, $ClipBlockStateContext } from "@package/net/minecraft/world/level";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $KeyMapping } from "@package/net/minecraft/client";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos_, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Object } from "@package/java/lang";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $Vec3_, $AABB_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as neoforge from "@package/com/railwayteam/railways/util/client/neoforge";

declare module "@package/com/railwayteam/railways/util/client" {
    export class $ShutdownWatchdog {
        static arm(): void;
    }
    export class $OcclusionTestLevel implements $BlockGetter {
        clear(): void;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        getFluidState(arg0: $BlockPos_): $FluidState;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_): void;
        getMinBuildHeight(): number;
        getHeight(): number;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getMaxLightLevel(): number;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        getLightEmission(arg0: $BlockPos_): number;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        clip(arg0: $ClipContext): $BlockHitResult;
        getMaxBuildHeight(): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getMinSection(): number;
        isOutsideBuildHeight(arg0: number): boolean;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        getSectionIndex(arg0: number): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getModelData(arg0: $BlockPos_): $ModelData;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        constructor(arg0: $BlockGetter);
        get minBuildHeight(): number;
        get height(): number;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
    export class $ClientUtils {
        static isActiveAndMatches(arg0: $KeyMapping, arg1: $InputConstants$Key): boolean;
        constructor();
    }
    export class $ClientTextUtils {
        static renderDebugText(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: boolean, arg5: string): void;
        static renderMultilineDebugText(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: boolean, ...arg5: string[]): void;
        static getComponentWithWidthCutoff(arg0: $Component_, arg1: number): $Component;
        constructor();
    }
}
