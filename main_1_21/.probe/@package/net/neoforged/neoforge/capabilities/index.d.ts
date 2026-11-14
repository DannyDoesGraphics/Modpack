import { $ChunkPos, $Level, $Level_, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $EntityType_, $Entity } from "@package/net/minecraft/world/entity";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $IEnergyStorage } from "@package/net/neoforged/neoforge/energy";
import { $List } from "@package/java/util";
import { $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $WeakReference } from "@package/java/lang/ref";
import { $IFluidHandlerItem, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $BooleanSupplier_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Runnable_, $Record, $Class } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $ChunkEvent$Unload, $ChunkEvent$Load } from "@package/net/neoforged/neoforge/event/level";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/neoforged/neoforge/capabilities" {
    export class $IBlockCapabilityProvider<T, C> {
    }
    export interface $IBlockCapabilityProvider<T, C> {
        getCapability(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: C): T;
    }
    /**
     * Values that may be interpreted as {@link $IBlockCapabilityProvider}.
     */
    export type $IBlockCapabilityProvider_<T, C> = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $BlockEntity, arg4: C) => T);
    /**
     * Base class to reuse code common between most/all `*Capability` implementation.
     * 
     * This is only relevant for authors of new capability types
     * (i.e. which are not blocks, entities,
     * or items).
     * Otherwise, use one of the subclasses directly.
     */
    export class $BaseCapability<T, C> {
        /**
         * @return the type of queried objects
         */
        contextClass(): $Class<C>;
        /**
         * @return the name of this capability
         */
        name(): $ResourceLocation;
        /**
         * @return the type of queried objects
         */
        typeClass(): $Class<T>;
    }
    /**
     * A cache for block capabilities, to be used to track capabilities at a specific position, with a specific context.
     * 
     * The cache is invalidated when the level is notified of a change via `Level#invalidateCapabilities(BlockPos)`.
     * 
     * Instances are automatically cleared by the garbage collector when they are no longer in use.
     */
    export class $BlockCapabilityCache<T, C> {
        context(): C;
        static create<T, C>(arg0: $BlockCapability<T, C>, arg1: $ServerLevel, arg2: $BlockPos_, arg3: C, arg4: $BooleanSupplier_, arg5: $Runnable_): $BlockCapabilityCache<T, C>;
        static create<T, C>(arg0: $BlockCapability<T, C>, arg1: $ServerLevel, arg2: $BlockPos_, arg3: C): $BlockCapabilityCache<T, C>;
        pos(): $BlockPos;
        level(): $ServerLevel;
        getCapability(): T;
        get capability(): T;
    }
    /**
     * An `ItemCapability` gives flexible access to objects of type `T` from item stacks.
     * 
     * ### Querying an item capability
     * 
     * To get an object of type `T`, use `ItemStack#getCapability(ItemCapability)`.
     * For example, to query an item handler from an item stack:
     * 
     * {@code
     * ItemStack stack = ...;
     * 
     * IItemHandler maybeHandler = stack.getCapability(Capabilities.ItemHandler.ITEM);
     * if (maybeHandler != null) {
     * // Use maybeHandler
     * }
     * }
     * 
     * ### Providing an item capability
     * 
     * To provide objects of type `T`, register providers to `RegisterCapabilitiesEvent`. For example:
     * 
     * {@code
     * modBus.addListener((RegisterCapabilitiesEvent event) -> {
     * event.registerItem(
     * Capabilities.ItemHandler.ITEM, // capability to register for
     * (itemStack, context) -> ,
     * MY_ITEM);
     * });
     * }
     */
    export class $ItemCapability<T, C> extends $BaseCapability<T, C> {
        /**
         * Creates a new item capability, or gets it if it already exists.
         */
        static create<T, C>(name: $ResourceLocation_, typeClass: $Class<T>, contextClass: $Class<C>): $ItemCapability<T, C>;
        /**
         * @return a new immutable copy of all the currently known item capabilities
         */
        static getAll(): $List<$ItemCapability<never, never>>;
        getCapability(arg0: $ItemStack_, arg1: C): T;
        /**
         * Creates a new item capability with `Void` context, or gets it if it already exists.
         * This should be used for capabilities that do not require any additional context.
         */
        static createVoid<T>(name: $ResourceLocation_, typeClass: $Class<T>): $ItemCapability<T, void>;
        static get all(): $List<$ItemCapability<never, never>>;
    }
    export class $CapabilityRegistry$StoredCap<C> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $CapabilityRegistry$StoredCap}.
     */
    export type $CapabilityRegistry$StoredCap_<C> = { contextClass?: $Class<never>, typeClass?: $Class<never>, cap?: any,  } | [contextClass?: $Class<never>, typeClass?: $Class<never>, cap?: any, ];
    /**
     * Capabilities provided by NeoForge itself, for modders to directly reference.
     */
    export class $Capabilities {
    }
    export class $ICapabilityProvider<O, C, T> {
    }
    export interface $ICapabilityProvider<O, C, T> {
        getCapability(arg0: O, arg1: C): T;
    }
    /**
     * Values that may be interpreted as {@link $ICapabilityProvider}.
     */
    export type $ICapabilityProvider_<O, C, T> = ((arg0: O, arg1: C) => T);
    export class $Capabilities$FluidHandler {
        static ITEM: $ItemCapability<$IFluidHandlerItem, void>;
        static ENTITY: $EntityCapability<$IFluidHandler, $Direction>;
        static BLOCK: $BlockCapability<$IFluidHandler, $Direction>;
    }
    /**
     * Fired to register capability providers at an appropriate time.
     */
    export class $RegisterCapabilitiesEvent extends $Event implements $IModBusEvent {
        registerBlock<T, C>(arg0: $BlockCapability<T, C>, arg1: $IBlockCapabilityProvider_<T, C>, ...arg2: $Block_[]): void;
        registerItem<T, C>(arg0: $ItemCapability<T, C>, arg1: $ICapabilityProvider_<$ItemStack, C, T>, ...arg2: $ItemLike_[]): void;
        /**
         * Makes a block capability proxyable,
         * indicating that it is always safe to forward a request for this capability to another block.
         * (e.g. for "remote access" blocks)
         * 
         * This method should only be called by the mod that defines the capability,
         * in the `EventPriority#HIGH` or `EventPriority#HIGHEST` phase.
         */
        setNonProxyable(capability: $BlockCapability<never, never>): void;
        /**
         * Return `true` if a provider is registered for the given item and capability.
         */
        isItemRegistered(capability: $ItemCapability<never, never>, item: $Item_): boolean;
        /**
         * Makes a block capability proxyable,
         * indicating that it is always safe to forward a request for this capability to another block.
         * (e.g. for "remote access" blocks)
         * 
         * This method should only be called by the mod that defines the capability,
         * in the `EventPriority#HIGH` or `EventPriority#HIGHEST` phase.
         */
        setProxyable(capability: $BlockCapability<never, never>): void;
        /**
         * Register a capability provider for some entity type.
         */
        registerEntity<T, C, E extends $Entity>(capability: $EntityCapability<T, C>, entityType: $EntityType_<E>, provider: $ICapabilityProvider_<E, C, T>): void;
        /**
         * Return `true` if a provider is registered for the given entity type and capability.
         */
        isEntityRegistered(capability: $EntityCapability<never, never>, entityType: $EntityType_<never>): boolean;
        /**
         * Register a capability provider for a block entity type.
         * 
         * **If a previously returned capability is not valid anymore, or if a new capability is available,
         * `Level#invalidateCapabilities(BlockPos)` MUST be called to notify the caches.**
         * See `IBlockCapabilityProvider` for details.
         */
        registerBlockEntity<T, C, BE extends $BlockEntity>(capability: $BlockCapability<T, C>, blockEntityType: $BlockEntityType_<BE>, provider: $ICapabilityProvider_<BE, C, T>): void;
        /**
         * Return `true` if a provider is registered for the given block and capability.
         */
        isBlockRegistered(capability: $BlockCapability<never, never>, block: $Block_): boolean;
        set nonProxyable(value: $BlockCapability<never, never>);
        set proxyable(value: $BlockCapability<never, never>);
    }
    export class $Capabilities$EnergyStorage {
        static ITEM: $ItemCapability<$IEnergyStorage, void>;
        static ENTITY: $EntityCapability<$IEnergyStorage, $Direction>;
        static BLOCK: $BlockCapability<$IEnergyStorage, $Direction>;
    }
    export class $CapabilityHooks {
        static init(): void;
        static markProxyableCapabilities(event: $RegisterCapabilitiesEvent): void;
        static registerVanillaProviders(event: $RegisterCapabilitiesEvent): void;
        static registerFallbackVanillaProviders(event: $RegisterCapabilitiesEvent): void;
        static invalidateCapsOnChunkLoad(event: $ChunkEvent$Load): void;
        static invalidateCapsOnChunkUnload(event: $ChunkEvent$Unload): void;
        static cleanCapabilityListenerReferencesOnTick(event: $LevelTickEvent$Post): void;
        constructor();
    }
    /**
     * Helper class to manage registering capabilities.
     * You only need this if you are creating your own type (block, entity, item...) of capabilities!
     * 
     * Look at the source code of `BlockCapability`, `EntityCapability`, ... for an example.
     */
    export class $CapabilityRegistry<C> {
        create(arg0: $ResourceLocation_, arg1: $Class<never>, arg2: $Class<never>): C;
        /**
         * Returns an immutable copy of all the currently known capabilities.
         */
        getAll(): $List<C>;
        constructor(arg0: $CapabilityRegistry$CapabilityConstructor_<C>);
        get all(): $List<C>;
    }
    export class $CapabilityListenerHolder$ListenerReference extends $WeakReference<$ICapabilityInvalidationListener> {
    }
    export class $CapabilityListenerHolder {
        /**
         * Invalidates listeners at a specific block position.
         */
        invalidatePos(pos: $BlockPos_): void;
        /**
         * Invalidates listeners at a specific chunk position.
         */
        invalidateChunk(chunkPos: $ChunkPos): void;
        /**
         * Poll the reference queue, and remove garbage-collected listener references entries from `#byChunkThenBlock`.
         */
        clean(): void;
        /**
         * Adds a listener.
         */
        addListener(pos: $BlockPos_, listener: $ICapabilityInvalidationListener_): void;
        constructor();
    }
    export class $Capabilities$ItemHandler {
        static ITEM: $ItemCapability<$IItemHandler, void>;
        static ENTITY: $EntityCapability<$IItemHandler, void>;
        static ENTITY_AUTOMATION: $EntityCapability<$IItemHandler, $Direction>;
        static BLOCK: $BlockCapability<$IItemHandler, $Direction>;
    }
    export class $CapabilityRegistry$CapabilityConstructor<C> {
    }
    export interface $CapabilityRegistry$CapabilityConstructor<C> {
        create(arg0: $ResourceLocation_, arg1: $Class<never>, arg2: $Class<never>): C;
    }
    /**
     * Values that may be interpreted as {@link $CapabilityRegistry$CapabilityConstructor}.
     */
    export type $CapabilityRegistry$CapabilityConstructor_<C> = ((arg0: $ResourceLocation, arg1: $Class<never>, arg2: $Class<never>) => C);
    /**
     * A listener for block capability invalidation.
     * 
     * Register with `ServerLevel#registerCapabilityListener`.
     * 
     * The listener will be held by a weak reference, so it is important to keep a strong reference to it
     * as long as you need it.
     */
    export class $ICapabilityInvalidationListener {
    }
    export interface $ICapabilityInvalidationListener {
        /**
         * Called when capabilities are invalidated.
         * 
         * The listener should check that it is valid before reacting to this notification,
         * and if it is not valid anymore, it should return `false`.
         */
        onInvalidate(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ICapabilityInvalidationListener}.
     */
    export type $ICapabilityInvalidationListener_ = (() => boolean);
    /**
     * A `BlockCapability` gives flexible access to objects of type `T` located in the world.
     * 
     * ### Querying a block capability
     * 
     * To get an object of type `T`, use `Level#getCapability(BlockCapability, BlockPos, Object)`.
     * For example, to query an item handler in the world, from a specific side:
     * 
     * {@code
     * Level level = ...;
     * BlockPos pos = ...;
     * Direction side = ...;
     * 
     * IItemHandler maybeHandler = level.getCapability(Capabilities.ItemHandler.BLOCK, pos, side);
     * if (maybeHandler != null) {
     * // Use maybeHandler
     * }
     * }
     * 
     * For repeated queries at a specific position, use `BlockCapabilityCache` to improve performance.
     * 
     * ### Providing a capability for a block entity
     * 
     * To provide objects of type `T`, register providers to `RegisterCapabilitiesEvent`. For example:
     * 
     * {@code
     * modBus.addListener(RegisterCapabilitiesEvent.class, event -> {
     * event.registerBlockEntity(
     * Capabilities.ItemHandler.BLOCK, // capability to register for
     * MY_BLOCK_ENTITY_TYPE,
     * (myBlockEntity, side) -> );
     * });
     * }
     * 
     * **If a previously returned capability is not valid anymore, or if a new capability is available,
     * `Level#invalidateCapabilities(BlockPos)` MUST be called to notify the caches (see below).**
     * 
     * ### Providing a capability for a plain block
     * 
     * For blocks without a block entity,
     * we use registerBlock instead:
     * 
     * {@code
     * modBus.addListener(RegisterCapabilitiesEvent.class, event -> {
     * event.registerBlock(
     * Capabilities.ItemHandler.BLOCK, // capability to register for
     * (level, pos, state, be, side) -> ,
     * // blocks to register for
     * MY_ITEM_HANDLER_BLOCK, MY_OTHER_ITEM_HANDLER_BLOCK);
     * });
     * }
     * 
     * Plain blocks must invalidate their capabilities whenever they change, **including on placement and removal**. For example:
     * 
     * {@code
     * public class MyBlock extends Block {
     * ＠Override
     * public void onPlace(BlockState state, Level level, BlockPos pos, BlockState oldState, boolean movedByPiston) {
     * // Invalidate capabilities on block placement or block state change
     * level.invalidateCapabilities(pos);
     * }
     * 
     * ＠Override
     * public void onRemove(BlockState state, Level level, BlockPos pos, BlockState newState, boolean movedByPiston) {
     * super.onRemove(state, level, pos, newState, movedByPiston);
     * // Invalidate capabilities on block removal or block state change
     * level.invalidateCapabilities(pos);
     * }
     * }
     * }
     */
    export class $BlockCapability<T, C> extends $BaseCapability<T, C> {
        /**
         * @return a new immutable copy of all the currently known block capabilities
         * 
         * Mods that want to forward "all" capability requests should likely use `#getAllProxyable()` instead.
         */
        static getAllProxyable(): $List<$BlockCapability<never, never>>;
        /**
         * Returns whether this capability is proxyable.
         * This information is metadata: it does not change how the capability works internally,
         * but it tells mods whether they should or should not register proxying capability providers.
         * 
         * If the capability is proxyable, requests for this capability are safe to forward unilaterally to other blocks.
         * 
         * If the capability is not proxyable, requests for this capability should not be forwarded to other blocks without further information.
         * In that case, refer to documentation of the capability to understand under which circumstances it is safe to forward, if at all.
         * For this reason, mods that forward "all" capabilities should not forward non-proxyable capabilities.
         * 
         * Block capabilities are not proxyable by default.
         * Any call to `RegisterCapabilitiesEvent#setProxyable(BlockCapability)` will mark the capability as proxyable.
         * Any call to `RegisterCapabilitiesEvent#setNonProxyable(BlockCapability)` will mark the capability as non-proxyable,
         * and prevent it from being marked as proxyable.
         */
        isProxyable(): boolean;
        /**
         * Creates a new block capability with `Void` context, or gets it if it already exists.
         * This should be used for capabilities that do not require any additional context.
         */
        static createSided<T>(name: $ResourceLocation_, typeClass: $Class<T>): $BlockCapability<T, $Direction>;
        /**
         * Creates a new block capability, or gets it if it already exists.
         */
        static create<T, C>(name: $ResourceLocation_, typeClass: $Class<T>, contextClass: $Class<C>): $BlockCapability<T, C>;
        /**
         * @return a new immutable copy of all the currently known block capabilities
         * 
         * Mods that want to forward "all" capability requests should likely use `#getAllProxyable()` instead.
         */
        static getAll(): $List<$BlockCapability<never, never>>;
        getCapability(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: C): T;
        /**
         * Creates a new block capability with `Void` context, or gets it if it already exists.
         * This should be used for capabilities that do not require any additional context.
         */
        static createVoid<T>(name: $ResourceLocation_, typeClass: $Class<T>): $BlockCapability<T, void>;
        static get allProxyable(): $List<$BlockCapability<never, never>>;
        get proxyable(): boolean;
        static get all(): $List<$BlockCapability<never, never>>;
    }
    /**
     * An `EntityCapability` gives flexible access to objects of type `T` from entities.
     * 
     * ### Querying an entity capability
     * 
     * To get an object of type `T`, use `Entity#getCapability(EntityCapability)`.
     * For example, to query an item handler from an entity:
     * 
     * {@code
     * Entity entity = ...;
     * 
     * IItemHandler maybeHandler = entity.getCapability(Capabilities.ItemHandler.ENTITY);
     * if (maybeHandler != null) {
     * // Use maybeHandler
     * }
     * }
     * 
     * ### Providing an entity capability
     * 
     * To provide objects of type `T`, register providers to `RegisterCapabilitiesEvent`. For example:
     * 
     * {@code
     * modBus.addListener((RegisterCapabilitiesEvent event) -> {
     * event.registerEntity(
     * Capabilities.ItemHandler.ENTITY, // capability to register for
     * MY_ENTITY_TYPE,
     * (myEntity, context) -> );
     * });
     * }
     */
    export class $EntityCapability<T, C> extends $BaseCapability<T, C> {
        /**
         * Creates a new entity capability with `Void` context, or gets it if it already exists.
         * This should be used for capabilities that do not require any additional context.
         */
        static createSided<T>(name: $ResourceLocation_, typeClass: $Class<T>): $EntityCapability<T, $Direction>;
        /**
         * Creates a new entity capability, or gets it if it already exists.
         */
        static create<T, C>(name: $ResourceLocation_, typeClass: $Class<T>, contextClass: $Class<C>): $EntityCapability<T, C>;
        /**
         * @return a new immutable copy of all the currently known entity capabilities
         */
        static getAll(): $List<$EntityCapability<never, never>>;
        getCapability(arg0: $Entity, arg1: C): T;
        /**
         * Creates a new entity capability with `Void` context, or gets it if it already exists.
         * This should be used for capabilities that do not require any additional context.
         */
        static createVoid<T>(name: $ResourceLocation_, typeClass: $Class<T>): $EntityCapability<T, void>;
        static get all(): $List<$EntityCapability<never, never>>;
    }
}
