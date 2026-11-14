import { $BlockAndTintGetter, $LevelReader } from "@package/net/minecraft/world/level";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Item, $Rarity } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid } from "@package/net/minecraft/world/level/material";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $LiquidBlock } from "@package/net/minecraft/world/level/block";
import { $FluidStack } from "@package/dev/architectury/fluid";

declare module "@package/dev/architectury/core/fluid" {
    export class $ArchitecturyFluidAttributes {
    }
    export interface $ArchitecturyFluidAttributes {
        getOverlayTexture(): $ResourceLocation;
        getOverlayTexture(state: $FluidState, level: $BlockAndTintGetter, pos: $BlockPos_): $ResourceLocation;
        getOverlayTexture(stack: $FluidStack): $ResourceLocation;
        getTickDelay(): number;
        getTickDelay(arg0: $LevelReader): number;
        getRarity(stack: $FluidStack): $Rarity;
        getRarity(): $Rarity;
        getRarity(arg0: $FluidStack, arg1: $BlockAndTintGetter, arg2: $BlockPos_): $Rarity;
        canConvertToSource(): boolean;
        getDensity(arg0: $FluidStack, arg1: $BlockAndTintGetter, arg2: $BlockPos_): number;
        getDensity(): number;
        getDensity(stack: $FluidStack): number;
        getTemperature(arg0: $FluidStack, arg1: $BlockAndTintGetter, arg2: $BlockPos_): number;
        getTemperature(): number;
        getTemperature(stack: $FluidStack): number;
        getViscosity(arg0: $FluidStack, arg1: $BlockAndTintGetter, arg2: $BlockPos_): number;
        getViscosity(stack: $FluidStack): number;
        getViscosity(): number;
        isLighterThanAir(arg0: $FluidStack, arg1: $BlockAndTintGetter, arg2: $BlockPos_): boolean;
        isLighterThanAir(): boolean;
        isLighterThanAir(stack: $FluidStack): boolean;
        getExplosionResistance(): number;
        getSlopeFindDistance(): number;
        getSlopeFindDistance(arg0: $LevelReader): number;
        getDropOff(): number;
        getDropOff(arg0: $LevelReader): number;
        /**
         * @deprecated
         */
        getFlowingTexture(arg0: $FluidStack, arg1: $BlockAndTintGetter, arg2: $BlockPos_): $ResourceLocation;
        getFlowingTexture(state: $FluidState, level: $BlockAndTintGetter, pos: $BlockPos_): $ResourceLocation;
        getFlowingTexture(stack: $FluidStack): $ResourceLocation;
        getFlowingTexture(): $ResourceLocation;
        getTranslationKey(): string;
        getTranslationKey(arg0: $FluidStack): string;
        getFlowingFluid(): $Fluid;
        getBucketItem(): $Item;
        /**
         * @deprecated
         */
        getSourceTexture(arg0: $FluidStack, arg1: $BlockAndTintGetter, arg2: $BlockPos_): $ResourceLocation;
        getSourceTexture(stack: $FluidStack): $ResourceLocation;
        getSourceTexture(): $ResourceLocation;
        getSourceTexture(state: $FluidState, level: $BlockAndTintGetter, pos: $BlockPos_): $ResourceLocation;
        getFillSound(): $SoundEvent;
        getFillSound(arg0: $FluidStack, arg1: $BlockAndTintGetter, arg2: $BlockPos_): $SoundEvent;
        getFillSound(stack: $FluidStack): $SoundEvent;
        getEmptySound(stack: $FluidStack): $SoundEvent;
        getEmptySound(arg0: $FluidStack, arg1: $BlockAndTintGetter, arg2: $BlockPos_): $SoundEvent;
        getEmptySound(): $SoundEvent;
        getSourceFluid(): $Fluid;
        getLuminosity(): number;
        getLuminosity(stack: $FluidStack): number;
        getLuminosity(arg0: $FluidStack, arg1: $BlockAndTintGetter, arg2: $BlockPos_): number;
        getBlock(): $LiquidBlock;
        getName(stack: $FluidStack): $Component;
        getName(): $Component;
        /**
         * @deprecated
         */
        getColor(arg0: $FluidStack, arg1: $BlockAndTintGetter, arg2: $BlockPos_): number;
        getColor(): number;
        getColor(state: $FluidState, level: $BlockAndTintGetter, pos: $BlockPos_): number;
        getColor(stack: $FluidStack): number;
        get explosionResistance(): number;
        get flowingFluid(): $Fluid;
        get bucketItem(): $Item;
        get sourceFluid(): $Fluid;
        get block(): $LiquidBlock;
    }
}
