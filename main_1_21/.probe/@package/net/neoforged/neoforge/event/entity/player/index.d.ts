import { $Future } from "@package/java/util/concurrent";
import { $Entity, $ExperienceOrb, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $List, $List_ } from "@package/java/util";
import { $LogicalSide } from "@package/net/neoforged/fml";
import { $AdvancementHolder_, $AdvancementHolder, $AdvancementProgress } from "@package/net/minecraft/advancements";
import { $InteractionResult, $InteractionResultHolder, $InteractionHand, $ItemInteractionResult_, $InteractionHand_, $InteractionResult_, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $TriState_, $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $ClientInformation, $ServerLevel, $ServerPlayer, $ClientInformation_ } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $NonNullList, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $EnchantmentInstance } from "@package/net/minecraft/world/item/enchantment";
import { $Connection } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Enum, $Runnable_ } from "@package/java/lang";
import { $MerchantOffer } from "@package/net/minecraft/world/item/trading";
import { $File, $File_ } from "@package/java/io";
import { $GameType, $GameType_, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $ICancellableEvent, $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack, $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player$BedSleepingProblem_, $Player, $Player$BedSleepingProblem } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $ServerboundPlayerActionPacket$Action_ } from "@package/net/minecraft/network/protocol/game";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $AbstractVillager } from "@package/net/minecraft/world/entity/npc";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Gui$HeartType_, $Gui$HeartType } from "@package/net/minecraft/client/gui";
import { $DimensionTransition, $DimensionTransition_ } from "@package/net/minecraft/world/level/portal";
import { $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/neoforged/neoforge/event/entity/player" {
    /**
     * Fired by `HeartType#forPlayer` to allow mods to change the heart sprite which is displayed in the player's
     * health bar.
     * 
     * This event is fired only on the client.
     */
    export class $PlayerHeartTypeEvent extends $PlayerEvent {
        getOriginalType(): $Gui$HeartType;
        getType(): $Gui$HeartType;
        /**
         * Set the heart sprite which will be displayed on the `Player`'s health bar.
         */
        setType(type: $Gui$HeartType_): void;
        constructor(player: $Player, type: $Gui$HeartType_);
        get originalType(): $Gui$HeartType;
    }
    export class $PlayerContainerEvent extends $PlayerEvent {
        getContainer(): $AbstractContainerMenu;
        constructor(player: $Player, container: $AbstractContainerMenu);
        get container(): $AbstractContainerMenu;
    }
    export class $ItemTooltipEvent extends $PlayerEvent {
        getContext(): $Item$TooltipContext;
        /**
         * Use to determine if the advanced information on item tooltips is being shown, toggled by F3+H.
         */
        getFlags(): $TooltipFlag;
        /**
         * The `ItemStack` with the tooltip.
         */
        getItemStack(): $ItemStack;
        /**
         * The `ItemStack` tooltip.
         */
        getToolTip(): $List<$Component>;
        constructor(arg0: $ItemStack_, arg1: $Player, arg2: $List_<$Component_>, arg3: $TooltipFlag, arg4: $Item$TooltipContext);
        get context(): $Item$TooltipContext;
        get flags(): $TooltipFlag;
        get itemStack(): $ItemStack;
        get toolTip(): $List<$Component>;
    }
    /**
     * PlayerEvent is fired whenever an event involving a `Player` occurs.
     * 
     * If a method utilizes this `Event` as its parameter, the method will
     * receive every child event of this class.
     * 
     * All children of this event are fired on the `NeoForge#EVENT_BUS`.
     */
    export class $PlayerEvent extends $LivingEvent {
        constructor(player: $Player);
    }
    /**
     * The SweepAttackEvent is fired when a `Player` attacks a target, after the `CriticalHitEvent` has been fired.
     * 
     * This event can be used to force an attack to trigger a sweep, or to prevent a sweep from occurring.
     * 
     * This event is fired on both the logical client and logical server.
     */
    export class $SweepAttackEvent extends $PlayerEvent implements $ICancellableEvent {
        setSweeping(sweep: boolean): void;
        /**
         * Returns true if the attack would cause a sweep by utilizing the vanilla rules.
         * 
         * The vanilla rules are as follows. All of them must be true for a vanilla sweep to occur:
         * 
         * 1. The player's attack strength is greater than 90%.
         * 2. The attack is not a critical hit, or is a critical hit which does not disable the sweep attack.
         * 3. The player is on the ground.
         * 4. The distance the player has traveled this tick is less than their speed.
         * 5. The player's weapon supports sweep attacks via `ItemAbilities#SWORD_SWEEP`.
         */
        isVanillaSweep(): boolean;
        setCanceled(sweep: boolean): void;
        /**
         * Returns the target of the attack, which is guaranteed to be a valid attack target.
         */
        getTarget(): $Entity;
        /**
         * Returns true if the attack would cause a sweep by utilizing the vanilla rules.
         * 
         * The vanilla rules are as follows. All of them must be true for a vanilla sweep to occur:
         * 
         * 1. The player's attack strength is greater than 90%.
         * 2. The attack is not a critical hit, or is a critical hit which does not disable the sweep attack.
         * 3. The player is on the ground.
         * 4. The distance the player has traveled this tick is less than their speed.
         * 5. The player's weapon supports sweep attacks via `ItemAbilities#SWORD_SWEEP`.
         */
        isSweeping(): boolean;
        /**
         * Returns true if the attack would cause a sweep by utilizing the vanilla rules.
         * 
         * The vanilla rules are as follows. All of them must be true for a vanilla sweep to occur:
         * 
         * 1. The player's attack strength is greater than 90%.
         * 2. The attack is not a critical hit, or is a critical hit which does not disable the sweep attack.
         * 3. The player is on the ground.
         * 4. The distance the player has traveled this tick is less than their speed.
         * 5. The player's weapon supports sweep attacks via `ItemAbilities#SWORD_SWEEP`.
         */
        isCanceled(): boolean;
        constructor(player: $Player, target: $Entity, isVanillaSweep: boolean);
        get vanillaSweep(): boolean;
        get target(): $Entity;
    }
    /**
     * Fired when the player earns an advancement. An advancement is earned once its requirements are complete.
     * 
     * Note that advancements may be hidden from the player or used in background mechanics, such as recipe
     * advancements for unlocking recipes in the recipe book.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical server.
     */
    export class $AdvancementEvent$AdvancementEarnEvent extends $AdvancementEvent {
        constructor(player: $Player, earned: $AdvancementHolder_);
    }
    export class $PlayerEvent$ItemCraftedEvent extends $PlayerEvent {
        getCrafting(): $ItemStack;
        getInventory(): $Container;
        constructor(player: $Player, crafting: $ItemStack_, craftMatrix: $Container);
        get crafting(): $ItemStack;
        get inventory(): $Container;
    }
    /**
     * This event is called when a player fishes an item.
     * 
     * This event is `ICancellableEvent`
     * Canceling the event will cause the player to receive no items at all.
     * The hook will still take the damage specified
     */
    export class $ItemFishedEvent extends $PlayerEvent implements $ICancellableEvent {
        /**
         * Get the damage the rod will take.
         */
        getRodDamage(): number;
        /**
         * Specifies the amount of damage that the fishing rod should take.
         * This is not added to the pre-existing damage to be taken.
         */
        damageRodBy(rodDamage: number): void;
        /**
         * Use this to stuff related to the hook itself, like the position of the bobber.
         */
        getHookEntity(): $FishingHook;
        /**
         * Use this to get the items the player will receive.
         * You cannot use this to modify the drops the player will get.
         * If you want to affect the loot, you should use LootTables.
         */
        getDrops(): $NonNullList<$ItemStack>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(stacks: $List_<$ItemStack_>, rodDamage: number, hook: $FishingHook);
        get rodDamage(): number;
        get hookEntity(): $FishingHook;
        get drops(): $NonNullList<$ItemStack>;
    }
    /**
     * AttackEntityEvent is fired when a player attacks an Entity.
     * 
     * This event is fired whenever a player attacks an Entity in
     * `Player#attack(Entity)`.
     * 
     * `#target` contains the Entity that was damaged by the player.
     * 
     * This event is `ICancellableEvent`.
     * 
     * If this event is canceled, the player does not attack the Entity.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $AttackEntityEvent extends $PlayerEvent implements $ICancellableEvent {
        getTarget(): $Entity;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(player: $Player, target: $Entity);
        get target(): $Entity;
    }
    /**
     * This event fires when a player enchants an item, after `IItemExtension#applyEnchantments` has been called.
     * 
     * This event is only fired on the logical server.
     */
    export class $PlayerEnchantItemEvent extends $PlayerEvent {
        getEnchantedItem(): $ItemStack;
        getEnchantments(): $List<$EnchantmentInstance>;
        constructor(player: $Player, enchantedItem: $ItemStack_, enchantments: $List_<$EnchantmentInstance>);
        get enchantedItem(): $ItemStack;
        get enchantments(): $List<$EnchantmentInstance>;
    }
    /**
     * This event is fired when the player is waking up.
     * 
     * This is merely for purposes of listening for this to happen.
     * 
     * There is nothing that can be manipulated with this event.
     */
    export class $PlayerWakeUpEvent extends $PlayerEvent {
        /**
         * Used for the 'wake up animation'.
         * This is false if the player is considered 'sleepy' and the overlay should slowly fade away.
         */
        wakeImmediately(): boolean;
        /**
         * Used for the 'wake up animation'.
         * This is false if the player is considered 'sleepy' and the overlay should slowly fade away.
         */
        updateLevel(): boolean;
        constructor(player: $Player, wakeImmediately: boolean, updateLevel: boolean);
    }
    /**
     * ArrowNockEvent is fired when a player begins using a bow.
     * 
     * This event is fired whenever a player begins using a bow in
     * `BowItem#use(Level, Player, InteractionHand)`.
     * 
     * This event is `ICancellableEvent`.
     * Cancelling the event causes the action to fail with `InteractionResult#FAIL`.
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $ArrowNockEvent extends $PlayerEvent implements $ICancellableEvent {
        setAction(action: $InteractionResultHolder<$ItemStack_>): void;
        getHand(): $InteractionHand;
        getBow(): $ItemStack;
        hasAmmo(): boolean;
        getLevel(): $Level;
        getAction(): $InteractionResultHolder<$ItemStack>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(player: $Player, item: $ItemStack_, hand: $InteractionHand_, level: $Level_, hasAmmo: boolean);
        get hand(): $InteractionHand;
        get bow(): $ItemStack;
        get level(): $Level;
    }
    /**
     * This event is fired on both sides before the player triggers `Item#use(Level, Player, InteractionHand)`.
     * Note that this is NOT fired if the player is targeting a block `RightClickBlock` or entity `EntityInteract` `EntityInteractSpecific`.
     * 
     * Let result be the return value of `Item#use(Level, Player, InteractionHand)`, or `#cancellationResult` if the event is cancelled.
     * If we are on the client and result is not `InteractionResult#SUCCESS`, the client will then continue to other hands.
     */
    export class $PlayerInteractEvent$RightClickItem extends $PlayerInteractEvent implements $ICancellableEvent {
        /**
         * Set the InteractionResult that will be returned to vanilla if the event is cancelled, instead of calling the relevant
         * method of the event.
         */
        setCancellationResult(result: $InteractionResult_): void;
        getCancellationResult(): $InteractionResult;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(player: $Player, hand: $InteractionHand_);
    }
    /**
     * This event is fired when a player attacks an entity in `Player#attack(Entity)`.
     * 
     * It can be used to change the critical hit status and the critical damage multiplier.
     * Additionally, this event allows controlling if the critical hit will impact sweep conditions.
     * 
     * This event is fired on both the logical client and logical server.
     */
    export class $CriticalHitEvent extends $PlayerEvent {
        /**
         * @return if the attack will critically hit
         */
        isVanillaCritical(): boolean;
        /**
         * Sets the damage multiplier for the critical hit. Not used if `#isCriticalHit()` is false.
         * 
         * Changing the damage modifier to zero does not guarantee that the attack does zero damage.
         */
        setDamageMultiplier(dmgMultiplier: number): void;
        /**
         * Changes the critical hit state.
         */
        setCriticalHit(isCriticalHit: boolean): void;
        /**
         * The damage multiplier is applied to the base attack's damage if the attack critically hits.
         * 
         * A damage multiplier of 1.0 will not change the damage, a value of 1.5 will increase the damage by 50%, and so on.
         */
        getVanillaMultiplier(): number;
        /**
         * Changes the critical hit state.
         */
        setDisableSweep(isCriticalHit: boolean): void;
        /**
         * @return the entity that was attacked by the player
         */
        getTarget(): $Entity;
        /**
         * @return if the attack will critically hit
         */
        isCriticalHit(): boolean;
        /**
         * The damage multiplier is applied to the base attack's damage if the attack critically hits.
         * 
         * A damage multiplier of 1.0 will not change the damage, a value of 1.5 will increase the damage by 50%, and so on.
         */
        getDamageMultiplier(): number;
        /**
         * @return if the attack will critically hit
         */
        disableSweep(): boolean;
        /**
         * Fire via `CommonHooks#fireCriticalHit(Player, Entity, boolean, float)`
         */
        constructor(player: $Player, target: $Entity, dmgMultiplier: number, isCriticalHit: boolean);
        get vanillaCritical(): boolean;
        get vanillaMultiplier(): number;
        get target(): $Entity;
    }
    export class $PlayerInteractEvent$LeftClickBlock$Action extends $Enum<$PlayerInteractEvent$LeftClickBlock$Action> {
        static values(): $PlayerInteractEvent$LeftClickBlock$Action[];
        static convert(arg0: $ServerboundPlayerActionPacket$Action_): $PlayerInteractEvent$LeftClickBlock$Action;
        static valueOf(arg0: string): $PlayerInteractEvent$LeftClickBlock$Action;
        static ABORT: $PlayerInteractEvent$LeftClickBlock$Action;
        static STOP: $PlayerInteractEvent$LeftClickBlock$Action;
        static CLIENT_HOLD: $PlayerInteractEvent$LeftClickBlock$Action;
        static START: $PlayerInteractEvent$LeftClickBlock$Action;
    }
    /**
     * Values that may be interpreted as {@link $PlayerInteractEvent$LeftClickBlock$Action}.
     */
    export type $PlayerInteractEvent$LeftClickBlock$Action_ = "start" | "stop" | "abort" | "client_hold";
    /**
     * This event is fired after the player collides with an experience orb, but before the player has been given the experience.
     * It can be cancelled, and no further processing will be done.
     */
    export class $PlayerXpEvent$PickupXp extends $PlayerXpEvent implements $ICancellableEvent {
        getOrb(): $ExperienceOrb;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(player: $Player, orb: $ExperienceOrb);
        get orb(): $ExperienceOrb;
    }
    /**
     * This event is fired from `PhantomSpawner#tick` when phantoms would attempt to be spawned, with one event fired per player.
     * It allows controlling if a spawn attempt will be made for the particular player, but cannot guarantee that a Phantom will be spawned.
     * 
     * This event is only fired on the logical server.
     */
    export class $PlayerSpawnPhantomsEvent extends $PlayerEvent {
        getPhantomsToSpawn(): number;
        /**
         * Sets the number of phantoms to be spawned.
         */
        setPhantomsToSpawn(phantomsToSpawn: number): void;
        /**
         * Checks if a spawn attempt should be made by checking the current result and evaluating the vanilla conditions if necessary.
         * 
         * Does not check `DifficultyInstance#isHarderThan(float)` or the player's `Stats#TIME_SINCE_REST`, as these are checked later.
         */
        shouldSpawnPhantoms(level: $ServerLevel, pos: $BlockPos_): boolean;
        setResult(arg0: $PlayerSpawnPhantomsEvent$Result_): void;
        getResult(): $PlayerSpawnPhantomsEvent$Result;
        constructor(player: $Player, phantomsToSpawn: number);
    }
    /**
     * Fires on both the client and server thread when a player interacts with a block.
     * 
     * The event fires in three phases, corresponding with the three interaction behaviors:
     * `IItemExtension#onItemUseFirst`,
     * `BlockBehaviour#useItemOn`,
     * and `Item#useOn`.
     * 
     * The event fires after the interaction logic decides to run the particular interaction behavior,
     * as opposed to `RightClickBlock`
     * which fires once-per-right-click, before the behavior-choosing logic.
     * 
     * If the event is cancelled via `#cancelWithResult`,
     * then the normal interaction behavior for that phase will not run,
     * and the specified `InteractionResult` will be returned instead.
     */
    export class $UseItemOnBlockEvent extends $Event implements $ICancellableEvent {
        /**
         * If the interaction was on an entity, will be a BlockPos centered on the entity.
         * If the interaction was on a block, will be the position of that block.
         * Otherwise, will be a BlockPos centered on the player.
         * Will never be null.
         */
        getPos(): $BlockPos;
        getHand(): $InteractionHand;
        /**
         * Cancels the use interaction (preventing the block or item's use behavior from running) and provides the
         * specified result to the interaction logic instead.
         * 
         * Invoke this if you intend to prevent the default interaction behavior and replace it with your own.
         */
        setCancellationResult(result: $ItemInteractionResult_): void;
        getFace(): $Direction;
        getUseOnContext(): $UseOnContext;
        getUsePhase(): $UseItemOnBlockEvent$UsePhase;
        /**
         * Cancels the use interaction (preventing the block or item's use behavior from running) and provides the
         * specified result to the interaction logic instead.
         * 
         * Invoke this if you intend to prevent the default interaction behavior and replace it with your own.
         */
        cancelWithResult(result: $ItemInteractionResult_): void;
        getCancellationResult(): $ItemInteractionResult;
        getPlayer(): $Player;
        getLevel(): $Level;
        getSide(): $LogicalSide;
        getItemStack(): $ItemStack;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $UseOnContext, arg1: $UseItemOnBlockEvent$UsePhase_);
        get pos(): $BlockPos;
        get hand(): $InteractionHand;
        get face(): $Direction;
        get useOnContext(): $UseOnContext;
        get usePhase(): $UseItemOnBlockEvent$UsePhase;
        get player(): $Player;
        get level(): $Level;
        get side(): $LogicalSide;
        get itemStack(): $ItemStack;
    }
    /**
     * Fired when a player trades with an `AbstractVillager`.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical server.
     */
    export class $TradeWithVillagerEvent extends $PlayerEvent {
        /**
         * @return the `MerchantOffer` selected by the player to trade with
         */
        getMerchantOffer(): $MerchantOffer;
        /**
         * @return the villager the player traded with
         */
        getAbstractVillager(): $AbstractVillager;
        constructor(player: $Player, offer: $MerchantOffer, abstractVillager: $AbstractVillager);
        get merchantOffer(): $MerchantOffer;
        get abstractVillager(): $AbstractVillager;
    }
    /**
     * The player is being loaded from the world save. Note that the
     * player won't have been added to the world yet. Intended to
     * allow mods to load an additional file from the players directory
     * containing additional mod related player data.
     */
    export class $PlayerEvent$LoadFromFile extends $PlayerEvent {
        /**
         * The directory where player data is being stored. Use this
         * to locate your mod additional file.
         */
        getPlayerDirectory(): $File;
        /**
         * The UUID is the standard for player related file storage.
         * It is broken out here for convenience for quick file generation.
         */
        getPlayerUUID(): string;
        /**
         * Construct and return a recommended file for the supplied suffix
         */
        getPlayerFile(suffix: string): $File;
        constructor(player: $Player, originDirectory: $File_, playerUUID: string);
        get playerDirectory(): $File;
        get playerUUID(): string;
    }
    /**
     * This event is fired when an `ItemEntity` on the ground has been picked up by the player
     * and after the item is added to the player's inventory.
     * 
     * This event only fires if part of the item was picked up by the player.
     * 
     * If the remaining item stack is empty, the item entity will be discarded.
     * 
     * This event is only fired on the logical server.
     */
    export class $ItemEntityPickupEvent$Post extends $ItemEntityPickupEvent {
        /**
         * Returns a copy of the original stack, before it was added to the player's inventory.
         * Changes to this item stack have no effect on any further processing.
         */
        getOriginalStack(): $ItemStack;
        /**
         * Returns a copy of the original stack, before it was added to the player's inventory.
         * Changes to this item stack have no effect on any further processing.
         */
        getCurrentStack(): $ItemStack;
        constructor(player: $Player, item: $ItemEntity, originalStack: $ItemStack_);
        get originalStack(): $ItemStack;
        get currentStack(): $ItemStack;
    }
    /**
     * This event is fired when a player collides with an `ItemEntity` on the ground.
     * It can be used to determine if the item may be picked up by the player.
     * 
     * If the pickup is successful (either by force or by default rules) `Post` will be fired.
     * 
     * This event is only fired on the logical server.
     */
    export class $ItemEntityPickupEvent$Pre extends $ItemEntityPickupEvent {
        /**
         * @return the current pickup state
         */
        canPickup(): $TriState;
        /**
         * Changes if the player may pickup the item. Setting `TriState#TRUE` or `TriState#FALSE` will allow/deny the pickup respectively.
         * 
         * The default rules require that `ItemEntity#pickupDelay` is zero, and that `ItemEntity#target` matches (or is null).
         */
        setCanPickup(state: $TriState_): void;
        constructor(player: $Player, item: $ItemEntity);
    }
    /**
     * This event is fired when a player's spawn point is set or reset.
     * 
     * The event can be canceled, which will prevent the spawn point from being changed.
     */
    export class $PlayerSetSpawnEvent extends $PlayerEvent implements $ICancellableEvent {
        /**
         * The new spawn position, or null if the spawn position is being reset.
         */
        getNewSpawn(): $BlockPos;
        getSpawnLevel(): $ResourceKey<$Level>;
        isForced(): boolean;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(player: $Player, spawnLevel: $ResourceKey_<$Level>, newSpawn: $BlockPos_, forced: boolean);
        get newSpawn(): $BlockPos;
        get spawnLevel(): $ResourceKey<$Level>;
        get forced(): boolean;
    }
    /**
     * The player is being saved to the world store. Note that the
     * player may be in the process of logging out or otherwise departing
     * from the world. Don't assume it's association with the world.
     * This allows mods to load an additional file from the players directory
     * containing additional mod related player data.
     * 
     * Use this event to save the additional mod related player data to the world.
     * 
     * *WARNING*: Do not overwrite the player's .dat file here. You will
     * corrupt the world state.
     */
    export class $PlayerEvent$SaveToFile extends $PlayerEvent {
        /**
         * The directory where player data is being stored. Use this
         * to locate your mod additional file.
         */
        getPlayerDirectory(): $File;
        /**
         * The UUID is the standard for player related file storage.
         * It is broken out here for convenience for quick file generation.
         */
        getPlayerUUID(): string;
        /**
         * Construct and return a recommended file for the supplied suffix
         */
        getPlayerFile(suffix: string): $File;
        constructor(player: $Player, originDirectory: $File_, playerUUID: string);
        get playerDirectory(): $File;
        get playerUUID(): string;
    }
    /**
     * BreakSpeed is fired when a player attempts to harvest a block.
     * 
     * This event is fired whenever a player attempts to harvest a block in
     * `Player#getDigSpeed(BlockState, BlockPos)`.
     * 
     * This event is fired via the `EventHooks#getBreakSpeed(Player, BlockState, float, BlockPos)`.
     * 
     * `#state` contains the block being broken.
     * 
     * `#originalSpeed` contains the original speed at which the player broke the block.
     * 
     * `#newSpeed` contains the newSpeed at which the player will break the block.
     * 
     * `#pos` contains the coordinates at which this event is occurring. Optional value.
     * 
     * This event is `ICancellableEvent`.
     * 
     * If it is canceled, the player is unable to break the block.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $PlayerEvent$BreakSpeed extends $PlayerEvent implements $ICancellableEvent {
        setNewSpeed(newSpeed: number): void;
        getNewSpeed(): number;
        getOriginalSpeed(): number;
        getState(): $BlockState;
        getPosition(): ($BlockPos) | undefined;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(player: $Player, state: $BlockState_, original: number, pos: $BlockPos_);
        get originalSpeed(): number;
        get state(): $BlockState;
        get position(): ($BlockPos) | undefined;
    }
    /**
     * Fired by `PlayerList#respawn(ServerPlayer, boolean)` before the server respawns a player.
     * This may be used to change the `ServerLevel` the player respawns in, as well as their respawn position.
     * This event is fired after `BlockState#getRespawnPosition(EntityType, LevelReader, BlockPos, float, LivingEntity)` is called.
     * 
     * This event is only fired on the logical server.
     */
    export class $PlayerRespawnPositionEvent extends $PlayerEvent {
        /**
         * If the respawn position of the original player will be copied to the fresh player via `ServerPlayer#copyRespawnPosition(ServerPlayer)`.
         * 
         * This defaults to true if the original dimension transition
         * was not missing a respawn block.
         * 
         * This has no impact on the selected position for the current respawn, but controls if the player will (for example) retain their bed as their set respawn position.
         */
        copyOriginalSpawnPosition(): boolean;
        getDimensionTransition(): $DimensionTransition;
        /**
         * Set the dimension transition for where the player will respawn
         */
        setDimensionTransition(dimensionTransition: $DimensionTransition_): void;
        /**
         * Set the level the player will respawn into using a `ResourceKey`.
         */
        setRespawnLevel(respawnLevelResourceKey: $ResourceKey_<$Level>): void;
        getOriginalDimensionTransition(): $DimensionTransition;
        /**
         * Changes if the original player's respawn position will be copied to the fresh player via `ServerPlayer#copyRespawnPosition(ServerPlayer)`.
         * 
         * If you wish to modify the set respawn position of the fresh player (for future respawns, not the current respawn), you can
         * change the respawn position of the current player and set this value to true.
         */
        setCopyOriginalSpawnPosition(copyOriginalSpawnPosition: boolean): void;
        /**
         * If the respawn position of the original player will be copied to the fresh player via `ServerPlayer#copyRespawnPosition(ServerPlayer)`.
         * 
         * This defaults to true if the original dimension transition
         * was not missing a respawn block.
         * 
         * This has no impact on the selected position for the current respawn, but controls if the player will (for example) retain their bed as their set respawn position.
         */
        isFromEndFight(): boolean;
        constructor(player: $ServerPlayer, dimensionTransition: $DimensionTransition_, fromEndFight: boolean);
        set respawnLevel(value: $ResourceKey_<$Level>);
        get originalDimensionTransition(): $DimensionTransition;
        get fromEndFight(): boolean;
    }
    export class $PlayerContainerEvent$Close extends $PlayerContainerEvent {
        constructor(player: $Player, container: $AbstractContainerMenu);
    }
    /**
     * PlayerDestroyItemEvent is fired when a player destroys an item.
     * 
     * This event is fired whenever a player destroys an item in
     * `MultiPlayerGameMode#destroyBlock(BlockPos)`,
     * `MultiPlayerGameMode#useItem(Player, InteractionHand)`,
     * `MultiPlayerGameMode#useItemOn(LocalPlayer, InteractionHand, BlockHitResult)` ,
     * `Player#attack(Entity)`,
     * `Player#hurtCurrentlyUsedShield(float)`,
     * `Player#interactOn(Entity, InteractionHand)`,
     * `CommonHooks#getCraftingRemainingItem(ItemStack)`,
     * `ServerPlayerGameMode#useItem(ServerPlayer, Level, ItemStack, InteractionHand)` ,
     * `ServerPlayerGameMode#useItemOn(ServerPlayer, Level, ItemStack, InteractionHand, BlockHitResult)`
     * and `ServerPlayerGameMode#destroyBlock(BlockPos)`.
     * 
     * `#original` contains the original ItemStack before the item was destroyed.
     * 
     * (@link #hand) contains the hand that the current item was held in.
     * 
     * This event is not `ICancellableEvent`.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired from `EventHooks#onPlayerDestroyItem(Player, ItemStack, InteractionHand)`.
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $PlayerDestroyItemEvent extends $PlayerEvent {
        getHand(): $InteractionHand;
        getOriginal(): $ItemStack;
        constructor(player: $Player, original: $ItemStack_, hand: $InteractionHand_);
        get hand(): $InteractionHand;
        get original(): $ItemStack;
    }
    /**
     * ArrowLooseEvent is fired when a player stops using a bow.
     * 
     * This event is fired whenever a player stops using a bow in
     * `BowItem#releaseUsing(ItemStack, Level, LivingEntity, int)`.
     * 
     * `#bow` contains the ItemBow ItemStack that was used in this event.
     * 
     * `#charge` contains the value for how much the player had charged before stopping the shot.
     * 
     * This event is `ICancellableEvent`.
     * 
     * If this event is canceled, the player does not stop using the bow.
     * 
     * For crossbows, the charge will always be 1; Set it to -1 in order to prevent firing the arrow.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $ArrowLooseEvent extends $PlayerEvent implements $ICancellableEvent {
        getCharge(): number;
        setCharge(charge: number): void;
        getBow(): $ItemStack;
        hasAmmo(): boolean;
        getLevel(): $Level;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(player: $Player, bow: $ItemStack_, level: $Level_, charge: number, hasAmmo: boolean);
        get bow(): $ItemStack;
        get level(): $Level;
    }
    /**
     * TabListNameFormat is fired when a player's display name for the tablist is retrieved.
     * 
     * This event is fired whenever a player's display name for the tablist is retrieved in
     * `ServerPlayer#getTabListDisplayName()` or `ServerPlayer#refreshTabListName()`.
     * 
     * This event is fired via the `EventHooks#getPlayerTabListDisplayName(Player)`.
     * 
     * `#getDisplayName()` contains the display name of the player or null if the client should determine the display name itself.
     * 
     * This event is not `ICancellableEvent`.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $PlayerEvent$TabListNameFormat extends $PlayerEvent {
        setDisplayName(displayName: $Component_): void;
        getDisplayName(): $Component;
        constructor(player: $Player);
    }
    export class $PlayerEvent$PlayerLoggedOutEvent extends $PlayerEvent {
        constructor(player: $Player);
    }
    /**
     * Fired when the EntityPlayer is cloned, typically caused by the impl sending a RESPAWN_PLAYER event.
     * Either caused by death, or by traveling from the End to the overworld.
     */
    export class $PlayerEvent$Clone extends $PlayerEvent {
        /**
         * The old EntityPlayer that this new entity is a clone of.
         */
        getOriginal(): $Player;
        /**
         * True if this event was fired because the player died.
         * False if it was fired because the entity switched dimensions.
         */
        isWasDeath(): boolean;
        constructor(_new: $Player, oldPlayer: $Player, wasDeath: boolean);
        get original(): $Player;
        get wasDeath(): boolean;
    }
    /**
     * This event is fired when a player left clicks while targeting a block.
     * This event controls which of `Block#attack(BlockState, Level, BlockPos, Player)` and/or the item harvesting methods will be called
     * Canceling the event will cause none of the above noted methods to be called.
     * There are various results to this event, see the getters below.
     * 
     * This event is fired at various points during left clicking on blocks, at both the start and end on the server, and at the start and while held down on the client.
     * Use `#getAction()` to check which type of action triggered this event.
     * 
     * Note that if the event is canceled and the player holds down left mouse, the event will continue to fire.
     * This is due to how vanilla calls the left click handler methods.
     * 
     * Also note that creative mode directly breaks the block without running any other logic.
     * Therefore, in creative mode, `#setUseBlock` and `#setUseItem` have no effect.
     */
    export class $PlayerInteractEvent$LeftClickBlock extends $PlayerInteractEvent implements $ICancellableEvent {
        getUseBlock(): $TriState;
        setUseBlock(triggerBlock: $TriState_): void;
        setUseItem(triggerBlock: $TriState_): void;
        setCanceled(canceled: boolean): void;
        getAction(): $PlayerInteractEvent$LeftClickBlock$Action;
        getUseItem(): $TriState;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $BlockPos_, arg2: $Direction_, arg3: $PlayerInteractEvent$LeftClickBlock$Action_);
        get action(): $PlayerInteractEvent$LeftClickBlock$Action;
    }
    export class $PlayerSpawnPhantomsEvent$Result extends $Enum<$PlayerSpawnPhantomsEvent$Result> {
        static values(): $PlayerSpawnPhantomsEvent$Result[];
        static valueOf(arg0: string): $PlayerSpawnPhantomsEvent$Result;
        static DENY: $PlayerSpawnPhantomsEvent$Result;
        static ALLOW: $PlayerSpawnPhantomsEvent$Result;
        static DEFAULT: $PlayerSpawnPhantomsEvent$Result;
    }
    /**
     * Values that may be interpreted as {@link $PlayerSpawnPhantomsEvent$Result}.
     */
    export type $PlayerSpawnPhantomsEvent$Result_ = "allow" | "default" | "deny";
    export class $PlayerEvent$ItemSmeltedEvent extends $PlayerEvent {
        getSmelting(): $ItemStack;
        constructor(player: $Player, crafting: $ItemStack_);
        get smelting(): $ItemStack;
    }
    /**
     * This event is fired on both sides when the player right clicks an entity.
     * It is responsible for all general entity interactions.
     * 
     * This event is fired only if the result of the above `EntityInteractSpecific` is not `InteractionResult#SUCCESS`.
     * This event's state affects whether `Entity#interact(Player, InteractionHand)` and
     * `Item#interactLivingEntity(ItemStack, Player, LivingEntity, InteractionHand)` are called.
     * 
     * Let result be `InteractionResult#SUCCESS` if `Entity#interact(Player, InteractionHand)` or
     * `Item#interactLivingEntity(ItemStack, Player, LivingEntity, InteractionHand)` return true,
     * or `#cancellationResult` if the event is cancelled.
     * If we are on the client and result is not `InteractionResult#SUCCESS`, the client will then try `RightClickItem`.
     */
    export class $PlayerInteractEvent$EntityInteract extends $PlayerInteractEvent implements $ICancellableEvent {
        /**
         * Set the InteractionResult that will be returned to vanilla if the event is cancelled, instead of calling the relevant
         * method of the event.
         */
        setCancellationResult(result: $InteractionResult_): void;
        getCancellationResult(): $InteractionResult;
        getTarget(): $Entity;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(player: $Player, hand: $InteractionHand_, target: $Entity);
        get target(): $Entity;
    }
    /**
     * This event is fired on both sides whenever the player right clicks while targeting a block.
     * 
     * This event controls which of `Item#onItemUseFirst`, `Block#use(BlockState, Level, BlockPos, Player, InteractionHand, BlockHitResult)`,
     * and `Item#useOn(UseOnContext)` will be called.
     * 
     * Canceling the event will cause none of the above three to be called.
     * 
     * Let result be the first non-pass return value of the above three methods, or pass, if they all pass.
     * 
     * Or `#cancellationResult` if the event is cancelled.
     * 
     * If result equals `InteractionResult#PASS`, we proceed to `RightClickItem`.
     * 
     * There are various results to this event, see the getters below.
     * 
     * Note that handling things differently on the client vs server may cause desynchronizations!
     */
    export class $PlayerInteractEvent$RightClickBlock extends $PlayerInteractEvent implements $ICancellableEvent {
        getUseBlock(): $TriState;
        /**
         * FALSE: `Block#use(BlockState, Level, BlockPos, Player, InteractionHand, BlockHitResult)` will never be called.
         * 
         * DEFAULT: `Block#use(BlockState, Level, BlockPos, Player, InteractionHand, BlockHitResult)` will be called if `Item#onItemUseFirst` passes.
         * 
         * Note that default activation can be blocked if the user is sneaking and holding an item that does not return true to `Item#doesSneakBypassUse`.
         * 
         * TRUE: `Block#updateOrDestroy(BlockState, BlockState, LevelAccessor, BlockPos, int, int)` will always be called, unless `Item#onItemUseFirst` does not pass.
         */
        setUseBlock(triggerBlock: $TriState_): void;
        /**
         * FALSE: `Block#use(BlockState, Level, BlockPos, Player, InteractionHand, BlockHitResult)` will never be called.
         * 
         * DEFAULT: `Block#use(BlockState, Level, BlockPos, Player, InteractionHand, BlockHitResult)` will be called if `Item#onItemUseFirst` passes.
         * 
         * Note that default activation can be blocked if the user is sneaking and holding an item that does not return true to `Item#doesSneakBypassUse`.
         * 
         * TRUE: `Block#updateOrDestroy(BlockState, BlockState, LevelAccessor, BlockPos, int, int)` will always be called, unless `Item#onItemUseFirst` does not pass.
         */
        setUseItem(triggerBlock: $TriState_): void;
        getHitVec(): $BlockHitResult;
        /**
         * Set the InteractionResult that will be returned to vanilla if the event is cancelled, instead of calling the relevant
         * method of the event.
         */
        setCancellationResult(result: $InteractionResult_): void;
        setCanceled(canceled: boolean): void;
        getCancellationResult(): $InteractionResult;
        getUseItem(): $TriState;
        isCanceled(): boolean;
        constructor(player: $Player, hand: $InteractionHand_, pos: $BlockPos_, hitVec: $BlockHitResult);
        get hitVec(): $BlockHitResult;
    }
    /**
     * This event is fired when the game checks if a sleeping entity may continue sleeping.
     * 
     * It can be used to overwrite the vanilla check, forcing the entity to continue or stop sleeping.
     * 
     * This event is only fired on the logical server.
     */
    export class $CanContinueSleepingEvent extends $LivingEvent {
        getProblem(): $Player$BedSleepingProblem;
        /**
         * @return if the sleeping entity may continue sleeping
         */
        mayContinueSleeping(): boolean;
        /**
         * Sets if the sleeping entity may continue sleeping.
         * By default, the entity may continue sleeping if there was not a problem detected.
         */
        setContinueSleeping(sleeping: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $Player$BedSleepingProblem_);
        get problem(): $Player$BedSleepingProblem;
        set continueSleeping(value: boolean);
    }
    /**
     * Fired when an Entity is stopped to be "tracked" by this player (the player no longer receives updates about this entity, e.g. motion).
     */
    export class $PlayerEvent$StopTracking extends $PlayerEvent {
        /**
         * The Entity no longer being tracked.
         */
        getTarget(): $Entity;
        constructor(player: $Player, target: $Entity);
        get target(): $Entity;
    }
    /**
     * NameFormat is fired when a player's display name is retrieved.
     * 
     * This event is fired whenever a player's name is retrieved in
     * `Player#getDisplayName()` or `Player#refreshDisplayName()`.
     * 
     * This event is fired via the `EventHooks#getPlayerDisplayName(Player, Component)`.
     * 
     * `#username` contains the username of the player.
     * `#displayname` contains the display name of the player.
     * 
     * This event is not `ICancellableEvent`.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $PlayerEvent$NameFormat extends $PlayerEvent {
        getDisplayname(): $Component;
        setDisplayname(displayname: $Component_): void;
        getUsername(): $Component;
        constructor(player: $Player, username: $Component_);
        get username(): $Component;
    }
    export class $PlayerEvent$PlayerLoggedInEvent extends $PlayerEvent {
        constructor(player: $Player);
    }
    /**
     * Fired when the player removes a "repaired" item from the Anvil's Output slot.
     * 
     * breakChance specifies as a percentage the chance that the anvil will be "damaged" when used.
     * 
     * ItemStacks are the inputs/output from the anvil. They cannot be edited.
     */
    export class $AnvilRepairEvent extends $PlayerEvent {
        getBreakChance(): number;
        setBreakChance(breakChance: number): void;
        /**
         * Get the output result from the anvil
         */
        getOutput(): $ItemStack;
        /**
         * Get the output result from the anvil
         */
        getLeft(): $ItemStack;
        /**
         * Get the output result from the anvil
         */
        getRight(): $ItemStack;
        constructor(player: $Player, left: $ItemStack_, right: $ItemStack_, output: $ItemStack_);
        get output(): $ItemStack;
        get left(): $ItemStack;
        get right(): $ItemStack;
    }
    /**
     * This event will fire when the player is opped or deopped.
     * 
     * This event is cancelable which will stop the op or deop from happening.
     */
    export class $PermissionsChangedEvent extends $PlayerEvent implements $ICancellableEvent {
        getNewLevel(): number;
        getOldLevel(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(player: $ServerPlayer, newLevel: number, oldLevel: number);
        get newLevel(): number;
        get oldLevel(): number;
    }
    /**
     * This event is fired when the player's experience level changes through the `Player#giveExperienceLevels(int)` method.
     * It can be cancelled, and no further processing will be done.
     */
    export class $PlayerXpEvent$LevelChange extends $PlayerXpEvent implements $ICancellableEvent {
        setLevels(levels: number): void;
        getLevels(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(player: $Player, levels: number);
    }
    /**
     * Fired when the game type of a server player is changed to a different value than what it was previously. Eg Creative to Survival, not Survival to Survival.
     * If the event is cancelled the game mode of the player is not changed and the value of `newGameMode` is ignored.
     */
    export class $PlayerEvent$PlayerChangeGameModeEvent extends $PlayerEvent implements $ICancellableEvent {
        getCurrentGameMode(): $GameType;
        /**
         * Sets the game mode the player will be changed to if this event is not cancelled.
         */
        setNewGameMode(newGameMode: $GameType_): void;
        getNewGameMode(): $GameType;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(player: $Player, currentGameMode: $GameType_, newGameMode: $GameType_);
        get currentGameMode(): $GameType;
    }
    /**
     * PlayerXpEvent is fired whenever an event involving player experience occurs.
     * 
     * If a method utilizes this `Event` as its parameter, the method will
     * receive every child event of this class.
     * 
     * All children of this event are fired on the `NeoForge#EVENT_BUS`.
     */
    export class $PlayerXpEvent extends $PlayerEvent {
        constructor(player: $Player);
    }
    /**
     * Fired when the player's progress on an advancement criterion is granted or revoked.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical server.
     */
    export class $AdvancementEvent$AdvancementProgressEvent extends $AdvancementEvent {
        getProgressType(): $AdvancementEvent$AdvancementProgressEvent$ProgressType;
        /**
         * @return the progress of the advancement
         */
        getAdvancementProgress(): $AdvancementProgress;
        /**
         * @return name of the criterion that was progressed
         */
        getCriterionName(): string;
        constructor(player: $Player, progressed: $AdvancementHolder_, advancementProgress: $AdvancementProgress, criterionName: string, progressType: $AdvancementEvent$AdvancementProgressEvent$ProgressType_);
        get progressType(): $AdvancementEvent$AdvancementProgressEvent$ProgressType;
        get advancementProgress(): $AdvancementProgress;
        get criterionName(): string;
    }
    /**
     * Parent class of the two events that fire when a `Player` collides with an `ItemEntity`.
     */
    export class $ItemEntityPickupEvent extends $Event {
        /**
         * @return the player who collided with the item
         */
        getPlayer(): $Player;
        /**
         * Returns the `ItemEntity` that was collided with.
         * 
         * Changes to this item entity will impact further processing by the game and other event handlers.
         * 
         * Modification of the stored stack `ItemEntity#getItem()` is legal, but consumers of this event
         * must not call `ItemEntity#setItem(ItemStack)`, as it will incur undefined behavior.
         */
        getItemEntity(): $ItemEntity;
        constructor(player: $Player, item: $ItemEntity);
        get player(): $Player;
        get itemEntity(): $ItemEntity;
    }
    /**
     * This event is fired on the server when a connection has started the Forge handshake,
     * Forge will wait for all enqueued work to be completed before proceeding further with the login process.
     * 
     * This event can be used to delay the player login until any necessary work such as preloading user data has completed.
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $PlayerNegotiationEvent extends $Event {
        getProfile(): $GameProfile;
        /**
         * Enqueue work to be completed asynchronously before the login proceeds.
         */
        enqueueWork(runnable: $Runnable_): void;
        /**
         * Enqueue work to be completed asynchronously before the login proceeds.
         */
        enqueueWork(future: $Future<void>): void;
        getConnection(): $Connection;
        constructor(connection: $Connection, profile: $GameProfile, futures: $List_<$Future<void>>);
        get profile(): $GameProfile;
        get connection(): $Connection;
    }
    /**
     * Called from `ServerPlayer#startSleepInBed(BlockPos)` when a player attempts to sleep.
     * 
     * This event receives the result of vanilla checking if the sleep attempt is valid, and permits overriding it.
     * 
     * This event is only fired on the logical server.
     */
    export class $CanPlayerSleepEvent extends $PlayerEvent {
        getProblem(): $Player$BedSleepingProblem;
        setProblem(arg0: $Player$BedSleepingProblem_): void;
        getVanillaProblem(): $Player$BedSleepingProblem;
        getPos(): $BlockPos;
        getState(): $BlockState;
        getLevel(): $Level;
        constructor(arg0: $ServerPlayer, arg1: $BlockPos_, arg2: $Player$BedSleepingProblem_);
        get vanillaProblem(): $Player$BedSleepingProblem;
        get pos(): $BlockPos;
        get state(): $BlockState;
        get level(): $Level;
    }
    /**
     * PlayerInteractEvent is fired when a player interacts in some way.
     * All subclasses are fired on `NeoForge#EVENT_BUS`.
     * See the individual documentation on each subevent for more details.
     */
    export class $PlayerInteractEvent extends $PlayerEvent {
        /**
         * If the interaction was on an entity, will be a BlockPos centered on the entity.
         * If the interaction was on a block, will be the position of that block.
         * Otherwise, will be a BlockPos centered on the player.
         * Will never be null.
         */
        getPos(): $BlockPos;
        getHand(): $InteractionHand;
        getFace(): $Direction;
        getLevel(): $Level;
        getSide(): $LogicalSide;
        getItemStack(): $ItemStack;
        get pos(): $BlockPos;
        get hand(): $InteractionHand;
        get face(): $Direction;
        get level(): $Level;
        get side(): $LogicalSide;
        get itemStack(): $ItemStack;
    }
    /**
     * This event is fired on both sides whenever a player right clicks an entity.
     * 
     * "Interact at" is an interact where the local vector (which part of the entity you clicked) is known.
     * The state of this event affects whether `Entity#interactAt(Player, Vec3, InteractionHand)` is called.
     * 
     * Let result be the return value of `Entity#interactAt(Player, Vec3, InteractionHand)`, or `#cancellationResult` if the event is cancelled.
     * If we are on the client and result is not `InteractionResult#SUCCESS`, the client will then try `EntityInteract`.
     */
    export class $PlayerInteractEvent$EntityInteractSpecific extends $PlayerInteractEvent implements $ICancellableEvent {
        /**
         * Returns the local interaction position. This is a 3D vector, where (0, 0, 0) is centered exactly at the
         * center of the entity's bounding box at their feet. This means the X and Z values will be in the range
         * [-width / 2, width / 2] while Y values will be in the range [0, height]
         */
        getLocalPos(): $Vec3;
        /**
         * Set the InteractionResult that will be returned to vanilla if the event is cancelled, instead of calling the relevant
         * method of the event.
         */
        setCancellationResult(result: $InteractionResult_): void;
        getCancellationResult(): $InteractionResult;
        getTarget(): $Entity;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(player: $Player, hand: $InteractionHand_, target: $Entity, localPos: $Vec3_);
        get localPos(): $Vec3;
        get target(): $Entity;
    }
    /**
     * Fired when an Entity is started to be "tracked" by this player (the player receives updates about this entity, e.g. motion).
     */
    export class $PlayerEvent$StartTracking extends $PlayerEvent {
        /**
         * The Entity now being tracked.
         */
        getTarget(): $Entity;
        constructor(player: $Player, target: $Entity);
        get target(): $Entity;
    }
    /**
     * This event is fired when the player's experience changes through the `Player#giveExperiencePoints(int)` method.
     * It can be cancelled, and no further processing will be done.
     */
    export class $PlayerXpEvent$XpChange extends $PlayerXpEvent implements $ICancellableEvent {
        setAmount(amount: number): void;
        getAmount(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(player: $Player, amount: number);
    }
    export class $AdvancementEvent$AdvancementProgressEvent$ProgressType extends $Enum<$AdvancementEvent$AdvancementProgressEvent$ProgressType> {
        static values(): $AdvancementEvent$AdvancementProgressEvent$ProgressType[];
        static valueOf(arg0: string): $AdvancementEvent$AdvancementProgressEvent$ProgressType;
        static GRANT: $AdvancementEvent$AdvancementProgressEvent$ProgressType;
        static REVOKE: $AdvancementEvent$AdvancementProgressEvent$ProgressType;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementEvent$AdvancementProgressEvent$ProgressType}.
     */
    export type $AdvancementEvent$AdvancementProgressEvent$ProgressType_ = "grant" | "revoke";
    /**
     * This event is called when a player attempts to use bone meal on a block.
     * 
     * This event can be cancelled, preventing vanilla handling from occurring.
     * If you want to perform custom logic, cancel the event and perform your own handling.
     * Use `#setSuccessful(boolean)` to control if handling should believe bone meal was used.
     * 
     * This event is fired on both client and server.
     */
    export class $BonemealEvent extends $Event implements $ICancellableEvent {
        /**
         * @return the position of the bone mealed block
         */
        getPos(): $BlockPos;
        /**
         * Returns true if the block is a valid bone meal target.
         * 
         * This is determined by `BonemealableBlock#isValidBonemealTarget`.
         */
        isSuccessful(): boolean;
        /**
         * Returns true if the block is a valid bone meal target.
         * 
         * This is determined by `BonemealableBlock#isValidBonemealTarget`.
         */
        isValidBonemealTarget(): boolean;
        /**
         * Cancels the event and changes the successful state.
         * 
         * The state controls if handlers believe bone meal was successfully applied, and
         * controls things like hand swings.
         */
        setCanceled(success: boolean): void;
        /**
         * @return the player who used the bone meal, if any
         */
        getPlayer(): $Player;
        /**
         * Cancels the event and changes the successful state.
         * 
         * The state controls if handlers believe bone meal was successfully applied, and
         * controls things like hand swings.
         */
        setSuccessful(success: boolean): void;
        /**
         * @return the state of the bone mealed block
         */
        getState(): $BlockState;
        /**
         * Returns the bone meal item stack.
         * 
         * Changes to this stack will write-back to the consumer.
         */
        getStack(): $ItemStack;
        /**
         * @return the level
         */
        getLevel(): $Level;
        /**
         * Returns true if the block is a valid bone meal target.
         * 
         * This is determined by `BonemealableBlock#isValidBonemealTarget`.
         */
        isCanceled(): boolean;
        constructor(player: $Player, level: $Level_, pos: $BlockPos_, state: $BlockState_, stack: $ItemStack_);
        get pos(): $BlockPos;
        get validBonemealTarget(): boolean;
        get player(): $Player;
        get state(): $BlockState;
        get stack(): $ItemStack;
        get level(): $Level;
    }
    /**
     * Occurs when a player falls, but is able to fly. Doesn't need to be cancelable, this is mainly for notification purposes.
     */
    export class $PlayerFlyableFallEvent extends $PlayerEvent {
        getMultiplier(): number;
        setMultiplier(distance: number): void;
        getDistance(): number;
        setDistance(distance: number): void;
        constructor(player: $Player, distance: number, multiplier: number);
    }
    /**
     * HarvestCheck is fired when a player attempts to harvest a block.
     * 
     * This event is fired whenever a player attempts to harvest a block in
     * `Player#hasCorrectToolForDrops(BlockState)`.
     * 
     * This event is fired via the `EventHooks#doPlayerHarvestCheck(Player, BlockState, BlockGetter, BlockPos)`.
     * 
     * `#state` contains the `BlockState` that is being checked for harvesting.
     * 
     * `#success` contains the boolean value for whether the Block will be successfully harvested.
     * 
     * This event is not `ICancellableEvent`.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $PlayerEvent$HarvestCheck extends $PlayerEvent {
        getTargetBlock(): $BlockState;
        setCanHarvest(success: boolean): void;
        canHarvest(): boolean;
        getPos(): $BlockPos;
        getLevel(): $BlockGetter;
        constructor(player: $Player, state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, success: boolean);
        get targetBlock(): $BlockState;
        get pos(): $BlockPos;
        get level(): $BlockGetter;
    }
    /**
     * ClientInformationUpdatedEvent is fired when a player changes server-synced client options,
     * specifically those in `ClientInformation`.
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $ClientInformationUpdatedEvent extends $PlayerEvent {
        /**
         * Returns the new client info to be applied to the player.
         * Sometimes the client resends unchanged options, so if that matters
         * for your use case, check equality with `#getOldInformation()`.
         */
        getUpdatedInformation(): $ClientInformation;
        /**
         * Returns the new client info to be applied to the player.
         * Sometimes the client resends unchanged options, so if that matters
         * for your use case, check equality with `#getOldInformation()`.
         */
        getOldInformation(): $ClientInformation;
        constructor(player: $ServerPlayer, oldInfo: $ClientInformation_, newInfo: $ClientInformation_);
        get updatedInformation(): $ClientInformation;
        get oldInformation(): $ClientInformation;
    }
    /**
     * This event is fired on the client side when the player left clicks empty space with any ItemStack.
     * The server is not aware of when the client left clicks empty space, you will need to tell the server yourself.
     * This event cannot be canceled.
     */
    export class $PlayerInteractEvent$LeftClickEmpty extends $PlayerInteractEvent {
        constructor(player: $Player);
    }
    /**
     * This event is fired on the client side when the player right clicks empty space with an empty hand.
     * The server is not aware of when the client right clicks empty space with an empty hand, you will need to tell the server yourself.
     * This event cannot be canceled.
     */
    export class $PlayerInteractEvent$RightClickEmpty extends $PlayerInteractEvent {
        constructor(player: $Player, hand: $InteractionHand_);
    }
    export class $PlayerContainerEvent$Open extends $PlayerContainerEvent {
        constructor(player: $Player, container: $AbstractContainerMenu);
    }
    export class $PlayerEvent$PlayerRespawnEvent extends $PlayerEvent {
        /**
         * Did this respawn event come from the player conquering the end?
         */
        isEndConquered(): boolean;
        constructor(player: $Player, endConquered: boolean);
        get endConquered(): boolean;
    }
    export class $UseItemOnBlockEvent$UsePhase extends $Enum<$UseItemOnBlockEvent$UsePhase> {
        static values(): $UseItemOnBlockEvent$UsePhase[];
        static valueOf(arg0: string): $UseItemOnBlockEvent$UsePhase;
        static ITEM_BEFORE_BLOCK: $UseItemOnBlockEvent$UsePhase;
        static BLOCK: $UseItemOnBlockEvent$UsePhase;
        static ITEM_AFTER_BLOCK: $UseItemOnBlockEvent$UsePhase;
    }
    /**
     * Values that may be interpreted as {@link $UseItemOnBlockEvent$UsePhase}.
     */
    export type $UseItemOnBlockEvent$UsePhase_ = "item_before_block" | "block" | "item_after_block";
    /**
     * Base class used for advancement-related events. Should not be used directly.
     */
    export class $AdvancementEvent extends $PlayerEvent {
        getAdvancement(): $AdvancementHolder;
        constructor(player: $Player, advancement: $AdvancementHolder_);
        get advancement(): $AdvancementHolder;
    }
    export class $PlayerEvent$PlayerChangedDimensionEvent extends $PlayerEvent {
        getFrom(): $ResourceKey<$Level>;
        getTo(): $ResourceKey<$Level>;
        constructor(player: $Player, fromDim: $ResourceKey_<$Level>, toDim: $ResourceKey_<$Level>);
        get from(): $ResourceKey<$Level>;
        get to(): $ResourceKey<$Level>;
    }
}
