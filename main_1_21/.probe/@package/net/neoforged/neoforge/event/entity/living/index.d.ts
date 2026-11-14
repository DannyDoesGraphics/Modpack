import { $ServerLevelAccessor, $BaseSpawner } from "@package/net/minecraft/world/level";
import { $ICancellableEvent, $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $EntityType_, $EquipmentSlot_, $EntityType, $SpawnGroupData, $Entity, $EquipmentSlot, $LivingEntity, $AgeableMob, $Mob, $MobSpawnType_, $MobSpawnType } from "@package/net/minecraft/world/entity";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $List, $EnumMap, $Collection_, $List_, $Collection, $Map } from "@package/java/util";
import { $Animal } from "@package/net/minecraft/world/entity/animal";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $IReductionFunction_, $DamageContainer$Reduction_, $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $InteractionHand, $InteractionHand_, $DifficultyInstance } from "@package/net/minecraft/world";
import { $BlockPos, $Holder_, $Holder, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $EnderMan } from "@package/net/minecraft/world/entity/monster";
import { $Enum } from "@package/java/lang";
import { $EffectCure } from "@package/net/neoforged/neoforge/common";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/neoforged/neoforge/event/entity/living" {
    /**
     * This class holds all events relating to the entire flow of mob spawns.
     * 
     * Currently, the events have the following flow for any given mob spawn:
     * 
     * Before the spawn is attempted `SpawnPlacementCheck` is fired, to determine if the spawn may occur based on mob-specific rules.
     * 
     * After the entity is created `PositionCheck` is fired, to determine if the selected position is legal for the entity.
     * 
     * If both checks succeeded, `FinalizeSpawn` is fired, which performs initialization on the newly-spawned entity.
     * 
     * Finally, if the spawn was not cancelled via `FinalizeSpawn#setSpawnCancelled`, then `EntityJoinLevelEvent` is fired as the entity enters the world.
     * 
     * `AllowDespawn` is not related to the mob spawn event flow, as it fires when a despawn is attempted.
     */
    export class $MobSpawnEvent extends $EntityEvent {
        getY(): number;
        getLevel(): $ServerLevelAccessor;
        getX(): number;
        getZ(): number;
        get y(): number;
        get level(): $ServerLevelAccessor;
        get x(): number;
        get z(): number;
    }
    /**
     * LivingDrownEvent is fired whenever a living entity can't breathe and its air supply is less than or equal to zero.
     * 
     * This event is fired via `CommonHooks#onLivingBreathe(LivingEntity, int, int)`.
     * 
     * This event is `ICancellableEvent`. Effects of cancellation are noted in `#setCanceled(boolean)`.
     * 
     * This event does not have a result.
     * This event is fired on `NeoForge#EVENT_BUS`
     */
    export class $LivingDrownEvent extends $LivingEvent implements $ICancellableEvent {
        /**
         * Sets if the entity is actively drowning.
         */
        setDrowning(isDrowning: boolean): void;
        /**
         * Sets the amount of drowning damage that may be inflicted.
         */
        setDamageAmount(damageAmount: number): void;
        /**
         * Sets the amount of bubbles that may be spawned.
         */
        setBubbleCount(bubbleCount: number): void;
        /**
         * This method returns true if the entity is "actively" drowning.
         * 
         * For most entities, this happens when their air supply reaches -20.
         * 
         * When this is true, the entity will take damage, spawn particles, and reset their air supply to 0.
         */
        isDrowning(): boolean;
        /**
         * Gets the number of ParticleTypes#BUBBLE particles that would be spawned.
         * 
         * Bubbles are only spawned if the entity is actively drowning.
         * 
         * For vanilla entities, the default value is 8 particles.
         */
        getBubbleCount(): number;
        /**
         * Gets the amount of drowning damage the entity would take.
         * 
         * Drowning damage is only inflicted if the entity is actively drowning.
         * 
         * For vanilla entities, the default amount of damage is 2 (1 heart).
         * 
         * If the damage amount is less than or equal to zero, `Entity#hurt` will not be called.
         */
        getDamageAmount(): number;
        /**
         * Sets if the entity is actively drowning.
         */
        setCanceled(isDrowning: boolean): void;
        /**
         * This method returns true if the entity is "actively" drowning.
         * 
         * For most entities, this happens when their air supply reaches -20.
         * 
         * When this is true, the entity will take damage, spawn particles, and reset their air supply to 0.
         */
        isCanceled(): boolean;
        /**
         * Constructor which auto-populates with all vanilla values.
         */
        constructor(entity: $LivingEntity);
        /**
         * Constructs a new LivingDrownEvent.
         */
        constructor(entity: $LivingEntity, isDrowning: boolean, damageAmount: number, bubbleCount: number);
    }
    export class $LivingEntityUseItemEvent extends $LivingEvent {
        /**
         * @return the hand the entity is using the item in
         */
        getHand(): $InteractionHand;
        setDuration(duration: number): void;
        getDuration(): number;
        getItem(): $ItemStack;
        get hand(): $InteractionHand;
        get item(): $ItemStack;
    }
    /**
     * LivingDropsEvent is fired when an Entity's death causes dropped items to appear.
     * 
     * This event is fired whenever an Entity dies and drops items in
     * `LivingEntity#die(DamageSource)`.
     * 
     * This event is fired via the `CommonHooks#onLivingDrops(LivingEntity, DamageSource, Collection, int, boolean)` .
     * 
     * `#source` contains the DamageSource that caused the drop to occur.
     * 
     * `#drops` contains the ArrayList of EntityItems that will be dropped.
     * 
     * `#lootingLevel` contains the amount of loot that will be dropped.
     * 
     * `#recentlyHit` determines whether the Entity doing the drop has recently been damaged.
     * 
     * This event is `ICancellableEvent`.
     * 
     * If this event is canceled, the Entity does not drop anything.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $LivingDropsEvent extends $LivingEvent implements $ICancellableEvent {
        isRecentlyHit(): boolean;
        getDrops(): $Collection<$ItemEntity>;
        getSource(): $DamageSource;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(entity: $LivingEntity, source: $DamageSource_, drops: $Collection_<$ItemEntity>, recentlyHit: boolean);
        get recentlyHit(): boolean;
        get drops(): $Collection<$ItemEntity>;
        get source(): $DamageSource;
    }
    export class $LivingChangeTargetEvent$LivingTargetType extends $Enum<$LivingChangeTargetEvent$LivingTargetType> implements $LivingChangeTargetEvent$ILivingTargetType {
        static values(): $LivingChangeTargetEvent$LivingTargetType[];
        static valueOf(arg0: string): $LivingChangeTargetEvent$LivingTargetType;
        static MOB_TARGET: $LivingChangeTargetEvent$LivingTargetType;
        static BEHAVIOR_TARGET: $LivingChangeTargetEvent$LivingTargetType;
    }
    /**
     * Values that may be interpreted as {@link $LivingChangeTargetEvent$LivingTargetType}.
     */
    export type $LivingChangeTargetEvent$LivingTargetType_ = "mob_target" | "behavior_target";
    /**
     * This event is fired when Spawn Placements (aka Spawn Rules) are checked, before a mob attempts to spawn.
     * 
     * Spawn Placement checks include light levels, slime chunks, grass blocks for animals, and others in the same vein.
     * 
     * The purpose of this event is to permit runtime changes to any or all spawn placement logic without having to wrap the placement for each entity.
     * 
     * This event is only fired on the logical server.
     * 
     * This event is not fired for mob spawners which utilize `CustomSpawnRules`, as they do not check spawn placements.
     */
    export class $MobSpawnEvent$SpawnPlacementCheck extends $Event {
        /**
         * The default vanilla result is useful if an additional check wants to force `Result#ALLOW` only if the vanilla check would succeed.
         */
        getPlacementCheckResult(): boolean;
        /**
         * The default vanilla result is useful if an additional check wants to force `Result#ALLOW` only if the vanilla check would succeed.
         */
        getDefaultResult(): boolean;
        getPos(): $BlockPos;
        /**
         * Retrieves the type of mob spawn that is happening.
         */
        getSpawnType(): $MobSpawnType;
        setResult(arg0: $MobSpawnEvent$SpawnPlacementCheck$Result_): void;
        getLevel(): $ServerLevelAccessor;
        getResult(): $MobSpawnEvent$SpawnPlacementCheck$Result;
        /**
         * In all vanilla cases, this is equal to `ServerLevelAccessor#getRandom()`.
         */
        getRandom(): $RandomSource;
        getEntityType(): $EntityType<never>;
        /**
         * Internal.
         */
        constructor(entityType: $EntityType_<never>, level: $ServerLevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource, defaultResult: boolean);
        get placementCheckResult(): boolean;
        get defaultResult(): boolean;
        get pos(): $BlockPos;
        get spawnType(): $MobSpawnType;
        get level(): $ServerLevelAccessor;
        get random(): $RandomSource;
        get entityType(): $EntityType<never>;
    }
    /**
     * This event is fired when a living entity attempts to get a projectile with the
     * `LivingEntity#getProjectile(ItemStack)` method. The item stack given is usually the item stack of a
     * `ProjectileWeaponItem` and the item stack returned is usually the item stack of a
     * `Projectile`.
     * 
     * This event is not `ICancellableEvent`.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $LivingGetProjectileEvent extends $LivingEvent {
        getProjectileWeaponItemStack(): $ItemStack;
        /**
         * Sets the projectile itemstack to be used.
         * 
         * If the entity is a player: whenever the projectile is fired/consumed the stack will be shrunk by
         * one. To disable this behaviour you can copy the stack before giving it to the event. For bows, you can use
         * `ArrowLooseEvent` to remove the arrow yourself.
         * 
         * Be aware that since this event fires every time a living entity gets a projectile, whether or not its
         * `LivingEntity#level` is client-side, you will want to make a conditional to always set the item stack to
         * what you'd want it to be to avoid client-server desyncs.
         */
        setProjectileItemStack(projectileItemStack: $ItemStack_): void;
        getProjectileItemStack(): $ItemStack;
        constructor(livingEntity: $LivingEntity, projectileWeaponItemStack: $ItemStack_, ammo: $ItemStack_);
        get projectileWeaponItemStack(): $ItemStack;
    }
    /**
     * LivingDeathEvent is fired when an Entity dies.
     * 
     * This event is fired whenever an Entity dies in
     * `LivingEntity#die(DamageSource)`,
     * `Player#die(DamageSource)`, and
     * `ServerPlayer#die(DamageSource)`.
     * 
     * This event is fired via the `CommonHooks#onLivingDeath(LivingEntity, DamageSource)`.
     * 
     * `#source` contains the DamageSource that caused the entity to die.
     * 
     * This event is `ICancellableEvent`.
     * 
     * If this event is canceled, the Entity does not die.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $LivingDeathEvent extends $LivingEvent implements $ICancellableEvent {
        getSource(): $DamageSource;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(entity: $LivingEntity, source: $DamageSource_);
        get source(): $DamageSource;
    }
    export class $LivingSwapItemsEvent extends $LivingEvent {
        constructor(entity: $LivingEntity);
    }
    /**
     * Fired when an Entity attempts to use a totem to prevent its death.
     * 
     * This event is cancellable, and does not have a result.
     * If this event is cancelled, the totem will not prevent the entity's death.
     * 
     * This event is fired on the Forge event bus,
     * only on the logical server.
     */
    export class $LivingUseTotemEvent extends $LivingEvent implements $ICancellableEvent {
        /**
         * @return the totem of undying being used from the entity's inventory
         */
        getTotem(): $ItemStack;
        /**
         * @return the hand holding the totem
         */
        getHandHolding(): $InteractionHand;
        /**
         * @return the damage source that caused the entity to die
         */
        getSource(): $DamageSource;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(entity: $LivingEntity, source: $DamageSource_, totem: $ItemStack_, hand: $InteractionHand_);
        get totem(): $ItemStack;
        get handHolding(): $InteractionHand;
        get source(): $DamageSource;
    }
    export class $MobSpawnEvent$SpawnPlacementCheck$Result extends $Enum<$MobSpawnEvent$SpawnPlacementCheck$Result> {
        static values(): $MobSpawnEvent$SpawnPlacementCheck$Result[];
        static valueOf(arg0: string): $MobSpawnEvent$SpawnPlacementCheck$Result;
        static SUCCEED: $MobSpawnEvent$SpawnPlacementCheck$Result;
        static DEFAULT: $MobSpawnEvent$SpawnPlacementCheck$Result;
        static FAIL: $MobSpawnEvent$SpawnPlacementCheck$Result;
    }
    /**
     * Values that may be interpreted as {@link $MobSpawnEvent$SpawnPlacementCheck$Result}.
     */
    export type $MobSpawnEvent$SpawnPlacementCheck$Result_ = "succeed" | "default" | "fail";
    /**
     * `LivingEquipmentChangeEvent` is fired when the Equipment of a Entity changes.
     * 
     * This event is fired whenever changes in Equipment are detected in `LivingEntity#tick()`.
     * 
     * This also includes entities joining the World, as well as being cloned.
     * 
     * This event is fired on server-side only.
     * 
     * `#slot` contains the affected `EquipmentSlot`.
     * 
     * `#from` contains the `ItemStack` that was equipped previously.
     * 
     * `#to` contains the `ItemStack` that is equipped now.
     * 
     * This event is not `ICancellableEvent`.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $LivingEquipmentChangeEvent extends $LivingEvent {
        getSlot(): $EquipmentSlot;
        getFrom(): $ItemStack;
        getTo(): $ItemStack;
        constructor(entity: $LivingEntity, slot: $EquipmentSlot_, from: $ItemStack_, to: $ItemStack_);
        get slot(): $EquipmentSlot;
        get from(): $ItemStack;
        get to(): $ItemStack;
    }
    /**
     * Fired when a player starts 'using' an item, typically when they hold right mouse.
     * Examples:
     * Drawing a bow
     * Eating Food
     * Drinking Potions/Milk
     * Guarding with a sword
     * 
     * Cancel the event, or set the duration or <= 0 to prevent it from processing.
     */
    export class $LivingEntityUseItemEvent$Start extends $LivingEntityUseItemEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        /**
         * @deprecated
         */
        constructor(entity: $LivingEntity, item: $ItemStack_, duration: number);
        constructor(entity: $LivingEntity, item: $ItemStack_, hand: $InteractionHand_, duration: number);
    }
    export class $LivingConversionEvent extends $LivingEvent {
        constructor(entity: $LivingEntity);
    }
    /**
     * This event is fired to check if a `MobEffectInstance` can be applied to an entity.
     * 
     * It will be fired whenever `LivingEntity#canBeAffected(MobEffectInstance)` would be invoked.
     */
    export class $MobEffectEvent$Applicable extends $MobEffectEvent {
        /**
         * @return If the mob effect should be applied or not, based on the current event result
         */
        getApplicationResult(): boolean;
        /**
         * @return the entity source of the effect, or `null` if none exists
         */
        getEffectSource(): $Entity;
        setResult(arg0: $MobEffectEvent$Applicable$Result_): void;
        getResult(): $MobEffectEvent$Applicable$Result;
        constructor(living: $LivingEntity, effectInstance: $MobEffectInstance, source: $Entity);
        get applicationResult(): boolean;
        get effectSource(): $Entity;
    }
    /**
     * Fired when a player stops using an item without the use duration timing out.
     * Example:
     * Stop eating 1/2 way through
     * Stop defending with sword
     * Stop drawing bow. This case would fire the arrow
     * 
     * Duration on this event is how long the item had left in it's count down before 'finishing'
     * 
     * Canceling this event will prevent the Item from being notified that it has stopped being used,
     * The only vanilla item this would effect are bows, and it would cause them NOT to fire there arrow.
     */
    export class $LivingEntityUseItemEvent$Stop extends $LivingEntityUseItemEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(entity: $LivingEntity, item: $ItemStack_, duration: number);
    }
    /**
     * LivingDamageEvent.Pre is fired when an Entity is set to be hurt.
     * 
     * At this point armor, and potion modifiers have already been applied to the damage value
     * and the entity. Absorption modifiers are handled after this event.
     * 
     * This event is fired in `LivingEntity#actuallyHurt(DamageSource, float`
     * 
     * For custom posting of this event, the event expects to be fired after
     * damage reductions have been calculated but before any changes to the entity
     * health has been applied. This event expects a mutable `DamageContainer`.
     * 
     * This event is fired via the `CommonHooks#onLivingDamagePre(LivingEntity, DamageContainer)`.
     */
    export class $LivingDamageEvent$Pre extends $LivingDamageEvent {
        /**
         * @return the current value to be applied to the entity's health after this event
         */
        getOriginalDamage(): number;
        /**
         * @return the `DamageContainer` instance for this damage sequence
         */
        getContainer(): $DamageContainer;
        /**
         * @return the damage source for this damage sequence
         */
        getSource(): $DamageSource;
        /**
         * @return the current value to be applied to the entity's health after this event
         */
        getNewDamage(): number;
        /**
         * Sets the amount to reduce the entity health by
         */
        setNewDamage(newDamage: number): void;
        constructor(entity: $LivingEntity, container: $DamageContainer);
        get originalDamage(): number;
        get container(): $DamageContainer;
        get source(): $DamageSource;
    }
    export class $ArmorHurtEvent$ArmorEntry {
        originalDamage: number;
        newDamage: number;
        armorItemStack: $ItemStack;
        constructor(armorStack: $ItemStack_, damageIn: number);
    }
    /**
     * BabyEntitySpawnEvent is fired just before a baby entity is about to be spawned.
     * 
     * Parents will have disengaged their relationship. `ICancellableEvent`
     * 
     * It is possible to change the child completely by using `#setChild(AgeableMob)`
     * 
     * This event is fired from `Animal#spawnChildFromBreeding(ServerLevel, Animal)` and
     * `Fox#spawnChildFromBreeding(ServerLevel, Animal)`
     * 
     * `#parentA` contains the initiating parent entity.
     * 
     * `#parentB` contains the secondary parent entity.
     * 
     * `#causedByPlayer` contains the player responsible for the breading (if applicable).
     * 
     * `#child` contains the child that will be spawned.
     * 
     * This event is `ICancellableEvent`.
     * 
     * If this event is canceled, the child Entity is not added to the world, and the parents
     * 
     * will no longer attempt to mate.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $BabyEntitySpawnEvent extends $Event implements $ICancellableEvent {
        getParentA(): $Mob;
        getParentB(): $Mob;
        getCausedByPlayer(): $Player;
        setChild(proposedChild: $AgeableMob): void;
        getChild(): $AgeableMob;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(parentA: $Mob, parentB: $Mob, proposedChild: $AgeableMob);
        get parentA(): $Mob;
        get parentB(): $Mob;
        get causedByPlayer(): $Player;
    }
    /**
     * Fired every tick that a player is 'using' an item, see `Start` for info.
     * 
     * Cancel the event, or set the duration to <= 0 to cause the player to stop using the item.
     */
    export class $LivingEntityUseItemEvent$Tick extends $LivingEntityUseItemEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(entity: $LivingEntity, item: $ItemStack_, duration: number);
    }
    export class $MobDespawnEvent$Result extends $Enum<$MobDespawnEvent$Result> {
        static values(): $MobDespawnEvent$Result[];
        static valueOf(arg0: string): $MobDespawnEvent$Result;
        static DENY: $MobDespawnEvent$Result;
        static ALLOW: $MobDespawnEvent$Result;
        static DEFAULT: $MobDespawnEvent$Result;
    }
    /**
     * Values that may be interpreted as {@link $MobDespawnEvent$Result}.
     */
    export type $MobDespawnEvent$Result_ = "allow" | "default" | "deny";
    /**
     * LivingEvent is fired whenever an event involving a `LivingEntity` occurs.
     * 
     * If a method utilizes this `Event` as its parameter, the method will
     * receive every child event of this class.
     * 
     * All children of this event are fired on the `NeoForge#EVENT_BUS`.
     */
    export class $LivingEvent extends $EntityEvent {
        getEntity(): $LivingEntity;
        constructor(entity: $LivingEntity);
        get entity(): $LivingEntity;
    }
    /**
     * This event is fired when a living entity is about to swap the items in their main and offhand.
     * This event is executed in `ServerGamePacketListenerImpl#handlePlayerAction`
     * 
     * This event is cancellable, and does not have a result.
     */
    export class $LivingSwapItemsEvent$Hands extends $LivingSwapItemsEvent implements $ICancellableEvent {
        /**
         * Sets the item that will be swapped to the main hand of the entity.
         */
        setItemSwappedToMainHand(item: $ItemStack_): void;
        /**
         * Sets the item that will be swapped to the main hand of the entity.
         */
        setItemSwappedToOffHand(item: $ItemStack_): void;
        /**
         * Gets the item that will be swapped to the main hand of the entity.
         */
        getItemSwappedToOffHand(): $ItemStack;
        /**
         * Gets the item that will be swapped to the main hand of the entity.
         */
        getItemSwappedToMainHand(): $ItemStack;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(entity: $LivingEntity);
    }
    /**
     * LivingKnockBackEvent is fired when a living entity is about to be knocked back.
     * 
     * This event is fired whenever an Entity is knocked back in
     * `LivingEntity#hurt(DamageSource, float)`,
     * `LivingEntity#blockUsingShield(LivingEntity)`,
     * `Mob#doHurtTarget(Entity)` and
     * `Player#attack(Entity)`
     * 
     * This event is fired via `CommonHooks#onLivingKnockBack(LivingEntity, float, double, double)` .
     * 
     * `#strength` contains the strength of the knock back.
     * 
     * `#ratioX` contains the x ratio of the knock back.
     * 
     * `#ratioZ` contains the z ratio of the knock back.
     * 
     * This event is `ICancellableEvent`.
     * 
     * If this event is canceled, the entity is not knocked back.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $LivingKnockBackEvent extends $LivingEvent implements $ICancellableEvent {
        getOriginalStrength(): number;
        getOriginalRatioX(): number;
        getOriginalRatioZ(): number;
        setStrength(strength: number): void;
        setRatioX(ratioX: number): void;
        setRatioZ(ratioX: number): void;
        getStrength(): number;
        getRatioX(): number;
        getRatioZ(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(target: $LivingEntity, strength: number, ratioX: number, ratioZ: number);
        get originalStrength(): number;
        get originalRatioX(): number;
        get originalRatioZ(): number;
    }
    /**
     * This event is fired whenever a mob is removed and splits into multiple children. It only fires on the logical server.
     * 
     * In vanilla, this event is fired by Slimes and Magma Cubes on death, from `Slime#remove(RemovalReason)`.
     * 
     * Mods may elect to fire this event for any mob that splits on removal.
     */
    export class $MobSplitEvent extends $Event implements $ICancellableEvent {
        /**
         * Canceling this event will prevent any children from being spawned.
         */
        setCanceled(canceled: boolean): void;
        /**
         * @return the parent mob, which is in the process of being removed
         */
        getParent(): $Mob;
        /**
         * @return the mutable list of all children
         * 
         * Children can be modified, removed, or added to the list.
         */
        getChildren(): $List<$Mob>;
        isCanceled(): boolean;
        constructor(parent: $Mob, children: $List_<$Mob>);
        get parent(): $Mob;
        get children(): $List<$Mob>;
    }
    /**
     * This event is fired from `NaturalSpawner#spawnCategoryForPosition` when the spawning
     * system determines the maximum amount of the selected entity that can spawn at the same time.
     */
    export class $SpawnClusterSizeEvent extends $LivingEvent {
        /**
         * Gets the possibly event-modified max spawn cluster size for the entity.
         * 
         * To see the default size, use `Mob#getMaxSpawnClusterSize()`
         */
        getSize(): number;
        /**
         * Changes the max cluster size for the entity.
         */
        setSize(size: number): void;
        constructor(entity: $Mob);
    }
    /**
     * This event is fired when an interaction between a `LivingEntity` and `MobEffectInstance` happens.
     * 
     * All children of this event are fired on the `NeoForge#EVENT_BUS`.
     */
    export class $MobEffectEvent extends $LivingEvent {
        getEffectInstance(): $MobEffectInstance;
        get effectInstance(): $MobEffectInstance;
    }
    /**
     * This event is fired before `Mob#finalizeSpawn` is called.
     * 
     * This allows mods to control mob initialization.
     * 
     * In vanilla code, this event is injected by a transformer and not via patch, so calls cannot be traced via call hierarchy (it is not source-visible).
     * 
     * Canceling this event will result in `Mob#finalizeSpawn` not being called, and the returned value always being null, instead of propagating the SpawnGroupData.
     * 
     * The entity will still be spawned. If you want to prevent the spawn, use `FinalizeSpawnEvent#setSpawnCancelled`, which will cause Forge to prevent the spawn.
     * 
     * This event is fired on `NeoForge#EVENT_BUS`, and is only fired on the logical server.
     */
    export class $FinalizeSpawnEvent extends $MobSpawnEvent implements $ICancellableEvent {
        /**
         * Returns the current spawn cancellation status, which can be changed via `FinalizeSpawnEvent#setSpawnCancelled(boolean)`.
         */
        isSpawnCancelled(): boolean;
        /**
         * Retrieves the underlying `BlockEntity` or `Entity` that performed the spawn. This may be a `SpawnerBlockEntity`,
         * `TrialSpawnerBlockEntity`, `MinecartSpawner`, or similar modded object.
         * 
         * This is usually null unless the spawn type is a spawner type, and may still be null even then.
         */
        getSpawner(): $Either<$BlockEntity, $Entity>;
        /**
         * Retrieves the type of mob spawn that happened (the event that caused the spawn). The enum names are self-explanatory.
         */
        getSpawnType(): $MobSpawnType;
        /**
         * This method can be used to cancel the spawn of this mob.
         * This method must be used if you want to block the spawn, as canceling the event only blocks the call to `Mob#finalizeSpawn`.
         * Note that if the spawn is cancelled, but the event is not, then `Mob#finalizeSpawn` will still be called, but the entity will not be spawned.
         * Usually that has no side effects, but callers should be aware.
         */
        setSpawnCancelled(cancel: boolean): void;
        /**
         * Retrieves the `SpawnGroupData` for this entity. When spawning mobs in a loop, this group data is used for the entire group and impacts future spawns.
         * This is how entities like horses ensure that the whole group spawns as a single variant. How this is used varies on a per-entity basis.
         */
        getSpawnData(): $SpawnGroupData;
        /**
         * Sets the spawn data for this entity. If this event is cancelled, this value is not used, since `Mob#finalizeSpawn` will not be called.
         */
        setSpawnData(data: $SpawnGroupData): void;
        /**
         * Retrieves the `DifficultyInstance` for the chunk where the mob is about to be spawned.
         */
        getDifficulty(): $DifficultyInstance;
        /**
         * Sets the difficulty instance for this event, which will be propagated to `Mob#finalizeSpawn` unless cancelled.
         * The difficulty instance controls how likely certain random effects are to occur, or if certain mob abilities are enabled.
         */
        setDifficulty(inst: $DifficultyInstance): void;
        /**
         * This method can be used to cancel the spawn of this mob.
         * This method must be used if you want to block the spawn, as canceling the event only blocks the call to `Mob#finalizeSpawn`.
         * Note that if the spawn is cancelled, but the event is not, then `Mob#finalizeSpawn` will still be called, but the entity will not be spawned.
         * Usually that has no side effects, but callers should be aware.
         */
        setCanceled(cancel: boolean): void;
        /**
         * Returns the current spawn cancellation status, which can be changed via `FinalizeSpawnEvent#setSpawnCancelled(boolean)`.
         */
        isCanceled(): boolean;
        constructor(entity: $Mob, level: $ServerLevelAccessor, x: number, y: number, z: number, difficulty: $DifficultyInstance, spawnType: $MobSpawnType_, spawnData: $SpawnGroupData, spawner: $Either<$BlockEntity, $Entity>);
        get spawner(): $Either<$BlockEntity, $Entity>;
        get spawnType(): $MobSpawnType;
    }
    /**
     * LivingHealEvent is fired when an Entity is set to be healed.
     * 
     * This event is fired whenever an Entity is healed in `LivingEntity#heal(float)`
     * 
     * This event is fired via the `EventHooks#onLivingHeal(LivingEntity, float)`.
     * 
     * `#amount` contains the amount of healing done to the Entity that was healed.
     * 
     * This event is `ICancellableEvent`.
     * 
     * If this event is canceled, the Entity is not healed.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $LivingHealEvent extends $LivingEvent implements $ICancellableEvent {
        setAmount(amount: number): void;
        getAmount(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(entity: $LivingEntity, amount: number);
    }
    /**
     * LivingConversionEvent.Post is triggered when an entity is replacing
     * itself with another entity.
     * The old living entity is likely to be removed right after this event.
     */
    export class $LivingConversionEvent$Post extends $LivingConversionEvent {
        /**
         * Gets the finalized new entity (with all data like potion
         * effect and equipments set)
         */
        getOutcome(): $LivingEntity;
        constructor(entity: $LivingEntity, outcome: $LivingEntity);
        get outcome(): $LivingEntity;
    }
    /**
     * This event is fired on the forge bus before an Enderman detects that a player is looking at them.
     * It will not be fired if the detection is already prevented by `IItemExtension#isEnderMask`
     * 
     * This event is `ICancellableEvent`.
     * If this event is canceled, the Enderman will not target the player.
     * 
     * This event does not have a `Result`.
     */
    export class $EnderManAngerEvent extends $LivingEvent implements $ICancellableEvent {
        /**
         * The player that is being checked.
         */
        getPlayer(): $Player;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(enderman: $EnderMan, player: $Player);
        get player(): $Player;
    }
    /**
     * This event is fired from `Mob#checkDespawn()`.
     * 
     * It fires once per tick per mob that is attempting to despawn.
     * 
     * It is fired for all entities, including persistent entities.
     * Additionally, it may be used to keep mobs from despawning in peaceful mode.
     * 
     * This event is only fired on the logical server.
     */
    export class $MobDespawnEvent extends $MobSpawnEvent {
        setResult(arg0: $MobDespawnEvent$Result_): void;
        getResult(): $MobDespawnEvent$Result;
        /**
         * Fire via `EventHooks#checkMobDespawn(Mob)`
         */
        constructor(mob: $Mob, level: $ServerLevelAccessor);
    }
    export class $MobEffectEvent$Applicable$Result extends $Enum<$MobEffectEvent$Applicable$Result> {
        static values(): $MobEffectEvent$Applicable$Result[];
        static valueOf(arg0: string): $MobEffectEvent$Applicable$Result;
        static DO_NOT_APPLY: $MobEffectEvent$Applicable$Result;
        static APPLY: $MobEffectEvent$Applicable$Result;
        static DEFAULT: $MobEffectEvent$Applicable$Result;
    }
    /**
     * Values that may be interpreted as {@link $MobEffectEvent$Applicable$Result}.
     */
    export type $MobEffectEvent$Applicable$Result_ = "apply" | "default" | "do_not_apply";
    /**
     * LivingFallEvent is fired when an Entity is set to be falling.
     * 
     * This event is fired whenever an Entity is set to fall in
     * `LivingEntity#causeFallDamage(float, float, DamageSource)`.
     * 
     * This event is fired via the `CommonHooks#onLivingFall(LivingEntity, float, float)`.
     * 
     * `#distance` contains the distance the Entity is to fall. If this event is canceled, this value is set to 0.0F.
     * 
     * This event is `ICancellableEvent`.
     * 
     * If this event is canceled, the Entity does not fall.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $LivingFallEvent extends $LivingEvent implements $ICancellableEvent {
        setDamageMultiplier(distance: number): void;
        getDistance(): number;
        setDistance(distance: number): void;
        getDamageMultiplier(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(entity: $LivingEntity, distance: number, damageMultiplier: number);
    }
    /**
     * This event is fired when a new `MobEffectInstance` is added to an entity.
     * This event is also fired if an entity already has the effect but with a different duration or amplifier.
     * This event is not `ICancellableEvent`.
     * This event does not have a result.
     */
    export class $MobEffectEvent$Added extends $MobEffectEvent {
        getOldEffectInstance(): $MobEffectInstance;
        getEffectSource(): $Entity;
        constructor(living: $LivingEntity, oldEffectInstance: $MobEffectInstance, newEffectInstance: $MobEffectInstance, source: $Entity);
        get oldEffectInstance(): $MobEffectInstance;
        get effectSource(): $Entity;
    }
    export class $LivingEvent$LivingVisibilityEvent extends $LivingEvent {
        getVisibilityModifier(): number;
        modifyVisibility(mod: number): void;
        getLookingEntity(): $Entity;
        constructor(livingEntity: $LivingEntity, lookingEntity: $Entity, originalMultiplier: number);
        get visibilityModifier(): number;
        get lookingEntity(): $Entity;
    }
    /**
     * LivingBreatheEvent is fired whenever a living entity ticks.
     * 
     * This event is fired via `CommonHooks#onLivingBreathe(LivingEntity, int, int)`.
     * 
     * This event is not `ICancellableEvent`.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on `NeoForge#EVENT_BUS`
     */
    export class $LivingBreatheEvent extends $LivingEvent {
        /**
         * Sets if the entity can breathe or not.
         */
        setCanBreathe(canBreathe: boolean): void;
        /**
         * Sets the new consumed air amount.
         */
        setConsumeAirAmount(consumeAirAmount: number): void;
        /**
         * Sets the new consumed air amount.
         */
        setRefillAirAmount(consumeAirAmount: number): void;
        /**
         * If the entity can breathe, their air value will be increased by `#getRefillAirAmount()`.
         * 
         * If the entity cannot breathe, their air value will be reduced by `#getConsumeAirAmount()`.
         */
        canBreathe(): boolean;
        getRefillAirAmount(): number;
        getConsumeAirAmount(): number;
        constructor(entity: $LivingEntity, canBreathe: boolean, consumeAirAmount: number, refillAirAmount: number);
    }
    export class $MobSpawnEvent$PositionCheck$Result extends $Enum<$MobSpawnEvent$PositionCheck$Result> {
        static values(): $MobSpawnEvent$PositionCheck$Result[];
        static valueOf(arg0: string): $MobSpawnEvent$PositionCheck$Result;
        static SUCCEED: $MobSpawnEvent$PositionCheck$Result;
        static DEFAULT: $MobSpawnEvent$PositionCheck$Result;
        static FAIL: $MobSpawnEvent$PositionCheck$Result;
    }
    /**
     * Values that may be interpreted as {@link $MobSpawnEvent$PositionCheck$Result}.
     */
    export type $MobSpawnEvent$PositionCheck$Result_ = "succeed" | "default" | "fail";
    /**
     * LivingConversionEvent.Pre is triggered when an entity is trying
     * to replace itself with another entity
     * 
     * This event may trigger every tick even if it was cancelled last tick
     * for entities like Zombies and Hoglins. To prevent it, the conversion
     * timer needs to be changed or reset
     * 
     * This event is `ICancellableEvent`
     * If cancelled, the replacement will not occur
     */
    export class $LivingConversionEvent$Pre extends $LivingConversionEvent implements $ICancellableEvent {
        /**
         * Sets the conversion timer, by changing this it prevents the
         * event being triggered every tick
         * Do note the timer of some of the entities are increments, but
         * some of them are decrements
         * Not every conversion is applicable for this
         */
        setConversionTimer(ticks: number): void;
        /**
         * Gets the entity type of the new entity this living entity is
         * converting to
         */
        getOutcome(): $EntityType<$LivingEntity>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(entity: $LivingEntity, outcome: $EntityType_<$LivingEntity>, timer: $Consumer_<number>);
        set conversionTimer(value: number);
        get outcome(): $EntityType<$LivingEntity>;
    }
    /**
     * LivingIncomingDamageEvent is fired when a LivingEntity is about to receive damage.
     * 
     * This event is fired in `LivingEntity#hurt(DamageSource, float)`
     * after invulnerability checks but before any damage processing/mitigation.
     * 
     * For custom posting of this event, the event expects to be fired before any
     * damage reductions have been calculated. This event expects a mutable `DamageContainer`.
     * 
     * This event is fired via the `CommonHooks#onEntityIncomingDamage(LivingEntity, DamageContainer)`.
     */
    export class $LivingIncomingDamageEvent extends $LivingEvent implements $ICancellableEvent {
        /**
         * @return the current damage to be applied to the entity
         */
        getOriginalAmount(): number;
        setAmount(newDamage: number): void;
        /**
         * Reduction modifiers alter the vanilla damage reduction before it modifies the damage value.
         * Modifiers are executed in sequence.
         */
        addReductionModifier(type: $DamageContainer$Reduction_, reductionFunc: $IReductionFunction_): void;
        /**
         * When an entity's invulnerable time is fully cooled down, 20 ticks of invulnerability is added
         * on the next attack. This method allows for setting a new invulnerability tick count when those
         * conditions are met.
         * 
         * *Note: this value will be ignored if the damage is taken while invulnerability ticks are greater
         * than 10 and the damage source does not bypass invulnerability*
         */
        setInvulnerabilityTicks(ticks: number): void;
        /**
         * @return the container for this damage sequence
         */
        getContainer(): $DamageContainer;
        /**
         * @return the `DamageSource` for this damage sequence
         */
        getSource(): $DamageSource;
        /**
         * @return the current damage to be applied to the entity
         */
        getAmount(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(entity: $LivingEntity, container: $DamageContainer);
        get originalAmount(): number;
        set invulnerabilityTicks(value: number);
        get container(): $DamageContainer;
        get source(): $DamageSource;
    }
    /**
     * Event for when an entity drops experience on its death, can be used to change
     * the amount of experience points dropped or completely prevent dropping of experience
     * by canceling the event.
     */
    export class $LivingExperienceDropEvent extends $LivingEvent implements $ICancellableEvent {
        getDroppedExperience(): number;
        setDroppedExperience(droppedExperience: number): void;
        getOriginalExperience(): number;
        getAttackingPlayer(): $Player;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(entity: $LivingEntity, attackingPlayer: $Player, originalExperience: number);
        get originalExperience(): number;
        get attackingPlayer(): $Player;
    }
    /**
     * This event is fired when an `Animal` is tamed.
     * 
     * It is fired via `EventHooks#onAnimalTame(Animal, Player)`.
     * Forge fires this event for applicable vanilla animals, mods need to fire it themselves.
     * This event is `ICancellableEvent`. If canceled, taming the animal will fail.
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $AnimalTameEvent extends $LivingEvent implements $ICancellableEvent {
        getAnimal(): $Animal;
        getTamer(): $Player;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(animal: $Animal, tamer: $Player);
        get animal(): $Animal;
        get tamer(): $Player;
    }
    /**
     * This event allows you to change the target an entity has.
     * 
     * This event is fired before `LivingSetAttackTargetEvent`.
     * 
     * This event is fired via the `CommonHooks#onLivingChangeTarget(LivingEntity, LivingEntity, ILivingTargetType)`
     * 
     * `#getOriginalAboutToBeSetTarget()` returns the target that should originally be set.
     * The return value cannot be affected by calling `#setNewAboutToBeSetTarget(LivingEntity)`.
     * 
     * `#getNewAboutToBeSetTarget()` returns the new target that this entity will have.
     * The return value can be affected by calling `#setNewAboutToBeSetTarget(LivingEntity)`.
     * 
     * `#getTargetType()` returns the target type that caused the change of targets.
     * 
     * This event is `ICancellableEvent`.
     * 
     * If you cancel this event, the target will not be changed and it will stay the same.
     * Cancelling this event will prevent `LivingSetAttackTargetEvent` from being posted.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $LivingChangeTargetEvent extends $LivingEvent implements $ICancellableEvent {
        /**
         * @return the new target that this entity will begin to track.
         */
        getNewAboutToBeSetTarget(): $LivingEntity;
        /**
         * Sets the new target this entity shall have.
         */
        setNewAboutToBeSetTarget(newAboutToBeSetTarget: $LivingEntity): void;
        /**
         * @return the new target that this entity will begin to track.
         */
        getOriginalAboutToBeSetTarget(): $LivingEntity;
        getTargetType(): $LivingChangeTargetEvent$ILivingTargetType;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $LivingEntity, arg2: $LivingChangeTargetEvent$ILivingTargetType);
        get originalAboutToBeSetTarget(): $LivingEntity;
        get targetType(): $LivingChangeTargetEvent$ILivingTargetType;
    }
    /**
     * This Event is fired when a `MobEffect` is about to get removed from an Entity.
     * This Event is `ICancellableEvent`. If canceled, the effect will not be removed.
     * This Event does not have a result.
     */
    export class $MobEffectEvent$Remove extends $MobEffectEvent implements $ICancellableEvent {
        /**
         * @return the `EffectCure` the effect is being cured by. Null if the effect is not removed due to being cured
         */
        getCure(): $EffectCure;
        getEffect(): $Holder<$MobEffect>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(living: $LivingEntity, effect: $Holder_<$MobEffect>, cure: $EffectCure);
        constructor(living: $LivingEntity, effectInstance: $MobEffectInstance, cure: $EffectCure);
        get cure(): $EffectCure;
        get effect(): $Holder<$MobEffect>;
    }
    /**
     * Fires for each effect to allow modification or replacement of the particle options (you can set it to null to reset it to default).
     * 
     * This event is not `ICancellableEvent`.
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $EffectParticleModificationEvent extends $LivingEvent {
        getOriginalParticleOptions(): $ParticleOptions;
        setParticleOptions(options: $ParticleOptions_): void;
        setVisible(visible: boolean): void;
        getEffect(): $MobEffectInstance;
        isVisible(): boolean;
        getParticleOptions(): $ParticleOptions;
        constructor(entity: $LivingEntity, effect: $MobEffectInstance);
        get originalParticleOptions(): $ParticleOptions;
        get effect(): $MobEffectInstance;
    }
    /**
     * LivingJumpEvent is fired when an Entity jumps.
     * 
     * This event is fired whenever an Entity jumps in
     * `LivingEntity#jumpFromGround()`, `MagmaCube#jumpFromGround()`,
     * `Slime#jumpFromGround()`, `Camel#executeRidersJump()`,
     * and `AbstractHorse#executeRidersJump()`.
     * 
     * This event is fired via the `CommonHooks#onLivingJump(LivingEntity)`.
     * 
     * This event is not `ICancellableEvent`.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $LivingEvent$LivingJumpEvent extends $LivingEvent {
        constructor(e: $LivingEntity);
    }
    /**
     * LivingDamageEvent.Post is fired after health is modified on the entity.
     * 
     * The fields in this event represent the FINAL values of what was applied to the entity.
     * 
     * Also note that appropriate resources (like armor durability and absorption extra hearts) have already been consumed.
     * 
     * This event is fired whenever an Entity is damaged in `LivingEntity#actuallyHurt(DamageSource, float)`
     * 
     * This event is fired via `CommonHooks#onLivingDamagePost(LivingEntity, DamageContainer)`.
     */
    export class $LivingDamageEvent$Post extends $LivingDamageEvent {
        /**
         * @return the original damage when `LivingEntity#hurt` was invoked
         */
        getOriginalDamage(): number;
        /**
         * @return the original damage when `LivingEntity#hurt` was invoked
         */
        getShieldDamage(): number;
        /**
         * @return the `DamageSource` for this damage sequence
         */
        getSource(): $DamageSource;
        /**
         * @return the original damage when `LivingEntity#hurt` was invoked
         */
        getNewDamage(): number;
        /**
         * @return the original damage when `LivingEntity#hurt` was invoked
         */
        getBlockedDamage(): number;
        /**
         * @return the number of ticks this entity will be invulnerable after this sequence
         */
        getPostAttackInvulnerabilityTicks(): number;
        getReduction(reduction: $DamageContainer$Reduction_): number;
        constructor(entity: $LivingEntity, container: $DamageContainer);
        get originalDamage(): number;
        get shieldDamage(): number;
        get source(): $DamageSource;
        get newDamage(): number;
        get blockedDamage(): number;
        get postAttackInvulnerabilityTicks(): number;
    }
    /**
     * Fired when the ender dragon or wither attempts to destroy a block and when ever a zombie attempts to break a door. Basically a event version of `Block#canEntityDestroy(BlockState, BlockGetter, BlockPos, Entity)`
     * 
     * This event is `ICancellableEvent`.
     * 
     * If this event is canceled, the block will not be destroyed.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $LivingDestroyBlockEvent extends $LivingEvent implements $ICancellableEvent {
        getPos(): $BlockPos;
        getState(): $BlockState;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(entity: $LivingEntity, pos: $BlockPos_, state: $BlockState_);
        get pos(): $BlockPos;
        get state(): $BlockState;
    }
    /**
     * A living target type indicates what kind of system caused a change of
     * targets. For a list of default target types, take a look at
     * `LivingTargetType`.
     */
    export class $LivingChangeTargetEvent$ILivingTargetType {
    }
    export interface $LivingChangeTargetEvent$ILivingTargetType {
    }
    /**
     * LivingShieldBlockEvent is fired when an entity is hurt and vanilla checks if the entity is attempting
     * to block with a shield.
     * 
     * Cancelling this event will have the same impact as if the shield was not eligible to block.
     * 
     * The damage blocked cannot be set lower than zero or greater than the original value.
     * 
     * #### Note: This event fires whether the player is actively using a shield or not. Vanilla shield
     * blocking logic is captured and passed into the event via `#getOriginalBlock()`. If this is
     * true, The shield item stack "should" be available from `LivingEntity#getUseItem()` at least
     * for players.
     */
    export class $LivingShieldBlockEvent extends $LivingEvent implements $ICancellableEvent {
        /**
         * Sets the blocking state of the entity. By default, entities raising a shield,
         * facing the damage source, and not being hit by a source that bypasses shields
         * will be considered blocking. An entity can be considered blocking regardless
         * by supplying true to this.
         */
        setBlocked(isBlocked: boolean): void;
        getOriginalBlockedDamage(): number;
        getDamageSource(): $DamageSource;
        /**
         * Set how much damage is blocked by this action.
         * 
         * Note that initially the blocked amount is the entire attack.
         */
        setShieldDamage(blocked: number): void;
        getOriginalBlock(): boolean;
        getBlocked(): boolean;
        /**
         * Set how much damage is blocked by this action.
         * 
         * Note that initially the blocked amount is the entire attack.
         */
        setBlockedDamage(blocked: number): void;
        shieldDamage(): number;
        getBlockedDamage(): number;
        getDamageContainer(): $DamageContainer;
        /**
         * Sets the blocking state of the entity. By default, entities raising a shield,
         * facing the damage source, and not being hit by a source that bypasses shields
         * will be considered blocking. An entity can be considered blocking regardless
         * by supplying true to this.
         */
        setCanceled(isBlocked: boolean): void;
        isCanceled(): boolean;
        constructor(blocker: $LivingEntity, container: $DamageContainer, originalBlockedState: boolean);
        get originalBlockedDamage(): number;
        get damageSource(): $DamageSource;
        get originalBlock(): boolean;
        get damageContainer(): $DamageContainer;
    }
    /**
     * Fired after an item has fully finished being used.
     * The item has been notified that it was used, and the item/result stacks reflect after that state.
     * This means that when this is fired for a Potion, the potion effect has already been applied.
     * 
     * `LivingEntityUseItemEvent#item` is a copy of the item BEFORE it was used.
     * 
     * If you wish to cancel those effects, you should cancel one of the above events.
     * 
     * The result item stack is the stack that is placed in the player's inventory in replacement of the stack that is currently being used.
     */
    export class $LivingEntityUseItemEvent$Finish extends $LivingEntityUseItemEvent {
        setResultStack(result: $ItemStack_): void;
        getResultStack(): $ItemStack;
        constructor(entity: $LivingEntity, item: $ItemStack_, duration: number, result: $ItemStack_);
    }
    /**
     * Fired on both sides when a `LivingEntity`'s armor is dealt damage in
     * doHurtEquipment.
     */
    export class $ArmorHurtEvent extends $LivingEvent implements $ICancellableEvent {
        /**
         * Used internally to get the full map of `ItemStack`s to be hurt
         */
        getArmorMap(): $Map<$EquipmentSlot, $ArmorHurtEvent$ArmorEntry>;
        /**
         * @return the original damage before any event modifications
         */
        getOriginalDamage(slot: $EquipmentSlot_): number;
        getDamageSource(): $DamageSource;
        /**
         * Provides the Itemstack for the given slot. Hand slots will always return `ItemStack#EMPTY`
         */
        getArmorItemStack(slot: $EquipmentSlot_): $ItemStack;
        /**
         * @return the original damage before any event modifications
         */
        getNewDamage(slot: $EquipmentSlot_): number;
        /**
         * Sets new damage for the armor. Setting damage for empty slots will have no effect.
         */
        setNewDamage(slot: $EquipmentSlot_, damage: number): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $EnumMap<$EquipmentSlot_, $ArmorHurtEvent$ArmorEntry>, arg1: $LivingEntity, arg2: $DamageSource_);
        get armorMap(): $Map<$EquipmentSlot, $ArmorHurtEvent$ArmorEntry>;
        get damageSource(): $DamageSource;
    }
    /**
     * This event is fired when a mob checks for a valid spawn position, after `SpawnPlacements#checkSpawnRules` has been evaluated.
     * 
     * Conditions validated here include the following:
     * 
     * - Obstruction - mobs inside blocks or fluids.
     * - Pathfinding - if the spawn block is valid for pathfinding.
     * - Sea Level - Ocelots check if the position is above sea level.
     * - Spawn Block - Ocelots check if the below block is grass or leaves.
     * 
     * This event is only fired on the logical server.
     */
    export class $MobSpawnEvent$PositionCheck extends $MobSpawnEvent {
        /**
         * Retrieves the underlying `BaseSpawner` instance if this mob was created by a Mob Spawner of some form.
         * This is always null unless `#getSpawnType()` is `MobSpawnType#SPAWNER`, and may still be null even then.
         */
        getSpawner(): $BaseSpawner;
        /**
         * Retrieves the type of mob spawn that is happening.
         */
        getSpawnType(): $MobSpawnType;
        setResult(arg0: $MobSpawnEvent$PositionCheck$Result_): void;
        getResult(): $MobSpawnEvent$PositionCheck$Result;
        constructor(mob: $Mob, level: $ServerLevelAccessor, spawnType: $MobSpawnType_, spawner: $BaseSpawner);
        get spawner(): $BaseSpawner;
        get spawnType(): $MobSpawnType;
    }
    /**
     * LivingDamageEvent captures an entity's loss of health. At this stage in
     * the damage sequence, all reduction effects have been applied.
     * 
     * `Pre` allows for modification of the damage value before it is applied
     * to the entity's health.
     * 
     * `Post` contains an immutable representation of the entire damage sequence
     * and allows for reference to the values accrued at each step.
     */
    export class $LivingDamageEvent extends $LivingEvent {
    }
    /**
     * This event is fired when a `MobEffectInstance` expires on an entity.
     * This event is `ICancellableEvent`.
     * This event does not have a result.
     */
    export class $MobEffectEvent$Expired extends $MobEffectEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(living: $LivingEntity, effectInstance: $MobEffectInstance);
    }
}
