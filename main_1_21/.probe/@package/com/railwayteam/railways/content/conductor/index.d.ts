import { $GoalSelector, $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $ItemInHandRenderer, $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $PortalProcessor, $Entity, $Entity$RemovalReason, $LivingEntity, $WalkAnimationState } from "@package/net/minecraft/world/entity";
import { $ElytraLayer, $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $Minecraft } from "@package/net/minecraft/client";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Spliterator, $Iterator, $List, $Map, $Set } from "@package/java/util";
import { $AbstractGolem } from "@package/net/minecraft/world/entity/animal";
import { $HumanoidModel$ArmPose, $HeadedModel, $Model, $EntityModel, $PlayerModel, $HumanoidModel } from "@package/net/minecraft/client/model";
import { $Consumer, $Consumer_, $Supplier } from "@package/java/util/function";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $SectionPos, $Vec3i } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Enum, $Object, $Iterable } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $IRedstoneLinkable, $RedstoneLinkNetworkHandler$Frequency } from "@package/com/simibubi/create/content/redstone/link";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $WorldAttached, $Couple } from "@package/net/createmod/catnip/data";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $EntityRendererProvider$Context, $EntityRenderDispatcher, $MobRenderer, $RenderLayerParent } from "@package/net/minecraft/client/renderer/entity";
import { $DyeColor_, $Item, $ItemStack_, $ArmorItem, $ItemStack, $Item$Properties, $DyeColor } from "@package/net/minecraft/world/item";
import { $DispenseItemBehavior } from "@package/net/minecraft/core/dispenser";
import { $ItemAttributeModifiers } from "@package/net/minecraft/world/item/component";
import { $ModelLayerLocation, $EntityModelSet, $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $MountedToolbox } from "@package/com/railwayteam/railways/content/conductor/toolbox";
export * as vent from "@package/com/railwayteam/railways/content/conductor/vent";
export * as whistle from "@package/com/railwayteam/railways/content/conductor/whistle";
export * as toolbox from "@package/com/railwayteam/railways/content/conductor/toolbox";
export * as neoforge from "@package/com/railwayteam/railways/content/conductor/neoforge";
export * as remote_lens from "@package/com/railwayteam/railways/content/conductor/remote_lens";

