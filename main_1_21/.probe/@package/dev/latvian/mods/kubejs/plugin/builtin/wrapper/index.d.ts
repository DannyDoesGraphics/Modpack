import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $DataResult, $DynamicOps } from "@package/com/mojang/serialization";
import { $Tag_, $Tag, $CollectionTag, $ListTag, $CompoundTag } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $ParticleOptions, $DustParticleOptions, $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $Random, $UUID_, $Map, $Map$Entry, $Set, $ListIterator, $Spliterator, $Iterator, $UUID, $List, $EnumSet, $Map_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $RandomSource, $ColorRGBA } from "@package/net/minecraft/util";
import { $TypeInfo_, $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Supplier_, $Consumer_, $Consumer, $Function_ } from "@package/java/util/function";
import { $ChatFormatting } from "@package/net/minecraft";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $HolderSet_, $BlockPos_, $Registry, $HolderSet, $Direction } from "@package/net/minecraft/core";
import { $TickDuration, $OrderedCompoundTag, $TickDuration_, $Lazy, $CountingMap, $RegistryAccessContainer } from "@package/dev/latvian/mods/kubejs/util";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { SpecialTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $Number, $StringBuilder, $Iterable, $Iterable_, $Record, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $ItemAbility } from "@package/net/neoforged/neoforge/common";
import { $ConsoleJS } from "@package/dev/latvian/mods/kubejs/script";
import { $SizedIngredient_, $SizedIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $BlockBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $Item_, $CreativeModeTab, $Item, $DyeColor, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $EventPriority, $EventPriority_, $Event } from "@package/net/neoforged/bus/api";
import { $MutableComponent, $Component_, $TextColor, $MutableComponent_, $Style, $ClickEvent_, $Component, $ClickEvent } from "@package/net/minecraft/network/chat";
import { $ItemLore, $Fireworks_, $Fireworks } from "@package/net/minecraft/world/item/component";
import { $KubeColor } from "@package/dev/latvian/mods/kubejs/color";
import { $EntitySelector } from "@package/net/minecraft/commands/arguments/selector";
import { $Pattern } from "@package/java/util/regex";
import { $Duration_ } from "@package/java/time";
import { $BlockSetType, $BlockSetType_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $Stream } from "@package/java/util/stream";
import { $RegistryKubeEvent } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $BlockPredicate_, $BlockPredicate, $BlockIDPredicate, $BlockEntityPredicate } from "@package/dev/latvian/mods/kubejs/block/predicate";
import { $BaseFunction } from "@package/dev/latvian/mods/rhino";
import { $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Stat } from "@package/net/minecraft/stats";
import { $Matrix4f, $Vector3d, $Vector3f, $Quaternionf, $Vector4f, $Matrix3f } from "@package/org/joml";

