import { $FogRenderer$FogMode_, $BlockEntityWithoutLevelRenderer } from "@package/net/minecraft/client/renderer";
import { $EquipmentSlot_, $Entity, $LivingEntity, $HumanoidArm_ } from "@package/net/minecraft/world/entity";
import { $FluidType_, $FluidStack_, $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $Minecraft, $DeltaTracker, $Camera } from "@package/net/minecraft/client";
import { $HumanoidModel$ArmPose, $Model, $HumanoidModel } from "@package/net/minecraft/client/model";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Holder_, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $FogShape_ } from "@package/com/mojang/blaze3d/shaders";
import { $Enum } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $BlockAndTintGetter, $LevelReader, $Level_ } from "@package/net/minecraft/world/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Item_, $Item, $ItemStack_, $ArmorMaterial$Layer } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $MobEffect_, $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EffectRenderingInventoryScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Gui, $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $HitResult } from "@package/net/minecraft/world/phys";
import { $Vector3d, $Vector3f } from "@package/org/joml";

declare module "@package/net/neoforged/neoforge/client/extensions/common" {
    /**
     * Allows registering client extensions for various game objects.
     * 
     * This event is not cancellable.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $RegisterClientExtensionsEvent extends $Event implements $IModBusEvent {
        registerBlock(arg0: $IClientBlockExtensions, ...arg1: $Holder_<$Block>[]): void;
        registerBlock(arg0: $IClientBlockExtensions, ...arg1: $Block_[]): void;
        registerItem(arg0: $IClientItemExtensions, ...arg1: $Item_[]): void;
        registerItem(arg0: $IClientItemExtensions, ...arg1: $Holder_<$Item>[]): void;
        /**
         * @return whether a `IClientMobEffectExtensions` has been registered for the given `MobEffect`
         */
        isMobEffectRegistered(mobEffect: $MobEffect_): boolean;
        /**
         * @return whether a `IClientFluidTypeExtensions` has been registered for the given `FluidType`
         */
        isFluidTypeRegistered(fluidType: $FluidType_): boolean;
        /**
         * @return whether a `IClientItemExtensions` has been registered for the given `Item`
         */
        isItemRegistered(item: $Item_): boolean;
        registerMobEffect(arg0: $IClientMobEffectExtensions, ...arg1: $MobEffect_[]): void;
        registerMobEffect(arg0: $IClientMobEffectExtensions, ...arg1: $Holder_<$MobEffect>[]): void;
        registerFluidType(arg0: $IClientFluidTypeExtensions, ...arg1: $FluidType_[]): void;
        registerFluidType(arg0: $IClientFluidTypeExtensions, ...arg1: $Holder_<$FluidType>[]): void;
        /**
         * @return whether a `IClientBlockExtensions` has been registered for the given `Block`
         */
        isBlockRegistered(block: $Block_): boolean;
    }
    /**
     * Client-only extensions to `FluidType`.
     */
    export class $IClientFluidTypeExtensions {
        static of(state: $FluidState): $IClientFluidTypeExtensions;
        static of(fluid: $Fluid_): $IClientFluidTypeExtensions;
        static of(type: $FluidType_): $IClientFluidTypeExtensions;
        static DEFAULT: $IClientFluidTypeExtensions;
    }
    export interface $IClientFluidTypeExtensions {
        /**
         * Returns the reference of the texture to apply to a source fluid.
         * 
         * This should return a reference to the texture and not the actual
         * texture itself (e.g. `minecraft:block/water_still` will point to
         * `assets/minecraft/textures/block/water_still.png`).
         * 
         * Important: This method should only return `null` for `Fluids#EMPTY`.
         * All other implementations must define this property.
         */
        getOverlayTexture(state: $FluidState, getter: $BlockAndTintGetter, pos: $BlockPos_): $ResourceLocation;
        /**
         * Returns the reference of the texture to apply to a source fluid.
         * 
         * This should return a reference to the texture and not the actual
         * texture itself (e.g. `minecraft:block/water_still` will point to
         * `assets/minecraft/textures/block/water_still.png`).
         * 
         * Important: This method should only return `null` for `Fluids#EMPTY`.
         * All other implementations must define this property.
         */
        getOverlayTexture(stack: $FluidStack_): $ResourceLocation;
        /**
         * Returns the reference of the texture to apply to a source fluid.
         * 
         * This should return a reference to the texture and not the actual
         * texture itself (e.g. `minecraft:block/water_still` will point to
         * `assets/minecraft/textures/block/water_still.png`).
         * 
         * Important: This method should only return `null` for `Fluids#EMPTY`.
         * All other implementations must define this property.
         */
        getOverlayTexture(): $ResourceLocation;
        /**
         * Called to allow rendering custom quads for a fluid during chunk meshing. You may replace the fluid
         * rendering entirely, or return false to allow vanilla's fluid rendering to also run.
         * 
         * Note: this method will be called once for every fluid block during chunk meshing, so any logic
         * here needs to be performant.
         */
        renderFluid(fluidState: $FluidState, getter: $BlockAndTintGetter, pos: $BlockPos_, vertexConsumer: $VertexConsumer, blockState: $BlockState_): boolean;
        /**
         * Returns the reference of the texture to apply to a source fluid.
         * 
         * This should return a reference to the texture and not the actual
         * texture itself (e.g. `minecraft:block/water_still` will point to
         * `assets/minecraft/textures/block/water_still.png`).
         * 
         * Important: This method should only return `null` for `Fluids#EMPTY`.
         * All other implementations must define this property.
         */
        getFlowingTexture(stack: $FluidStack_): $ResourceLocation;
        /**
         * Returns the reference of the texture to apply to a source fluid.
         * 
         * This should return a reference to the texture and not the actual
         * texture itself (e.g. `minecraft:block/water_still` will point to
         * `assets/minecraft/textures/block/water_still.png`).
         * 
         * Important: This method should only return `null` for `Fluids#EMPTY`.
         * All other implementations must define this property.
         */
        getFlowingTexture(state: $FluidState, getter: $BlockAndTintGetter, pos: $BlockPos_): $ResourceLocation;
        /**
         * Returns the reference of the texture to apply to a source fluid.
         * 
         * This should return a reference to the texture and not the actual
         * texture itself (e.g. `minecraft:block/water_still` will point to
         * `assets/minecraft/textures/block/water_still.png`).
         * 
         * Important: This method should only return `null` for `Fluids#EMPTY`.
         * All other implementations must define this property.
         */
        getFlowingTexture(): $ResourceLocation;
        /**
         * Modifies the color of the fog when the camera is within the fluid.
         * 
         * The result expects a three float vector representing the red, green,
         * and blue channels respectively. Each channel should be between [0,1].
         */
        modifyFogColor(camera: $Camera, partialTick: number, level: $ClientLevel, renderDistance: number, darkenWorldAmount: number, fluidFogColor: $Vector3f): $Vector3f;
        /**
         * Modifies how the fog is currently being rendered when the camera is
         * within a fluid.
         */
        modifyFogRender(camera: $Camera, mode: $FogRenderer$FogMode_, renderDistance: number, partialTick: number, nearDistance: number, farDistance: number, shape: $FogShape_): void;
        /**
         * Returns the location of the texture to apply to the camera when it is
         * within the fluid. If no location is specified, no overlay will be applied.
         * 
         * This should return a location to the texture and not a reference
         * (e.g. `minecraft:textures/misc/underwater.png` will use the texture
         * at `assets/minecraft/textures/misc/underwater.png`).
         */
        getRenderOverlayTexture(mc: $Minecraft): $ResourceLocation;
        /**
         * Returns the reference of the texture to apply to a source fluid.
         * 
         * This should return a reference to the texture and not the actual
         * texture itself (e.g. `minecraft:block/water_still` will point to
         * `assets/minecraft/textures/block/water_still.png`).
         * 
         * Important: This method should only return `null` for `Fluids#EMPTY`.
         * All other implementations must define this property.
         */
        getStillTexture(state: $FluidState, getter: $BlockAndTintGetter, pos: $BlockPos_): $ResourceLocation;
        /**
         * Returns the reference of the texture to apply to a source fluid.
         * 
         * This should return a reference to the texture and not the actual
         * texture itself (e.g. `minecraft:block/water_still` will point to
         * `assets/minecraft/textures/block/water_still.png`).
         * 
         * Important: This method should only return `null` for `Fluids#EMPTY`.
         * All other implementations must define this property.
         */
        getStillTexture(stack: $FluidStack_): $ResourceLocation;
        /**
         * Returns the reference of the texture to apply to a source fluid.
         * 
         * This should return a reference to the texture and not the actual
         * texture itself (e.g. `minecraft:block/water_still` will point to
         * `assets/minecraft/textures/block/water_still.png`).
         * 
         * Important: This method should only return `null` for `Fluids#EMPTY`.
         * All other implementations must define this property.
         */
        getStillTexture(): $ResourceLocation;
        /**
         * Returns the tint applied to the fluid's textures.
         * 
         * The result represents a 32-bit integer where each 8-bits represent
         * the alpha, red, green, and blue channel respectively.
         */
        getTintColor(state: $FluidState, getter: $BlockAndTintGetter, pos: $BlockPos_): number;
        /**
         * Returns the tint applied to the fluid's textures.
         * 
         * The result represents a 32-bit integer where each 8-bits represent
         * the alpha, red, green, and blue channel respectively.
         */
        getTintColor(stack: $FluidStack_): number;
        /**
         * Returns the tint applied to the fluid's textures.
         * 
         * The result represents a 32-bit integer where each 8-bits represent
         * the alpha, red, green, and blue channel respectively.
         */
        getTintColor(): number;
        /**
         * Renders `#getRenderOverlayTexture` onto the camera when within
         * the fluid.
         */
        renderOverlay(mc: $Minecraft, poseStack: $PoseStack): void;
    }
    /**
     * Client-only extensions to `Block`.
     */
    export class $IClientBlockExtensions {
        static of(block: $Block_): $IClientBlockExtensions;
        static of(state: $BlockState_): $IClientBlockExtensions;
        static DEFAULT: $IClientBlockExtensions;
    }
    export interface $IClientBlockExtensions {
        /**
         * Play breaking sound(s) when the block is destroyed. This allows playing sounds dependent on BE data
         * as it is called before the block and BE are actually removed on the client.
         */
        playBreakSound(state: $BlockState_, level: $Level_, pos: $BlockPos_): boolean;
        /**
         * NOT CURRENTLY IMPLEMENTED
         * 
         * Use this to change the fog color used when the entity is "inside" a material.
         * Vec3d is used here as "r/g/b" 0 - 1 values.
         */
        getFogColor(state: $BlockState_, level: $LevelReader, pos: $BlockPos_, entity: $Entity, originalColor: $Vector3d, partialTick: number): $Vector3d;
        /**
         * Returns true if the breaking particles created from the `BlockState` passed should be tinted with biome colors.
         */
        areBreakingParticlesTinted(state: $BlockState_, level: $ClientLevel, pos: $BlockPos_): boolean;
        /**
         * Spawn a digging particle effect in the level, this is a wrapper
         * around EffectRenderer.addBlockHitEffects to allow the block more
         * control over the particles. Useful when you have entirely different
         * texture sheets for different sides/locations in the level.
         */
        addHitEffects(state: $BlockState_, level: $Level_, target: $HitResult, manager: $ParticleEngine): boolean;
        /**
         * Spawn particles for when the block is destroyed. Due to the nature
         * of how this is invoked, the x/y/z locations are not always guaranteed
         * to host your block. So be sure to do proper sanity checks before assuming
         * that the location is this block.
         */
        addDestroyEffects(state: $BlockState_, Level: $Level_, pos: $BlockPos_, manager: $ParticleEngine): boolean;
    }
    /**
     * Client-only extensions to `Item`.
     */
    export class $IClientItemExtensions {
        static of(stack: $ItemStack_): $IClientItemExtensions;
        static of(item: $Item_): $IClientItemExtensions;
        static DEFAULT: $IClientItemExtensions;
    }
    export interface $IClientItemExtensions {
        /**
         * This method returns an ArmPose that can be defined using the `ArmPose#create(String, boolean, IArmPoseTransformer)` method.
         * This allows for creating custom item use animations.
         */
        getArmPose(entityLiving: $LivingEntity, hand: $InteractionHand_, itemStack: $ItemStack_): $HumanoidModel$ArmPose;
        /**
         * Queries the humanoid armor model for this item when it's equipped.
         */
        getHumanoidArmorModel(livingEntity: $LivingEntity, itemStack: $ItemStack_, equipmentSlot: $EquipmentSlot_, original: $HumanoidModel<never>): $HumanoidModel<never>;
        /**
         * @deprecated
         */
        renderHelmetOverlay(stack: $ItemStack_, player: $Player, width: number, height: number, partialTick: number): void;
        /**
         * Called when the client starts rendering the HUD, and is wearing this item in the helmet slot.
         * 
         * This is where pumpkins would render their overlay.
         */
        renderHelmetOverlay(stack: $ItemStack_, player: $Player, guiGraphics: $GuiGraphics, deltaTracker: $DeltaTracker): void;
        /**
         * Called right before when client applies transformations to item in hand and render it.
         */
        applyForgeHandTransform(poseStack: $PoseStack, player: $LocalPlayer, arm: $HumanoidArm_, itemInHand: $ItemStack_, partialTick: number, equipProcess: number, swingProcess: number): boolean;
        /**
         * Queries the armor model for this item when it's equipped. Useful in place of
         * `#getHumanoidArmorModel(LivingEntity, ItemStack, EquipmentSlot, HumanoidModel)` for wrapping the original
         * model or returning anything non-standard.
         * 
         * If you override this method you are responsible for copying any properties you care about from the original model.
         */
        getGenericArmorModel(livingEntity: $LivingEntity, itemStack: $ItemStack_, equipmentSlot: $EquipmentSlot_, original: $HumanoidModel<never>): $Model;
        /**
         * Called when an armor piece is about to be rendered, allowing parts of the model to be animated or changed.
         */
        setupModelAnimations(livingEntity: $LivingEntity, itemStack: $ItemStack_, equipmentSlot: $EquipmentSlot_, model: $Model, limbSwing: number, limbSwingAmount: number, partialTick: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        /**
         * @return Whether the item should bob when rendered in the world as an entity
         */
        shouldBobAsEntity(stack: $ItemStack_): boolean;
        /**
         * @return Whether the item should bob when rendered in the world as an entity
         */
        shouldSpreadAsEntity(stack: $ItemStack_): boolean;
        /**
         * Called when armor layers are rendered by `HumanoidArmorLayer`.
         * 
         * Allows custom dye colors to be specified per-layer; default vanilla behavior allows for only a single dye color
         * (specified by the `DataComponents#DYED_COLOR` data component) for all layers.
         * 
         * Returning 0 here will cause rendering of this layer to be skipped entirely; this is recommended if the layer
         * doesn't need to be rendered for a particular armor slot.
         */
        getArmorLayerTintColor(stack: $ItemStack_, entity: $LivingEntity, layer: $ArmorMaterial$Layer, layerIdx: number, fallbackColor: number): number;
        /**
         * Called once per render pass of equipped armor items, regardless of the number of layers; the return value of this
         * method is passed to `#getArmorLayerTintColor(ItemStack, LivingEntity, ArmorMaterial.Layer, int, int)` as
         * the `fallbackColor` parameter.
         * 
         * You can override this method for your custom armor item to provide an alternative default color for the item when
         * no explicit color is specified.
         */
        getDefaultDyeColor(stack: $ItemStack_): number;
        getScopeOverlayTexture(arg0: $ItemStack_): $ResourceLocation;
        /**
         * Queries this item's renderer.
         * 
         * Only used if `BakedModel#isCustomRenderer()` returns `true` or `BlockState#getRenderShape()`
         * returns `RenderShape#ENTITYBLOCK_ANIMATED`.
         * 
         * By default, returns vanilla's block entity renderer.
         */
        getCustomRenderer(): $BlockEntityWithoutLevelRenderer;
        getFont(arg0: $ItemStack_, arg1: $IClientItemExtensions$FontContext_): $Font;
        get customRenderer(): $BlockEntityWithoutLevelRenderer;
    }
    export class $IClientItemExtensions$FontContext extends $Enum<$IClientItemExtensions$FontContext> {
        static values(): $IClientItemExtensions$FontContext[];
        static valueOf(arg0: string): $IClientItemExtensions$FontContext;
        static TOOLTIP: $IClientItemExtensions$FontContext;
        static SELECTED_ITEM_NAME: $IClientItemExtensions$FontContext;
        static ITEM_COUNT: $IClientItemExtensions$FontContext;
    }
    /**
     * Values that may be interpreted as {@link $IClientItemExtensions$FontContext}.
     */
    export type $IClientItemExtensions$FontContext_ = "item_count" | "tooltip" | "selected_item_name";
    export class $ClientExtensionsManager {
        /**
         * @deprecated
         */
        static earlyInit(): void;
        static init(): void;
    }
    /**
     * Client-only extensions to `MobEffect`.
     */
    export class $IClientMobEffectExtensions {
        static of(instance: $MobEffectInstance): $IClientMobEffectExtensions;
        static of(effect: $MobEffect_): $IClientMobEffectExtensions;
        static DEFAULT: $IClientMobEffectExtensions;
    }
    export interface $IClientMobEffectExtensions {
        /**
         * Renders the icon of the specified effect on the player's HUD.
         * This can be used to render icons from your own texture sheet.
         */
        renderGuiIcon(instance: $MobEffectInstance, gui: $Gui, guiGraphics: $GuiGraphics, x: number, y: number, z: number, alpha: number): boolean;
        /**
         * Queries whether the given effect should be shown in the player's inventory.
         * 
         * By default, this returns `true`.
         */
        isVisibleInInventory(instance: $MobEffectInstance): boolean;
        /**
         * Queries whether the given effect should be shown in the player's inventory.
         * 
         * By default, this returns `true`.
         */
        isVisibleInGui(instance: $MobEffectInstance): boolean;
        /**
         * Renders the icon of the specified effect in the player's inventory.
         * This can be used to render icons from your own texture sheet.
         */
        renderInventoryIcon(instance: $MobEffectInstance, screen: $EffectRenderingInventoryScreen<never>, guiGraphics: $GuiGraphics, x: number, y: number, blitOffset: number): boolean;
        /**
         * Renders the icon of the specified effect in the player's inventory.
         * This can be used to render icons from your own texture sheet.
         */
        renderInventoryText(instance: $MobEffectInstance, screen: $EffectRenderingInventoryScreen<never>, guiGraphics: $GuiGraphics, x: number, y: number, blitOffset: number): boolean;
    }
}
