import { $RenderStateShard$LightmapStateShard, $RenderStateShard$LineStateShard, $LevelRenderer, $RenderStateShard$DepthTestStateShard, $RenderStateShard$OutputStateShard, $RenderStateShard$CullStateShard, $RenderStateShard$TexturingStateShard, $RenderStateShard$WriteMaskStateShard, $GameRenderer, $RenderStateShard$OverlayStateShard, $FogRenderer$FogMode_, $RenderStateShard$ShaderStateShard, $MultiBufferSource_, $RenderType, $RenderStateShard$TextureStateShard, $RenderStateShard$LayeringStateShard, $DimensionSpecialEffects, $RenderStateShard$TransparencyStateShard, $RenderStateShard$EmptyTextureStateShard, $RenderStateShard$ColorLogicStateShard, $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $Recipe, $RecipeManager, $RecipeHolder_, $RecipeType_ } from "@package/net/minecraft/world/item/crafting";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $WorldPreset } from "@package/net/minecraft/world/level/levelgen/presets";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $EntityType_, $HumanoidArm_, $Entity, $HumanoidArm, $EquipmentSlot_, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ReloadableResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $KeyMapping, $Minecraft, $MouseHandler, $Camera, $DeltaTracker, $RecipeBookCategories, $Options } from "@package/net/minecraft/client";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $ModContainer } from "@package/net/neoforged/fml";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $SpriteSourceType } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $RenderBlockScreenEffectEvent$OverlayType_, $AddSectionGeometryEvent$AdditionalSectionRenderer, $RenderLevelStageEvent$Stage, $RenderTooltipEvent$Color, $ScreenshotEvent, $RenderLevelStageEvent, $CustomizeGuiOverlayEvent$BossEventProgress, $InputEvent$InteractionKeyMappingTriggered, $RenderTooltipEvent$Pre, $ScreenEvent$RenderInventoryMobEffects, $RegisterShadersEvent, $RegisterClientCommandsEvent, $AddSectionGeometryEvent$AdditionalSectionRenderer_, $CalculatePlayerTurnEvent } from "@package/net/neoforged/neoforge/client/event";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $SessionSearchTrees$Key, $ClientLevel, $MultiPlayerGameMode, $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $Music } from "@package/net/minecraft/sounds";
import { $PresetEditor } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $SoundEngine } from "@package/net/minecraft/client/sounds";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Connection } from "@package/net/minecraft/network";
import { $ChunkRenderTypeSetAccessor as $ChunkRenderTypeSetAccessor$1 } from "@package/dev/eriksonn/aeronautics/mixin/levitite";
import { $ClientTooltipComponent, $ClientTooltipPositioner_ } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $RecipeBookType, $RecipeBookType_ } from "@package/net/minecraft/world/inventory";
import { $FogShape_ } from "@package/com/mojang/blaze3d/shaders";
import { $TooltipFlag, $CreativeModeTab_, $ArmorMaterial$Layer, $CreativeModeTab, $ItemStack_, $ItemStack, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $PlayerChatMessage_, $Component_, $ChatType$Bound_, $FormattedText, $Component } from "@package/net/minecraft/network/chat";
import { $ParticleRenderType_, $ParticleRenderType, $FireworkParticles$Starter, $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $VeilClientSuggestionProvider } from "@package/foundry/veil/ext";
import { $SharedSuggestionProvider, $CommandSource, $CommandBuildContext, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $TooltipFlagExtension } from "@package/dev/simulated_team/simulated/mixin_interface/tooltip_flag";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $SearchTree_, $SearchTree } from "@package/net/minecraft/client/searchtree";
import { $Vec2, $Vec3_, $HitResult } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Vector3f } from "@package/org/joml";
import { $ItemColors } from "@package/net/minecraft/client/color/item";
import { $BakedModel, $ModelResourceLocation_, $ModelManager, $ModelBakery, $AtlasSet$StitchResult, $Material } from "@package/net/minecraft/client/resources/model";
import { $UUID_, $Set_, $Map, $Spliterator, $List, $Map_, $Collection_, $List_, $Comparator, $Iterator, $BitSet } from "@package/java/util";
import { $Model, $HumanoidModel } from "@package/net/minecraft/client/model";
import { $ChunkRenderTypeSetAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/platform/neoforge";
import { $Supplier_, $BooleanSupplier_, $Consumer_, $Function_, $BooleanSupplier } from "@package/java/util/function";
import { $HolderLookup$RegistryLookup, $BlockPos_, $Direction_, $Registry } from "@package/net/minecraft/core";
import { $BlockColors, $BlockTintCache } from "@package/net/minecraft/client/color/block";
import { $BlockEntityRenderDispatcher } from "@package/net/minecraft/client/renderer/blockentity";
import { $TextureAtlas, $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Runnable, $Enum, $Iterable, $Iterable_, $Record } from "@package/java/lang";
import { $File_ } from "@package/java/io";
import { $ColorResolver, $ColorResolver_, $Level_, $BlockAndTintGetter, $GameType_, $Level } from "@package/net/minecraft/world/level";
import { $RenderChunkRegion } from "@package/net/minecraft/client/renderer/chunk";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $FogType_ } from "@package/net/minecraft/world/level/material";
import { $BakedQuad, $BlockElement } from "@package/net/minecraft/client/renderer/block/model";
import { $Toast_ } from "@package/net/minecraft/client/gui/components/toasts";
import { $FireworkExplosion$Shape_ } from "@package/net/minecraft/world/item/component";
import { $LocalPlayer, $Input, $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $ModelLayerLocation } from "@package/net/minecraft/client/model/geom";
import { $LerpingBossEvent } from "@package/net/minecraft/client/gui/components";
import { $ImmutableList, $ImmutableMap$Builder, $BiMap } from "@package/com/google/common/collect";
import { $NativeImage, $Window } from "@package/com/mojang/blaze3d/platform";
import { $Stream } from "@package/java/util/stream";
import { $EffectRenderingInventoryScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $TitleScreen, $ReceivingLevelScreen, $ReceivingLevelScreen$Reason, $Screen, $ReceivingLevelScreen$Reason_ } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $GuiGraphics, $Font } from "@package/net/minecraft/client/gui";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as event from "@package/net/neoforged/neoforge/client/event";
export * as extensions from "@package/net/neoforged/neoforge/client/extensions";
export * as model from "@package/net/neoforged/neoforge/client/model";
export * as gui from "@package/net/neoforged/neoforge/client/gui";
export * as settings from "@package/net/neoforged/neoforge/client/settings";
export * as command from "@package/net/neoforged/neoforge/client/command";
export * as textures from "@package/net/neoforged/neoforge/client/textures";
export * as entity from "@package/net/neoforged/neoforge/client/entity";
export * as loading from "@package/net/neoforged/neoforge/client/loading";
export * as resources from "@package/net/neoforged/neoforge/client/resources";
export * as internal from "@package/net/neoforged/neoforge/client/internal";
export * as util from "@package/net/neoforged/neoforge/client/util";

