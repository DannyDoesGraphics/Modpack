import { $RecipeType_, $Recipe, $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $EntityType_, $EquipmentSlot_, $EquipmentSlot, $LivingEntity, $Mob, $MobCategory, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidType_, $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $RecipeOutput } from "@package/net/minecraft/data/recipes";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $LogicalSide } from "@package/net/neoforged/fml";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AdvancementHolder, $AdvancementHolder_ } from "@package/net/minecraft/advancements";
import { $InteractionResult, $MenuProvider, $InteractionHand_ } from "@package/net/minecraft/world";
import { $DecimalFormat } from "@package/java/text";
import { $TriState, $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $PacketSendListener, $Connection, $RegistryFriendlyByteBuf, $PacketListener, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $DataComponentType, $DataComponentType_, $DataComponentMap$Builder } from "@package/net/minecraft/core/component";
import { $SoundAction, $ItemAbility_, $EffectCure } from "@package/net/neoforged/neoforge/common";
import { $IWithData } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $IContainerFactory_ } from "@package/net/neoforged/neoforge/network";
import { $Item, $Item$Properties, $Item$TooltipContext, $TooltipFlag, $ItemStack_, $ItemStack, $ArmorMaterial$Layer } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_, $TextColor, $TextColor_, $Component } from "@package/net/minecraft/network/chat";
import { $PartEntity } from "@package/net/neoforged/neoforge/entity";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $ConfigurationTask$Type_ } from "@package/net/minecraft/server/network";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ModelDataManager, $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $RailShape, $RailShape_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $EnderMan } from "@package/net/minecraft/world/entity/monster";
import { $SoundType, $Rotation_ } from "@package/net/minecraft/world/level/block";
import { $Transformation } from "@package/com/mojang/math";
import { $Boat, $AbstractMinecart } from "@package/net/minecraft/world/entity/vehicle";
import { $HitResult, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $ItemCapability, $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $Vector3f, $Vector4f } from "@package/org/joml";
import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $TagsProvider$TagAppender, $IntrinsicHolderTagsProvider$IntrinsicTagAppender } from "@package/net/minecraft/data/tags";
import { $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $AttributeModifier$Operation_, $AttributeModifier_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Set_, $Map, $OptionalInt, $Map_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $IntFunction_, $Supplier_, $Consumer_, $BiConsumer_, $BiPredicate_, $BiFunction_ } from "@package/java/util/function";
import { $PathType, $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $ServerPlayer$RespawnPosAngle, $ServerChunkCache, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $HolderLookup$RegistryLookup, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $Holder_, $Holder, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Enchantment, $EnchantmentInstance, $Enchantment_, $ItemEnchantments } from "@package/net/minecraft/world/item/enchantment";
import { $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $Iterable_, $Runnable_ } from "@package/java/lang";
import { $BlockAndTintGetter, $Explosion, $LevelAccessor, $LevelReader, $ChunkPos, $BlockGetter, $SignalGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagBuilder, $TagEntry, $TagKey_ } from "@package/net/minecraft/tags";
import { $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $FluidState, $PushReaction, $MapColor } from "@package/net/minecraft/world/level/material";
import { $ItemAttributeModifiers, $TooltipProvider } from "@package/net/minecraft/world/item/component";
import { $PlayerList } from "@package/net/minecraft/server/players";
import { $ClientboundBlockEntityDataPacket } from "@package/net/minecraft/network/protocol/game";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $FoodProperties } from "@package/net/minecraft/world/food";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Scoreboard } from "@package/net/minecraft/world/scores";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BubbleColumnDirection } from "@package/net/neoforged/neoforge/common/enums";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $StreamEncoder_, $StreamDecoder_ } from "@package/net/minecraft/network/codec";
import { $TriConsumer_ } from "@package/org/apache/commons/lang3/function";

