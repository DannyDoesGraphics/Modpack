import { $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item_, $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Spliterator, $Iterator, $List, $Map, $List_, $Collection } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $HolderSet, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $Enum, $Iterable } from "@package/java/lang";
import { $Triplet } from "@package/net/mehvahdjukaar/moonlight/api/misc";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/mehvahdjukaar/moonlight/api/fluids" {
    export class $FluidContainerList implements $Iterable<$FluidContainerList$Category> {
        getCategories(): $List<$FluidContainerList$Category>;
        getPossibleFilled(): $Collection<$Item>;
        getFilled(arg0: $Item_): ($Item) | undefined;
        getEmpty(arg0: $Item_): ($Item) | undefined;
        getCategoryFromEmpty(arg0: $Item_): ($FluidContainerList$Category) | undefined;
        getCategoryFromFilled(arg0: $Item_): ($FluidContainerList$Category) | undefined;
        getPossibleEmpty(): $Collection<$Item>;
        iterator(): $Iterator<$FluidContainerList$Category>;
        spliterator(): $Spliterator<$FluidContainerList$Category>;
        forEach(arg0: $Consumer_<$FluidContainerList$Category>): void;
        static CODEC: $Codec<$FluidContainerList>;
        constructor(arg0: $List_<$FluidContainerList$Category>);
        constructor();
        [Symbol.iterator](): Iterator<$FluidContainerList$Category>
        get categories(): $List<$FluidContainerList$Category>;
        get possibleFilled(): $Collection<$Item>;
        get possibleEmpty(): $Collection<$Item>;
    }
    export class $SoftFluid {
        isFood(): boolean;
        getFlowingTexture(): $ResourceLocation;
        getContainerList(): $FluidContainerList;
        getEmptyContainer(arg0: $Item_): ($Item) | undefined;
        afterInit(): void;
        getEquivalentFluids(): $HolderSet<$Fluid>;
        static getRenderingData(arg0: $ResourceLocation_): $Triplet<$ResourceLocation, $ResourceLocation, number>;
        static getFluidSpecificAttributes(arg0: $Fluid_): $Pair<number, $Component>;
        getTextureOverride(): $ResourceLocation;
        getFoodProvider(): $FoodProvider;
        getVanillaFluid(): $Holder<$Fluid>;
        getPreservedComponents(): $HolderSet<$DataComponentType<never>>;
        /**
         * @deprecated
         */
        isEmptyFluid(): boolean;
        getFilledContainer(arg0: $Item_): ($Item) | undefined;
        getEmissivity(): number;
        getAverageTextureTintColor(): number;
        getTintMethod(): $SoftFluid$TintMethod;
        isColored(): boolean;
        getLuminosity(): number;
        getStillTexture(): $ResourceLocation;
        getTintColor(): number;
        getTranslatedName(): $Component;
        isEnabled(): boolean;
        isEquivalent(arg0: $Holder_<$Fluid>): boolean;
        static BOTTLE_COUNT: number;
        isGenerated: boolean;
        static CODEC: $Codec<$SoftFluid>;
        static BUCKET_COUNT: number;
        static HOLDER_CODEC: $Codec<$Holder<$SoftFluid>>;
        static REFERENCE_CODEC: $Codec<$Holder<$SoftFluid>>;
        static TRANSLATABLE_COMPONENT: $Codec<$Component>;
        static BOWL_COUNT: number;
        static WATER_BUCKET_COUNT: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$SoftFluid>>;
        constructor(arg0: $Holder_<$Fluid>);
        get food(): boolean;
        get flowingTexture(): $ResourceLocation;
        get containerList(): $FluidContainerList;
        get equivalentFluids(): $HolderSet<$Fluid>;
        get textureOverride(): $ResourceLocation;
        get foodProvider(): $FoodProvider;
        get vanillaFluid(): $Holder<$Fluid>;
        get preservedComponents(): $HolderSet<$DataComponentType<never>>;
        get emptyFluid(): boolean;
        get emissivity(): number;
        get averageTextureTintColor(): number;
        get tintMethod(): $SoftFluid$TintMethod;
        get colored(): boolean;
        get luminosity(): number;
        get stillTexture(): $ResourceLocation;
        get tintColor(): number;
        get translatedName(): $Component;
        get enabled(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SoftFluid}.
     */
    export type $SoftFluid_ = RegistryTypes.MoonlightSoftFluid;
    export class $FluidContainerList$Category {
        getEmptyContainer(): $Item;
        getFilledItems(): $List<$Item>;
        getFirstFilled(): ($Item) | undefined;
        getFillSound(): $SoundEvent;
        getEmptySound(): $SoundEvent;
        getCapacity(): number;
        isEmpty(): boolean;
        /**
         * @deprecated
         */
        getAmount(): number;
        static CODEC: $Codec<$FluidContainerList$Category>;
        get emptyContainer(): $Item;
        get filledItems(): $List<$Item>;
        get firstFilled(): ($Item) | undefined;
        get fillSound(): $SoundEvent;
        get emptySound(): $SoundEvent;
        get capacity(): number;
        get empty(): boolean;
        get amount(): number;
    }
    export interface $SoftFluid extends RegistryMarked<RegistryTypes.MoonlightSoftFluidTag, RegistryTypes.MoonlightSoftFluid> {}
    export class $SoftFluid$TintMethod extends $Enum<$SoftFluid$TintMethod> implements $StringRepresentable {
        appliesToFlowing(): boolean;
        appliesToStill(): boolean;
        static values(): $SoftFluid$TintMethod[];
        static valueOf(arg0: string): $SoftFluid$TintMethod;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static FLOWING: $SoftFluid$TintMethod;
        static CODEC: $Codec<$SoftFluid$TintMethod>;
        static STILL_AND_FLOWING: $SoftFluid$TintMethod;
        static NO_TINT: $SoftFluid$TintMethod;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SoftFluid$TintMethod}.
     */
    export type $SoftFluid$TintMethod_ = "no_tint" | "flowing" | "still_and_flowing";
    export class $FoodProvider {
        getFoodItem(): $Item;
        getDivider(): number;
        isEmpty(): boolean;
        static create(arg0: $Item_, arg1: number): $FoodProvider;
        consume(arg0: $Player, arg1: $Level_, arg2: $Consumer_<$ItemStack>): boolean;
        static CODEC: $Codec<$FoodProvider>;
        static CUSTOM_PROVIDERS: $Map<$Item, $FoodProvider>;
        static EMPTY: $FoodProvider;
        get foodItem(): $Item;
        get divider(): number;
        get empty(): boolean;
    }
}
