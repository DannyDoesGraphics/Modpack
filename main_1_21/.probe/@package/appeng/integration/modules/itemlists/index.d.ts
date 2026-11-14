import { $GridInventoryEntry, $MEStorageMenu } from "@package/appeng/menu/me/common";
import { $BlockAndTintGetter, $ChunkPos, $ClipContext, $ClipBlockStateContext, $LightLayer_ } from "@package/net/minecraft/world/level";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeHolder_, $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $FakeSlot } from "@package/appeng/menu/slot";
import { $CraftingTermMenu, $PatternEncodingTermMenu, $CraftingTermMenu$MissingIngredientSlots_ } from "@package/appeng/menu/me/items";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Comparator, $List, $Map, $List_ } from "@package/java/util";
import { $GenericStack_, $AEKey } from "@package/appeng/api/stacks";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Predicate_, $Supplier_ } from "@package/java/util/function";
import { $BlockPos_, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record, $Object } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $Vec3_, $AABB_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $AEBaseScreen } from "@package/appeng/client/gui";

declare module "@package/appeng/integration/modules/itemlists" {
    export class $DropTargets {
        static getTargets(arg0: $AEBaseScreen<never>): $List<$DropTarget>;
    }
    export class $TransferHelper {
        static createEncodingTooltip(arg0: boolean, arg1: boolean): $List<$Component>;
        static createCraftingTooltip(arg0: $CraftingTermMenu$MissingIngredientSlots_, arg1: boolean, arg2: boolean): $List<$Component>;
        static BLUE_PLUS_BUTTON_COLOR: number;
        static ORANGE_PLUS_BUTTON_COLOR: number;
        static BLUE_SLOT_HIGHLIGHT_COLOR: number;
        static RED_SLOT_HIGHLIGHT_COLOR: number;
        constructor();
    }
    export class $CompatLayerHelper {
        static IS_LOADED: boolean;
        constructor();
    }
    export class $DropTargets$FakeSlotDropTarget extends $Record implements $DropTarget {
    }
    /**
     * Values that may be interpreted as {@link $DropTargets$FakeSlotDropTarget}.
     */
    export type $DropTargets$FakeSlotDropTarget_ = { slot?: $FakeSlot, area?: $Rect2i,  } | [slot?: $FakeSlot, area?: $Rect2i, ];
    export class $FluidBlockRendering$FakeWorld implements $BlockAndTintGetter {
        canSeeSky(arg0: $BlockPos_): boolean;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getBrightness(arg0: $LightLayer_, arg1: $BlockPos_): number;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getMaxLightLevel(): number;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        getLightEmission(arg0: $BlockPos_): number;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        clip(arg0: $ClipContext): $BlockHitResult;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
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
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
    export class $EncodingHelper {
        static encodeCraftingRecipe(arg0: $PatternEncodingTermMenu, arg1: $RecipeHolder_<never>, arg2: $List_<$List_<$GenericStack_>>, arg3: $Predicate_<$ItemStack>): void;
        static encodeProcessingRecipe(arg0: $PatternEncodingTermMenu, arg1: $List_<$List_<$GenericStack_>>, arg2: $List_<$GenericStack_>): void;
        static isSupportedCraftingRecipe(arg0: $Recipe<never>): boolean;
        static getIngredientPriorities(arg0: $MEStorageMenu, arg1: $Comparator<$GridInventoryEntry>): $Map<$AEKey, number>;
    }
    export class $FluidBlockRendering {
        static renderInFancy(arg0: $GuiGraphics, arg1: $Fluid_, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static render(arg0: $GuiGraphics, arg1: $Fluid_, arg2: number, arg3: number, arg4: number, arg5: number): void;
    }
    export class $ItemPredicates {
        static shouldBeHidden(arg0: $ItemStack_): boolean;
    }
    export class $CraftingHelper {
        static performTransfer(arg0: $CraftingTermMenu, arg1: $ResourceLocation_, arg2: $Recipe<never>, arg3: boolean): void;
    }
    export class $DropTarget {
    }
    export interface $DropTarget {
        canDrop(arg0: $GenericStack_): boolean;
        area(): $Rect2i;
        drop(arg0: $GenericStack_): boolean;
    }
}
