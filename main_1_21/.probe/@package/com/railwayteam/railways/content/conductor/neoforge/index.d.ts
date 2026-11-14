import { $ConductorCapItem } from "@package/com/railwayteam/railways/content/conductor";
import { $Supplier } from "@package/java/util/function";
import { $Item, $DyeColor } from "@package/net/minecraft/world/item";
import { $DispenseItemBehavior } from "@package/net/minecraft/core/dispenser";
import { $ItemAttributeModifiers } from "@package/net/minecraft/world/item/component";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Map } from "@package/java/util";

declare module "@package/com/railwayteam/railways/content/conductor/neoforge" {
    export class $ConductorCapItemImpl extends $ConductorCapItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        color: $DyeColor;
        textureStr: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        textureId: $ResourceLocation;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        static BY_BLOCK: $Map<$Block, $Item>;
    }
}
