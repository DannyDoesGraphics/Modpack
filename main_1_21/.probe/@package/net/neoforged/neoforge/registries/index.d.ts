import { $DynamicOps, $Codec, $MapCodec, $Codec_ } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $ContextAwareReloadListener } from "@package/net/neoforged/neoforge/resource";
import { $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map, $Set, $Spliterator, $List, $Map_, $List_, $Collection } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AttachmentType } from "@package/net/neoforged/neoforge/attachment";
import { $FluidIngredientType } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $Supplier_, $Consumer_, $Predicate_, $Function_, $UnaryOperator_, $Supplier } from "@package/java/util/function";
import { $HolderLookup$RegistryLookup, $RegistryAccess, $Registry, $Holder$Reference, $HolderOwner, $Holder_, $Holder$Kind, $Holder, $IdMap, $IdMapper } from "@package/net/minecraft/core";
import { $RegistryDataMapSyncPayload_, $KnownRegistryDataMapsReplyPayload_, $KnownRegistryDataMapsPayload_, $FrozenRegistryPayload } from "@package/net/neoforged/neoforge/network/payload";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $ICondition$IContext_, $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $DataComponentType, $DataComponentType$Builder } from "@package/net/minecraft/core/component";
import { $Enum, $Iterable, $Record, $Class, $Object } from "@package/java/lang";
import { $HolderSetType } from "@package/net/neoforged/neoforge/registries/holdersets";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $AddCallback, $RegistryCallback, $BakeCallback_, $AddCallback_, $ClearCallback, $ClearCallback_, $BakeCallback } from "@package/net/neoforged/neoforge/registries/callback";
import { $IngredientType } from "@package/net/neoforged/neoforge/common/crafting";
import { $Int2ObjectSortedMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $DataMapFile_, $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $ItemLike } from "@package/net/minecraft/world/level";
import { $AttributeKey } from "@package/io/netty/util";
import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $NewRegistryEventNeoForgeAccessor } from "@package/fuzs/puzzleslib/neoforge/mixin/accessor";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $Item$Properties, $BlockItem, $ItemStack } from "@package/net/minecraft/world/item";
import { $IEventBus, $Event } from "@package/net/neoforged/bus/api";
import { $ImmutableList, $ImmutableSet } from "@package/com/google/common/collect";
import { $IPayloadContext } from "@package/net/neoforged/neoforge/network/handling";
import { $DeferredRegisterExtensions } from "@package/foundry/veil/forge/ext";
import { $EntityDataSerializer } from "@package/net/minecraft/network/syncher";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $RegistryDataLoader$RegistryData, $ResourceLocation_, $RegistryDataLoader$RegistryData_ } from "@package/net/minecraft/resources";
import { $IGlobalLootModifier } from "@package/net/neoforged/neoforge/common/loot";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $StructureModifier, $BiomeModifier } from "@package/net/neoforged/neoforge/common/world";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as datamaps from "@package/net/neoforged/neoforge/registries/datamaps";
export * as holdersets from "@package/net/neoforged/neoforge/registries/holdersets";
export * as callback from "@package/net/neoforged/neoforge/registries/callback";

