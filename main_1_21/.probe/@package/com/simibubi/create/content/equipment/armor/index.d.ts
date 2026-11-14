import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_, $BlockEntityWithoutLevelRenderer } from "@package/net/minecraft/client/renderer";
import { $EquipmentSlot_, $EquipmentSlot, $LivingEntity, $HumanoidArm_, $Entity } from "@package/net/minecraft/world/entity";
import { $Minecraft, $DeltaTracker } from "@package/net/minecraft/client";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $IClientItemExtensions$FontContext_, $IClientItemExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $RenderPlayerEvent$Pre, $RenderArmEvent } from "@package/net/neoforged/neoforge/client/event";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $InteractionResult, $InteractionHand_, $Nameable, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $RegistrateItemModelProvider, $DataGenContext } from "@package/com/tterrag/registrate/providers";
import { $VarHandle } from "@package/java/lang/invoke";
import { $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $Item_, $Item, $ArmorItem, $ArmorItem$Type, $Item$Properties, $ArmorMaterial, $BlockItem, $ItemStack_, $ItemStack, $ArmorItem$Type_, $ArmorMaterial$Layer } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $EntityEvent$Size } from "@package/net/neoforged/neoforge/event/entity";
import { $Block, $Block_, $SimpleWaterloggedBlock } from "@package/net/minecraft/world/level/block";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $RenderLayer, $HumanoidArmorLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $Map, $List } from "@package/java/util";
import { $HumanoidModel$ArmPose, $Model, $EntityModel, $HumanoidModel } from "@package/net/minecraft/client/model";
import { $Supplier_, $Consumer_, $Function_, $Supplier } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Holder_, $Holder, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $KineticBlockEntityRenderer, $KineticBlockEntity, $HorizontalKineticBlock } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $LootParams$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $EntityRenderDispatcher, $RenderLayerParent, $EntityRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $DispenseItemBehavior } from "@package/net/minecraft/core/dispenser";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $ItemAttributeModifiers } from "@package/net/minecraft/world/item/component";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $PlayerTabOverlay } from "@package/net/minecraft/client/gui/components";
import { $PlayerTickEvent$Post, $EntityTickEvent$Pre } from "@package/net/neoforged/neoforge/event/tick";
import { $LayeredArmorItem } from "@package/com/simibubi/create/foundation/item";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LivingEvent$LivingVisibilityEvent, $LivingEquipmentChangeEvent, $LivingBreatheEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Gui, $Font, $LayeredDraw$Layer, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/equipment/armor" {
    export class $BacktankItem extends $BaseArmorItem {
        static getRemainingAir(arg0: $ItemStack_): number;
        static getWornBy(arg0: $Entity): $BacktankItem;
        getBlock(): $Block;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BAR_COLOR: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static SLOT: $EquipmentSlot;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        static TYPE: $ArmorItem$Type;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Holder_<$ArmorMaterial>, arg1: $Item$Properties, arg2: $ResourceLocation_, arg3: $Supplier_<$BacktankItem$BacktankBlockItem>);
        get block(): $Block;
    }
    export class $AllArmorMaterials {
        static register(arg0: $IEventBus): void;
        static CARDBOARD: $Holder<$ArmorMaterial>;
        static COPPER: $Holder<$ArmorMaterial>;
        constructor();
    }
    export class $TrimmableArmorModelGenerator {
        static generate<T extends $ArmorItem>(arg0: $DataGenContext<$Item_, T>, arg1: $RegistrateItemModelProvider): void;
        static TEXTURES_HANDLE: $VarHandle;
        constructor();
    }
    export class $BacktankItem$BacktankBlockItem extends $BlockItem {
        getActualItem(): $Item;
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
        constructor(arg0: $Block_, arg1: $Supplier_<$Item>, arg2: $Item$Properties);
        get actualItem(): $Item;
    }
    export class $CardboardArmorHandlerClient {
        static keepCacheAliveDesignDespiteNotRendering(arg0: $PlayerTickEvent$Post): void;
        static playerRendersAsBoxWhenSneaking(arg0: $RenderPlayerEvent$Pre): void;
        constructor();
    }
    export class $BacktankBlock extends $HorizontalKineticBlock implements $IBE<$BacktankBlockEntity>, $SimpleWaterloggedBlock, $SpecialBlockItemRequirement {
        hasAnalogOutputSignal(arg0: $BlockState_): boolean;
        getAnalogOutputSignal(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        getDrops(arg0: $BlockState_, arg1: $LootParams$Builder): $List<$ItemStack>;
        getBlockEntityType(): $BlockEntityType<$BacktankBlockEntity>;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        getBlockEntityClass(): $Class<$BacktankBlockEntity>;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getFluidState(arg0: $BlockState_): $FluidState;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$BacktankBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$BacktankBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$BacktankBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($BacktankBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $BacktankBlockEntity;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        static HORIZONTAL_FACING: $Property<$Direction>;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$BacktankBlockEntity>;
        get blockEntityClass(): $Class<$BacktankBlockEntity>;
    }
    export class $NetheriteDivingHandler {
        static onLivingEquipmentChange(arg0: $LivingEquipmentChangeEvent): void;
        static isNetheriteDivingHelmet(arg0: $ItemStack_): boolean;
        static isNetheriteBacktank(arg0: $ItemStack_): boolean;
        static isNetheriteArmor(arg0: $ItemStack_): boolean;
        static setFireImmune(arg0: $LivingEntity, arg1: boolean): void;
        static setBit(arg0: $LivingEntity, arg1: $EquipmentSlot_): void;
        static clearBit(arg0: $LivingEntity, arg1: $EquipmentSlot_): void;
        static NETHERITE_DIVING_BITS_KEY: string;
        static FIRE_IMMUNE_KEY: string;
        constructor();
    }
    export class $BaseArmorItem extends $ArmorItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Holder_<$ArmorMaterial>, arg1: $ArmorItem$Type_, arg2: $Item$Properties, arg3: $ResourceLocation_);
    }
    export class $BacktankBlockEntity extends $KineticBlockEntity implements $Nameable {
        setCapacityEnchantLevel(arg0: number): void;
        setAirLevel(arg0: number): void;
        getAirLevel(): number;
        getComparatorOutput(): number;
        static getDefaultName(arg0: $BlockState_): $Component;
        setComponentPatch(arg0: $DataComponentPatch_): void;
        getComponentPatch(): $DataComponentPatch;
        getName(): $Component;
        setCustomName(arg0: $Component_): void;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        getCustomName(): $Component;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        level: $Level;
        airLevelTimer: number;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        airLevel: number;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        set capacityEnchantLevel(value: number);
        get comparatorOutput(): number;
        get name(): $Component;
        get displayName(): $Component;
    }
    export class $BacktankArmorLayer<T extends $LivingEntity, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        static registerOn(arg0: $EntityRenderer<never>): void;
        static registerOnAll(arg0: $EntityRenderDispatcher): void;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<T, M>);
    }
    export class $BacktankRenderer extends $KineticBlockEntityRenderer<$BacktankBlockEntity> {
        static getShaftModel(arg0: $BlockState_): $PartialModel;
        static getCogsModel(arg0: $BlockState_): $PartialModel;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $CardboardArmorHandler {
        static playerHitboxChangesWhenHidingAsBox(arg0: $EntityEvent$Size): void;
        static playersStealthWhenWearingCardboard(arg0: $LivingEvent$LivingVisibilityEvent): void;
        static isCardboardArmor(arg0: $ItemStack_): boolean;
        static playerChangesEquipment(arg0: $LivingEquipmentChangeEvent): void;
        static mobsMayLoseTargetWhenItIsWearingCardboard(arg0: $EntityTickEvent$Pre): void;
        static testForStealth(arg0: $Entity): boolean;
        constructor();
    }
    export class $DivingHelmetItem extends $BaseArmorItem {
        static isWornBy(arg0: $Entity): boolean;
        static breatheUnderwater(arg0: $LivingBreatheEvent): void;
        static getWornItem(arg0: $Entity): $ItemStack;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static SLOT: $EquipmentSlot;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        static TYPE: $ArmorItem$Type;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Holder_<$ArmorMaterial>, arg1: $Item$Properties, arg2: $ResourceLocation_);
    }
    export class $NetheriteBacktankFirstPersonRenderer {
        static onRenderPlayerHand(arg0: $RenderArmEvent): void;
        static clientTick(): void;
        constructor();
    }
    export class $CardboardArmorStealthOverlay extends $Gui implements $IClientItemExtensions {
        renderHelmetOverlay(arg0: $ItemStack_, arg1: $Player, arg2: number, arg3: number, arg4: number): void;
        static clientTick(): void;
        getArmPose(arg0: $LivingEntity, arg1: $InteractionHand_, arg2: $ItemStack_): $HumanoidModel$ArmPose;
        getHumanoidArmorModel(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $EquipmentSlot_, arg3: $HumanoidModel<never>): $HumanoidModel<never>;
        renderHelmetOverlay(arg0: $ItemStack_, arg1: $Player, arg2: $GuiGraphics, arg3: $DeltaTracker): void;
        applyForgeHandTransform(arg0: $PoseStack, arg1: $LocalPlayer, arg2: $HumanoidArm_, arg3: $ItemStack_, arg4: number, arg5: number, arg6: number): boolean;
        getGenericArmorModel(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $EquipmentSlot_, arg3: $HumanoidModel<never>): $Model;
        setupModelAnimations(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $EquipmentSlot_, arg3: $Model, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        shouldBobAsEntity(arg0: $ItemStack_): boolean;
        shouldSpreadAsEntity(arg0: $ItemStack_): boolean;
        getArmorLayerTintColor(arg0: $ItemStack_, arg1: $LivingEntity, arg2: $ArmorMaterial$Layer, arg3: number, arg4: number): number;
        getDefaultDyeColor(arg0: $ItemStack_): number;
        getScopeOverlayTexture(arg0: $ItemStack_): $ResourceLocation;
        getCustomRenderer(): $BlockEntityWithoutLevelRenderer;
        getFont(arg0: $ItemStack_, arg1: $IClientItemExtensions$FontContext_): $Font;
        minecraft: $Minecraft;
        tabList: $PlayerTabOverlay;
        static SPYGLASS_SCOPE_LOCATION: $ResourceLocation;
        vignetteBrightness: number;
        rightHeight: number;
        displayHealth: number;
        leftHeight: number;
        constructor();
        get customRenderer(): $BlockEntityWithoutLevelRenderer;
    }
    export class $BacktankItem$Layered extends $BacktankItem implements $LayeredArmorItem {
        getArmorTextureLocation(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $ItemStack_, arg3: number): string;
        renderArmorPiece(arg0: $HumanoidArmorLayer<never, never, never>, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: $LivingEntity, arg4: $EquipmentSlot_, arg5: number, arg6: $HumanoidModel<never>, arg7: $ItemStack_): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BAR_COLOR: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static SLOT: $EquipmentSlot;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        static TYPE: $ArmorItem$Type;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Holder_<$ArmorMaterial>, arg1: $Item$Properties, arg2: $ResourceLocation_, arg3: $Supplier_<$BacktankItem$BacktankBlockItem>);
    }
    export class $DivingBootsItem extends $BaseArmorItem {
        static isWornBy(arg0: $Entity): boolean;
        static accelerateDescentUnderwater(arg0: $EntityTickEvent$Pre): void;
        static getWornItem(arg0: $Entity): $ItemStack;
        static getMovementMultiplier(arg0: $LivingEntity): $Vec3;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static SLOT: $EquipmentSlot;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        static TYPE: $ArmorItem$Type;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Holder_<$ArmorMaterial>, arg1: $Item$Properties, arg2: $ResourceLocation_);
    }
    export class $CardboardArmorItem extends $BaseArmorItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $ArmorItem$Type_, arg1: $Item$Properties);
    }
    export class $RemainingAirOverlay implements $LayeredDraw$Layer {
        static getDisplayedBacktank(arg0: $LocalPlayer): $ItemStack;
        render(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        static INSTANCE: $RemainingAirOverlay;
        constructor();
    }
    export class $BacktankUtil {
        static getAllWithAir(arg0: $LivingEntity): $List<$ItemStack>;
        static getAir(arg0: $ItemStack_): number;
        static consumeAir(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number): void;
        static maxAir(arg0: $ItemStack_): number;
        static maxAir(arg0: number): number;
        static canAbsorbDamage(arg0: $LivingEntity, arg1: number): boolean;
        static hasAirRemaining(arg0: $ItemStack_): boolean;
        static maxAirWithoutEnchants(): number;
        static addBacktankSupplier(arg0: $Function_<$LivingEntity, $List<$ItemStack>>): void;
        static isBarVisible(arg0: $ItemStack_, arg1: number): boolean;
        static getBarWidth(arg0: $ItemStack_, arg1: number): number;
        static getBarColor(arg0: $ItemStack_, arg1: number): number;
        constructor();
    }
}
