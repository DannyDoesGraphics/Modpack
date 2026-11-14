import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Holder_, $Holder, $Holder$Reference, $HolderLookup$RegistryLookup } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ItemEnchantments$Mutable, $Enchantment, $Enchantment_ } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceKey_ } from "@package/net/minecraft/resources";

declare module "@package/net/neoforged/neoforge/event/enchanting" {
    /**
     * Fired when the enchantment level is set for each of the three potential enchantments in the enchanting table.
     * The `#level` is set to the vanilla value and can be modified by this event handler.
     * 
     * The `#enchantRow` is used to determine which enchantment level is being set, 1, 2, or 3. The `#power` is a number
     * from 0-15 and indicates how many bookshelves surround the enchanting table. The `#itemStack` representing the item being
     * enchanted is also available.
     */
    export class $EnchantmentLevelSetEvent extends $Event {
        /**
         * Get the row for which the enchantment level is being set
         */
        getEnchantLevel(): number;
        /**
         * Get the row for which the enchantment level is being set
         */
        getEnchantRow(): number;
        /**
         * Get the row for which the enchantment level is being set
         */
        getOriginalLevel(): number;
        /**
         * Set the new level of the enchantment (0-30)
         */
        setEnchantLevel(level: number): void;
        /**
         * Get the row for which the enchantment level is being set
         */
        getPower(): number;
        /**
         * Get the pos of the enchantment table
         */
        getPos(): $BlockPos;
        /**
         * Get the world object
         */
        getLevel(): $Level;
        /**
         * Get the item being enchanted
         */
        getItem(): $ItemStack;
        constructor(level: $Level_, pos: $BlockPos_, enchantRow: number, power: number, itemStack: $ItemStack_, enchantLevel: number);
        get enchantRow(): number;
        get originalLevel(): number;
        get power(): number;
        get pos(): $BlockPos;
        get level(): $Level;
        get item(): $ItemStack;
    }
    /**
     * This event is fired whenever the enchantment level of a particular item is requested for gameplay purposes.
     * 
     * It is called from `IItemStackExtension#getEnchantmentLevel(Enchantment)` and `IItemStackExtension#getAllEnchantments()`.
     * 
     * It is not fired for interactions with NBT, which means these changes will not reflect in the item tooltip.
     */
    export class $GetEnchantmentLevelEvent extends $Event {
        /**
         * This method returns the specific enchantment being queried from `IItemStackExtension#getEnchantmentLevel(Enchantment)`.
         * 
         * If this is value is present, you only need to adjust the level of that enchantment.
         * 
         * If this value is null, then the event was fired from `IItemStackExtension#getAllEnchantments()` and all enchantments should be populated.
         */
        getTargetEnchant(): $Holder<$Enchantment>;
        /**
         * Helper method around `#getTargetEnchant()` that checks if the target is the specified enchantment, or if the target is null.
         */
        isTargetting(ench: $ResourceKey_<$Enchantment>): boolean;
        /**
         * Helper method around `#getTargetEnchant()` that checks if the target is the specified enchantment, or if the target is null.
         */
        isTargetting(ench: $Holder_<$Enchantment>): boolean;
        /**
         * Returns the mutable enchantment->level map.
         */
        getEnchantments(): $ItemEnchantments$Mutable;
        getLookup(): $HolderLookup$RegistryLookup<$Enchantment>;
        /**
         * Returns the item stack that is being queried against.
         */
        getStack(): $ItemStack;
        /**
         * Attempts to resolve a `Reference` for a target enchantment.
         * Since enchantments are data, they are not guaranteed to exist.
         */
        getHolder(key: $ResourceKey_<$Enchantment>): ($Holder$Reference<$Enchantment>) | undefined;
        constructor(arg0: $ItemStack_, arg1: $ItemEnchantments$Mutable, arg2: $Holder_<$Enchantment>, arg3: $HolderLookup$RegistryLookup<$Enchantment_>);
        get targetEnchant(): $Holder<$Enchantment>;
        get enchantments(): $ItemEnchantments$Mutable;
        get lookup(): $HolderLookup$RegistryLookup<$Enchantment>;
        get stack(): $ItemStack;
    }
}