declare module "@package/net/neoforged/neoforge/registries" {
    /**
     * @deprecated
     * Called whenever the ID mapping might have changed. If you register for this event, you
     * will be called back whenever the client or server loads an ID set. This includes both
     * when the ID maps are loaded from disk, as well as when the ID maps revert to the initial
     * state.
     * 
     * Note: you cannot change the IDs that have been allocated, but you might want to use
     * this event to update caches or other in-mod artifacts that might be impacted by an ID
     * change.
     * 
     * Fired on the forge bus.
     */
    export class $IdMappingEvent extends $Event {
        getRemaps(registry: $ResourceLocation_): $ImmutableList<$IdMappingEvent$ModRemapping>;
        isFrozen(): boolean;
        getRegistries(): $ImmutableSet<$ResourceLocation>;
        constructor(remaps: $Map_<$ResourceLocation_, $Map_<$ResourceLocation_, $IdMappingEvent$IdRemapping_>>, isFrozen: boolean);
        get frozen(): boolean;
        get registries(): $ImmutableSet<$ResourceLocation>;
    }
    export class $DataMapLoader extends $ContextAwareReloadListener {
        static getFolderLocation(registryId: $ResourceLocation_): string;
        apply(): void;
        static PATH: string;
        /**
         * @deprecated
         */
        constructor(conditionContext: $ICondition$IContext_, registryAccess: $RegistryAccess);
        constructor(arg0: $RegistryAccess);
    }
    /**
     * Fired when datapack registries can be registered.
     * Datapack registries are registries which can only load entries through JSON files from datapacks.
     * 
     * Data JSONs will be loaded from `data//modid/registryname/`, where `modid` is the namespace of the registry key.
     * 
     * This event is not cancellable, and does not have a result.
     * This event is fired on the mod-specific event bus, on both logical sides.
     */
    export class $DataPackRegistryEvent$NewRegistry extends $DataPackRegistryEvent {
        /**
         * Registers the registry key as a datapack registry, which will cause data to be loaded from
         * a datapack folder based on the registry's name.
         * 
         * Data JSONs will be loaded from `data//modid/registryname/`, where `modid` is the namespace of the registry key.
         */
        dataPackRegistry<T>(registryKey: $ResourceKey_<$Registry<T>>, codec: $Codec_<T>, networkCodec: $Codec_<T>): void;
        /**
         * Registers the given registry key as an unsynced datapack registry, which will cause data to be loaded from
         * a datapack folder based on the registry's name. The datapack registry is not required to be present
         * on clients when connecting to servers with the mod/registry.
         * 
         * Data JSONs will be loaded from `data//modid/registryname/`, where `modid` is the namespace of the registry key.
         */
        dataPackRegistry<T>(registryKey: $ResourceKey_<$Registry<T>>, codec: $Codec_<T>): void;
        /**
         * Registers the registry key as a datapack registry with a `RegistryBuilder` configurator, which will cause data to be loaded from
         * a datapack folder based on the registry's name.
         * 
         * Data JSONs will be loaded from `data//modid/registryname/`, where `modid` is the namespace of the registry key.
         */
        dataPackRegistry<T>(registryKey: $ResourceKey_<$Registry<T>>, codec: $Codec_<T>, networkCodec: $Codec_<T>, consumer: $Consumer_<$RegistryBuilder<T>>): void;
        constructor();
    }
    export class $RegistryManager$SnapshotType extends $Enum<$RegistryManager$SnapshotType> {
        static values(): $RegistryManager$SnapshotType[];
        static valueOf(arg0: string): $RegistryManager$SnapshotType;
        static SYNC_TO_CLIENT: $RegistryManager$SnapshotType;
        static FULL: $RegistryManager$SnapshotType;
    }
    /**
     * Values that may be interpreted as {@link $RegistryManager$SnapshotType}.
     */
    export type $RegistryManager$SnapshotType_ = "sync_to_client" | "full";
    /**
     * A Deferred Holder is a `Holder` that is constructed with only a ResourceKey.
     * 
     * It will be populated with the underlying Holder from the registry when available.
     */
    export class $DeferredHolder<R, T extends R> implements $Holder<R>, $Supplier<T> {
        /**
         * Returns an optional containing the target object, if bound; otherwise an empty optional.
         */
        asOptional(): (R) | undefined;
        canSerializeIn(owner: $HolderOwner<R>): boolean;
        /**
         * @return true if the underlying object is available
         * 
         * If `true`, the underlying object was added to the registry,
         * and `#value()` or `#get()` can be called.
         */
        isBound(): boolean;
        get(): R;
        value(): R;
        getKey(): $ResourceKey<R>;
        kind(): $Holder$Kind;
        getId(): $ResourceLocation;
        /**
         * Creates a new DeferredHolder targeting the value with the specified name in the specified registry.
         */
        static create<R, T extends R>(registryKey: $ResourceKey_<$Registry<R>>, valueName: $ResourceLocation_): $DeferredHolder<R, T>;
        /**
         * Creates a new DeferredHolder targeting the specified value.
         */
        static create<R, T extends R>(key: $ResourceKey_<R>): $DeferredHolder<R, T>;
        /**
         * Creates a new DeferredHolder targeting the value with the specified name in the specified registry.
         */
        static create<R, T extends R>(registryName: $ResourceLocation_, valueName: $ResourceLocation_): $DeferredHolder<R, T>;
        /**
         * Returns an `Either#left()` containing the resource key of this holder.
         */
        unwrap(): $Either<$ResourceKey<R>, R>;
        /**
         * @return true if the passed ResourceLocation is the same as the ID of the target object
         */
        is(id: $ResourceLocation_): boolean;
        /**
         * Evaluates the passed predicate against this holder's resource key.
         */
        is(filter: $Predicate_<$ResourceKey<R>>): boolean;
        /**
         * @return all tags present on the underlying object
         * 
         * If the underlying object is not bound yet, and empty stream is returned.
         */
        tags(): $Stream<$TagKey<R>>;
        getData<Z>(arg0: $DataMapType<R, Z>): Z;
        getDelegate(): $Holder<R>;
        /**
         * Returns an optional containing the target object, if bound; otherwise an empty optional.
         */
        unwrapKey(): ($ResourceKey<R>) | undefined;
        /**
         * Test if a tag matches the object this holder holds.
         * @return true if the passed ResourceLocation is the same as the ID of the target object
         */
        isTag(id: $ResourceLocation_): boolean;
        getRegisteredName(): string;
        /**
         * Attempts to resolve the underlying `RegistryLookup` from a `Holder`.
         * 
         * This will only succeed if the underlying holder is a `Reference`.
         */
        unwrapLookup(): $HolderLookup$RegistryLookup<R>;
        get bound(): boolean;
        get key(): $ResourceKey<R>;
        get id(): $ResourceLocation;
        get delegate(): $Holder<R>;
        get registeredName(): string;
    }
    export class $NeoForgeRegistryCallbacks$ItemCallbacks implements $AddCallback<$Item>, $ClearCallback<$Item> {
    }
    /**
     * Specialized DeferredRegister for Items that uses the specialized `DeferredItem` as the return type for `#register`.
     */
    export class $DeferredRegister$Items extends $DeferredRegister<$Item> {
        /**
         * Adds a new item to the list of entries to be registered and returns a `DeferredItem` that will be populated with the created item automatically.
         */
        registerItem<I extends $Item>(name: string, func: $Function_<$Item$Properties, I>, props: $Item$Properties): $DeferredItem<I>;
        /**
         * Adds a new item to the list of entries to be registered and returns a `DeferredItem` that will be populated with the created item automatically.
         */
        registerItem<I extends $Item>(name: string, func: $Function_<$Item$Properties, I>): $DeferredItem<I>;
        /**
         * Adds a new simple `BlockItem` for the given `Block` to the list of entries to be registered and
         * returns a `DeferredItem` that will be populated with the created item automatically.
         * Where the name is determined by the name of the given block and uses the default `Properties`.
         */
        registerSimpleBlockItem(block: $Holder_<$Block>): $DeferredItem<$BlockItem>;
        /**
         * Adds a new simple `BlockItem` for the given `Block` to the list of entries to be registered and
         * returns a `DeferredItem` that will be populated with the created item automatically.
         * Where the name is determined by the name of the given block.
         */
        registerSimpleBlockItem(block: $Holder_<$Block>, properties: $Item$Properties): $DeferredItem<$BlockItem>;
        /**
         * Adds a new item to the list of entries to be registered and returns a `DeferredItem` that will be populated with the created item automatically.
         */
        registerSimpleBlockItem(name: string, sup: $Supplier_<$Block>): $DeferredItem<$BlockItem>;
        /**
         * Adds a new simple `BlockItem` for the given `Block` to the list of entries to be registered and
         * returns a `DeferredItem` that will be populated with the created item automatically.
         */
        registerSimpleBlockItem(name: string, block: $Supplier_<$Block>, properties: $Item$Properties): $DeferredItem<$BlockItem>;
        /**
         * Adds a new simple `Item` with the given properties to the list of entries to be registered and
         * returns a `DeferredItem` that will be populated with the created item automatically.
         */
        registerSimpleItem(name: string, props: $Item$Properties): $DeferredItem<$Item>;
        /**
         * Adds a new simple `Item` with the default properties to the list of entries to be registered and
         * returns a `DeferredItem` that will be populated with the created item automatically.
         */
        registerSimpleItem(name: string): $DeferredItem<$Item>;
        /**
         * Adds a new item to the list of entries to be registered and returns a `DeferredItem` that will be populated with the created item automatically.
         */
        register<I extends $Item>(name: string, func: $Function_<$ResourceLocation, I>): $DeferredItem<I>;
        /**
         * Adds a new item to the list of entries to be registered and returns a `DeferredItem` that will be populated with the created item automatically.
         */
        register<I extends $Item>(name: string, sup: $Supplier_<I>): $DeferredItem<I>;
    }
    /**
     * Specialized DeferredRegister for Blocks that uses the specialized `DeferredBlock` as the return type for `#register`.
     */
    export class $DeferredRegister$Blocks extends $DeferredRegister<$Block> {
        /**
         * Adds a new block to the list of entries to be registered and returns a `DeferredHolder` that will be populated with the created block automatically.
         */
        registerBlock<B extends $Block>(name: string, func: $Function_<$BlockBehaviour$Properties, B>): $DeferredBlock<B>;
        /**
         * Adds a new block to the list of entries to be registered and returns a `DeferredHolder` that will be populated with the created block automatically.
         */
        registerBlock<B extends $Block>(name: string, func: $Function_<$BlockBehaviour$Properties, B>, props: $BlockBehaviour$Properties): $DeferredBlock<B>;
        /**
         * Adds a new simple `Block` with the default properties to the list of entries to be registered and returns a `DeferredHolder` that will be populated with the created block automatically.
         */
        registerSimpleBlock(name: string): $DeferredBlock<$Block>;
        /**
         * Adds a new simple `Block` with the given properties to the list of entries to be registered and returns a `DeferredHolder` that will be populated with the created block automatically.
         */
        registerSimpleBlock(name: string, props: $BlockBehaviour$Properties): $DeferredBlock<$Block>;
        /**
         * Adds a new block to the list of entries to be registered and returns a `DeferredHolder` that will be populated with the created block automatically.
         */
        register<B extends $Block>(name: string, sup: $Supplier_<B>): $DeferredBlock<B>;
    }
    /**
     * Fired for each registry when it is ready to have modded objects registered.
     * This event is fired for all builtin registries from vanilla (see `BuiltInRegistries`) and mods.
     * 
     * This event is fired on the mod-specific event bus, on both logical sides.
     */
    export class $RegisterEvent extends $Event implements $IModBusEvent {
        getRegistryKey(): $ResourceKey<$Registry<never>>;
        /**
         * Calls the provided consumer with a register helper if the provided registry key matches this event's registry key.
         */
        register<T>(registryKey: $ResourceKey_<$Registry<T>>, consumer: $Consumer_<$RegisterEvent$RegisterHelper<T>>): void;
        /**
         * Registers the value with the given name to the stored registry if the provided registry key matches this event's registry key.
         */
        register<T>(registryKey: $ResourceKey_<$Registry<T>>, name: $ResourceLocation_, valueSupplier: $Supplier_<T>): void;
        getRegistry<T>(key: $ResourceKey_<$Registry<T>>): $Registry<T>;
        getRegistry(): $Registry<never>;
        get registryKey(): $ResourceKey<$Registry<never>>;
    }
    export class $NeoForgeRegistryCallbacks$PoiTypeCallbacks implements $AddCallback<$PoiType>, $ClearCallback<$PoiType> {
    }
    export class $DataPackRegistryEvent extends $Event implements $IModBusEvent {
        constructor();
    }
    export class $RegisterEvent$RegisterHelper<T> {
    }
    export interface $RegisterEvent$RegisterHelper<T> {
        register(arg0: $ResourceKey_<T>, arg1: T): void;
        register(arg0: $ResourceLocation_, arg1: T): void;
    }
    /**
     * Values that may be interpreted as {@link $RegisterEvent$RegisterHelper}.
     */
    export type $RegisterEvent$RegisterHelper_<T> = ((arg0: $ResourceLocation, arg1: T) => void);
    export class $DataPackRegistriesHooks {
        /**
         * @return An unmodifiable view of the set of synced non-vanilla datapack registry IDs
         * Clients must have each of a server's synced datapack registries to be able to connect to that server;
         * vanilla clients therefore cannot connect if this list is non-empty on the server.
         */
        static getSyncedCustomRegistries(): $Set<$ResourceKey<$Registry<never>>>;
        static getSyncedRegistry<T>(registry: $ResourceKey_<$Registry<T>>): $RegistryDataLoader$RegistryData<T>;
        /**
         * @return An unmodifiable view of the list of datapack registries.
         * These registries are loaded from per-world datapacks on server startup.
         */
        static getDataPackRegistries(): $List<$RegistryDataLoader$RegistryData<never>>;
        static getDataPackRegistriesWithDimensions(): $Stream<$RegistryDataLoader$RegistryData<never>>;
        static grabNetworkableRegistries(list: $List_<$RegistryDataLoader$RegistryData_<never>>): $List<$RegistryDataLoader$RegistryData<never>>;
        static get syncedCustomRegistries(): $Set<$ResourceKey<$Registry<never>>>;
        static get dataPackRegistries(): $List<$RegistryDataLoader$RegistryData<never>>;
        static get dataPackRegistriesWithDimensions(): $Stream<$RegistryDataLoader$RegistryData<never>>;
    }
    export class $GameData {
        static vanillaSnapshot(): void;
        static getBlockItemMap(): $Map<$Block, $Item>;
        /**
         * Creates a `LinkedHashSet` containing the ordered list of registry names in the registration order.
         * 
         * The order is Attributes, then the remaining vanilla registries in vanilla order, then modded registries in alphabetical order.
         * 
         * Due to static init issues, this is not necessarily the order that vanilla objects are bootstrapped in.
         */
        static getRegistrationOrder(): $Set<$ResourceLocation>;
        static getBlockStatePointOfInterestTypeMap(): $Map<$BlockState, $Holder<$PoiType>>;
        static getBlockStateIDMap(): $IdMapper<$BlockState>;
        static unfreezeData(): void;
        static postRegisterEvents(): void;
        static freezeData(): void;
        constructor();
        static get blockItemMap(): $Map<$Block, $Item>;
        static get registrationOrder(): $Set<$ResourceLocation>;
        static get blockStatePointOfInterestTypeMap(): $Map<$BlockState, $Holder<$PoiType>>;
        static get blockStateIDMap(): $IdMapper<$BlockState>;
    }
    /**
     * Special `DeferredHolder` for Items that implements `ItemLike`.
     */
    export class $DeferredItem<T extends $Item> extends $DeferredHolder<$Item, T> implements $ItemLike {
        /**
         * Creates a new `DeferredHolder` targeting the specified `Item`.
         */
        static createItem<T extends $Item>(key: $ResourceKey_<$Item>): $DeferredItem<T>;
        /**
         * Creates a new `DeferredHolder` targeting the `Item` with the specified name.
         */
        static createItem<T extends $Item>(key: $ResourceLocation_): $DeferredItem<T>;
        /**
         * Creates a new `ItemStack` with a default size of 1 from this `Item`
         */
        toStack(): $ItemStack;
        /**
         * Creates a new `ItemStack` with the given size from this `Item`
         */
        toStack(count: number): $ItemStack;
        asItem(): $Item;
    }
    export class $NeoForgeRegistriesSetup {
        static setup(modEventBus: $IEventBus): void;
        constructor();
        static set up(value: $IEventBus);
    }
    export class $DataPackRegistryEvent$DataPackRegistryData<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DataPackRegistryEvent$DataPackRegistryData}.
     */
    export type $DataPackRegistryEvent$DataPackRegistryData_<T> = { networkCodec?: $Codec_<any>, loaderData?: $RegistryDataLoader$RegistryData_<any>,  } | [networkCodec?: $Codec_<any>, loaderData?: $RegistryDataLoader$RegistryData_<any>, ];
    /**
     * An extension for `Registry`, adding some additional functionality to vanilla registries, such as
     * callbacks and ID limits.
     */
    export class $IRegistryExtension<T> {
    }
    export interface $IRegistryExtension<T> {
        addCallback<C extends $RegistryCallback<T>>(arg0: $Class<C>, arg1: C): void;
        /**
         * Adds a callback to this registry.
         * 
         * Depending on the interfaces implemented by the object,
         * the callback will be called when the registry is
         * added to,
         * baked,
         * and/or cleared.
         */
        addCallback(callback: $RegistryCallback<T>): void;
        /**
         * @return whether this registry should be synced to clients
         */
        doesSync(): boolean;
        /**
         * @return the highest id that an entry in this registry is *allowed* to use
         * For the size of this registry, see `Registry#size()`.
         */
        getMaxId(): number;
        /**
         * @return the data map of the given `type`
         */
        getDataMap<A>(type: $DataMapType<T, A>): $Map<$ResourceKey<T>, A>;
        getKeyOrNull(arg0: T): $ResourceLocation;
        /**
         * Resolves a registry key of a potential object in this registry.
         * The original key will be returned if it is contained in this registry.
         * If not, the alias map will be checked for entries.
         * Resolving supports alias chains (A -> B -> C) and will terminate when an alias has an entry
         * or the last alias in the chain is reached.
         */
        resolve(key: $ResourceKey_<T>): $ResourceKey<T>;
        /**
         * Resolves a registry name of a potential object in this registry.
         * The original name will be returned if it is contained in this registry.
         * If not, the alias map will be checked for entries.
         * Resolving supports alias chains (A -> B -> C) and will terminate when an alias has an entry
         * or the last alias in the chain is reached.
         */
        resolve(name: $ResourceLocation_): $ResourceLocation;
        /**
         * Gets the integer id linked to the given name. If the name is not present in the registry, the default entry's
         * integer id is returned if the registry is defaulted or `-1` if the registry is not defaulted
         */
        getId(name: $ResourceLocation_): number;
        /**
         * Gets the integer id linked to the given key. If the key is not present in the registry, the default entry's
         * integer id is returned if the registry is defaulted or `-1` if the registry is not defaulted
         */
        getId(key: $ResourceKey_<T>): number;
        containsValue(arg0: T): boolean;
        getData<A>(arg0: $DataMapType<T, A>, arg1: $ResourceKey_<T>): A;
        /**
         * Adds an alias that maps from the name specified by `from` to the name specified by `to`.
         * 
         * Any registry lookups that target the first name will resolve as the second name, if the first name is not present.
         */
        addAlias(from: $ResourceLocation_, to: $ResourceLocation_): void;
        get maxId(): number;
    }
    export class $DataMapLoader$LoadResult<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DataMapLoader$LoadResult}.
     */
    export type $DataMapLoader$LoadResult_<T> = { results?: $Map_<$DataMapType<any, never>, $List_<$DataMapFile_<never, any>>>,  } | [results?: $Map_<$DataMapType<any, never>, $List_<$DataMapFile_<never, any>>>, ];
    export class $RegistryManager {
        /**
         * Applies the snapshot to the current state of the `BuiltInRegistries`.
         */
        static applySnapshot(snapshots: $Map_<$ResourceLocation_, $RegistrySnapshot>, isLocalWorld: boolean): $Set<$ResourceKey<never>>;
        /**
         * @return a view of all registered data maps
         */
        static getDataMaps(): $Map<$ResourceKey<$Registry<never>>, $Map<$ResourceLocation, $DataMapType<never, never>>>;
        static initDataMaps(): void;
        static revertToVanilla(): void;
        static generateRegistryPackets(isLocal: boolean): $List<$FrozenRegistryPayload>;
        static getRegistryNamesForSyncToClient(): $List<$ResourceLocation>;
        static getVanillaRegistryKeys(): $Set<$ResourceLocation>;
        static handleKnownDataMapsReply(payload: $KnownRegistryDataMapsReplyPayload_, context: $IPayloadContext): void;
        static isNonSyncedBuiltInRegistry(registry: $Registry<never>): boolean;
        static getDataMap<R>(registry: $ResourceKey_<$Registry<R>>, key: $ResourceLocation_): $DataMapType<R, never>;
        static postNewRegistryEvent(): void;
        static takeSnapshot(arg0: $RegistryManager$SnapshotType_): $Map<$ResourceLocation, $RegistrySnapshot>;
        static revertToFrozen(): void;
        static ATTRIBUTE_KNOWN_DATA_MAPS: $AttributeKey<$Map<$ResourceKey<$Registry<never>>, $Collection<$ResourceLocation>>>;
        constructor();
        static get dataMaps(): $Map<$ResourceKey<$Registry<never>>, $Map<$ResourceLocation, $DataMapType<never, never>>>;
        static get registryNamesForSyncToClient(): $List<$ResourceLocation>;
        static get vanillaRegistryKeys(): $Set<$ResourceLocation>;
    }
    export class $BaseMappedRegistry<T> implements $Registry<T> {
        addCallback(callback: $RegistryCallback<T>): void;
        doesSync(): boolean;
        getMaxId(): number;
        getDataMap<A>(type: $DataMapType<T, A>): $Map<$ResourceKey<T>, A>;
        resolve(key: $ResourceKey_<T>): $ResourceKey<T>;
        resolve(name: $ResourceLocation_): $ResourceLocation;
        getId(key: $ResourceKey_<T>): number;
        getId(name: $ResourceLocation_): number;
        getData<A>(arg0: $DataMapType<T, A>, arg1: $ResourceKey_<T>): A;
        addAlias(from: $ResourceLocation_, to: $ResourceLocation_): void;
        getHolderOrThrow(key: $ResourceKey_<T>): $Holder$Reference<T>;
        getTagOrEmpty(key: $TagKey_<T>): $Iterable<$Holder<T>>;
        getRandomElementOf(key: $TagKey_<T>, random: $RandomSource): ($Holder<T>) | undefined;
        asTagAddingLookup(): $HolderLookup$RegistryLookup<T>;
        byNameCodec(): $Codec<T>;
        holderByNameCodec(): $Codec<$Holder<T>>;
        stream(): $Stream<T>;
        keys<U>(ops: $DynamicOps<U>): $Stream<U>;
        getOptional(name: $ResourceLocation_ | null): (T) | undefined;
        getOptional(registryKey: $ResourceKey_<T> | null): (T) | undefined;
        getOrThrow(key: $ResourceKey_<T>): T;
        asHolderIdMap(): $IdMap<$Holder<T>>;
        byIdOrThrow(id: number): T;
        getIdOrThrow(value: T): number;
        addCallback<C extends $RegistryCallback<T>>(arg0: $Class<C>, arg1: C): void;
        /**
         * @return the name used to identify the given object within this registry or `null` if the object is not within this registry
         */
        getKeyOrNull(value: T): $ResourceLocation;
        spliterator(): $Spliterator<T>;
        forEach(arg0: $Consumer_<T>): void;
        constructor();
        get maxId(): number;
    }
    export class $RegistryBuilder<T> {
        disableRegistrationCheck(): $RegistryBuilder<T>;
        /**
         * @deprecated
         */
        withIntrusiveHolders(): $RegistryBuilder<T>;
        defaultKey(key: $ResourceKey_<T>): $RegistryBuilder<T>;
        defaultKey(key: $ResourceLocation_): $RegistryBuilder<T>;
        onClear(callback: $ClearCallback_<T>): $RegistryBuilder<T>;
        onBake(callback: $BakeCallback_<T>): $RegistryBuilder<T>;
        onAdd(callback: $AddCallback_<T>): $RegistryBuilder<T>;
        /**
         * Sets the highest numerical id that an entry in this registry
         * is *allowed* to use.
         * Must be greater than or equal to zero.
         */
        maxId(maxId: number): $RegistryBuilder<T>;
        /**
         * Creates a new registry from this builder.
         * Use `NewRegistryEvent#create(RegistryBuilder)` or `DeferredRegister#makeRegistry(Consumer)`
         * to not have to call this manually.
         * All created registries must be registered, see `NewRegistryEvent#register(Registry)`.
         */
        create(): $Registry<T>;
        /**
         * Sets whether this registry should have its numerical IDs synced to clients.
         * Default: `false`.
         */
        sync(sync: boolean): $RegistryBuilder<T>;
        callback(callback: $RegistryCallback<T>): $RegistryBuilder<T>;
        constructor(registryKey: $ResourceKey_<$Registry<T>>);
    }
    /**
     * A helper class to aid in registering objects to modded and vanilla registries and
     * provide deferred suppliers to access those objects.
     * 
     * This class maintains a list of all suppliers for entries and registers them during the proper `RegisterEvent`
     * event, after being registered to an event bus.
     * 
     * Suppliers should return *new* instances every time they are invoked.
     * 
     * To create an instance of this helper class, use any of the three factory methods: `#create(Registry, String)`,
     * `#create(ResourceKey, String)`, or `#create(ResourceLocation, String)`. There are also specialized
     * subclasses of this helper for `Block`s and `Item`s, created through `#createBlocks(String)` and
     * `#createItems(String)` respectively. (Be sure to *store the concrete type* of those subclasses, rather than
     * storing them generically as `DeferredRegister` or `DeferredRegister`.)
     * 
     * Here are some common examples for using this class:
     * 
     * {@code
     * private static final DeferredRegister.Items ITEMS = DeferredRegister.createItems(MODID);
     * private static final DeferredRegister.Blocks BLOCKS = DeferredRegister.createBlocks(MODID);
     * private static final DeferredRegister> BLOCK_ENTITIES = DeferredRegister.create(BuiltInRegistries.BLOCK_ENTITY_TYPE, MODID);
     * 
     * // If you don't care about the actual Block class, use the simple variants
     * public static final DeferredBlock ROCK_BLOCK = BLOCKS.registerSimpleBlock("rock", Block.Properties.create(Material.ROCK));
     * public static final DeferredItem ROCK_ITEM = ITEMS.registerSimpleBlockItem(ROCK_BLOCK, new Item.Properties());
     * 
     * // Otherwise, use the regular (non-'simple') variants
     * public static final DeferredBlock SPECIAL_ROCK_BLOCK = BLOCKS.registerBlock("special_rock",
     * SpecialRockBlock::new, Block.Properties.create(Material.ROCK));
     * // (#registerSimpleBlockItem does not have a non-'simple' variant -- register an item in the usual way)
     * public static final DeferredItem SPECIAL_ROCK_ITEM = ITEMS.register("special_rock",
     * () -> new SpecialRockItem(SPECIAL_ROCK_BLOCK.get(), new Item.Properties()))
     * 
     * // (Can be DeferredHolder, BlockEntityType> if you prefer)
     * public static final Supplier> ROCK_BLOCK_ENTITY = BLOCK_ENTITIES.register("rock",
     * () -> BlockEntityType.Builder.of(RockBlockEntity::new, ROCK_BLOCK.get()).build(null));
     * 
     * public ExampleMod(IEventBus modBus) {
     * ITEMS.register(modBus);
     * BLOCKS.register(modBus);
     * BLOCK_ENTITIES.register(modBus);
     * }
     * }
     */
    export class $DeferredRegister<T> implements $DeferredRegisterExtensions<any> {
        getRegistryKey(): $ResourceKey<$Registry<$Object>>;
        /**
         * This method is used to configure a custom modded registry. It can only be invoked by a single DeferredRegister instance for a given registry key.
         */
        makeRegistry(consumer: $Consumer_<$RegistryBuilder<$Object>>): $Registry<$Object>;
        /**
         * Creates a tag key based on the current namespace and provided path as the location and the registry name linked to this DeferredRegister. To control the namespace, use `#createTagKey(ResourceLocation)`.
         */
        createTagKey(path: string): $TagKey<$Object>;
        /**
         * Creates a tag key based on the provided resource location and the registry name linked to this DeferredRegister. To use the current namespace as the tag key namespace automatically, use `#createTagKey(String)`.
         */
        createTagKey(location: $ResourceLocation_): $TagKey<$Object>;
        /**
         * Factory for a specialized DeferredRegister for Blocks.
         */
        static createBlocks(modid: string): $DeferredRegister$Blocks;
        getRegistryName(): $ResourceLocation;
        /**
         * @return the modid/namespace associated with this deferred register
         */
        getNamespace(): string;
        /**
         * Adds a new entry to the list of entries to be registered and returns a `DeferredHolder` that will be populated with the created entry automatically.
         */
        register<I extends T>(name: string, func: $Function_<$ResourceLocation, I>): $DeferredHolder<$Object, I>;
        register(arg0: $ResourceLocation_, arg1: $Function_<any, any>): $DeferredHolder<any, any>;
        /**
         * Adds a new entry to the list of entries to be registered and returns a `DeferredHolder` that will be populated with the created entry automatically.
         */
        register<I extends T>(name: string, sup: $Supplier_<I>): $DeferredHolder<$Object, I>;
        /**
         * Adds our event handler to the specified event bus, this MUST be called in order for this class to function. See the example usage.
         */
        register(bus: $IEventBus): void;
        /**
         * DeferredRegister factory for modded registries or vanilla registries to lookup based on the provided registry key. Supports both registries that already exist or do not exist yet.
         * 
         * If the registry is never created, any `DeferredHolder`s made from this DeferredRegister will throw an exception.
         */
        static create<T>(key: $ResourceKey_<$Registry<T>>, namespace: string): $DeferredRegister<T>;
        /**
         * DeferredRegister factory for custom forge registries or vanilla registries to lookup based on the provided registry name. Supports both registries that already exist or do not exist yet.
         * 
         * If the registry is never created, any `DeferredHolder`s made from this DeferredRegister will throw an exception.
         */
        static create<B>(registryName: $ResourceLocation_, modid: string): $DeferredRegister<B>;
        /**
         * DeferredRegister factory for modded registries or vanilla registries.
         * 
         * If the registry is never created, any `DeferredHolder`s made from this DeferredRegister will throw an exception.
         */
        static create<T>(registry: $Registry<T>, namespace: string): $DeferredRegister<T>;
        getEntries(): $Collection<$DeferredHolder<$Object, $Object>>;
        /**
         * Adds an alias that maps from the name specified by `from` to the name specified by `to`.
         * 
         * Any registry lookups that target the first name will resolve as the second name, if the first name is not present.
         */
        addAlias(from: $ResourceLocation_, to: $ResourceLocation_): void;
        /**
         * Returns a supplier for the `Registry` linked to this deferred register. For vanilla registries, this will always return a non-null registry. For modded registries, a non-null registry will only be returned after `NewRegistryEvent` fires, or if `#makeRegistry(Consumer)` is called on this same DeferredRegister instance.
         * 
         * To register additional DeferredRegisters for custom modded registries, use `#create(ResourceKey, String)` which can take a registry key from `#getRegistryKey()`.
         */
        getRegistry(): $Supplier<$Registry<$Object>>;
        /**
         * @deprecated
         */
        static createDataComponents(arg0: string): $DeferredRegister$DataComponents;
        static createDataComponents(arg0: $ResourceKey_<$Registry<$DataComponentType<never>>>, arg1: string): $DeferredRegister$DataComponents;
        /**
         * Factory for a specialized `DeferredRegister` for Items.
         */
        static createItems(modid: string): $DeferredRegister$Items;
        register<I extends T>(arg0: $ResourceLocation_, arg1: $Supplier_<I>): $DeferredHolder<$Object, I>;
        get registryKey(): $ResourceKey<$Registry<$Object>>;
        get registryName(): $ResourceLocation;
        get namespace(): string;
        get entries(): $Collection<$DeferredHolder<$Object, $Object>>;
        get registry(): $Supplier<$Registry<$Object>>;
    }
    export class $DataMapLoader$1WithSource<T, R> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DataMapLoader$1WithSource}.
     */
    export type $DataMapLoader$1WithSource_<T, R> = { source?: $Either<$TagKey_<any>, $ResourceKey_<any>>, attachment?: any,  } | [source?: $Either<$TagKey_<any>, $ResourceKey_<any>>, attachment?: any, ];
    export class $NeoForgeRegistryCallbacks$BlockCallbacks implements $AddCallback<$Block>, $ClearCallback<$Block>, $BakeCallback<$Block> {
    }
    export class $IdMappingEvent$IdRemapping extends $Record {
        newId(): number;
        currId(): number;
        constructor(currId: number, newId: number);
    }
    /**
     * Values that may be interpreted as {@link $IdMappingEvent$IdRemapping}.
     */
    export type $IdMappingEvent$IdRemapping_ = { newId?: number, currId?: number,  } | [newId?: number, currId?: number, ];
    export class $NeoForgeRegistries$Keys {
        static GLOBAL_LOOT_MODIFIER_SERIALIZERS: $ResourceKey<$Registry<$MapCodec<$IGlobalLootModifier>>>;
        static BIOME_MODIFIER_SERIALIZERS: $ResourceKey<$Registry<$MapCodec<$BiomeModifier>>>;
        static FLUID_INGREDIENT_TYPES: $ResourceKey<$Registry<$FluidIngredientType<never>>>;
        static ATTACHMENT_TYPES: $ResourceKey<$Registry<$AttachmentType<never>>>;
        static INGREDIENT_TYPES: $ResourceKey<$Registry<$IngredientType<never>>>;
        static FLUID_TYPES: $ResourceKey<$Registry<$FluidType>>;
        static BIOME_MODIFIERS: $ResourceKey<$Registry<$BiomeModifier>>;
        static ENTITY_DATA_SERIALIZERS: $ResourceKey<$Registry<$EntityDataSerializer<never>>>;
        static STRUCTURE_MODIFIERS: $ResourceKey<$Registry<$StructureModifier>>;
        static HOLDER_SET_TYPES: $ResourceKey<$Registry<$HolderSetType>>;
        static CONDITION_CODECS: $ResourceKey<$Registry<$MapCodec<$ICondition>>>;
        static STRUCTURE_MODIFIER_SERIALIZERS: $ResourceKey<$Registry<$MapCodec<$StructureModifier>>>;
        constructor();
    }
    /**
     * Fired when new registries can be constructed and registered.
     * This event is fired to register builtin registries, like the registries in `BuiltInRegistries`.
     * Builtin registries are registries which can only load entries registered in code.
     * 
     * For registering datapack registries that only load entries through JSON, see `NewRegistry`.
     * 
     * This event is fired on the mod-specific event bus, on both logical sides.
     */
    export class $NewRegistryEvent extends $Event implements $IModBusEvent, $NewRegistryEventNeoForgeAccessor {
        static callInit$puzzleslib_$md$5c91d2$0(): $NewRegistryEvent;
        /**
         * Registers an already-created registry.
         * This allows storing registries in static final fields and registering them later.
         */
        register<T>(registry: $Registry<T>): void;
        /**
         * Creates a registry using the `builder` and registers it.
         */
        create<T>(builder: $RegistryBuilder<T>): $Registry<T>;
        puzzleslib$callFill(): void;
    }
    /**
     * A class that exposes static references to NeoForge registries.
     * It is still advised that you register things with `RegisterEvent` or `DeferredRegister`, but queries and iterations can use this.
     * 
     * Vanilla's registries can be found in `BuiltInRegistries`, and their keys in `Registries`.
     */
    export class $NeoForgeRegistries {
        static GLOBAL_LOOT_MODIFIER_SERIALIZERS: $Registry<$MapCodec<$IGlobalLootModifier>>;
        static BIOME_MODIFIER_SERIALIZERS: $Registry<$MapCodec<$BiomeModifier>>;
        static FLUID_INGREDIENT_TYPES: $Registry<$FluidIngredientType<never>>;
        static ATTACHMENT_TYPES: $Registry<$AttachmentType<never>>;
        static INGREDIENT_TYPES: $Registry<$IngredientType<never>>;
        static FLUID_TYPES: $Registry<$FluidType>;
        static ENTITY_DATA_SERIALIZERS: $Registry<$EntityDataSerializer<never>>;
        static HOLDER_SET_TYPES: $Registry<$HolderSetType>;
        static STRUCTURE_MODIFIER_SERIALIZERS: $Registry<$MapCodec<$StructureModifier>>;
        static CONDITION_SERIALIZERS: $Registry<$MapCodec<$ICondition>>;
        constructor();
    }
    export class $DeferredRegister$RegistryHolder<V> implements $Supplier<$Registry<V>> {
    }
    export class $NeoForgeRegistryCallbacks {
    }
    /**
     * Fired during startup after builtin registries are constructed.
     * For vanilla registries, this event is fired after vanilla entries are registered but before modded entries.
     * For modded registries, this event is fired before any entry is registered.
     * 
     * This event can be used to register callbacks to the registry.
     * 
     * This event cannot be used to modify datapack registries.
     * 
     * This event is not cancellable.
     * This event is fired on the mod-specific event bus, on both logical sides.
     */
    export class $ModifyRegistriesEvent extends $Event implements $IModBusEvent {
        /**
         * Retrieve a builtin registry by its key.
         */
        getRegistry<T>(key: $ResourceKey_<$Registry<T>>): $Registry<T>;
        /**
         * Returns all builtin registries.
         */
        getRegistries(): $Iterable<$Registry<never>>;
        get registries(): $Iterable<$Registry<never>>;
    }
    /**
     * Special `DeferredHolder` for Blocks that implements `ItemLike`.
     */
    export class $DeferredBlock<T extends $Block> extends $DeferredHolder<$Block, T> implements $ItemLike {
        /**
         * Creates a new `ItemStack` with a default size of 1 from this `Block`
         */
        toStack(): $ItemStack;
        /**
         * Creates a new `ItemStack` with the given size from this `Block`
         */
        toStack(count: number): $ItemStack;
        /**
         * Creates a new `DeferredHolder` targeting the specified `Block`.
         */
        static createBlock<T extends $Block>(key: $ResourceKey_<$Block>): $DeferredBlock<T>;
        /**
         * Creates a new `DeferredHolder` targeting the `Block` with the specified name.
         */
        static createBlock<T extends $Block>(key: $ResourceLocation_): $DeferredBlock<T>;
        asItem(): $Item;
    }
    export class $RegistrySnapshot {
        getFullBackup<T>(): $Registry<T>;
        getAliases(): $Map<$ResourceLocation, $ResourceLocation>;
        getIds(): $Int2ObjectSortedMap<$ResourceLocation>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $RegistrySnapshot>;
        /**
         * Creates a registry snapshot based on the given registry.
         */
        constructor<T>(registry: $Registry<T>, full: boolean);
        get fullBackup(): $Registry<T>;
        get aliases(): $Map<$ResourceLocation, $ResourceLocation>;
        get ids(): $Int2ObjectSortedMap<$ResourceLocation>;
    }
    /**
     * Specialized DeferredRegister for DataComponentTypes.
     */
    export class $DeferredRegister$DataComponents extends $DeferredRegister<$DataComponentType<never>> {
        /**
         * Convenience method that constructs a builder for use in the operator. Use this to avoid inference issues.
         */
        registerComponentType<D>(name: string, builder: $UnaryOperator_<$DataComponentType$Builder<D>>): $DeferredHolder<$DataComponentType<never>, $DataComponentType<D>>;
    }
    export class $NeoForgeRegistryCallbacks$BlockCallbacks$ClearableObjectIntIdentityMap<T> extends $IdMapper<T> {
    }
    export class $ClientRegistryManager$1MandatoryEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientRegistryManager$1MandatoryEntry}.
     */
    export type $ClientRegistryManager$1MandatoryEntry_ = { id?: $ResourceLocation_, registry?: $ResourceKey_<$Registry<never>>,  } | [id?: $ResourceLocation_, registry?: $ResourceKey_<$Registry<never>>, ];
    export class $IdMappingEvent$ModRemapping {
        registry: $ResourceLocation;
        newId: number;
        oldId: number;
        key: $ResourceLocation;
    }
    export class $ClientRegistryManager {
        static handleKnownDataMaps(payload: $KnownRegistryDataMapsPayload_, context: $IPayloadContext): void;
        static handleDataMapSync<R>(payload: $RegistryDataMapSyncPayload_<R>, context: $IPayloadContext): void;
        constructor();
    }
    export class $NeoForgeRegistryCallbacks$AttributeCallbacks implements $BakeCallback<$Attribute> {
    }
}