declare module "@package/net/neoforged/neoforge/common/extensions" {
    /**
     * Extension interface for `ServerCommonPacketListener`
     */
    export class $IServerCommonPacketListenerExtension {
    }
    export interface $IServerCommonPacketListenerExtension extends $ICommonPacketListener {
        /**
         * {@inheritDoc}
         */
        send(payload: $CustomPacketPayload_): void;
        /**
         * Sends a packet to the client of this listener.
         */
        send(packet: $Packet<never>, listener: $PacketSendListener): void;
        /**
         * Sends a payload to the client of this listener.
         */
        send(payload: $CustomPacketPayload_, listener: $PacketSendListener): void;
    }
    export class $IEnchantmentExtension {
    }
    export interface $IEnchantmentExtension {
    }
    export class $ILevelExtension {
        static TRANSLATION_PREFIX: string;
    }
    export interface $ILevelExtension {
        /**
         * All part entities in this world. Used when collecting entities in an AABB to fix parts being
         * ignored whose parent entity is in a chunk that does not intersect with the AABB.
         */
        getPartEntities(): $Collection<$PartEntity<never>>;
        /**
         * The maximum radius to scan for entities when trying to check bounding boxes. Vanilla's default is
         * 2.0D But mods that add larger entities may increase this.
         */
        getMaxEntityRadius(): number;
        /**
         * Increases the max entity radius, this is safe to call with any value.
         * The setter will verify the input value is larger then the current setting.
         */
        increaseMaxEntityRadius(value: number): number;
        /**
         * Returns the translation key for this dimension.
         * 
         * Used when looking up the matching translation.
         */
        getDescriptionKey(): string;
        /**
         * Retrieves the model data manager for the given level. May be null on a server level.
         * 
         * For model data retrieval, prefer calling `IBlockGetterExtension#getModelData(BlockPos)` rather than this method,
         * as it works on more than just a level.
         */
        getModelDataManager(): $ModelDataManager;
        /**
         * Notify all listeners that the capabilities at all the positions in a chunk might have changed.
         * This includes new capabilities becoming available.
         * 
         * This method will only do something on `ServerLevel`s,
         * but it is safe to call on any `Level`, without the need for an `instanceof` check.
         */
        invalidateCapabilities(pos: $ChunkPos): void;
        /**
         * Notify all listeners that the capabilities at a specific position might have changed.
         * This includes new capabilities becoming available.
         * 
         * This method will only do something on `ServerLevel`s,
         * but it is safe to call on any `Level`, without the need for an `instanceof` check.
         * 
         * If you already have a block entity at that position, you can call `BlockEntity#invalidateCapabilities()` instead.
         */
        invalidateCapabilities(pos: $BlockPos_): void;
        /**
         * Returns Component which looks up the matching value for #getDescriptionKey(),
         * falling back to the registry name if no translation exists.
         */
        getDescription(): $Component;
        getCapability<T, C>(arg0: $BlockCapability<T, C>, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: C): T;
        getCapability<T, C>(arg0: $BlockCapability<T, C>, arg1: $BlockPos_, arg2: C): T;
        getCapability<T>(arg0: $BlockCapability<T, void>, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity): T;
        getCapability<T>(arg0: $BlockCapability<T, void>, arg1: $BlockPos_): T;
        get partEntities(): $Collection<$PartEntity<never>>;
        get maxEntityRadius(): number;
        get descriptionKey(): string;
        get modelDataManager(): $ModelDataManager;
        get description(): $Component;
    }
    export class $IPackResourcesExtension {
    }
    export interface $IPackResourcesExtension {
        /**
         * @return `true` if the pack should be hidden from any user interfaces
         */
        isHidden(): boolean;
        get hidden(): boolean;
    }
    export class $IAttributeExtension {
        static isNullOrAddition(arg0: $AttributeModifier$Operation_): boolean;
        static FORMAT: $DecimalFormat;
    }
    export interface $IAttributeExtension {
        /**
         * Gets the specific ID that represents a "base" (green) modifier for this attribute.
         */
        getBaseId(): $ResourceLocation;
        /**
         * Converts a "base" attribute modifier (as dictated by `#getBaseId()`) into a text component.
         * 
         * Similar to `#toComponent`, this method is responsible for adding debug information when the tooltip flag is advanced.
         */
        toBaseComponent(value: number, entityBase: number, merged: boolean, flag: $TooltipFlag): $MutableComponent;
        /**
         * Returns the color used by merged attribute modifiers. Only used when `NeoForgeMod#enableMergedAttributeTooltips()` is active.
         * 
         * Similarly to `Attribute#getStyle(boolean)`, this method should return a color based on the attribute's `Sentiment`.
         * The returned color should be distinguishable from the color used by `Attribute#getStyle(boolean)`.
         */
        getMergedStyle(isPositive: boolean): $TextColor;
        toValueComponent(arg0: $AttributeModifier$Operation_, arg1: number, arg2: $TooltipFlag): $MutableComponent;
        /**
         * Computes the additional debug information for a given attribute modifier, if the flag is advanced.
         */
        getDebugInfo(modif: $AttributeModifier_, flag: $TooltipFlag): $Component;
        /**
         * Converts an attribute modifier into its tooltip representation.
         * 
         * This method does not handle formatting of "base" modifiers, such as Attack Damage or Attack Speed.
         * 
         * The returned component may append additional debug information based on the tooltip flag.
         */
        toComponent(modif: $AttributeModifier_, flag: $TooltipFlag): $MutableComponent;
        get baseId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $IAttributeExtension}.
     */
    export type $IAttributeExtension_ = ((arg0: boolean) => $TextColor_);
    export class $IItemPropertiesExtensions {
    }
    export interface $IItemPropertiesExtensions {
        component<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T): $Item$Properties;
    }
    export class $IBlockExtension {
    }
    export interface $IBlockExtension {
        /**
         * Determines the amount of enchanting power this block can provide to an enchanting table.
         */
        getEnchantPowerBonus(state: $BlockState_, level: $LevelReader, pos: $BlockPos_): number;
        /**
         * Called when a block entity on a side of this block changes, is created, or is destroyed.
         * 
         * This method is not suitable for listening to capability invalidations.
         * For capability invalidations specifically, use `BlockCapabilityCache` instead.
         */
        onNeighborChange(state: $BlockState_, level: $LevelReader, pos: $BlockPos_, neighbor: $BlockPos_): void;
        /**
         * Called to determine whether to allow the block to handle its own indirect power rather than using the default rules.
         */
        shouldCheckWeakPower(state: $BlockState_, level: $SignalGetter, pos: $BlockPos_, side: $Direction_): boolean;
        /**
         * If this block should be notified of weak changes.
         * Weak changes are changes 1 block away through a solid block.
         * Similar to comparators.
         */
        getWeakChanges(state: $BlockState_, level: $LevelReader, pos: $BlockPos_): boolean;
        getBeaconColorMultiplier(state: $BlockState_, level: $LevelReader, pos: $BlockPos_, beaconPos: $BlockPos_): number;
        /**
         * Used to determine the state 'viewed' by an entity (see
         * `Camera#getBlockAtCamera()`).
         * Can be used by fluid blocks to determine if the viewpoint is within the fluid or not.
         */
        getStateAtViewpoint(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, viewpoint: $Vec3_): $BlockState;
        /**
         * Whether this block has dynamic light emission which is not solely based on the `BlockState` and instead
         * uses the `BlockPos`, the `AuxiliaryLightManager` or another external data source to determine its
         * light value in `#getLightEmission(BlockState, BlockGetter, BlockPos)`
         */
        isSlimeBlock(state: $BlockState_): boolean;
        /**
         * Determines if this block can stick to another block when pushed by a piston.
         */
        canStickTo(state: $BlockState_, other: $BlockState_): boolean;
        /**
         * Called when fire is updating, checks if a block face can catch fire.
         */
        isFlammable(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): boolean;
        /**
         * If the block is flammable, this is called when it gets lit on fire.
         */
        onCaughtFire(state: $BlockState_, level: $Level_, pos: $BlockPos_, direction: $Direction_, igniter: $LivingEntity): void;
        /**
         * Chance that fire will spread and consume this block.
         * 300 being a 100% chance, 0, being a 0% chance.
         */
        getFireSpreadSpeed(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        /**
         * Currently only called by fire when it is on top of this block.
         * Returning true will prevent the fire from naturally dying during updating.
         * Also prevents firing from dying from rain.
         */
        isFireSource(state: $BlockState_, level: $LevelReader, pos: $BlockPos_, direction: $Direction_): boolean;
        /**
         * Determines if this block is can be destroyed by the specified entities normal behavior.
         */
        canEntityDestroy(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, entity: $Entity): boolean;
        /**
         * Determines if this block should drop loot when exploded.
         */
        canDropFromExplosion(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, explosion: $Explosion): boolean;
        /**
         * Called when the block is destroyed by an explosion.
         * Useful for allowing the block to take into account tile entities,
         * state, etc. when exploded, before it is removed.
         */
        onBlockExploded(state: $BlockState_, level: $Level_, pos: $BlockPos_, explosion: $Explosion): void;
        /**
         * Called to determine whether this block should use the fluid overlay texture or flowing texture when it is placed under the fluid.
         */
        shouldDisplayFluidOverlay(state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_, fluidState: $FluidState): boolean;
        /**
         * Returns the state that this block should transform into when right-clicked by a tool.
         * For example: Used to determine if an axe can strip,
         * a shovel can path, or a hoe can till.
         * Returns `null` if nothing should happen.
         */
        getToolModifiedState(state: $BlockState_, context: $UseOnContext, itemAbility: $ItemAbility_, simulate: boolean): $BlockState;
        /**
         * Called when fire is updating, checks if a block face can catch fire.
         */
        canConnectRedstone(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): boolean;
        /**
         * Called after the `BlockState` at the given `BlockPos` was changed and neighbors were updated.
         * This method is called on the server and client side.
         * Modifying the level is disallowed in this method.
         * Useful for calculating additional data based on the new state and the neighbor's reactions to the state change.
         */
        onBlockStateChange(level: $LevelReader, pos: $BlockPos_, oldState: $BlockState_, newState: $BlockState_): void;
        /**
         * Returns whether the block can be hydrated by a fluid.
         * 
         * Hydration is an arbitrary word which depends on the block.
         * 
         * - A farmland has moisture
         * - A sponge can soak up the liquid
         * - A coral can live
         */
        canBeHydrated(state: $BlockState_, getter: $BlockGetter, pos: $BlockPos_, fluid: $FluidState, fluidPos: $BlockPos_): boolean;
        /**
         * Returns the `MapColor` shown on the map.
         */
        getMapColor(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, defaultColor: $MapColor): $MapColor;
        /**
         * Returns the `BlockState` that this block reports to look like on the given side, for querying by other mods.
         * Note: Overriding this does not change how this block renders. That must still be handled in the block's model.
         * 
         * Common implementors would be covers and facades, or any other mimic blocks that proxy another block's model.
         * Common consumers would be models with connected textures that wish to seamlessly connect to mimic blocks.
         * 
         * **Note that this method may be called on the server, or on any of the client's meshing threads.**
         * 
         * As such, if you need any data from your `BlockEntity`, you should put it in `ModelData` to guarantee
         * safe concurrent access to it on the client.
         * 
         * Calling `ILevelExtension#getModelDataManager()` will return `null` if in a server context, where it is
         * safe to query your `BlockEntity` directly. Otherwise, `IBlockGetterExtension#getModelData(BlockPos)` will return
         * the `ModelData` for the queried block, or `ModelData#EMPTY` if none is present.
         */
        getAppearance(state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_, side: $Direction_, queryState: $BlockState_, queryPos: $BlockPos_): $BlockState;
        /**
         * Determines if this block can spawn Bubble Columns and if so, what direction the column flows.
         * 
         * NOTE: The block itself will still need to call `BubbleColumnBlock#updateColumn(LevelAccessor, BlockPos, BlockState)` in their tick method and schedule a block tick in the block's onPlace.
         * Also, schedule a fluid tick in updateShape method if update direction is up. Both are needed in order to get the Bubble Columns to function properly. See `SoulSandBlock` and `MagmaBlock` for example.
         */
        getBubbleColumnDirection(state: $BlockState_): $BubbleColumnDirection;
        /**
         * Determines if a fluid adjacent to the block on the given side should not be rendered.
         */
        shouldHideAdjacentFluidFace(state: $BlockState_, selfFace: $Direction_, adjacentFluid: $FluidState): boolean;
        /**
         * Gets the path type of this block when an entity is pathfinding. When
         * `null`, uses vanilla behavior.
         */
        getBlockPathType(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, mob: $Mob): $PathType;
        /**
         * Gets the path type of the adjacent block to a pathfinding entity.
         * Path types with a negative malus are not traversable for the entity.
         * Pathfinding entities will favor paths consisting of a lower malus.
         * When `null`, uses vanilla behavior.
         */
        getAdjacentBlockPathType(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, mob: $Mob, originalType: $PathType_): $PathType;
        /**
         * Get a light value for this block, taking into account the given state and coordinates, normal ranges are between 0 and 15
         */
        getLightEmission(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): number;
        /**
         * Called when fire is updating, checks if a block face can catch fire.
         */
        ignitedByLava(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): boolean;
        /**
         * Determines if this block should set fire and deal fire damage
         * to entities coming into contact with it.
         */
        isBurning(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Whether this block has dynamic light emission which is not solely based on the `BlockState` and instead
         * uses the `BlockPos`, the `AuxiliaryLightManager` or another external data source to determine its
         * light value in `#getLightEmission(BlockState, BlockGetter, BlockPos)`
         */
        isStickyBlock(state: $BlockState_): boolean;
        /**
         * Chance that fire will spread and consume this block.
         * 300 being a 100% chance, 0, being a 0% chance.
         */
        getFlammability(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        /**
         * Whether this block has dynamic light emission which is not solely based on the `BlockState` and instead
         * uses the `BlockPos`, the `AuxiliaryLightManager` or another external data source to determine its
         * light value in `#getLightEmission(BlockState, BlockGetter, BlockPos)`
         */
        hasDynamicLightEmission(state: $BlockState_): boolean;
        /**
         * Checks if a player or entity can use this block to 'climb' like a ladder.
         */
        isLadder(state: $BlockState_, level: $LevelReader, pos: $BlockPos_, entity: $LivingEntity): boolean;
        /**
         * Checks if this block makes an open trapdoor above it climbable.
         */
        makesOpenTrapdoorAboveClimbable(state: $BlockState_, level: $LevelReader, pos: $BlockPos_, trapdoorState: $BlockState_): boolean;
        /**
         * Determines if the player can harvest this block, obtaining it's drops when the block is destroyed.
         */
        canHarvestBlock(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, player: $Player): boolean;
        /**
         * Called when a player removes a block. This is responsible for
         * actually destroying the block, and the block is intact at time of call.
         * This is called regardless of whether the player can harvest the block or
         * not.
         * 
         * Return true if the block is actually destroyed.
         * 
         * This function is called on both the logical client and logical server.
         */
        onDestroyedByPlayer(state: $BlockState_, level: $Level_, pos: $BlockPos_, player: $Player, willHarvest: boolean, fluid: $FluidState): boolean;
        /**
         * Called when a block is removed by `PushReaction#DESTROY`. This is responsible for
         * actually destroying the block, and the block is intact at time of call.
         * 
         * Will only be called if `BlockState#getPistonPushReaction` returns `PushReaction#DESTROY`.
         * 
         * Note: When used in multiplayer, this is called on both client and
         * server sides!
         */
        onDestroyedByPushReaction(state: $BlockState_, level: $Level_, pos: $BlockPos_, pushDirection: $Direction_, fluid: $FluidState): void;
        /**
         * Returns the position that the entity is moved to upon respawning at this block.
         */
        getRespawnPosition(state: $BlockState_, type: $EntityType_<never>, levelReader: $LevelReader, pos: $BlockPos_, orientation: number): ($ServerPlayer$RespawnPosAngle) | undefined;
        /**
         * Determines if this block either force allow or force disallow a plant from being placed on it. (Or pass and let the plant's decision win)
         * This will be called in plant's canSurvive method and/or mayPlace method.
         */
        canSustainPlant(state: $BlockState_, level: $BlockGetter, soilPosition: $BlockPos_, facing: $Direction_, plant: $BlockState_): $TriState;
        /**
         * Called when a tree grows on top of this block and tries to set it to dirt by the trunk placer.
         * An override that returns true is responsible for using the place function to
         * set blocks in the world properly during generation. A modded grass block might override this method
         * to ensure it turns into the corresponding modded dirt instead of regular dirt when a tree grows on it.
         * For modded grass blocks, returning true from this method is NOT a substitute for adding your block
         * to the #minecraft:dirt tag, rather for changing the behaviour to something other than setting to dirt.
         * 
         * NOTE: This happens DURING world generation, the generation may be incomplete when this is called.
         * Use the placeFunction when modifying the level.
         */
        onTreeGrow(state: $BlockState_, level: $LevelReader, placeFunction: $BiConsumer_<$BlockPos, $BlockState>, randomSource: $RandomSource, pos: $BlockPos_, config: $TreeConfiguration): boolean;
        /**
         * Determines if this block should set fire and deal fire damage
         * to entities coming into contact with it.
         */
        isFertile(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Determines if this block can be used as the frame of a conduit.
         */
        isConduitFrame(state: $BlockState_, level: $LevelReader, pos: $BlockPos_, conduit: $BlockPos_): boolean;
        /**
         * Determines if this block should set fire and deal fire damage
         * to entities coming into contact with it.
         */
        isPortalFrame(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Returns how many experience points this block drops when broken, before application of enchantments.
         */
        getExpDrop(state: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, blockEntity: $BlockEntity, breaker: $Entity, tool: $ItemStack_): number;
        /**
         * Whether this block hides the neighbors face pointed towards by the given direction.
         * 
         * This method should only be used for blocks you don't control, for your own blocks override
         * `Block#skipRendering(BlockState, BlockState, Direction)` on the respective block instead
         * 
         * **Note that this method may be called on any of the client's meshing threads.**
         * 
         * As such, if you need any data from your `BlockEntity`, you should put it in `ModelData` to guarantee
         * safe concurrent access to it on the client.
         * 
         * `IBlockGetterExtension#getModelData(BlockPos)` will return the `ModelData` for the queried block,
         * or `ModelData#EMPTY` if none is present.
         */
        hidesNeighborFace(level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, neighborState: $BlockState_, dir: $Direction_): boolean;
        /**
         * Whether this block has dynamic light emission which is not solely based on the `BlockState` and instead
         * uses the `BlockPos`, the `AuxiliaryLightManager` or another external data source to determine its
         * light value in `#getLightEmission(BlockState, BlockGetter, BlockPos)`
         */
        supportsExternalFaceHiding(state: $BlockState_): boolean;
        /**
         * Location sensitive version of getExplosionResistance
         */
        getExplosionResistance(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, explosion: $Explosion): number;
        /**
         * Whether this block has dynamic light emission which is not solely based on the `BlockState` and instead
         * uses the `BlockPos`, the `AuxiliaryLightManager` or another external data source to determine its
         * light value in `#getLightEmission(BlockState, BlockGetter, BlockPos)`
         */
        isEmpty(state: $BlockState_): boolean;
        rotate(state: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, direction: $Rotation_): $BlockState;
        /**
         * Called when A user uses the creative pick block button on this block
         */
        getCloneItemStack(state: $BlockState_, target: $HitResult, level: $LevelReader, pos: $BlockPos_, player: $Player): $ItemStack;
        /**
         * Allows a block to override the standard EntityLivingBase.updateFallState
         * particles, this is a server side method that spawns particles with
         * WorldServer.spawnParticle.
         */
        addLandingEffects(state1: $BlockState_, level: $ServerLevel, pos: $BlockPos_, state2: $BlockState_, entity: $LivingEntity, numberOfParticles: number): boolean;
        /**
         * Sensitive version of getSoundType
         */
        getSoundType(state: $BlockState_, level: $LevelReader, pos: $BlockPos_, entity: $Entity): $SoundType;
        /**
         * Gets the slipperiness at the given location at the given state. Normally
         * between 0 and 1.
         * 
         * Note that entities may reduce slipperiness by a certain factor of their own;
         * for `LivingEntity`, this is `.91`.
         * `ItemEntity` uses `.98`, and
         * `FishingHook` uses `.92`.
         */
        getFriction(state: $BlockState_, level: $LevelReader, pos: $BlockPos_, entity: $Entity): number;
        /**
         * Checks if a player or entity can use this block to 'climb' like a ladder.
         */
        isScaffolding(state: $BlockState_, level: $LevelReader, pos: $BlockPos_, entity: $LivingEntity): boolean;
        /**
         * Determines if this block is classified as a bed, replacing `instanceof BedBlock` checks.
         * 
         * If true, players may sleep in it, though the block must manually put the player to sleep
         * by calling `Player#startSleepInBed` from `BlockBehaviour#useWithoutItem` or similar.
         * 
         * If you want players to be able to respawn at your bed, you also need to override `#getRespawnPosition`.
         */
        isBed(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, sleeper: $LivingEntity): boolean;
        /**
         * Called when a user either starts or stops sleeping in the bed.
         */
        setBedOccupied(state: $BlockState_, level: $Level_, pos: $BlockPos_, sleeper: $LivingEntity, occupied: boolean): void;
        /**
         * Returns the direction of the block. Same values that
         * are returned by BlockDirectional. Called every frame tick for every living entity. Be VERY fast.
         */
        getBedDirection(state: $BlockState_, level: $LevelReader, pos: $BlockPos_): $Direction;
        /**
         * Determines if this block is can be destroyed by the specified entities normal behavior.
         */
        collisionExtendsVertically(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, entity: $Entity): boolean;
        /**
         * Allows a block to override the standard vanilla running particles.
         * This is called from Entity.spawnSprintParticle and is called both,
         * Client and server side, it's up to the implementor to client check / server check.
         * By default vanilla spawns particles only on the client and the server methods no-op.
         */
        addRunningEffects(state: $BlockState_, level: $Level_, pos: $BlockPos_, entity: $Entity): boolean;
        /**
         * Returns the reaction of the block when pushed or pulled by a piston. This method should be not called directly, instead via `BlockState#getPistonPushReaction()`.
         * 
         * - NORMAL: is pushable and pullable by sticky pistons
         * - DESTROY: is being destroyed on pushing and pulling
         * - BLOCK: is not being able to be moved
         * - IGNORE: only usable by entities
         * - PUSH_ONLY: can only be pushed, blocks on trying to be pulled
         * - `null`: use the PistonPushReaction from the BlockBehaviour.Properties passed into the Block Constructor
         */
        getPistonPushReaction(state: $BlockState_): $PushReaction;
    }
    /**
     * Extension for `Holder`
     */
    export class $IHolderExtension<T> {
    }
    export interface $IHolderExtension<T> extends $IWithData<T> {
        /**
         * Attempts to resolve the underlying `RegistryLookup` from a `Holder`.
         * 
         * This will only succeed if the underlying holder is a `Reference`.
         */
        unwrapLookup(): $HolderLookup$RegistryLookup<T>;
        /**
         * Get the resource key held by this Holder, or null if none is present. This method will be overriden
         * by Holder implementations to avoid allocation associated with `Holder#unwrapKey()`
         */
        getKey(): $ResourceKey<T>;
        /**
         * @return the holder that this holder wraps
         * 
         * Used by `Registry#safeCastToReference` to resolve the underlying `Reference` for delegating holders.
         */
        getDelegate(): $Holder<T>;
        get key(): $ResourceKey<T>;
        get delegate(): $Holder<T>;
    }
    export class $IAbstractMinecartExtension {
        static DEFAULT_AIR_DRAG: number;
        static DEFAULT_MAX_SPEED_AIR_VERTICAL: number;
        static DEFAULT_MAX_SPEED_AIR_LATERAL: number;
    }
    export interface $IAbstractMinecartExtension {
        /**
         * Called from Detector Rails to retrieve a redstone power level for comparators.
         */
        getComparatorLevel(): number;
        /**
         * Returns true if this cart can currently use rails.
         * This function is mainly used to gracefully detach a minecart from a rail.
         */
        canUseRail(): boolean;
        /**
         * Returns the carts max speed when traveling on rails. Carts going faster
         * than 1.1 cause issues with chunk loading. Carts cant traverse slopes or
         * corners at greater than 0.5 - 0.6. This value is compared with the rails
         * max speed and the carts current speed cap to determine the carts current
         * max speed. A normal rail's max speed is 0.4.
         */
        getMaxCartSpeedOnRail(): number;
        /**
         * Returns true if this cart can currently use rails.
         * This function is mainly used to gracefully detach a minecart from a rail.
         */
        canBeRidden(): boolean;
        /**
         * Returns the carts max speed when traveling on rails. Carts going faster
         * than 1.1 cause issues with chunk loading. Carts cant traverse slopes or
         * corners at greater than 0.5 - 0.6. This value is compared with the rails
         * max speed and the carts current speed cap to determine the carts current
         * max speed. A normal rail's max speed is 0.4.
         */
        getMaxSpeedAirLateral(): number;
        /**
         * Returns the carts max speed when traveling on rails. Carts going faster
         * than 1.1 cause issues with chunk loading. Carts cant traverse slopes or
         * corners at greater than 0.5 - 0.6. This value is compared with the rails
         * max speed and the carts current speed cap to determine the carts current
         * max speed. A normal rail's max speed is 0.4.
         */
        getMaxSpeedAirVertical(): number;
        getDragAir(): number;
        getSlopeAdjustment(): number;
        /**
         * Returns true if this cart can currently use rails.
         * This function is mainly used to gracefully detach a minecart from a rail.
         */
        shouldDoRailFunctions(): boolean;
        /**
         * Moved to allow overrides.
         * This code handles minecart movement and speed capping when on a rail.
         */
        moveMinecartOnRail(pos: $BlockPos_): void;
        /**
         * Returns true if this cart can currently use rails.
         * This function is mainly used to gracefully detach a minecart from a rail.
         */
        isPoweredCart(): boolean;
        /**
         * Set whether the minecart can use rails.
         * This function is mainly used to gracefully detach a minecart from a rail.
         */
        setCanUseRail(use: boolean): void;
        /**
         * Returns the carts max speed when traveling on rails. Carts going faster
         * than 1.1 cause issues with chunk loading. Carts cant traverse slopes or
         * corners at greater than 0.5 - 0.6. This value is compared with the rails
         * max speed and the carts current speed cap to determine the carts current
         * max speed. A normal rail's max speed is 0.4.
         */
        getCurrentCartSpeedCapOnRail(): number;
        setCurrentCartSpeedCapOnRail(value: number): void;
        getMaxSpeedWithRail(): number;
        /**
         * Internal, returns the current spot to look for the attached rail.
         */
        getCurrentRailPosition(): $BlockPos;
        setMaxSpeedAirLateral(value: number): void;
        setMaxSpeedAirVertical(value: number): void;
        setDragAir(value: number): void;
        get comparatorLevel(): number;
        get maxCartSpeedOnRail(): number;
        get slopeAdjustment(): number;
        get poweredCart(): boolean;
        get maxSpeedWithRail(): number;
        get currentRailPosition(): $BlockPos;
    }
    /**
     * Extension for `PacketFlow` to add some utility methods.
     */
    export class $IPacketFlowExtension {
    }
    export interface $IPacketFlowExtension {
        /**
         * @return the `LogicalSide` that is receiving packets in this `PacketFlow`
         */
        getReceptionSide(): $LogicalSide;
        /**
         * @return an indication of whether this `PacketFlow` is clientbound
         */
        isServerbound(): boolean;
        /**
         * @return an indication of whether this `PacketFlow` is clientbound
         */
        isClientbound(): boolean;
        /**
         * @return the `PacketFlow` this extension is applied to
         */
        self(): $PacketFlow;
        get receptionSide(): $LogicalSide;
        get serverbound(): boolean;
        get clientbound(): boolean;
    }
    export class $IBaseRailBlockExtension {
    }
    export interface $IBaseRailBlockExtension {
        /**
         * Return the rail's direction.
         * Can be used to make the cart think the rail is a different shape,
         * for example when making diamond junctions or switches.
         * The cart parameter will often be null unless it it called from EntityMinecart.
         */
        getRailDirection(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, cart: $AbstractMinecart): $RailShape;
        /**
         * Return true if the rail can make corners.
         * Used by placement logic.
         */
        isFlexibleRail(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Return true if the rail can make corners.
         * Used by placement logic.
         */
        canMakeSlopes(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Returns the max speed of the rail at the specified position.
         */
        getRailMaxSpeed(state: $BlockState_, level: $Level_, pos: $BlockPos_, cart: $AbstractMinecart): number;
        /**
         * This function is called by any minecart that passes over this rail.
         * It is called once per update tick that the minecart is on the rail.
         */
        onMinecartPass(state: $BlockState_, level: $Level_, pos: $BlockPos_, cart: $AbstractMinecart): void;
        /**
         * Returns true if the given `RailShape` is valid for this rail block.
         * This is called when the RailShape for the initial placement of this block is calculated or
         * when another rail block tries to connect to this block and this block's RailState calculates
         * the new RailShape for its current neigbors.
         */
        isValidRailShape(shape: $RailShape_): boolean;
    }
    export class $IDispensibleContainerItemExtension {
    }
    export interface $IDispensibleContainerItemExtension {
        /**
         * Empties the contents of the container and returns whether it was successful.
         */
        emptyContents(player: $Player, level: $Level_, pos: $BlockPos_, hitResult: $BlockHitResult, container: $ItemStack_): boolean;
    }
    export class $ITagBuilderExtension {
    }
    export interface $ITagBuilderExtension {
        getRawBuilder(): $TagBuilder;
        /**
         * @deprecated
         * Adds a tag entry to the remove list.
         */
        remove(tagEntry: $TagEntry, source: string): $TagBuilder;
        /**
         * Adds a single-element entry to the remove list.
         */
        removeTag(elementID: $ResourceLocation_): $TagBuilder;
        /**
         * @deprecated
         * Adds a single-element entry to the remove list.
         */
        removeTag(elementID: $ResourceLocation_, source: string): $TagBuilder;
        /**
         * @deprecated
         * Adds a single-element entry to the remove list.
         */
        removeElement(elementID: $ResourceLocation_, source: string): $TagBuilder;
        /**
         * Adds a single-element entry to the remove list.
         */
        removeElement(elementID: $ResourceLocation_): $TagBuilder;
        get rawBuilder(): $TagBuilder;
    }
    export class $IEntityExtension {
    }
    export interface $IEntityExtension extends $INBTSerializable<$CompoundTag> {
        /**
         * Called when a user uses the creative pick block button on this entity.
         */
        getPickedResult(target: $HitResult): $ItemStack;
        /**
         * Returns whether any fluid type the entity is currently in matches
         * the specified condition.
         */
        isInFluidType(predicate: $BiPredicate_<$FluidType, number>): boolean;
        /**
         * Returns whether the entity is within the fluid type of the state.
         */
        isInFluidType(state: $FluidState): boolean;
        /**
         * Returns whether the entity is within the fluid type.
         */
        isInFluidType(type: $FluidType_): boolean;
        /**
         * Used in model rendering to determine if the entity riding this entity should be in the 'sitting' position.
         */
        isInFluidType(): boolean;
        /**
         * Returns whether the fluid type the entity is currently in matches
         * the specified condition.
         */
        isInFluidType(predicate: $BiPredicate_<$FluidType, number>, forAllTypes: boolean): boolean;
        captureDrops(captureDrops: $Collection_<$ItemEntity>): $Collection<$ItemEntity>;
        captureDrops(): $Collection<$ItemEntity>;
        /**
         * Returns the fluid type which is the highest on the bounding box of
         * the entity.
         */
        getMaxHeightFluidType(): $FluidType;
        /**
         * Returns the height of the fluid type in relation to the bounding box of
         * the entity. If the entity is not in the fluid type, then `0`
         * is returned.
         */
        getFluidTypeHeight(type: $FluidType_): number;
        /**
         * Returns whether the entity is within the fluid type.
         */
        canFluidExtinguish(type: $FluidType_): boolean;
        /**
         * Returns whether the entity is within the fluid type.
         */
        canSwimInFluidType(type: $FluidType_): boolean;
        /**
         * Returns the fluid type which is the highest on the bounding box of
         * the entity.
         */
        getEyeInFluidType(): $FluidType;
        /**
         * Returns whether the entity is within the fluid type.
         */
        isPushedByFluid(type: $FluidType_): boolean;
        /**
         * @deprecated
         * Deserialize from a compound tag.
         */
        deserializeNBT(provider: $HolderLookup$Provider, nbt: $CompoundTag_): void;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getPersistentData(): $CompoundTag;
        /**
         * Used in model rendering to determine if the entity riding this entity should be in the 'sitting' position.
         */
        shouldRiderSit(): boolean;
        /**
         * Used in model rendering to determine if the entity riding this entity should be in the 'sitting' position.
         */
        canRiderInteract(): boolean;
        /**
         * Returns whether the entity can ride in this vehicle under the fluid.
         */
        canBeRiddenUnderFluidType(type: $FluidType_, rider: $Entity): boolean;
        /**
         * Checks if this `Entity` can trample a `Block`.
         */
        canTrample(state: $BlockState_, pos: $BlockPos_, fallDistance: number): boolean;
        /**
         * Returns The classification of this entity
         */
        getClassification(forSpawnCount: boolean): $MobCategory;
        /**
         * Used in model rendering to determine if the entity riding this entity should be in the 'sitting' position.
         */
        isAddedToLevel(): boolean;
        /**
         * Called after the entity has been added to the world's ticking list.
         */
        onAddedToLevel(): void;
        /**
         * Called after the entity has been added to the world's ticking list.
         */
        onRemovedFromLevel(): void;
        /**
         * Called after the entity has been added to the world's ticking list.
         */
        revive(): void;
        /**
         * Used in model rendering to determine if the entity riding this entity should be in the 'sitting' position.
         */
        isMultipartEntity(): boolean;
        /**
         * Gets the individual sub parts that make up this entity.
         * 
         * The entities returned by this method are NOT saved to the world in nay way, they exist as an extension
         * of their host entity. The child entity does not track its server-side(or client-side) counterpart, and
         * the host entity is responsible for moving and managing these children.
         * 
         * Only used if `#isMultipartEntity()` returns true.
         * 
         * See `EnderDragon` for an example implementation.
         */
        getParts(): $PartEntity<never>[];
        /**
         * Returns whether the entity is within the fluid type.
         */
        isEyeInFluidType(type: $FluidType_): boolean;
        /**
         * Used in model rendering to determine if the entity riding this entity should be in the 'sitting' position.
         */
        canStartSwimming(): boolean;
        /**
         * Returns the height of the fluid type in relation to the bounding box of
         * the entity. If the entity is not in the fluid type, then `0`
         * is returned.
         */
        getFluidMotionScale(type: $FluidType_): number;
        /**
         * Returns how much the fluid should scale the damage done to a falling
         * entity when hitting the ground per tick.
         * 
         * Implementation: If the entity is in many fluids, the smallest modifier
         * is applied.
         */
        getFluidFallDistanceModifier(type: $FluidType_): number;
        /**
         * Returns whether the entity is within the fluid type.
         */
        canHydrateInFluidType(type: $FluidType_): boolean;
        /**
         * Returns a sound to play when a certain action is performed by the
         * entity in the fluid. If no sound is present, then the sound will be
         * `null`.
         */
        getSoundFromFluidType(type: $FluidType_, action: $SoundAction): $SoundEvent;
        /**
         * Returns whether this `Entity` has custom outline rendering behavior which does
         * not use the existing automatic outline rendering based on `Entity#isCurrentlyGlowing()`
         * and the entity's team color.
         */
        hasCustomOutlineRendering(player: $Player): boolean;
        /**
         * Sends the pairing data to the client.
         */
        sendPairingData(serverPlayer: $ServerPlayer, bundleBuilder: $Consumer_<$CustomPacketPayload>): void;
        /**
         * Copies the serialized attachments from another entity to this entity.
         * 
         * This does not trigger syncing of the copied attachments.
         */
        copyAttachmentsFrom(other: $Entity, isDeath: boolean): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        get maxHeightFluidType(): $FluidType;
        get persistentData(): $CompoundTag;
        get addedToLevel(): boolean;
        get multipartEntity(): boolean;
        get parts(): $PartEntity<never>[];
    }
    /**
     * Extension interface for `ClientCommonPacketListener`
     */
    export class $IClientCommonPacketListenerExtension {
    }
    export interface $IClientCommonPacketListenerExtension extends $ICommonPacketListener {
        /**
         * {@inheritDoc}
         */
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        /**
         * {@inheritDoc}
         */
        disconnect(reason: $Component_): void;
        /**
         * {@inheritDoc}
         */
        send(payload: $CustomPacketPayload_): void;
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
    }
    export class $IAdvancementBuilderExtension {
    }
    export interface $IAdvancementBuilderExtension {
        /**
         * Saves this builder with the given id using the `ExistingFileHelper` to check if the parent is already known.
         */
        save(saver: $Consumer_<$AdvancementHolder>, id: $ResourceLocation_, fileHelper: $ExistingFileHelper): $AdvancementHolder;
    }
    export class $IOwnedSpawner {
    }
    export interface $IOwnedSpawner {
        /**
         * Returns the block entity or entity which owns this spawner object.
         * 
         * For a `BaseSpawner`, this is the `MobSpawnerBlockEntity` or `MinecartSpawner`.
         * 
         * For a `TrialSpawner`, this is the `TrialSpawnerBlockEntity`.
         */
        getOwner(): $Either<$BlockEntity, $Entity>;
        get owner(): $Either<$BlockEntity, $Entity>;
    }
    /**
     * Values that may be interpreted as {@link $IOwnedSpawner}.
     */
    export type $IOwnedSpawner_ = (() => $Either<$BlockEntity, $Entity>);
    export class $IMobEffectExtension {
    }
    export interface $IMobEffectExtension {
        /**
         * Fill the given set with the `EffectCure`s this effect should be curable with by default
         */
        fillEffectCures(cures: $Set_<$EffectCure>, effectInstance: $MobEffectInstance): void;
        /**
         * Used for determining `MobEffect` sort order in GUIs.
         * Defaults to the `MobEffect`'s liquid color.
         */
        getSortOrder(effectInstance: $MobEffectInstance): number;
    }
    export class $IFluidExtension {
    }
    export interface $IFluidExtension {
        /**
         * Returns whether the fluid can create a source.
         */
        canConvertToSource(state: $FluidState, level: $Level_, pos: $BlockPos_): boolean;
        /**
         * Returns whether the boat can be used on the fluid.
         */
        supportsBoating(state: $FluidState, boat: $Boat): boolean;
        /**
         * Gets the path type of this fluid when an entity is pathfinding. When
         * `null`, uses vanilla behavior.
         */
        getBlockPathType(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, mob: $Mob, canFluidLog: boolean): $PathType;
        /**
         * Gets the path type of the adjacent fluid to a pathfinding entity.
         * Path types with a negative malus are not traversable for the entity.
         * Pathfinding entities will favor paths consisting of a lower malus.
         * When `null`, uses vanilla behavior.
         */
        getAdjacentBlockPathType(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, mob: $Mob, originalType: $PathType_): $PathType;
        /**
         * Returns the explosion resistance of the fluid.
         */
        getExplosionResistance(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, explosion: $Explosion): number;
        /**
         * Performs how an entity moves when within the fluid. If using custom
         * movement logic, the method should return `true`. Otherwise, the
         * movement logic will default to water.
         */
        move(state: $FluidState, entity: $LivingEntity, movementVector: $Vec3_, gravity: number): boolean;
        /**
         * Returns the type of this fluid.
         * 
         * Important: This MUST be overridden on your fluid, otherwise an
         * error will be thrown.
         */
        getFluidType(): $FluidType;
        /**
         * Returns whether the block can be extinguished by this fluid.
         */
        canExtinguish(state: $FluidState, getter: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Returns whether the block can be hydrated by a fluid.
         * 
         * Hydration is an arbitrary word which depends on the block.
         * 
         * - A farmland has moisture
         * - A sponge can soak up the liquid
         * - A coral can live
         */
        canHydrate(state: $FluidState, getter: $BlockGetter, pos: $BlockPos_, source: $BlockState_, sourcePos: $BlockPos_): boolean;
        get fluidType(): $FluidType;
    }
    /**
     * Values that may be interpreted as {@link $IFluidExtension}.
     */
    export type $IFluidExtension_ = (() => $FluidType_);
    export class $IHolderLookupProviderExtension {
    }
    export interface $IHolderLookupProviderExtension {
        /**
         * Shortcut method to get an optional holder from a ResourceKey.
         */
        holder<T>(key: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
    }
    /**
     * Extra methods for `RecipeOutput`.
     */
    export class $IRecipeOutputExtension {
    }
    export interface $IRecipeOutputExtension {
        withConditions(...arg0: $ICondition[]): $RecipeOutput;
        accept(arg0: $ResourceLocation_, arg1: $Recipe<never>, arg2: $AdvancementHolder_, ...arg3: $ICondition[]): void;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeOutputExtension}.
     */
    export type $IRecipeOutputExtension_ = ((arg0: $ResourceLocation, arg1: $Recipe<never>, arg2: $AdvancementHolder, arg3: $ICondition[]) => void);
    export class $ILevelReaderExtension {
    }
    export interface $ILevelReaderExtension {
        isAreaLoaded(center: $BlockPos_, range: number): boolean;
        /**
         * Shortcut method to get an optional holder from a ResourceKey.
         * see `IHolderLookupProviderExtension`
         */
        holder<T>(key: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         * see `IHolderLookupProviderExtension`
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
    }
    /**
     * Extension class for `ServerConfigurationPacketListener`
     */
    export class $IServerConfigurationPacketListenerExtension {
    }
    export interface $IServerConfigurationPacketListenerExtension extends $IServerCommonPacketListenerExtension {
        /**
         * Call when a configuration task is finished
         */
        finishCurrentTask(task: $ConfigurationTask$Type_): void;
    }
    export class $IItemExtension {
    }
    export interface $IItemExtension {
        /**
         * ItemStack sensitive version of getDefaultAttributeModifiers. Used when a stack has no `DataComponents#ATTRIBUTE_MODIFIERS` component.
         */
        getDefaultAttributeModifiers(stack: $ItemStack_): $ItemAttributeModifiers;
        /**
         * Called by Piglins when checking to see if they will give an item or something in exchange for this item.
         */
        isRepairable(stack: $ItemStack_): boolean;
        /**
         * Called by Piglins when checking to see if they will give an item or something in exchange for this item.
         */
        isDamageable(stack: $ItemStack_): boolean;
        /**
         * Called by Piglins when checking to see if they will give an item or something in exchange for this item.
         */
        canFitInsideContainerItems(stack: $ItemStack_): boolean;
        /**
         * Checks if an item should be treated as a primary item for a given enchantment.
         * 
         * Primary items are those that are able to receive the enchantment during enchanting,
         * either from the enchantment table or other random enchantment mechanisms.
         * As a special case, books are primary items for every enchantment.
         * 
         * Other application mechanisms, such as the anvil, check `#supportsEnchantment(ItemStack, Holder)` instead.
         * If you want those mechanisms to be able to apply an enchantment, you will need to add your item to the relevant tag or override that method.
         */
        supportsEnchantment(stack: $ItemStack_, enchantment: $Holder_<$Enchantment>): boolean;
        /**
         * Called when a player drops the item into the world, returning false from this
         * will prevent the item from being removed from the players inventory and
         * spawning in the world
         */
        onDroppedByPlayer(item: $ItemStack_, player: $Player): boolean;
        /**
         * Allow the item one last chance to modify its name used for the tool highlight
         * useful for adding something extra that can't be removed by a user in the
         * displayed name, such as a mode of operation.
         */
        getHighlightTip(item: $ItemStack_, displayName: $Component_): $Component;
        /**
         * This is called when the item is used, before the block is activated.
         */
        onItemUseFirst(stack: $ItemStack_, context: $UseOnContext): $InteractionResult;
        /**
         * Called by Piglins when checking to see if they will give an item or something in exchange for this item.
         */
        isPiglinCurrency(stack: $ItemStack_): boolean;
        /**
         * Determines the amount of durability the mending enchantment
         * will repair, on average, per 0.5 points of experience.
         */
        getXpRepairRatio(stack: $ItemStack_): number;
        /**
         * Called when the player Left Clicks (attacks) an entity. Processed before
         * damage is done, if return value is true further processing is canceled and
         * the entity is not attacked.
         */
        onLeftClickEntity(stack: $ItemStack_, player: $Player, entity: $Entity): boolean;
        /**
         * Retrieves the normal 'lifespan' of this item when it is dropped on the ground
         * as a EntityItem. This is in ticks, standard result is 6000, or 5 mins.
         */
        getEntityLifespan(itemStack: $ItemStack_, level: $Level_): number;
        /**
         * Called by Piglins when checking to see if they will give an item or something in exchange for this item.
         */
        hasCustomEntity(stack: $ItemStack_): boolean;
        /**
         * Called by the default implemetation of EntityItem's onUpdate method, allowing
         * for cleaner control over the update of the item without having to write a
         * subclass.
         */
        onEntityItemUpdate(stack: $ItemStack_, entity: $ItemEntity): boolean;
        doesSneakBypassUse(arg0: $ItemStack_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Player): boolean;
        /**
         * Determines if the specific ItemStack can be placed in the specified armor
         * slot, for the entity.
         */
        canEquip(stack: $ItemStack_, armorType: $EquipmentSlot_, entity: $LivingEntity): boolean;
        /**
         * Allow or forbid the specific book/item combination as an anvil enchant
         */
        isBookEnchantable(stack: $ItemStack_, book: $ItemStack_): boolean;
        /**
         * Called by RenderBiped and RenderPlayer to determine the armor texture that
         * should be use for the currently equipped item. This will only be called on
         * instances of ItemArmor.
         * 
         * Returning null from this function will use the default value.
         */
        getArmorTexture(stack: $ItemStack_, entity: $Entity, slot: $EquipmentSlot_, layer: $ArmorMaterial$Layer, innerModel: boolean): $ResourceLocation;
        /**
         * Set the damage for this itemstack. Note, this method is responsible for zero
         * checking.
         */
        setDamage(stack: $ItemStack_, damage: number): void;
        /**
         * Checks if an item should be treated as a primary item for a given enchantment.
         * 
         * Primary items are those that are able to receive the enchantment during enchanting,
         * either from the enchantment table or other random enchantment mechanisms.
         * As a special case, books are primary items for every enchantment.
         * 
         * Other application mechanisms, such as the anvil, check `#supportsEnchantment(ItemStack, Holder)` instead.
         * If you want those mechanisms to be able to apply an enchantment, you will need to add your item to the relevant tag or override that method.
         */
        isPrimaryItemFor(stack: $ItemStack_, enchantment: $Holder_<$Enchantment>): boolean;
        /**
         * Gets the level of the enchantment currently present on the stack. By default, returns the enchantment level present in NBT.
         * Most enchantment implementations rely upon this method.
         * The returned value must be the same as getting the enchantment from `#getAllEnchantments`
         */
        getEnchantmentLevel(stack: $ItemStack_, enchantment: $Holder_<$Enchantment>): number;
        getAllEnchantments(arg0: $ItemStack_, arg1: $HolderLookup$RegistryLookup<$Enchantment_>): $ItemEnchantments;
        /**
         * Determine if the player switching between these two item stacks
         */
        shouldCauseReequipAnimation(oldStack: $ItemStack_, newStack: $ItemStack_, slotChanged: boolean): boolean;
        /**
         * Allow or forbid the specific book/item combination as an anvil enchant
         */
        shouldCauseBlockBreakReset(stack: $ItemStack_, book: $ItemStack_): boolean;
        /**
         * Called to get the Mod ID of the mod that *created* the ItemStack, instead of
         * the real Mod ID that *registered* it.
         * 
         * For example the Forge Universal Bucket creates a subitem for each modded
         * fluid, and it returns the modded fluid's Mod ID here.
         * 
         * Mods that register subitems for other mods can override this. Informational
         * mods can call it to show the mod that created the item.
         */
        getCreatorModId(itemStack: $ItemStack_): string;
        getBurnTime(itemStack: $ItemStack_, recipeType: $RecipeType_<never>): number;
        /**
         * Called every tick when this item is equipped as an armor item by a horse that can wear armor.
         * 
         * In vanilla, only horses and wolves can wear armor, and they can only equip items that extend `AnimalArmorItem`.
         */
        onAnimalArmorTick(stack: $ItemStack_, level: $Level_, horse: $Mob): void;
        damageItem<T extends $LivingEntity>(arg0: $ItemStack_, arg1: number, arg2: T, arg3: $Consumer_<$Item>): number;
        /**
         * Whether this Item can be used to hide player head for enderman.
         */
        isEnderMask(stack: $ItemStack_, player: $Player, endermanEntity: $EnderMan): boolean;
        /**
         * Whether the given ItemStack should be excluded (if possible) when selecting the target hotbar slot of a "pick" action.
         * By default, this returns true for enchanted stacks.
         */
        isNotReplaceableByPickAction(stack: $ItemStack_, player: $Player, inventorySlot: number): boolean;
        /**
         * Called by Piglins when checking to see if they will give an item or something in exchange for this item.
         */
        canGrindstoneRepair(stack: $ItemStack_): boolean;
        /**
         * @return false to make item entity immune to the damage.
         */
        canBeHurtBy(stack: $ItemStack_, source: $DamageSource_): boolean;
        /**
         * Handles enchanting an item (i.e. in the enchanting table), potentially transforming it to a new item in the process.
         * 
         * Books use this functionality to transform themselves into enchanted books.
         */
        applyEnchantments(stack: $ItemStack_, enchantments: $List_<$EnchantmentInstance>): $ItemStack;
        /**
         * Called by Piglins when checking to see if they will give an item or something in exchange for this item.
         */
        isDamaged(stack: $ItemStack_): boolean;
        /**
         * Return the itemDamage represented by this ItemStack. Defaults to the Damage
         * entry in the stack NBT, but can be overridden here for other sources.
         */
        getMaxDamage(stack: $ItemStack_): number;
        /**
         * ItemStack sensitive version of `Item#getCraftingRemainingItem()`.
         * Returns a full ItemStack instance of the result.
         */
        getCraftingRemainingItem(itemStack: $ItemStack_): $ItemStack;
        /**
         * Called by Piglins when checking to see if they will give an item or something in exchange for this item.
         */
        hasCraftingRemainingItem(stack: $ItemStack_): boolean;
        /**
         * Return the itemDamage represented by this ItemStack. Defaults to the Damage
         * entry in the stack NBT, but can be overridden here for other sources.
         */
        getEnchantmentValue(stack: $ItemStack_): number;
        /**
         * Called when an item entity for this stack is destroyed. Note: The `ItemStack` can be retrieved from the item entity.
         */
        onDestroyed(itemEntity: $ItemEntity, damageSource: $DamageSource_): void;
        /**
         * This function should return a new entity to replace the dropped item.
         * Returning null here will not kill the EntityItem and will leave it to
         * function normally. Called when the item it placed in a level.
         */
        createEntity(level: $Level_, location: $Entity, stack: $ItemStack_): $Entity;
        /**
         * Return the itemDamage represented by this ItemStack. Defaults to the Damage
         * entry in the stack NBT, but can be overridden here for other sources.
         */
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Called by Piglins to check if a given item prevents hostility on sight. If this is true the Piglins will be neutral to the entity wearing this item, and will not
         * attack on sight. Note: This does not prevent Piglins from becoming hostile due to other actions, nor does it make Piglins that are already hostile stop being so.
         */
        canWalkOnPowderedSnow(stack: $ItemStack_, wearer: $LivingEntity): boolean;
        /**
         * Called by Piglins to check if a given item prevents hostility on sight. If this is true the Piglins will be neutral to the entity wearing this item, and will not
         * attack on sight. Note: This does not prevent Piglins from becoming hostile due to other actions, nor does it make Piglins that are already hostile stop being so.
         */
        makesPiglinsNeutral(stack: $ItemStack_, wearer: $LivingEntity): boolean;
        /**
         * Override this to set a non-default armor slot for an ItemStack, but *do
         * not use this to get the armor slot of said stack; for that, use
         * `LivingEntity#getEquipmentSlotForItem(ItemStack)`..*
         */
        getEquipmentSlot(stack: $ItemStack_): $EquipmentSlot;
        getSweepHitBox(stack: $ItemStack_, player: $Player, target: $Entity): $AABB;
        /**
         * Called when a entity tries to play the 'swing' animation.
         */
        onEntitySwing(stack: $ItemStack_, entity: $LivingEntity, hand: $InteractionHand_): boolean;
        /**
         * @deprecated
         * Called by Piglins to check if a given item prevents hostility on sight. If this is true the Piglins will be neutral to the entity wearing this item, and will not
         * attack on sight. Note: This does not prevent Piglins from becoming hostile due to other actions, nor does it make Piglins that are already hostile stop being so.
         */
        onEntitySwing(stack: $ItemStack_, wearer: $LivingEntity): boolean;
        /**
         * Called by Piglins to check if a given item prevents hostility on sight. If this is true the Piglins will be neutral to the entity wearing this item, and will not
         * attack on sight. Note: This does not prevent Piglins from becoming hostile due to other actions, nor does it make Piglins that are already hostile stop being so.
         */
        canElytraFly(stack: $ItemStack_, wearer: $LivingEntity): boolean;
        /**
         * Used to determine if the player can continue Elytra flight,
         * this is called each tick, and can be used to apply ItemStack damage,
         * consume Energy, or what have you.
         * For example the Vanilla implementation of this, applies damage to the
         * ItemStack every 20 ticks.
         */
        elytraFlightTick(stack: $ItemStack_, entity: $LivingEntity, flightTicks: number): boolean;
        /**
         * Allow or forbid the specific book/item combination as an anvil enchant
         */
        canContinueUsing(stack: $ItemStack_, book: $ItemStack_): boolean;
        /**
         * Called when an entity stops using an item for any reason, notably when selecting another item without releasing or finishing.
         * This method is called in addition to any other hooks called when an item is finished using; when another hook is also called it will be called before this method.
         * 
         * Note that if you break an item while using it (that is, it becomes empty without swapping the stack instance), this hook may not be called on the serverside as you are
         * technically still using the empty item (thus this hook is called on air instead). It is necessary to call `LivingEntity#stopUsingItem()` as part of your
         * `ItemStack#hurtAndBreak(int, LivingEntity, Consumer)` callback to prevent this issue.
         * 
         * For most uses, you likely want one of the following:
         */
        onStopUsing(stack: $ItemStack_, entity: $LivingEntity, count: number): void;
        /**
         * Queries if an item can perform the given action.
         * See `ItemAbilities` for a description of each stock action
         */
        canPerformAction(stack: $ItemStack_, itemAbility: $ItemAbility_): boolean;
        /**
         * Get the food properties for this item.
         * Use this instead of the `Item#getFoodProperties()` method, for ItemStack sensitivity.
         * 
         * The @Nullable annotation was only added, due to the default method, also being @Nullable.
         * Use this with a grain of salt, as if you return null here and true at `Item#isEdible()`, NPEs will occur!
         */
        getFoodProperties(stack: $ItemStack_, entity: $LivingEntity): $FoodProperties;
        /**
         * Can this Item disable a shield
         */
        canDisableShield(stack: $ItemStack_, shield: $ItemStack_, entity: $LivingEntity, attacker: $LivingEntity): boolean;
        /**
         * Return the itemDamage represented by this ItemStack. Defaults to the Damage
         * entry in the stack NBT, but can be overridden here for other sources.
         */
        getDamage(stack: $ItemStack_): number;
    }
    /**
     * Values that may be interpreted as {@link $IItemExtension}.
     */
    export type $IItemExtension_ = ((arg0: $ItemStack) => boolean);
    export class $IDataComponentMapBuilderExtensions {
    }
    export interface $IDataComponentMapBuilderExtensions {
        set<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T): $DataComponentMap$Builder;
    }
    export class $IDataComponentHolderExtension {
    }
    export interface $IDataComponentHolderExtension {
        addToTooltip<T extends $TooltipProvider>(type: $DataComponentType_<T>, context: $Item$TooltipContext, adder: $Consumer_<$Component>, flag: $TooltipFlag): void;
        addToTooltip<T extends $TooltipProvider>(type: $Supplier_<$DataComponentType<T>>, context: $Item$TooltipContext, adder: $Consumer_<$Component>, flag: $TooltipFlag): void;
        get<T>(arg0: $Supplier_<$DataComponentType<T>>): T;
        getOrDefault<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T): T;
        has(type: $Supplier_<$DataComponentType<never>>): boolean;
    }
    export class $IBlockEntityExtension {
    }
    export interface $IBlockEntityExtension {
        /**
         * Allows you to return additional model data.
         * This data can be used to provide additional functionality in your `BakedModel`.
         * You need to schedule a refresh of you model data via `#requestModelDataUpdate()` if the result of this function changes.
         * 
         * This method is always called on the main client thread.
         */
        getModelData(): $ModelData;
        invalidateCapabilities(): void;
        requestModelDataUpdate(): void;
        /**
         * Called when you receive a TileEntityData packet for the location this
         * TileEntity is currently in. On the client, the NetworkManager will always
         * be the remote server. On the server, it will be whomever is responsible for
         * sending the packet.
         */
        onDataPacket(net: $Connection, pkt: $ClientboundBlockEntityDataPacket, lookupProvider: $HolderLookup$Provider): void;
        /**
         * Called when the chunk's TE update tag, gotten from `Provider)`, is received on the client.
         * 
         * Used to handle this tag in a special way. By default this simply calls `Provider)`.
         */
        handleUpdateTag(tag: $CompoundTag_, lookupProvider: $HolderLookup$Provider): void;
        onChunkUnloaded(): void;
        onLoad(): void;
        /**
         * Gets a `CompoundTag` that can be used to store custom data for this block entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getPersistentData(): $CompoundTag;
        /**
         * Returns whether this `BlockEntity` has custom outline rendering behavior.
         */
        hasCustomOutlineRendering(player: $Player): boolean;
        get modelData(): $ModelData;
        get persistentData(): $CompoundTag;
    }
    /**
     * Values that may be interpreted as {@link $IBlockEntityExtension}.
     */
    export type $IBlockEntityExtension_ = (() => $CompoundTag_);
    export class $IItemStackExtension {
    }
    export interface $IItemStackExtension {
        /**
         * Computes the gameplay attribute modifiers for this item stack. Used in place of direct access to `ATTRIBUTE_MODIFIERS`
         * or `Item#getDefaultAttributeModifiers(ItemStack)` when querying attributes for gameplay purposes.
         * 
         * This method first computes the default modifiers, using `ATTRIBUTE_MODIFIERS` if present, otherwise
         * falling back to `Item#getDefaultAttributeModifiers(ItemStack)`.
         * 
         * The `ItemAttributeModifiersEvent` is then fired to allow external adjustments.
         */
        getAttributeModifiers(): $ItemAttributeModifiers;
        /**
         * ItemStack sensitive version of `Item#hasCraftingRemainingItem()`.
         */
        isRepairable(): boolean;
        /**
         * ItemStack sensitive version of `Item#hasCraftingRemainingItem()`.
         */
        canFitInsideContainerItems(): boolean;
        supportsEnchantment(enchantment: $Holder_<$Enchantment>): boolean;
        /**
         * Called when a player drops the item into the world, returning false from this
         * will prevent the item from being removed from the players inventory and
         * spawning in the world
         */
        onDroppedByPlayer(player: $Player): boolean;
        /**
         * Allow the item one last chance to modify its name used for the tool highlight
         * useful for adding something extra that can't be removed by a user in the
         * displayed name, such as a mode of operation.
         */
        getHighlightTip(displayName: $Component_): $Component;
        onItemUseFirst(context: $UseOnContext): $InteractionResult;
        /**
         * ItemStack sensitive version of `Item#hasCraftingRemainingItem()`.
         */
        isPiglinCurrency(): boolean;
        /**
         * Determines the amount of durability the mending enchantment
         * will repair, on average, per point of experience.
         */
        getXpRepairRatio(): number;
        /**
         * Retrieves the normal 'lifespan' of this item when it is dropped on the ground
         * as a EntityItem. This is in ticks, standard result is 6000, or 5 mins.
         */
        getEntityLifespan(level: $Level_): number;
        /**
         * Called by the default implemetation of EntityItem's onUpdate method, allowing
         * for cleaner control over the update of the item without having to write a
         * subclass.
         */
        onEntityItemUpdate(entity: $ItemEntity): boolean;
        doesSneakBypassUse(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Player): boolean;
        /**
         * Determines if the specific ItemStack can be placed in the specified armor
         * slot, for the entity.
         */
        canEquip(armorType: $EquipmentSlot_, entity: $LivingEntity): boolean;
        /**
         * Called when the player is mining a block and the item in his hand changes.
         * Allows to not reset blockbreaking if only NBT or similar changes.
         */
        isBookEnchantable(newStack: $ItemStack_): boolean;
        isPrimaryItemFor(enchantment: $Holder_<$Enchantment>): boolean;
        /**
         * Gets the gameplay level of the target enchantment on this stack.
         * 
         * Use in place of `EnchantmentHelper#getTagEnchantmentLevel` for gameplay logic.
         * 
         * Use `EnchantmentHelper#getEnchantmentsForCrafting` and `EnchantmentHelper#setEnchantments` when modifying the item's enchantments.
         */
        getEnchantmentLevel(enchantment: $Holder_<$Enchantment>): number;
        getAllEnchantments(arg0: $HolderLookup$RegistryLookup<$Enchantment_>): $ItemEnchantments;
        /**
         * Called when the player is mining a block and the item in his hand changes.
         * Allows to not reset blockbreaking if only NBT or similar changes.
         */
        shouldCauseBlockBreakReset(newStack: $ItemStack_): boolean;
        /**
         * Returns the fuel burn time for this item stack. If it is zero, this item is not a fuel.
         * 
         * Will never return a negative value.
         */
        getBurnTime(recipeType: $RecipeType_<never>): number;
        /**
         * Called every tick when this item is equipped as an armor item by a horse Mob#canWearBodyArmor() that can wear armor}.
         * 
         * In vanilla, only horses and wolves can wear armor, and they can only equip items that extend `AnimalArmorItem`.
         */
        onAnimalArmorTick(level: $Level_, horse: $Mob): void;
        /**
         * Whether this Item can be used to hide player head for enderman.
         */
        isEnderMask(player: $Player, endermanEntity: $EnderMan): boolean;
        /**
         * Whether this stack should be excluded (if possible) when selecting the target hotbar slot of a "pick" action.
         * By default, this returns true for enchanted stacks.
         */
        isNotReplaceableByPickAction(player: $Player, inventorySlot: number): boolean;
        /**
         * ItemStack sensitive version of `Item#hasCraftingRemainingItem()`.
         */
        canGrindstoneRepair(): boolean;
        getCraftingRemainingItem(): $ItemStack;
        /**
         * ItemStack sensitive version of `Item#hasCraftingRemainingItem()`.
         */
        hasCraftingRemainingItem(): boolean;
        /**
         * ItemStack sensitive version of `Item#getEnchantmentValue()`.
         */
        getEnchantmentValue(): number;
        /**
         * Called when an item entity for this stack is destroyed. Note: The `ItemStack` can be retrieved from the item entity.
         */
        onDestroyed(itemEntity: $ItemEntity, damageSource: $DamageSource_): void;
        /**
         * Called when a entity tries to play the 'swing' animation.
         */
        canWalkOnPowderedSnow(entity: $LivingEntity): boolean;
        /**
         * Called when a entity tries to play the 'swing' animation.
         */
        makesPiglinsNeutral(entity: $LivingEntity): boolean;
        /**
         * Override this to set a non-default armor slot for an ItemStack, but *do
         * not use this to get the armor slot of said stack; for that, use
         * `LivingEntity#getEquipmentSlotForItem(ItemStack)`.*
         */
        getEquipmentSlot(): $EquipmentSlot;
        getSweepHitBox(player: $Player, target: $Entity): $AABB;
        /**
         * Called when a entity tries to play the 'swing' animation.
         */
        onEntitySwing(entity: $LivingEntity, hand: $InteractionHand_): boolean;
        /**
         * @deprecated
         * Called when a entity tries to play the 'swing' animation.
         */
        onEntitySwing(entity: $LivingEntity): boolean;
        /**
         * Called when a entity tries to play the 'swing' animation.
         */
        canElytraFly(entity: $LivingEntity): boolean;
        /**
         * Used to determine if the player can continue Elytra flight,
         * this is called each tick, and can be used to apply ItemStack damage,
         * consume Energy, or what have you.
         * For example the Vanilla implementation of this, applies damage to the
         * ItemStack every 20 ticks.
         */
        elytraFlightTick(entity: $LivingEntity, flightTicks: number): boolean;
        /**
         * Called when an entity stops using an item item for any reason.
         */
        onStopUsing(entity: $LivingEntity, count: number): void;
        /**
         * Queries if an item can perform the given action.
         * See `ItemAbilities` for a description of each stock action
         */
        canPerformAction(itemAbility: $ItemAbility_): boolean;
        /**
         * Get the food properties for this item.
         * This is a bouncer for easier use of `IItemExtension#getFoodProperties(ItemStack, LivingEntity)`
         * 
         * The @Nullable annotation was only added, due to the default method, also being @Nullable.
         * Use this with a grain of salt, as if you return null here and true at `Item#isEdible()`, NPEs will occur!
         */
        getFoodProperties(entity: $LivingEntity): $FoodProperties;
        /**
         * Can this Item disable a shield
         */
        canDisableShield(shield: $ItemStack_, entity: $LivingEntity, attacker: $LivingEntity): boolean;
        getCapability<T>(arg0: $ItemCapability<T, void>): T;
        getCapability<T, C>(arg0: $ItemCapability<T, C>, arg1: C): T;
        get attributeModifiers(): $ItemAttributeModifiers;
        get repairable(): boolean;
        get piglinCurrency(): boolean;
        get xpRepairRatio(): number;
        get craftingRemainingItem(): $ItemStack;
        get enchantmentValue(): number;
        get equipmentSlot(): $EquipmentSlot;
    }
    export class $IBoatExtension {
    }
    export interface $IBoatExtension {
        /**
         * Returns whether the boat can be used on the fluid.
         */
        canBoatInFluid(state: $FluidState): boolean;
        /**
         * Returns whether the boat can be used on the fluid.
         */
        canBoatInFluid(type: $FluidType_): boolean;
    }
    /**
     * Additional helper methods for `FriendlyByteBuf`.
     */
    export class $IFriendlyByteBufExtension {
    }
    export interface $IFriendlyByteBufExtension {
        /**
         * Writes the entries in the given set to the buffer, by first writing the count and then writing each entry.
         */
        writeObjectCollection<T>(set: $Collection_<T>, writer: $BiConsumer_<T, $FriendlyByteBuf>): void;
        /**
         * Variant of `FriendlyByteBuf#writeMap(Map, StreamEncoder, StreamEncoder)` that allows writing values
         * that depend on the key.
         */
        writeMap<K, V>(map: $Map_<K, V>, keyWriter: $StreamEncoder_<$FriendlyByteBuf, K>, valueWriter: $TriConsumer_<$FriendlyByteBuf, K, V>): void;
        /**
         * Writes a byte to the buffer
         */
        writeByte(value: number): $FriendlyByteBuf;
        /**
         * Variant of `FriendlyByteBuf#readMap(StreamDecoder, StreamDecoder)` that allows reading values
         * that depend on the key.
         */
        readMap<K, V>(keyReader: $StreamDecoder_<$FriendlyByteBuf, K>, valueReader: $BiFunction_<$FriendlyByteBuf, K, V>): $Map<K, V>;
        readArray<T>(arg0: $IntFunction_<T[]>, arg1: $StreamDecoder_<$FriendlyByteBuf, T>): T[];
        writeArray<T>(arg0: T[], arg1: $StreamEncoder_<$FriendlyByteBuf, T>): $FriendlyByteBuf;
    }
    /**
     * Extension class for `PlayerList`
     * 
     * This interface with its default methods allows for easy sending of payloads to all, or specific, players on the server.
     */
    export class $IPlayerListExtension {
    }
    export interface $IPlayerListExtension {
        /**
         * Sends a payload to all players within the specific level.
         */
        broadcastAll(payload: $CustomPacketPayload_, targetLevel: $ResourceKey_<$Level>): void;
        /**
         * Sends a payload to all players on the server
         */
        broadcastAll(payload: $CustomPacketPayload_): void;
        /**
         * @return the PlayerList instance that this extension is attached to
         */
        self(): $PlayerList;
        /**
         * Sends a payload to all players within the specific level, within a given range around the target point
         */
        broadcast(x: number, y: number, z: number, range: number, level: $ResourceKey_<$Level>, payload: $CustomPacketPayload_): void;
        /**
         * Sends a payload to all players within the specific level, within a given range around the target point, excluding the specified player.
         */
        broadcast(excludedPlayer: $Player, x: number, y: number, z: number, range: number, level: $ResourceKey_<$Level>, payload: $CustomPacketPayload_): void;
    }
    export class $ITagAppenderExtension<T> {
    }
    export interface $ITagAppenderExtension<T> {
        addTags(...arg0: $TagKey_<T>[]): $TagsProvider$TagAppender<T>;
        addOptionalTags(...arg0: $TagKey_<T>[]): $TagsProvider$TagAppender<T>;
        addOptionalTag(values: $TagKey_<T>): $TagsProvider$TagAppender<T>;
        remove(arg0: $ResourceLocation_, ...arg1: $ResourceLocation_[]): $TagsProvider$TagAppender<T>;
        /**
         * Adds a resource key to the tag json's remove list. Callable during datageneration.
         */
        remove(resourceKey: $ResourceKey_<T>): $TagsProvider$TagAppender<T>;
        remove(arg0: $ResourceKey_<T>, ...arg1: $ResourceKey_<T>[]): $TagsProvider$TagAppender<T>;
        remove(values: $TagKey_<T>): $TagsProvider$TagAppender<T>;
        remove(arg0: $TagKey_<T>, ...arg1: $TagKey_<T>[]): $TagsProvider$TagAppender<T>;
        /**
         * Adds a single element's ID to the tag json's remove list. Callable during datageneration.
         */
        remove(location: $ResourceLocation_): $TagsProvider$TagAppender<T>;
        replace(): $TagsProvider$TagAppender<T>;
        replace(value: boolean): $TagsProvider$TagAppender<T>;
    }
    export class $IFluidStateExtension {
    }
    export interface $IFluidStateExtension {
        /**
         * Returns whether the fluid can create a source.
         */
        canConvertToSource(level: $Level_, pos: $BlockPos_): boolean;
        /**
         * Returns whether the boat can be used on the fluid.
         */
        supportsBoating(boat: $Boat): boolean;
        /**
         * Gets the path type of this fluid when an entity is pathfinding. When
         * `null`, uses vanilla behavior.
         */
        getBlockPathType(level: $BlockGetter, pos: $BlockPos_, mob: $Mob, canFluidLog: boolean): $PathType;
        /**
         * Gets the path type of the adjacent fluid to a pathfinding entity.
         * Path types with a negative malus are not traversable for the entity.
         * Pathfinding entities will favor paths consisting of a lower malus.
         * When `null`, uses vanilla behavior.
         */
        getAdjacentBlockPathType(level: $BlockGetter, pos: $BlockPos_, mob: $Mob, originalType: $PathType_): $PathType;
        /**
         * Returns the explosion resistance of the fluid.
         */
        getExplosionResistance(level: $BlockGetter, pos: $BlockPos_, explosion: $Explosion): number;
        /**
         * Performs how an entity moves when within the fluid. If using custom
         * movement logic, the method should return `true`. Otherwise, the
         * movement logic will default to water.
         */
        move(entity: $LivingEntity, movementVector: $Vec3_, gravity: number): boolean;
        /**
         * Returns the type of this fluid.
         */
        getFluidType(): $FluidType;
        /**
         * Returns whether the block can be extinguished by this fluid.
         */
        canExtinguish(getter: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Returns whether the block can be hydrated by a fluid.
         * 
         * Hydration is an arbitrary word which depends on the block.
         * 
         * - A farmland has moisture
         * - A sponge can soak up the liquid
         * - A coral can live
         */
        canHydrate(getter: $BlockGetter, pos: $BlockPos_, source: $BlockState_, sourcePos: $BlockPos_): boolean;
        get fluidType(): $FluidType;
    }
    export class $ILivingEntityExtension {
    }
    export interface $ILivingEntityExtension extends $IEntityExtension {
        self(): $LivingEntity;
        /**
         * Executes in `LivingEntity#hurt(DamageSource, float)` after all damage and
         * effects have applied. Overriding this method is preferred over overriding the
         * hurt method in custom entities where special behavior is desired after vanilla
         * logic.
         */
        onDamageTaken(damageContainer: $DamageContainer): void;
        /**
         * Performs what to do when an entity attempts to go up or "jump" in a fluid.
         */
        sinkInFluid(type: $FluidType_): void;
        /**
         * Performs how an entity moves when within the fluid. If using custom
         * movement logic, the method should return `true`. Otherwise, the
         * movement logic will default to water.
         */
        moveInFluid(state: $FluidState, movementVector: $Vec3_, gravity: number): boolean;
        /**
         * Performs what to do when an entity attempts to go up or "jump" in a fluid.
         */
        jumpInFluid(type: $FluidType_): void;
        canSwimInFluidType(type: $FluidType_): boolean;
        canDrownInFluidType(type: $FluidType_): boolean;
    }
    export class $IPlayerExtension {
    }
    export interface $IPlayerExtension {
        /**
         * Request to open a GUI on the client, from the server
         * 
         * Refer to `MenuType#create(IContainerFactory)` for creating a `MenuType` that can consume the
         * extra data sent to the client by this method.
         * 
         * The maximum size for #extraDataWriter is 32600 bytes.
         */
        openMenu(menuProvider: $MenuProvider, extraDataWriter: $Consumer_<$RegistryFriendlyByteBuf>): $OptionalInt;
        /**
         * Request to open a GUI on the client, from the server
         * 
         * Refer to `MenuType#create(IContainerFactory)` for creating a `MenuType` that can consume the
         * extra data sent to the client by this method.
         * 
         * Use `FriendlyByteBuf#readBlockPos()` to read the position you pass to this method.
         */
        openMenu(menuProvider: $MenuProvider, pos: $BlockPos_): $OptionalInt;
        /**
         * Determine whether a player is allowed creative flight via game mode or attribute.
         * 
         * Modders are discouraged from setting `Abilities#mayfly` directly.
         */
        mayFly(): boolean;
        /**
         * Utility check to see if the player is close enough to a target entity. Uses "eye-to-closest-corner" checks.
         */
        isCloseEnough(entity: $Entity, dist: number): boolean;
        /**
         * Determine whether a player is allowed creative flight via game mode or attribute.
         * 
         * Modders are discouraged from setting `Abilities#mayfly` directly.
         */
        isFakePlayer(): boolean;
        get fakePlayer(): boolean;
    }
    /**
     * Extension class for `ServerGamePacketListener`
     */
    export class $IServerGamePacketListenerExtension {
    }
    export interface $IServerGamePacketListenerExtension extends $IServerCommonPacketListenerExtension {
        sendBundled(...arg0: $CustomPacketPayload_[]): void;
        /**
         * Sends all given payloads as a bundle to the client.
         */
        sendBundled(payloads: $Iterable_<$CustomPacketPayload>): void;
    }
    export class $TooltipFlagExtension {
    }
    export interface $TooltipFlagExtension {
        shouldDisplayAllInformation(): boolean;
        hasControlDown(): boolean;
        hasShiftDown(): boolean;
        hasAltDown(): boolean;
    }
    export class $IHolderSetExtension<T> {
    }
    export interface $IHolderSetExtension<T> {
        /**
         * Adds a callback to run when this holderset's contents invalidate (i.e. because tags were rebound).
         * 
         * The intended usage and use case is with composite holdersets that need to cache sets/list based on other
         * holdersets, which may be mutable (because they are tag-based or themselves composite holdersets).
         * Composite holdersets should use this to add callbacks to each of their component holdersets when constructed.
         */
        addInvalidationListener(runnable: $Runnable_): void;
        serializationType(): $IHolderSetExtension$SerializationType;
    }
    /**
     * Extension class for `ServerChunkCache`
     * 
     * This interface with its default methods allows for easy sending of payloads players watching a specific entity.
     */
    export class $IServerChunkCacheExtension {
    }
    export interface $IServerChunkCacheExtension {
        self(): $ServerChunkCache;
        /**
         * Sends a payload to all players watching the given entity.
         * 
         * If the entity is a player, the payload will be sent to that player.
         */
        broadcast(entity: $Entity, payload: $CustomPacketPayload_): void;
        /**
         * Sends a payload to all players watching the given entity.
         * 
         * If the entity is a player, the payload will be sent to that player.
         */
        broadcastAndSend(entity: $Entity, payload: $CustomPacketPayload_): void;
    }
    /**
     * Extension interface and functionality hoist for both `ServerCommonPacketListener`
     * and `ClientCommonPacketListener`.
     */
    export class $ICommonPacketListener {
    }
    export interface $ICommonPacketListener extends $PacketListener {
        /**
         * @return the connection type of this packet listener
         */
        getConnectionType(): $ConnectionType;
        /**
         * @return the main thread event loop
         */
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        /**
         * Triggers a disconnection with the given reason.
         */
        disconnect(reason: $Component_): void;
        /**
         * Sends a packet to the target of this listener.
         */
        send(packet: $Packet<never>): void;
        /**
         * Sends a payload to the target of this listener.
         */
        send(payload: $CustomPacketPayload_): void;
        /**
         * Checks if the connection has negotiated and opened a channel for the payload.
         */
        hasChannel(payloadId: $ResourceLocation_): boolean;
        hasChannel(type: $CustomPacketPayload$Type_<never>): boolean;
        hasChannel(payload: $CustomPacketPayload_): boolean;
        /**
         * @return the connection this listener is attached to
         */
        getConnection(): $Connection;
        get connectionType(): $ConnectionType;
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        get connection(): $Connection;
    }
    export class $IBlockGetterExtension {
    }
    export interface $IBlockGetterExtension {
        /**
         * Retrieves model data for a block at the given position.
         */
        getModelData(pos: $BlockPos_): $ModelData;
        /**
         * Get the `AuxiliaryLightManager` of the chunk at the given `ChunkPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $ChunkPos): $AuxiliaryLightManager;
        /**
         * Get the `AuxiliaryLightManager` of the chunk containing the given `BlockPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $BlockPos_): $AuxiliaryLightManager;
    }
    export class $IIntrinsicHolderTagAppenderExtension<T> {
    }
    export interface $IIntrinsicHolderTagAppenderExtension<T> extends $ITagAppenderExtension<T> {
        addTags(...arg0: $TagKey_<T>[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        remove(arg0: $ResourceKey_<T>, ...arg1: $ResourceKey_<T>[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        remove(arg0: T): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        remove(arg0: T, ...arg1: T[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        getKey(arg0: T): $ResourceKey<T>;
        replace(value: boolean): $TagsProvider$TagAppender<T>;
        replace(): $TagsProvider$TagAppender<T>;
    }
    /**
     * Values that may be interpreted as {@link $IIntrinsicHolderTagAppenderExtension}.
     */
    export type $IIntrinsicHolderTagAppenderExtension_<T> = ((arg0: T) => $ResourceKey_<T>);
    export class $IBlockStateExtension {
    }
    export interface $IBlockStateExtension {
        /**
         * Called when fire is updating, checks if a block face can catch fire.
         */
        canRedstoneConnectTo(level: $BlockGetter, pos: $BlockPos_, face: $Direction_): boolean;
        /**
         * Determines the amount of enchanting power this block can provide to an enchanting table.
         */
        getEnchantPowerBonus(level: $LevelReader, pos: $BlockPos_): number;
        /**
         * Called when a block entity on a side of this block changes, is created, or is destroyed.
         * 
         * This method is not suitable for listening to capability invalidations.
         * For capability invalidations specifically, use `BlockCapabilityCache` instead.
         */
        onNeighborChange(level: $LevelReader, pos: $BlockPos_, neighbor: $BlockPos_): void;
        /**
         * Called to determine whether to allow the block to handle its own indirect power rather than using the default rules.
         */
        shouldCheckWeakPower(level: $SignalGetter, pos: $BlockPos_, side: $Direction_): boolean;
        /**
         * If this block should be notified of weak changes.
         * Weak changes are changes 1 block away through a solid block.
         * Similar to comparators.
         */
        getWeakChanges(level: $LevelReader, pos: $BlockPos_): boolean;
        getBeaconColorMultiplier(level: $LevelReader, pos: $BlockPos_, beacon: $BlockPos_): number;
        /**
         * Used to determine the state 'viewed' by an entity (see
         * `Camera#getBlockAtCamera()`).
         * Can be used by fluid blocks to determine if the viewpoint is within the fluid or not.
         */
        getStateAtViewpoint(level: $BlockGetter, pos: $BlockPos_, viewpoint: $Vec3_): $BlockState;
        /**
         * Whether this block state has dynamic light emission which is not solely based on its underlying block or its
         * state properties and instead uses the `BlockPos`, the `AuxiliaryLightManager` or another external
         * data source to determine its light value in `#getLightEmission(BlockGetter, BlockPos)`
         */
        isSlimeBlock(): boolean;
        /**
         * Determines if this block can stick to another block when pushed by a piston.
         */
        canStickTo(other: $BlockState_): boolean;
        /**
         * Called when fire is updating, checks if a block face can catch fire.
         */
        isFlammable(level: $BlockGetter, pos: $BlockPos_, face: $Direction_): boolean;
        /**
         * If the block is flammable, this is called when it gets lit on fire.
         */
        onCaughtFire(level: $Level_, pos: $BlockPos_, face: $Direction_, igniter: $LivingEntity): void;
        /**
         * Chance that fire will spread and consume this block.
         * 300 being a 100% chance, 0, being a 0% chance.
         */
        getFireSpreadSpeed(level: $BlockGetter, pos: $BlockPos_, face: $Direction_): number;
        /**
         * Currently only called by fire when it is on top of this block.
         * Returning true will prevent the fire from naturally dying during updating.
         * Also prevents firing from dying from rain.
         */
        isFireSource(level: $LevelReader, pos: $BlockPos_, side: $Direction_): boolean;
        /**
         * Determines if this block is can be destroyed by the specified entities normal behavior.
         */
        canEntityDestroy(level: $BlockGetter, pos: $BlockPos_, entity: $Entity): boolean;
        /**
         * Determines if this block should drop loot when exploded.
         */
        canDropFromExplosion(level: $BlockGetter, pos: $BlockPos_, explosion: $Explosion): boolean;
        /**
         * Called when the block is destroyed by an explosion.
         * Useful for allowing the block to take into account tile entities,
         * state, etc. when exploded, before it is removed.
         */
        onBlockExploded(level: $Level_, pos: $BlockPos_, explosion: $Explosion): void;
        /**
         * Called to determine whether this block should use the fluid overlay texture or flowing texture when it is placed under the fluid.
         */
        shouldDisplayFluidOverlay(level: $BlockAndTintGetter, pos: $BlockPos_, fluidState: $FluidState): boolean;
        /**
         * Returns the state that this block should transform into when right-clicked by a tool.
         * For example: Used to determine if an axe can strip,
         * a shovel can path, or a hoe can till.
         * Returns `null` if nothing should happen.
         */
        getToolModifiedState(context: $UseOnContext, itemAbility: $ItemAbility_, simulate: boolean): $BlockState;
        /**
         * Called after the `BlockState` at the given `BlockPos` was changed and neighbors were updated.
         * This method is called on the server and client side.
         * Modifying the level is disallowed in this method.
         * Useful for calculating additional data based on the new state and the neighbor's reactions to the state change.
         */
        onBlockStateChange(level: $LevelReader, pos: $BlockPos_, oldState: $BlockState_): void;
        /**
         * Returns whether the block can be hydrated by a fluid.
         * 
         * Hydration is an arbitrary word which depends on the block.
         * 
         * - A farmland has moisture
         * - A sponge can soak up the liquid
         * - A coral can live
         */
        canBeHydrated(getter: $BlockGetter, pos: $BlockPos_, fluid: $FluidState, fluidPos: $BlockPos_): boolean;
        /**
         * Returns the `BlockState` that this state reports to look like on the given side for querying by other mods.
         */
        getAppearance(level: $BlockAndTintGetter, pos: $BlockPos_, side: $Direction_, queryState: $BlockState_, queryPos: $BlockPos_): $BlockState;
        /**
         * Determines if this block can spawn Bubble Columns and if so, what direction the column flows.
         * 
         * NOTE: The block itself will still need to call `BubbleColumnBlock#updateColumn(LevelAccessor, BlockPos, BlockState)` in their tick method and schedule a block tick in the block's onPlace.
         * Also, schedule a fluid tick in updateShape method if update direction is up. Both are needed in order to get the Bubble Columns to function properly. See `SoulSandBlock` and `MagmaBlock` for example.
         */
        getBubbleColumnDirection(): $BubbleColumnDirection;
        /**
         * Determines if a fluid adjacent to the block on the given side should not be rendered.
         */
        shouldHideAdjacentFluidFace(selfFace: $Direction_, adjacentFluid: $FluidState): boolean;
        /**
         * Gets the path type of this block when an entity is pathfinding. When
         * `null`, uses vanilla behavior.
         */
        getBlockPathType(level: $BlockGetter, pos: $BlockPos_, mob: $Mob): $PathType;
        /**
         * Gets the path type of the adjacent block to a pathfinding entity.
         * Path types with a negative malus are not traversable for the entity.
         * Pathfinding entities will favor paths consisting of a lower malus.
         * When `null`, uses vanilla behavior.
         */
        getAdjacentBlockPathType(level: $BlockGetter, pos: $BlockPos_, mob: $Mob, originalType: $PathType_): $PathType;
        /**
         * Get a light value for this block, taking into account the given state and coordinates, normal ranges are between 0 and 15
         */
        getLightEmission(level: $BlockGetter, pos: $BlockPos_): number;
        /**
         * Called when fire is updating, checks if a block face can catch fire.
         */
        ignitedByLava(level: $BlockGetter, pos: $BlockPos_, face: $Direction_): boolean;
        /**
         * Checks if this soil is fertile, typically this means that growth rates
         * of plants on this soil will be slightly sped up.
         * Only vanilla case is tilledField when it is within range of water.
         */
        isBurning(level: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Whether this block state has dynamic light emission which is not solely based on its underlying block or its
         * state properties and instead uses the `BlockPos`, the `AuxiliaryLightManager` or another external
         * data source to determine its light value in `#getLightEmission(BlockGetter, BlockPos)`
         */
        isStickyBlock(): boolean;
        /**
         * Chance that fire will spread and consume this block.
         * 300 being a 100% chance, 0, being a 0% chance.
         */
        getFlammability(level: $BlockGetter, pos: $BlockPos_, face: $Direction_): number;
        /**
         * Whether this block state has dynamic light emission which is not solely based on its underlying block or its
         * state properties and instead uses the `BlockPos`, the `AuxiliaryLightManager` or another external
         * data source to determine its light value in `#getLightEmission(BlockGetter, BlockPos)`
         */
        hasDynamicLightEmission(): boolean;
        /**
         * Checks if a player or entity can use this block to 'climb' like a ladder.
         */
        isLadder(level: $LevelReader, pos: $BlockPos_, entity: $LivingEntity): boolean;
        /**
         * Determines if the player can harvest this block, obtaining it's drops when the block is destroyed.
         */
        canHarvestBlock(level: $BlockGetter, pos: $BlockPos_, player: $Player): boolean;
        /**
         * Called when a player removes a block. This is responsible for
         * actually destroying the block, and the block is intact at time of call.
         * This is called regardless of whether the player can harvest the block or
         * not.
         * 
         * Return true if the block is actually destroyed.
         * 
         * This function is called on both the logical client and logical server.
         */
        onDestroyedByPlayer(level: $Level_, pos: $BlockPos_, player: $Player, willHarvest: boolean, fluid: $FluidState): boolean;
        /**
         * Called when a block is removed by `PushReaction#DESTROY`. This is responsible for
         * actually destroying the block, and the block is intact at time of call.
         * 
         * Will only be called if `BlockState#getPistonPushReaction` returns `PushReaction#DESTROY`.
         * 
         * Note: When used in multiplayer, this is called on both client and
         * server sides!
         */
        onDestroyedByPushReaction(level: $Level_, pos: $BlockPos_, pushDirection: $Direction_, fluid: $FluidState): void;
        /**
         * Returns the position that the entity is moved to upon
         * respawning at this block.
         */
        getRespawnPosition(type: $EntityType_<never>, level: $LevelReader, pos: $BlockPos_, orientation: number): ($ServerPlayer$RespawnPosAngle) | undefined;
        /**
         * Determines if this block either force allow or force disallow a plant from being placed on it. (Or pass and let the plant's decision win)
         * This will be called in plant's canSurvive method and/or mayPlace method.
         */
        canSustainPlant(level: $BlockGetter, soilPosition: $BlockPos_, facing: $Direction_, plant: $BlockState_): $TriState;
        /**
         * Called when a tree grows on top of this block and tries to set it to dirt by the trunk placer.
         * An override that returns true is responsible for using the place function to
         * set blocks in the world properly during generation. A modded grass block might override this method
         * to ensure it turns into the corresponding modded dirt instead of regular dirt when a tree grows on it.
         * For modded grass blocks, returning true from this method is NOT a substitute for adding your block
         * to the #minecraft:dirt tag, rather for changing the behaviour to something other than setting to dirt.
         * 
         * NOTE: This happens DURING world generation, the generation may be incomplete when this is called.
         * Use the placeFunction when modifying the level.
         */
        onTreeGrow(level: $LevelReader, placeFunction: $BiConsumer_<$BlockPos, $BlockState>, randomSource: $RandomSource, pos: $BlockPos_, config: $TreeConfiguration): boolean;
        /**
         * Checks if this soil is fertile, typically this means that growth rates
         * of plants on this soil will be slightly sped up.
         * Only vanilla case is tilledField when it is within range of water.
         */
        isFertile(level: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Determines if this block can be used as the frame of a conduit.
         */
        isConduitFrame(level: $LevelReader, pos: $BlockPos_, conduit: $BlockPos_): boolean;
        /**
         * Checks if this soil is fertile, typically this means that growth rates
         * of plants on this soil will be slightly sped up.
         * Only vanilla case is tilledField when it is within range of water.
         */
        isPortalFrame(level: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Returns how many experience points this block drops when broken, before application of enchantments.
         */
        getExpDrop(level: $LevelAccessor, pos: $BlockPos_, blockEntity: $BlockEntity, breaker: $Entity, tool: $ItemStack_): number;
        /**
         * Whether this block hides the neighbors face pointed towards by the given direction.
         * 
         * This method should only be used for blocks you don't control, for your own blocks override
         * `Block#skipRendering(BlockState, BlockState, Direction)`
         * on the respective block instead
         */
        hidesNeighborFace(level: $BlockGetter, pos: $BlockPos_, neighborState: $BlockState_, dir: $Direction_): boolean;
        /**
         * Whether this block state has dynamic light emission which is not solely based on its underlying block or its
         * state properties and instead uses the `BlockPos`, the `AuxiliaryLightManager` or another external
         * data source to determine its light value in `#getLightEmission(BlockGetter, BlockPos)`
         */
        supportsExternalFaceHiding(): boolean;
        /**
         * Location sensitive version of getExplosionResistance
         */
        getExplosionResistance(level: $BlockGetter, pos: $BlockPos_, explosion: $Explosion): number;
        /**
         * Whether this block state has dynamic light emission which is not solely based on its underlying block or its
         * state properties and instead uses the `BlockPos`, the `AuxiliaryLightManager` or another external
         * data source to determine its light value in `#getLightEmission(BlockGetter, BlockPos)`
         */
        isEmpty(): boolean;
        rotate(level: $LevelAccessor, pos: $BlockPos_, direction: $Rotation_): $BlockState;
        /**
         * Called when A user uses the creative pick block button on this block
         */
        getCloneItemStack(target: $HitResult, level: $LevelReader, pos: $BlockPos_, player: $Player): $ItemStack;
        /**
         * Allows a block to override the standard EntityLivingBase.updateFallState
         * particles, this is a server side method that spawns particles with
         * WorldServer.spawnParticle.
         */
        addLandingEffects(level: $ServerLevel, pos: $BlockPos_, state2: $BlockState_, entity: $LivingEntity, numberOfParticles: number): boolean;
        /**
         * Sensitive version of getSoundType
         */
        getSoundType(level: $LevelReader, pos: $BlockPos_, entity: $Entity): $SoundType;
        /**
         * Gets the slipperiness at the given location at the given state. Normally
         * between 0 and 1.
         * 
         * Note that entities may reduce slipperiness by a certain factor of their own;
         * for `LivingEntity`, this is `.91`.
         * `ItemEntity` uses `.98`, and
         * `FishingHook` uses `.92`.
         */
        getFriction(level: $LevelReader, pos: $BlockPos_, entity: $Entity): number;
        /**
         * Checks if a player or entity handles movement on this block like scaffolding.
         */
        isScaffolding(entity: $LivingEntity): boolean;
        /**
         * Determines if this block is classified as a bed, replacing `instanceof BedBlock` checks.
         * 
         * If true, players may sleep in it, though the block must manually put the player to sleep
         * by calling `Player#startSleepInBed` from `BlockBehaviour#useWithoutItem` or similar.
         */
        isBed(level: $BlockGetter, pos: $BlockPos_, sleeper: $LivingEntity): boolean;
        /**
         * Called when a user either starts or stops sleeping in the bed.
         */
        setBedOccupied(level: $Level_, pos: $BlockPos_, sleeper: $LivingEntity, occupied: boolean): void;
        /**
         * Returns the direction of the block. Same values that
         * are returned by BlockDirectional
         */
        getBedDirection(level: $LevelReader, pos: $BlockPos_): $Direction;
        /**
         * Determines if this block is can be destroyed by the specified entities normal behavior.
         */
        collisionExtendsVertically(level: $BlockGetter, pos: $BlockPos_, entity: $Entity): boolean;
        /**
         * Allows a block to override the standard vanilla running particles.
         * This is called from `Entity#spawnSprintParticle()` and is called both,
         * Client and server side, it's up to the implementor to client check / server check.
         * By default vanilla spawns particles only on the client and the server methods no-op.
         */
        addRunningEffects(level: $Level_, pos: $BlockPos_, entity: $Entity): boolean;
        get slimeBlock(): boolean;
        get bubbleColumnDirection(): $BubbleColumnDirection;
        get stickyBlock(): boolean;
        get empty(): boolean;
    }
    /**
     * Extension interface for `Transformation`.
     */
    export class $ITransformationExtension {
    }
    export interface $ITransformationExtension {
        /**
         * Returns a new transformation with a changed origin by applying the given parameter (which is relative to the
         * current origin). This can be used for switching between coordinate systems.
         */
        applyOrigin(origin: $Vector3f): $Transformation;
        /**
         * Rotates the direction according to this transformation and returns the nearest `Direction` to the
         * resulting direction.
         */
        rotateTransform(facing: $Direction_): $Direction;
        blockCenterToCorner(): $Transformation;
        blockCornerToCenter(): $Transformation;
        /**
         * @return whether this transformation is the identity transformation
         */
        isIdentity(): boolean;
        /**
         * Transforms the normal according to this transformation and normalizes it.
         */
        transformNormal(normal: $Vector3f): void;
        /**
         * Transforms the position according to this transformation.
         */
        transformPosition(position: $Vector4f): void;
        get identity(): boolean;
    }
    export class $IBucketPickupExtension {
    }
    export interface $IBucketPickupExtension {
        /**
         * State sensitive variant of `BucketPickup#getPickupSound()`.
         * 
         * Override to change the pickup sound based on the `BlockState` of the object being picked up.
         */
        getPickupSound(state: $BlockState_): ($SoundEvent) | undefined;
    }
    /**
     * Additional methods for `CommandSourceStack` so that commands and arguments can access various things without directly referencing using server specific classes
     */
    export class $ICommandSourceStackExtension {
    }
    export interface $ICommandSourceStackExtension {
        getUnsidedLevel(): $Level;
        getAdvancement(id: $ResourceLocation_): $AdvancementHolder;
        getRecipeManager(): $RecipeManager;
        getScoreboard(): $Scoreboard;
        get unsidedLevel(): $Level;
        get recipeManager(): $RecipeManager;
        get scoreboard(): $Scoreboard;
    }
    /**
     * Extension interface for `BlockAndTintGetter`.
     */
    export class $IBlockAndTintGetterExtension {
    }
    export interface $IBlockAndTintGetterExtension {
        /**
         * Computes the shade for a given normal.
         * Alternate version of the vanilla method taking in a `Direction`.
         */
        getShade(normalX: number, normalY: number, normalZ: number, shade: boolean): number;
    }
    export class $IHolderSetExtension$SerializationType extends $Enum<$IHolderSetExtension$SerializationType> {
        static values(): $IHolderSetExtension$SerializationType[];
        static valueOf(arg0: string): $IHolderSetExtension$SerializationType;
        static STRING: $IHolderSetExtension$SerializationType;
        static UNKNOWN: $IHolderSetExtension$SerializationType;
        static OBJECT: $IHolderSetExtension$SerializationType;
        static LIST: $IHolderSetExtension$SerializationType;
    }
    /**
     * Values that may be interpreted as {@link $IHolderSetExtension$SerializationType}.
     */
    export type $IHolderSetExtension$SerializationType_ = "unknown" | "string" | "list" | "object";
    export class $IMenuTypeExtension<T> {
        /**
         * Use this method to create a menu type that uses additional data sent by the server when it creates
         * the client-side instances of its menus.
         */
        static create<T extends $AbstractContainerMenu>(factory: $IContainerFactory_<T>): $MenuType<T>;
    }
    export interface $IMenuTypeExtension<T> {
        create(arg0: number, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf): T;
    }
    /**
     * Values that may be interpreted as {@link $IMenuTypeExtension}.
     */
    export type $IMenuTypeExtension_<T> = ((arg0: number, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf) => T);
}
