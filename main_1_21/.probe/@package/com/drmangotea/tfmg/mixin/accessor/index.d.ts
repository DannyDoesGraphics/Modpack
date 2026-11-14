import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $NonNullList } from "@package/net/minecraft/core";
import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SmartFluidTank } from "@package/com/simibubi/create/foundation/fluid";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $IRecipeTypeInfo } from "@package/com/simibubi/create/foundation/recipe";
import { $ProcessingOutput } from "@package/com/simibubi/create/content/processing/recipe";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";

declare module "@package/com/drmangotea/tfmg/mixin/accessor" {
    export class $ProcessingRecipeAccessor {
    }
    export interface $ProcessingRecipeAccessor {
        tfmg$ingredients(): $NonNullList<$Ingredient>;
        tfmg$fluidIngredients(): $NonNullList<$SizedFluidIngredient>;
        tfmg$results(): $NonNullList<$ProcessingOutput>;
        tfmg$fluidResults(): $NonNullList<$FluidStack>;
        tfmg$typeInfo(): $IRecipeTypeInfo;
    }
    export class $FluidTankBlockEntityAccessor {
    }
    export interface $FluidTankBlockEntityAccessor {
        tfmg$getWindow(): boolean;
        tfmg$getLuminosity(): number;
        tfmg$getHeight(): number;
        tfmg$updateConnectivity(): void;
        tfmg$getWidth(): number;
        tfmg$getTankInventory(): $FluidTank;
        tfmg$getFluidCapability(): $IFluidHandler;
        tfmg$refreshCapability(): void;
    }
    export class $FlywheelBlockEntityMixin {
    }
    export interface $FlywheelBlockEntityMixin {
        tfmg$angle(): number;
        tfmg$visualSpeed(): $LerpedFloat;
    }
    export class $SequencedAssemblyRecipeAccessor {
    }
    export interface $SequencedAssemblyRecipeAccessor {
        tfmg$setIngredient(arg0: $Ingredient_): void;
        tfmg$setTransitionalItem(arg0: $ProcessingOutput): void;
        tfmg$setLoops(arg0: number): void;
    }
    export class $TankSegmentAccessor {
    }
    export interface $TankSegmentAccessor {
        tfmg$tank(): $SmartFluidTank;
    }
    /**
     * Values that may be interpreted as {@link $TankSegmentAccessor}.
     */
    export type $TankSegmentAccessor_ = (() => $SmartFluidTank);
    export class $SlidingDoorBlockEntityAccessor {
    }
    export interface $SlidingDoorBlockEntityAccessor {
        i_architecture$shouldRenderSpecial(arg0: $BlockState_): boolean;
        i_architecture$getAnimation(): $LerpedFloat;
    }
}
