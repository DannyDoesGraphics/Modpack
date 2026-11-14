import { $Container } from "@package/net/minecraft/world";
import { $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/net/caffeinemc/mods/lithium/api/inventory" {
    export class $LithiumCooldownReceivingInventory {
    }
    export interface $LithiumCooldownReceivingInventory {
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        set transferCooldown(value: number);
    }
    export class $LithiumDefaultedList {
    }
    export interface $LithiumDefaultedList {
        changedInteractionConditions(): void;
    }
    /**
     * Values that may be interpreted as {@link $LithiumDefaultedList}.
     */
    export type $LithiumDefaultedList_ = (() => void);
    export class $LithiumInventory {
    }
    export interface $LithiumInventory extends $Container {
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(arg0: $NonNullList<$ItemStack_>): void;
        generateLootLithium(): void;
    }
    export class $LithiumTransferConditionInventory {
    }
    export interface $LithiumTransferConditionInventory {
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
    }
}
