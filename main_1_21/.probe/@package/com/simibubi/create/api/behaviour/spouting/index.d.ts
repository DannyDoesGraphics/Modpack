import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Predicate, $Predicate_, $UnaryOperator_, $UnaryOperator } from "@package/java/util/function";
import { $IntegerProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record } from "@package/java/lang";
import { $SpoutBlockEntity } from "@package/com/simibubi/create/content/fluids/spout";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/api/behaviour/spouting" {
    export class $CauldronSpoutingBehavior extends $Enum<$CauldronSpoutingBehavior> implements $BlockSpoutingBehaviour {
        fillBlock(arg0: $Level_, arg1: $BlockPos_, arg2: $SpoutBlockEntity, arg3: $FluidStack_, arg4: boolean): number;
        static values(): $CauldronSpoutingBehavior[];
        static valueOf(arg0: string): $CauldronSpoutingBehavior;
        static CAULDRON_INFO: $SimpleRegistry<$Fluid, $CauldronSpoutingBehavior$CauldronInfo>;
        static INSTANCE: $CauldronSpoutingBehavior;
    }
    /**
     * Values that may be interpreted as {@link $CauldronSpoutingBehavior}.
     */
    export type $CauldronSpoutingBehavior_ = "instance";
    export class $BlockSpoutingBehaviour {
        static get(arg0: $Level_, arg1: $BlockPos_): $BlockSpoutingBehaviour;
        static BY_BLOCK_ENTITY: $SimpleRegistry<$BlockEntityType<never>, $BlockSpoutingBehaviour>;
        static BY_BLOCK: $SimpleRegistry<$Block, $BlockSpoutingBehaviour>;
    }
    export interface $BlockSpoutingBehaviour {
        fillBlock(arg0: $Level_, arg1: $BlockPos_, arg2: $SpoutBlockEntity, arg3: $FluidStack_, arg4: boolean): number;
    }
    /**
     * Values that may be interpreted as {@link $BlockSpoutingBehaviour}.
     */
    export type $BlockSpoutingBehaviour_ = ((arg0: $Level, arg1: $BlockPos, arg2: $SpoutBlockEntity, arg3: $FluidStack, arg4: boolean) => number);
    export class $StateChangingBehavior extends $Record implements $BlockSpoutingBehaviour {
        static incrementingState(arg0: number, arg1: $Predicate_<$Fluid>, arg2: $IntegerProperty): $BlockSpoutingBehaviour;
        fluidTest(): $Predicate<$Fluid>;
        fillFunction(): $UnaryOperator<$BlockState>;
        canFill(): $Predicate<$BlockState>;
        fillBlock(arg0: $Level_, arg1: $BlockPos_, arg2: $SpoutBlockEntity, arg3: $FluidStack_, arg4: boolean): number;
        amount(): number;
        static setTo(arg0: number, arg1: $Predicate_<$Fluid>, arg2: $BlockState_): $BlockSpoutingBehaviour;
        static setTo(arg0: number, arg1: $Predicate_<$Fluid>, arg2: $Block_): $BlockSpoutingBehaviour;
        constructor(amount: number, fluidTest: $Predicate_<$Fluid>, canFill: $Predicate_<$BlockState>, fillFunction: $UnaryOperator_<$BlockState>);
    }
    /**
     * Values that may be interpreted as {@link $StateChangingBehavior}.
     */
    export type $StateChangingBehavior_ = { amount?: number, canFill?: $Predicate_<$BlockState>, fluidTest?: $Predicate_<$Fluid>, fillFunction?: $UnaryOperator_<$BlockState>,  } | [amount?: number, canFill?: $Predicate_<$BlockState>, fluidTest?: $Predicate_<$Fluid>, fillFunction?: $UnaryOperator_<$BlockState>, ];
    export class $CauldronSpoutingBehavior$CauldronInfo extends $Record {
        cauldron(): $BlockState;
        amount(): number;
        constructor(arg0: number, arg1: $Block_);
        constructor(amount: number, cauldron: $BlockState_);
    }
    /**
     * Values that may be interpreted as {@link $CauldronSpoutingBehavior$CauldronInfo}.
     */
    export type $CauldronSpoutingBehavior$CauldronInfo_ = { amount?: number, cauldron?: $BlockState_,  } | [amount?: number, cauldron?: $BlockState_, ];
}
