import { $DifficultyInstance } from "@package/net/minecraft/world";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $Holder_, $Registry, $HolderSet, $HolderSet_, $Holder } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $IntProvider_, $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Enchantment, $ItemEnchantments$Mutable } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/item/enchantment/providers" {
    export class $EnchantmentProvider {
        static DIRECT_CODEC: $Codec<$EnchantmentProvider>;
    }
    export interface $EnchantmentProvider {
        enchant(stack: $ItemStack_, enchantments: $ItemEnchantments$Mutable, random: $RandomSource, difficulty: $DifficultyInstance): void;
        codec(): $MapCodec<$EnchantmentProvider>;
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentProvider}.
     */
    export type $EnchantmentProvider_ = RegistryTypes.EnchantmentProvider;
    export class $SingleEnchantment extends $Record implements $EnchantmentProvider {
        enchant(stack: $ItemStack_, enchantments: $ItemEnchantments$Mutable, random: $RandomSource, difficulty: $DifficultyInstance): void;
        enchantment(): $Holder<$Enchantment>;
        level(): $IntProvider;
        codec(): $MapCodec<$SingleEnchantment>;
        static CODEC: $MapCodec<$SingleEnchantment>;
        constructor(arg0: $Holder_<$Enchantment>, arg1: $IntProvider_);
    }
    /**
     * Values that may be interpreted as {@link $SingleEnchantment}.
     */
    export type $SingleEnchantment_ = { level?: $IntProvider_, enchantment?: $Holder_<$Enchantment>,  } | [level?: $IntProvider_, enchantment?: $Holder_<$Enchantment>, ];
    export class $EnchantmentProviderTypes {
        static bootstrap(registry: $Registry<$MapCodec_<$EnchantmentProvider_>>): $MapCodec<$EnchantmentProvider>;
    }
    export interface $EnchantmentProviderTypes {
    }
    export class $TradeRebalanceEnchantmentProviders {
        static bootstrap(context: $BootstrapContext<$EnchantmentProvider_>): void;
        static TRADES_JUNGLE_ARMORER_BOOTS_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_TAIGA_ARMORER_LEGGINGS_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_JUNGLE_ARMORER_BOOTS_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SNOW_ARMORER_BOOTS_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SNOW_ARMORER_BOOTS_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SAVANNA_ARMORER_LEGGINGS_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_DESERT_ARMORER_LEGGINGS_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_DESERT_ARMORER_LEGGINGS_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SWAMP_ARMORER_LEGGINGS_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_TAIGA_ARMORER_CHESTPLATE_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_DESERT_ARMORER_CHESTPLATE_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SWAMP_ARMORER_HELMET_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_PLAINS_ARMORER_CHESTPLATE_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SWAMP_ARMORER_HELMET_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_DESERT_ARMORER_CHESTPLATE_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_DESERT_ARMORER_HELMET_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_PLAINS_ARMORER_LEGGINGS_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SAVANNA_ARMORER_HELMET_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SAVANNA_ARMORER_CHESTPLATE_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_PLAINS_ARMORER_LEGGINGS_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SAVANNA_ARMORER_CHESTPLATE_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SAVANNA_ARMORER_HELMET_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_PLAINS_ARMORER_BOOTS_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_JUNGLE_ARMORER_CHESTPLATE_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_PLAINS_ARMORER_BOOTS_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SNOW_ARMORER_HELMET_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_JUNGLE_ARMORER_LEGGINGS_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SWAMP_ARMORER_BOOTS_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SWAMP_ARMORER_BOOTS_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SAVANNA_ARMORER_BOOTS_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SNOW_ARMORER_HELMET_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_PLAINS_ARMORER_HELMET_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_SWAMP_ARMORER_CHESTPLATE_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_JUNGLE_ARMORER_HELMET_4: $ResourceKey<$EnchantmentProvider>;
        static TRADES_JUNGLE_ARMORER_HELMET_5: $ResourceKey<$EnchantmentProvider>;
        static TRADES_DESERT_ARMORER_BOOTS_4: $ResourceKey<$EnchantmentProvider>;
    }
    export interface $TradeRebalanceEnchantmentProviders {
    }
    export class $EnchantmentsByCost extends $Record implements $EnchantmentProvider {
        enchant(stack: $ItemStack_, enchantments: $ItemEnchantments$Mutable, random: $RandomSource, difficulty: $DifficultyInstance): void;
        cost(): $IntProvider;
        codec(): $MapCodec<$EnchantmentsByCost>;
        enchantments(): $HolderSet<$Enchantment>;
        static CODEC: $MapCodec<$EnchantmentsByCost>;
        constructor(arg0: $HolderSet_<$Enchantment>, arg1: $IntProvider_);
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentsByCost}.
     */
    export type $EnchantmentsByCost_ = { enchantments?: $HolderSet_<$Enchantment>, cost?: $IntProvider_,  } | [enchantments?: $HolderSet_<$Enchantment>, cost?: $IntProvider_, ];
    export class $EnchantmentsByCostWithDifficulty extends $Record implements $EnchantmentProvider {
        enchant(stack: $ItemStack_, enchantments: $ItemEnchantments$Mutable, random: $RandomSource, difficulty: $DifficultyInstance): void;
        minCost(): number;
        maxCostSpan(): number;
        codec(): $MapCodec<$EnchantmentsByCostWithDifficulty>;
        enchantments(): $HolderSet<$Enchantment>;
        static CODEC: $MapCodec<$EnchantmentsByCostWithDifficulty>;
        static MAX_ALLOWED_VALUE_PART: number;
        constructor(arg0: $HolderSet_<$Enchantment>, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentsByCostWithDifficulty}.
     */
    export type $EnchantmentsByCostWithDifficulty_ = { enchantments?: $HolderSet_<$Enchantment>, minCost?: number, maxCostSpan?: number,  } | [enchantments?: $HolderSet_<$Enchantment>, minCost?: number, maxCostSpan?: number, ];
    export interface $EnchantmentProvider extends RegistryMarked<RegistryTypes.EnchantmentProviderTag, RegistryTypes.EnchantmentProvider> {}
    export class $VanillaEnchantmentProviders {
        static create(name: string): $ResourceKey<$EnchantmentProvider>;
        static bootstrap(context: $BootstrapContext<$EnchantmentProvider_>): void;
        static RAID_VINDICATOR_POST_WAVE_5: $ResourceKey<$EnchantmentProvider>;
        static PILLAGER_SPAWN_CROSSBOW: $ResourceKey<$EnchantmentProvider>;
        static RAID_PILLAGER_POST_WAVE_5: $ResourceKey<$EnchantmentProvider>;
        static RAID_PILLAGER_POST_WAVE_3: $ResourceKey<$EnchantmentProvider>;
        static RAID_VINDICATOR: $ResourceKey<$EnchantmentProvider>;
        static ENDERMAN_LOOT_DROP: $ResourceKey<$EnchantmentProvider>;
        static MOB_SPAWN_EQUIPMENT: $ResourceKey<$EnchantmentProvider>;
    }
    export interface $VanillaEnchantmentProviders {
    }
}
