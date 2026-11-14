import { $LevelRenderer, $GameRenderer, $FogRenderer$FogMode_, $FogRenderer$FogMode, $MultiBufferSource_, $RenderType, $DimensionSpecialEffects, $MultiBufferSource, $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $RecipeHolder, $RecipeManager, $RecipeType_ } from "@package/net/minecraft/world/item/crafting";
import { $MapCodec_ } from "@package/com/mojang/serialization";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $WorldPreset } from "@package/net/minecraft/world/level/levelgen/presets";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $EntityType_, $HumanoidArm_, $Entity, $EquipmentSlotGroup_, $HumanoidArm, $EntityType, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ParticleType_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $ResourceProvider, $PreparableReloadListener_, $ReloadableResourceManager, $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $KeyMapping, $RecipeBookCategories_, $Camera, $DeltaTracker, $RecipeBookCategories, $Options } from "@package/net/minecraft/client";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $SpriteSourceType, $SpriteSourceType_, $SpriteSource } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $PlayerRenderer } from "@package/net/minecraft/client/renderer/entity/player";
import { $MultiPlayerGameMode, $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $InteractionHand_, $InteractionHand } from "@package/net/minecraft/world";
import { $Music } from "@package/net/minecraft/sounds";
import { $PresetEditor_ } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $AttributeTooltipContext, $TriState_, $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $IItemDecorator_, $DimensionTransitionScreenManager$ReceivingLevelScreenFactory_, $RenderTypeGroup_ } from "@package/net/neoforged/neoforge/client";
import { $Connection } from "@package/net/minecraft/network";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ClientTooltipComponent, $ClientTooltipPositioner_, $ClientTooltipPositioner } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $MenuType_, $AbstractContainerMenu, $RecipeBookType_ } from "@package/net/minecraft/world/inventory";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $FogShape_, $FogShape } from "@package/com/mojang/blaze3d/shaders";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $IGeometryLoader_ } from "@package/net/neoforged/neoforge/client/model/geometry";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $PlayerChatMessage_, $Component_, $ChatType$Bound, $ChatType$Bound_, $FormattedText, $PlayerChatMessage, $Component } from "@package/net/minecraft/network/chat";
import { $ParticleProvider$Sprite_, $ParticleEngine$SpriteParticleRegistration_, $ParticleProvider_, $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $GuiLayerManager$NamedLayer_ } from "@package/net/neoforged/neoforge/client/gui";
import { $CommandBuildContext, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $PlayerSkin$Model, $PlayerSkin$Model_ } from "@package/net/minecraft/client/resources";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $Block_, $SkullBlock$Type_ } from "@package/net/minecraft/world/level/block";
import { $EntityHitResult, $BlockHitResult, $HitResult } from "@package/net/minecraft/world/phys";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
import { $Matrix4f } from "@package/org/joml";
import { $AnimationTarget_ } from "@package/net/neoforged/neoforge/client/entity/animation";
import { $ItemColors, $ItemColor_ } from "@package/net/minecraft/client/color/item";
import { $BakedModel, $ModelResourceLocation, $ModelResourceLocation_, $ModelManager, $ModelBakery, $Material } from "@package/net/minecraft/client/resources/model";
import { $ItemFrame } from "@package/net/minecraft/world/entity/decoration";
import { $UUID_, $Set_, $Map, $List, $Map_, $List_, $Set, $UUID, $SequencedMap } from "@package/java/util";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $SkullModelBase, $EntityModel } from "@package/net/minecraft/client/model";
import { $Supplier_, $Function, $UnaryOperator_, $Consumer_, $Function_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockColors, $BlockColor_ } from "@package/net/minecraft/client/color/block";
import { $BlockEntityRendererProvider_ } from "@package/net/minecraft/client/renderer/blockentity";
import { $TextureAtlas, $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Class } from "@package/java/lang";
import { $QuadLighter } from "@package/net/neoforged/neoforge/client/model/lighting";
import { $File_, $File } from "@package/java/io";
import { $ItemLike_, $ColorResolver_, $Level_, $BlockAndTintGetter, $GameType, $GameType_, $Level } from "@package/net/minecraft/world/level";
import { $LivingEntityRenderer, $EntityRendererProvider_, $ItemFrameRenderer, $EntityRendererProvider$Context, $EntityRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $ICancellableEvent, $Event } from "@package/net/neoforged/bus/api";
import { $FogType_, $FogType } from "@package/net/minecraft/world/level/material";
import { $Toast_, $Toast } from "@package/net/minecraft/client/gui/components/toasts";
import { $LocalPlayer, $Input, $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $EntityModelSet, $ModelLayerLocation } from "@package/net/minecraft/client/model/geom";
import { $LerpingBossEvent } from "@package/net/minecraft/client/gui/components";
import { $ImmutableList, $ImmutableList$Builder, $ImmutableMap$Builder, $BiMap } from "@package/com/google/common/collect";
import { $NativeImage, $Window } from "@package/com/mojang/blaze3d/platform";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $AbstractContainerScreen, $EffectRenderingInventoryScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $MenuScreens$ScreenConstructor_, $Screen } from "@package/net/minecraft/client/gui/screens";
import { $AnimationChannel$Interpolation_ } from "@package/net/minecraft/client/animation";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer, $ByteBufferBuilder, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LayeredDraw$Layer_, $LayeredDraw$Layer, $GuiGraphics, $Font } from "@package/net/minecraft/client/gui";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as sound from "@package/net/neoforged/neoforge/client/event/sound";