declare module "@package/com/railwayteam/railways/content/conductor" {
    export class $ConductorEntity extends $AbstractGolem {
        getForwardSignalStrength(): number;
        addSchedule(arg0: $ItemStack_): void;
        doCheckFallDamage(arg0: number, arg1: boolean): void;
        stopViewing(arg0: $ServerPlayer): void;
        static defaultColor(): $DyeColor;
        canReach(arg0: $Vec3i): boolean;
        getJob(): $ConductorEntity$Job;
        setJob(arg0: $ConductorEntity$Job_): void;
        isInMinecart(): boolean;
        canUseBlock(arg0: $BlockState_): boolean;
        static colorFrom(arg0: number): $DyeColor;
        teleportToForce(arg0: number, arg1: number, arg2: number): void;
        startViewing(arg0: $ServerPlayer): boolean;
        static idFrom(arg0: $DyeColor_): number;
        getOrCreateToolboxHolder(): $MountedToolbox;
        isPossessed(): boolean;
        hasSentChunks(): boolean;
        setChunkLoadingDistance(arg0: number): void;
        isPossessedAndClient(): boolean;
        isHoldingSchedules(): boolean;
        isCarryingToolbox(): boolean;
        equipToolbox(arg0: $ItemStack_): void;
        unequipToolbox(): $ItemStack;
        setHasSentChunks(arg0: boolean): void;
        updatePossessionInputs(): void;
        isCorrectEngineerCap(arg0: $ItemStack_): boolean;
        getSecondaryHeadStack(): $ItemStack;
        static hasRecentlyDismounted(arg0: $Player): boolean;
        onSpyInteract(arg0: $BlockPos_): void;
        isHoldingSchedulesClient(): boolean;
        getToolboxDisplayStack(): $ItemStack;
        getToolbox(): $MountedToolbox;
        setColor(arg0: $DyeColor_): void;
        getColor(): $DyeColor;
        static spawn(arg0: $Level_, arg1: $BlockPos_, arg2: $ItemStack_): $ConductorEntity;
        setSharedFlag(arg0: number, arg1: boolean): void;
        static isPlayerDisguised(arg0: $Player): boolean;
        turnView(arg0: number, arg1: number): void;
        static createAttributes(): $AttributeSupplier$Builder;
        static canSpyInteract(arg0: $BlockState_): boolean;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static FREQUENCY_DATA: $Map<string, $Couple<$EntityDataAccessor<$ItemStack>>>;
        static RECENTLY_DISMOUNTED_PLAYERS: $List<$Player>;
        static MAX_PICKUP_LOOT_CHANCE: number;
        visualBaseEntity: $Player;
        lootTable: $ResourceKey<$LootTable>;
        yHeadRot: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        xRotLast: number;
        yRotLast: number;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        yLast: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        firstGoodY: number;
        timeOffs: number;
        firstGoodZ: number;
        oldSectionPos: $SectionPos;
        firstGoodX: number;
        rotA: number;
        horizontalCollision: boolean;
        visualBaseModel: $PlayerModel<never>;
        static HOLDING_SCHEDULES: $EntityDataAccessor<boolean>;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        xLast: number;
        tickCount: number;
        static COLOR: $EntityDataAccessor<number>;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        static JOB: $EntityDataAccessor<number>;
        receivedMovePacketCount: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        level: $Level;
        ambientSoundTime: number;
        yRot: number;
        static BLOCK: $EntityDataAccessor<$BlockPos>;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        targetSelector: $GoalSelector;
        bob: number;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        ventCooldown: number;
        swinging: boolean;
        hurtMarked: boolean;
        static FAKE_PLAYER_PROFILE: $GameProfile;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static WITH_TOOLBOXES: $WorldAttached<$Set<$ConductorEntity>>;
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
        knownMovePacketCount: number;
        removeArrowTime: number;
        walkDistO: number;
        lastGoodX: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        lastGoodY: number;
        lastGoodZ: number;
        zLast: number;
        yBodyRot: number;
        blocksBuilding: boolean;
        oBob: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        constructor(arg0: $EntityType_<$AbstractGolem>, arg1: $Level_);
        get forwardSignalStrength(): number;
        get inMinecart(): boolean;
        get orCreateToolboxHolder(): $MountedToolbox;
        get possessed(): boolean;
        set chunkLoadingDistance(value: number);
        get possessedAndClient(): boolean;
        get holdingSchedules(): boolean;
        get carryingToolbox(): boolean;
        get secondaryHeadStack(): $ItemStack;
        get holdingSchedulesClient(): boolean;
        get toolboxDisplayStack(): $ItemStack;
        get toolbox(): $MountedToolbox;
    }
    export class $ServerPlayerPossessionAccess {
    }
    export interface $ServerPlayerPossessionAccess {
        railways$getPossessedConductor(): $ConductorEntity;
        railways$setPossessedConductor(arg0: $ConductorEntity): void;
    }
    export class $ConductorEntity$JobBasedGoal extends $Goal {
    }
    export class $ConductorRenderer extends $MobRenderer<$ConductorEntity, $ConductorEntityModel<$ConductorEntity>> {
        getTextureLocation(arg0: $ConductorEntity): $ResourceLocation;
        render(arg0: $ConductorEntity, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        static TEXTURE: $ResourceLocation;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$ConductorEntity, $ConductorEntityModel<$ConductorEntity>>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $ConductorEntityModel<T extends $ConductorEntity> extends $HumanoidModel<T> {
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static createBodyLayer(): $LayerDefinition;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LAYER_LOCATION: $ModelLayerLocation;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(arg0: $ModelPart);
    }
    export class $ConductorSecondaryHeadLayer<T extends $ConductorEntity, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<T, M>, arg1: $EntityModelSet, arg2: $ItemInHandRenderer);
        constructor(arg0: $RenderLayerParent<T, M>, arg1: $EntityModelSet, arg2: number, arg3: number, arg4: number, arg5: $ItemInHandRenderer);
    }
    export class $ConductorCapModel<T extends $LivingEntity> extends $Model implements $HeadedModel {
        getHead(): $ModelPart;
        static createBodyLayer(): $LayerDefinition;
        static clearModelCache(): void;
        static of(arg0: $ItemStack_, arg1: $HumanoidModel<never>, arg2: $LivingEntity): $ConductorCapModel<never>;
        setProperties(arg0: $HumanoidModel<never>): void;
        static LAYER_LOCATION: $ModelLayerLocation;
        constructor(arg0: $ModelPart, arg1: $PartialModel, arg2: boolean);
        get head(): $ModelPart;
        set properties(value: $HumanoidModel<never>);
    }
    export class $ConductorPossessionController {
        static getCameraStorage(): $Object;
        static setCameraStorage(arg0: $Object): void;
        static isPossessingConductor(arg0: $Entity): boolean;
        static wasUpPressed(): boolean;
        static wasDownPressed(): boolean;
        static wasLeftPressed(): boolean;
        static wasRightPressed(): boolean;
        static wasSprintPressed(): boolean;
        static wasJumpPressed(): boolean;
        static tryUpdatePossession(arg0: $ConductorEntity): void;
        static setRenderPosition(arg0: $Entity): void;
        static onHandleKeybinds(arg0: $Minecraft, arg1: boolean): void;
        static getPossessingConductor(arg0: $Entity): $ConductorEntity;
        static dismount(): void;
        static onClientTick(arg0: $Minecraft, arg1: boolean): void;
        constructor();
        static set renderPosition(value: $Entity);
    }
    export class $ConductorEntity$ConductorLookedAtGoal extends $ConductorEntity$JobBasedGoal {
    }
    export class $ConductorCapHumanoidLayer<T extends $LivingEntity, M extends $HumanoidModel<T>> extends $RenderLayer<T, M> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<T, M>);
    }
    export class $ConductorEntity$FollowToolboxPlayerGoal extends $ConductorEntity$JobBasedGoal {
    }
    export class $ConductorEntity$FrequencyHolder implements $Iterable<($Couple<$RedstoneLinkNetworkHandler$Frequency>) | undefined> {
        setLeft(arg0: $Couple<$RedstoneLinkNetworkHandler$Frequency> | null): void;
        setRight(arg0: $Couple<$RedstoneLinkNetworkHandler$Frequency> | null): void;
        getBackward(): $Couple<$RedstoneLinkNetworkHandler$Frequency>;
        settersInOrder(): $List<$Consumer<($Couple<$RedstoneLinkNetworkHandler$Frequency>) | undefined>>;
        setBackward(arg0: $Couple<$RedstoneLinkNetworkHandler$Frequency> | null): void;
        setJump(arg0: $Couple<$RedstoneLinkNetworkHandler$Frequency> | null): void;
        setSneak(arg0: $Couple<$RedstoneLinkNetworkHandler$Frequency> | null): void;
        getJump(): $Couple<$RedstoneLinkNetworkHandler$Frequency>;
        getSneak(): $Couple<$RedstoneLinkNetworkHandler$Frequency>;
        setForward(arg0: $Couple<$RedstoneLinkNetworkHandler$Frequency> | null): void;
        setters(): $Map<string, $Consumer<($Couple<$RedstoneLinkNetworkHandler$Frequency>) | undefined>>;
        iterator(): $Iterator<($Couple<$RedstoneLinkNetworkHandler$Frequency>) | undefined>;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $ConductorEntity$FrequencyHolder;
        entries(): $Map<string, ($Couple<$RedstoneLinkNetworkHandler$Frequency>) | undefined>;
        getLeft(): $Couple<$RedstoneLinkNetworkHandler$Frequency>;
        getRight(): $Couple<$RedstoneLinkNetworkHandler$Frequency>;
        stacks(): $Map<string, $Couple<$ItemStack>>;
        getForward(): $Couple<$RedstoneLinkNetworkHandler$Frequency>;
        spliterator(): $Spliterator<($Couple<$RedstoneLinkNetworkHandler$Frequency>) | undefined>;
        forEach(arg0: $Consumer_<($Couple<$RedstoneLinkNetworkHandler$Frequency>) | undefined>): void;
        [Symbol.iterator](): Iterator<($Couple<$RedstoneLinkNetworkHandler$Frequency>) | undefined>
    }
    export class $ConductorEntity$FrequencyListener implements $IRedstoneLinkable {
        getNetworkKey(): $Couple<$RedstoneLinkNetworkHandler$Frequency>;
        getTransmittedStrength(): number;
        isListening(): boolean;
        setReceivedStrength(arg0: number): void;
        isPowered(): boolean;
        getLocation(): $BlockPos;
        isAlive(): boolean;
        receivedStrength: number;
        key: string;
        frequency: $Couple<$RedstoneLinkNetworkHandler$Frequency>;
        constructor(arg0: $ConductorEntity, arg1: string);
        get networkKey(): $Couple<$RedstoneLinkNetworkHandler$Frequency>;
        get transmittedStrength(): number;
        get listening(): boolean;
        get powered(): boolean;
        get location(): $BlockPos;
        get alive(): boolean;
    }
    export class $ConductorFlagLayer<T extends $ConductorEntity, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<T, M>);
    }
    export class $ClientHandler {
        static getPlayerMountedOnCamera(): $ConductorEntity;
        static isPossessed(arg0: $ConductorEntity): boolean;
        static isPlayerMountedOnCamera(): boolean;
        constructor();
    }
    export class $ConductorCapItem extends $ArmorItem {
        static create(arg0: $Item$Properties, arg1: $DyeColor_): $ConductorCapItem;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        color: $DyeColor;
        textureStr: string;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        textureId: $ResourceLocation;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        static BY_BLOCK: $Map<$Block, $Item>;
    }
    export class $ConductorCapLayer<T extends $ConductorEntity, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<T, M>);
    }
    export class $ConductorEntity$ConductorPonderBlockGoal extends $ConductorEntity$JobBasedGoal {
    }
    export class $ConductorRemoteLayer<T extends $ConductorEntity, M extends $ConductorEntityModel<T>> extends $RenderLayer<T, M> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<T, M>);
    }
    export class $IConductorHoldingFakePlayer {
    }
    export interface $IConductorHoldingFakePlayer {
        getConductor(): $ConductorEntity;
        get conductor(): $ConductorEntity;
    }
    /**
     * Values that may be interpreted as {@link $IConductorHoldingFakePlayer}.
     */
    export type $IConductorHoldingFakePlayer_ = (() => $ConductorEntity);
    export class $ConductorElytraLayer<T extends $ConductorEntity, M extends $ConductorEntityModel<T>> extends $ElytraLayer<T, M> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<T, M>, arg1: $EntityModelSet);
    }
    export class $ConductorToolboxLayer<T extends $ConductorEntity, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<T, M>);
    }
    export class $ConductorEntity$RemoteControlGoal extends $ConductorEntity$JobBasedGoal {
    }
    export class $ConductorEntity$Job extends $Enum<$ConductorEntity$Job> {
        static values(): $ConductorEntity$Job[];
        static valueOf(arg0: string): $ConductorEntity$Job;
        static TOOLBOX_CARRIER: $ConductorEntity$Job;
        static REDSTONE_OPERATOR: $ConductorEntity$Job;
        static SPY: $ConductorEntity$Job;
        static REMOTE_CONTROL: $ConductorEntity$Job;
        static DEFAULT: $ConductorEntity$Job;
    }
    /**
     * Values that may be interpreted as {@link $ConductorEntity$Job}.
     */
    export type $ConductorEntity$Job_ = "redstone_operator" | "toolbox_carrier" | "remote_control" | "spy";
}
