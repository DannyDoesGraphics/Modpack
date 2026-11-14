import { $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ConnectedTextureBehaviour$Base, $CTSpriteShiftEntry } from "@package/com/simibubi/create/foundation/block/connected";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $NonNullUnaryOperator } from "@package/com/tterrag/registrate/util/nullness";
import { $BlockBuilder } from "@package/com/tterrag/registrate/builders";
import { $BiPredicate_, $Supplier_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/content/decoration/encasing" {
    export class $CasingBlock extends $Block implements $IWrenchable {
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $CasingConnectivity$Entry {
        getCasing(): $CTSpriteShiftEntry;
        isSideValid(arg0: $BlockState_, arg1: $Direction_): boolean;
        register(): void;
        get casing(): $CTSpriteShiftEntry;
    }
    export class $CasingConnectivity {
        makeCasing(arg0: $Block_, arg1: $CTSpriteShiftEntry): void;
        get(arg0: $BlockState_): $CasingConnectivity$Entry;
        make(arg0: $Block_, arg1: $CTSpriteShiftEntry): void;
        make(arg0: $Block_, arg1: $CTSpriteShiftEntry, arg2: $BiPredicate_<$BlockState, $Direction>): void;
        constructor();
    }
    export class $EncasedCTBehaviour extends $ConnectedTextureBehaviour$Base {
        constructor(arg0: $CTSpriteShiftEntry);
    }
    export class $EncasingRegistry {
        static addVariant<B extends $Block, E extends $Block, P>(arg0: B, arg1: E): void;
        static addVariantTo<B extends $Block, P, E extends $Block>(arg0: $Supplier_<E>): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        static getVariants(arg0: $Block_): $List<$Block>;
        constructor();
    }
    export class $EncasableBlock {
    }
    export interface $EncasableBlock {
        tryEncase(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $ItemStack_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): $ItemInteractionResult;
        playEncaseSound(arg0: $Level_, arg1: $BlockPos_): void;
    }
    export class $EncasedBlock {
    }
    export interface $EncasedBlock {
        getCasing(): $Block;
        handleEncasing(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $ItemStack_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): void;
        get casing(): $Block;
    }
    /**
     * Values that may be interpreted as {@link $EncasedBlock}.
     */
    export type $EncasedBlock_ = (() => $Block_);
}
