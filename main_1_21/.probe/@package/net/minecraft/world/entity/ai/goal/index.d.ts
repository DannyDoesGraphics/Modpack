import { $LevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $PathfinderMob, $TamableAnimal, $LivingEntity, $Mob } from "@package/net/minecraft/world/entity";
import { $Raider } from "@package/net/minecraft/world/entity/raid";
import { $EnumSet, $Set } from "@package/java/util";
import { $AbstractVillager } from "@package/net/minecraft/world/entity/npc";
import { $AbstractHorse, $Llama } from "@package/net/minecraft/world/entity/animal/horse";
import { $AbstractSchoolingFish, $Dolphin, $Cat, $ShoulderRidingEntity, $Wolf, $IronGolem, $Animal } from "@package/net/minecraft/world/entity/animal";
import { $Difficulty } from "@package/net/minecraft/world";
import { $Supplier_, $Function_, $Predicate_, $BiPredicate_, $BooleanSupplier_ } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $UniformInt } from "@package/net/minecraft/util/valueproviders";
import { $LithiumMoveToBlockGoal } from "@package/net/caffeinemc/mods/lithium/common/ai/non_poi_block_search";
import { $Zombie, $RangedAttackMob_, $Monster, $Creeper } from "@package/net/minecraft/world/entity/monster";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Enum, $Class } from "@package/java/lang";
import { $DamageType } from "@package/net/minecraft/world/damagesource";
export * as target from "@package/net/minecraft/world/entity/ai/goal/target";