declare module "@package/net/neoforged/neoforge/client" {
    /**
     * An ArmPose that can be defined by the user.
     * Register one by creating a custom `ArmPose`
     * and returning it in `IClientItemExtensions#getArmPose(LivingEntity, InteractionHand, ItemStack)`.
     */
    export class $IArmPoseTransformer {
    }
    export interface $IArmPoseTransformer {
        /**
         * This method should be used to apply all wanted transformations to the player when the ArmPose is active.
         * You can use `LivingEntity#getTicksUsingItem()` and `LivingEntity#getUseItemRemainingTicks()` for moving animations.
         */
        applyTransform(model: $HumanoidModel<never>, entity: $LivingEntity, arm: $HumanoidArm_): void;
    }
    /**
     * Values that may be interpreted as {@link $IArmPoseTransformer}.
     */
    export type $IArmPoseTransformer_ = ((arg0: $HumanoidModel<never>, arg1: $LivingEntity, arg2: $HumanoidArm) => void);
    export class $ChunkRenderTypeSet implements $Iterable<$RenderType>, $ChunkRenderTypeSetAccessor$1, $ChunkRenderTypeSetAccessor {
        static setChunkRenderTypes$aeronautics_$md$5c91d2$1(arg0: $RenderType[]): void;
        static create$sodium_$md$5c91d2$2(arg0: $BitSet): $ChunkRenderTypeSet;
        static setChunkRenderTypesList$aeronautics_$md$5c91d2$0(arg0: $List_<any>): void;
        isEmpty(): boolean;
        iterator(): $Iterator<$RenderType>;
        static of(...arg0: $RenderType[]): $ChunkRenderTypeSet;
        static of(arg0: $Collection_<$RenderType>): $ChunkRenderTypeSet;
        contains(arg0: $RenderType): boolean;
        asList(): $List<$RenderType>;
        static all(): $ChunkRenderTypeSet;
        static union(arg0: $Collection_<$ChunkRenderTypeSet>): $ChunkRenderTypeSet;
        static union(...arg0: $ChunkRenderTypeSet[]): $ChunkRenderTypeSet;
        static union(arg0: $Iterable_<$ChunkRenderTypeSet>): $ChunkRenderTypeSet;
        static none(): $ChunkRenderTypeSet;
        static intersection(arg0: $Iterable_<$ChunkRenderTypeSet>): $ChunkRenderTypeSet;
        static intersection(...arg0: $ChunkRenderTypeSet[]): $ChunkRenderTypeSet;
        static intersection(arg0: $Collection_<$ChunkRenderTypeSet>): $ChunkRenderTypeSet;
        spliterator(): $Spliterator<$RenderType>;
        forEach(arg0: $Consumer_<$RenderType>): void;
        getBits(): $BitSet;
        [Symbol.iterator](): Iterator<$RenderType>
        static set chunkRenderTypes$aeronautics_$md$5c91d2$1(value: $RenderType[]);
        static set chunkRenderTypesList$aeronautics_$md$5c91d2$0(value: $List_<any>);
        get empty(): boolean;
        get bits(): $BitSet;
    }
    export class $ItemDecoratorHandler {
        static of(stack: $ItemStack_): $ItemDecoratorHandler;
        static init(): void;
        render(guiGraphics: $GuiGraphics, font: $Font, stack: $ItemStack_, xOffset: number, yOffset: number): void;
    }
    export class $DimensionTransitionScreenManager {
        static getScreenFromLevel(arg0: $Level_, arg1: $Level_): $DimensionTransitionScreenManager$ReceivingLevelScreenFactory;
        static getScreen(arg0: $ResourceKey_<$Level>, arg1: $ResourceKey_<$Level>): $DimensionTransitionScreenManager$ReceivingLevelScreenFactory;
        constructor();
    }
    export class $ChunkRenderTypeSet$IteratorImpl implements $Iterator<$RenderType> {
        remove(): void;
        forEachRemaining(arg0: $Consumer_<$RenderType>): void;
    }
    export class $NeoForgeRenderTypes$Internal {
    }
    /**
     * overrides for `CommandSourceStack` so that the methods will run successfully client side
     */
    export class $ClientCommandSourceStack extends $CommandSourceStack implements $VeilClientSuggestionProvider {
        /**
         * @return a `Stream` of recipe ids that are available on the client
         */
        veil$getPostPipelineNames(): $Stream<any>;
        source: $CommandSource;
        static ERROR_NOT_ENTITY: $SimpleCommandExceptionType;
        static ERROR_NOT_PLAYER: $SimpleCommandExceptionType;
        constructor(source: $CommandSource, position: $Vec3_, rotation: $Vec2, permission: number, plainTextName: string, displayName: $Component_, executing: $Entity);
    }
    export class $BlockEntityRenderBoundsDebugRenderer {
        static onRegisterClientCommands(event: $RegisterClientCommandsEvent): void;
        static onRenderLevelStage(event: $RenderLevelStageEvent): void;
    }
    /**
     * Manager for entity spectator mode shaders.
     * 
     * Provides a lookup.
     */
    export class $EntitySpectatorShaderManager {
        /**
         * Finds the path to the spectator mode shader used for the specified entity type, or null if none is registered.
         */
        static get(entityType: $EntityType_<never>): $ResourceLocation;
        static init(): void;
    }
    /**
     * Class for various client-side-only hooks.
     */
    export class $ClientHooks {
        static getArmorTexture(entity: $Entity, armor: $ItemStack_, layer: $ArmorMaterial$Layer, innerModel: boolean, slot: $EquipmentSlot_): $ResourceLocation;
        static shouldCauseReequipAnimation(from: $ItemStack_, to: $ItemStack_, slot: number): boolean;
        static resolveLookup<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        static getFilteredRecipeBookTypeValues(): $RecipeBookType[];
        static getFogColor(camera: $Camera, partialTick: number, level: $ClientLevel, renderDistance: number, darkenWorldAmount: number, fogRed: number, fogGreen: number, fogBlue: number): $Vector3f;
        static isBlockInSolidLayer(state: $BlockState_): boolean;
        static registerSpriteSourceTypes(): void;
        static reloadRenderer(): void;
        /**
         * Mimics the behavior of `ItemBlockRenderTypes#getRenderType(BlockState, boolean)`
         * for the input `RenderType`.
         */
        static getEntityRenderType(chunkRenderType: $RenderType, cull: boolean): $RenderType;
        static gatherMaterialAtlases(vanillaAtlases: $Map_<$ResourceLocation_, $ResourceLocation_>): $Map<$ResourceLocation, $ResourceLocation>;
        static makeParticleRenderTypeComparator(renderOrder: $List_<$ParticleRenderType_>): $Comparator<$ParticleRenderType>;
        static selectMusic(situational: $Music, playing: $SoundInstance): $Music;
        static onModifyBakingResult(models: $Map_<$ModelResourceLocation_, $BakedModel>, stitchResults: $Map_<$ResourceLocation_, $AtlasSet$StitchResult>, modelBakery: $ModelBakery): void;
        static onItemColorsInit(itemColors: $ItemColors, blockColors: $BlockColors): void;
        static onBlockColorsInit(blockColors: $BlockColors): void;
        static onClientPlayerChat(boundChatType: $ChatType$Bound_, message: $Component_, playerChatMessage: $PlayerChatMessage_, sender: $UUID_): $Component;
        static onClientSystemChat(message: $Component_, overlay: boolean): $Component;
        static onClientChat(boundChatType: $ChatType$Bound_, message: $Component_, sender: $UUID_): $Component;
        static firePlayerLogin(pc: $MultiPlayerGameMode, player: $LocalPlayer, networkManager: $Connection): void;
        static firePlayerRespawn(pc: $MultiPlayerGameMode, oldPlayer: $LocalPlayer, newPlayer: $LocalPlayer, networkManager: $Connection): void;
        static onRecipesUpdated(mgr: $RecipeManager): void;
        static onClientSendMessage(message: string): string;
        static onRegisterKeyMappings(options: $Options): void;
        static getBlockMaterial(loc: $ResourceLocation_): $Material;
        /**
         * Copies humanoid model properties from the original model to another, used for armor models
         */
        static copyModelProperties<T extends $LivingEntity>(original: $HumanoidModel<T>, replacement: $HumanoidModel<never>): void;
        static isNameplateInRenderDistance(entity: $Entity, squareDistance: number): boolean;
        static renderSpecificFirstPersonArm(poseStack: $PoseStack, multiBufferSource: $MultiBufferSource_, packedLight: number, player: $AbstractClientPlayer, arm: $HumanoidArm_): boolean;
        static onModelBake(modelManager: $ModelManager, models: $Map_<$ModelResourceLocation_, $BakedModel>, modelBakery: $ModelBakery): void;
        static onRegisterAdditionalModels(additionalModels: $Set_<$ModelResourceLocation_>): void;
        static handleCameraTransforms(poseStack: $PoseStack, model: $BakedModel, cameraTransformType: $ItemDisplayContext_, applyLeftHandTransform: boolean): $BakedModel;
        static onDrawHighlight(context: $LevelRenderer, camera: $Camera, target: $HitResult, deltaTracker: $DeltaTracker, poseStack: $PoseStack, bufferSource: $MultiBufferSource_): boolean;
        static getDetachedCameraDistance(camera: $Camera, flipped: boolean, entityScale: number, distance: number): number;
        static onMovementInputUpdate(player: $Player, movementInput: $Input): void;
        static getFieldOfViewModifier(entity: $Player, fovModifier: number): number;
        static gatherTooltipComponents(stack: $ItemStack_, textElements: $List_<$FormattedText>, mouseX: number, screenWidth: number, screenHeight: number, fallbackFont: $Font): $List<$ClientTooltipComponent>;
        static gatherTooltipComponents(stack: $ItemStack_, textElements: $List_<$FormattedText>, itemComponent: ($TooltipComponent) | undefined, mouseX: number, screenWidth: number, screenHeight: number, fallbackFont: $Font): $List<$ClientTooltipComponent>;
        static gatherTooltipComponentsFromElements(stack: $ItemStack_, textElements: $List_<$Either<$FormattedText, $TooltipComponent>>, mouseX: number, screenWidth: number, screenHeight: number, fallbackFont: $Font): $List<$ClientTooltipComponent>;
        static onRenderTooltipPre(stack: $ItemStack_, graphics: $GuiGraphics, x: number, y: number, screenWidth: number, screenHeight: number, components: $List_<$ClientTooltipComponent>, fallbackFont: $Font, positioner: $ClientTooltipPositioner_): $RenderTooltipEvent$Pre;
        static onRenderTooltipColor(stack: $ItemStack_, graphics: $GuiGraphics, x: number, y: number, font: $Font, components: $List_<$ClientTooltipComponent>): $RenderTooltipEvent$Color;
        static onRegisterParticleProviders(particleEngine: $ParticleEngine): void;
        static initClientHooks(mc: $Minecraft, resourceManager: $ReloadableResourceManager): void;
        static clearGuiLayers(minecraft: $Minecraft): void;
        /**
         * Fires `Pre`. Called just before `GameRenderer#render(float, long, boolean)` in `Minecraft#runTick(boolean)`.
         * 
         * Fired before the profiler section for "gameRenderer" is started.
         */
        static fireRenderFramePre(partialTick: $DeltaTracker): void;
        /**
         * Fires `Pre`. Called just before `GameRenderer#render(float, long, boolean)` in `Minecraft#runTick(boolean)`.
         * 
         * Fired before the profiler section for "gameRenderer" is started.
         */
        static fireRenderFramePost(partialTick: $DeltaTracker): void;
        static onClientPauseChangePre(pause: boolean): boolean;
        static onClientPauseChangePost(pause: boolean): void;
        static resizeGuiLayers(minecraft: $Minecraft, width: number, height: number): void;
        static onClickInput(button: number, keyBinding: $KeyMapping, hand: $InteractionHand_): $InputEvent$InteractionKeyMappingTriggered;
        static fireClientTickPre(): void;
        static fireClientTickPost(): void;
        static firePlayerLogout(pc: $MultiPlayerGameMode, player: $LocalPlayer): void;
        static pushGuiLayer(minecraft: $Minecraft, screen: $Screen): void;
        static popGuiLayer(minecraft: $Minecraft): void;
        static playSound(manager: $SoundEngine, sound: $SoundInstance): $SoundInstance;
        static renderMainMenu(gui: $TitleScreen, guiGraphics: $GuiGraphics, font: $Font, width: number, height: number, alpha: number): void;
        static onScreenPotionSize(screen: $Screen, availableSpace: number, compact: boolean, horizontalOffset: number): $ScreenEvent$RenderInventoryMobEffects;
        static shouldRenderEffect(effectInstance: $MobEffectInstance): boolean;
        /**
         * Fires the `GatherEffectScreenTooltipsEvent` and returns the resulting tooltip lines.
         * 
         * Called from `EffectRenderingInventoryScreen#renderEffects` just before `GuiGraphics#renderTooltip(Font, List, Optional, int, int)` is called.
         */
        static getEffectTooltip(screen: $EffectRenderingInventoryScreen<never>, effectInst: $MobEffectInstance, tooltip: $List_<$Component_>): $List<$Component>;
        static onToastAdd(toast: $Toast_): boolean;
        static onMouseScroll(mouseHelper: $MouseHandler, scrollDeltaX: number, scrollDeltaY: number): boolean;
        static onMouseButtonPre(button: number, action: number, mods: number): boolean;
        static onMouseButtonPost(button: number, action: number, mods: number): void;
        static onScreenMouseScrollPre(mouseHelper: $MouseHandler, guiScreen: $Screen, scrollDeltaX: number, scrollDeltaY: number): boolean;
        static onKeyInput(key: number, scanCode: number, action: number, modifiers: number): void;
        static onScreenCharTypedPre(guiScreen: $Screen, codePoint: string, modifiers: number): boolean;
        static onScreenCharTypedPost(guiScreen: $Screen, codePoint: string, modifiers: number): void;
        static onScreenKeyPressedPre(guiScreen: $Screen, keyCode: number, scanCode: number, modifiers: number): boolean;
        static onScreenKeyPressedPost(guiScreen: $Screen, keyCode: number, scanCode: number, modifiers: number): boolean;
        static onScreenKeyReleasedPre(guiScreen: $Screen, keyCode: number, scanCode: number, modifiers: number): boolean;
        static onScreenKeyReleasedPost(guiScreen: $Screen, keyCode: number, scanCode: number, modifiers: number): boolean;
        static onScreenMouseScrollPost(mouseHelper: $MouseHandler, guiScreen: $Screen, scrollDeltaX: number, scrollDeltaY: number): void;
        static getTurnPlayerValues(mouseSensitivity: number, cinematicCameraEnabled: boolean): $CalculatePlayerTurnEvent;
        static onScreenMouseDragPre(guiScreen: $Screen, mouseX: number, mouseY: number, mouseButton: number, dragX: number, dragY: number): boolean;
        static onScreenMouseDragPost(guiScreen: $Screen, mouseX: number, mouseY: number, mouseButton: number, dragX: number, dragY: number): void;
        static onScreenMouseReleasedPre(guiScreen: $Screen, mouseX: number, mouseY: number, button: number): boolean;
        static onScreenMouseReleasedPost(guiScreen: $Screen, mouseX: number, mouseY: number, button: number, handled: boolean): boolean;
        static onScreenMouseClickedPre(guiScreen: $Screen, mouseX: number, mouseY: number, button: number): boolean;
        static onScreenMouseClickedPost(guiScreen: $Screen, mouseX: number, mouseY: number, button: number, handled: boolean): boolean;
        static loadEntityShader(entity: $Entity, entityRenderer: $GameRenderer): void;
        static registerLayerDefinition(layerLocation: $ModelLayerLocation, supplier: $Supplier_<$LayerDefinition>): void;
        static getArmorModel(entityLiving: $LivingEntity, itemStack: $ItemStack_, slot: $EquipmentSlot_, _default: $HumanoidModel<never>): $Model;
        static fixDomain(base: string, complex: string): string;
        static renderSpecificFirstPersonHand(hand: $InteractionHand_, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, partialTick: number, interpPitch: number, swingProgress: number, equipProgress: number, stack: $ItemStack_): boolean;
        static onFogRender(mode: $FogRenderer$FogMode_, type: $FogType_, camera: $Camera, partialTick: number, renderDistance: number, nearDistance: number, farDistance: number, shape: $FogShape_): void;
        static fillNormal(faceData: number[], facing: $Direction_): void;
        static calculateFaceWithoutAO(getter: $BlockAndTintGetter, state: $BlockState_, pos: $BlockPos_, quad: $BakedQuad, isFaceCubic: boolean, brightness: number[], lightmap: number[]): boolean;
        static onCustomizeBossEventProgress(guiGraphics: $GuiGraphics, window: $Window, bossInfo: $LerpingBossEvent, x: number, y: number, increment: number): $CustomizeGuiOverlayEvent$BossEventProgress;
        static onScreenshot(image: $NativeImage, screenshotFile: $File_): $ScreenshotEvent;
        static onClientChangeGameType(info: $PlayerInfo, currentGameMode: $GameType_, newGameMode: $GameType_): void;
        static renderPistonMovedBlocks(pos: $BlockPos_, state: $BlockState_, stack: $PoseStack, bufferSource: $MultiBufferSource_, level: $Level_, checkSides: boolean, packedOverlay: number, blockRenderer: $BlockRenderDispatcher): void;
        static loadLayerDefinitions(builder: $ImmutableMap$Builder<$ModelLayerLocation, $LayerDefinition>): void;
        static getTooltipFont(stack: $ItemStack_, fallbackFont: $Font): $Font;
        static renderFireOverlay(player: $Player, mat: $PoseStack): boolean;
        static renderBlockOverlay(player: $Player, mat: $PoseStack, type: $RenderBlockScreenEffectEvent$OverlayType_, block: $BlockState_, pos: $BlockPos_): boolean;
        static renderWaterOverlay(player: $Player, mat: $PoseStack): boolean;
        static getMaxMipmapLevel(width: number, height: number): number;
        static getShaderImportLocation(basePath: string, isRelative: boolean, importPath: string): $ResourceLocation;
        static makeSpriteSourceTypesMap(): $BiMap<$ResourceLocation, $SpriteSourceType>;
        static isBlockEntityRendererVisible<T extends $BlockEntity>(dispatcher: $BlockEntityRenderDispatcher, blockEntity: $BlockEntity, frustum: $Frustum): boolean;
        /**
         * Modify the position and UVs of the edge quads of generated item models to account for sprite expansion of the
         * front and back quad. Fixes MC-73186 on generated item models.
         */
        static fixItemModelSeams(elements: $List_<$BlockElement>, sprite: $TextureAtlasSprite): $List<$BlockElement>;
        static gatherAdditionalRenderers(sectionOrigin: $BlockPos_, level: $Level_): $List<$AddSectionGeometryEvent$AdditionalSectionRenderer>;
        static addAdditionalGeometry(additionalRenderers: $List_<$AddSectionGeometryEvent$AdditionalSectionRenderer_>, getOrCreateBuilder: $Function_<$RenderType, $VertexConsumer>, region: $RenderChunkRegion, transformation: $PoseStack): void;
        static getFieldOfView(renderer: $GameRenderer, camera: $Camera, partialTick: number, fov: number, usedConfiguredFov: boolean): number;
        static onTextureAtlasStitched(atlas: $TextureAtlas): void;
        static getGuiFarPlane(): number;
        static drawScreen(screen: $Screen, guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        static dispatchRenderStage(renderType: $RenderType, levelRenderer: $LevelRenderer, modelViewMatrix: $Matrix4f, projectionMatrix: $Matrix4f, renderTick: number, camera: $Camera, frustum: $Frustum): void;
        static dispatchRenderStage(stage: $RenderLevelStageEvent$Stage, levelRenderer: $LevelRenderer, poseStack: $PoseStack, modelViewMatrix: $Matrix4f, projectionMatrix: $Matrix4f, renderTick: number, camera: $Camera, frustum: $Frustum): void;
        static forgeStatusLine: string;
        constructor();
        static get filteredRecipeBookTypeValues(): $RecipeBookType[];
        static get guiFarPlane(): number;
    }
    /**
     * Provides helper functions replacing those in `ItemBlockRenderTypes`.
     */
    export class $RenderTypeHelper {
        /**
         * Provides a fallback `RenderType` for the given `ItemStack` in the case that none is explicitly specified.
         * 
         * Mimics the behavior of vanilla's `ItemBlockRenderTypes#getRenderType(ItemStack, boolean)`
         * but removes the need to query the model again if the item is a `BlockItem`.
         */
        static getFallbackItemRenderType(stack: $ItemStack_, model: $BakedModel, cull: boolean): $RenderType;
        /**
         * Provides a `RenderType` using `DefaultVertexFormat#NEW_ENTITY` for the given `DefaultVertexFormat#BLOCK` format.
         * This should be called for each `RenderType` returned by `BakedModel#getRenderTypes(BlockState, RandomSource, ModelData)`.
         * 
         * Mimics the behavior of vanilla's `ItemBlockRenderTypes#getRenderType(BlockState, boolean)`.
         */
        static getEntityRenderType(chunkRenderType: $RenderType, cull: boolean): $RenderType;
        /**
         * Provides a `RenderType` fit for rendering moving blocks given the specified chunk render type.
         * This should be called for each `RenderType` returned by `BakedModel#getRenderTypes(BlockState, RandomSource, ModelData)`.
         * 
         * Mimics the behavior of vanilla's `ItemBlockRenderTypes#getMovingBlockRenderType(BlockState)`.
         */
        static getMovingBlockRenderType(renderType: $RenderType): $RenderType;
    }
    export class $ExtendedServerListData extends $Record {
        numberOfMods(): number;
        extraReason(): string;
        type(): string;
        isCompatible(): boolean;
        truncated(): boolean;
        constructor(arg0: string, arg1: boolean, arg2: number, arg3: string);
        constructor(type: string, isCompatible: boolean, numberOfMods: number, extraReason: string, truncated: boolean);
        get compatible(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ExtendedServerListData}.
     */
    export type $ExtendedServerListData_ = { type?: string, truncated?: boolean, isCompatible?: boolean, extraReason?: string, numberOfMods?: number,  } | [type?: string, truncated?: boolean, isCompatible?: boolean, extraReason?: string, numberOfMods?: number, ];
    export class $RenderTypeGroup extends $Record {
        entityFabulous(): $RenderType;
        entity(): $RenderType;
        isEmpty(): boolean;
        block(): $RenderType;
        static EMPTY: $RenderTypeGroup;
        constructor(block: $RenderType, entity: $RenderType, entityFabulous: $RenderType);
        constructor(arg0: $RenderType, arg1: $RenderType);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RenderTypeGroup}.
     */
    export type $RenderTypeGroup_ = { block?: $RenderType, entity?: $RenderType, entityFabulous?: $RenderType,  } | [block?: $RenderType, entity?: $RenderType, entityFabulous?: $RenderType, ];
    /**
     * Manager for recipe book types and categories.
     * 
     * Provides a recipe category lookup.
     */
    export class $RecipeBookManager {
        /**
         * Finds the category the specified recipe should display in, or null if none.
         */
        static findCategories<T extends $Recipe<never>>(type: $RecipeType_<T>, recipe: $RecipeHolder_<T>): $RecipeBookCategories;
        static getAggregateCategories(): $Map<$RecipeBookCategories, $List<$RecipeBookCategories>>;
        static getCustomCategoriesOrEmpty(recipeBookType: $RecipeBookType_): $List<$RecipeBookCategories>;
        static init(): void;
        constructor();
        static get aggregateCategories(): $Map<$RecipeBookCategories, $List<$RecipeBookCategories>>;
    }
    export class $ChunkRenderTypeSet$All extends $ChunkRenderTypeSet {
    }
    export class $ClientHooks$ClientEvents {
        static getEntityTranslucentUnlitShader(): $ShaderInstance;
        static registerShaders(event: $RegisterShadersEvent): void;
        constructor();
        static get entityTranslucentUnlitShader(): $ShaderInstance;
    }
    export class $ParticleBoundsDebugRenderer {
        static onRegisterClientCommands(event: $RegisterClientCommandsEvent): void;
        static onRenderLevelStage(event: $RenderLevelStageEvent): void;
    }
    export class $ChunkRenderTypeSet$None extends $ChunkRenderTypeSet {
    }
    export class $StencilManager {
        /**
         * Reserve a stencil bit for use in rendering
         * 
         * Note: you must check the `RenderTarget` you are working with to
         * determine if stencil bits are enabled on it before use.
         */
        static reserveBit(): number;
        /**
         * Release the stencil bit for other use
         */
        static releaseBit(bit: number): void;
    }
    export class $FireworkShapeFactoryRegistry$Factory {
    }
    export interface $FireworkShapeFactoryRegistry$Factory {
        build(starter: $FireworkParticles$Starter, trail: boolean, flicker: boolean, colors: number[], fadeColors: number[]): void;
    }
    /**
     * Values that may be interpreted as {@link $FireworkShapeFactoryRegistry$Factory}.
     */
    export type $FireworkShapeFactoryRegistry$Factory_ = ((arg0: $FireworkParticles$Starter, arg1: boolean, arg2: boolean, arg3: number[], arg4: number[]) => void);
    export class $ClientNeoForgeMod {
        constructor(modEventBus: $IEventBus, container: $ModContainer);
    }
    export class $TagConventionLogWarningClient {
    }
    export class $ClientTooltipFlag extends $Record implements $TooltipFlag, $TooltipFlagExtension {
        controlDown(): boolean;
        simulated$getCreativeSearch(): boolean;
        simulated$setCreativeSearch(arg0: boolean): void;
        altDown(): boolean;
        isAdvanced(): boolean;
        shiftDown(): boolean;
        static of(arg0: $TooltipFlag): $TooltipFlag;
        isCreative(): boolean;
        hasControlDown(): boolean;
        advanced(): boolean;
        hasShiftDown(): boolean;
        hasAltDown(): boolean;
        creative(): boolean;
        shouldDisplayAllInformation(): boolean;
        constructor(advanced: boolean, creative: boolean, shiftDown: boolean, controlDown: boolean, altDown: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ClientTooltipFlag}.
     */
    export type $ClientTooltipFlag_ = { controlDown?: boolean, shiftDown?: boolean, creative?: boolean, advanced?: boolean, altDown?: boolean,  } | [controlDown?: boolean, shiftDown?: boolean, creative?: boolean, advanced?: boolean, altDown?: boolean, ];
    export class $NeoForgeRenderTypes$CustomizableTextureState extends $RenderStateShard$TextureStateShard {
        static RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_DECAL_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_ALPHA_SHADER: $RenderStateShard$ShaderStateShard;
        static PARTICLES_TARGET: $RenderStateShard$OutputStateShard;
        static RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_LIGHTNING_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_SOLID_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_GUI_OVERLAY_SHADER: $RenderStateShard$ShaderStateShard;
        static NO_TEXTURE: $RenderStateShard$EmptyTextureStateShard;
        static LIGHTNING_TRANSPARENCY: $RenderStateShard$TransparencyStateShard;
        setupState: $Runnable;
        static GLINT_TEXTURING: $RenderStateShard$TexturingStateShard;
        static ENTITY_GLINT_TEXTURING: $RenderStateShard$TexturingStateShard;
        static RENDERTYPE_END_GATEWAY_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_TEXT_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_OUTLINE_SHADER: $RenderStateShard$ShaderStateShard;
        static POSITION_TEX_SHADER: $RenderStateShard$ShaderStateShard;
        static LIGHTMAP: $RenderStateShard$LightmapStateShard;
        static RENDERTYPE_ENTITY_CUTOUT_SHADER: $RenderStateShard$ShaderStateShard;
        static ADDITIVE_TRANSPARENCY: $RenderStateShard$TransparencyStateShard;
        static RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER: $RenderStateShard$ShaderStateShard;
        blur: boolean;
        static DEFAULT_LINE: $RenderStateShard$LineStateShard;
        static RENDERTYPE_GUI_SHADER: $RenderStateShard$ShaderStateShard;
        static OUTLINE_TARGET: $RenderStateShard$OutputStateShard;
        static RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER: $RenderStateShard$ShaderStateShard;
        static NO_DEPTH_TEST: $RenderStateShard$DepthTestStateShard;
        static RENDERTYPE_ENTITY_TRANSLUCENT_SHADER: $RenderStateShard$ShaderStateShard;
        static POLYGON_OFFSET_LAYERING: $RenderStateShard$LayeringStateShard;
        static NO_SHADER: $RenderStateShard$ShaderStateShard;
        texture: ($ResourceLocation) | undefined;
        static RENDERTYPE_TEXT_SEE_THROUGH_SHADER: $RenderStateShard$ShaderStateShard;
        static CULL: $RenderStateShard$CullStateShard;
        static OR_REVERSE_COLOR_LOGIC: $RenderStateShard$ColorLogicStateShard;
        static NO_TRANSPARENCY: $RenderStateShard$TransparencyStateShard;
        static VIEW_OFFSET_Z_LAYERING: $RenderStateShard$LayeringStateShard;
        static NO_LAYERING: $RenderStateShard$LayeringStateShard;
        mipmap: boolean;
        static RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_LEASH_SHADER: $RenderStateShard$ShaderStateShard;
        static NO_OVERLAY: $RenderStateShard$OverlayStateShard;
        static NO_CULL: $RenderStateShard$CullStateShard;
        static RENDERTYPE_CLOUDS_SHADER: $RenderStateShard$ShaderStateShard;
        static POSITION_COLOR_TEX_LIGHTMAP_SHADER: $RenderStateShard$ShaderStateShard;
        static POSITION_COLOR_LIGHTMAP_SHADER: $RenderStateShard$ShaderStateShard;
        static TRANSLUCENT_TARGET: $RenderStateShard$OutputStateShard;
        static OVERLAY: $RenderStateShard$OverlayStateShard;
        static TRANSLUCENT_TRANSPARENCY: $RenderStateShard$TransparencyStateShard;
        static RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_GLINT_SHADER: $RenderStateShard$ShaderStateShard;
        static POSITION_COLOR_SHADER: $RenderStateShard$ShaderStateShard;
        static CRUMBLING_TRANSPARENCY: $RenderStateShard$TransparencyStateShard;
        static RENDERTYPE_CRUMBLING_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_EYES_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_WATER_MASK_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_CUTOUT_SHADER: $RenderStateShard$ShaderStateShard;
        static COLOR_DEPTH_WRITE: $RenderStateShard$WriteMaskStateShard;
        static RENDERTYPE_TRIPWIRE_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_SHADOW_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_TEXT_BACKGROUND_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_TRANSLUCENT_SHADER: $RenderStateShard$ShaderStateShard;
        static NO_COLOR_LOGIC: $RenderStateShard$ColorLogicStateShard;
        name: string;
        static RENDERTYPE_ENERGY_SWIRL_SHADER: $RenderStateShard$ShaderStateShard;
        static POSITION_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_GLINT_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_BEACON_BEAM_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_CUTOUT_MIPPED_SHADER: $RenderStateShard$ShaderStateShard;
        static DEPTH_WRITE: $RenderStateShard$WriteMaskStateShard;
        static CLOUDS_TARGET: $RenderStateShard$OutputStateShard;
        static NO_LIGHTMAP: $RenderStateShard$LightmapStateShard;
        static MAIN_TARGET: $RenderStateShard$OutputStateShard;
        static RENDERTYPE_GLINT_TRANSLUCENT_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_END_PORTAL_SHADER: $RenderStateShard$ShaderStateShard;
        static WEATHER_TARGET: $RenderStateShard$OutputStateShard;
        static LEQUAL_DEPTH_TEST: $RenderStateShard$DepthTestStateShard;
        static RENDERTYPE_LINES_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_BREEZE_WIND_SHADER: $RenderStateShard$ShaderStateShard;
        static BLOCK_SHEET_MIPPED: $RenderStateShard$TextureStateShard;
        static RENDERTYPE_ENTITY_SOLID_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_NO_OUTLINE_SHADER: $RenderStateShard$ShaderStateShard;
        static RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER: $RenderStateShard$ShaderStateShard;
        static COLOR_WRITE: $RenderStateShard$WriteMaskStateShard;
        static ITEM_ENTITY_TARGET: $RenderStateShard$OutputStateShard;
        static RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER: $RenderStateShard$ShaderStateShard;
        static MAX_ENCHANTMENT_GLINT_SPEED_MILLIS: number;
        static DEFAULT_TEXTURING: $RenderStateShard$TexturingStateShard;
        static EQUAL_DEPTH_TEST: $RenderStateShard$DepthTestStateShard;
        static GLINT_TRANSPARENCY: $RenderStateShard$TransparencyStateShard;
        static VIEW_SCALE_Z_EPSILON: number;
        clearState: $Runnable;
        static RENDERTYPE_TEXT_INTENSITY_SHADER: $RenderStateShard$ShaderStateShard;
        static GREATER_DEPTH_TEST: $RenderStateShard$DepthTestStateShard;
        static RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER: $RenderStateShard$ShaderStateShard;
        static BLOCK_SHEET: $RenderStateShard$TextureStateShard;
    }
    export class $DimensionTransitionScreenManager$ReceivingLevelScreenFactory {
    }
    export interface $DimensionTransitionScreenManager$ReceivingLevelScreenFactory {
        create(supplier: $BooleanSupplier_, reason: $ReceivingLevelScreen$Reason_): $ReceivingLevelScreen;
    }
    /**
     * Values that may be interpreted as {@link $DimensionTransitionScreenManager$ReceivingLevelScreenFactory}.
     */
    export type $DimensionTransitionScreenManager$ReceivingLevelScreenFactory_ = ((arg0: $BooleanSupplier, arg1: $ReceivingLevelScreen$Reason) => $ReceivingLevelScreen);
    /**
     * Backup of the OpenGL render state, for use in GUI rendering that needs to be able to go back to the previous
     * render state after calling third-party renderers which may apply arbitrary modifications to the render state.
     * 
     * Create a backup before changing the global render state with `RenderSystem#backupGlState(GlStateBackup)`,
     * and apply the backup with `RenderSystem#restoreGlState(GlStateBackup)`.
     */
    export class $GlStateBackup {
        cullEnabled: boolean;
        polyOffsetLineEnabled: boolean;
        depthMask: boolean;
        blendSrcAlpha: number;
        colorLogicOp: number;
        stencilMask: number;
        scissorEnabled: boolean;
        stencilFuncFunc: number;
        colorMaskBlue: boolean;
        polyOffsetUnits: number;
        colorLogicEnabled: boolean;
        blendDestRgb: number;
        blendDestAlpha: number;
        polyOffsetFactor: number;
        blendEnabled: boolean;
        stencilZFail: number;
        stencilFuncMask: number;
        colorMaskRed: boolean;
        blendSrcRgb: number;
        stencilFail: number;
        stencilZPass: number;
        colorMaskGreen: boolean;
        stencilFuncRef: number;
        colorMaskAlpha: boolean;
        depthEnabled: boolean;
        polyOffsetFillEnabled: boolean;
        depthFunc: number;
        constructor();
    }
    export class $CreativeModeTabSearchRegistry {
        static getNameSearchKeys(): $Map<$CreativeModeTab, $SessionSearchTrees$Key>;
        static getTagSearchKeys(): $Map<$CreativeModeTab, $SessionSearchTrees$Key>;
        static getNameSearchKey(tab: $CreativeModeTab_): $SessionSearchTrees$Key;
        static getTagSearchTree(key: $SessionSearchTrees$Key): $CompletableFuture<$SearchTree<$ItemStack>>;
        static getNameSearchTree(key: $SessionSearchTrees$Key): $CompletableFuture<$SearchTree<$ItemStack>>;
        static putNameSearchTree(key: $SessionSearchTrees$Key, future: $CompletableFuture<$SearchTree_<$ItemStack>>): void;
        static putTagSearchTree(key: $SessionSearchTrees$Key, future: $CompletableFuture<$SearchTree_<$ItemStack>>): void;
        static getTagSearchKey(tab: $CreativeModeTab_): $SessionSearchTrees$Key;
        constructor();
        static get nameSearchKeys(): $Map<$CreativeModeTab, $SessionSearchTrees$Key>;
        static get tagSearchKeys(): $Map<$CreativeModeTab, $SessionSearchTrees$Key>;
    }
    /**
     * Keeps track of custom firework shape types, because Particle is client side only this can't be on the Shape itself.
     * So sometime during your client initalization call register.
     */
    export class $FireworkShapeFactoryRegistry {
        static get(arg0: $FireworkExplosion$Shape_): $FireworkShapeFactoryRegistry$Factory;
        static register(arg0: $FireworkExplosion$Shape_, arg1: $FireworkShapeFactoryRegistry$Factory_): void;
        constructor();
    }
    /**
     * Manager for `DimensionSpecialEffects` instances.
     * 
     * Provides a lookup by dimension type.
     */
    export class $DimensionSpecialEffectsManager {
        static init(): void;
        /**
         * Finds the `DimensionSpecialEffects` for a given dimension type, or the default if none is registered.
         */
        static getForType(type: $ResourceLocation_): $DimensionSpecialEffects;
    }
    /**
     * Manager for custom `ColorResolver` instances, collected via `ColorResolvers`.
     */
    export class $ColorResolverManager {
        /**
         * Get all registered custom `ColorResolver`s. The returned list does not include vanilla resolvers,
         * since they are not explicitly registered.
         */
        static getRegisteredResolvers(): $ImmutableList<$ColorResolver>;
        static init(): void;
        /**
         * Register a `BlockTintCache` for every registered `ColorResolver` into the given target map.
         */
        static registerBlockTintCaches(level: $ClientLevel, target: $Map_<$ColorResolver_, $BlockTintCache>): void;
        static get registeredResolvers(): $ImmutableList<$ColorResolver>;
    }
    export class $PresetEditorManager {
        /**
         * @return the PresetEditor for the given WorldPreset key, or null if no such PresetEditor exists
         */
        static get(key: $ResourceKey_<$WorldPreset>): $PresetEditor;
    }
    export class $ClientCommandHandler {
        /**
         * Always try to execute the cached parsing of a typed command as a clientside command. Requires that the execute field of the commands to be set to send to server so that they aren't
         * treated as client command's that do nothing.
         * 
         * `Commands#performCommand(ParseResults, String)` for reference
         */
        static runCommand(command: string): boolean;
        static mergeServerCommands(serverCommands: $CommandDispatcher<$SharedSuggestionProvider>, buildContext: $CommandBuildContext): $CommandDispatcher<$SharedSuggestionProvider>;
        static init(): void;
        static getSource(): $ClientCommandSourceStack;
        static getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        constructor();
        static get source(): $ClientCommandSourceStack;
        static get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
    }
    /**
     * Manager for named render types.
     * 
     * Provides a lookup.
     */
    export class $NamedRenderTypeManager {
        /**
         * Finds the `RenderTypeGroup` for a given name, or the empty group if not found.
         */
        static get(name: $ResourceLocation_): $RenderTypeGroup;
        static init(): void;
    }
    /**
     * An ItemDecorator that is used to render something on specific items, when the DurabilityBar and StackCount is rendered.
     * Add it to an item using RegisterItemDecorationsEvent#register(ItemLike, IItemDecorator).
     */
    export class $IItemDecorator {
    }
    export interface $IItemDecorator {
        /**
         * Is called after GuiGraphics#renderItemDecorations(Font, ItemStack, int, int, String) is done rendering.
         * The StackCount is rendered at blitOffset+200 so use the blitOffset with caution.
         * 
         * The RenderState during this call will be: enableTexture, enableDepthTest, enableBlend and defaultBlendFunc
         */
        render(guiGraphics: $GuiGraphics, font: $Font, stack: $ItemStack_, xOffset: number, yOffset: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IItemDecorator}.
     */
    export type $IItemDecorator_ = ((arg0: $GuiGraphics, arg1: $Font, arg2: $ItemStack, arg3: number, arg4: number) => boolean);
    export class $NeoForgeRenderTypes extends $Enum<$NeoForgeRenderTypes> {
        static getTranslucentParticlesTarget(arg0: $ResourceLocation_): $RenderType;
        static getUnlitTranslucent(arg0: $ResourceLocation_, arg1: boolean): $RenderType;
        static getUnlitTranslucent(arg0: $ResourceLocation_): $RenderType;
        static getUnsortedTranslucent(arg0: $ResourceLocation_): $RenderType;
        static getItemLayeredTranslucent(arg0: $ResourceLocation_): $RenderType;
        static getItemLayeredCutoutMipped(arg0: $ResourceLocation_): $RenderType;
        static getItemLayeredCutout(arg0: $ResourceLocation_): $RenderType;
        static getItemLayeredSolid(arg0: $ResourceLocation_): $RenderType;
        static getEntityCutoutMipped(arg0: $ResourceLocation_): $RenderType;
        get(): $RenderType;
        static values(): $NeoForgeRenderTypes[];
        static valueOf(arg0: string): $NeoForgeRenderTypes;
        static getText(arg0: $ResourceLocation_): $RenderType;
        static getTextIntensity(arg0: $ResourceLocation_): $RenderType;
        static getTextPolygonOffset(arg0: $ResourceLocation_): $RenderType;
        static getTextIntensityPolygonOffset(arg0: $ResourceLocation_): $RenderType;
        static getTextSeeThrough(arg0: $ResourceLocation_): $RenderType;
        static getTextIntensitySeeThrough(arg0: $ResourceLocation_): $RenderType;
        static enableTextTextureLinearFiltering: boolean;
        static TRANSLUCENT_ON_PARTICLES_TARGET: $NeoForgeRenderTypes;
        static ITEM_UNLIT_TRANSLUCENT: $NeoForgeRenderTypes;
        static ITEM_LAYERED_TRANSLUCENT: $NeoForgeRenderTypes;
        static ITEM_UNSORTED_TRANSLUCENT: $NeoForgeRenderTypes;
        static ITEM_LAYERED_SOLID: $NeoForgeRenderTypes;
        static ITEM_LAYERED_CUTOUT: $NeoForgeRenderTypes;
        static ITEM_LAYERED_CUTOUT_MIPPED: $NeoForgeRenderTypes;
        static ITEM_UNSORTED_UNLIT_TRANSLUCENT: $NeoForgeRenderTypes;
    }
    /**
     * Values that may be interpreted as {@link $NeoForgeRenderTypes}.
     */
    export type $NeoForgeRenderTypes_ = "item_layered_solid" | "item_layered_cutout" | "item_layered_cutout_mipped" | "item_layered_translucent" | "item_unsorted_translucent" | "item_unlit_translucent" | "item_unsorted_unlit_translucent" | "translucent_on_particles_target";
}
