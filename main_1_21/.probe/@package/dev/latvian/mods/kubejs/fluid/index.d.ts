import { $BlockBuilder, $BlockRenderType_ } from "@package/dev/latvian/mods/kubejs/block";
import { $DataResult, $DynamicOps } from "@package/com/mojang/serialization";
import { $Item, $Rarity_ } from "@package/net/minecraft/world/item";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $FlowingFluid, $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $KubeColor, $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $FluidStack_, $BaseFlowingFluid$Properties, $FluidType, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $List } from "@package/java/util";
import { $ItemBuilder } from "@package/dev/latvian/mods/kubejs/item";
import { $FluidIngredient, $FluidIngredient_, $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $Consumer, $Consumer_ } from "@package/java/util/function";
import { $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $HolderSet_, $Registry } from "@package/net/minecraft/core";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $ReplacementMatch } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $RandomTickCallback } from "@package/dev/latvian/mods/kubejs/block/callback";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $SoundAction } from "@package/net/neoforged/neoforge/common";

declare module "@package/dev/latvian/mods/kubejs/fluid" {
    export class $ThickFluidBuilder extends $FluidBuilder {
        static WATER_COLOR: $KubeColor;
        bucketItem: $FluidBucketItemBuilder;
        registryKey: $ResourceKey<$Registry<$FlowingFluid>>;
        flowingFluid: $FlowingFluidBuilder;
        sourceLine: $SourceLine;
        fluidType: $FluidTypeBuilder;
        block: $FluidBlockBuilder;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $FluidWrapper$ReadFn<T> {
    }
    export interface $FluidWrapper$ReadFn<T> {
        read(registryOps: $DynamicOps<$Tag_>, reader: $StringReader): $DataResult<T>;
    }
    /**
     * Values that may be interpreted as {@link $FluidWrapper$ReadFn}.
     */
    export type $FluidWrapper$ReadFn_<T> = ((registryOps: $DynamicOps<$Tag>, reader: $StringReader) => $DataResult<T>);
    export class $FluidLike {
    }
    export interface $FluidLike extends $ReplacementMatch {
        getFluid(): $Fluid;
        getAmount(): number;
        copy(amount: number): $FluidLike;
        isEmpty(): boolean;
        get fluid(): $Fluid;
        get amount(): number;
        get empty(): boolean;
    }
    export class $FluidBuilder extends $BuilderBase<$FlowingFluid> {
        tickRate(tickRate: number): this;
        stillTexture(id: $ResourceLocation_): this;
        flowingTexture(id: $ResourceLocation_): this;
        renderType(l: $BlockRenderType_): this;
        explosionResistance(explosionResistance: number): this;
        noBlock(): this;
        noBucket(): this;
        tint(c: $KubeColor_): this;
        levelDecreasePerBlock(levelDecreasePerBlock: number): this;
        slopeFindDistance(slopeFindDistance: number): this;
        type(builder: $Consumer_<$FluidTypeBuilder>): this;
        createProperties(): $BaseFlowingFluid$Properties;
        translucent(): this;
        static WATER_COLOR: $KubeColor;
        bucketItem: $FluidBucketItemBuilder;
        registryKey: $ResourceKey<$Registry<$FlowingFluid>>;
        flowingFluid: $FlowingFluidBuilder;
        sourceLine: $SourceLine;
        fluidType: $FluidTypeBuilder;
        block: $FluidBlockBuilder;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $FlowingFluidBuilder extends $BuilderBase<$FlowingFluid> {
        registryKey: $ResourceKey<$Registry<$FlowingFluid>>;
        sourceLine: $SourceLine;
        fluidBuilder: $FluidBuilder;
        id: $ResourceLocation;
        constructor(b: $FluidBuilder);
    }
    export class $FluidBucketItemBuilder extends $ItemBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        fluidBuilder: $FluidBuilder;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(b: $FluidBuilder);
    }
    export class $FluidTypeBuilder extends $BuilderBase<$FluidType> {
        screenOverlayTexture(screenOverlayTexture: $ResourceLocation_): this;
        blockOverlayTexture(blockOverlayTexture: $ResourceLocation_): this;
        canDrown(canDrown: boolean): this;
        fallDistanceModifier(fallDistanceModifier: number): this;
        canConvertToSource(canConvertToSource: boolean): this;
        supportsBoating(supportsBoating: boolean): this;
        pathType(pathType: $PathType_): this;
        adjacentPathType(adjacentPathType: $PathType_): this;
        lightLevel(lightLevel: number): this;
        density(density: number): this;
        viscosity(viscosity: number): this;
        stillTexture(stillTexture: $ResourceLocation_): this;
        flowingTexture(flowingTexture: $ResourceLocation_): this;
        renderType(renderType: $BlockRenderType_): this;
        temperature(temperature: number): this;
        rarity(rarity: $Rarity_): this;
        descriptionId(descriptionId: string): this;
        tint(tint: $KubeColor_): this;
        sound(action: $SoundAction, sound: $SoundEvent_): this;
        motionScale(motionScale: number): this;
        canPushEntity(canPushEntity: boolean): this;
        canSwim(canSwim: boolean): this;
        canExtinguish(canExtinguish: boolean): this;
        canHydrate(canHydrate: boolean): this;
        addDripstoneDripping(chance: number, dripParticle: $ParticleOptions_, cauldron: $Block_, fillSound: $SoundEvent_): this;
        registryKey: $ResourceKey<$Registry<$FluidType>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    export class $FluidWrapper {
        static water(amount: number): $FluidStack;
        static water(): $FluidStack;
        /**
         * Returns an ingredient that accepts the given set of items under the given (optionally strict) component filter.
         */
        static ingredientOf(base: $HolderSet_<$Fluid>, data: $DataComponentMap_, strict: boolean): $FluidIngredient;
        static ingredientOf(of: $FluidIngredient_): $FluidIngredient;
        /**
         * Returns an ingredient that accepts the given set of fluids under the given component filter.
         */
        static ingredientOf(base: $HolderSet_<$Fluid>, data: $DataComponentMap_): $FluidIngredient;
        static ingredientOfString(registryOps: $DynamicOps<$Tag_>, s: string): $DataResult<$FluidIngredient>;
        static sizedIngredientOfString(registryOps: $DynamicOps<$Tag_>, s: string): $DataResult<$SizedFluidIngredient>;
        static readWithContext<T>(registryOps: $DynamicOps<$Tag_>, s: string, fn: $FluidWrapper$ReadFn_<T>, name: string): $DataResult<T>;
        static sizedIngredientOf(arg0: $FluidIngredient_, amount: number): $SizedFluidIngredient;
        static sizedIngredientOf(of: $SizedFluidIngredient): $SizedFluidIngredient;
        static readSizedIngredient(registryOps: $DynamicOps<$Tag_>, reader: $StringReader): $DataResult<$SizedFluidIngredient>;
        static getEmpty(): $FluidStack;
        static parseString(registryOps: $DynamicOps<$Tag_>, s: string): $DataResult<$FluidStack>;
        /**
         * Returns a FluidStack of the input, with the specified amount and data components
         */
        static of(o: $FluidStack_, amount: number, components: $DataComponentMap_): $FluidStack;
        /**
         * Returns a FluidStack of the input, with the specified data components
         */
        static of(o: $FluidStack_, components: $DataComponentMap_): $FluidStack;
        /**
         * Returns a FluidStack of the input
         */
        static of(o: $FluidStack_): $FluidStack;
        /**
         * Returns a FluidStack of the input, with the specified amount
         */
        static of(o: $FluidStack_, amount: number): $FluidStack;
        static read(registryOps: $DynamicOps<$Tag_>, reader: $StringReader): $DataResult<$FluidStack>;
        static getId(fluid: $Fluid_): $ResourceLocation;
        static getType(id: $ResourceLocation_): $Fluid;
        static exists(id: $ResourceLocation_): boolean;
        static getTypes(): $List<string>;
        static lava(amount: number): $FluidStack;
        static lava(): $FluidStack;
        static FLUID_TYPE_INFO: $TypeInfo;
        static EMPTY_STACK_RESULT: $DataResult<$FluidStack>;
        static EMPTY_SIZED_RESULT: $DataResult<$SizedFluidIngredient>;
        static TYPE_INFO: $TypeInfo;
        static EMPTY_SIZED: $SizedFluidIngredient;
        static INGREDIENT_TYPE_INFO: $TypeInfo;
        static SIZED_INGREDIENT_TYPE_INFO: $TypeInfo;
        static EMPTY_INGREDIENT_RESULT: $DataResult<$FluidIngredient>;
        static get empty(): $FluidStack;
        static get types(): $List<string>;
    }
    export interface $FluidWrapper {
    }
    export class $ThinFluidBuilder extends $FluidBuilder {
        static WATER_COLOR: $KubeColor;
        bucketItem: $FluidBucketItemBuilder;
        registryKey: $ResourceKey<$Registry<$FlowingFluid>>;
        flowingFluid: $FlowingFluidBuilder;
        sourceLine: $SourceLine;
        fluidType: $FluidTypeBuilder;
        block: $FluidBlockBuilder;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $FluidBlockBuilder extends $BlockBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        fluidBuilder: $FluidBuilder;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(b: $FluidBuilder);
    }
}