declare module "@package/dev/latvian/mods/kubejs/plugin/builtin/wrapper" {
    export class $JavaWrapper {
        /**
         * Loads the specified class, and returns null if class is not found or allowed.
         * The returned object can have public static methods and fields accessed directly from it.
         * Constructors can be used with the new keyword.
         */
        static tryLoadClass<N extends SpecialTypes.ClassPath>(name: N): ResolveJavaClass<typeof import("@package"), N>;
        /**
         * Creates a custom ConsoleJS instance for you to use to, well, log stuff
         */
        static createConsole(name: string): $ConsoleJS;
        static makeFunctionProxy<T>(targetClass: $TypeInfo_, arg1: $BaseFunction): T;
        static mergeRecord<R extends $Record>(original: R, merge: $Map_<string, never>): R;
        /**
         * Loads the specified class, and throws error if class it not found or allowed.
         * The returned object can have public static methods and fields accessed directly from it.
         * Constructors can be used with the new keyword.
         */
        static loadClass<N extends SpecialTypes.ClassPath>(name: N): ResolveJavaClass<typeof import("@package"), N>;
        /**
         * Cast the object to a target type, use if Rhino can't determine the parameter type due to type erasure.
         */
        static cast<T>(targetClass: $Class<T>, object: $Object): T;
    }
    export interface $JavaWrapper {
    }
    export class $DirectionWrapper {
        static ALL: $Map<string, $Direction>;
        static DOWN: $Direction;
        static ALL_SET: $EnumSet<$Direction>;
        static south: $Direction;
        static north: $Direction;
        static WEST: $Direction;
        static down: $Direction;
        static east: $Direction;
        static NORTH: $Direction;
        static west: $Direction;
        static EMPTY_SET: $EnumSet<$Direction>;
        static VALUES: $Direction[];
        static up: $Direction;
        static UP: $Direction;
        static SOUTH: $Direction;
        static NONE: $Direction[];
        static EAST: $Direction;
    }
    export interface $DirectionWrapper {
    }
    export class $SizedIngredientWrapper {
        static ofTag(tag: $TagKey_<$Item>, count: number): $SizedIngredient;
        /**
         * Returns a sized ingredient of the input
         */
        static of(ingredient: $Ingredient_, count: number): $SizedIngredient;
        /**
         * Returns a sized ingredient of the input
         */
        static of(ingredient: $SizedIngredient_): $SizedIngredient;
        static all: $SizedIngredient;
        static TYPE_INFO: $TypeInfo;
        static empty: $SizedIngredient;
    }
    export interface $SizedIngredientWrapper {
    }
    export class $ParticleOptionsWrapper {
        static wrap(o: $Object): $ParticleOptions;
        static create(options: $ParticleOptions_): $ParticleOptions;
        static ERROR: $DustParticleOptions;
    }
    export interface $ParticleOptionsWrapper {
    }
    export class $NativeEventWrapper$Listeners extends $Record implements $Consumer<$Event> {
    }
    /**
     * Values that may be interpreted as {@link $NativeEventWrapper$Listeners}.
     */
    export type $NativeEventWrapper$Listeners_ = { listeners?: $Collection_<$Consumer_<$Event>>,  } | [listeners?: $Collection_<$Consumer_<$Event>>, ];
    export class $BlockWrapper {
        /**
         * Get a map of direction name to Direction. Functionally identical to Direction.ALL
         */
        static getFacing(): $Map<string, $Direction>;
        static wrapSetType(from: $Object, target: $TypeInfo_): $BlockSetType;
        /**
         * Parses a block state from the input string. May throw for invalid inputs!
         */
        static wrapBlockState(registries: $RegistryAccessContainer, o: $Object): $BlockState;
        static parseBlockState(registries: $RegistryAccessContainer, string: string): $BlockState;
        static registerBuildingMaterial(event: $RegistryKubeEvent<$Block_>, id: $ResourceLocation_): void;
        static registerBuildingMaterial(event: $RegistryKubeEvent<$Block_>, id: $ResourceLocation_, properties: $BuildingMaterialProperties_): void;
        /**
         * Gets a list of all blocks with tags
         */
        static getTaggedIds(tag: $ResourceLocation_): $List<$ResourceLocation>;
        static getAllBlockStates(): $Collection<$BlockState>;
        static entity(id: $ResourceLocation_): $BlockEntityPredicate;
        /**
         * Gets a Block from a block id
         */
        static getBlock(id: $ResourceLocation_): $Block;
        static id(id: $ResourceLocation_, properties: $Map_<string, $Object>): $BlockIDPredicate;
        static id(id: $ResourceLocation_): $BlockIDPredicate;
        /**
         * Gets a blocks id from the Block
         */
        static getId(block: $Block_): $ResourceLocation;
        static custom(predicate: $BlockPredicate_): $BlockPredicate;
        static withProperties(state: $BlockState_, properties: $Map_<never, never>): $BlockState;
        /**
         * Gets a list of the classname of all registered blocks
         */
        static getTypeList(): $List<string>;
        static TYPE_INFO: $TypeInfo;
        static STATE_TYPE_INFO: $TypeInfo;
        constructor();
        static get facing(): $Map<string, $Direction>;
        static get allBlockStates(): $Collection<$BlockState>;
        static get typeList(): $List<string>;
    }
    export class $ItemWrapper {
        /**
         * Returns a Firework with the input properties
         */
        static fireworks(fireworks: $Fireworks_): $Fireworks;
        static parseJson(registryOps: $DynamicOps<$Tag_>, json: $JsonElement_): $DataResult<$ItemStack>;
        static findItem(s: string): $DataResult<$Item>;
        static wrapItemAbility(object: $Object): $ItemAbility;
        static getTypeToStackMap(): $Map<$ResourceLocation, $Collection<$ItemStack>>;
        static playerHeadFromBase64(uuid: $UUID_, textureBase64: string): $ItemStack;
        static playerHeadFromUrl(url: string): $ItemStack;
        /**
         * Checks if the passed in object is an ItemStack.
         * Note that this does not mean it will not function as an ItemStack if passed to something that requests one.
         */
        static isItem(o: $Object): boolean;
        static playerHead(name: string): $ItemStack;
        static playerHeadFromSkinHash(hash: string): $ItemStack;
        static isItemStackLike(from: $Object): boolean;
        /**
         * Get the item that represents air/an empty slot
         */
        static getEmpty(): $ItemStack;
        static parseString(registryOps: $DynamicOps<$Tag_>, s: string): $DataResult<$ItemStack>;
        /**
         * Returns an ItemStack of the input
         */
        static of(arg0: $ItemStack_): $ItemStack;
        /**
         * Returns an ItemStack of the input, with the specified data components
         */
        static of(arg0: $ItemStack_, components: $DataComponentMap_): $ItemStack;
        /**
         * Returns an ItemStack of the input, with the specified count
         */
        static of(arg0: $ItemStack_, count: number): $ItemStack;
        /**
         * Returns an ItemStack of the input, with the specified count and data components
         */
        static of(arg0: $ItemStack_, count: number, components: $DataComponentMap_): $ItemStack;
        static read(registryOps: $DynamicOps<$Tag_>, reader: $StringReader): $DataResult<$ItemStack>;
        /**
         * Gets an items id from the Item
         */
        static getId(item: $Item_): $ResourceLocation;
        /**
         * Checks if the provided item id exists in the registry
         */
        static exists(id: $ResourceLocation_): boolean;
        static getVariants(item: $ItemStack_): $Collection<$ItemStack>;
        /**
         * Gets an Item from an item id
         */
        static getItem(id: $ResourceLocation_): $Item;
        /**
         * Get a list of most items in the game. Items not in a creative tab are ignored
         */
        static getList(): $List<$ItemStack>;
        /**
         * Get a list of all the item ids in the game
         */
        static getTypeList(): $List<string>;
        static ITEM_TYPE_INFO: $TypeInfo;
        static EMPTY_ARRAY: $ItemStack[];
        static TYPE_INFO: $TypeInfo;
        static get typeToStackMap(): $Map<$ResourceLocation, $Collection<$ItemStack>>;
        static get empty(): $ItemStack;
        static get list(): $List<$ItemStack>;
        static get typeList(): $List<string>;
    }
    export interface $ItemWrapper {
    }
    export class $HolderSetWrapper<T> extends $Record implements $Iterable<T> {
        holders(): $HolderSet<T>;
        getValues(): $List<T>;
        size(): number;
        isEmpty(): boolean;
        iterator(): $Iterator<T>;
        contains(id: $ResourceLocation_): boolean;
        containsValue(value: T): boolean;
        getKeys(): $Set<$ResourceLocation>;
        registry(): $Registry<T>;
        getRandom(): T;
        getRandom(random: $RandomSource): T;
        spliterator(): $Spliterator<T>;
        forEach(arg0: $Consumer_<T>): void;
        constructor(registry: $Registry<T>, holders: $HolderSet_<T>);
        [Symbol.iterator](): Iterator<T>
        get values(): $List<T>;
        get empty(): boolean;
        get keys(): $Set<$ResourceLocation>;
    }
    /**
     * Values that may be interpreted as {@link $HolderSetWrapper}.
     */
    export type $HolderSetWrapper_<T> = { holders?: $HolderSet_<any>, registry?: $Registry<any>,  } | [holders?: $HolderSet_<any>, registry?: $Registry<any>, ];
    export class $UUIDWrapper {
        static toString(id: $UUID_): string;
        static digits(sb: $StringBuilder, val: number, digits: number): void;
        static fromString(o: $Object): $UUID;
    }
    export interface $UUIDWrapper {
    }
    export class $RegistryWrapper<T> extends $Record implements $Iterable<T> {
        getDataMap(id: $ResourceLocation_): $DataMapWrapper<T, never>;
        getValueMap(): $Map<$ResourceLocation, T>;
        unknownKey(): $ResourceKey<T>;
        getEntrySet(): $Set<$Map$Entry<$ResourceLocation, T>>;
        getValues(): $List<T>;
        getValues(filter: $Object): $HolderSetWrapper<T>;
        get(id: $ResourceLocation_): T;
        iterator(): $ListIterator<T>;
        static of(id: $ResourceLocation_): $RegistryWrapper<never>;
        contains(id: $ResourceLocation_): boolean;
        getKey(value: T): $ResourceKey<T>;
        static access(): $RegistryAccessContainer;
        getId(value: T): $ResourceLocation;
        containsValue(value: T): boolean;
        getKeys(): $Set<$ResourceLocation>;
        registry(): $Registry<T>;
        getRandom(): T;
        getRandom(random: $RandomSource): T;
        spliterator(): $Spliterator<T>;
        forEach(arg0: $Consumer_<T>): void;
        constructor(registry: $Registry<T>, unknownKey: $ResourceKey_<T>);
        get valueMap(): $Map<$ResourceLocation, T>;
        get entrySet(): $Set<$Map$Entry<$ResourceLocation, T>>;
        get keys(): $Set<$ResourceLocation>;
    }
    /**
     * Values that may be interpreted as {@link $RegistryWrapper}.
     */
    export type $RegistryWrapper_<T> = { unknownKey?: $ResourceKey_<any>, registry?: $Registry<any>,  } | [unknownKey?: $ResourceKey_<any>, registry?: $Registry<any>, ];
    export class $IngredientWrapper {
        /**
         * Returns an ingredient that accepts the given set of items under the given (optionally strict) component filter.
         */
        static withData(base: $HolderSet_<$Item>, data: $DataComponentMap_, strict: boolean): $Ingredient;
        /**
         * Returns an ingredient that accepts the given set of items under the given component filter.
         */
        static withData(base: $HolderSet_<$Item>, data: $DataComponentMap_): $Ingredient;
        /**
         * Checks if the passed in object is an Ingredient.
         * Note that this does not mean it will not function as an Ingredient if passed to something that requests one.
         */
        static isIngredient(o: $Object): boolean;
        static tagKeyOf(arg0: $Ingredient_): $TagKey<$Item>;
        static containsAnyTag(arg0: $Ingredient_): boolean;
        static parseJson(json: $JsonElement_): $DataResult<$Ingredient>;
        static isIngredientLike(from: $Object): boolean;
        static parseString(s: string): $DataResult<$Ingredient>;
        /**
         * Returns an ingredient of the input
         */
        static of(ingredient: $Ingredient_): $Ingredient;
        /**
         * Returns an ingredient of the input, with the specified count
         */
        static of(ingredient: $Ingredient_, count: number): $SizedIngredient;
        static first(ingredient: $Ingredient_): $ItemStack;
        static read(reader: $StringReader): $DataResult<$Ingredient>;
        static all: $Ingredient;
        static TYPE_INFO: $TypeInfo;
        static none: $Ingredient;
    }
    export interface $IngredientWrapper {
    }
    export class $BuildingMaterialProperties extends $Record {
        ticksToStayPressed(): ($TickDuration) | undefined;
        baseBlockSuffix(): (boolean) | undefined;
        behaviour(): ($BlockSetType) | undefined;
        blocks(): $BuildingMaterialProperties$Blocks;
        properties(): $Consumer<$BlockBuilder>;
        baseBlock(): (boolean) | undefined;
        static TYPE_INFO: $TypeInfo;
        constructor(blocks: $BuildingMaterialProperties$Blocks_, baseBlock: (boolean) | undefined, baseBlockSuffix: (boolean) | undefined, properties: $Consumer_<$BlockBuilder>, behaviour: ($BlockSetType_) | undefined, ticksToStayPressed: ($TickDuration_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $BuildingMaterialProperties}.
     */
    export type $BuildingMaterialProperties_ = { properties?: $Consumer_<$BlockBuilder>, blocks?: $BuildingMaterialProperties$Blocks_, baseBlockSuffix?: (boolean) | undefined, ticksToStayPressed?: ($TickDuration_) | undefined, behaviour?: ($BlockSetType_) | undefined, baseBlock?: (boolean) | undefined,  } | [properties?: $Consumer_<$BlockBuilder>, blocks?: $BuildingMaterialProperties$Blocks_, baseBlockSuffix?: (boolean) | undefined, ticksToStayPressed?: ($TickDuration_) | undefined, behaviour?: ($BlockSetType_) | undefined, baseBlock?: (boolean) | undefined, ];
    export class $DataMapWrapper$Data<T, A> extends $Record {
        data(): A;
        element(): T;
        constructor(element: T, data: A);
    }
    /**
     * Values that may be interpreted as {@link $DataMapWrapper$Data}.
     */
    export type $DataMapWrapper$Data_<T, A> = { element?: any, data?: any,  } | [element?: any, data?: any, ];
    export class $TextWrapper {
        static lore(lore: $List_<$Component_>): $ItemLore;
        /**
         * Returns a component of the input, colored gold
         */
        static gold(text: $MutableComponent_): $MutableComponent;
        /**
         * Returns a component of the input, colored dark aqua
         */
        static darkAqua(text: $MutableComponent_): $MutableComponent;
        /**
         * Returns a component of the input, colored dark green
         */
        static darkGreen(text: $MutableComponent_): $MutableComponent;
        /**
         * Returns a component of the input, colored dark blue
         */
        static darkBlue(text: $MutableComponent_): $MutableComponent;
        /**
         * Returns a component of the input, colored dark red
         */
        static darkRed(text: $MutableComponent_): $MutableComponent;
        /**
         * Returns a component of the input, colored dark purple
         */
        static darkPurple(text: $MutableComponent_): $MutableComponent;
        /**
         * Returns a component of the input, colored dark gray
         */
        static darkGray(text: $MutableComponent_): $MutableComponent;
        /**
         * Returns a component of the input, colored aqua
         */
        static aqua(text: $MutableComponent_): $MutableComponent;
        /**
         * Returns a component of the input, colored light purple
         */
        static lightPurple(text: $MutableComponent_): $MutableComponent;
        static ofTag(tag: $Tag_): $Component;
        /**
         * Returns a ClickEvent of the input
         */
        static clickEventOf(event: $ClickEvent_): $ClickEvent;
        /**
         * Returns a colorful representation of the input nbt. Useful for displaying NBT to the player
         */
        static prettyPrintNbt(tag: $Tag_): $Component;
        /**
         * Returns a translatable component of the input key, with args of the objects and a fallback translation in case the client does not have one
         */
        static translateWithFallback(key: string, fallback: string): $MutableComponent;
        /**
         * Returns a translatable component of the input key, with args of the objects and a fallback translation in case the client does not have one
         */
        static translateWithFallback(key: string, fallback: string, ...objects: $Object[]): $MutableComponent;
        /**
         * Returns a plain component of the string, or empty if it is an empty string
         */
        static ofString(s: string): $MutableComponent;
        /**
         * Checks if the passed in component, and all its children are empty
         */
        static isEmpty(component: $Component_): boolean;
        /**
         * Joins all components in the list with the separator component
         */
        static join(separator: $MutableComponent_, texts: $Iterable_<$Component>): $MutableComponent;
        /**
         * Joins all components
         */
        static join(...texts: $Component_[]): $MutableComponent;
        /**
         * Returns a Component of the input
         */
        static of(component: $MutableComponent_): $MutableComponent;
        /**
         * Returns an empty component
         */
        static empty(): $MutableComponent;
        static info(text: $Component_): $MutableComponent;
        /**
         * Returns a component of the input, colored red
         */
        static red(text: $MutableComponent_): $MutableComponent;
        /**
         * Returns a plain component of the passed in string, even if empty
         */
        static string(text: string): $MutableComponent;
        /**
         * Returns a plain component of the input
         */
        static literal(text: string): $MutableComponent;
        static warn(text: $Component_): $MutableComponent;
        /**
         * Returns a component displaying all entities matching the input selector, with a custom separator
         */
        static selector(selector: string, separator: $Component_): $MutableComponent;
        /**
         * Returns a component displaying all entities matching the input selector
         */
        static selector(selector: string): $MutableComponent;
        /**
         * Returns a component of the input, colored black
         */
        static black(text: $MutableComponent_): $MutableComponent;
        /**
         * Returns a component of the input, colored blue
         */
        static blue(text: $MutableComponent_): $MutableComponent;
        /**
         * Returns a component of the input, colored green
         */
        static green(text: $MutableComponent_): $MutableComponent;
        /**
         * Returns a component of the input, colored yellow
         */
        static yellow(text: $MutableComponent_): $MutableComponent;
        /**
         * Returns a component of the input, colored white
         */
        static white(text: $MutableComponent_): $MutableComponent;
        /**
         * Returns a score component of the input objective, for the provided selector
         */
        static score(selector: string, objective: string): $MutableComponent;
        /**
         * Returns a translatable component of the input key, with args of the objects
         */
        static translate(key: string, ...objects: $Object[]): $MutableComponent;
        /**
         * Returns a translatable component of the input key
         */
        static translate(key: string): $MutableComponent;
        /**
         * Returns a translatable component of the input key
         */
        static translatable(key: string): $MutableComponent;
        /**
         * Returns a translatable component of the input key, with args of the objects
         */
        static translatable(key: string, ...objects: $Object[]): $MutableComponent;
        /**
         * Returns a translatable component of the input key, with args of the objects and a fallback translation in case the client does not have one
         */
        static translatableWithFallback(key: string, fallback: string, ...objects: $Object[]): $MutableComponent;
        /**
         * Returns a translatable component of the input key, with args of the objects and a fallback translation in case the client does not have one
         */
        static translatableWithFallback(key: string, fallback: string): $MutableComponent;
        /**
         * Returns a keybinding component of the input keybinding descriptor
         */
        static keybind(keybind: string): $MutableComponent;
        /**
         * Returns a component of the input, colored gray
         */
        static gray(text: $MutableComponent_): $MutableComponent;
        static TYPE_INFO: $TypeInfo;
    }
    export interface $TextWrapper {
    }
    export class $NBTWrapper {
        static isTagCollection(o: $Object): boolean;
        static isTagCompound(o: $Object): boolean;
        static wrapCompound(v: $Object): $CompoundTag;
        static wrapListTag(list: $Object): $ListTag;
        static byteTag(v: number): $Tag;
        static shortTag(v: number): $Tag;
        static intTag(v: number): $Tag;
        static longTag(v: number): $Tag;
        static floatTag(v: number): $Tag;
        static doubleTag(v: number): $Tag;
        static intArrayTag(v: number[]): $Tag;
        static longArrayTag(v: number[]): $Tag;
        static byteArrayTag(v: number[]): $Tag;
        static toTag(tag: $Tag_): $Tag;
        static stringTag(v: string): $Tag;
        static wrap(v: $Object): $Tag;
        static i(v: number): $Tag;
        static b(v: number): $Tag;
        static ba(v: number[]): $Tag;
        static s(v: number): $Tag;
        static f(v: number): $Tag;
        static l(v: number): $Tag;
        static d(v: number): $Tag;
        static read(buf: $FriendlyByteBuf): $OrderedCompoundTag;
        static ia(v: number[]): $Tag;
        static toJson(t: $Tag_): $JsonElement;
        static la(v: number[]): $Tag;
        static wrapCollection(v: $Object): $CollectionTag<never>;
        static listTag(): $Tag;
        static listTag(list: $List_<never>): $Tag;
        static compoundTag(): $Tag;
        static compoundTag(map: $Map_<never, never>): $Tag;
        static fromTag(t: $Tag_): $Object;
    }
    export interface $NBTWrapper {
    }
    export class $DataMapWrapper<T, A> extends $Record implements $Iterable<$DataMapWrapper$Data<T, A>> {
        byKey(): $Map<$ResourceKey<$DataMapWrapper$Data<T, A>>, A>;
        static typeOf<T>(registry: $RegistryWrapper_<T>, id: $ResourceLocation_): $DataMapType<T, never>;
        static typeOf(registry: $ResourceLocation_, id: $ResourceLocation_): $DataMapType<never, never>;
        get(item: $DataMapWrapper$Data_<T, A>): A;
        type(): $DataMapType<$DataMapWrapper$Data<T, A>, A>;
        iterator(): $Iterator<$DataMapWrapper$Data<$DataMapWrapper$Data<T, A>, A>>;
        static of(registry: $ResourceLocation_, id: $ResourceLocation_): $DataMapWrapper<never, never>;
        static of<T>(registry: $RegistryWrapper_<T>, id: $ResourceLocation_): $DataMapWrapper<T, never>;
        keys(): $Stream<$DataMapWrapper$Data<T, A>>;
        registry(): $Registry<$DataMapWrapper$Data<T, A>>;
        spliterator(): $Spliterator<$DataMapWrapper$Data<T, A>>;
        forEach(arg0: $Consumer_<$DataMapWrapper$Data<T, A>>): void;
        constructor(registry: $Registry<$DataMapWrapper$Data_<T, A>>, type: $DataMapType<$DataMapWrapper$Data_<T, A>, A>);
        [Symbol.iterator](): Iterator<$DataMapWrapper$Data<$DataMapWrapper$Data<T, A>, A>>
    }
    /**
     * Values that may be interpreted as {@link $DataMapWrapper}.
     */
    export type $DataMapWrapper_<T, A> = { type?: $DataMapType<any, any>, registry?: $Registry<any>,  } | [type?: $DataMapType<any, any>, registry?: $Registry<any>, ];
    export class $ColorWrapper {
        static rgba(r: number, g: number, b: number, a: number): $KubeColor;
        static wrapTextColor(o: $Object): $TextColor;
        static wrapColorRGBA(o: $Object): $ColorRGBA;
        static createMapped(o: $Object, ...names: string[]): $KubeColor;
        static wrap(o: $Object): $KubeColor;
        static BLUE_DYE: $KubeColor;
        static GOLD: $KubeColor;
        static GRAY: $KubeColor;
        static MAGENTA_DYE: $KubeColor;
        static BLUE: $KubeColor;
        static DARK_AQUA: $KubeColor;
        static TEXT: $Map<string, $ChatFormatting>;
        static DYE: $Map<string, $DyeColor>;
        static WHITE_DYE: $KubeColor;
        static DARK_RED: $KubeColor;
        static LIGHT_PURPLE: $KubeColor;
        static BROWN_DYE: $KubeColor;
        static BLACK: $KubeColor;
        static GRAY_DYE: $KubeColor;
        static NONE: $KubeColor;
        static LIGHT_BLUE_DYE: $KubeColor;
        static AQUA: $KubeColor;
        static WHITE: $KubeColor;
        static LIGHT_GRAY_DYE: $KubeColor;
        static BLACK_DYE: $KubeColor;
        static RED_DYE: $KubeColor;
        static PURPLE_DYE: $KubeColor;
        static GREEN_DYE: $KubeColor;
        static PINK_DYE: $KubeColor;
        static DARK_BLUE: $KubeColor;
        static GREEN: $KubeColor;
        static CYAN_DYE: $KubeColor;
        static RED: $KubeColor;
        static DARK_PURPLE: $KubeColor;
        static ORANGE_DYE: $KubeColor;
        static YELLOW_DYE: $KubeColor;
        static DARK_GREEN: $KubeColor;
        static YELLOW: $KubeColor;
        static LIME_DYE: $KubeColor;
        static DARK_GRAY: $KubeColor;
        static MAP: $Map<string, $KubeColor>;
    }
    export interface $ColorWrapper {
    }
    export class $KMath {
        static rad(value: number): number;
        static v3d(x: number, y: number, z: number): $Vector3d;
        static v3f(x: number, y: number, z: number): $Vector3f;
        static v4f(x: number, y: number, z: number, w: number): $Vector4f;
        static m3f(): $Matrix3f;
        static m4f(): $Matrix4f;
        static deg(value: number): number;
        static floor(value: number): number;
        static ceil(value: number): number;
        static clamp(value: number, min: number, max: number): number;
        static map(value: number, min0: number, max0: number, min1: number, max1: number): number;
        static v3(x: number, y: number, z: number): $Vec3;
        static block(x: number, y: number, z: number): $BlockPos;
        static isPowerOfTwo(value: number): boolean;
        static quaternion(x: number, y: number, z: number, w: number): $Quaternionf;
        static lerp(value: number, min: number, max: number): number;
        static wrapDegrees(d: number): number;
        static clampedLerp(value: number, min: number, max: number): number;
        static degreesDifference(current: number, target: number): number;
        static rotateIfNecessary(current: number, target: number, max: number): number;
        static approach(current: number, target: number, speed: number): number;
        static approachDegrees(current: number, target: number, speed: number): number;
        static DEGREES_TO_RADIANS: number;
        static E: number;
        static PI: number;
        static RADIANS_TO_DEGREES: number;
    }
    export interface $KMath {
    }
    export class $UtilsWrapper {
        /**
         * Returns a Stat of the passed in ResourceLocation.
         * Note that this requires the same ResourceLocation to get the same stat, so should not be used unless you want to make your own stat, and are storing an actual ResourceLocation somewhere to access it.
         */
        static getStat(id: $ResourceLocation_): $Stat<$ResourceLocation>;
        /**
         * Gets a random object from the list using the passed in random source
         */
        static randomOf(random: $RandomSource, objects: $Collection_<$Object>): $Object;
        /**
         * Gets a random object from the list using the passed in random
         */
        static randomOf(random: $Random, objects: $Collection_<$Object>): $Object;
        /**
         * Get a new random with the specified seed
         */
        static newRandom(seed: number): $RandomSource;
        /**
         * Returns a new counting map
         */
        static newCountingMap(): $CountingMap;
        /**
         * Gets the current system time, in milliseconds
         */
        static getSystemTime(): number;
        /**
         * Returns a lazy value with the supplier function as its value factory, that will expire after the specified time
         */
        static expiringLazy<T>(supplier: $Supplier_<T>, expires: $Duration_): $Lazy<T>;
        /**
         * Runs the provided supplier function in KubeJS' background thread and returns its CompletableFuture
         */
        static supplyAsync(task: $Supplier_<$Object>): $CompletableFuture<$Object>;
        /**
         * Runs the provided runnable function in KubeJS' background thread and returns its CompletableFuture
         */
        static runAsync(task: $Runnable_): $CompletableFuture<void>;
        /**
         * Returns a regex pattern of the input with the specified flags
         */
        static regex(pattern: string, flags: number): $Pattern;
        /**
         * Returns a regex pattern of the input
         */
        static regex(s: $Object): $Pattern;
        /**
         * Get an immutable empty list
         */
        static emptyList<T>(): $List<T>;
        /**
         * Checks if the passed in object is an instance of WrappedJS
         */
        static isWrapped(o: $Object): boolean;
        /**
         * Returns a new mutable map
         */
        static newMap(): $Map<never, never>;
        /**
         * Get an immutable empty map
         */
        static emptyMap<K, V>(): $Map<K, V>;
        /**
         * Returns a new mutable list
         */
        static newList(): $List<never>;
        /**
         * Returns a lazy value with the supplier function as its value factory
         */
        static lazy<T>(supplier: $Supplier_<T>): $Lazy<T>;
        /**
         * Get a Random, for generating random numbers. Note this will always return the same Random instance
         */
        static getRandom(): $RandomSource;
        /**
         * Gets a SoundEvent from the id
         */
        static getSound(id: $ResourceLocation_): $SoundEvent;
        /**
         * Returns the creative tab associated with the id
         */
        static findCreativeTab(id: $ResourceLocation_): $CreativeModeTab;
        static get systemTime(): number;
        static get random(): $RandomSource;
    }
    export interface $UtilsWrapper {
    }
    export class $TextIcons {
        static fire(): $Component;
        static info(): $Component;
        static id(): $Component;
        static copy(): $Component;
        static error(): $Component;
        static warn(): $Component;
        static minus(): $Component;
        static tag(): $Component;
        static plus(): $Component;
        static no(): $Component;
        static yes(yes: boolean): $Component;
        static yes(): $Component;
        static logo(): $Component;
        static camera(): $Component;
        static crafting(): $Component;
        static vscode(): $Component;
        static smallSpace(): $Component;
        static tilde(): $Component;
        static prototypeComponent(): $Component;
        static patchedComponent(): $Component;
        static STYLE: $Style;
        static CRAFTING: $Component;
        static LOGO: $Component;
        static VSCODE: $Component;
        static FONT: $ResourceLocation;
        static NAME: $Component;
        static ALL_ICONS: string;
    }
    export interface $TextIcons {
    }
    export class $BuildingMaterialProperties$Blocks extends $Record {
        door(): (boolean) | undefined;
        slab(): (boolean) | undefined;
        trapdoor(): (boolean) | undefined;
        pressurePlate(): (boolean) | undefined;
        stairs(): (boolean) | undefined;
        fenceGate(): (boolean) | undefined;
        fence(): (boolean) | undefined;
        wall(): (boolean) | undefined;
        button(): (boolean) | undefined;
        constructor(slab: (boolean) | undefined, stairs: (boolean) | undefined, fence: (boolean) | undefined, fenceGate: (boolean) | undefined, wall: (boolean) | undefined, pressurePlate: (boolean) | undefined, button: (boolean) | undefined, trapdoor: (boolean) | undefined, door: (boolean) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $BuildingMaterialProperties$Blocks}.
     */
    export type $BuildingMaterialProperties$Blocks_ = { fenceGate?: (boolean) | undefined, door?: (boolean) | undefined, button?: (boolean) | undefined, fence?: (boolean) | undefined, pressurePlate?: (boolean) | undefined, slab?: (boolean) | undefined, trapdoor?: (boolean) | undefined, wall?: (boolean) | undefined, stairs?: (boolean) | undefined,  } | [fenceGate?: (boolean) | undefined, door?: (boolean) | undefined, button?: (boolean) | undefined, fence?: (boolean) | undefined, pressurePlate?: (boolean) | undefined, slab?: (boolean) | undefined, trapdoor?: (boolean) | undefined, wall?: (boolean) | undefined, stairs?: (boolean) | undefined, ];
    export class $AABBWrapper {
        static ofBlocks(pos1: $BlockPos_, pos2: $BlockPos_): $AABB;
        static ofBlock(pos: $BlockPos_): $AABB;
        static wrap(o: $Object): $AABB;
        static of(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number): $AABB;
        static ofSize(vec3: $Vec3_, x: number, y: number, z: number): $AABB;
        static ofSize(x: number, y: number, z: number): $AABB;
        static CUBE: $AABB;
        static EMPTY: $AABB;
    }
    export interface $AABBWrapper {
    }
    export class $NativeEventWrapper$Listeners$Key extends $Record {
        eventClass(): $Class<never>;
        priority(): $EventPriority;
        constructor(eventClass: $Class<never>, priority: $EventPriority_);
    }
    /**
     * Values that may be interpreted as {@link $NativeEventWrapper$Listeners$Key}.
     */
    export type $NativeEventWrapper$Listeners$Key_ = { priority?: $EventPriority_, eventClass?: $Class<never>,  } | [priority?: $EventPriority_, eventClass?: $Class<never>, ];
    type ResolveJavaClass<E, N extends string> = N extends `${infer H}.${infer T}` ? H extends keyof E ? ResolveJavaClass<E[H], T> : never : `$${N}` extends keyof E ? E[`$${N}`] : never;
    export class $NativeEventWrapper {
        static onEvent<E extends $Event>(eventClass: new (...args: any[]) => E, callback: (event: E) => void): void;
        static onEvent<E extends $Event>(priority: $EventPriority_, eventClass: new (...args: any[]) => E, callback: (event: E) => void): void;
    }
    export interface $NativeEventWrapper {
    }
    export class $StringUtilsWrapper {
        static tryParseNumber<T extends $Number>(input: $Object, getter: $Function_<$Number, T>, parser: $Function_<string, T>): $DataResult<T>;
        static stripEventName(s: string): string;
        static tryParseLong(input: $Object): $DataResult<number>;
        static tryParseFloat(input: $Object): $DataResult<number>;
        static tryParseDouble(input: $Object): $DataResult<number>;
        /**
         * Returns the provided snake_case_string in camelCase
         */
        static snakeCaseToCamelCase(string: string): string;
        static stripIdForEvent(id: $ResourceLocation_): string;
        /**
         * Returns the provided snake_case_string in Title Case
         */
        static snakeCaseToTitleCase(string: string): string;
        /**
         * Tries to parse the first parameter as an integer, and returns that. The second parameter is returned if parsing fails
         */
        static parseInt(object: $Object, def: number): number;
        /**
         * Capitalises the first letter of the string unless it is "a", "an", "the", "of", "on", "in", "and", "or", "but" or "for"
         */
        static toTitleCase(s: string): string;
        /**
         * Capitalises the first letter of the string. If ignoreSpecial is true, it will also capitalise articles and prepositions
         */
        static toTitleCase(s: string, ignoreSpecial: boolean): string;
        /**
         * Tries to parse the first parameter as a float and returns that. The second parameter is returned if parsing fails
         */
        static parseFloat(object: $Object, def: number): number;
        /**
         * Tries to parse the first parameter as a double and returns that. The second parameter is returned if parsing fails
         */
        static parseDouble(object: $Object, def: number): number;
        static parseLong(object: $Object, def: number): number;
        static tryParseInt(input: $Object): $DataResult<number>;
        static getUniqueId<T>(input: T, toJson: $Function_<T, $JsonElement>): string;
        static getUniqueId(json: $JsonElement_): string;
        static ALWAYS_LOWER_CASE: $Set<string>;
        static SNAKE_CASE_SPLIT: $Pattern;
        static EMPTY_STRING_ARRAY: string[];
    }
    export interface $StringUtilsWrapper {
    }
    export class $EntitySelectorWrapper {
        static of(selector: $EntitySelector): $EntitySelector;
        constructor();
    }
}
