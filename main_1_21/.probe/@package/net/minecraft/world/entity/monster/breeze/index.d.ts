import { $Behavior, $MoveToTargetSink } from "@package/net/minecraft/world/entity/ai/behavior";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $AnimationState, $EntityType_, $Entity$RemovalReason, $LivingEntity, $PortalProcessor, $WalkAnimationState } from "@package/net/minecraft/world/entity";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos } from "@package/net/minecraft/core";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Monster } from "@package/net/minecraft/world/entity/monster";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";

declare module "@package/net/minecraft/world/entity/monster/breeze" {
    export class $Slide extends $Behavior<$Breeze> {
        static DEFAULT_DURATION: number;
        constructor();
    }
    export class $BreezeUtil {
        static randomPointBehindTarget(target: $LivingEntity, random: $RandomSource): $Vec3;
        static hasLineOfSight(breeze: $Breeze, pos: $Vec3_): boolean;
        constructor();
    }
    export class $BreezeAi$SlideToTargetSink extends $MoveToTargetSink {
        static DEFAULT_DURATION: number;
        constructor(arg0: number, arg1: number);
    }
    export class $LongJump extends $Behavior<$Breeze> {
        static canRun(level: $ServerLevel, breeze: $Breeze): boolean;
        static DEFAULT_DURATION: number;
        constructor();
    }
    export class $ShootWhenStuck extends $Behavior<$Breeze> {
        static DEFAULT_DURATION: number;
        constructor();
    }
    export class $Breeze extends $Monster {
        emitGroundParticles(count: number): void;
        /**
         * Plays living's sound at its position
         */
        emitJumpTrailParticles(): void;
        /**
         * Plays living's sound at its position
         */
        playWhirlSound(): void;
        getHurtBy(): ($LivingEntity) | undefined;
        withinInnerCircleRange(pos: $Vec3_): boolean;
        getSnoutYPosition(): number;
        resetJumpTrail(): $Breeze;
        static createAttributes(): $AttributeSupplier$Builder;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
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
        slide: $AnimationState;
        walkDist: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        slideBack: $AnimationState;
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
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
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
        shoot: $AnimationState;
        longJump: $AnimationState;
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
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        inhale: $AnimationState;
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
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        idle: $AnimationState;
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
        get hurtBy(): ($LivingEntity) | undefined;
        get snoutYPosition(): number;
    }
    export class $Shoot extends $Behavior<$Breeze> {
        static isFacingTarget(breeze: $Breeze, target: $LivingEntity): boolean;
        static DEFAULT_DURATION: number;
        constructor();
    }
    export class $BreezeAi {
        static JUMP_CIRCLE_INNER_RADIUS: number;
        static JUMP_CIRCLE_MIDDLE_RADIUS: number;
        static SPEED_MULTIPLIER_WHEN_SLIDING: number;
        static JUMP_CIRCLE_OUTER_RADIUS: number;
        constructor();
    }
}
