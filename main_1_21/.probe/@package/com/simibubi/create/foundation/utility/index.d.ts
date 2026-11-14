import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $Dynamic } from "@package/com/mojang/serialization";
import { $RecipeHolder_, $Recipe, $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Callable_, $Callable, $ConcurrentMap } from "@package/java/util/concurrent";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Lang, $LangBuilder } from "@package/net/createmod/catnip/lang";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $Dist_ } from "@package/net/neoforged/api/distmarker";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $KeyMapping } from "@package/net/minecraft/client";
import { $List, $Map_, $Collection_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $DSL$TypeReference_, $DSL$TypeReference } from "@package/com/mojang/datafixers";
import { $BiConsumer_, $Supplier_, $Function_, $Consumer_, $Predicate_, $Function, $Supplier } from "@package/java/util/function";
import { $InteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $RegistryAccess, $Direction } from "@package/net/minecraft/core";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Iterable_, $Enum, $Record, $Comparable, $Object } from "@package/java/lang";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $ItemLike, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CacheStats, $Cache } from "@package/com/google/common/cache";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $CombinedInvWrapper } from "@package/net/neoforged/neoforge/items/wrapper";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $ClientboundPacketPayload, $BasePacketPayload$PacketTypeProvider } from "@package/net/createmod/catnip/net/base";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as flywheel from "@package/com/simibubi/create/foundation/utility/flywheel";
export * as worldWrappers from "@package/com/simibubi/create/foundation/utility/worldWrappers";

