import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/fuzs/puzzleslib/neoforge/api/event/v1/entity/living" {
    export class $ComputeEnchantedLootBonusEvent extends $LivingEvent {
        getEnchantmentLevel(): number;
        getDamageSource(): $DamageSource;
        getEnchantment(): $Holder<$Enchantment>;
        static onComputeEnchantedLootBonus(enchantment: $Holder_<$Enchantment>, enchantmentLevel: number, lootContext: $LootContext): number;
        static onComputeEnchantedLootBonus(enchantment: $Holder_<$Enchantment>, enchantmentLevel: number, livingEntity: $LivingEntity, damageSource: $DamageSource_): number;
        setEnchantmentLevel(enchantmentLevel: number): void;
        constructor(entity: $LivingEntity, damageSource: $DamageSource_, enchantment: $Holder_<$Enchantment>, enchantmentLevel: number);
        get damageSource(): $DamageSource;
        get enchantment(): $Holder<$Enchantment>;
    }
}
