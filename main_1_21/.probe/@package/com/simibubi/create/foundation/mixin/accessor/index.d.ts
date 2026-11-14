import { $ShapedRecipePattern } from "@package/net/minecraft/world/item/crafting";
import { $EntityType_, $EquipmentSlot_, $EntityType } from "@package/net/minecraft/world/entity";
import { $FluidInteractionRegistry$InteractionInformation, $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $List, $Map_, $Map } from "@package/java/util";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $HumanoidModel } from "@package/net/minecraft/client/model";
import { $Function } from "@package/java/util/function";
import { $Reference2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_, $Holder$Reference, $NonNullList } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ItemModelGenerators$TrimModelData } from "@package/net/minecraft/data/models";
import { $FontSet } from "@package/net/minecraft/client/gui/font";
import { $Iterable } from "@package/java/lang";
import { $EntityTickList } from "@package/net/minecraft/world/level/entity";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $EntityRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $Item, $ItemStack_, $ProjectileItem, $ItemStack, $ProjectileItem$DispenseConfig } from "@package/net/minecraft/world/item";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $DispenseItemBehavior } from "@package/net/minecraft/core/dispenser";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $SubtitleOverlay } from "@package/net/minecraft/client/gui/components";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $GameTestInfo } from "@package/net/minecraft/gametest/framework";
import { $IntegerProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $PotionBrewing$Mix, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder_, $LootItemCondition$Builder } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/foundation/mixin/accessor" {
    export class $FlowingFluidAccessor {
    }
    export interface $FlowingFluidAccessor {
        create$getNewLiquid(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $FluidState;
    }
    /**
     * Values that may be interpreted as {@link $FlowingFluidAccessor}.
     */
    export type $FlowingFluidAccessor_ = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState) => $FluidState);
    export class $FallingBlockEntityAccessor {
        static create$callInit(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: $BlockState_): $FallingBlockEntity;
    }
    export interface $FallingBlockEntityAccessor {
    }
    export class $ShapedRecipeAccessor {
    }
    export interface $ShapedRecipeAccessor {
        create$getPattern(): $ShapedRecipePattern;
    }
    /**
     * Values that may be interpreted as {@link $ShapedRecipeAccessor}.
     */
    export type $ShapedRecipeAccessor_ = (() => $ShapedRecipePattern);
    export class $StateHolderAccessor<O, S> {
    }
    export interface $StateHolderAccessor<O, S> {
        getOwner(): O;
        get owner(): O;
    }
    /**
     * Values that may be interpreted as {@link $StateHolderAccessor}.
     */
    export type $StateHolderAccessor_<O, S> = (() => O);
    export class $PotionBrewingAccessor {
    }
    export interface $PotionBrewingAccessor {
        create$getPotionMixes(): $List<$PotionBrewing$Mix<$Potion>>;
        create$getContainerMixes(): $List<$PotionBrewing$Mix<$Item>>;
        create$isContainer(arg0: $ItemStack_): boolean;
    }
    export class $DispenserBlockAccessor {
    }
    export interface $DispenserBlockAccessor {
        create$callGetDispenseMethod(arg0: $Level_, arg1: $ItemStack_): $DispenseItemBehavior;
    }
    /**
     * Values that may be interpreted as {@link $DispenserBlockAccessor}.
     */
    export type $DispenserBlockAccessor_ = ((arg0: $Level, arg1: $ItemStack) => $DispenseItemBehavior);
    export class $FontAccessor {
    }
    export interface $FontAccessor {
        create$getFonts(): $Function<$ResourceLocation, $FontSet>;
    }
    /**
     * Values that may be interpreted as {@link $FontAccessor}.
     */
    export type $FontAccessor_ = (() => $Function<$ResourceLocation, $FontSet>);
    export class $GuiAccessor {
    }
    export interface $GuiAccessor {
        create$getSubtitleOverlay(): $SubtitleOverlay;
        create$getToolHighlightTimer(): number;
        create$renderTextureOverlay(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number): void;
    }
    export class $ProjectileDispenseBehaviorAccessor {
    }
    export interface $ProjectileDispenseBehaviorAccessor {
        create$getProjectileItem(): $ProjectileItem;
        create$getDispenseConfig(): $ProjectileItem$DispenseConfig;
    }
    export class $MinecartFurnaceAccessor {
    }
    export interface $MinecartFurnaceAccessor {
        create$getFuel(): number;
        create$setFuel(arg0: number): void;
    }
    export class $NbtAccounterAccessor {
    }
    export interface $NbtAccounterAccessor {
        create$getUsage(): number;
    }
    /**
     * Values that may be interpreted as {@link $NbtAccounterAccessor}.
     */
    export type $NbtAccounterAccessor_ = (() => number);
    export class $MobEffectInstanceAccessor {
    }
    export interface $MobEffectInstanceAccessor {
        create$getHiddenEffect(): $MobEffectInstance;
    }
    /**
     * Values that may be interpreted as {@link $MobEffectInstanceAccessor}.
     */
    export type $MobEffectInstanceAccessor_ = (() => $MobEffectInstance);
    export class $ItemModelGeneratorsAccessor {
        static create$getGENERATED_TRIM_MODELS(): $List<$ItemModelGenerators$TrimModelData>;
    }
    export interface $ItemModelGeneratorsAccessor {
    }
    export class $ItemStackHandlerAccessor {
    }
    export interface $ItemStackHandlerAccessor {
        create$getStacks(): $NonNullList<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $ItemStackHandlerAccessor}.
     */
    export type $ItemStackHandlerAccessor_ = (() => $NonNullList<$ItemStack_>);
    export class $MappedRegistryAccessor<T> {
    }
    export interface $MappedRegistryAccessor<T> {
        getByValue(): $Map<T, $Holder$Reference<T>>;
        getToId(): $Reference2IntMap<T>;
        get byValue(): $Map<T, $Holder$Reference<T>>;
        get toId(): $Reference2IntMap<T>;
    }
    export class $LevelRendererAccessor {
    }
    export interface $LevelRendererAccessor {
        create$getCullingFrustum(): $Frustum;
        create$getCapturedFrustum(): $Frustum;
    }
    export class $CropBlockAccessor {
    }
    export interface $CropBlockAccessor {
        create$callGetAgeProperty(): $IntegerProperty;
    }
    /**
     * Values that may be interpreted as {@link $CropBlockAccessor}.
     */
    export type $CropBlockAccessor_ = (() => $IntegerProperty);
    export class $ConcretePowderBlockAccessor {
    }
    export interface $ConcretePowderBlockAccessor {
        create$getConcrete(): $Block;
    }
    /**
     * Values that may be interpreted as {@link $ConcretePowderBlockAccessor}.
     */
    export type $ConcretePowderBlockAccessor_ = (() => $Block_);
    export class $HumanoidArmorLayerAccessor {
        static create$getArmorLocationCache(): $Map<string, $ResourceLocation>;
    }
    export interface $HumanoidArmorLayerAccessor {
        create$getInnerModel(): $HumanoidModel<never>;
        create$callSetPartVisibility(arg0: $HumanoidModel<never>, arg1: $EquipmentSlot_): void;
        create$getOuterModel(): $HumanoidModel<never>;
    }
    export class $UseOnContextAccessor {
    }
    export interface $UseOnContextAccessor {
        create$getHitResult(): $BlockHitResult;
    }
    /**
     * Values that may be interpreted as {@link $UseOnContextAccessor}.
     */
    export type $UseOnContextAccessor_ = (() => $BlockHitResult);
    export class $MinecraftAccessor {
    }
    export interface $MinecraftAccessor {
        create$setMissTime(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftAccessor}.
     */
    export type $MinecraftAccessor_ = ((arg0: number) => void);
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        create$callSpawnItemParticles(arg0: $ItemStack_, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityAccessor}.
     */
    export type $LivingEntityAccessor_ = ((arg0: $ItemStack, arg1: number) => void);
    export class $SystemReportAccessor {
        static getOPERATING_SYSTEM(): string;
        static getJAVA_VERSION(): string;
        static get OPERATING_SYSTEM(): string;
        static get JAVA_VERSION(): string;
    }
    export interface $SystemReportAccessor {
        getEntries(): $Map<string, string>;
        get entries(): $Map<string, string>;
    }
    /**
     * Values that may be interpreted as {@link $SystemReportAccessor}.
     */
    export type $SystemReportAccessor_ = (() => $Map_<string, string>);
    export class $MouseHandlerAccessor {
    }
    export interface $MouseHandlerAccessor {
        create$setXPos(arg0: number): void;
        create$setYPos(arg0: number): void;
    }
    export class $GameTestHelperAccessor {
    }
    export interface $GameTestHelperAccessor {
        getTestInfo(): $GameTestInfo;
        getFinalCheckAdded(): boolean;
        setFinalCheckAdded(arg0: boolean): void;
        get testInfo(): $GameTestInfo;
    }
    export class $ServerLevelAccessor {
    }
    export interface $ServerLevelAccessor {
        create$getEntityTickList(): $EntityTickList;
    }
    /**
     * Values that may be interpreted as {@link $ServerLevelAccessor}.
     */
    export type $ServerLevelAccessor_ = (() => $EntityTickList);
    export class $BlockBehaviourAccessor {
    }
    export interface $BlockBehaviourAccessor {
        create$getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviourAccessor}.
     */
    export type $BlockBehaviourAccessor_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos, arg3: $CollisionContext) => $VoxelShape);
    export class $AgeableListModelAccessor {
    }
    export interface $AgeableListModelAccessor {
        create$callHeadParts(): $Iterable<$ModelPart>;
        create$callBodyParts(): $Iterable<$ModelPart>;
    }
    export class $FluidInteractionRegistryAccessor {
        static getInteractions(): $Map<$FluidType, $List<$FluidInteractionRegistry$InteractionInformation>>;
        static get interactions(): $Map<$FluidType, $List<$FluidInteractionRegistry$InteractionInformation>>;
    }
    export interface $FluidInteractionRegistryAccessor {
    }
    export class $TimerAccessor {
    }
    export interface $TimerAccessor {
        getDeltaTickResidual(): number;
        get deltaTickResidual(): number;
    }
    /**
     * Values that may be interpreted as {@link $TimerAccessor}.
     */
    export type $TimerAccessor_ = (() => number);
    export class $ItemFrameAccessor {
    }
    export interface $ItemFrameAccessor {
        create$getFrameItemStack(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $ItemFrameAccessor}.
     */
    export type $ItemFrameAccessor_ = (() => $ItemStack_);
    export class $BlockLootSubProviderAccessor {
    }
    export interface $BlockLootSubProviderAccessor {
        create$hasSilkTouch(): $LootItemCondition$Builder;
    }
    /**
     * Values that may be interpreted as {@link $BlockLootSubProviderAccessor}.
     */
    export type $BlockLootSubProviderAccessor_ = (() => $LootItemCondition$Builder_);
    export class $EntityRenderDispatcherAccessor {
    }
    export interface $EntityRenderDispatcherAccessor {
        create$getRenderers(): $Map<$EntityType<never>, $EntityRenderer<never>>;
    }
    /**
     * Values that may be interpreted as {@link $EntityRenderDispatcherAccessor}.
     */
    export type $EntityRenderDispatcherAccessor_ = (() => $Map_<$EntityType_<never>, $EntityRenderer<never>>);
}
