import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $AnimalPanic, $Behavior } from "@package/net/minecraft/world/entity/ai/behavior";
import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $MoveControl, $BodyRotationControl, $LookControl } from "@package/net/minecraft/world/entity/ai/control";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $AnimationState, $EntityDimensions, $EntityType_, $Entity$RemovalReason, $Saddleable, $PortalProcessor, $Pose_, $WalkAnimationState, $PlayerRideableJumping } from "@package/net/minecraft/world/entity";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $AbstractHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $Predicate } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos } from "@package/net/minecraft/core";
import { $Brain$Provider } from "@package/net/minecraft/world/entity/ai";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";

declare module "@package/net/minecraft/world/entity/animal/camel" {
    export class $Camel$CamelMoveControl extends $MoveControl {
        static MIN_SPEED_SQR: number;
        static MIN_SPEED: number;
    }
    export class $Camel$CamelBodyRotationControl extends $BodyRotationControl {
    }
    export class $Camel$CamelLookControl extends $LookControl {
    }
    export class $CamelAi {
        static updateActivity(camel: $Camel): void;
        static getTemptations(): $Predicate<$ItemStack>;
        static brainProvider(): $Brain$Provider<$Camel>;
        constructor();
        static get temptations(): $Predicate<$ItemStack>;
    }
    export class $CamelAi$CamelPanic extends $AnimalPanic<$Camel> {
        static DEFAULT_DURATION: number;
        constructor(arg0: number);
    }
    export class $CamelAi$RandomSitting extends $Behavior<$Camel> {
        static DEFAULT_DURATION: number;
        constructor(minimalPoseSeconds: number);
    }
    export class $Camel extends $AbstractHorse implements $PlayerRideableJumping, $Saddleable {
        resetLastPoseChangeTick(lastPoseChangeTick: number): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isDashing(): boolean;
        setDashing(dashing: boolean): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        refuseToMove(): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isCamelSitting(): boolean;
        /**
         * Called to update the entity's position/logic.
         */
        standUpInstantly(): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isCamelVisuallySitting(): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isInPoseTransition(): boolean;
        getPoseTime(): number;
        /**
         * Called to update the entity's position/logic.
         */
        standUp(): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        canCamelChangePose(): boolean;
        /**
         * Called to update the entity's position/logic.
         */
        sitDown(): void;
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        static createAttributes(): $AttributeSupplier$Builder;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static MAX_WEARING_ARMOR_CHANCE: number;
        sitAnimationState: $AnimationState;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_HEAD_Y_ROT: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        lootTable: $ResourceKey<$LootTable>;
        yHeadRot: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        sitPoseAnimationState: $AnimationState;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        static LAST_POSE_CHANGE_TICK: $EntityDataAccessor<number>;
        static INV_BASE_COUNT: number;
        static ID_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        static CHEST_SLOT_OFFSET: number;
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
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        tailCounter: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        playerJumpPendingScale: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        static BABY_START_AGE: number;
        timeOffs: number;
        rotA: number;
        horizontalCollision: boolean;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static DASH: $EntityDataAccessor<boolean>;
        static BODY_ARMOR_OFFSET: number;
        tickCount: number;
        static BREEDING_CROSS_FACTOR: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
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
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        targetSelector: $GoalSelector;
        static BABY_SCALE: number;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        dashAnimationState: $AnimationState;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        idleAnimationState: $AnimationState;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        sitUpAnimationState: $AnimationState;
        sprintCounter: number;
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
        static DASH_COOLDOWN_TICKS: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        static INVENTORY_SLOT_OFFSET: number;
        static INV_SLOT_SADDLE: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        constructor(entityType: $EntityType_<$Camel>, level: $Level_);
        get camelSitting(): boolean;
        get camelVisuallySitting(): boolean;
        get inPoseTransition(): boolean;
        get poseTime(): number;
    }
}
