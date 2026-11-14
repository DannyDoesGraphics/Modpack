import { $Item$Properties, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $NetworkToolMenuHost } from "@package/appeng/items/contents";
import { $ItemMenuHostLocator } from "@package/appeng/menu/locator";
import { $IMemoryCard, $MemoryCardMessages_ } from "@package/appeng/api/implementations/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IAEItemFilter } from "@package/appeng/util/inv/filter";
import { $Map, $Set } from "@package/java/util";
import { $AEBaseItem } from "@package/appeng/items";
import { $InternalInventory } from "@package/appeng/api/inventories";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $DataComponentType, $DataComponentMap_, $DataComponentType_, $DataComponentMap$Builder } from "@package/net/minecraft/core/component";
import { $Object } from "@package/java/lang";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $ItemMenuHost, $IMenuItem } from "@package/appeng/api/implementations/menuobjects";
export * as powered from "@package/appeng/items/tools/powered";
export * as fluix from "@package/appeng/items/tools/fluix";
export * as quartz from "@package/appeng/items/tools/quartz";

declare module "@package/appeng/items/tools" {
    export class $NetworkToolItem$NetworkToolInventoryFilter implements $IAEItemFilter {
        allowExtract(arg0: $InternalInventory, arg1: number, arg2: number): boolean;
        allowInsert(arg0: $InternalInventory, arg1: number, arg2: $ItemStack_): boolean;
    }
    export class $MemoryCardItem extends $AEBaseItem implements $IMemoryCard {
        static clearCard(arg0: $ItemStack_): void;
        notifyUser(arg0: $Player, arg1: $MemoryCardMessages_): void;
        static importGenericSettings(arg0: $Object, arg1: $DataComponentMap_, arg2: $Player): $Set<$DataComponentType<never>>;
        static exportGenericSettings(arg0: $Object, arg1: $DataComponentMap$Builder): void;
        static importGenericSettingsAndNotify(arg0: $Object, arg1: $DataComponentMap_, arg2: $Player): void;
        static getSettingTranslationKey(arg0: $DataComponentType_<never>): string;
        static getTintColor(arg0: $ItemStack_, arg1: number): number;
        getColor(arg0: $ItemStack_): number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $GuideItem extends $AEBaseItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static GUIDE_ID: $ResourceLocation;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $NetworkToolItem extends $AEBaseItem implements $IMenuItem {
        static findNetworkToolInv(arg0: $Player): $NetworkToolMenuHost<any>;
        static getInventory(arg0: $ItemStack_): $InternalInventory;
        getMenuHost(arg0: $Player, arg1: $ItemMenuHostLocator, arg2: $BlockHitResult): $ItemMenuHost<never>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
}
