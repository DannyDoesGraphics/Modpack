import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Predicate_ } from "@package/java/util/function";
import { $ItemInteractionResult, $InteractionHand, $InteractionHand_, $ItemInteractionResult_ } from "@package/net/minecraft/world";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Record } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/net/minecraft/core/cauldron" {
    export class $CauldronInteraction$InteractionMap extends $Record {
        name(): string;
        map(): $Map<$Item, $CauldronInteraction>;
        constructor(arg0: string, arg1: $Map_<$Item_, $CauldronInteraction_>);
    }
    /**
     * Values that may be interpreted as {@link $CauldronInteraction$InteractionMap}.
     */
    export type $CauldronInteraction$InteractionMap_ = { map?: $Map_<$Item_, $CauldronInteraction_>, name?: string,  } | [map?: $Map_<$Item_, $CauldronInteraction_>, name?: string, ];
    export class $CauldronInteraction {
        static newInteractionMap(name: string): $CauldronInteraction$InteractionMap;
        static addDefaultInteractions(interactionsMap: $Map_<$Item_, $CauldronInteraction_>): void;
        static fillBucket(state: $BlockState_, level: $Level_, pos: $BlockPos_, player: $Player, hand: $InteractionHand_, emptyStack: $ItemStack_, filledStack: $ItemStack_, statePredicate: $Predicate_<$BlockState>, fillSound: $SoundEvent_): $ItemInteractionResult;
        static emptyBucket(level: $Level_, pos: $BlockPos_, player: $Player, hand: $InteractionHand_, filledStack: $ItemStack_, state: $BlockState_, emptySound: $SoundEvent_): $ItemInteractionResult;
        static bootStrap(): void;
        static CODEC: $Codec<$CauldronInteraction$InteractionMap>;
        static LAVA: $CauldronInteraction$InteractionMap;
        static FILL_POWDER_SNOW: $CauldronInteraction;
        static BANNER: $CauldronInteraction;
        static DYED_ITEM: $CauldronInteraction;
        static FILL_LAVA: $CauldronInteraction;
        static POWDER_SNOW: $CauldronInteraction$InteractionMap;
        static SHULKER_BOX: $CauldronInteraction;
        static FILL_WATER: $CauldronInteraction;
        static INTERACTIONS: $Map<string, $CauldronInteraction$InteractionMap>;
        static EMPTY: $CauldronInteraction$InteractionMap;
        static WATER: $CauldronInteraction$InteractionMap;
    }
    export interface $CauldronInteraction {
        interact(state: $BlockState_, level: $Level_, pos: $BlockPos_, player: $Player, hand: $InteractionHand_, stack: $ItemStack_): $ItemInteractionResult;
    }
    /**
     * Values that may be interpreted as {@link $CauldronInteraction}.
     */
    export type $CauldronInteraction_ = ((arg0: $BlockState, arg1: $Level, arg2: $BlockPos, arg3: $Player, arg4: $InteractionHand, arg5: $ItemStack) => $ItemInteractionResult_);
}