declare module "@package/com/simibubi/create/foundation/utility" {
    export class $RaycastHelper$PredicateTraceResult {
        getPos(): $BlockPos;
        getFacing(): $Direction;
        missed(): boolean;
        constructor(arg0: $BlockPos_, arg1: $Direction_);
        constructor();
        get pos(): $BlockPos;
        get facing(): $Direction;
    }
    export class $DynamicComponent {
        displayCustomText(arg0: $Level_, arg1: $BlockPos_, arg2: string): void;
        sameAs(arg0: string): boolean;
        static parseCustomText(arg0: $Level_, arg1: $BlockPos_, arg2: $JsonElement_): $Component;
        static parseCustomText(arg0: $Level_, arg1: $BlockPos_, arg2: $Component_): $Component;
        static getJsonFromString(arg0: string): $JsonElement;
        static getCommandSource(arg0: $ServerLevel, arg1: $BlockPos_): $CommandSourceStack;
        get(): $MutableComponent;
        resolve(): string;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        read(arg0: $BlockPos_, arg1: $CompoundTag_, arg2: $HolderLookup$Provider): void;
        isValid(): boolean;
        constructor();
        get valid(): boolean;
    }
    export class $IInteractionChecker {
    }
    export interface $IInteractionChecker {
        canPlayerUse(arg0: $Player): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IInteractionChecker}.
     */
    export type $IInteractionChecker_ = ((arg0: $Player) => boolean);
    export class $StringHelper {
        static snakeCaseToCamelCase(arg0: string): string;
        static camelCaseToSnakeCase(arg0: string): string;
        constructor();
    }
    /**
     * @deprecated
     */
    export class $DistExecutor {
        /**
         * @deprecated
         */
        static unsafeCallWhenOn<T>(arg0: $Dist_, arg1: $Supplier_<$Callable<T>>): T;
        constructor();
    }
    export class $ServerSpeedProvider {
        static serverTick(): void;
        static getSyncInterval(): number;
        static get(): number;
        static clientTick(): void;
        constructor();
        static get syncInterval(): number;
    }
    export class $CameraAngleAnimationService {
        static setAnimationMode(arg0: $CameraAngleAnimationService$Mode_): void;
        static setPitchTarget(arg0: number): void;
        static setYawTarget(arg0: number): void;
        static setAnimationSpeed(arg0: number): void;
        static getYaw(arg0: number): number;
        static isYawAnimating(): boolean;
        static isPitchAnimating(): boolean;
        static tick(): void;
        static getPitch(arg0: number): number;
        constructor();
        static set animationMode(value: $CameraAngleAnimationService$Mode_);
        static set pitchTarget(value: number);
        static set yawTarget(value: number);
        static set animationSpeed(value: number);
        static get yawAnimating(): boolean;
        static get pitchAnimating(): boolean;
    }
    export class $CreateLang extends $Lang {
        static fluidName(arg0: $FluidStack_): $LangBuilder;
        /**
         * @deprecated
         */
        static temporaryText(arg0: string): $LangBuilder;
        static translateDirect(arg0: string, ...arg1: $Object[]): $MutableComponent;
        static translatedOptions(arg0: string, ...arg1: string[]): $List<$Component>;
        static itemName(arg0: $ItemStack_): $LangBuilder;
        static blockName(arg0: $BlockState_): $LangBuilder;
        static builder(): $LangBuilder;
        static number(arg0: number): $LangBuilder;
        static text(arg0: string): $LangBuilder;
        static translate(arg0: string, ...arg1: $Object[]): $LangBuilder;
        constructor();
    }
    export class $DataFixerHelper {
        static BLOCK_POS_FIXERS_VIEW: $Set<$DataFixerHelper$BlockPosFixer>;
        constructor();
    }
    export class $DataFixerHelper$BlockPosFixer extends $Record {
        id(): string;
        reference(): $DSL$TypeReference;
        renames(): $Map<string, string>;
        customFixer(): $Function<$Dynamic<never>, $Dynamic<never>>;
        constructor(reference: $DSL$TypeReference_, id: string, renames: $Map_<string, string>, customFixer: $Function_<$Dynamic<never>, $Dynamic<never>>);
    }
    /**
     * Values that may be interpreted as {@link $DataFixerHelper$BlockPosFixer}.
     */
    export type $DataFixerHelper$BlockPosFixer_ = { customFixer?: $Function_<$Dynamic<never>, $Dynamic<never>>, renames?: $Map_<string, string>, id?: string, reference?: $DSL$TypeReference_,  } | [customFixer?: $Function_<$Dynamic<never>, $Dynamic<never>>, renames?: $Map_<string, string>, id?: string, reference?: $DSL$TypeReference_, ];
    export class $ControlsUtil {
        static isActuallyPressed(arg0: $KeyMapping): boolean;
        static getControls(): $List<$KeyMapping>;
        constructor();
        static get controls(): $List<$KeyMapping>;
    }
    export class $GlobalRegistryAccess {
        static get(): $RegistryAccess;
        static getOrThrow(): $RegistryAccess;
        constructor();
        static get orThrow(): $RegistryAccess;
    }
    export class $Debug {
        /**
         * @deprecated
         */
        static debugChat(arg0: string): void;
        /**
         * @deprecated
         */
        static debugChatAndShowStack(arg0: string, arg1: number): void;
        /**
         * @deprecated
         */
        static debugStack(arg0: number): $Component;
        /**
         * @deprecated
         */
        static debugMessage(arg0: string): void;
        /**
         * @deprecated
         */
        static getLogicalSide(): string;
        /**
         * @deprecated
         */
        static markTemporary(): void;
        /**
         * @deprecated
         */
        static log(arg0: string): void;
        constructor();
        static get logicalSide(): string;
    }
    export class $RecipeGenericsUtil {
        static specify(arg0: $Collection_<$RecipeHolder_<never>>): $Collection<$RecipeHolder<$Recipe<never>>>;
        static cast<P extends $Recipe<never>, C extends P>(arg0: $List_<$RecipeHolder_<C>>): $List<$RecipeHolder<P>>;
        constructor();
    }
    export class $ServerSpeedProvider$Packet extends $Enum<$ServerSpeedProvider$Packet> implements $ClientboundPacketPayload {
        static values(): $ServerSpeedProvider$Packet[];
        static valueOf(arg0: string): $ServerSpeedProvider$Packet;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static INSTANCE: $ServerSpeedProvider$Packet;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerSpeedProvider$Packet>;
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ServerSpeedProvider$Packet}.
     */
    export type $ServerSpeedProvider$Packet_ = "instance";
    export class $BlockHelper {
        static isNotUnheated(arg0: $BlockState_): boolean;
        static hasBlockSolidSide(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): boolean;
        static prepareBlockEntityData(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntity): $CompoundTag;
        static placeSchematicBlock(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $ItemStack_, arg4: $CompoundTag_): void;
        static destroyBlockAs(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: $ItemStack_, arg4: number, arg5: $Consumer_<$ItemStack>): void;
        static findAndRemoveInInventory(arg0: $BlockState_, arg1: $Player, arg2: number): number;
        static getRequiredItem(arg0: $BlockState_): $ItemStack;
        static setZeroAge(arg0: $BlockState_): $BlockState;
        static destroyBlock(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: $Consumer_<$ItemStack>): void;
        static destroyBlock(arg0: $Level_, arg1: $BlockPos_, arg2: number): void;
        static copyProperty<T extends $Comparable<T>>(arg0: $Property<T>, arg1: $BlockState_, arg2: $BlockState_): $BlockState;
        static invokeUse(arg0: $BlockState_, arg1: $Level_, arg2: $Player, arg3: $InteractionHand_, arg4: $BlockHitResult): $InteractionResult;
        static noCollisionInSpace(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        static getBounceMultiplier(arg0: $Block_): number;
        static isSolidWall(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        static copyProperties(arg0: $BlockState_, arg1: $BlockState_): $BlockState;
        static extinguishFire(arg0: $Level_, arg1: $Player, arg2: $BlockPos_, arg3: $Direction_): boolean;
        constructor();
        static set zeroAge(value: $BlockState_);
    }
    export class $ResetableLazy<T> implements $Supplier<T> {
        reset(): void;
        get(): T;
        static of<T>(arg0: $Supplier_<T>): $ResetableLazy<T>;
        constructor(arg0: $Supplier_<T>);
    }
    export class $SameSizeCombinedInvWrapper extends $CombinedInvWrapper {
        static create(...arg0: $IItemHandlerModifiable[]): $CombinedInvWrapper;
    }
    export class $CameraAngleAnimationService$Mode extends $Enum<$CameraAngleAnimationService$Mode> {
        static values(): $CameraAngleAnimationService$Mode[];
        static valueOf(arg0: string): $CameraAngleAnimationService$Mode;
        static LINEAR: $CameraAngleAnimationService$Mode;
        static EXPONENTIAL: $CameraAngleAnimationService$Mode;
    }
    /**
     * Values that may be interpreted as {@link $CameraAngleAnimationService$Mode}.
     */
    export type $CameraAngleAnimationService$Mode_ = "linear" | "exponential";
    export class $AdventureUtil {
        static isAdventure(arg0: $Player): boolean;
        constructor();
    }
    export class $CreatePaths {
        static MODS_DIR: $Path;
        static SCHEMATICS_DIR: $Path;
        static GAME_DIR: $Path;
        static UPLOADED_SCHEMATICS_DIR: $Path;
        static CONFIG_DIR: $Path;
    }
    export class $FilesHelper {
        static createFolderIfMissing(arg0: $Path_): void;
        static loadJsonResource(arg0: string): $JsonElement;
        static findFirstValidFilename(arg0: string, arg1: $Path_, arg2: string): string;
        static slug(arg0: string): string;
        constructor();
    }
    export class $TickBasedCache<K, V> implements $Cache<K, V> {
        cleanUp(): void;
        getIfPresent(arg0: $Object): V;
        getAllPresent(arg0: $Iterable_<never>): $ImmutableMap<K, V>;
        invalidateAll(arg0: $Iterable_<never>): void;
        invalidateAll(): void;
        size(): number;
        get(arg0: K, arg1: $Callable_<V>): V;
        put(arg0: K, arg1: V): void;
        putAll(arg0: $Map_<K, V>): void;
        static tick(): void;
        asMap(): $ConcurrentMap<K, V>;
        static clientTick(): void;
        ticks(): number;
        stats(): $CacheStats;
        invalidate(arg0: $Object): void;
        constructor(arg0: number, arg1: boolean);
        constructor(arg0: number, arg1: boolean, arg2: boolean);
    }
    export class $AbstractBlockBreakQueue {
        destroyBlocks(arg0: $Level_, arg1: $LivingEntity, arg2: $BiConsumer_<$BlockPos, $ItemStack>): void;
        destroyBlocks(arg0: $Level_, arg1: $ItemStack_, arg2: $Player, arg3: $BiConsumer_<$BlockPos, $ItemStack>): void;
        constructor();
    }
    export class $DyeHelper {
        static getWoolOfDye(arg0: $DyeColor_): $ItemLike;
        static getDyeColors(arg0: $DyeColor_): $Couple<number>;
        static addDye(arg0: $DyeColor_, arg1: number, arg2: number, arg3: $Supplier_<$ItemLike>): void;
        constructor();
    }
    export class $RaycastHelper {
        static rayTraceUntil(arg0: $Vec3_, arg1: $Vec3_, arg2: $Predicate_<$BlockPos>): $RaycastHelper$PredicateTraceResult;
        static rayTraceUntil(arg0: $Player, arg1: number, arg2: $Predicate_<$BlockPos>): $RaycastHelper$PredicateTraceResult;
        static getTraceTarget(arg0: $Player, arg1: number, arg2: $Vec3_): $Vec3;
        static rayTraceRange(arg0: $Level_, arg1: $Player, arg2: number): $BlockHitResult;
        constructor();
    }
    export class $FluidFormatter {
        static asComponents(arg0: number, arg1: boolean): $Couple<$MutableComponent>;
        static asString(arg0: number, arg1: boolean): string;
        constructor();
    }
}
