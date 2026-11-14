import { $Level_ } from "@package/net/minecraft/world/level";
import { $Item$Properties, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Map } from "@package/java/util";
import { $PalettesColor_, $PalettesColor } from "@package/com/railwayteam/railways/content/palettes";
import { $IFluidHandler$FluidAction_, $IFluidHandlerItem } from "@package/net/neoforged/neoforge/fluids/capability";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $ItemEntry } from "@package/com/tterrag/registrate/util/entry";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/com/railwayteam/railways/content/palettes/painting" {
    export class $EmptyPaintPitcherItem extends $Item {
        static create(arg0: $Item$Properties): $EmptyPaintPitcherItem;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $RepaintingTarget$Simple extends $RepaintingTarget {
    }
    export class $PaintPitcherFluidHandler implements $IFluidHandlerItem {
        getTanks(): number;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getContainer(): $ItemStack;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        constructor(arg0: $ItemStack_);
        get tanks(): number;
        get container(): $ItemStack;
    }
    export class $PaintPitcherItem extends $Item {
        projectilePaint(arg0: $ItemStack_, arg1: $Level_, arg2: $BlockHitResult): void;
        copyAsFilledStack(arg0: $ItemStack_, arg1: number): $ItemStack;
        setFillInPlace(arg0: $ItemStack_, arg1: number): void;
        getFluidAmount(arg0: $ItemStack_): number;
        static usePaint(arg0: $Player, arg1: $InteractionHand_): void;
        static create(arg0: $Item$Properties, arg1: $PalettesColor_): $PaintPitcherItem;
        getColor(): $PalettesColor;
        getLevels(arg0: $ItemStack_): number;
        static FLUID_PER_LEVEL: number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static MAX_LEVELS: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static LEVELS_PER_CANNON_SHOT: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $PalettesColor_);
        get color(): $PalettesColor;
    }
    export class $PaintFluid {
        static setColor(arg0: $CompoundTag_, arg1: $PalettesColor_): $CompoundTag;
        static getColor(arg0: $CompoundTag_): ($PalettesColor) | undefined;
        static LANG_PREFIX: string;
        constructor();
    }
    export class $PaintBrushItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $PitcherColor extends $Record {
        getItemEntry(): $ItemEntry<$PaintPitcherItem>;
        isSandyWater(): boolean;
        color(): $PalettesColor;
        static SANDY_WATER: $PitcherColor;
        constructor(color: $PalettesColor_);
        get itemEntry(): $ItemEntry<$PaintPitcherItem>;
        get sandyWater(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PitcherColor}.
     */
    export type $PitcherColor_ = { color?: $PalettesColor_,  } | [color?: $PalettesColor_, ];
    export class $RepaintingTarget$Copycat extends $RepaintingTarget {
    }
    export class $RepaintingTarget {
        repaint(arg0: $PalettesColor_): boolean;
        getPos(): $BlockPos;
        static get(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $RepaintingTarget;
        getColor(): $PalettesColor;
        get pos(): $BlockPos;
        get color(): $PalettesColor;
    }
}
