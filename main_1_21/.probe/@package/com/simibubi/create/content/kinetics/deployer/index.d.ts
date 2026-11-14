import { $MinecraftServer } from "@package/net/minecraft/server";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Recipe, $RecipeHolder, $Ingredient_, $Ingredient, $RecipeSerializer, $RecipeHolder_, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $HumanoidArm, $EntityDimensions, $Entity$RemovalReason, $WalkAnimationState, $PortalProcessor, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Clearable, $InteractionResult, $InteractionHand, $InteractionHand_, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $BlockSnapshot, $FakePlayer } from "@package/net/neoforged/neoforge/common/util";
import { $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $PatternSchematicLevel } from "@package/com/cak/pattern_schematics/foundation/mirror";
import { $AllRecipeTypes_ } from "@package/com/simibubi/create";
import { $AbstractContainerMenu, $InventoryMenu } from "@package/net/minecraft/world/inventory";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $BeltProcessingBehaviour, $BeltProcessingBehaviour$ProcessingResult, $TransportedItemStackHandlerBehaviour } from "@package/com/simibubi/create/content/kinetics/belt/behaviour";
import { $ServerGamePacketListenerImpl } from "@package/net/minecraft/server/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $RecipeWrapper } from "@package/net/neoforged/neoforge/items/wrapper";
import { $BooleanProperty, $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $PlacementOffset, $IPlacementHelper } from "@package/net/createmod/catnip/placement";
import { $SimpleDynamicVisual, $SimpleTickableVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $EntityEvent$Size } from "@package/net/neoforged/neoforge/event/entity";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $TransportedItemStack } from "@package/com/simibubi/create/content/kinetics/belt/transport";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $UUID_, $Set_, $ArrayList, $Map, $UUID, $List, $List_ } from "@package/java/util";
import { $ValueBoxTransform$Sided } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $PlayerInteractEvent$RightClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $ItemEntry } from "@package/com/tterrag/registrate/util/entry";
import { $Supplier_, $Consumer_, $Function_, $Supplier } from "@package/java/util/function";
import { $ServerPlayerGameMode, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Vec3i, $HolderLookup$Provider, $Direction_, $IdMapper } from "@package/net/minecraft/core";
import { $KineticBlockEntity, $ShaftVisual, $DirectionalAxisKineticBlock } from "@package/com/simibubi/create/content/kinetics/base";
import { $SequencedAssemblySubCategory } from "@package/com/simibubi/create/compat/jei/category/sequencedAssembly";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class, $Object } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $IAssemblyRecipe } from "@package/com/simibubi/create/content/processing/sequenced";
import { $ServerLevelAccessor, $ItemLike_, $BlockGetter, $EntityGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ICancellableEvent, $Event } from "@package/net/neoforged/bus/api";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $IItemHandlerModifiable, $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $MovingInteractionBehaviour } from "@package/com/simibubi/create/api/behaviour/interaction";
import { $ProcessingRecipe$Factory, $ProcessingRecipeBuilder, $ProcessingRecipeParams, $ProcessingOutput, $ProcessingRecipe, $ProcessingRecipe$Factory_ } from "@package/com/simibubi/create/content/processing/recipe";
import { $ResourceKey, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $WrappedLevel, $SchematicLevel } from "@package/net/createmod/catnip/levelWrappers";
import { $LivingDropsEvent, $LivingExperienceDropEvent, $LivingChangeTargetEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/kinetics/deployer" {
    export class $DeployerBlock$PlacementHelper implements $IPlacementHelper {
        matchesState(arg0: $BlockState_): boolean;
        renderAt(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $PlacementOffset): void;
        displayGhost(arg0: $PlacementOffset): void;
        matchesItem(arg0: $ItemStack_): boolean;
        getOffset(arg0: $Player, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult, arg5: $ItemStack_): $PlacementOffset;
    }
    export class $DeployerApplicationRecipe extends $ItemApplicationRecipe implements $IAssemblyRecipe {
        getDescriptionForAssembly(): $Component;
        addRequiredMachines(arg0: $Set_<$ItemLike_>): void;
        addAssemblyIngredients(arg0: $List_<$Ingredient_>): void;
        getJEISubCategory(): $Supplier<$Supplier<$SequencedAssemblySubCategory>>;
        static convert(arg0: $RecipeHolder_<never>): $RecipeHolder<$DeployerApplicationRecipe>;
        supportsAssembly(): boolean;
        addAssemblyFluidIngredients(arg0: $List_<$SizedFluidIngredient>): void;
        constructor(arg0: $ItemApplicationRecipeParams);
        get descriptionForAssembly(): $Component;
        get JEISubCategory(): $Supplier<$Supplier<$SequencedAssemblySubCategory>>;
    }
    export class $DeployerRenderer extends $SafeBlockEntityRenderer<$DeployerBlockEntity> {
        static renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $DeployerItemHandler implements $IItemHandlerModifiable {
        getHeld(): $ItemStack;
        set(arg0: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(arg0: number): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        isEmpty(): boolean;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        asContainer(): $Container;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        constructor(arg0: $DeployerBlockEntity);
        get held(): $ItemStack;
        get empty(): boolean;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $DeployerMovingInteraction extends $MovingInteractionBehaviour {
        static REGISTRY: $SimpleRegistry<$Block, $MovingInteractionBehaviour>;
        constructor();
    }
    export class $BeltDeployerCallbacks {
        static onItemReceived(arg0: $TransportedItemStack, arg1: $TransportedItemStackHandlerBehaviour, arg2: $DeployerBlockEntity): $BeltProcessingBehaviour$ProcessingResult;
        static whenItemHeld(arg0: $TransportedItemStack, arg1: $TransportedItemStackHandlerBehaviour, arg2: $DeployerBlockEntity): $BeltProcessingBehaviour$ProcessingResult;
        static activate(arg0: $TransportedItemStack, arg1: $TransportedItemStackHandlerBehaviour, arg2: $DeployerBlockEntity, arg3: $Recipe<never>): void;
        constructor();
    }
    export class $DeployerHandler {
        static safeOnUse(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $InteractionHand_, arg5: $BlockHitResult): $InteractionResult;
        static tryHarvestBlock(arg0: $ServerPlayer, arg1: $ServerPlayerGameMode, arg2: $BlockPos_): boolean;
        static CAPTURED_BLOCK_DROPS_VIEW: $Map<$BlockPos, $List<$ItemEntity>>;
        constructor();
    }
    export class $DeployerBlockEntity extends $KineticBlockEntity implements $Clearable {
        changeMode(): void;
        discardPlayer(): void;
        redstoneUpdate(): void;
        getHandPose(): $PartialModel;
        getPlayer(): $DeployerFakePlayer;
        clearContent(): void;
        getRecipe(arg0: $ItemStack_): $RecipeHolder<$Recipe<$RecipeInput>>;
        startFistBump(arg0: $Direction_): boolean;
        triggerFistBump(): void;
        getHandOffset(arg0: number): number;
        setAnimatedOffset(arg0: number): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        processingBehaviour: $BeltProcessingBehaviour;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get handPose(): $PartialModel;
        get player(): $DeployerFakePlayer;
        set animatedOffset(value: number);
    }
    export class $DeployerRecipeSearchEvent extends $Event implements $ICancellableEvent {
        getRecipe(): $RecipeHolder<$Recipe<$RecipeInput>>;
        addRecipe(arg0: $Supplier_<($RecipeHolder<$Recipe<$RecipeInput>>) | undefined>, arg1: number): void;
        shouldAddRecipeWithPriority(arg0: number): boolean;
        getInventory(): $RecipeWrapper;
        getBlockEntity(): $DeployerBlockEntity;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $DeployerBlockEntity, arg1: $RecipeWrapper);
        get recipe(): $RecipeHolder<$Recipe<$RecipeInput>>;
        get inventory(): $RecipeWrapper;
        get blockEntity(): $DeployerBlockEntity;
    }
    export class $ItemApplicationRecipeParams extends $ProcessingRecipeParams {
        static CODEC: $MapCodec<$ItemApplicationRecipeParams>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemApplicationRecipeParams>;
        constructor();
    }
    export class $DeployerMovementBehaviour implements $MovementBehaviour {
        redirect$epo000$create_pattern_schematics$getBlockState(arg0: $SchematicLevel, arg1: $BlockPos_): $BlockState;
        redirect$epo000$create_pattern_schematics$isIn(arg0: $ItemEntry<any>, arg1: $ItemStack_): boolean;
        handler$epo000$create_pattern_schematics$after_activateAsSchematicPrinter(arg0: $CallbackInfo): void;
        redirect$epo000$create_pattern_schematics$isInside(arg0: $BoundingBox, arg1: $Vec3i): boolean;
        redirect$epo000$create_pattern_schematics$getBlockEntity(arg0: $SchematicLevel, arg1: $BlockPos_): $BlockEntity;
        visitNewPosition(arg0: $MovementContext, arg1: $BlockPos_): void;
        cancelStall(arg0: $MovementContext): void;
        getActiveAreaOffset(arg0: $MovementContext): $Vec3;
        disableBlockEntityRendering(): boolean;
        stopMoving(arg0: $MovementContext): void;
        writeExtraData(arg0: $MovementContext): void;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        createVisual(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext): $ActorVisual;
        pattern_Schematics$getSourceOfLocal(arg0: $BlockPos_, arg1: $PatternSchematicLevel): $BlockPos;
        tick(arg0: $MovementContext): void;
        activate(arg0: $MovementContext, arg1: $BlockPos_, arg2: $DeployerFakePlayer, arg3: $DeployerBlockEntity$Mode_): void;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        startMoving(arg0: $MovementContext): void;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        onDisabledByControls(arg0: $MovementContext): void;
        mustTickWhileDisabled(): boolean;
        onSpeedChanged(arg0: $MovementContext, arg1: $Vec3_, arg2: $Vec3_): void;
        collectOrDropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        isActive(arg0: $MovementContext): boolean;
        constructor();
    }
    export class $DeployerHandler$ItemUseWorld extends $WrappedLevel implements $ServerLevelAccessor {
        addFreshEntityWithPassengers(arg0: $Entity): void;
        self(): $EntityGetter;
        restoringBlockSnapshots: boolean;
        oThunderLevel: number;
        static LONG_PARTICLE_CLIP_RANGE: number;
        static ATTACHMENTS_NBT_KEY: string;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static MAX_BRIGHTNESS: number;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        rainLevel: number;
        captureBlockSnapshots: boolean;
    }
    export class $DeployerActorVisual extends $ActorVisual {
        constructor(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext);
    }
    export class $DeployerVisual extends $ShaftVisual<$DeployerBlockEntity> implements $SimpleDynamicVisual, $SimpleTickableVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: $DeployerBlockEntity, arg2: number);
    }
    export class $ItemApplicationRecipe$Builder<R extends $ItemApplicationRecipe> extends $ProcessingRecipeBuilder<$ItemApplicationRecipeParams, R, $ItemApplicationRecipe$Builder<R>> {
        toolNotConsumed(): $ItemApplicationRecipe$Builder<R>;
        constructor(arg0: $ItemApplicationRecipe$Factory_<R>, arg1: $ResourceLocation_);
    }
    export class $ManualApplicationRecipe extends $ItemApplicationRecipe {
        static asDeploying(arg0: $RecipeHolder_<never>): $RecipeHolder<$DeployerApplicationRecipe>;
        transformBlock(arg0: $BlockState_, arg1: $RandomSource): $BlockState;
        static manualApplicationRecipesApplyInWorld(arg0: $PlayerInteractEvent$RightClickBlock): void;
        getRollableResultsExceptBlock(): $List<$ProcessingOutput>;
        testBlock(arg0: $BlockState_): boolean;
        constructor(arg0: $ItemApplicationRecipeParams);
        get rollableResultsExceptBlock(): $List<$ProcessingOutput>;
    }
    export class $DeployerFilterSlot extends $ValueBoxTransform$Sided {
        constructor();
    }
    export class $ItemApplicationRecipe$Factory<R extends $ItemApplicationRecipe> {
    }
    export interface $ItemApplicationRecipe$Factory<R extends $ItemApplicationRecipe> extends $ProcessingRecipe$Factory<$ItemApplicationRecipeParams, R> {
        create(arg0: $ItemApplicationRecipeParams): R;
    }
    /**
     * Values that may be interpreted as {@link $ItemApplicationRecipe$Factory}.
     */
    export type $ItemApplicationRecipe$Factory_<R> = ((arg0: $ItemApplicationRecipeParams) => R);
    export class $DeployerFakePlayer$DeployerGameProfile extends $GameProfile {
    }
    export class $DeployerBlock extends $DirectionalAxisKineticBlock implements $IBE<$DeployerBlockEntity> {
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        getBlockEntityType(): $BlockEntityType<$DeployerBlockEntity>;
        getBlockEntityClass(): $Class<$DeployerBlockEntity>;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getCollisionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$DeployerBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$DeployerBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$DeployerBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($DeployerBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $DeployerBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static AXIS_ALONG_FIRST_COORDINATE: $BooleanProperty;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$DeployerBlockEntity>;
        get blockEntityClass(): $Class<$DeployerBlockEntity>;
    }
    export class $ItemApplicationRecipe$Serializer<R extends $ItemApplicationRecipe> implements $RecipeSerializer<R> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, R>;
        codec(): $MapCodec<R>;
        constructor(arg0: $ProcessingRecipe$Factory_<$ItemApplicationRecipeParams, R>);
    }
    export class $DeployerFakePlayer extends $FakePlayer {
        static deployerHasEyesOnHisFeet(arg0: $EntityEvent$Size): void;
        static deployerCollectsDropsFromKilledEntities(arg0: $LivingDropsEvent): void;
        static deployerKillsDoNotSpawnXP(arg0: $LivingExperienceDropEvent): void;
        static entitiesDontRetaliate(arg0: $LivingChangeTargetEvent): void;
        serializeNBT(arg0: $HolderLookup$Provider): $Player;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        yHeadRot: number;
        yCloakO: number;
        noPhysics: boolean;
        yo: number;
        connection: $ServerGamePacketListenerImpl;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static INTERACTION_DISTANCE_VERIFICATION_BUFFER: number;
        placedTracks: boolean;
        static ID_TAG: string;
        static WAKE_UP_DURATION: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        onMinecartContraption: boolean;
        wonGame: boolean;
        walkDist: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        gameMode: $ServerPlayerGameMode;
        object: $Object;
        static STANDING_DIMENSIONS: $EntityDimensions;
        yya: number;
        server: $MinecraftServer;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static SWIMMING_BB_HEIGHT: number;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        static DEFAULT_BABY_SCALE: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        static DEFAULT_BB_HEIGHT: number;
        seenCredits: boolean;
        xxa: number;
        zCloak: number;
        flyDist: number;
        static fallbackID: $UUID;
        currentImpulseImpactPos: $Vec3;
        static PASSENGERS_TAG: string;
        xCloakO: number;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        rotA: number;
        horizontalCollision: boolean;
        static ENDER_SLOT_OFFSET: number;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        static HELD_ITEM_SLOT: number;
        yCloak: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        tickCount: number;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        level: $Level;
        yRot: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        bob: number;
        experienceProgress: number;
        totalExperience: number;
        xOld: number;
        wasInPowderSnow: boolean;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventoryMenu: $InventoryMenu;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        fishing: $FishingHook;
        removeArrowTime: number;
        walkDistO: number;
        static SWIMMING_BB_WIDTH: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        oBob: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        currentExplosionCause: $Entity;
        constructor(arg0: $ServerLevel, arg1: $UUID_);
    }
    export class $ItemApplicationRecipe extends $ProcessingRecipe<$RecipeWrapper, $ItemApplicationRecipeParams> {
        getProcessedItem(): $Ingredient;
        getRequiredHeldItem(): $Ingredient;
        shouldKeepHeldItem(): boolean;
        matches(arg0: $RecipeWrapper, arg1: $Level_): boolean;
        constructor(arg0: $AllRecipeTypes_, arg1: $ItemApplicationRecipeParams);
        get processedItem(): $Ingredient;
        get requiredHeldItem(): $Ingredient;
    }
    export class $DeployerBlockEntity$State extends $Enum<$DeployerBlockEntity$State> {
    }
    /**
     * Values that may be interpreted as {@link $DeployerBlockEntity$State}.
     */
    export type $DeployerBlockEntity$State_ = "waiting" | "expanding" | "retracting" | "dumping";
    export class $DeployerBlockEntity$Mode extends $Enum<$DeployerBlockEntity$Mode> {
    }
    /**
     * Values that may be interpreted as {@link $DeployerBlockEntity$Mode}.
     */
    export type $DeployerBlockEntity$Mode_ = "punch" | "use";
}
