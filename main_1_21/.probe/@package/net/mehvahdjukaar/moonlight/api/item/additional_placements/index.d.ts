import { $InteractionResult } from "@package/net/minecraft/world";
import { $Item$Properties, $BlockItem, $Item } from "@package/net/minecraft/world/item";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $SoundType_, $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Map } from "@package/java/util";

declare module "@package/net/mehvahdjukaar/moonlight/api/item/additional_placements" {
    export class $AdditionalItemPlacement {
        overrideUseOn(arg0: $UseOnContext, arg1: $FoodProperties_): $InteractionResult;
        overrideGetPlacementState(arg0: $BlockPlaceContext): $BlockState;
        overridePlace(arg0: $BlockPlaceContext): $InteractionResult;
        overrideUpdatePlacementContext(arg0: $BlockPlaceContext): $BlockPlaceContext;
        static getBlockPlacer(): $BlockPlacerItem;
        getPlacedBlock(): $Block;
        constructor(arg0: $Block_);
        static get blockPlacer(): $BlockPlacerItem;
        get placedBlock(): $Block;
    }
    export class $BlockPlacerItem extends $BlockItem {
        canPlace(arg0: $BlockPlaceContext, arg1: $BlockState_): boolean;
        mimicGetPlacementState(arg0: $BlockPlaceContext, arg1: $Block_): $BlockState;
        mimicUseOn(arg0: $UseOnContext, arg1: $Block_, arg2: $FoodProperties_): $InteractionResult;
        mimicPlace(arg0: $BlockPlaceContext, arg1: $Block_, arg2: $SoundType_): $InteractionResult;
        static get(): $BlockPlacerItem;
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
