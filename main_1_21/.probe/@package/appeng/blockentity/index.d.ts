import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $BlockOrientation } from "@package/appeng/api/orientation";
import { $IGridNode } from "@package/appeng/api/networking";
import { $SettingsFrom_, $IDebugExportable } from "@package/appeng/util";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List_ } from "@package/java/util";
import { $ISegmentedInventory, $InternalInventory } from "@package/appeng/api/inventories";
import { $InteractionResult, $Nameable, $Clearable } from "@package/net/minecraft/world";
import { $Reference2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderLookup$Provider, $BlockPos_, $Direction_, $GlobalPos, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $InternalInventoryHost, $AppEngInternalInventory } from "@package/appeng/util/inv";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $DataComponentMap_, $DataComponentMap, $DataComponentMap$Builder } from "@package/net/minecraft/core/component";
import { $Object } from "@package/java/lang";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $JsonWriter } from "@package/com/google/gson/stream";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as grid from "@package/appeng/blockentity/grid";
export * as storage from "@package/appeng/blockentity/storage";
export * as misc from "@package/appeng/blockentity/misc";
export * as crafting from "@package/appeng/blockentity/crafting";
export * as spatial from "@package/appeng/blockentity/spatial";
export * as networking from "@package/appeng/blockentity/networking";
export * as qnb from "@package/appeng/blockentity/qnb";
export * as powersink from "@package/appeng/blockentity/powersink";
export * as inventory from "@package/appeng/blockentity/inventory";

declare module "@package/appeng/blockentity" {
    export class $ServerTickingBlockEntity {
    }
    export interface $ServerTickingBlockEntity {
        serverTick(): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerTickingBlockEntity}.
     */
    export type $ServerTickingBlockEntity_ = (() => void);
    export class $AEBaseBlockEntity extends $BlockEntity implements $Nameable, $ISegmentedInventory, $Clearable, $IDebugExportable {
        loadAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        clearContent(): void;
        saveAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getOrientation(): $BlockOrientation;
        exportSettings(arg0: $SettingsFrom_, arg1: $DataComponentMap$Builder, arg2: $Player): void;
        exportSettings(arg0: $SettingsFrom_, arg1: $Player): $DataComponentMap;
        importSettings(arg0: $SettingsFrom_, arg1: $DataComponentMap_, arg2: $Player): void;
        markForUpdate(): void;
        getSubInventory(arg0: $ResourceLocation_): $InternalInventory;
        debugExport(arg0: $JsonWriter, arg1: $HolderLookup$Provider, arg2: $Reference2IntMap<$Object>, arg3: $Reference2IntMap<$IGridNode>): void;
        addAdditionalDrops(arg0: $Level_, arg1: $BlockPos_, arg2: $List_<$ItemStack_>): void;
        getQueuedForReady(): number;
        getReadyInvoked(): number;
        saveChanges(): void;
        onReady(): void;
        loadTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        notLoaded(): boolean;
        getTop(): $Direction;
        static registerBlockEntityItem(arg0: $BlockEntityType_<never>, arg1: $Item_): void;
        getGlobalPos(): $GlobalPos;
        markForClientUpdate(): void;
        getFront(): $Direction;
        disassembleWithWrench(arg0: $Player, arg1: $Level_, arg2: $BlockHitResult, arg3: $ItemStack_): $InteractionResult;
        getName(): $Component;
        setName(arg0: string): void;
        getBlockEntity(): $BlockEntity;
        isClientSide(): boolean;
        getCustomName(): $Component;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get orientation(): $BlockOrientation;
        get queuedForReady(): number;
        get readyInvoked(): number;
        get top(): $Direction;
        get globalPos(): $GlobalPos;
        get front(): $Direction;
        get blockEntity(): $BlockEntity;
        get clientSide(): boolean;
        get customName(): $Component;
        get displayName(): $Component;
    }
    export class $AEBaseInvBlockEntity extends $AEBaseBlockEntity implements $InternalInventoryHost {
        saveChangedInventory(arg0: $AppEngInternalInventory): void;
        getExposedItemHandler(arg0: $Direction_): $IItemHandler;
        getInternalInventory(): $InternalInventory;
        onChangeInventory(arg0: $AppEngInternalInventory, arg1: number): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get internalInventory(): $InternalInventory;
    }
    export class $CommonTickingBlockEntity {
    }
    export interface $CommonTickingBlockEntity extends $ServerTickingBlockEntity, $ClientTickingBlockEntity {
        serverTick(): void;
        commonTick(): void;
        clientTick(): void;
    }
    /**
     * Values that may be interpreted as {@link $CommonTickingBlockEntity}.
     */
    export type $CommonTickingBlockEntity_ = (() => void);
    export class $ClientTickingBlockEntity {
    }
    export interface $ClientTickingBlockEntity {
        clientTick(): void;
    }
    /**
     * Values that may be interpreted as {@link $ClientTickingBlockEntity}.
     */
    export type $ClientTickingBlockEntity_ = (() => void);
}