declare module "@package/net/minecraft/world/entity/ai/goal" {
    /**
     * This is an internal object used by the GoalSelector to choose between Goals.
     * In most cases, it should not be constructed directly.
     * 
     * For information on how individual methods work, see the javadocs for Goal:
     * `Goal`
     */
    export class $WrappedGoal extends $Goal {
        canBeReplacedBy(other: $WrappedGoal): boolean;
        /**
         * Gets the private goal enclosed by this WrappedGoal.
         */
        getGoal(): $Goal;
        getPriority(): number;
        /**
         * @return whether the goal should continue executing
         */
        isRunning(): boolean;
        constructor(priority: number, goal: $Goal);
        get goal(): $Goal;
        get priority(): number;
        get running(): boolean;
    }
    export class $MoveTowardsRestrictionGoal extends $Goal {
        constructor(mob: $PathfinderMob, speedModifier: number);
    }
    export class $BreakDoorGoal extends $DoorInteractGoal {
        constructor(mob: $Mob, validDifficulties: $Predicate_<$Difficulty>);
        constructor(mob: $Mob, doorBreakTime: number, validDifficulties: $Predicate_<$Difficulty>);
    }
    export class $MoveThroughVillageGoal extends $Goal {
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: boolean, onlyAtNight: number, distanceToPoi: $BooleanSupplier_);
    }
    export class $FollowParentGoal extends $Goal {
        static DONT_FOLLOW_IF_CLOSER_THAN: number;
        static HORIZONTAL_SCAN_RANGE: number;
        static VERTICAL_SCAN_RANGE: number;
        constructor(animal: $Animal, speedModifier: number);
    }
    export class $LookAtTradingPlayerGoal extends $LookAtPlayerGoal {
        static DEFAULT_PROBABILITY: number;
        constructor(villager: $AbstractVillager);
    }
    export class $WaterAvoidingRandomFlyingGoal extends $WaterAvoidingRandomStrollGoal {
        static PROBABILITY: number;
        static DEFAULT_INTERVAL: number;
        constructor(arg0: $PathfinderMob, arg1: number);
    }
    export class $DoorInteractGoal extends $Goal {
        constructor(mob: $Mob);
    }
    export class $GoalSelector {
        tickRunningGoals(tickAllRunning: boolean): void;
        /**
         * Remove the goal from the GoalSelector. This must be the same object as the goal you are trying to remove, which may not always be accessible.
         */
        removeGoal(goal: $Goal): void;
        /**
         * Add a goal to the GoalSelector with a certain priority. Lower numbers are higher priority.
         */
        addGoal(priority: number, goal: $Goal): void;
        getAvailableGoals(): $Set<$WrappedGoal>;
        disableControlFlag(flag: $Goal$Flag_): void;
        removeAllGoals(filter: $Predicate_<$Goal>): void;
        enableControlFlag(flag: $Goal$Flag_): void;
        /**
         * Ticks every goal in the selector.
         * Attempts to start each goal based on if it can be used, or stop it if it can't.
         */
        tick(): void;
        setControlFlag(flag: $Goal$Flag_, enabled: boolean): void;
        constructor(profiler: $Supplier_<$ProfilerFiller>);
        get availableGoals(): $Set<$WrappedGoal>;
    }
    export class $RunAroundLikeCrazyGoal extends $Goal {
        constructor(horse: $AbstractHorse, speedModifier: number);
    }
    export class $AvoidEntityGoal<T extends $LivingEntity> extends $Goal {
        constructor(mob: $PathfinderMob, entityClassToAvoid: $Class<T>, maxDistance: number, walkSpeedModifier: number, arg4: number);
        constructor(mob: $PathfinderMob, entityClassToAvoid: $Class<T>, maxDistance: number, walkSpeedModifier: number, arg4: number, sprintSpeedModifier: $Predicate_<$LivingEntity>);
        /**
         * Goal that helps mobs avoid mobs of a specific class
         */
        constructor(mob: $PathfinderMob, entityClassToAvoid: $Class<T>, avoidPredicate: $Predicate_<$LivingEntity>, maxDistance: number, walkSpeedModifier: number, arg5: number, sprintSpeedModifier: $Predicate_<$LivingEntity>);
    }
    export class $LeapAtTargetGoal extends $Goal {
        constructor(mob: $Mob, yd: number);
    }
    export class $SitWhenOrderedToGoal extends $Goal {
        constructor(mob: $TamableAnimal);
    }
    export class $RangedBowAttackGoal<T extends $Mob> extends $Goal {
        setMinAttackInterval(attackCooldown: number): void;
        constructor<M extends $Monster>(mob: M, speedModifier: number, arg2: number, attackIntervalMin: number);
        constructor(arg0: T, arg1: number, arg2: number, arg3: number);
        set minAttackInterval(value: number);
    }
    export class $MoveToBlockGoal extends $Goal implements $LithiumMoveToBlockGoal {
        acceptedDistance(): number;
        /**
         * Returns whether an in-progress EntityAIBase should continue executing
         */
        shouldRecalculatePath(): boolean;
        lithium$findNearestBlock(arg0: $Predicate_<any>, arg1: $BiPredicate_<any, any>, arg2: boolean): boolean;
        speedModifier: number;
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: number, searchRange: number);
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: number);
    }
    export class $FloatGoal extends $Goal {
        constructor(mob: $Mob);
    }
    export class $CatSitOnBlockGoal extends $MoveToBlockGoal {
        speedModifier: number;
        constructor(cat: $Cat, speedModifier: number);
    }
    export class $SwellGoal extends $Goal {
        constructor(creeper: $Creeper);
    }
    export class $RangedCrossbowAttackGoal<T extends $Mob> extends $Goal {
        static PATHFINDING_DELAY_RANGE: $UniformInt;
        constructor<M extends $Monster>(mob: M, speedModifier: number, arg2: number);
        constructor(arg0: T, arg1: number, arg2: number);
    }
    export class $TradeWithPlayerGoal extends $Goal {
        constructor(mob: $AbstractVillager);
    }
    export class $LandOnOwnersShoulderGoal extends $Goal {
        constructor(entity: $ShoulderRidingEntity);
    }
    export class $RangedCrossbowAttackGoal$CrossbowState extends $Enum<$RangedCrossbowAttackGoal$CrossbowState> {
    }
    /**
     * Values that may be interpreted as {@link $RangedCrossbowAttackGoal$CrossbowState}.
     */
    export type $RangedCrossbowAttackGoal$CrossbowState_ = "uncharged" | "charging" | "charged" | "ready_to_attack";
    export class $LlamaFollowCaravanGoal extends $Goal {
        llama: $Llama;
        constructor(llama: $Llama, speedModifier: number);
    }
    export class $GolemRandomStrollInVillageGoal extends $RandomStrollGoal {
        static DEFAULT_INTERVAL: number;
        constructor(mob: $PathfinderMob, speedModifier: number);
    }
    export class $ClimbOnTopOfPowderSnowGoal extends $Goal {
        constructor(mob: $Mob, level: $Level_);
    }
    export class $LookAtPlayerGoal extends $Goal {
        static DEFAULT_PROBABILITY: number;
        constructor(mob: $Mob, lookAtType: $Class<$LivingEntity>, lookDistance: number);
        constructor(mob: $Mob, lookAtType: $Class<$LivingEntity>, lookDistance: number, probability: number, onlyHorizontal: boolean);
        constructor(mob: $Mob, lookAtType: $Class<$LivingEntity>, lookDistance: number, probability: number);
    }
    export class $BoatGoals extends $Enum<$BoatGoals> {
    }
    /**
     * Values that may be interpreted as {@link $BoatGoals}.
     */
    export type $BoatGoals_ = "go_to_boat" | "go_in_boat_direction";
    /**
     * A goal allowing a mob to follow others. The mob must have Ground or Flying navigation.
     */
    export class $FollowMobGoal extends $Goal {
        /**
         * Constructs a goal allowing a mob to follow others. The mob must have Ground or Flying navigation.
         */
        constructor(mob: $Mob, speedModifier: number, arg2: number, stopDistance: number);
    }
    export class $RangedAttackGoal extends $Goal {
        constructor(rangedAttackMob: $RangedAttackMob_, speedModifier: number, arg2: number, attackInterval: number);
        constructor(rangedAttackMob: $RangedAttackMob_, speedModifier: number, arg2: number, attackIntervalMin: number, attackIntervalMax: number);
    }
    export class $Goal$Flag extends $Enum<$Goal$Flag> {
        static values(): $Goal$Flag[];
        static valueOf(arg0: string): $Goal$Flag;
        static TARGET: $Goal$Flag;
        static MOVE: $Goal$Flag;
        static LOOK: $Goal$Flag;
        static JUMP: $Goal$Flag;
    }
    /**
     * Values that may be interpreted as {@link $Goal$Flag}.
     */
    export type $Goal$Flag_ = "move" | "look" | "jump" | "target";
    export class $DolphinJumpGoal extends $JumpGoal {
        constructor(dolphin: $Dolphin, interval: number);
    }
    export class $RandomLookAroundGoal extends $Goal {
        constructor(mob: $Mob);
    }
    export class $PathfindToRaidGoal<T extends $Raider> extends $Goal {
        constructor(mob: T);
    }
    export class $OfferFlowerGoal extends $Goal {
        static OFFER_TICKS: number;
        constructor(golem: $IronGolem);
    }
    export class $RandomSwimmingGoal extends $RandomStrollGoal {
        static DEFAULT_INTERVAL: number;
        constructor(arg0: $PathfinderMob, arg1: number, arg2: number);
    }
    export class $OcelotAttackGoal extends $Goal {
        constructor(mob: $Mob);
    }
    export class $TryFindWaterGoal extends $Goal {
        constructor(mob: $PathfinderMob);
    }
    export class $RemoveBlockGoal extends $MoveToBlockGoal implements $LithiumMoveToBlockGoal {
        playDestroyProgressSound(level: $LevelAccessor, pos: $BlockPos_): void;
        playBreakSound(level: $Level_, pos: $BlockPos_): void;
        speedModifier: number;
        constructor(blockToRemove: $Block_, removerMob: $PathfinderMob, speedModifier: number, arg3: number);
    }
    export class $StrollThroughVillageGoal extends $Goal {
        constructor(mob: $PathfinderMob, interval: number);
    }
    export class $InteractGoal extends $LookAtPlayerGoal {
        static DEFAULT_PROBABILITY: number;
        constructor(arg0: $Mob, arg1: $Class<$LivingEntity>, arg2: number);
        constructor(arg0: $Mob, arg1: $Class<$LivingEntity>, arg2: number, arg3: number);
    }
    export class $TemptGoal extends $Goal {
        /**
         * Returns whether an in-progress EntityAIBase should continue executing
         */
        isRunning(): boolean;
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: $Predicate_<$ItemStack>, items: boolean);
        get running(): boolean;
    }
    export class $FleeSunGoal extends $Goal {
        constructor(mob: $PathfinderMob, speedModifier: number);
    }
    export class $EatBlockGoal extends $Goal {
        /**
         * Number of ticks since the entity started to eat grass
         */
        getEatAnimationTick(): number;
        constructor(mob: $Mob);
        get eatAnimationTick(): number;
    }
    export class $CatLieOnBedGoal extends $MoveToBlockGoal {
        speedModifier: number;
        constructor(cat: $Cat, speedModifier: number, arg2: number);
    }
    export class $FollowFlockLeaderGoal extends $Goal {
        constructor(fish: $AbstractSchoolingFish);
    }
    export class $MoveBackToVillageGoal extends $RandomStrollGoal {
        static DEFAULT_INTERVAL: number;
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: boolean);
    }
    export class $BreathAirGoal extends $Goal {
        constructor(mob: $PathfinderMob);
    }
    export class $PanicGoal extends $Goal {
        /**
         * Returns whether an in-progress EntityAIBase should continue executing
         */
        isRunning(): boolean;
        static WATER_CHECK_DISTANCE_VERTICAL: number;
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: $TagKey_<$DamageType>);
        constructor(mob: $PathfinderMob, speedModifier: number);
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: $Function_<$PathfinderMob, $TagKey<$DamageType>>);
        get running(): boolean;
    }
    export class $JumpGoal extends $Goal {
        constructor();
    }
    export class $BegGoal extends $Goal {
        constructor(wolf: $Wolf, lookDistance: number);
    }
    export class $RestrictSunGoal extends $Goal {
        constructor(mob: $PathfinderMob);
    }
    export class $FollowOwnerGoal extends $Goal {
        constructor(tamable: $TamableAnimal, speedModifier: number, arg2: number, startDistance: number);
    }
    export class $MeleeAttackGoal extends $Goal {
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: boolean);
    }
    export class $Goal {
        /**
         * @return whether the goal should continue executing
         */
        canContinueToUse(): boolean;
        /**
         * @return whether the goal should continue executing
         */
        isInterruptable(): boolean;
        /**
         * @return whether the goal should continue executing
         */
        requiresUpdateEveryTick(): boolean;
        /**
         * Called when the goal is about to start executing
         */
        start(): void;
        /**
         * Called when the goal is about to start executing
         */
        stop(): void;
        /**
         * @return whether the goal should continue executing
         */
        canUse(): boolean;
        /**
         * Called when the goal is about to start executing
         */
        tick(): void;
        getFlags(): $EnumSet<$Goal$Flag>;
        setFlags(flagSet: $EnumSet<$Goal$Flag_>): void;
        constructor();
        get interruptable(): boolean;
    }
    export class $FollowBoatGoal extends $Goal {
        constructor(mob: $PathfinderMob);
    }
    export class $RandomStrollGoal extends $Goal {
        /**
         * Changes task random possibility for execution
         */
        setInterval(newchance: number): void;
        /**
         * Execute a one shot task or start executing a continuous task
         */
        trigger(): void;
        static DEFAULT_INTERVAL: number;
        constructor(mob: $PathfinderMob, speedModifier: number);
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: number);
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: number, interval: boolean);
        set interval(value: number);
    }
    export class $BreedGoal extends $Goal {
        constructor(animal: $Animal, speedModifier: number, arg2: $Class<$Animal>);
        constructor(animal: $Animal, speedModifier: number);
    }
    export class $OpenDoorGoal extends $DoorInteractGoal {
        constructor(mob: $Mob, closeDoor: boolean);
    }
    export class $ZombieAttackGoal extends $MeleeAttackGoal {
        constructor(zombie: $Zombie, speedModifier: number, arg2: boolean);
    }
    export class $RandomStandGoal extends $Goal {
        constructor(horse: $AbstractHorse);
    }
    export class $WaterAvoidingRandomStrollGoal extends $RandomStrollGoal {
        static PROBABILITY: number;
        static DEFAULT_INTERVAL: number;
        constructor(mob: $PathfinderMob, speedModifier: number);
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: number);
    }
    export class $UseItemGoal<T extends $Mob> extends $Goal {
        constructor(mob: T, item: $ItemStack_, finishUsingSound: $SoundEvent_ | null, canUseSelector: $Predicate_<T>);
    }
    export class $MoveTowardsTargetGoal extends $Goal {
        constructor(mob: $PathfinderMob, speedModifier: number, arg2: number);
    }
}
