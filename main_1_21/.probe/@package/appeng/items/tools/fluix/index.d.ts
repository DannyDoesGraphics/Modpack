import { $Item$Properties, $SmithingTemplateItem, $Item, $ItemStack_, $Tier, $ShovelItem, $PickaxeItem, $AxeItem, $HoeItem, $SwordItem } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Map } from "@package/java/util";
import { $IntrinsicEnchantItem } from "@package/appeng/hooks";
import { $Predicate, $Consumer } from "@package/java/util/function";
import { $ChatFormatting } from "@package/net/minecraft";
import { $Holder_ } from "@package/net/minecraft/core";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";

declare module "@package/appeng/items/tools/fluix" {
    export class $FluixAxeItem extends $AxeItem implements $IntrinsicEnchantItem {
        getIntrinsicEnchantLevel(arg0: $ItemStack_, arg1: $Holder_<$Enchantment>): number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        /**
         * @deprecated
         */
        static STRIPPABLES: $Map<$Block, $Block>;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $FluixSpadeItem extends $ShovelItem implements $IntrinsicEnchantItem {
        getIntrinsicEnchantLevel(arg0: $ItemStack_, arg1: $Holder_<$Enchantment>): number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static FLATTENABLES: $Map<$Block, $BlockState>;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $FluixSwordItem extends $SwordItem implements $IntrinsicEnchantItem {
        getIntrinsicEnchantLevel(arg0: $ItemStack_, arg1: $Holder_<$Enchantment>): number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $FluixPickaxeItem extends $PickaxeItem implements $IntrinsicEnchantItem {
        getIntrinsicEnchantLevel(arg0: $ItemStack_, arg1: $Holder_<$Enchantment>): number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $IntrinsicEnchantment {
    }
    export class $FluixToolType extends $Enum<$FluixToolType> {
        getToolTier(): $Tier;
        getName(): string;
        static values(): $FluixToolType[];
        static valueOf(arg0: string): $FluixToolType;
        static FLUIX: $FluixToolType;
        get toolTier(): $Tier;
    }
    /**
     * Values that may be interpreted as {@link $FluixToolType}.
     */
    export type $FluixToolType_ = "fluix";
    export class $FluixSmithingTemplateItem extends $SmithingTemplateItem {
        static NETHERITE_UPGRADE_APPLIES_TO: $Component;
        static EMPTY_SLOT_LEGGINGS: $ResourceLocation;
        static NETHERITE_UPGRADE_ADDITIONS_SLOT_DESCRIPTION: $Component;
        static ARMOR_TRIM_INGREDIENTS: $Component;
        static EMPTY_SLOT_PICKAXE: $ResourceLocation;
        static NETHERITE_UPGRADE_INGREDIENTS: $Component;
        static EMPTY_SLOT_QUARTZ: $ResourceLocation;
        appliesTo: $Component;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static EMPTY_SLOT_HOE: $ResourceLocation;
        static EMPTY_SLOT_DIAMOND: $ResourceLocation;
        static INGREDIENTS_TITLE: $Component;
        static EMPTY_SLOT_SWORD: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static NETHERITE_UPGRADE_BASE_SLOT_DESCRIPTION: $Component;
        static EMPTY_SLOT_INGOT: $ResourceLocation;
        static EMPTY_SLOT_AMETHYST_SHARD: $ResourceLocation;
        static EMPTY_SLOT_HELMET: $ResourceLocation;
        ingredients: $Component;
        static EMPTY_SLOT_EMERALD: $ResourceLocation;
        static EMPTY_SLOT_AXE: $ResourceLocation;
        static EMPTY_SLOT_REDSTONE_DUST: $ResourceLocation;
        static NETHERITE_UPGRADE: $Component;
        static TITLE_FORMAT: $ChatFormatting;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static ARMOR_TRIM_BASE_SLOT_DESCRIPTION: $Component;
        static MAX_BAR_WIDTH: number;
        static EMPTY_SLOT_LAPIS_LAZULI: $ResourceLocation;
        static EMPTY_SLOT_SHOVEL: $ResourceLocation;
        static EMPTY_SLOT_CHESTPLATE: $ResourceLocation;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static EMPTY_SLOT_BOOTS: $ResourceLocation;
        static APPLIES_TO_TITLE: $Component;
        static DESCRIPTION_FORMAT: $ChatFormatting;
        static ARMOR_TRIM_APPLIES_TO: $Component;
        static ARMOR_TRIM_ADDITIONS_SLOT_DESCRIPTION: $Component;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor();
    }
    export class $FluixHoeItem extends $HoeItem implements $IntrinsicEnchantItem {
        getIntrinsicEnchantLevel(arg0: $ItemStack_, arg1: $Holder_<$Enchantment>): number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        /**
         * @deprecated
         */
        static TILLABLES: $Map<$Block, $Pair<$Predicate<$UseOnContext>, $Consumer<$UseOnContext>>>;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
}
