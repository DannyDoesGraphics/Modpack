import { $IEnergySource } from "@package/appeng/api/networking/energy";
import { $ItemLike, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemStack, $Item } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IUpgradeInventory, $IUpgradeableObject } from "@package/appeng/api/upgrades";
import { $Actionable_ } from "@package/appeng/api/config";
import { $ItemMenuHostLocator } from "@package/appeng/menu/locator";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AEKey } from "@package/appeng/api/stacks";
import { $ITerminalHost } from "@package/appeng/api/storage";
import { $Supplier_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $SupplierInternalInventory } from "@package/appeng/util/inv";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/appeng/api/implementations/menuobjects" {
    export class $ItemMenuHost<T extends $Item> implements $IUpgradeableObject {
        consumeIdlePower(arg0: $Actionable_): boolean;
        getPlayer(): $Player;
        getPlayerInventorySlot(): number;
        getUpgrades(): $IUpgradeInventory;
        getLocator(): $ItemMenuHostLocator;
        insert(arg0: $Player, arg1: $AEKey, arg2: number, arg3: $Actionable_): number;
        tick(): void;
        isValid(): boolean;
        getItem(): T;
        getItemStack(): $ItemStack;
        isClientSide(): boolean;
        getInstalledUpgrades(arg0: $ItemLike_): number;
        isUpgradedWith(arg0: $ItemLike_): boolean;
        constructor(arg0: T, arg1: $Player, arg2: $ItemMenuHostLocator);
        get player(): $Player;
        get playerInventorySlot(): number;
        get upgrades(): $IUpgradeInventory;
        get locator(): $ItemMenuHostLocator;
        get valid(): boolean;
        get item(): T;
        get itemStack(): $ItemStack;
        get clientSide(): boolean;
    }
    export class $DelegateItemUpgradeInventory extends $SupplierInternalInventory<$IUpgradeInventory> implements $IUpgradeInventory {
        getInstalledUpgrades(arg0: $ItemLike_): number;
        getMaxInstalled(arg0: $ItemLike_): number;
        getUpgradableItem(): $ItemLike;
        writeToNBT(arg0: $CompoundTag_, arg1: string, arg2: $HolderLookup$Provider): void;
        readFromNBT(arg0: $CompoundTag_, arg1: string, arg2: $HolderLookup$Provider): void;
        isInstalled(arg0: $ItemLike_): boolean;
        constructor(arg0: $Supplier_<$ItemStack>);
        get upgradableItem(): $ItemLike;
    }
    export class $IMenuItem {
    }
    export interface $IMenuItem {
        getMenuHost(arg0: $Player, arg1: $ItemMenuHostLocator, arg2: $BlockHitResult): $ItemMenuHost<never>;
    }
    /**
     * Values that may be interpreted as {@link $IMenuItem}.
     */
    export type $IMenuItem_ = ((arg0: $Player, arg1: $ItemMenuHostLocator, arg2: $BlockHitResult) => $ItemMenuHost<never>);
    export class $IPortableTerminal {
    }
    export interface $IPortableTerminal extends $ITerminalHost, $IEnergySource {
    }
}
