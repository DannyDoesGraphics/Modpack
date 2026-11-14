import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $EntityDimensions, $LightningBolt, $EntityType_, $LivingEntity, $Pose, $Pose_, $EntityDimensions_, $SpawnPlacementType_, $EntityType, $Entity, $SpawnPlacements$SpawnPredicate_, $SpawnPlacementType, $SpawnPlacements$SpawnPredicate } from "@package/net/minecraft/world/entity";
import { $AttributeSupplier, $AttributeSupplier$Builder, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Projectile, $ThrownEnderpearl } from "@package/net/minecraft/world/entity/projectile";
import { $List, $Map_ } from "@package/java/util";
import { $Holder_, $SectionPos } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $HitResult, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Heightmap$Types, $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as player from "@package/net/neoforged/neoforge/event/entity/player";
export * as living from "@package/net/neoforged/neoforge/event/entity/living";
export * as item from "@package/net/neoforged/neoforge/event/entity/item";

declare module "@package/net/neoforged/neoforge/event/entity" {
    /**
     * EntityTeleportEvent.TeleportCommand is fired before a living entity is teleported
     * from use of `TeleportCommand`.
     * 
     * This event is `ICancellableEvent`.
     * 
     * If the event is not canceled, the entity will be teleported.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     * 
     * This event is only fired on the `LogicalSide#SERVER` side.
     * 
     * If this event is canceled, the entity will not be teleported.
     */
    export class $EntityTeleportEvent$TeleportCommand extends $EntityTeleportEvent implements $ICancellableEvent {
        constructor(entity: $Entity, targetX: number, targetY: number, targetZ: number);
    }
    /**
     * EntityConstructing is fired when an Entity is being created.
     * 
     * This event is fired within the constructor of the Entity.
     * 
     * This event is not `ICancellableEvent`.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $EntityEvent$EntityConstructing extends $EntityEvent {
        constructor(entity: $Entity);
    }
    /**
     * EntityStruckByLightningEvent is fired when an Entity is about to be struck by lightening.
     * 
     * This event is fired whenever an EntityLightningBolt is updated to strike an Entity in
     * `LightningBolt#tick()` via `EventHooks#onEntityStruckByLightning(Entity, LightningBolt)`.
     * 
     * `#lightning` contains the instance of EntityLightningBolt attempting to strike an entity.
     * 
     * This event is `ICancellableEvent`.
     * 
     * If this event is canceled, the Entity is not struck by the lightening.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $EntityStruckByLightningEvent extends $EntityEvent implements $ICancellableEvent {
        getLightning(): $LightningBolt;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(entity: $Entity, lightning: $LightningBolt);
        get lightning(): $LightningBolt;
    }
    export class $RegisterSpawnPlacementsEvent$Operation extends $Enum<$RegisterSpawnPlacementsEvent$Operation> {
        static values(): $RegisterSpawnPlacementsEvent$Operation[];
        static valueOf(arg0: string): $RegisterSpawnPlacementsEvent$Operation;
        static OR: $RegisterSpawnPlacementsEvent$Operation;
        static AND: $RegisterSpawnPlacementsEvent$Operation;
        static REPLACE: $RegisterSpawnPlacementsEvent$Operation;
    }
    /**
     * Values that may be interpreted as {@link $RegisterSpawnPlacementsEvent$Operation}.
     */
    export type $RegisterSpawnPlacementsEvent$Operation_ = "and" | "or" | "replace";
    /**
     * EntityTeleportEvent.EnderEntity is fired before an Enderman or Shulker randomly teleports.
     * 
     * This event is `ICancellableEvent`.
     * 
     * If the event is not canceled, the entity will be teleported.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     * 
     * This event is only fired on the `LogicalSide#SERVER` side.
     * 
     * If this event is canceled, the entity will not be teleported.
     */
    export class $EntityTeleportEvent$EnderEntity extends $EntityTeleportEvent implements $ICancellableEvent {
        getEntityLiving(): $LivingEntity;
        constructor(entity: $LivingEntity, targetX: number, targetY: number, targetZ: number);
        get entityLiving(): $LivingEntity;
    }
    /**
     * EntityTeleportEvent.ChorusFruit is fired before a LivingEntity is teleported due to consuming Chorus Fruit.
     * 
     * This event is `ICancellableEvent`.
     * 
     * If the event is not canceled, the entity will be teleported.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     * 
     * This event is only fired on the `LogicalSide#SERVER` side.
     * 
     * If this event is canceled, the entity will not be teleported.
     */
    export class $EntityTeleportEvent$ChorusFruit extends $EntityTeleportEvent implements $ICancellableEvent {
        getEntityLiving(): $LivingEntity;
        constructor(entity: $LivingEntity, targetX: number, targetY: number, targetZ: number);
        get entityLiving(): $LivingEntity;
    }
    /**
     * EntityTeleportEvent is fired when an event involving any teleportation of an Entity occurs.
     * 
     * If a method utilizes this `Event` as its parameter, the method will
     * receive every child event of this class.
     * 
     * `#getTarget()` contains the target destination.
     * 
     * `#getPrev()` contains the entity's current position.
     * 
     * All children of this event are fired on the `NeoForge#EVENT_BUS`.
     */
    export class $EntityTeleportEvent extends $EntityEvent implements $ICancellableEvent {
        setTargetX(targetX: number): void;
        setTargetY(targetX: number): void;
        setTargetZ(targetX: number): void;
        getPrevX(): number;
        getPrevY(): number;
        getPrevZ(): number;
        getPrev(): $Vec3;
        getTargetX(): number;
        getTargetY(): number;
        getTargetZ(): number;
        getTarget(): $Vec3;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(entity: $Entity, targetX: number, targetY: number, targetZ: number);
        get prevX(): number;
        get prevY(): number;
        get prevZ(): number;
        get prev(): $Vec3;
        get target(): $Vec3;
    }
    /**
     * EntityTeleportEvent.EnderPearl is fired before an Entity is teleported from an EnderPearlEntity.
     * 
     * This event is `ICancellableEvent`.
     * 
     * If the event is not canceled, the entity will be teleported.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     * 
     * This event is only fired on the `LogicalSide#SERVER` side.
     * 
     * If this event is canceled, the entity will not be teleported.
     */
    export class $EntityTeleportEvent$EnderPearl extends $EntityTeleportEvent implements $ICancellableEvent {
        getHitResult(): $HitResult;
        getPlayer(): $ServerPlayer;
        getAttackDamage(): number;
        getPearlEntity(): $ThrownEnderpearl;
        setAttackDamage(attackDamage: number): void;
        constructor(entity: $ServerPlayer, targetX: number, targetY: number, targetZ: number, pearlEntity: $ThrownEnderpearl, attackDamage: number, hitResult: $HitResult);
        get hitResult(): $HitResult;
        get player(): $ServerPlayer;
        get pearlEntity(): $ThrownEnderpearl;
    }
    export class $RegisterSpawnPlacementsEvent$MergedSpawnPredicate<T extends $Entity> {
        getHeightmapType(): $Heightmap$Types;
        getSpawnType(): $SpawnPlacementType;
        build(): $SpawnPlacements$SpawnPredicate<T>;
        constructor(originalPredicate: $SpawnPlacements$SpawnPredicate_<T>, spawnType: $SpawnPlacementType_, heightmapType: $Heightmap$Types_);
        get heightmapType(): $Heightmap$Types;
        get spawnType(): $SpawnPlacementType;
    }
    /**
     * This event is fired whenever an `Entity` joins a `Level`.
     * This event is fired whenever an entity is added to a level in `Level#addFreshEntity(Entity)`
     * and `PersistentEntitySectionManager#addNewEntity(Entity, boolean)`.
     * 
     * **Note:** This event may be called before the underlying `LevelChunk` is promoted to `ChunkStatus#FULL`.
     * You will cause chunk loading deadlocks if you do not delay your world interactions.
     * 
     * This event is cancellable and does not have a result.
     * If the event is canceled, the entity will not be added to the level.
     * 
     * This event is fired on the main Forge event bus
     * on both logical sides.
     */
    export class $EntityJoinLevelEvent extends $EntityEvent implements $ICancellableEvent {
        loadedFromDisk(): boolean;
        /**
         * @return the level that the entity is set to join
         */
        getLevel(): $Level;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(entity: $Entity, level: $Level_);
        constructor(entity: $Entity, level: $Level_, loadedFromDisk: boolean);
        get level(): $Level;
    }
    /**
     * EntityTravelToDimensionEvent is fired before an Entity travels to a dimension.
     * 
     * `#dimension` contains the id of the dimension the entity is traveling to.
     * 
     * This event is `ICancellableEvent`.
     * 
     * If this event is canceled, the Entity does not travel to the dimension.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $EntityTravelToDimensionEvent extends $EntityEvent implements $ICancellableEvent {
        getDimension(): $ResourceKey<$Level>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(entity: $Entity, dimension: $ResourceKey_<$Level>);
        get dimension(): $ResourceKey<$Level>;
    }
    /**
     * Fired when `Entity#isInvulnerableTo(DamageSource)` is invoked and determines if
     * downstream hurt logic should apply. This event is fired on both sides in
     * `Entity#isInvulnerableTo(DamageSource)`
     * 
     * **Note: This event may be unable to change the invulnerable status of some entities
     * that override isInvulnerableTo against certain damage sources**
     */
    export class $EntityInvulnerabilityCheckEvent extends $EntityEvent {
        getOriginalInvulnerability(): boolean;
        getSource(): $DamageSource;
        isInvulnerable(): boolean;
        /**
         * Sets the invulnerable status of the entity. By default, the invulnerability will be
         * set by value passed into the event invocation.
         */
        setInvulnerable(isInvulnerable: boolean): void;
        constructor(entity: $Entity, source: $DamageSource_, isVanillaInvulnerable: boolean);
        get originalInvulnerability(): boolean;
        get source(): $DamageSource;
    }
    /**
     * This event is fired on the `NeoForge#EVENT_BUS`.
     * 
     * This event is fired when a projectile entity impacts something.
     * 
     * This event is fired via `EventHooks#onProjectileImpact(Projectile, HitResult)`
     * This event is fired for all vanilla projectiles by Forge,
     * custom projectiles should fire this event and check the result in a similar fashion.
     * This event is cancelable. When canceled, the impact will not be processed and the projectile will continue flying.
     * Killing or other handling of the entity after event cancellation is up to the modder.
     */
    export class $ProjectileImpactEvent extends $EntityEvent implements $ICancellableEvent {
        getRayTraceResult(): $HitResult;
        getProjectile(): $Projectile;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(projectile: $Projectile, ray: $HitResult);
        get rayTraceResult(): $HitResult;
        get projectile(): $Projectile;
    }
    /**
     * EntityAttributeModificationEvent.
     * 
     * Use this event to add attributes to existing entity types.
     * This event is fired after registration and before common setup, and after `EntityAttributeCreationEvent`
     * 
     * Fired on the Mod bus `IModBusEvent`.
     */
    export class $EntityAttributeModificationEvent extends $Event implements $IModBusEvent {
        add(entityType: $EntityType_<$LivingEntity>, attribute: $Holder_<$Attribute>, value: number): void;
        add(entityType: $EntityType_<$LivingEntity>, attribute: $Holder_<$Attribute>): void;
        has(entityType: $EntityType_<$LivingEntity>, attribute: $Holder_<$Attribute>): boolean;
        getTypes(): $List<$EntityType<$LivingEntity>>;
        constructor(mapIn: $Map_<$EntityType_<$LivingEntity>, $AttributeSupplier$Builder>);
        get types(): $List<$EntityType<$LivingEntity>>;
    }
    /**
     * This event is fired on server and client after an Entity has entered a different section.
     * 
     * Sections are 16x16x16 block grids of the world.
     * 
     * This event does not fire when a new entity is spawned, only when an entity moves from one section to another one.
     * Use `EntityJoinLevelEvent` to detect new entities joining the world.
     * 
     * This event is not `ICancellableEvent`.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $EntityEvent$EnteringSection extends $EntityEvent {
        /**
         * A packed version of the old section's position. This is to be used with the various methods in `SectionPos`,
         * such as `SectionPos#of(long)` or `SectionPos#x(long)` to avoid allocation.
         */
        getPackedOldPos(): number;
        /**
         * A packed version of the old section's position. This is to be used with the various methods in `SectionPos`,
         * such as `SectionPos#of(long)` or `SectionPos#x(long)` to avoid allocation.
         */
        getPackedNewPos(): number;
        getOldPos(): $SectionPos;
        getNewPos(): $SectionPos;
        /**
         * Whether the chunk has changed as part of this event. If this method returns false, only the Y position of the
         * section has changed.
         */
        didChunkChange(): boolean;
        constructor(entity: $Entity, packedOldPos: number, packedNewPos: number);
        get packedOldPos(): number;
        get packedNewPos(): number;
        get oldPos(): $SectionPos;
        get newPos(): $SectionPos;
    }
    export class $EntityMountEvent extends $EntityEvent implements $ICancellableEvent {
        isMounting(): boolean;
        getEntityBeingMounted(): $Entity;
        isDismounting(): boolean;
        getEntityMounting(): $Entity;
        getLevel(): $Level;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(entityMounting: $Entity, entityBeingMounted: $Entity, level: $Level_, isMounting: boolean);
        get mounting(): boolean;
        get entityBeingMounted(): $Entity;
        get dismounting(): boolean;
        get entityMounting(): $Entity;
        get level(): $Level;
    }
    /**
     * This event is fired whenever an `Entity` leaves a `Level`.
     * This event is fired whenever an entity is removed from the level in `LevelCallback#onTrackingEnd(Object)`.
     * 
     * This event is not cancellable and does not have a result.
     * 
     * This event is fired on the main Forge event bus
     * on both logical sides.
     */
    export class $EntityLeaveLevelEvent extends $EntityEvent {
        /**
         * @return the level the entity is set to leave
         */
        getLevel(): $Level;
        constructor(entity: $Entity, level: $Level_);
        get level(): $Level;
    }
    /**
     * EntityEvent is fired when an event involving any Entity occurs.
     * 
     * If a method utilizes this `Event` as its parameter, the method will
     * receive every child event of this class.
     * 
     * `#entity` contains the entity that caused this event to occur.
     * 
     * All children of this event are fired on the `NeoForge#EVENT_BUS`.
     */
    export class $EntityEvent extends $Event {
        getEntity(): $Entity;
        constructor(entity: $Entity);
        get entity(): $Entity;
    }
    /**
     * Fired whenever the entity's `Pose` changes for manipulating the resulting `EntityDimensions`.
     * 
     * **Note:** This event is fired from the `Entity` constructor, and therefore the entity instance
     * might not be fully initialized. Be cautious in using methods and fields from the instance, and check
     * `Entity#isAddedToLevel()` or `Entity#firstTick`.
     * 
     * This event is not cancellable, and is fired on the
     * game event bus.
     */
    export class $EntityEvent$Size extends $EntityEvent {
        getOldSize(): $EntityDimensions;
        setNewSize(size: $EntityDimensions_): void;
        getPose(): $Pose;
        getNewSize(): $EntityDimensions;
        constructor(entity: $Entity, pose: $Pose_, size: $EntityDimensions_);
        constructor(entity: $Entity, pose: $Pose_, oldSize: $EntityDimensions_, newSize: $EntityDimensions_);
        get oldSize(): $EntityDimensions;
        get pose(): $Pose;
    }
    /**
     * EntityAttributeCreationEvent.
     * 
     * Use this event to register attributes for your own EntityTypes.
     * This event is fired after registration and before common setup.
     * 
     * Fired on the Mod bus `IModBusEvent`.
     */
    export class $EntityAttributeCreationEvent extends $Event implements $IModBusEvent {
        put(entity: $EntityType_<$LivingEntity>, map: $AttributeSupplier): void;
        constructor(map: $Map_<$EntityType_<$LivingEntity>, $AttributeSupplier>);
    }
    /**
     * EntityTeleportEvent.SpreadPlayersCommand is fired before a living entity is teleported
     * from use of `SpreadPlayersCommand`.
     * 
     * This event is `ICancellableEvent`.
     * 
     * If the event is not canceled, the entity will be teleported.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     * 
     * This event is only fired on the `LogicalSide#SERVER` side.
     * 
     * If this event is canceled, the entity will not be teleported.
     */
    export class $EntityTeleportEvent$SpreadPlayersCommand extends $EntityTeleportEvent implements $ICancellableEvent {
        constructor(entity: $Entity, targetX: number, targetY: number, targetZ: number);
    }
    /**
     * This event allows each `EntityType` to have a `SpawnPredicate` registered or modified.
     * Spawn Predicates are checked whenever an `Entity` of the given `EntityType` spawns in the world naturally.
     * 
     * If registering your own entity's spawn placements, you should use `SpawnPredicate, Operation)`
     * So that you ensure that your entity has a heightmap type and placement type registered.
     * 
     * If modifying vanilla or another mod's spawn placements, you can use three operations:
     * REPLACE: checked first, the last mod to replace the predicate wipes out all other predicates. Listen with a low `EventPriority` if you need to do this.
     * OR: checked second, only one of these predicates must pass along with the original predicate
     * AND: checked third, these predicates must all pass along with the original predicate
     * 
     * This event is not cancellable and does not have a result.
     * 
     * Fired on the Mod bus `IModBusEvent`.
     */
    export class $RegisterSpawnPlacementsEvent extends $Event implements $IModBusEvent {
        register<T extends $Entity>(arg0: $EntityType_<T>, arg1: $SpawnPlacementType_, arg2: $Heightmap$Types_, arg3: $SpawnPlacements$SpawnPredicate_<T>, arg4: $RegisterSpawnPlacementsEvent$Operation_): void;
        register<T extends $Entity>(arg0: $EntityType_<T>, arg1: $SpawnPlacements$SpawnPredicate_<T>, arg2: $RegisterSpawnPlacementsEvent$Operation_): void;
        /**
         * Register an optional spawn placement `predicate` for a given `entityType`
         */
        register<T extends $Entity>(entityType: $EntityType_<T>, predicate: $SpawnPlacements$SpawnPredicate_<T>): void;
        constructor(map: $Map_<$EntityType_<never>, $RegisterSpawnPlacementsEvent$MergedSpawnPredicate<never>>);
    }
    /**
     * EntityMobGriefingEvent is fired when mob griefing is about to occur and allows an event listener to specify whether it should or not.
     * 
     * This event is fired when ever the mob griefing game rule is checked.
     */
    export class $EntityMobGriefingEvent extends $EntityEvent {
        /**
         * Returns if the mob griefing game rule is enabled.
         * 
         * The default state of this event is equivalent to this value.
         */
        canGrief(): boolean;
        /**
         * Returns if the mob griefing game rule is enabled.
         * 
         * The default state of this event is equivalent to this value.
         */
        isMobGriefingEnabled(): boolean;
        /**
         * Changes if the entity is allowed to perform the griefing action.
         */
        setCanGrief(canGrief: boolean): void;
        constructor(level: $Level_, entity: $Entity);
        get mobGriefingEnabled(): boolean;
    }
}
