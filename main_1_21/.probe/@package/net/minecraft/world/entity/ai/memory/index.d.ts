import { $PositionTracker } from "@package/net/minecraft/world/entity/ai/behavior";
import { $Codec_, $Codec } from "@package/com/mojang/serialization";
import { $AbstractPiglin } from "@package/net/minecraft/world/entity/monster/piglin";
import { $LivingEntity, $AgeableMob, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $UUID, $List, $Set, $List_ } from "@package/java/util";
import { $Unit } from "@package/net/minecraft/util";
import { $Predicate_ } from "@package/java/util/function";
import { $Path } from "@package/net/minecraft/world/level/pathfinder";
import { $BlockPos, $BlockPos_, $GlobalPos } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Enum, $Iterable } from "@package/java/lang";
import { $Hoglin } from "@package/net/minecraft/world/entity/monster/hoglin";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/entity/ai/memory" {
    export class $MemoryModuleType<U> {
        getCodec(): ($Codec<$ExpirableValue<U>>) | undefined;
        static PATH: $MemoryModuleType<$Path>;
        static LIKED_NOTEBLOCK_COOLDOWN_TICKS: $MemoryModuleType<number>;
        static NEAREST_VISIBLE_ADULT_PIGLIN: $MemoryModuleType<$AbstractPiglin>;
        static SNIFFER_HAPPY: $MemoryModuleType<boolean>;
        static IS_PREGNANT: $MemoryModuleType<$Unit>;
        static ATTACK_COOLING_DOWN: $MemoryModuleType<boolean>;
        static NEAREST_VISIBLE_ADULT_HOGLINS: $MemoryModuleType<$List<$Hoglin>>;
        static DISABLE_WALK_TO_ADMIRE_ITEM: $MemoryModuleType<boolean>;
        static ROAR_SOUND_COOLDOWN: $MemoryModuleType<$Unit>;
        static NEAREST_VISIBLE_HUNTABLE_HOGLIN: $MemoryModuleType<$Hoglin>;
        static NEAREST_VISIBLE_WANTED_ITEM: $MemoryModuleType<$ItemEntity>;
        static BREEZE_JUMP_COOLDOWN: $MemoryModuleType<$Unit>;
        static LOOK_TARGET: $MemoryModuleType<$PositionTracker>;
        static UNREACHABLE_TONGUE_TARGETS: $MemoryModuleType<$List<$UUID>>;
        static INTERACTION_TARGET: $MemoryModuleType<$LivingEntity>;
        static IS_IN_WATER: $MemoryModuleType<$Unit>;
        static VIBRATION_COOLDOWN: $MemoryModuleType<$Unit>;
        static LIKED_PLAYER: $MemoryModuleType<$UUID>;
        static RIDE_TARGET: $MemoryModuleType<$Entity>;
        static VISIBLE_VILLAGER_BABIES: $MemoryModuleType<$List<$LivingEntity>>;
        static SNIFFER_SNIFFING_TARGET: $MemoryModuleType<$BlockPos>;
        static DOORS_TO_CLOSE: $MemoryModuleType<$Set<$GlobalPos>>;
        static ROAR_TARGET: $MemoryModuleType<$LivingEntity>;
        static NEAREST_PLAYERS: $MemoryModuleType<$List<$Player>>;
        static HURT_BY_ENTITY: $MemoryModuleType<$LivingEntity>;
        static BREEZE_JUMP_TARGET: $MemoryModuleType<$BlockPos>;
        static BREED_TARGET: $MemoryModuleType<$AgeableMob>;
        static HAS_HUNTING_COOLDOWN: $MemoryModuleType<boolean>;
        static TEMPTATION_COOLDOWN_TICKS: $MemoryModuleType<number>;
        static LONG_JUMP_MID_JUMP: $MemoryModuleType<boolean>;
        static NEAREST_LIVING_ENTITIES: $MemoryModuleType<$List<$LivingEntity>>;
        static NEAREST_VISIBLE_LIVING_ENTITIES: $MemoryModuleType<$NearestVisibleLivingEntities>;
        static NEAREST_HOSTILE: $MemoryModuleType<$LivingEntity>;
        static LONG_JUMP_COOLDOWN_TICKS: $MemoryModuleType<number>;
        static SONIC_BOOM_COOLDOWN: $MemoryModuleType<$Unit>;
        static SNIFFER_EXPLORED_POSITIONS: $MemoryModuleType<$List<$GlobalPos>>;
        static ADMIRING_ITEM: $MemoryModuleType<boolean>;
        static GAZE_COOLDOWN_TICKS: $MemoryModuleType<number>;
        static TIME_TRYING_TO_REACH_ADMIRE_ITEM: $MemoryModuleType<number>;
        static SNIFF_COOLDOWN: $MemoryModuleType<$Unit>;
        static DANGER_DETECTED_RECENTLY: $MemoryModuleType<boolean>;
        static RAM_COOLDOWN_TICKS: $MemoryModuleType<number>;
        static NEAREST_TARGETABLE_PLAYER_NOT_WEARING_GOLD: $MemoryModuleType<$Player>;
        static ROAR_SOUND_DELAY: $MemoryModuleType<$Unit>;
        static LAST_WORKED_AT_POI: $MemoryModuleType<number>;
        static DUMMY: $MemoryModuleType<void>;
        static POTENTIAL_JOB_SITE: $MemoryModuleType<$GlobalPos>;
        static PACIFIED: $MemoryModuleType<boolean>;
        static HIDING_PLACE: $MemoryModuleType<$GlobalPos>;
        static VISIBLE_ADULT_PIGLIN_COUNT: $MemoryModuleType<number>;
        static BREEZE_SHOOT_RECOVERING: $MemoryModuleType<$Unit>;
        static BREEZE_SHOOT: $MemoryModuleType<$Unit>;
        static NEAREST_REPELLENT: $MemoryModuleType<$BlockPos>;
        static BREEZE_SHOOT_CHARGING: $MemoryModuleType<$Unit>;
        static JOB_SITE: $MemoryModuleType<$GlobalPos>;
        static INTERACTABLE_DOORS: $MemoryModuleType<$List<$GlobalPos>>;
        static NEAREST_BED: $MemoryModuleType<$BlockPos>;
        static ANGRY_AT: $MemoryModuleType<$UUID>;
        static CELEBRATE_LOCATION: $MemoryModuleType<$BlockPos>;
        static NEAREST_VISIBLE_BABY_HOGLIN: $MemoryModuleType<$Hoglin>;
        static NEAREST_PLAYER_HOLDING_WANTED_ITEM: $MemoryModuleType<$Player>;
        static SONIC_BOOM_SOUND_DELAY: $MemoryModuleType<$Unit>;
        static NEAREST_VISIBLE_ADULT: $MemoryModuleType<$AgeableMob>;
        static CANT_REACH_WALK_TARGET_SINCE: $MemoryModuleType<number>;
        static ATE_RECENTLY: $MemoryModuleType<boolean>;
        static NEAREST_VISIBLE_ADULT_PIGLINS: $MemoryModuleType<$List<$AbstractPiglin>>;
        static IS_EMERGING: $MemoryModuleType<$Unit>;
        static LAST_SLEPT: $MemoryModuleType<number>;
        static ITEM_PICKUP_COOLDOWN_TICKS: $MemoryModuleType<number>;
        static NEARBY_ADULT_PIGLINS: $MemoryModuleType<$List<$AbstractPiglin>>;
        static BREEZE_JUMP_INHALING: $MemoryModuleType<$Unit>;
        static IS_PANICKING: $MemoryModuleType<boolean>;
        static LAST_WOKEN: $MemoryModuleType<number>;
        static NEAREST_VISIBLE_ATTACKABLE_PLAYER: $MemoryModuleType<$Player>;
        static TOUCH_COOLDOWN: $MemoryModuleType<$Unit>;
        static NEAREST_VISIBLE_PLAYER: $MemoryModuleType<$Player>;
        static NEAREST_ATTACKABLE: $MemoryModuleType<$LivingEntity>;
        static DISTURBANCE_LOCATION: $MemoryModuleType<$BlockPos>;
        static SNIFFER_DIGGING: $MemoryModuleType<boolean>;
        static VISIBLE_ADULT_HOGLIN_COUNT: $MemoryModuleType<number>;
        static TEMPTING_PLAYER: $MemoryModuleType<$Player>;
        static ATTACK_TARGET: $MemoryModuleType<$LivingEntity>;
        static IS_SNIFFING: $MemoryModuleType<$Unit>;
        static HEARD_BELL_TIME: $MemoryModuleType<number>;
        static RECENT_PROJECTILE: $MemoryModuleType<$Unit>;
        static BREEZE_LEAVING_WATER: $MemoryModuleType<$Unit>;
        static RAM_TARGET: $MemoryModuleType<$Vec3>;
        static PLAY_DEAD_TICKS: $MemoryModuleType<number>;
        static AVOID_TARGET: $MemoryModuleType<$LivingEntity>;
        static IS_TEMPTED: $MemoryModuleType<boolean>;
        static HUNTED_RECENTLY: $MemoryModuleType<boolean>;
        static LIKED_NOTEBLOCK_POSITION: $MemoryModuleType<$GlobalPos>;
        static MEETING_POINT: $MemoryModuleType<$GlobalPos>;
        static NEAREST_VISIBLE_ZOMBIFIED: $MemoryModuleType<$LivingEntity>;
        static GOLEM_DETECTED_RECENTLY: $MemoryModuleType<boolean>;
        static NEAREST_VISIBLE_NEMESIS: $MemoryModuleType<$Mob>;
        static DIG_COOLDOWN: $MemoryModuleType<$Unit>;
        static DANCING: $MemoryModuleType<boolean>;
        static WALK_TARGET: $MemoryModuleType<$WalkTarget>;
        static HURT_BY: $MemoryModuleType<$DamageSource>;
        static ADMIRING_DISABLED: $MemoryModuleType<boolean>;
        static SECONDARY_JOB_SITE: $MemoryModuleType<$List<$GlobalPos>>;
        static BREEZE_SHOOT_COOLDOWN: $MemoryModuleType<$Unit>;
        static SONIC_BOOM_SOUND_COOLDOWN: $MemoryModuleType<$Unit>;
        static HOME: $MemoryModuleType<$GlobalPos>;
        static UNIVERSAL_ANGER: $MemoryModuleType<boolean>;
        constructor(optionalCodec: ($Codec_<U>) | undefined);
        get codec(): ($Codec<$ExpirableValue<U>>) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $MemoryModuleType}.
     */
    export type $MemoryModuleType_<U> = RegistryTypes.MemoryModuleType;
    export class $MemoryStatus extends $Enum<$MemoryStatus> {
        static values(): $MemoryStatus[];
        static valueOf(arg0: string): $MemoryStatus;
        static VALUE_PRESENT: $MemoryStatus;
        static REGISTERED: $MemoryStatus;
        static VALUE_ABSENT: $MemoryStatus;
    }
    /**
     * Values that may be interpreted as {@link $MemoryStatus}.
     */
    export type $MemoryStatus_ = "value_present" | "value_absent" | "registered";
    export class $WalkTarget {
        getCloseEnoughDist(): number;
        getSpeedModifier(): number;
        getTarget(): $PositionTracker;
        /**
         * Constructs a walk target that tracks a position
         */
        constructor(pos: $BlockPos_, speedModifier: number, closeEnoughDist: number);
        constructor(target: $PositionTracker, speedModifier: number, closeEnoughDist: number);
        /**
         * Constructs a walk target that tracks an entity's position
         */
        constructor(targetEntity: $Entity, speedModifier: number, closeEnoughDist: number);
        /**
         * Constructs a walk target using a vector that's directly converted to a BlockPos.
         */
        constructor(vectorPos: $Vec3_, speedModifier: number, closeEnoughDist: number);
        get closeEnoughDist(): number;
        get speedModifier(): number;
        get target(): $PositionTracker;
    }
    export interface $MemoryModuleType<U> extends RegistryMarked<RegistryTypes.MemoryModuleTypeTag, RegistryTypes.MemoryModuleType> {}
    export class $ExpirableValue<T> {
        canExpire(): boolean;
        getValue(): T;
        static of<T>(value: T, timeToLive: number): $ExpirableValue<T>;
        static of<T>(value: T): $ExpirableValue<T>;
        tick(): void;
        getTimeToLive(): number;
        static codec<T>(valueCodec: $Codec_<T>): $Codec<$ExpirableValue<T>>;
        hasExpired(): boolean;
        constructor(value: T, timeToLive: number);
        get value(): T;
        get timeToLive(): number;
    }
    export class $NearestVisibleLivingEntities {
        findClosest(predicate: $Predicate_<$LivingEntity>): ($LivingEntity) | undefined;
        contains(predicate: $Predicate_<$LivingEntity>): boolean;
        contains(entity: $LivingEntity): boolean;
        static empty(): $NearestVisibleLivingEntities;
        find(predicate: $Predicate_<$LivingEntity>): $Stream<$LivingEntity>;
        findAll(predicate: $Predicate_<$LivingEntity>): $Iterable<$LivingEntity>;
        constructor(livingEntity: $LivingEntity, nearbyLivingEntities: $List_<$LivingEntity>);
    }
}
