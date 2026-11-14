import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $EntityType_, $PortalProcessor, $Pose_, $Entity, $AnimationState, $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $WalkAnimationState } from "@package/net/minecraft/world/entity";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID_, $List_, $Comparator, $OptionalInt } from "@package/java/util";
import { $ToDoubleFunction_, $Function_, $Predicate_, $ToLongFunction_, $ToIntFunction_ } from "@package/java/util/function";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $Holder_, $BlockPos_ } from "@package/net/minecraft/core";
import { $VibrationSystem$User, $VibrationSystem$Data, $VibrationSystem } from "@package/net/minecraft/world/level/gameevent/vibrations";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Monster } from "@package/net/minecraft/world/entity/monster";
import { $Enum, $Record, $Comparable } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";

declare module "@package/net/minecraft/world/entity/monster/warden" {
    export class $Warden$VibrationUser implements $VibrationSystem$User {
        requiresAdjacentChunksToBeTicking(): boolean;
        getListenableEvents(): $TagKey<$GameEvent>;
        canTriggerAvoidVibration(): boolean;
        onDataChanged(): void;
        calculateTravelTimeInTicks(arg0: number): number;
        isValidVibration(arg0: $Holder_<$GameEvent>, arg1: $GameEvent$Context_): boolean;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $WardenAi {
        static updateActivity(warden: $Warden): void;
        static setDigCooldown(entity: $LivingEntity): void;
        static setDisturbanceLocation(warden: $Warden, disturbanceLocation: $BlockPos_): void;
        static DIGGING_COOLDOWN: number;
        static ROAR_DURATION: number;
        static EMERGE_DURATION: number;
        constructor();
        static set digCooldown(value: $LivingEntity);
    }
    export class $WardenSpawnTracker {
        static tryWarn(level: $ServerLevel, pos: $BlockPos_, player: $ServerPlayer): $OptionalInt;
        setWarningLevel(warningLevel: number): void;
        getWarningLevel(): number;
        reset(): void;
        tick(): void;
        static CODEC: $Codec<$WardenSpawnTracker>;
        static MAX_WARNING_LEVEL: number;
        constructor(ticksSinceLastWarning: number, warningLevel: number, cooldownTicks: number);
    }
    export class $AngerLevel extends $Enum<$AngerLevel> {
        getAmbientSound(): $SoundEvent;
        isAngry(): boolean;
        getMinimumAnger(): number;
        getListeningSound(): $SoundEvent;
        static byAnger(anger: number): $AngerLevel;
        static values(): $AngerLevel[];
        static valueOf(arg0: string): $AngerLevel;
        static CALM: $AngerLevel;
        static AGITATED: $AngerLevel;
        static ANGRY: $AngerLevel;
        get ambientSound(): $SoundEvent;
        get angry(): boolean;
        get minimumAnger(): number;
        get listeningSound(): $SoundEvent;
    }
    /**
     * Values that may be interpreted as {@link $AngerLevel}.
     */
    export type $AngerLevel_ = "calm" | "agitated" | "angry";
    export class $Warden extends $Monster implements $VibrationSystem {
        static applyDarknessAround(level: $ServerLevel, pos: $Vec3_, source: $Entity | null, radius: number): void;
        getVibrationData(): $VibrationSystem$Data;
        getVibrationUser(): $VibrationSystem$User;
        setAttackTarget(attackTarget: $LivingEntity): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getClientAngerLevel(): number;
        getTendrilAnimation(partialTick: number): number;
        getHeartAnimation(partialTick: number): number;
        clearAnger(entity: $Entity): void;
        increaseAngerAt(entity: $Entity | null): void;
        increaseAngerAt(entity: $Entity | null, offset: number, playListeningSound: boolean): void;
        getEntityAngryAt(): ($LivingEntity) | undefined;
        getAngerManagement(): $AngerManagement;
        canTargetEntity(vehicle: $Entity | null): boolean;
        getAngerLevel(): $AngerLevel;
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        static createAttributes(): $AttributeSupplier$Builder;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        sonicBoomAnimationState: $AnimationState;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
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
        diggingAnimationState: $AnimationState;
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
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        sniffAnimationState: $AnimationState;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        emergeAnimationState: $AnimationState;
        zOld: number;
        timeOffs: number;
        rotA: number;
        horizontalCollision: boolean;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        tickCount: number;
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
        attackAnimationState: $AnimationState;
        targetSelector: $GoalSelector;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        roarAnimationState: $AnimationState;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        constructor(entityType: $EntityType_<$Monster>, level: $Level_);
        get vibrationData(): $VibrationSystem$Data;
        get vibrationUser(): $VibrationSystem$User;
        set attackTarget(value: $LivingEntity);
        get clientAngerLevel(): number;
        get entityAngryAt(): ($LivingEntity) | undefined;
        get angerManagement(): $AngerManagement;
        get angerLevel(): $AngerLevel;
    }
    export class $AngerManagement {
        getActiveAnger(entity: $Entity | null): number;
        clearAnger(entity: $Entity): void;
        increaseAnger(entity: $Entity, offset: number): number;
        getActiveEntity(): ($LivingEntity) | undefined;
        tick(level: $ServerLevel, predicate: $Predicate_<$Entity>): void;
        static codec(filter: $Predicate_<$Entity>): $Codec<$AngerManagement>;
        constructor(filter: $Predicate_<$Entity>, angerByUuid: $List_<$Pair<$UUID_, number>>);
        get activeEntity(): ($LivingEntity) | undefined;
    }
    export class $AngerManagement$Sorter extends $Record implements $Comparator<$Entity> {
        reversed(): $Comparator<$Entity>;
        thenComparing<U>(arg0: $Function_<$Entity, U>, arg1: $Comparator<U>): $Comparator<$Entity>;
        thenComparing(arg0: $Comparator<$Entity>): $Comparator<$Entity>;
        thenComparing<U extends $Comparable<U>>(arg0: $Function_<$Entity, U>): $Comparator<$Entity>;
        thenComparingInt(arg0: $ToIntFunction_<$Entity>): $Comparator<$Entity>;
        thenComparingLong(arg0: $ToLongFunction_<$Entity>): $Comparator<$Entity>;
        thenComparingDouble(arg0: $ToDoubleFunction_<$Entity>): $Comparator<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $AngerManagement$Sorter}.
     */
    export type $AngerManagement$Sorter_ = { angerManagement?: $AngerManagement,  } | [angerManagement?: $AngerManagement, ];
}
