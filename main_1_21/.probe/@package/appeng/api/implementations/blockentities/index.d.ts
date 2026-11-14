import { $IEnergySource } from "@package/appeng/api/networking/energy";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $Item } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IGrid } from "@package/appeng/api/networking";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $List_ } from "@package/java/util";
import { $IActionHost } from "@package/appeng/api/networking/security";
import { $KeyCounter, $AEItemKey } from "@package/appeng/api/stacks";
import { $InternalInventory } from "@package/appeng/api/inventories";
import { $AEColor_, $AEColor, $DimensionalBlockPos } from "@package/appeng/api/util";
import { $MEStorage } from "@package/appeng/api/storage";
import { $IPatternDetails } from "@package/appeng/api/crafting";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $CellState, $StorageCell } from "@package/appeng/api/storage/cells";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/appeng/api/implementations/blockentities" {
    export class $IWirelessAccessPoint {
    }
    export interface $IWirelessAccessPoint extends $IActionHost {
        getGrid(): $IGrid;
        getRange(): number;
        getLocation(): $DimensionalBlockPos;
        isActive(): boolean;
        get grid(): $IGrid;
        get range(): number;
        get location(): $DimensionalBlockPos;
        get active(): boolean;
    }
    export class $IMEChest {
    }
    export interface $IMEChest extends $IChestOrDrive, $IEnergySource {
    }
    export class $IViewCellStorage {
    }
    export interface $IViewCellStorage {
        getViewCellStorage(): $InternalInventory;
        get viewCellStorage(): $InternalInventory;
    }
    /**
     * Values that may be interpreted as {@link $IViewCellStorage}.
     */
    export type $IViewCellStorage_ = (() => $InternalInventory);
    export class $PatternContainerGroup extends $Record {
        writeToPacket(arg0: $RegistryFriendlyByteBuf): void;
        static readFromPacket(arg0: $RegistryFriendlyByteBuf): $PatternContainerGroup;
        static fromMachine(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): $PatternContainerGroup;
        static nothing(): $PatternContainerGroup;
        name(): $Component;
        icon(): $AEItemKey;
        tooltip(): $List<$Component>;
        constructor(icon: $AEItemKey, name: $Component_, tooltip: $List_<$Component_>);
    }
    /**
     * Values that may be interpreted as {@link $PatternContainerGroup}.
     */
    export type $PatternContainerGroup_ = { tooltip?: $List_<$Component_>, icon?: $AEItemKey, name?: $Component_,  } | [tooltip?: $List_<$Component_>, icon?: $AEItemKey, name?: $Component_, ];
    export class $ICraftingMachine {
        static of(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): $ICraftingMachine;
        static of(arg0: $BlockEntity, arg1: $Direction_): $ICraftingMachine;
    }
    export interface $ICraftingMachine {
        pushPattern(arg0: $IPatternDetails, arg1: $KeyCounter[], arg2: $Direction_): boolean;
        acceptsPlans(): boolean;
        getCraftingMachineInfo(): $PatternContainerGroup;
        get craftingMachineInfo(): $PatternContainerGroup;
    }
    export class $IChestOrDrive {
    }
    export interface $IChestOrDrive extends $IActionHost {
        isPowered(): boolean;
        getCellInventory(arg0: number): $MEStorage;
        getCellCount(): number;
        getCellStatus(arg0: number): $CellState;
        getCellItem(arg0: number): $Item;
        getOriginalCellInventory(arg0: number): $StorageCell;
        isCellBlinking(arg0: number): boolean;
        get powered(): boolean;
        get cellCount(): number;
    }
    export class $IColorableBlockEntity {
    }
    export interface $IColorableBlockEntity {
        recolourBlock(arg0: $Direction_, arg1: $AEColor_, arg2: $Player): boolean;
        getColor(): $AEColor;
        get color(): $AEColor;
    }
    export class $ICrankable {
        static get(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): $ICrankable;
    }
    export interface $ICrankable {
        canTurn(): boolean;
        applyTurn(): void;
    }
}