declare module "@package/net/neoforged/neoforge/client/event" {
    /**
     * Fired for hooking into the entity view rendering in `GameRenderer`.
     * These can be used for customizing the visual features visible to the player.
     * See the various subclasses for listening to different features.
     * 
     * These events are fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ViewportEvent extends $Event {
        /**
         * @return the camera information
         */
        getCamera(): $Camera;
        /**
         * @return the game renderer
         */
        getRenderer(): $GameRenderer;
        /**
         * @return the partial tick
         */
        getPartialTick(): number;
        constructor(renderer: $GameRenderer, camera: $Camera, partialTick: number);
        get camera(): $Camera;
        get renderer(): $GameRenderer;
        get partialTick(): number;
    }
    /**
     * Fired for registering additional skull models at the appropriate time.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus,
     * only on the logical client.
     */
    export class $EntityRenderersEvent$CreateSkullModels extends $EntityRenderersEvent {
        /**
         * @return the set of entity models
         */
        getEntityModelSet(): $EntityModelSet;
        /**
         * Registers the constructor for a skull block with the given `Type`.
         * These will be inserted into the maps used by the item, entity, and block model renderers at the appropriate
         * time.
         */
        registerSkullModel(type: $SkullBlock$Type_, model: $SkullModelBase): void;
        constructor(builder: $ImmutableMap$Builder<$SkullBlock$Type_, $SkullModelBase>, entityModelSet: $EntityModelSet);
        get entityModelSet(): $EntityModelSet;
    }
    /**
     * Use to create a custom stages.
     * Fired after the LevelRenderer has been created.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $RenderLevelStageEvent$RegisterStageEvent extends $Event implements $IModBusEvent {
        register(arg0: $ResourceLocation_, arg1: $RenderType): $RenderLevelStageEvent$Stage;
        constructor();
    }
    /**
     * Fired when a chat message is received on the client.
     * This can be used for filtering and detecting messages with specific words or phrases, and suppressing them.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, the message is not displayed in the chat message window.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ClientChatReceivedEvent extends $Event implements $ICancellableEvent {
        /**
         * @return the message sender.
         * This will be `Util#NIL_UUID` if the message is a system message.
         */
        getSender(): $UUID;
        /**
         * @return the bound chat type of the chat message.
         * This contains the chat type, display name of the sender, and nullable target name depending on the chat type.
         * 
         * This may be `null` when the message doesn't have a specific source (i.e. for system messages).
         */
        getBoundChatType(): $ChatType$Bound;
        /**
         * @return the message that will be displayed in the chat message window, if the event is not cancelled
         */
        getMessage(): $Component;
        /**
         * @return `true` if the message was sent by the system, `false` otherwise
         */
        isSystem(): boolean;
        /**
         * Sets the new message to be displayed in the chat message window, if the event is not cancelled.
         */
        setMessage(message: $Component_): void;
        setCanceled(arg0: boolean): void;
        /**
         * @return `true` if the message was sent by the system, `false` otherwise
         */
        isCanceled(): boolean;
        constructor(boundChatType: $ChatType$Bound_, message: $Component_, sender: $UUID_);
        get sender(): $UUID;
        get boundChatType(): $ChatType$Bound;
        get system(): boolean;
    }
    /**
     * Allows users to register custom key mappings.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $RegisterKeyMappingsEvent extends $Event implements $IModBusEvent {
        /**
         * Registers a new key mapping.
         */
        register(key: $KeyMapping): void;
        constructor(options: $Options);
    }
    /**
     * Fired **after** a GUI layer is rendered to the screen, if the corresponding `Pre` is not cancelled.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $RenderGuiLayerEvent$Post extends $RenderGuiLayerEvent {
        constructor(guiGraphics: $GuiGraphics, partialTick: $DeltaTracker, name: $ResourceLocation_, layer: $LayeredDraw$Layer_);
    }
    /**
     * Fired before the player's arm is rendered in first person. This is a more targeted version of `RenderHandEvent`,
     * and can be used to replace the rendering of the player's arm, such as for rendering armor on the arm or outright
     * replacing the arm with armor.
     * 
     * This event is cancellable, and does not have a result.
     * If this event is cancelled, then the arm will not be rendered.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $RenderArmEvent extends $Event implements $ICancellableEvent {
        /**
         * @return the client player that is having their arm rendered In general, this will be the same as
         * `Minecraft#player`.
         */
        getPlayer(): $AbstractClientPlayer;
        /**
         * @return the source of rendering buffers
         */
        getMultiBufferSource(): $MultiBufferSource;
        /**
         * @return the amount of packed (sky and block) light for rendering
         */
        getPackedLight(): number;
        /**
         * @return the arm being rendered
         */
        getArm(): $HumanoidArm;
        /**
         * @return the pose stack used for rendering
         */
        getPoseStack(): $PoseStack;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(poseStack: $PoseStack, multiBufferSource: $MultiBufferSource_, packedLight: number, player: $AbstractClientPlayer, arm: $HumanoidArm_);
        get player(): $AbstractClientPlayer;
        get multiBufferSource(): $MultiBufferSource;
        get packedLight(): number;
        get arm(): $HumanoidArm;
        get poseStack(): $PoseStack;
    }
    /**
     * Fired to allow mods to register client commands.
     * 
     * Some command arguments behave differently for the client commands dispatcher:
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $RegisterClientCommandsEvent extends $Event {
        /**
         * @return the command dispatcher for registering commands to be executed on the client
         */
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        /**
         * @return the context to build the commands for
         */
        getBuildContext(): $CommandBuildContext;
        constructor(dispatcher: $CommandDispatcher<$CommandSourceStack>, context: $CommandBuildContext);
        get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
        get buildContext(): $CommandBuildContext;
    }
    /**
     * Fired **before** the mouse drag is handled by the screen.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, the screen's mouse drag handler will be bypassed
     * and the corresponding `Post` will not be fired.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ScreenEvent$MouseDragged$Pre extends $ScreenEvent$MouseDragged implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(screen: $Screen, mouseX: number, mouseY: number, mouseButton: number, dragX: number, dragY: number);
    }
    /**
     * Allows users to register their own geometry loaders for use in block/item models.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $ModelEvent$RegisterGeometryLoaders extends $ModelEvent implements $IModBusEvent {
        /**
         * Registers a new geometry loader.
         */
        register(key: $ResourceLocation_, loader: $IGeometryLoader_<never>): void;
        constructor(loaders: $Map_<$ResourceLocation_, $IGeometryLoader_<never>>);
    }
    /**
     * Fired when game pause state is about to change
     * 
     * These events are fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ClientPauseChangeEvent extends $Event {
        /**
         * On Pre it returns what is the upcoming pause state.
         * Cancelling will not modify this value.
         * 
         * On Post it returns the updated pause state
         * 
         * @return the pause state
         */
        isPaused(): boolean;
        constructor(pause: boolean);
        get paused(): boolean;
    }
    /**
     * Fired during tooltip rendering.
     * See the various subclasses for listening to specific events.
     */
    export class $RenderTooltipEvent extends $Event {
        /**
         * @return the X position of the tooltip box By default, this is the mouse X position.
         */
        getY(): number;
        /**
         * @return the unmodifiable list of tooltip components
         * 
         * Use `ItemTooltipEvent` or `GatherComponents` to modify tooltip contents or components.
         */
        getComponents(): $List<$ClientTooltipComponent>;
        /**
         * @return the X position of the tooltip box By default, this is the mouse X position.
         */
        getX(): number;
        /**
         * @return The font used to render the text
         */
        getFont(): $Font;
        /**
         * {@return the item stack which the tooltip is being rendered for, or an empty
         * item stack if there is no associated item stack}
         */
        getItemStack(): $ItemStack;
        /**
         * @return the graphics helper for the gui
         */
        getGraphics(): $GuiGraphics;
        get y(): number;
        get components(): $List<$ClientTooltipComponent>;
        get x(): number;
        get font(): $Font;
        get itemStack(): $ItemStack;
        get graphics(): $GuiGraphics;
    }
    /**
     * Fired when the `RecipeManager` has received and synced the recipes from the server to the client.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $RecipesUpdatedEvent extends $Event {
        /**
         * @return the recipe manager
         */
        getRecipeManager(): $RecipeManager;
        constructor(recipeManager: $RecipeManager);
        get recipeManager(): $RecipeManager;
    }
    /**
     * Fired when a player is being rendered.
     * See the two subclasses for listening for before and after rendering.
     */
    export class $RenderPlayerEvent extends $PlayerEvent {
        /**
         * @return the source of rendering buffers
         */
        getMultiBufferSource(): $MultiBufferSource;
        /**
         * @return the amount of packed (sky and block) light for rendering
         */
        getPackedLight(): number;
        /**
         * @return the pose stack used for rendering
         */
        getPoseStack(): $PoseStack;
        /**
         * @return the player entity renderer
         */
        getRenderer(): $PlayerRenderer;
        /**
         * @return the partial tick
         */
        getPartialTick(): number;
        get multiBufferSource(): $MultiBufferSource;
        get packedLight(): number;
        get poseStack(): $PoseStack;
        get renderer(): $PlayerRenderer;
        get partialTick(): number;
    }
    /**
     * Allows users to register custom `DimensionSpecialEffects` for their dimensions.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $RegisterDimensionSpecialEffectsEvent extends $Event implements $IModBusEvent {
        /**
         * Registers the effects for a given dimension type.
         */
        register(dimensionType: $ResourceLocation_, effects: $DimensionSpecialEffects): void;
        constructor(effects: $Map_<$ResourceLocation_, $DimensionSpecialEffects>);
    }
    /**
     * `Post` is fired once per client tick, after the client performs work for the current tick.
     * 
     * This event only fires on the physical client.
     */
    export class $ClientTickEvent$Post extends $ClientTickEvent {
        constructor();
    }
    /**
     * Fired after the field of vision (FOV) modifier for the player is calculated to allow developers to adjust it further.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ComputeFovModifierEvent extends $Event {
        /**
         * @return the player affected by this event
         */
        getPlayer(): $Player;
        /**
         * @return the original field of vision (FOV) of the player, before any modifications or interpolation
         */
        getFovModifier(): number;
        /**
         * @return the original field of vision (FOV) of the player, before any modifications or interpolation
         */
        getNewFovModifier(): number;
        /**
         * Sets the new field of vision (FOV) of the player.
         */
        setNewFovModifier(newFovModifier: number): void;
        constructor(player: $Player, fovModifier: number);
        get player(): $Player;
        get fovModifier(): number;
    }
    /**
     * Fired **before** the chat messages overlay is rendered to the screen.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $CustomizeGuiOverlayEvent$Chat extends $CustomizeGuiOverlayEvent {
        getPosX(): number;
        getPosY(): number;
        /**
         * Sets the new X position for rendering the chat messages overlay
         */
        setPosX(posX: number): void;
        /**
         * Sets the new X position for rendering the chat messages overlay
         */
        setPosY(posX: number): void;
        constructor(window: $Window, guiGraphics: $GuiGraphics, partialTick: $DeltaTracker, posX: number, posY: number);
    }
    /**
     * Fired for registering entity and block entity renderers at the appropriate time.
     * For registering entity renderer layers to existing entity renderers (whether vanilla or registered through this
     * event), listen for the `AddLayers` event instead.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $EntityRenderersEvent$RegisterRenderers extends $EntityRenderersEvent {
        /**
         * Registers an entity renderer for the given entity type.
         */
        registerEntityRenderer<T extends $Entity>(entityType: $EntityType_<T>, entityRendererProvider: $EntityRendererProvider_<T>): void;
        /**
         * Registers a block entity renderer for the given block entity type.
         */
        registerBlockEntityRenderer<T extends $BlockEntity>(blockEntityType: $BlockEntityType_<T>, blockEntityRendererProvider: $BlockEntityRendererProvider_<T>): void;
        constructor();
    }
    /**
     * Fired **before** the mouse release is handled by the screen.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, the screen's mouse release handler will be bypassed
     * and the corresponding `Post` will not be fired.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ScreenEvent$MouseButtonReleased$Pre extends $ScreenEvent$MouseButtonReleased implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(screen: $Screen, mouseX: number, mouseY: number, button: number);
    }
    /**
     * Allows registration of custom `ColorResolver` implementations to be used with
     * `BlockAndTintGetter#getBlockTint(BlockPos, ColorResolver)`.
     */
    export class $RegisterColorHandlersEvent$ColorResolvers extends $RegisterColorHandlersEvent {
        register(resolver: $ColorResolver_): void;
        constructor(builder: $ImmutableList$Builder<$ColorResolver_>);
    }
    /**
     * Fired for different client connectivity events.
     * See the various subclasses to listen for specific events.
     * 
     * These events are fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ClientPlayerNetworkEvent extends $Event {
        /**
         * @return the player instance
         */
        getPlayer(): $LocalPlayer;
        /**
         * @return the multiplayer game mode controller for the player
         */
        getMultiPlayerGameMode(): $MultiPlayerGameMode;
        /**
         * @return the network connection for the player
         */
        getConnection(): $Connection;
        get player(): $LocalPlayer;
        get multiPlayerGameMode(): $MultiPlayerGameMode;
        get connection(): $Connection;
    }
    /**
     * Fired **before** the HUD is rendered to the screen.
     * 
     * This event is cancellable, and does not have a result.
     * If this event is cancelled, then the overlay will not be rendered, and the corresponding `Post` event will
     * not be fired.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $RenderGuiEvent$Pre extends $RenderGuiEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(guiGraphics: $GuiGraphics, partialTick: $DeltaTracker);
    }
    /**
     * `Pre` is fired once per client tick, before the client performs work for the current tick.
     * 
     * This event only fires on the physical client.
     */
    export class $ClientTickEvent$Pre extends $ClientTickEvent {
        constructor();
    }
    /**
     * A rendering callback that will be invoked during chunk meshing.
     */
    export class $AddSectionGeometryEvent$AdditionalSectionRenderer {
    }
    export interface $AddSectionGeometryEvent$AdditionalSectionRenderer {
        render(arg0: $AddSectionGeometryEvent$SectionRenderingContext): void;
    }
    /**
     * Values that may be interpreted as {@link $AddSectionGeometryEvent$AdditionalSectionRenderer}.
     */
    export type $AddSectionGeometryEvent$AdditionalSectionRenderer_ = ((arg0: $AddSectionGeometryEvent$SectionRenderingContext) => void);
    /**
     * Fired after the player's movement inputs are updated.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $MovementInputUpdateEvent extends $PlayerEvent {
        /**
         * @return the player's movement inputs
         */
        getInput(): $Input;
        constructor(player: $Player, input: $Input);
        get input(): $Input;
    }
    /**
     * Fired **before** a boss health bar is rendered to the screen.
     * 
     * This event is cancellable, and does not have a result.
     * Cancelling this event will prevent the given bar from rendering.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $CustomizeGuiOverlayEvent$BossEventProgress extends $CustomizeGuiOverlayEvent implements $ICancellableEvent {
        /**
         * Sets the Y position increment before rendering the next boss health bar.
         */
        setIncrement(increment: number): void;
        /**
         * @return the X position of the boss health bar
         */
        getIncrement(): number;
        /**
         * @return the X position of the boss health bar
         */
        getY(): number;
        /**
         * @return the X position of the boss health bar
         */
        getX(): number;
        getBossEvent(): $LerpingBossEvent;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(window: $Window, guiGraphics: $GuiGraphics, partialTick: $DeltaTracker, bossEvent: $LerpingBossEvent, x: number, y: number, increment: number);
        get y(): number;
        get x(): number;
        get bossEvent(): $LerpingBossEvent;
    }
    /**
     * Fired to allow mods to register custom shaders.
     * This event is fired after the default Minecraft shaders have been registered.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $RegisterShadersEvent extends $Event implements $IModBusEvent {
        /**
         * @return the client-side resource provider
         */
        getResourceProvider(): $ResourceProvider;
        /**
         * Registers a shader, and a callback for when the shader is loaded.
         * 
         * When creating a `ShaderInstance`, pass in the resource provider as the resource provider.
         * 
         * Mods should not store the shader instance passed into this method. Instead, mods should store the shader
         * passed into the registered load callback.
         */
        registerShader(shaderInstance: $ShaderInstance, onLoaded: $Consumer_<$ShaderInstance>): void;
        constructor(resourceProvider: $ResourceProvider_, shaderList: $List_<$Pair<$ShaderInstance, $Consumer_<$ShaderInstance>>>);
        get resourceProvider(): $ResourceProvider;
    }
    /**
     * Allows registering custom `AnimationTarget`s and
     * interpolation functions for loading JSON entity animation files.
     */
    export class $RegisterJsonAnimationTypesEvent extends $Event implements $IModBusEvent {
        /**
         * Register a custom `AnimationTarget` with the specified `key`.
         */
        registerTarget(key: $ResourceLocation_, target: $AnimationTarget_): void;
        /**
         * Register a custom interpolation function with the specified `key`.
         */
        registerInterpolation(key: $ResourceLocation_, interpolation: $AnimationChannel$Interpolation_): void;
        constructor(targets: $ImmutableMap$Builder<$ResourceLocation_, $AnimationTarget_>, interpolations: $ImmutableMap$Builder<$ResourceLocation_, $AnimationChannel$Interpolation_>);
    }
    /**
     * Fired ahead of rendering any active mob effects in the inventory screen.
     * Can be used to select the size of the effects display (full or compact) or even hide or replace vanilla's rendering entirely.
     * This event can also be used to modify the horizontal position of the stack of effects being rendered.
     * 
     * This event is cancellable and does not have a result.
     * Cancelling this event will prevent vanilla rendering.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ScreenEvent$RenderInventoryMobEffects extends $ScreenEvent implements $ICancellableEvent {
        /**
         * Sets whether the effects should be rendered in compact mode (only icons, no text), or the default full size.
         */
        setCompact(compact: boolean): void;
        /**
         * Replaces the horizontal offset of the effect stack
         */
        setHorizontalOffset(offset: number): void;
        /**
         * The available space to the right of the inventory.
         */
        getAvailableSpace(): number;
        /**
         * The available space to the right of the inventory.
         */
        getHorizontalOffset(): number;
        /**
         * Replaces the horizontal offset of the effect stack
         */
        addHorizontalOffset(offset: number): void;
        /**
         * Whether the effects should be rendered in compact mode (only icons, no text), or the default full size.
         */
        isCompact(): boolean;
        /**
         * Sets whether the effects should be rendered in compact mode (only icons, no text), or the default full size.
         */
        setCanceled(compact: boolean): void;
        /**
         * Whether the effects should be rendered in compact mode (only icons, no text), or the default full size.
         */
        isCanceled(): boolean;
        constructor(screen: $Screen, availableSpace: number, compact: boolean, horizontalOffset: number);
        get availableSpace(): number;
    }
    /**
     * Fired for registering block and item color handlers at the appropriate time.
     * See the two subclasses for registering block or item color handlers.
     * 
     * These events are fired on the mod-specific event bus, only on the logical client.
     */
    export class $RegisterColorHandlersEvent extends $Event implements $IModBusEvent {
    }
    /**
     * Fired before an entity's selection highlight is rendered.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $RenderHighlightEvent$Entity extends $RenderHighlightEvent {
        /**
         * @return the entity hit result
         */
        getTarget(): $EntityHitResult;
        constructor(levelRenderer: $LevelRenderer, camera: $Camera, target: $EntityHitResult, deltaTracker: $DeltaTracker, poseStack: $PoseStack, bufferSource: $MultiBufferSource_);
        get target(): $EntityHitResult;
    }
    /**
     * Fired for registering particle providers at the appropriate time.
     * 
     * `ParticleType`s must be registered during `RegisterEvent` as usual;
     * this event is only for the `ParticleProvider`s.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $RegisterParticleProvidersEvent extends $Event implements $IModBusEvent {
        /**
         * Registers a ParticleProvider for a non-json-based ParticleType.
         * These particles do not receive a list of texture sprites to use for rendering themselves.
         * 
         * There must be **no** particle json with an ID matching the ParticleType,
         * or a redundant texture list error will occur when particle jsons load.
         */
        registerSpecial<T extends $ParticleOptions>(type: $ParticleType_<T>, provider: $ParticleProvider_<T>): void;
        /**
         * Registers a ParticleProvider for a json-based ParticleType with a single texture;
         * the resulting `TextureSheetParticle`s will use that texture when created.
         * 
         * A particle json with an ID matching the ParticleType **must exist** in the `particles` asset folder,
         * or a missing texture list error will occur when particle jsons load.
         */
        registerSprite<T extends $ParticleOptions>(type: $ParticleType_<T>, sprite: $ParticleProvider$Sprite_<T>): void;
        /**
         * Registers a ParticleProvider for a json-based ParticleType.
         * Particle jsons define a list of texture sprites which the particle can use to render itself.
         * 
         * A particle json with an ID matching the ParticleType **must exist** in the `particles` asset folder,
         * or a missing texture list error will occur when particle jsons load.
         */
        registerSpriteSet<T extends $ParticleOptions>(type: $ParticleType_<T>, registration: $ParticleEngine$SpriteParticleRegistration_<T>): void;
        constructor(particleEngine: $ParticleEngine);
    }
    /**
     * Fired **after** the mouse drag is handled, if not handled by the screen
     * and the corresponding `Pre` is not cancelled.
     * 
     * This event is not cancellable, and does not have a result.
     * If the event is cancelled, the mouse drag will be set as handled.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ScreenEvent$MouseDragged$Post extends $ScreenEvent$MouseDragged {
        constructor(screen: $Screen, mouseX: number, mouseY: number, mouseButton: number, dragX: number, dragY: number);
    }
    /**
     * Fired for on different events/actions relating to entity renderers.
     * See the various subclasses for listening to different events.
     * 
     * These events are fired on the mod-specific event bus, only on the logical client.
     */
    export class $EntityRenderersEvent extends $Event implements $IModBusEvent {
    }
    /**
     * Fired **before** the screen is drawn.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, the screen will not be drawn.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ScreenEvent$Render$Pre extends $ScreenEvent$Render implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(screen: $Screen, guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number);
    }
    /**
     * Fired in MouseHandler#turnPlayer() when retrieving the values of mouse sensitivity and cinematic camera, prior to running calculations on these values.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $CalculatePlayerTurnEvent extends $Event {
        /**
         * Returns the raw mouse sensitivity value
         */
        getMouseSensitivity(): number;
        /**
         * Returns the raw cinematic camera value
         */
        getCinematicCameraEnabled(): boolean;
        /**
         * Sets the mouse sensitivity value.
         */
        setMouseSensitivity(mouseSensitivity: number): void;
        /**
         * Sets the cinematic camera value.
         */
        setCinematicCameraEnabled(cinematicCameraEnabled: boolean): void;
        constructor(mouseSensitivity: number, cinematicCameraEnabled: boolean);
    }
    /**
     * Fired when the `ModelBakery` is notified of the resource manager reloading.
     * Allows developers to register models to be loaded, along with their dependencies. Models registered through this
     * event must use the `ModelResourceLocation#STANDALONE_VARIANT` variant.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $ModelEvent$RegisterAdditional extends $ModelEvent implements $IModBusEvent {
        /**
         * Registers a model to be loaded, along with its dependencies.
         * 
         * The `ModelResourceLocation` passed to this method must later be used to recover the loaded model.
         */
        register(model: $ModelResourceLocation_): void;
        constructor(models: $Set_<$ModelResourceLocation_>);
    }
    /**
     * Fired when a mouse button is pressed/released, **before** being processed by vanilla.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, then the mouse event will not be processed by vanilla (e.g. keymappings and screens)
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $InputEvent$MouseButton$Pre extends $InputEvent$MouseButton implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(button: number, action: number, modifiers: number);
    }
    /**
     * `Pre` is fired once per frame, before the current frame is rendered via `GameRenderer#render(float, long, boolean)`.
     * 
     * This event only fires on the physical client.
     */
    export class $RenderFrameEvent$Pre extends $RenderFrameEvent {
        constructor(partialTick: $DeltaTracker);
    }
    /**
     * Fired for **rendering** custom fog. The plane distances are based on the player's render distance.
     * 
     * This event is cancellable, and has a result.
     * 
     * The event must be cancelled for any changes to the plane distances to take effect.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ViewportEvent$RenderFog extends $ViewportEvent implements $ICancellableEvent {
        /**
         * @return the distance to the far plane where the fog ends
         */
        getNearPlaneDistance(): number;
        /**
         * @return the distance to the far plane where the fog ends
         */
        getFarPlaneDistance(): number;
        /**
         * @return the shape of the fog being rendered
         */
        getFogShape(): $FogShape;
        /**
         * Sets the new shape of the fog being rendered. The new shape will only take effect if the event is cancelled.
         */
        setFogShape(shape: $FogShape_): void;
        /**
         * Sets the distance to the far plane of the fog.
         */
        setFarPlaneDistance(distance: number): void;
        /**
         * Sets the distance to the far plane of the fog.
         */
        setNearPlaneDistance(distance: number): void;
        /**
         * Sets the distance to the far plane of the fog.
         */
        scaleNearPlaneDistance(distance: number): void;
        /**
         * Sets the distance to the far plane of the fog.
         */
        scaleFarPlaneDistance(distance: number): void;
        getMode(): $FogRenderer$FogMode;
        /**
         * @return the type of fog being rendered
         */
        getType(): $FogType;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $FogRenderer$FogMode_, arg1: $FogType_, arg2: $Camera, arg3: number, arg4: number, arg5: number, arg6: $FogShape_);
        get mode(): $FogRenderer$FogMode;
        get type(): $FogType;
    }
    /**
     * Fired **before** the mouse click is handled by the screen.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, the screen's mouse click handler will be bypassed
     * and the corresponding `Post` will not be fired.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ScreenEvent$MouseButtonPressed$Pre extends $ScreenEvent$MouseButtonPressed implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(screen: $Screen, mouseX: number, mouseY: number, button: number);
    }
    /**
     * Fired **after** the screen's overridable initialization method is called.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ScreenEvent$Init$Post extends $ScreenEvent$Init {
        constructor(screen: $Screen, list: $List_<$GuiEventListener>, add: $Consumer_<$GuiEventListener>, remove: $Consumer_<$GuiEventListener>);
    }
    /**
     * Fired for registering texture atlases that will be used with `Material` or
     * other systems which retrieve the atlas via `Minecraft#getTextureAtlas(ResourceLocation)` or
     * `ModelManager#getAtlas(ResourceLocation)`.
     * 
     * If an atlas is registered via this event, then it must **NOT** be used through a `TextureAtlasHolder`.
     * 
     * This event fires during startup when the `ModelManager` is constructed.
     * 
     * This event is not cancellable.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $RegisterMaterialAtlasesEvent extends $Event implements $IModBusEvent {
        /**
         * Register a texture atlas with the given name and info location
         */
        register(atlasLocation: $ResourceLocation_, atlasInfoLocation: $ResourceLocation_): void;
        constructor(atlases: $Map_<$ResourceLocation_, $ResourceLocation_>);
    }
    /**
     * Fired when a keyboard key corresponding to a character is typed.
     * See the two subclasses for listening before and after the normal handling.
     */
    export class $ScreenEvent$CharacterTyped extends $ScreenEvent {
        /**
         * @return a bit field representing the active modifier keys
         */
        getModifiers(): number;
        /**
         * @return the character code point
         */
        getCodePoint(): string;
        constructor(screen: $Screen, codePoint: string, modifiers: number);
        get modifiers(): number;
        get codePoint(): string;
    }
    /**
     * Fired **after** an entity is rendered, if the corresponding `Post` is not cancelled.
     * 
     * This event is not cancelable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $RenderLivingEvent$Post<T extends $LivingEntity, M extends $EntityModel<T>> extends $RenderLivingEvent<T, M> {
        constructor(entity: $LivingEntity, renderer: $LivingEntityRenderer<T, M>, partialTick: number, poseStack: $PoseStack, multiBufferSource: $MultiBufferSource_, packedLight: number);
    }
    /**
     * Fired when the mouse was dragged while a button is being held down.
     * See the two subclasses for listening before and after the normal handling.
     */
    export class $ScreenEvent$MouseDragged extends $ScreenEvent$MouseInput {
        /**
         * @return the mouse button's input code
         */
        getMouseButton(): number;
        /**
         * @return amount of mouse drag along the X axis
         */
        getDragX(): number;
        /**
         * @return amount of mouse drag along the X axis
         */
        getDragY(): number;
        constructor(screen: $Screen, mouseX: number, mouseY: number, mouseButton: number, dragX: number, dragY: number);
        get mouseButton(): number;
        get dragX(): number;
        get dragY(): number;
    }
    /**
     * Fired when the colours for the tooltip background are determined.
     * This can be used to modify the background color and the border's gradient colors.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $RenderTooltipEvent$Color extends $RenderTooltipEvent {
        /**
         * Sets the new color for the tooltip background. This sets both the gradient start and end color for the
         * background to this color.
         */
        setBackground(background: number): void;
        /**
         * Sets the new color for the tooltip background. This sets both the gradient start and end color for the
         * background to this color.
         */
        setBackgroundStart(background: number): void;
        /**
         * Sets the new color for the tooltip background. This sets both the gradient start and end color for the
         * background to this color.
         */
        setBackgroundEnd(background: number): void;
        /**
         * @return the gradient start color for the tooltip background (top edge)
         */
        getOriginalBackgroundStart(): number;
        /**
         * @return the gradient start color for the tooltip background (top edge)
         */
        getOriginalBackgroundEnd(): number;
        /**
         * @return the gradient start color for the tooltip background (top edge)
         */
        getOriginalBorderStart(): number;
        /**
         * @return the gradient start color for the tooltip background (top edge)
         */
        getOriginalBorderEnd(): number;
        /**
         * Sets the new color for the tooltip background. This sets both the gradient start and end color for the
         * background to this color.
         */
        setBorderEnd(background: number): void;
        /**
         * Sets the new color for the tooltip background. This sets both the gradient start and end color for the
         * background to this color.
         */
        setBorderStart(background: number): void;
        /**
         * @return the gradient start color for the tooltip background (top edge)
         */
        getBackgroundStart(): number;
        /**
         * @return the gradient start color for the tooltip background (top edge)
         */
        getBackgroundEnd(): number;
        /**
         * @return the gradient start color for the tooltip background (top edge)
         */
        getBorderStart(): number;
        /**
         * @return the gradient start color for the tooltip background (top edge)
         */
        getBorderEnd(): number;
        constructor(stack: $ItemStack_, graphics: $GuiGraphics, x: number, y: number, fr: $Font, background: number, borderStart: number, borderEnd: number, components: $List_<$ClientTooltipComponent>);
        set background(value: number);
        get originalBackgroundStart(): number;
        get originalBackgroundEnd(): number;
        get originalBorderStart(): number;
        get originalBorderEnd(): number;
    }
    /**
     * Fired for hooking the maximum distance from the player to the camera in third-person view.
     * The ray-cast that reduces this distance based on the blocks around the player is invoked after this event is fired.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $CalculateDetachedCameraDistanceEvent extends $Event {
        /**
         * Returns the camera instance.
         */
        getCamera(): $Camera;
        /**
         * Returns the scaling factor that will be applied to the final distance,
         * based on the size of the camera entity.
         */
        getDistance(): number;
        /**
         * Sets the pre-scaling factor distance from the camera to the camera entity.
         */
        setDistance(distance: number): void;
        /**
         * Returns `true` if the camera is flipped (ie facing backward instead of forward).
         */
        isCameraFlipped(): boolean;
        /**
         * Returns the scaling factor that will be applied to the final distance,
         * based on the size of the camera entity.
         */
        getEntityScalingFactor(): number;
        constructor(camera: $Camera, cameraFlipped: boolean, entityScale: number, distance: number);
        get camera(): $Camera;
        get cameraFlipped(): boolean;
        get entityScalingFactor(): number;
    }
    /**
     * Fired **before** the tooltip is rendered.
     * This can be used to modify the positioning and font of the tooltip.
     * 
     * This event is cancellable, and does not have a result.
     * If this event is cancelled, then the tooltip will not be rendered and the corresponding
     * `Color` will not be fired.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $RenderTooltipEvent$Pre extends $RenderTooltipEvent implements $ICancellableEvent {
        /**
         * Sets the X origin of the tooltip.
         */
        setX(x: number): void;
        /**
         * Sets the X origin of the tooltip.
         */
        setY(x: number): void;
        getTooltipPositioner(): $ClientTooltipPositioner;
        /**
         * Sets the font to be used to render text.
         */
        setFont(fr: $Font): void;
        /**
         * @return the width of the screen.
         * The lines of text within the tooltip are wrapped to be within the screen width, and the tooltip box itself
         * is moved to be within the screen width.
         */
        getScreenWidth(): number;
        /**
         * @return the width of the screen.
         * The lines of text within the tooltip are wrapped to be within the screen width, and the tooltip box itself
         * is moved to be within the screen width.
         */
        getScreenHeight(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(stack: $ItemStack_, graphics: $GuiGraphics, x: number, y: number, screenWidth: number, screenHeight: number, font: $Font, components: $List_<$ClientTooltipComponent>, positioner: $ClientTooltipPositioner_);
        set x(value: number);
        set y(value: number);
        get tooltipPositioner(): $ClientTooltipPositioner;
        set font(value: $Font);
        get screenWidth(): number;
        get screenHeight(): number;
    }
    /**
     * Fired for customizing the **color** of the fog visible to the player.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ViewportEvent$ComputeFogColor extends $ViewportEvent {
        /**
         * @return the red color value of the fog
         */
        getRed(): number;
        /**
         * @return the red color value of the fog
         */
        getGreen(): number;
        /**
         * @return the red color value of the fog
         */
        getBlue(): number;
        /**
         * Sets the new red color value of the fog.
         */
        setRed(red: number): void;
        /**
         * Sets the new red color value of the fog.
         */
        setGreen(red: number): void;
        /**
         * Sets the new red color value of the fog.
         */
        setBlue(red: number): void;
        constructor(camera: $Camera, partialTicks: number, red: number, green: number, blue: number);
    }
    /**
     * Fired when the `ModelManager` is notified of the resource manager reloading.
     * Called after the model registry is set up and cached in the `BlockModelShaper`.
     * 
     * The model registry given by this event is unmodifiable. To modify the model registry, use
     * `ModifyBakingResult` instead.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $ModelEvent$BakingCompleted extends $ModelEvent implements $IModBusEvent {
        getModels(): $Map<$ModelResourceLocation, $BakedModel>;
        getModelBakery(): $ModelBakery;
        getModelManager(): $ModelManager;
        constructor(modelManager: $ModelManager, models: $Map_<$ModelResourceLocation_, $BakedModel>, modelBakery: $ModelBakery);
        get models(): $Map<$ModelResourceLocation, $BakedModel>;
        get modelBakery(): $ModelBakery;
        get modelManager(): $ModelManager;
    }
    /**
     * Fired before a block's selection highlight is rendered.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, then the selection highlight will not be rendered.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $RenderHighlightEvent$Block extends $RenderHighlightEvent implements $ICancellableEvent {
        /**
         * @return the block hit result
         */
        getTarget(): $BlockHitResult;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(levelRenderer: $LevelRenderer, camera: $Camera, target: $BlockHitResult, deltaTracker: $DeltaTracker, poseStack: $PoseStack, bufferSource: $MultiBufferSource_);
        get target(): $BlockHitResult;
    }
    /**
     * This event is fired before an entity renderer renders the nameplate of an entity.
     * It allows reacting to the render and controlling if the name plate will be rendered, as well as changing the rendered name.
     * 
     * This event is only fired on the logical client.
     */
    export class $RenderNameTagEvent extends $EntityEvent {
        /**
         * @return if the nameplate will render or not
         */
        canRender(): $TriState;
        /**
         * @return the source of rendering buffers
         */
        getMultiBufferSource(): $MultiBufferSource;
        /**
         * @return the amount of packed (sky and block) light for rendering
         */
        getPackedLight(): number;
        /**
         * @return the text on the nameplate that will be rendered
         */
        getOriginalContent(): $Component;
        /**
         * @return the entity renderer rendering the nameplate
         */
        getEntityRenderer(): $EntityRenderer<never>;
        /**
         * Changes if the content of the nameplate will be rendered.
         * `TriState#TRUE` and `TriState#FALSE` will allow/deny the render respectively.
         * 
         * Using `TriState#DEFAULT` will cause the name to render if `EntityRenderer#shouldShowName` returns true.
         */
        setCanRender(canRender: $TriState_): void;
        /**
         * @return the pose stack used for rendering
         */
        getPoseStack(): $PoseStack;
        /**
         * Sets the new text on the nameplate.
         */
        setContent(contents: $Component_): void;
        /**
         * @return the text on the nameplate that will be rendered
         */
        getContent(): $Component;
        /**
         * @return the partial tick
         */
        getPartialTick(): number;
        constructor(entity: $Entity, content: $Component_, entityRenderer: $EntityRenderer<never>, poseStack: $PoseStack, multiBufferSource: $MultiBufferSource_, packedLight: number, partialTick: number);
        get multiBufferSource(): $MultiBufferSource;
        get packedLight(): number;
        get originalContent(): $Component;
        get entityRenderer(): $EntityRenderer<never>;
        get poseStack(): $PoseStack;
        get partialTick(): number;
    }
    export class $RegisterGuiLayersEvent$Ordering extends $Enum<$RegisterGuiLayersEvent$Ordering> {
    }
    /**
     * Values that may be interpreted as {@link $RegisterGuiLayersEvent$Ordering}.
     */
    export type $RegisterGuiLayersEvent$Ordering_ = "before" | "after";
    /**
     * Fired when a tooltip gathers the `TooltipComponent`s to be rendered, before any text wrapping or processing.
     * The list of components and the maximum width of the tooltip can be modified through this event.
     * 
     * This event is cancellable, and does not have a result.
     * If this event is cancelled, then the list of components will be empty, causing the tooltip to not be rendered and
     * the corresponding `Pre` and `Color` to not be fired.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $RenderTooltipEvent$GatherComponents extends $Event implements $ICancellableEvent {
        /**
         * @return the width of the screen.
         * The lines of text within the tooltip are wrapped to be within the screen width, and the tooltip box itself
         * is moved to be within the screen width.
         */
        getMaxWidth(): number;
        /**
         * Sets the maximum width of the tooltip. Use `-1` for unlimited maximum width.
         */
        setMaxWidth(maxWidth: number): void;
        /**
         * {@return the item stack which the tooltip is being rendered for, or an empty
         * item stack if there is no associated item stack}
         */
        getItemStack(): $ItemStack;
        /**
         * @return the width of the screen.
         * The lines of text within the tooltip are wrapped to be within the screen width, and the tooltip box itself
         * is moved to be within the screen width.
         */
        getScreenWidth(): number;
        /**
         * @return the width of the screen.
         * The lines of text within the tooltip are wrapped to be within the screen width, and the tooltip box itself
         * is moved to be within the screen width.
         */
        getScreenHeight(): number;
        /**
         * @return the modifiable list of elements to be rendered on the tooltip These elements can be either
         * formatted text or custom tooltip components.
         */
        getTooltipElements(): $List<$Either<$FormattedText, $TooltipComponent>>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(itemStack: $ItemStack_, screenWidth: number, screenHeight: number, tooltipElements: $List_<$Either<$FormattedText, $TooltipComponent>>, maxWidth: number);
        get itemStack(): $ItemStack;
        get screenWidth(): number;
        get screenHeight(): number;
        get tooltipElements(): $List<$Either<$FormattedText, $TooltipComponent>>;
    }
    export class $RegisterMenuScreensEvent extends $Event implements $IModBusEvent {
        register<M extends $AbstractContainerMenu, U extends $Screen>(menuType: $MenuType_<M>, screenConstructor: $MenuScreens$ScreenConstructor_<M, U>): void;
        constructor(registeredScreens: $Map_<$MenuType_<never>, $MenuScreens$ScreenConstructor_<never, never>>);
    }
    /**
     * Fired before a hand is rendered in the first person view.
     * 
     * This event is cancellable, and does not have a result.
     * If this event is cancelled, then the hand will not be rendered.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $RenderHandEvent extends $Event implements $ICancellableEvent {
        /**
         * @return the hand being rendered
         */
        getHand(): $InteractionHand;
        /**
         * @return the partial tick
         */
        getSwingProgress(): number;
        /**
         * @return the source of rendering buffers
         */
        getMultiBufferSource(): $MultiBufferSource;
        /**
         * @return the amount of packed (sky and block) light for rendering
         */
        getPackedLight(): number;
        /**
         * @return the partial tick
         */
        getInterpolatedPitch(): number;
        /**
         * @return the partial tick
         */
        getEquipProgress(): number;
        /**
         * @return the pose stack used for rendering
         */
        getPoseStack(): $PoseStack;
        /**
         * @return the item stack to be rendered
         */
        getItemStack(): $ItemStack;
        /**
         * @return the partial tick
         */
        getPartialTick(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(hand: $InteractionHand_, poseStack: $PoseStack, multiBufferSource: $MultiBufferSource_, packedLight: number, partialTick: number, interpolatedPitch: number, swingProgress: number, equipProgress: number, stack: $ItemStack_);
        get hand(): $InteractionHand;
        get swingProgress(): number;
        get multiBufferSource(): $MultiBufferSource;
        get packedLight(): number;
        get interpolatedPitch(): number;
        get equipProgress(): number;
        get poseStack(): $PoseStack;
        get itemStack(): $ItemStack;
        get partialTick(): number;
    }
    /**
     * Fired **after** the key press is handled, if not handled by the screen
     * and the corresponding `Pre` is not cancelled.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, the key press will be set as handled.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ScreenEvent$KeyPressed$Post extends $ScreenEvent$KeyPressed implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(screen: $Screen, keyCode: number, scanCode: number, modifiers: number);
    }
    /**
     * Fired to allow mods to register their own SpriteSourceType.
     * This event is fired once during the construction of the `Minecraft` instance or
     * before datagen when client datagen is enabled.
     * 
     * This event is not cancellable.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $RegisterSpriteSourceTypesEvent extends $Event implements $IModBusEvent {
        /**
         * @deprecated
         * Registers the given `MapCodec` as SpriteSourceType under the given id.
         */
        register(id: $ResourceLocation_, codec: $MapCodec_<$SpriteSource>): $SpriteSourceType;
        /**
         * Registers the given `SpriteSourceType` under the given id.
         */
        register(id: $ResourceLocation_, sourceType: $SpriteSourceType_): void;
        constructor(types: $BiMap<$ResourceLocation_, $SpriteSourceType_>);
    }
    /**
     * Fired **before** the character input is handled by the screen.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, the screen's character input handler will be bypassed
     * and the corresponding `Post` will not be fired.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ScreenEvent$CharacterTyped$Pre extends $ScreenEvent$CharacterTyped implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(screen: $Screen, codePoint: string, modifiers: number);
    }
    /**
     * Fired before any `Screen` is opened, to allow changing it or preventing it from being opened.
     * All screen layers on the screen are closed before this event is fired.
     * 
     * This event is cancellable, and does not have a result.
     * If this event is cancelled, then the `Screen` shall be prevented from opening and any previous screen
     * will remain open. However, cancelling this event will not prevent the closing of screen layers which happened before
     * this event fired.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ScreenEvent$Opening extends $ScreenEvent implements $ICancellableEvent {
        /**
         * Gets the currently open screen at the time of the event being fired.
         * 
         * May be null if no screen was open.
         */
        getNewScreen(): $Screen;
        /**
         * Gets the currently open screen at the time of the event being fired.
         * 
         * May be null if no screen was open.
         */
        getCurrentScreen(): $Screen;
        /**
         * Sets the new screen to be opened if the event is not cancelled. May be null.
         */
        setNewScreen(newScreen: $Screen): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(currentScreen: $Screen, screen: $Screen);
        get currentScreen(): $Screen;
    }
    /**
     * Fired when the HUD is rendered to the screen.
     * See the two subclasses for listening to the two possible phases.
     */
    export class $RenderGuiEvent extends $Event {
        getGuiGraphics(): $GuiGraphics;
        getPartialTick(): $DeltaTracker;
        get guiGraphics(): $GuiGraphics;
        get partialTick(): $DeltaTracker;
    }
    /**
     * Fired when the client player logs out. This event may also fire when a new integrated server is being created.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ClientPlayerNetworkEvent$LoggingOut extends $ClientPlayerNetworkEvent {
        constructor(controller: $MultiPlayerGameMode, player: $LocalPlayer, networkManager: $Connection);
    }
    /**
     * Fired when the client player respawns, creating a new player instance to replace the old player instance.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ClientPlayerNetworkEvent$Clone extends $ClientPlayerNetworkEvent {
        /**
         * @return the previous player instance
         */
        getOldPlayer(): $LocalPlayer;
        /**
         * @return the previous player instance
         */
        getNewPlayer(): $LocalPlayer;
        constructor(pc: $MultiPlayerGameMode, oldPlayer: $LocalPlayer, newPlayer: $LocalPlayer, networkManager: $Connection);
        get oldPlayer(): $LocalPlayer;
        get newPlayer(): $LocalPlayer;
    }
    /**
     * Fired for registering layer definitions at the appropriate time.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $EntityRenderersEvent$RegisterLayerDefinitions extends $EntityRenderersEvent {
        /**
         * Registers a layer definition supplier with the given `ModelLayerLocation`.
         * These will be inserted into the main layer definition map for entity model layers at the appropriate time.
         */
        registerLayerDefinition(layerLocation: $ModelLayerLocation, supplier: $Supplier_<$LayerDefinition>): void;
        constructor();
    }
    /**
     * Allows users to register custom shaders to be used when the player spectates a certain kind of entity.
     * Vanilla examples of this are the green effect for creepers and the invert effect for endermen.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $RegisterEntitySpectatorShadersEvent extends $Event implements $IModBusEvent {
        /**
         * Registers a spectator shader for a given entity type.
         */
        register(entityType: $EntityType_<never>, shader: $ResourceLocation_): void;
        constructor(shaders: $Map_<$EntityType_<never>, $ResourceLocation_>);
    }
    /**
     * Fired to allow mods to register their reload listeners on the client-side resource manager.
     * This event is fired once during the construction of the `Minecraft` instance.
     * 
     * For registering reload listeners on the server-side resource manager, see `AddReloadListenerEvent`.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $RegisterClientReloadListenersEvent extends $Event implements $IModBusEvent {
        /**
         * Registers the given reload listener to the client-side resource manager.
         */
        registerReloadListener(reloadListener: $PreparableReloadListener_): void;
        constructor(resourceManager: $ReloadableResourceManager);
    }
    /**
     * This event is called when an `EffectRenderingInventoryScreen` draws the tooltip lines for a hovered `MobEffectInstance`.
     * It can be used to modify the tooltip.
     * 
     * This event is only fired on the physical client.
     */
    export class $GatherEffectScreenTooltipsEvent extends $Event {
        getEffectInstance(): $MobEffectInstance;
        getTooltip(): $List<$Component>;
        getScreen(): $EffectRenderingInventoryScreen<never>;
        constructor(screen: $EffectRenderingInventoryScreen<never>, effectInst: $MobEffectInstance, tooltip: $List_<$Component_>);
        get effectInstance(): $MobEffectInstance;
        get tooltip(): $List<$Component>;
        get screen(): $EffectRenderingInventoryScreen<never>;
    }
    /**
     * Fired on different events/actions when a `Screen` is active and visible.
     * See the various subclasses for listening to different events.
     * 
     * These events are fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ScreenEvent extends $Event {
        /**
         * @return the screen that caused this event
         */
        getScreen(): $Screen;
        get screen(): $Screen;
    }
    /**
     * This event is fired after attribute tooltip lines have been added to an item stack's tooltip in `AttributeUtil#addAttributeTooltips`.
     * 
     * It can be used to add additional tooltip lines adjacent to the attribute lines without having to manually locate the inject point.
     * 
     * This event may be fired on both the logical client and logical server.
     */
    export class $AddAttributeTooltipsEvent extends $Event {
        addTooltipLines(...arg0: $Component_[]): void;
        /**
         * Checks if the attribute tooltips should be shown on the current item stack.
         * 
         * This event is fired even if the component would prevent the normal tooltip lines from showing.
         */
        shouldShow(): boolean;
        /**
         * The current tooltip context.
         */
        getContext(): $AttributeTooltipContext;
        /**
         * The `ItemStack` with the tooltip.
         */
        getStack(): $ItemStack;
        constructor(stack: $ItemStack_, tooltip: $Consumer_<$Component>, ctx: $AttributeTooltipContext);
        get context(): $AttributeTooltipContext;
        get stack(): $ItemStack;
    }
    /**
     * Event for registering `PresetEditor` screen factories for world presets.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $RegisterPresetEditorsEvent extends $Event implements $IModBusEvent {
        /**
         * Registers a PresetEditor for a given world preset key.
         */
        register(key: $ResourceKey_<$WorldPreset>, editor: $PresetEditor_): void;
        constructor(editors: $Map_<$ResourceKey_<$WorldPreset>, $PresetEditor_>);
    }
    /**
     * Allows users to register custom `ClientTooltipComponent`
     * factories for their `TooltipComponent` types.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $RegisterClientTooltipComponentFactoriesEvent extends $Event implements $IModBusEvent {
        /**
         * Registers a `ClientTooltipComponent` factory for a `TooltipComponent`.
         */
        register<T extends $TooltipComponent>(type: $Class<T>, factory: $Function_<T, $ClientTooltipComponent>): void;
        constructor(factories: $Map_<$Class<$TooltipComponent>, $Function_<$TooltipComponent, $ClientTooltipComponent>>);
    }
    /**
     * Fired before a `Screen` is closed.
     * All screen layers on the screen are closed before this event is fired.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ScreenEvent$Closing extends $ScreenEvent {
        constructor(screen: $Screen);
    }
    /**
     * Fired before a selection highlight is rendered.
     * See the two subclasses to listen for blocks or entities.
     */
    export class $RenderHighlightEvent extends $Event {
        /**
         * @return the camera information
         */
        getCamera(): $Camera;
        /**
         * @return the delta tracker
         */
        getDeltaTracker(): $DeltaTracker;
        /**
         * @return the source of rendering buffers
         */
        getMultiBufferSource(): $MultiBufferSource;
        /**
         * @return the pose stack used for rendering
         */
        getPoseStack(): $PoseStack;
        /**
         * @return the hit result which triggered the selection highlight
         */
        getTarget(): $HitResult;
        /**
         * @return the level renderer
         */
        getLevelRenderer(): $LevelRenderer;
        get camera(): $Camera;
        get deltaTracker(): $DeltaTracker;
        get multiBufferSource(): $MultiBufferSource;
        get poseStack(): $PoseStack;
        get target(): $HitResult;
        get levelRenderer(): $LevelRenderer;
    }
    /**
     * Fired when a screenshot is taken, but before it is written to disk.
     * 
     * This event is cancellable, and does not have a result.
     * If this event is cancelled, then the screenshot is not written to disk, and the message in the event will be posted
     * to the player's chat.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ScreenshotEvent extends $Event implements $ICancellableEvent {
        /**
         * @return the in-memory image of the screenshot
         */
        getImage(): $NativeImage;
        /**
         * @return the custom cancellation message, or `null` if no custom message is set
         */
        getResultMessage(): $Component;
        getScreenshotFile(): $File;
        /**
         * Sets the new file where the screenshot will be saved to.
         */
        setScreenshotFile(screenshotFile: $File_): void;
        /**
         * Sets the new custom cancellation message used to inform the player.
         * It may be `null`, in which case the default cancel reason will be used.
         */
        setResultMessage(resultMessage: $Component_): void;
        /**
         * @return the custom cancellation message, or `null` if no custom message is set
         */
        getCancelMessage(): $Component;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        static DEFAULT_CANCEL_REASON: $Component;
        constructor(image: $NativeImage, screenshotFile: $File_);
        get image(): $NativeImage;
        get cancelMessage(): $Component;
    }
    /**
     * Fired when pause is already changed
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ClientPauseChangeEvent$Post extends $ClientPauseChangeEvent {
        constructor(pause: boolean);
    }
    /**
     * @deprecated
     * Fired directly after the background of the screen is drawn. (Only when the screen calls `Screen#renderBackground`)
     * Can be used for drawing above the background but below the tooltips.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ScreenEvent$BackgroundRendered extends $ScreenEvent {
        /**
         * @return the gui graphics used for rendering
         */
        getGuiGraphics(): $GuiGraphics;
        constructor(screen: $Screen, guiGraphics: $GuiGraphics);
        get guiGraphics(): $GuiGraphics;
    }
    /**
     * Fired for registering entity renderer layers at the appropriate time, after the entity and player renderers maps
     * have been created.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus,
     * only on the logical client.
     */
    export class $EntityRenderersEvent$AddLayers extends $EntityRenderersEvent {
        /**
         * @return the set of player skin names which have a renderer
         * 
         * Minecraft provides two default skin names: `default` for the
         * regular player model and `slim` for the
         * slim player model.
         */
        getEntityTypes(): $Set<$EntityType<never>>;
        /**
         * @return the context for the entity renderer provider
         */
        getContext(): $EntityRendererProvider$Context;
        getSkin<R extends $EntityRenderer<$Player>>(arg0: $PlayerSkin$Model_): R;
        /**
         * @return the set of entity models
         */
        getEntityModels(): $EntityModelSet;
        getRenderer<T extends $Entity, R extends $EntityRenderer<T>>(arg0: $EntityType_<T>): R;
        /**
         * @return the set of player skin names which have a renderer
         * 
         * Minecraft provides two default skin names: `default` for the
         * regular player model and `slim` for the
         * slim player model.
         */
        getSkins(): $Set<$PlayerSkin$Model>;
        constructor(renderers: $Map_<$EntityType_<never>, $EntityRenderer<never>>, playerRenderers: $Map_<$PlayerSkin$Model_, $EntityRenderer<$Player>>, context: $EntityRendererProvider$Context);
        get entityTypes(): $Set<$EntityType<never>>;
        get context(): $EntityRendererProvider$Context;
        get entityModels(): $EntityModelSet;
        get skins(): $Set<$PlayerSkin$Model>;
    }
    /**
     * This event can be used to add static geometry to chunk sections. The event is fired on the main client thread
     * whenever a section is queued for (re)building. A rebuild can be triggered manually using e.g.
     * `LevelRenderer#setSectionDirty(int, int, int)`.
     * 
     * While the event itself is fired on the main client thread, the renderers registered using
     * `AdditionalSectionRenderer)`
     * while be executed on the thread performing the rebuild, which will typically **not** be the main thread.
     * Therefore, any data from non-thread-safe data structures need to be retrieved during the event handler itself rather
     * than the renderer. A typical usage would look like
     * 
     * {@code
     */
    export class $AddSectionGeometryEvent extends $Event {
        getLevel(): $Level;
        addRenderer(arg0: $AddSectionGeometryEvent$AdditionalSectionRenderer_): void;
        getSectionOrigin(): $BlockPos;
        getAdditionalRenderers(): $List<$AddSectionGeometryEvent$AdditionalSectionRenderer>;
        constructor(sectionOrigin: $BlockPos_, level: $Level_);
        get level(): $Level;
        get sectionOrigin(): $BlockPos;
        get additionalRenderers(): $List<$AddSectionGeometryEvent$AdditionalSectionRenderer>;
    }
    /**
     * Fired **before** textual information is rendered to the debug screen.
     * This can be used to add or remove text information.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $CustomizeGuiOverlayEvent$DebugText extends $CustomizeGuiOverlayEvent {
        getLeft(): $List<string>;
        getRight(): $List<string>;
        constructor(window: $Window, guiGraphics: $GuiGraphics, partialTick: $DeltaTracker, left: $List_<string>, right: $List_<string>);
        get left(): $List<string>;
        get right(): $List<string>;
    }
    /**
     * Allows users to register custom IItemDecorator to Items.
     * 
     * This event is not cancelable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $RegisterItemDecorationsEvent extends $Event implements $IModBusEvent {
        /**
         * Register an ItemDecorator to an Item
         */
        register(itemLike: $ItemLike_, decorator: $IItemDecorator_): void;
        constructor(decorators: $Map_<$Item_, $List_<$IItemDecorator_>>);
    }
    /**
     * Fired for hooking into `AbstractContainerScreen` events.
     * See the subclasses to listen for specific events.
     * 
     * These events are fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ContainerScreenEvent extends $Event {
        /**
         * @return the container screen
         */
        getContainerScreen(): $AbstractContainerScreen<never>;
        get containerScreen(): $AbstractContainerScreen<never>;
    }
    /**
     * Allows users to register custom layers for GUI rendering.
     * 
     * See also `RenderGuiLayerEvent` to intercept rendering of registered layers.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $RegisterGuiLayersEvent extends $Event implements $IModBusEvent {
        /**
         * Wrap the layer with the given `id` in a new layer.
         * 
         * This can be used, for instance, to apply pose stack transformations to move the layer or resize it.
         */
        wrapLayer(id: $ResourceLocation_, wrapper: $UnaryOperator_<$LayeredDraw$Layer>): void;
        /**
         * Registers a layer that renders below all others.
         */
        registerBelowAll(id: $ResourceLocation_, layer: $LayeredDraw$Layer_): void;
        /**
         * Registers a layer that renders below another.
         */
        registerBelow(other: $ResourceLocation_, id: $ResourceLocation_, layer: $LayeredDraw$Layer_): void;
        /**
         * Registers a layer that renders below all others.
         */
        registerAboveAll(id: $ResourceLocation_, layer: $LayeredDraw$Layer_): void;
        /**
         * Registers a layer that renders below all others.
         */
        replaceLayer(id: $ResourceLocation_, layer: $LayeredDraw$Layer_): void;
        /**
         * Registers a layer that renders below another.
         */
        registerAbove(other: $ResourceLocation_, id: $ResourceLocation_, layer: $LayeredDraw$Layer_): void;
        constructor(layers: $List_<$GuiLayerManager$NamedLayer_>);
    }
    /**
     * Fired when a screen is being initialized.
     * See the two subclasses for listening before and after the initialization.
     * 
     * Listeners added through this event may also be marked as renderable or narratable, if they inherit from
     * `Renderable` and `NarratableEntry`
     * respectively.
     */
    export class $ScreenEvent$Init extends $ScreenEvent {
        /**
         * @return unmodifiable view of list of event listeners on the screen
         */
        getListenersList(): $List<$GuiEventListener>;
        /**
         * Adds the given `GuiEventListener` to the screen.
         */
        removeListener(listener: $GuiEventListener): void;
        /**
         * Adds the given `GuiEventListener` to the screen.
         */
        addListener(listener: $GuiEventListener): void;
        get listenersList(): $List<$GuiEventListener>;
    }
    /**
     * Fired when a mouse button is released.
     * See the two subclasses for listening before and after the normal handling.
     */
    export class $ScreenEvent$MouseButtonReleased extends $ScreenEvent$MouseInput {
        /**
         * @return the mouse button's input code
         */
        getButton(): number;
        constructor(screen: $Screen, mouseX: number, mouseY: number, button: number);
        get button(): number;
    }
    /**
     * Fired before a block texture will be overlaid on the player's view.
     * 
     * This event is cancellable, and does not have a result.
     * If this event is cancelled, then the overlay will not be rendered.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $RenderBlockScreenEffectEvent extends $Event implements $ICancellableEvent {
        /**
         * @return the player which the overlay will apply to
         */
        getPlayer(): $Player;
        /**
         * @return the pose stack used for rendering
         */
        getPoseStack(): $PoseStack;
        /**
         * @return the position of the block which the overlay is gotten from
         */
        getBlockPos(): $BlockPos;
        /**
         * @return the block which the overlay is gotten from
         */
        getBlockState(): $BlockState;
        getOverlayType(): $RenderBlockScreenEffectEvent$OverlayType;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $PoseStack, arg2: $RenderBlockScreenEffectEvent$OverlayType_, arg3: $BlockState_, arg4: $BlockPos_);
        get player(): $Player;
        get poseStack(): $PoseStack;
        get blockPos(): $BlockPos;
        get blockState(): $BlockState;
        get overlayType(): $RenderBlockScreenEffectEvent$OverlayType;
    }
    /**
     * Allows users to register custom named render types.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $RegisterNamedRenderTypesEvent extends $Event implements $IModBusEvent {
        /**
         * Registers a named `RenderTypeGroup`.
         */
        register(key: $ResourceLocation_, blockRenderType: $RenderType, entityRenderType: $RenderType): void;
        /**
         * Registers a named `RenderTypeGroup`.
         */
        register(key: $ResourceLocation_, blockRenderType: $RenderType, entityRenderType: $RenderType, fabulousEntityRenderType: $RenderType): void;
        constructor(renderTypes: $Map_<$ResourceLocation_, $RenderTypeGroup_>);
    }
    /**
     * Fired **before** the key release is handled by the screen.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, the screen's key release handler will be bypassed
     * and the corresponding `Post` will not be fired.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ScreenEvent$KeyReleased$Pre extends $ScreenEvent$KeyReleased implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(screen: $Screen, keyCode: number, scanCode: number, modifiers: number);
    }
    /**
     * Allows users to register custom categories for the vanilla recipe book, making it usable in modded GUIs.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $RegisterRecipeBookCategoriesEvent extends $Event implements $IModBusEvent {
        /**
         * Registers a category lookup for a certain recipe type.
         */
        registerRecipeCategoryFinder(type: $RecipeType_<never>, lookup: $Function_<$RecipeHolder<never>, $RecipeBookCategories>): void;
        /**
         * Registers the list of categories that compose an aggregate category.
         */
        registerAggregateCategory(category: $RecipeBookCategories_, others: $List_<$RecipeBookCategories_>): void;
        /**
         * Registers the list of categories that compose a recipe book.
         */
        registerBookCategories(type: $RecipeBookType_, categories: $List_<$RecipeBookCategories_>): void;
        constructor(aggregateCategories: $Map_<$RecipeBookCategories_, $ImmutableList<$RecipeBookCategories_>>, typeCategories: $Map_<$RecipeBookType_, $ImmutableList<$RecipeBookCategories_>>, recipeCategoryLookups: $Map_<$RecipeType_<never>, $Function_<$RecipeHolder<never>, $RecipeBookCategories>>);
    }
    /**
     * Fired every time an `AbstractContainerScreen` renders.
     * See the two subclasses to listen for foreground or background rendering.
     * 
     * These events are fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ContainerScreenEvent$Render extends $ContainerScreenEvent {
        /**
         * @return the gui graphics used for rendering
         */
        getGuiGraphics(): $GuiGraphics;
        /**
         * @return the X coordinate of the mouse pointer
         */
        getMouseX(): number;
        /**
         * @return the X coordinate of the mouse pointer
         */
        getMouseY(): number;
        get guiGraphics(): $GuiGraphics;
        get mouseX(): number;
        get mouseY(): number;
    }
    /**
     * Fired **after** the mouse scroll is handled, if not handled by the screen
     * and the corresponding `Pre` is not cancelled.
     * 
     * This event is not cancellable, and does not have a result.
     * If the event is cancelled, the mouse scroll will be set as handled.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ScreenEvent$MouseScrolled$Post extends $ScreenEvent$MouseScrolled {
        constructor(screen: $Screen, mouseX: number, mouseY: number, scrollDeltaX: number, scrollDeltaY: number);
    }
    /**
     * Fired for altering the raw field of view (FOV).
     * This is after the FOV settings are applied, and before modifiers such as the Nausea effect.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ViewportEvent$ComputeFov extends $ViewportEvent {
        /**
         * Sets the field of view value.
         */
        setFOV(fov: number): void;
        /**
         * @return the raw field of view value
         */
        getFOV(): number;
        /**
         * @return whether the base fov value started with a constant or was sourced from the fov set in the options
         */
        usedConfiguredFov(): boolean;
        constructor(renderer: $GameRenderer, camera: $Camera, renderPartialTicks: number, fov: number, usedConfiguredFov: boolean);
    }
    /**
     * Houses events related to models.
     */
    export class $ModelEvent extends $Event {
    }
    /**
     * Fired when a keyboard key is released.
     * See the two subclasses for listening before and after the normal handling.
     */
    export class $ScreenEvent$KeyReleased extends $ScreenEvent$KeyInput {
        constructor(screen: $Screen, keyCode: number, scanCode: number, modifiers: number);
    }
    /**
     * Fired after the container screen's foreground layer and elements are drawn, but
     * before rendering the tooltips and the item stack being dragged by the player.
     * 
     * This can be used for rendering elements that must be above other screen elements, but
     * below tooltips and the dragged stack, such as slot or item stack specific overlays.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ContainerScreenEvent$Render$Foreground extends $ContainerScreenEvent$Render {
        constructor(guiContainer: $AbstractContainerScreen<never>, guiGraphics: $GuiGraphics, mouseX: number, mouseY: number);
    }
    /**
     * Fired when a keymapping that by default involves clicking the mouse buttons is triggered.
     * 
     * The key bindings that trigger this event are:
     * 
     * - **Use Item** - defaults to *left mouse click*
     * - **Pick Block** - defaults to *middle mouse click*
     * - **Attack** - defaults to *right mouse click*
     * 
     * This event is cancellable, and does not have a result.
     * If this event is cancelled, then the keymapping's action is not processed further, and the hand will be swung
     * according to `#shouldSwingHand()`.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $InputEvent$InteractionKeyMappingTriggered extends $InputEvent implements $ICancellableEvent {
        /**
         * @return the hand that caused the input
         * 
         * The event will be called for both hands if this is a use item input regardless
         * of both event's cancellation.
         * Will always be `InteractionHand#MAIN_HAND` if this is an attack or pick block input.
         */
        getHand(): $InteractionHand;
        /**
         * @return whether to swing the hand; always takes effect, regardless of cancellation
         */
        isUseItem(): boolean;
        /**
         * Sets whether to swing the hand. This takes effect whether or not the event is cancelled.
         */
        setSwingHand(value: boolean): void;
        /**
         * @return whether to swing the hand; always takes effect, regardless of cancellation
         */
        isAttack(): boolean;
        /**
         * @return whether to swing the hand; always takes effect, regardless of cancellation
         */
        isPickBlock(): boolean;
        /**
         * @return the key mapping which triggered this event
         */
        getKeyMapping(): $KeyMapping;
        /**
         * @return whether to swing the hand; always takes effect, regardless of cancellation
         */
        shouldSwingHand(): boolean;
        /**
         * Sets whether to swing the hand. This takes effect whether or not the event is cancelled.
         */
        setCanceled(value: boolean): void;
        /**
         * @return whether to swing the hand; always takes effect, regardless of cancellation
         */
        isCanceled(): boolean;
        constructor(button: number, keyMapping: $KeyMapping, hand: $InteractionHand_);
        get hand(): $InteractionHand;
        get useItem(): boolean;
        set swingHand(value: boolean);
        get attack(): boolean;
        get pickBlock(): boolean;
        get keyMapping(): $KeyMapping;
    }
    /**
     * Fired when a keyboard key input occurs, such as pressing, releasing, or repeating a key.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $InputEvent$Key extends $InputEvent {
        /**
         * @return the `GLFW` (platform-agnostic) key code
         */
        getModifiers(): number;
        /**
         * @return the `GLFW` (platform-agnostic) key code
         */
        getKey(): number;
        /**
         * @return the `GLFW` (platform-agnostic) key code
         */
        getAction(): number;
        /**
         * @return the `GLFW` (platform-agnostic) key code
         */
        getScanCode(): number;
        constructor(key: number, scanCode: number, action: number, modifiers: number);
        get modifiers(): number;
        get key(): number;
        get action(): number;
        get scanCode(): number;
    }
    /**
     * Fired when an input is detected from the user's input devices.
     * See the various subclasses to listen for specific devices and inputs.
     */
    export class $InputEvent extends $Event {
    }
    /**
     * Fired when the client queues a `Toast` message to be shown onscreen.
     * Toasts are small popups that appear on the top right of the screen, for certain actions such as unlocking Advancements and Recipes.
     * 
     * This event is cancellable, and does not have a result.
     * Cancelling the event stops the toast from being queued, which means it never renders.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ToastAddEvent extends $Event implements $ICancellableEvent {
        getToast(): $Toast;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(toast: $Toast_);
        get toast(): $Toast;
    }
    /**
     * Fired **after** the key release is handled, if not handled by the screen
     * and the corresponding `Pre` is not cancelled.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, the key release will be set as handled.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ScreenEvent$KeyReleased$Post extends $ScreenEvent$KeyReleased implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(screen: $Screen, keyCode: number, scanCode: number, modifiers: number);
    }
    /**
     * Fired when pause is going to change
     * 
     * This event is cancellable, and does not have a result.
     * Cancelling this event will prevent the game change pause state even if the conditions match
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ClientPauseChangeEvent$Pre extends $ClientPauseChangeEvent implements $ICancellableEvent {
        setCanceled(pause: boolean): void;
        /**
         * On Pre it returns what is the upcoming pause state.
         * Cancelling will not modify this value.
         * 
         * On Post it returns the updated pause state
         * 
         * @return the pause state
         */
        isCanceled(): boolean;
        constructor(pause: boolean);
    }
    /**
     * Fired **before** the key press is handled by the screen.
     * 
     * This event is cancellable and does not have a result.
     * If the event is cancelled, the screen's key press handler will be bypassed
     * and the corresponding `Post` will not be fired.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ScreenEvent$KeyPressed$Pre extends $ScreenEvent$KeyPressed implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(screen: $Screen, keyCode: number, scanCode: number, modifiers: number);
    }
    /**
     * Fired **after** the HUD is rendered to the screen, if the corresponding `Pre` is not cancelled.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $RenderGuiEvent$Post extends $RenderGuiEvent {
        constructor(guiGraphics: $GuiGraphics, partialTick: $DeltaTracker);
    }
    /**
     * Fired **after** the player is rendered, if the corresponding `Pre` is not cancelled.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $RenderPlayerEvent$Post extends $RenderPlayerEvent {
        constructor(player: $Player, renderer: $PlayerRenderer, partialTick: number, poseStack: $PoseStack, multiBufferSource: $MultiBufferSource_, packedLight: number);
    }
    /**
     * Fired when a mouse button is pressed/released, **after** processing.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $InputEvent$MouseButton$Post extends $InputEvent$MouseButton {
        constructor(button: number, action: number, modifiers: number);
    }
    /**
     * Fired when the `MusicManager` checks what situational music should be used. This fires before the music begins playing.
     * 
     * If the music is set to `null` by a modder, it will cancel any music that was already playing.
     * 
     * Note that the higher priority you make your event listener, the earlier the music will be set.
     * 
     * Because of this, if you want your music to take precedence over others (perhaps you want to have seperate nighttime music for a biome for instance) then you may want it to have a lower priority.
     * 
     * To make your music instantly play rather than waiting for the playing music to stop, set the music to one that is set to replace the current music.
     * 
     * Higher priorities would likely be better suited for biome-based or dimension-based musics, whereas lower priority is likely good for specific structures or situations.
     * 
     * This event is cancellable, and does not have a result.
     * 
     * If the event is canceled, then whatever the latest music set was will be used as the music.
     * 
     * This event is fired on the main Forge event bus,
     * 
     * only on the logical client.
     */
    export class $SelectMusicEvent extends $Event implements $ICancellableEvent {
        /**
         * @return the original situational music that was selected
         */
        getOriginalMusic(): $Music;
        /**
         * @return the current track that the `MusicManager` is playing, or `null` if there is none
         */
        getPlayingMusic(): $SoundInstance;
        /**
         * Changes the situational music. If this is set to `null`, any currently playing music will be cancelled.
         * 
         * If this *was* `null` but on the next tick isn't, the music given will be immediately played.
         */
        setMusic(newMusic: $Music): void;
        /**
         * Changes the situational music. If this is set to `null`, any currently playing music will be cancelled.
         * 
         * If this *was* `null` but on the next tick isn't, the music given will be immediately played.
         */
        overrideMusic(newMusic: $Music): void;
        /**
         * @return the original situational music that was selected
         */
        getMusic(): $Music;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(music: $Music, playingMusic: $SoundInstance);
        get originalMusic(): $Music;
        get playingMusic(): $SoundInstance;
    }
    /**
     * Fired when a system chat message is received on the client.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, the message is not displayed in the chat message window or in the overlay.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ClientChatReceivedEvent$System extends $ClientChatReceivedEvent {
        /**
         * @return whether the message goes to the overlay
         */
        isOverlay(): boolean;
        constructor(message: $Component_, overlay: boolean);
        get overlay(): boolean;
    }
    /**
     * Fired before an item stack is rendered in an item frame.
     * This can be used to prevent normal rendering or add custom rendering.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, then the item stack will not be rendered
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $RenderItemInFrameEvent extends $Event implements $ICancellableEvent {
        /**
         * @return the item frame entity
         */
        getItemFrameEntity(): $ItemFrame;
        /**
         * @return the source of rendering buffers
         */
        getMultiBufferSource(): $MultiBufferSource;
        /**
         * @return the amount of packed (sky and block) light for rendering
         */
        getPackedLight(): number;
        /**
         * @return the pose stack used for rendering
         */
        getPoseStack(): $PoseStack;
        /**
         * @return the item stack being rendered
         */
        getItemStack(): $ItemStack;
        /**
         * @return the renderer for the item frame entity
         */
        getRenderer(): $ItemFrameRenderer<never>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(itemFrame: $ItemFrame, renderItemFrame: $ItemFrameRenderer<never>, poseStack: $PoseStack, multiBufferSource: $MultiBufferSource_, packedLight: number);
        get itemFrameEntity(): $ItemFrame;
        get multiBufferSource(): $MultiBufferSource;
        get packedLight(): number;
        get poseStack(): $PoseStack;
        get itemStack(): $ItemStack;
        get renderer(): $ItemFrameRenderer<never>;
    }
    /**
     * Fired when a mouse button is pressed/released. Sub-events get fired before and after this happens.
     * 
     * These events are fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $InputEvent$MouseButton extends $InputEvent {
        /**
         * @return the mouse button's input code
         */
        getModifiers(): number;
        /**
         * @return the mouse button's input code
         */
        getAction(): number;
        /**
         * @return the mouse button's input code
         */
        getButton(): number;
        get modifiers(): number;
        get action(): number;
        get button(): number;
    }
    /**
     * Fired **before** the player is rendered.
     * This can be used for rendering additional effects or suppressing rendering.
     * 
     * This event is cancellable, and does not have a result.
     * If this event is cancelled, then the player will not be rendered and the corresponding
     * `Post` will not be fired.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $RenderPlayerEvent$Pre extends $RenderPlayerEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(player: $Player, renderer: $PlayerRenderer, partialTick: number, poseStack: $PoseStack, multiBufferSource: $MultiBufferSource_, packedLight: number);
    }
    export class $ScreenEvent$MouseButtonPressed$Post$Result extends $Enum<$ScreenEvent$MouseButtonPressed$Post$Result> {
        static values(): $ScreenEvent$MouseButtonPressed$Post$Result[];
        static valueOf(arg0: string): $ScreenEvent$MouseButtonPressed$Post$Result;
        static FORCE_HANDLED: $ScreenEvent$MouseButtonPressed$Post$Result;
        static FORCE_UNHANDLED: $ScreenEvent$MouseButtonPressed$Post$Result;
        static DEFAULT: $ScreenEvent$MouseButtonPressed$Post$Result;
    }
    /**
     * Values that may be interpreted as {@link $ScreenEvent$MouseButtonPressed$Post$Result}.
     */
    export type $ScreenEvent$MouseButtonPressed$Post$Result_ = "force_handled" | "default" | "force_unhandled";
    /**
     * Fired **before** the mouse scroll is handled by the screen.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, the screen's mouse scroll handler will be bypassed
     * and the corresponding `Post` will not be fired.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ScreenEvent$MouseScrolled$Pre extends $ScreenEvent$MouseScrolled implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(screen: $Screen, mouseX: number, mouseY: number, scrollDeltaX: number, scrollDeltaY: number);
    }
    /**
     * Fired to allow altering the angles of the player's camera.
     * This can be used to alter the player's view for different effects, such as applying roll.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ViewportEvent$ComputeCameraAngles extends $ViewportEvent {
        /**
         * @return the yaw of the player's camera
         */
        getYaw(): number;
        /**
         * Sets the yaw of the player's camera.
         */
        setPitch(yaw: number): void;
        /**
         * Sets the yaw of the player's camera.
         */
        setYaw(yaw: number): void;
        /**
         * Sets the yaw of the player's camera.
         */
        setRoll(yaw: number): void;
        /**
         * @return the yaw of the player's camera
         */
        getRoll(): number;
        /**
         * @return the yaw of the player's camera
         */
        getPitch(): number;
        constructor(camera: $Camera, renderPartialTicks: number, yaw: number, pitch: number, roll: number);
    }
    export class $AddSectionGeometryEvent$SectionRenderingContext {
        /**
         * Returns the builder for the given render type/layer in the chunk section. If the render type is not already
         * present in the section, marks the type as present in the section.
         */
        getOrCreateChunkBuffer(type: $RenderType): $VertexConsumer;
        getPoseStack(): $PoseStack;
        getRegion(): $BlockAndTintGetter;
        getQuadLighter(smooth: boolean): $QuadLighter;
        constructor(getOrCreateLayer: $Function_<$RenderType, $VertexConsumer>, region: $BlockAndTintGetter, poseStack: $PoseStack);
        get poseStack(): $PoseStack;
        get region(): $BlockAndTintGetter;
    }
    /**
     * Fired when the client player logs in to the server. The player should be initialized.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ClientPlayerNetworkEvent$LoggingIn extends $ClientPlayerNetworkEvent {
        constructor(controller: $MultiPlayerGameMode, player: $LocalPlayer, networkManager: $Connection);
    }
    /**
     * Fired when the mouse was dragged while a button is being held down.
     * See the two subclasses for listening before and after the normal handling.
     */
    export class $ScreenEvent$MouseScrolled extends $ScreenEvent$MouseInput {
        /**
         * @return the amount of change / delta of the mouse scroll on the X axis
         */
        getScrollDeltaX(): number;
        /**
         * @return the amount of change / delta of the mouse scroll on the X axis
         */
        getScrollDeltaY(): number;
        constructor(screen: $Screen, mouseX: number, mouseY: number, scrollDeltaX: number, scrollDeltaY: number);
        get scrollDeltaX(): number;
        get scrollDeltaY(): number;
    }
    /**
     * Fired for registering block color handlers.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $RegisterColorHandlersEvent$Block extends $RegisterColorHandlersEvent {
        register(arg0: $BlockColor_, ...arg1: $Block_[]): void;
        /**
         * @return the block colors registry
         */
        getBlockColors(): $BlockColors;
        constructor(blockColors: $BlockColors);
        get blockColors(): $BlockColors;
    }
    /**
     * Fired when an overlay is about to be rendered to the screen to allow the user to modify it.
     */
    export class $CustomizeGuiOverlayEvent extends $Event {
        getWindow(): $Window;
        getGuiGraphics(): $GuiGraphics;
        getPartialTick(): $DeltaTracker;
        get window(): $Window;
        get guiGraphics(): $GuiGraphics;
        get partialTick(): $DeltaTracker;
    }
    export class $RenderBlockScreenEffectEvent$OverlayType extends $Enum<$RenderBlockScreenEffectEvent$OverlayType> {
        static values(): $RenderBlockScreenEffectEvent$OverlayType[];
        static valueOf(arg0: string): $RenderBlockScreenEffectEvent$OverlayType;
        static FIRE: $RenderBlockScreenEffectEvent$OverlayType;
        static BLOCK: $RenderBlockScreenEffectEvent$OverlayType;
        static WATER: $RenderBlockScreenEffectEvent$OverlayType;
    }
    /**
     * Values that may be interpreted as {@link $RenderBlockScreenEffectEvent$OverlayType}.
     */
    export type $RenderBlockScreenEffectEvent$OverlayType_ = "fire" | "block" | "water";
    /**
     * Fired to allow mods to register custom render buffers.
     * This allows to have dedicated render buffer for each render type
     * that can filled and rendered in batch
     * This event is fired after the default Minecraft render buffers have been registered.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $RegisterRenderBuffersEvent extends $Event implements $IModBusEvent {
        /**
         * Registers a default render buffer with buffer size specified in the render type.
         */
        registerRenderBuffer(renderType: $RenderType): void;
        /**
         * Registers a render buffer for specified render type.
         */
        registerRenderBuffer(renderType: $RenderType, renderBuffer: $ByteBufferBuilder): void;
        constructor(renderBuffers: $SequencedMap<$RenderType, $ByteBufferBuilder>);
    }
    /**
     * Fired **before** a GUI layer is rendered to the screen.
     * 
     * This event is cancellable, and does not have a result.
     * If this event is cancelled, then the layer will not be rendered, and the corresponding `Post` event will
     * not be fired.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $RenderGuiLayerEvent$Pre extends $RenderGuiLayerEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(guiGraphics: $GuiGraphics, partialTick: $DeltaTracker, name: $ResourceLocation_, layer: $LayeredDraw$Layer_);
    }
    /**
     * Fired after the container screen's background layer and elements are drawn.
     * This can be used for rendering new background elements.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ContainerScreenEvent$Render$Background extends $ContainerScreenEvent$Render {
        constructor(guiContainer: $AbstractContainerScreen<never>, guiGraphics: $GuiGraphics, mouseX: number, mouseY: number);
    }
    /**
     * Fired while the `ModelManager` is reloading models, after the model registry is set up, but before it's
     * passed to the `BlockModelShaper` for caching.
     * 
     * This event is fired from a worker thread and it is therefore not safe to access anything outside the
     * model registry and `ModelBakery` provided in this event.
     * 
     * The `ModelManager` firing this event is not fully set up with the latest data when this event fires and
     * must therefore not be accessed in this event.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $ModelEvent$ModifyBakingResult extends $ModelEvent implements $IModBusEvent {
        getModels(): $Map<$ModelResourceLocation, $BakedModel>;
        /**
         * Returns a lookup function to retrieve `TextureAtlasSprite`s by name from any of the atlases handled by
         * the `ModelManager`. See `ModelManager#VANILLA_ATLASES` for the atlases accessible through the
         * returned function
         */
        getTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
        getModelBakery(): $ModelBakery;
        constructor(models: $Map_<$ModelResourceLocation_, $BakedModel>, textureGetter: $Function_<$Material, $TextureAtlasSprite>, modelBakery: $ModelBakery);
        get models(): $Map<$ModelResourceLocation, $BakedModel>;
        get textureGetter(): $Function<$Material, $TextureAtlasSprite>;
        get modelBakery(): $ModelBakery;
    }
    /**
     * Fired when a `LivingEntity` is rendered.
     * See the two subclasses to listen for before and after rendering.
     * 
     * Despite this event's use of generic type parameters, this is not a `GenericEvent`,
     * and should not be treated as such (such as using generic-specific listeners, which may cause a `ClassCastException`).
     */
    export class $RenderLivingEvent<T extends $LivingEntity, M extends $EntityModel<T>> extends $Event {
        /**
         * @return the source of rendering buffers
         */
        getMultiBufferSource(): $MultiBufferSource;
        /**
         * @return the amount of packed (sky and block) light for rendering
         */
        getPackedLight(): number;
        /**
         * @return the pose stack used for rendering
         */
        getPoseStack(): $PoseStack;
        getEntity(): $LivingEntity;
        getRenderer(): $LivingEntityRenderer<T, M>;
        /**
         * @return the partial tick
         */
        getPartialTick(): number;
        get multiBufferSource(): $MultiBufferSource;
        get packedLight(): number;
        get poseStack(): $PoseStack;
        get entity(): $LivingEntity;
        get renderer(): $LivingEntityRenderer<T, M>;
        get partialTick(): number;
    }
    /**
     * Fired when the client is about to send a chat message to the server.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, the chat message will not be sent to the server.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ClientChatEvent extends $Event implements $ICancellableEvent {
        /**
         * @return the message that will be sent to the server, if the event is not cancelled. This can be changed by mods
         */
        getMessage(): string;
        setMessage(message: string): void;
        /**
         * @return the message that will be sent to the server, if the event is not cancelled. This can be changed by mods
         */
        getOriginalMessage(): string;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(message: string);
        get originalMessage(): string;
    }
    /**
     * Fired when a GUI layer is rendered to the screen.
     * See the two subclasses for listening to the two possible phases.
     * 
     * A layer that is not normally active (for example because the player pressed F1) cannot be forced to render.
     * In such cases, this event will however still fire.
     */
    export class $RenderGuiLayerEvent extends $Event {
        getName(): $ResourceLocation;
        getLayer(): $LayeredDraw$Layer;
        getGuiGraphics(): $GuiGraphics;
        getPartialTick(): $DeltaTracker;
        get name(): $ResourceLocation;
        get layer(): $LayeredDraw$Layer;
        get guiGraphics(): $GuiGraphics;
        get partialTick(): $DeltaTracker;
    }
    /**
     * Fired when a keyboard key is pressed.
     * See the two subclasses for listening before and after the normal handling.
     */
    export class $ScreenEvent$KeyPressed extends $ScreenEvent$KeyInput {
        constructor(screen: $Screen, keyCode: number, scanCode: number, modifiers: number);
    }
    /**
     * Fired for registering item color handlers.
     * 
     * The block colors should only be used for referencing or delegating item colors to their respective block
     * colors. Use `Block` for registering your block color handlers.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $RegisterColorHandlersEvent$Item extends $RegisterColorHandlersEvent {
        register(arg0: $ItemColor_, ...arg1: $ItemLike_[]): void;
        /**
         * @return the block colors registry
         * This should only be used for referencing or delegating item colors to their respective block colors.
         */
        getBlockColors(): $BlockColors;
        /**
         * @return the item colors registry
         */
        getItemColors(): $ItemColors;
        constructor(itemColors: $ItemColors, blockColors: $BlockColors);
        get blockColors(): $BlockColors;
        get itemColors(): $ItemColors;
    }
    /**
     * Fired when a mouse scroll wheel is used outside of a screen and a player is loaded, **before** being
     * processed by vanilla.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, then the mouse scroll event will not be processed further.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $InputEvent$MouseScrollingEvent extends $InputEvent implements $ICancellableEvent {
        /**
         * @return `true` if the left mouse button is pressed
         */
        isLeftDown(): boolean;
        /**
         * @return `true` if the left mouse button is pressed
         */
        isRightDown(): boolean;
        /**
         * @return `true` if the left mouse button is pressed
         */
        isMiddleDown(): boolean;
        /**
         * @return the amount of change / delta of the mouse scroll on the X axis
         */
        getScrollDeltaX(): number;
        /**
         * @return the amount of change / delta of the mouse scroll on the X axis
         */
        getMouseX(): number;
        /**
         * @return the amount of change / delta of the mouse scroll on the X axis
         */
        getMouseY(): number;
        /**
         * @return the amount of change / delta of the mouse scroll on the X axis
         */
        getScrollDeltaY(): number;
        setCanceled(arg0: boolean): void;
        /**
         * @return `true` if the left mouse button is pressed
         */
        isCanceled(): boolean;
        constructor(scrollDeltaX: number, scrollDeltaY: number, leftDown: boolean, middleDown: boolean, rightDown: boolean, mouseX: number, mouseY: number);
        get leftDown(): boolean;
        get rightDown(): boolean;
        get middleDown(): boolean;
        get scrollDeltaX(): number;
        get mouseX(): number;
        get mouseY(): number;
        get scrollDeltaY(): number;
    }
    /**
     * Base class of the two client tick events.
     * 
     * For the event that fires once per frame (instead of per tick), see `RenderFrameEvent`.
     */
    export class $ClientTickEvent extends $Event {
        constructor();
    }
    /**
     * Fired **before** the screen's overridable initialization method is fired.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, the initialization method will not be called, and the widgets and children lists
     * will not be cleared.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ScreenEvent$Init$Pre extends $ScreenEvent$Init implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(screen: $Screen, list: $List_<$GuiEventListener>, add: $Consumer_<$GuiEventListener>, remove: $Consumer_<$GuiEventListener>);
    }
    /**
     * Fired **after** the screen is drawn.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ScreenEvent$Render$Post extends $ScreenEvent$Render {
        constructor(screen: $Screen, guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number);
    }
    export class $ScreenEvent$KeyInput extends $ScreenEvent {
    }
    /**
     * This event is fired **after** the mouse release is handled, if the corresponding `Pre` was
     * not cancelled.
     * 
     * It is only fired on the physical client.
     */
    export class $ScreenEvent$MouseButtonReleased$Post extends $ScreenEvent$MouseButtonReleased {
        wasReleaseHandled(): boolean;
        getReleaseResult(): boolean;
        setResult(arg0: $ScreenEvent$MouseButtonReleased$Post$Result_): void;
        getResult(): $ScreenEvent$MouseButtonReleased$Post$Result;
        constructor(screen: $Screen, mouseX: number, mouseY: number, button: number, handled: boolean);
        get releaseResult(): boolean;
    }
    /**
     * This event is fired **after** the mouse click is handled, if the corresponding `Pre` was not
     * cancelled.
     * 
     * It is only fired on the physical client.
     */
    export class $ScreenEvent$MouseButtonPressed$Post extends $ScreenEvent$MouseButtonPressed {
        /**
         * @return true if the mouse click was already handled by its screen
         */
        wasClickHandled(): boolean;
        /**
         * @return true if the mouse click was already handled by its screen
         */
        getClickResult(): boolean;
        setResult(arg0: $ScreenEvent$MouseButtonPressed$Post$Result_): void;
        getResult(): $ScreenEvent$MouseButtonPressed$Post$Result;
        constructor(screen: $Screen, mouseX: number, mouseY: number, button: number, handled: boolean);
        get clickResult(): boolean;
    }
    /**
     * `Post` is fired once per frame, after the current frame is rendered via `GameRenderer#render(float, long, boolean)`.
     * 
     * This event only fires on the physical client.
     */
    export class $RenderFrameEvent$Post extends $RenderFrameEvent {
        constructor(partialTick: $DeltaTracker);
    }
    /**
     * This event is used to collect the IDs of attribute modifiers that will not be displayed in item tooltips.
     * 
     * It allows hiding some (or all) of the modifiers, potentially for displaying them in an alternative way (or for hiding information from the player).
     * 
     * This event may be fired on both the logical client and logical server.
     */
    export class $GatherSkippedAttributeTooltipsEvent extends $Event {
        /**
         * Checks if the event will cause all attribute modifiers to be skipped.
         */
        isSkippingAll(): boolean;
        /**
         * Checks if a given group is skipped or not. If all modifiers are skipped, this method always returns true.
         */
        isSkipped(group: $EquipmentSlotGroup_): boolean;
        /**
         * Checks if a given id is skipped or not. If all modifiers are skipped, this method always returns true.
         */
        isSkipped(id: $ResourceLocation_): boolean;
        /**
         * Marks the id of a specific attribute modifier as skipped, causing it to not be displayed in the tooltip.
         */
        skipId(id: $ResourceLocation_): void;
        /**
         * Marks an entire `EquipmentSlotGroup` as skipped, preventing all modifiers for that group from showing.
         */
        skipGroup(group: $EquipmentSlotGroup_): void;
        /**
         * Sets if the event should skip displaying all attribute modifiers.
         */
        setSkipAll(skip: boolean): void;
        /**
         * The current tooltip context.
         */
        getContext(): $AttributeTooltipContext;
        /**
         * The `ItemStack` with the tooltip.
         */
        getStack(): $ItemStack;
        constructor(stack: $ItemStack_, ctx: $AttributeTooltipContext);
        get skippingAll(): boolean;
        set skipAll(value: boolean);
        get context(): $AttributeTooltipContext;
        get stack(): $ItemStack;
    }
    /**
     * Fired when a screen is being drawn.
     * See the two subclasses for listening before and after drawing.
     */
    export class $ScreenEvent$Render extends $ScreenEvent {
        /**
         * @return the gui graphics used for rendering
         */
        getGuiGraphics(): $GuiGraphics;
        /**
         * @return the X coordinate of the mouse pointer
         */
        getMouseX(): number;
        /**
         * @return the X coordinate of the mouse pointer
         */
        getMouseY(): number;
        /**
         * @return the partial tick
         */
        getPartialTick(): number;
        get guiGraphics(): $GuiGraphics;
        get mouseX(): number;
        get mouseY(): number;
        get partialTick(): number;
    }
    /**
     * Fired when a mouse button is pressed.
     * See the two subclasses for listening before and after the normal handling.
     */
    export class $ScreenEvent$MouseButtonPressed extends $ScreenEvent$MouseInput {
        /**
         * @return the mouse button's input code
         */
        getButton(): number;
        constructor(screen: $Screen, mouseX: number, mouseY: number, button: number);
        get button(): number;
    }
    export class $ScreenEvent$MouseInput extends $ScreenEvent {
    }
    /**
     * Fired **after** a texture atlas is stitched together and all textures therein have been loaded.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $TextureAtlasStitchedEvent extends $Event implements $IModBusEvent {
        /**
         * @return the texture atlas
         */
        getAtlas(): $TextureAtlas;
        constructor(atlas: $TextureAtlas);
        get atlas(): $TextureAtlas;
    }
    /**
     * A time during level rendering for you to render custom things into the world.
     */
    export class $RenderLevelStageEvent$Stage {
        static fromRenderType(arg0: $RenderType): $RenderLevelStageEvent$Stage;
        static AFTER_WEATHER: $RenderLevelStageEvent$Stage;
        static AFTER_SKY: $RenderLevelStageEvent$Stage;
        static AFTER_CUTOUT_BLOCKS: $RenderLevelStageEvent$Stage;
        static AFTER_TRANSLUCENT_BLOCKS: $RenderLevelStageEvent$Stage;
        static AFTER_SOLID_BLOCKS: $RenderLevelStageEvent$Stage;
        static AFTER_TRIPWIRE_BLOCKS: $RenderLevelStageEvent$Stage;
        static AFTER_LEVEL: $RenderLevelStageEvent$Stage;
        static AFTER_BLOCK_ENTITIES: $RenderLevelStageEvent$Stage;
        static AFTER_ENTITIES: $RenderLevelStageEvent$Stage;
        static AFTER_PARTICLES: $RenderLevelStageEvent$Stage;
        static AFTER_CUTOUT_MIPPED_BLOCKS_BLOCKS: $RenderLevelStageEvent$Stage;
    }
    export class $ScreenEvent$MouseButtonReleased$Post$Result extends $Enum<$ScreenEvent$MouseButtonReleased$Post$Result> {
        static values(): $ScreenEvent$MouseButtonReleased$Post$Result[];
        static valueOf(arg0: string): $ScreenEvent$MouseButtonReleased$Post$Result;
        static FORCE_HANDLED: $ScreenEvent$MouseButtonReleased$Post$Result;
        static FORCE_UNHANDLED: $ScreenEvent$MouseButtonReleased$Post$Result;
        static DEFAULT: $ScreenEvent$MouseButtonReleased$Post$Result;
    }
    /**
     * Values that may be interpreted as {@link $ScreenEvent$MouseButtonReleased$Post$Result}.
     */
    export type $ScreenEvent$MouseButtonReleased$Post$Result_ = "force_handled" | "default" | "force_unhandled";
    /**
     * Fired **after** the character input is handled, if not handled by the screen
     * and the corresponding `Pre` is not cancelled.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, the character input will be set as handled.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ScreenEvent$CharacterTyped$Post extends $ScreenEvent$CharacterTyped {
        constructor(screen: $Screen, codePoint: string, modifiers: number);
    }
    /**
     * Base class of the two render frame events.
     * 
     * These events can be used to setup and teardown global render state that must persist for the current frame.
     * 
     * For the event that fires once per client tick (instead of per frame), see `ClientTickEvent`.
     */
    export class $RenderFrameEvent extends $Event {
        /**
         * @return the current partial tick, which is either the true partial tick or the pause partial tick, depending on if the game is paused
         */
        getPartialTick(): $DeltaTracker;
        get partialTick(): $DeltaTracker;
    }
    /**
     * Fired when the client player is notified of a change of `GameType` from the server.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ClientPlayerChangeGameTypeEvent extends $Event {
        /**
         * @return the client player information
         */
        getInfo(): $PlayerInfo;
        /**
         * @return the current game type of the player
         */
        getCurrentGameType(): $GameType;
        /**
         * @return the current game type of the player
         */
        getNewGameType(): $GameType;
        constructor(info: $PlayerInfo, currentGameType: $GameType_, newGameType: $GameType_);
        get info(): $PlayerInfo;
        get currentGameType(): $GameType;
        get newGameType(): $GameType;
    }
    /**
     * Fires at various times during LevelRenderer.renderLevel.
     * Check `#getStage` to render during the appropriate time for your use case.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $RenderLevelStageEvent extends $Event {
        /**
         * @return the camera
         */
        getCamera(): $Camera;
        /**
         * @return the pose stack used for rendering
         */
        getPoseStack(): $PoseStack;
        /**
         * @return the current "ticks" value in the level renderer
         */
        getRenderTick(): number;
        /**
         * @return the model view matrix used for rendering
         */
        getModelViewMatrix(): $Matrix4f;
        /**
         * @return the level renderer
         */
        getLevelRenderer(): $LevelRenderer;
        /**
         * @return the model view matrix used for rendering
         */
        getProjectionMatrix(): $Matrix4f;
        getStage(): $RenderLevelStageEvent$Stage;
        /**
         * @return the current partialTick value used for rendering
         */
        getPartialTick(): $DeltaTracker;
        /**
         * @return the frustum
         */
        getFrustum(): $Frustum;
        constructor(arg0: $RenderLevelStageEvent$Stage, arg1: $LevelRenderer, arg2: $PoseStack, arg3: $Matrix4f, arg4: $Matrix4f, arg5: number, arg6: $DeltaTracker, arg7: $Camera, arg8: $Frustum);
        get camera(): $Camera;
        get poseStack(): $PoseStack;
        get renderTick(): number;
        get modelViewMatrix(): $Matrix4f;
        get levelRenderer(): $LevelRenderer;
        get projectionMatrix(): $Matrix4f;
        get stage(): $RenderLevelStageEvent$Stage;
        get partialTick(): $DeltaTracker;
        get frustum(): $Frustum;
    }
    /**
     * Fired when a player chat message is received on the client.
     * 
     * This event is cancellable, and does not have a result.
     * If the event is cancelled, the message is not displayed in the chat message window.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $ClientChatReceivedEvent$Player extends $ClientChatReceivedEvent {
        /**
         * @return the full player chat message.
         * This contains the sender UUID, various signing data, and the optional unsigned contents.
         */
        getPlayerChatMessage(): $PlayerChatMessage;
        constructor(boundChatType: $ChatType$Bound_, message: $Component_, playerChatMessage: $PlayerChatMessage_, sender: $UUID_);
        get playerChatMessage(): $PlayerChatMessage;
    }
    /**
     * Fired **before** an entity is rendered.
     * This can be used to render additional effects or suppress rendering.
     * 
     * This event is cancelable, and does not have a result.
     * If this event is cancelled, then the entity will not be rendered and the corresponding
     * `Post` will not be fired.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $RenderLivingEvent$Pre<T extends $LivingEntity, M extends $EntityModel<T>> extends $RenderLivingEvent<T, M> implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(entity: $LivingEntity, renderer: $LivingEntityRenderer<T, M>, partialTick: number, poseStack: $PoseStack, multiBufferSource: $MultiBufferSource_, packedLight: number);
    }
    /**
     * Event for registering screen effects when transitioning across dimensions.
     * Note that there is a priority order when it comes to what screens are displayed:
     * 
     * - Using registerConditionalEffect has priority over the usual transition effects, and will only fire when travelling to the specified dimension coming from a certain dimension.
     * 
     * - If a dimension has a screen that displays when entering it, that will have priority over a dimension that has one when you leave it.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $RegisterDimensionTransitionScreenEvent extends $Event implements $IModBusEvent {
        registerIncomingEffect(arg0: $ResourceKey_<$Level>, arg1: $DimensionTransitionScreenManager$ReceivingLevelScreenFactory_): boolean;
        registerOutgoingEffect(arg0: $ResourceKey_<$Level>, arg1: $DimensionTransitionScreenManager$ReceivingLevelScreenFactory_): boolean;
        registerConditionalEffect(arg0: $ResourceKey_<$Level>, arg1: $ResourceKey_<$Level>, arg2: $DimensionTransitionScreenManager$ReceivingLevelScreenFactory_): boolean;
        constructor(conditionalDimensionEffects: $Map_<$Pair<$ResourceKey_<$Level>, $ResourceKey_<$Level>>, $DimensionTransitionScreenManager$ReceivingLevelScreenFactory_>, toEffects: $Map_<$ResourceKey_<$Level>, $DimensionTransitionScreenManager$ReceivingLevelScreenFactory_>, fromEffects: $Map_<$ResourceKey_<$Level>, $DimensionTransitionScreenManager$ReceivingLevelScreenFactory_>);
    }
}
