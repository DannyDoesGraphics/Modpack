import { $FluidApi$ItemProvider, $FluidApi$SingleSlotStorage } from "@package/rearth/oritech/api/fluid";
import { $ColorableMachine$ColorVariant_, $ColorableMachine$ColorVariant } from "@package/rearth/oritech/util";
import { $Item$Properties, $BlockItem, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $EntityType, $EntityType_ } from "@package/net/minecraft/world/entity";
import { $EnergyApi$ItemProvider, $EnergyApi$EnergyStorage } from "@package/rearth/oritech/api/energy";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $List, $List_, $Map } from "@package/java/util";

declare module "@package/rearth/oritech/item/other" {
    export class $ColorCartridgeItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        variant: $ColorableMachine$ColorVariant;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $ColorableMachine$ColorVariant_);
    }
    export class $SmallFluidTankBlockItem extends $BlockItem implements $FluidApi$ItemProvider {
        getFluidStorage(arg0: $ItemStack_): $FluidApi$SingleSlotStorage;
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
    export class $CustomTooltipItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: string);
    }
    export class $SmallEnergyStorageBlockItem extends $BlockItem implements $EnergyApi$ItemProvider {
        getEnergyStorage(arg0: $ItemStack_): $EnergyApi$EnergyStorage;
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
    export class $MobCaptureItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        targets: $List<$EntityType<never>>;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $List_<$EntityType_<never>>);
    }
}
