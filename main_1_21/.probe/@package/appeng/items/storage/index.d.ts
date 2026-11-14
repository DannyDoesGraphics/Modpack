import { $Codec } from "@package/com/mojang/serialization";
import { $ConfigInventory } from "@package/appeng/util";
import { $List, $Map, $Collection_, $List_ } from "@package/java/util";
import { $AEKeyType, $GenericStack, $AEKeyType_, $GenericStack_, $AEKey } from "@package/appeng/api/stacks";
import { $AEToolItem } from "@package/appeng/hooks";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Item$Properties, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $FuzzyMode_, $FuzzyMode } from "@package/appeng/api/config";
import { $IUpgradeInventory } from "@package/appeng/api/upgrades";
import { $ISpatialStorageCell } from "@package/appeng/api/implementations/items";
import { $AEBaseItem } from "@package/appeng/items";
import { $AEKeyFilter_ } from "@package/appeng/api/storage";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $IPartitionList } from "@package/appeng/util/prioritylist";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $IBasicCellItem, $ICellWorkbenchItem } from "@package/appeng/api/storage/cells";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/items/storage" {
    export class $StorageTier extends $Record {
        idleDrain(): number;
        componentSupplier(): $Supplier<$Item>;
        namePrefix(): string;
        index(): number;
        bytes(): number;
        static SIZE_256K: $StorageTier;
        static SIZE_1K: $StorageTier;
        static SIZE_4K: $StorageTier;
        static SIZE_64K: $StorageTier;
        static SIZE_16K: $StorageTier;
        constructor(index: number, namePrefix: string, bytes: number, idleDrain: number, componentSupplier: $Supplier_<$Item>);
    }
    /**
     * Values that may be interpreted as {@link $StorageTier}.
     */
    export type $StorageTier_ = { bytes?: number, componentSupplier?: $Supplier_<$Item>, namePrefix?: string, index?: number, idleDrain?: number,  } | [bytes?: number, componentSupplier?: $Supplier_<$Item>, namePrefix?: string, index?: number, idleDrain?: number, ];
    export class $SpatialStorageCellItem extends $AEBaseItem implements $ISpatialStorageCell {
        getMaxStoredDim(arg0: $ItemStack_): number;
        getAllocatedPlotId(arg0: $ItemStack_): number;
        setStoredDimension(arg0: $ItemStack_, arg1: number, arg2: $BlockPos_): void;
        isSpatialStorage(arg0: $ItemStack_): boolean;
        doSpatialTransition(arg0: $ItemStack_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $BlockPos_, arg4: number): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: number);
    }
    export class $SpatialPlotInfo extends $Record {
        size(): $BlockPos;
        id(): number;
        static CODEC: $Codec<$SpatialPlotInfo>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $SpatialPlotInfo>;
        constructor(id: number, size: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $SpatialPlotInfo}.
     */
    export type $SpatialPlotInfo_ = { id?: number, size?: $BlockPos_,  } | [id?: number, size?: $BlockPos_, ];
    export class $CreativeCellItem extends $AEBaseItem implements $ICellWorkbenchItem {
        getConfigInventory(arg0: $ItemStack_): $ConfigInventory;
        getFuzzyMode(arg0: $ItemStack_): $FuzzyMode;
        setFuzzyMode(arg0: $ItemStack_, arg1: $FuzzyMode_): void;
        static ofItems(...arg0: $ItemLike_[]): $ItemStack;
        static ofFluids(...arg0: $Fluid_[]): $ItemStack;
        isEditable(arg0: $ItemStack_): boolean;
        getUpgrades(arg0: $ItemStack_): $IUpgradeInventory;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $BasicStorageCell extends $AEBaseItem implements $IBasicCellItem, $AEToolItem {
        getBytesPerType(arg0: $ItemStack_): number;
        getTotalTypes(arg0: $ItemStack_): number;
        getIdleDrain(): number;
        getConfigInventory(arg0: $ItemStack_): $ConfigInventory;
        getFuzzyMode(arg0: $ItemStack_): $FuzzyMode;
        setFuzzyMode(arg0: $ItemStack_, arg1: $FuzzyMode_): void;
        getUpgrades(arg0: $ItemStack_): $IUpgradeInventory;
        getBytes(arg0: $ItemStack_): number;
        static getColor(arg0: $ItemStack_, arg1: number): number;
        getKeyType(): $AEKeyType;
        addCellInformationToTooltip(arg0: $ItemStack_, arg1: $List_<$Component_>): void;
        getCellTooltipImage(arg0: $ItemStack_): ($TooltipComponent) | undefined;
        isBlackListed(arg0: $ItemStack_, arg1: $AEKey): boolean;
        storableInStorageCell(): boolean;
        isStorageCell(arg0: $ItemStack_): boolean;
        isEditable(arg0: $ItemStack_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $AEKeyType_);
        get idleDrain(): number;
        get keyType(): $AEKeyType;
    }
    export class $StorageCellTooltipComponent extends $Record implements $TooltipComponent {
        hasMoreContent(): boolean;
        showAmounts(): boolean;
        upgrades(): $List<$ItemStack>;
        content(): $List<$GenericStack>;
        constructor(upgrades: $List_<$ItemStack_>, content: $List_<$GenericStack_>, hasMoreContent: boolean, showAmounts: boolean);
    }
    /**
     * Values that may be interpreted as {@link $StorageCellTooltipComponent}.
     */
    export type $StorageCellTooltipComponent_ = { hasMoreContent?: boolean, content?: $List_<$GenericStack_>, upgrades?: $List_<$ItemStack_>, showAmounts?: boolean,  } | [hasMoreContent?: boolean, content?: $List_<$GenericStack_>, upgrades?: $List_<$ItemStack_>, showAmounts?: boolean, ];
    export class $ViewCellItem extends $AEBaseItem implements $ICellWorkbenchItem {
        getConfigInventory(arg0: $ItemStack_): $ConfigInventory;
        getFuzzyMode(arg0: $ItemStack_): $FuzzyMode;
        setFuzzyMode(arg0: $ItemStack_, arg1: $FuzzyMode_): void;
        static createItemFilter(arg0: $Collection_<$ItemStack_>): $IPartitionList;
        getUpgrades(arg0: $ItemStack_): $IUpgradeInventory;
        static createFilter(arg0: $AEKeyFilter_, arg1: $Collection_<$ItemStack_>): $IPartitionList;
        isEditable(arg0: $ItemStack_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
}
