import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Fluid, $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $IFluidHandler$FluidAction_, $IFluidHandlerItem, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Direction_ } from "@package/net/minecraft/core";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum } from "@package/java/lang";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";

declare module "@package/com/simibubi/create/foundation/fluid" {
    export class $FluidRenderer {
        static renderFluidStream(arg0: $FluidStack_, arg1: $Direction_, arg2: number, arg3: number, arg4: boolean, arg5: $VertexConsumer, arg6: $PoseStack, arg7: number): void;
        static renderFluidStream(arg0: $FluidStack_, arg1: $Direction_, arg2: number, arg3: number, arg4: boolean, arg5: $MultiBufferSource_, arg6: $PoseStack, arg7: number): void;
        static renderFlowingTiledFace(arg0: $Direction_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $VertexConsumer, arg7: $PoseStack, arg8: number, arg9: number, arg10: $TextureAtlasSprite): void;
        constructor();
    }
    export class $FluidHelper {
        static isTag(arg0: $FluidStack_, arg1: $TagKey_<$Fluid>): boolean;
        static isTag(arg0: $FluidState, arg1: $TagKey_<$Fluid>): boolean;
        static isTag(arg0: $Fluid_, arg1: $TagKey_<$Fluid>): boolean;
        static isLava(arg0: $Fluid_): boolean;
        static isSame(arg0: $FluidStack_, arg1: $Fluid_): boolean;
        static isSame(arg0: $FluidStack_, arg1: $FluidStack_): boolean;
        static getFillSound(arg0: $FluidStack_): $SoundEvent;
        static getEmptySound(arg0: $FluidStack_): $SoundEvent;
        static copyStackWithAmount(arg0: $FluidStack_, arg1: number): $FluidStack;
        static convertToFlowing(arg0: $Fluid_): $Fluid;
        static isWater(arg0: $Fluid_): boolean;
        static hasBlockState(arg0: $Fluid_): boolean;
        static tryEmptyItemIntoBE(arg0: $Level_, arg1: $Player, arg2: $InteractionHand_, arg3: $ItemStack_, arg4: $SmartBlockEntity): boolean;
        static tryFillItemFromBE(arg0: $Level_, arg1: $Player, arg2: $InteractionHand_, arg3: $ItemStack_, arg4: $SmartBlockEntity): boolean;
        static exchange(arg0: $IFluidHandler, arg1: $IFluidHandlerItem, arg2: $FluidHelper$FluidExchange_, arg3: number): $FluidHelper$FluidExchange;
        static convertToStill(arg0: $Fluid_): $Fluid;
        static exchangeAll(arg0: $IFluidHandler, arg1: $IFluidHandlerItem, arg2: $FluidHelper$FluidExchange_): $FluidHelper$FluidExchange;
        constructor();
    }
    /**
     * @deprecated
     */
    export class $FluidIngredientOld {
        static CODEC: $Codec<$SizedFluidIngredient>;
        constructor();
    }
    export class $FluidHelper$FluidExchange extends $Enum<$FluidHelper$FluidExchange> {
        static values(): $FluidHelper$FluidExchange[];
        static valueOf(arg0: string): $FluidHelper$FluidExchange;
        static ITEM_TO_TANK: $FluidHelper$FluidExchange;
        static TANK_TO_ITEM: $FluidHelper$FluidExchange;
    }
    /**
     * Values that may be interpreted as {@link $FluidHelper$FluidExchange}.
     */
    export type $FluidHelper$FluidExchange_ = "item_to_tank" | "tank_to_item";
    export class $CombinedTankWrapper implements $IFluidHandler {
        getTanks(): number;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        enforceVariety(): $CombinedTankWrapper;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        constructor(...arg0: $IFluidHandler[]);
        get tanks(): number;
    }
    export class $SmartFluidTank extends $FluidTank {
        constructor(arg0: number, arg1: $Consumer_<$FluidStack>);
    }
}
