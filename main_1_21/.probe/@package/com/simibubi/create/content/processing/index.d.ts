import { $Level_ } from "@package/net/minecraft/world/level";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Item$Properties, $BlockItem, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockPlaceContext } from "@package/net/minecraft/world/item/context";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Map } from "@package/java/util";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
export * as burner from "@package/com/simibubi/create/content/processing/burner";
export * as basin from "@package/com/simibubi/create/content/processing/basin";
export * as recipe from "@package/com/simibubi/create/content/processing/recipe";
export * as sequenced from "@package/com/simibubi/create/content/processing/sequenced";

declare module "@package/com/simibubi/create/content/processing" {
    export class $AssemblyOperatorUseContext extends $BlockPlaceContext {
        constructor(arg0: $Level_, arg1: $Player, arg2: $InteractionHand_, arg3: $ItemStack_, arg4: $BlockHitResult);
    }
    export class $AssemblyOperatorBlockItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
}
