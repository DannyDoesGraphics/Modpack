import { $Level_, $BlockGetter } from "@package/net/minecraft/world/level";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $ItemStack, $Item$Properties, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $CustomRenderedItemModelRenderer } from "@package/com/simibubi/create/foundation/item/render";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Map } from "@package/java/util";
import { $PlayerInteractEvent$RightClickBlock, $AttackEntityEvent } from "@package/net/neoforged/neoforge/event/entity/player";

declare module "@package/com/simibubi/create/content/equipment/wrench" {
    export class $WrenchEventHandler {
        static useOwnWrenchLogicForCreateBlocks(arg0: $PlayerInteractEvent$RightClickBlock): void;
        constructor();
    }
    export class $WrenchItem extends $Item {
        static wrenchInstaKillsMinecarts(arg0: $AttackEntityEvent): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $IWrenchable {
        static playRemoveSound(arg0: $Level_, arg1: $BlockPos_): void;
        static playRotateSound(arg0: $Level_, arg1: $BlockPos_): void;
    }
    export interface $IWrenchable {
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
    }
    export class $IWrenchableWithBracket {
    }
    export interface $IWrenchableWithBracket extends $IWrenchable {
        tryRemoveBracket(arg0: $UseOnContext): boolean;
        removeBracket(arg0: $BlockGetter, arg1: $BlockPos_, arg2: boolean): ($ItemStack) | undefined;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
    }
    /**
     * Values that may be interpreted as {@link $IWrenchableWithBracket}.
     */
    export type $IWrenchableWithBracket_ = ((arg0: $BlockGetter, arg1: $BlockPos, arg2: boolean) => ($ItemStack_) | undefined);
    export class $WrenchItemRenderer extends $CustomRenderedItemModelRenderer {
        constructor();
    }
}
