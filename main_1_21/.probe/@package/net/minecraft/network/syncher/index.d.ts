import { $Sniffer$State } from "@package/net/minecraft/world/entity/animal/sniffer";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Pose } from "@package/net/minecraft/world/entity";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $PaintingVariant } from "@package/net/minecraft/world/entity/decoration";
import { $UUID, $List, $List_, $OptionalInt } from "@package/java/util";
import { $VillagerData } from "@package/net/minecraft/world/entity/npc";
import { $CatVariant, $FrogVariant, $WolfVariant } from "@package/net/minecraft/world/entity/animal";
import { $Armadillo$ArmadilloState } from "@package/net/minecraft/world/entity/animal/armadillo";
import { $BlockPos, $GlobalPos, $Rotations, $Direction, $Holder } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record, $Class } from "@package/java/lang";
import { $Quaternionf, $Vector3f } from "@package/org/joml";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/syncher" {
    export interface $EntityDataSerializer<T> extends RegistryMarked<RegistryTypes.NeoforgeEntityDataSerializersTag, RegistryTypes.NeoforgeEntityDataSerializers> {}
    export class $SyncedDataHolder {
    }
    export interface $SyncedDataHolder {
        onSyncedDataUpdated(dataAccessor: $EntityDataAccessor_<never>): void;
        onSyncedDataUpdated(newData: $List_<$SynchedEntityData$DataValue_<never>>): void;
    }
    /**
     * Handles encoding and decoding of data for `SynchedEntityData`.
     * Note that mods cannot add new serializers, because this is not a managed registry and the serializer ID is limited to 16.
     */
    export class $EntityDataSerializer<T> {
        static forValueType<T>(arg0: $StreamCodec<$RegistryFriendlyByteBuf, T>): $EntityDataSerializer<T>;
    }
    export interface $EntityDataSerializer<T> {
        createAccessor(id: number): $EntityDataAccessor<T>;
        copy(value: T): T;
        codec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
    /**
     * Values that may be interpreted as {@link $EntityDataSerializer}.
     */
    export type $EntityDataSerializer_<T> = RegistryTypes.NeoforgeEntityDataSerializers;
    export class $SynchedEntityData$DataItem<T> {
        setDirty(dirty: boolean): void;
        isSetToDefault(): boolean;
        value(): $SynchedEntityData$DataValue<T>;
        getValue(): T;
        setValue(value: T): void;
        getAccessor(): $EntityDataAccessor<T>;
        isDirty(): boolean;
        constructor(accessor: $EntityDataAccessor_<T>, value: T);
        get setToDefault(): boolean;
        get accessor(): $EntityDataAccessor<T>;
    }
    /**
     * Registry for `EntityDataSerializer`.
     */
    export class $EntityDataSerializers {
        static getSerializer(id: number): $EntityDataSerializer<never>;
        static getSerializedId(serializer: $EntityDataSerializer_<never>): number;
        /**
         * @deprecated
         */
        static registerSerializer(serializer: $EntityDataSerializer_<never>): void;
        static FLOAT: $EntityDataSerializer<number>;
        static PARTICLE: $EntityDataSerializer<$ParticleOptions>;
        static PARTICLES: $EntityDataSerializer<$List<$ParticleOptions>>;
        static BLOCK_STATE: $EntityDataSerializer<$BlockState>;
        static OPTIONAL_UUID: $EntityDataSerializer<($UUID) | undefined>;
        static VILLAGER_DATA: $EntityDataSerializer<$VillagerData>;
        static QUATERNION: $EntityDataSerializer<$Quaternionf>;
        static INT: $EntityDataSerializer<number>;
        static BLOCK_POS: $EntityDataSerializer<$BlockPos>;
        static SNIFFER_STATE: $EntityDataSerializer<$Sniffer$State>;
        static OPTIONAL_BLOCK_POS: $EntityDataSerializer<($BlockPos) | undefined>;
        static OPTIONAL_UNSIGNED_INT: $EntityDataSerializer<$OptionalInt>;
        static WOLF_VARIANT: $EntityDataSerializer<$Holder<$WolfVariant>>;
        static BYTE: $EntityDataSerializer<number>;
        static ITEM_STACK: $EntityDataSerializer<$ItemStack>;
        static OPTIONAL_BLOCK_STATE: $EntityDataSerializer<($BlockState) | undefined>;
        static COMPOUND_TAG: $EntityDataSerializer<$CompoundTag>;
        static LONG: $EntityDataSerializer<number>;
        static OPTIONAL_GLOBAL_POS: $EntityDataSerializer<($GlobalPos) | undefined>;
        static PAINTING_VARIANT: $EntityDataSerializer<$Holder<$PaintingVariant>>;
        static DIRECTION: $EntityDataSerializer<$Direction>;
        static BOOLEAN: $EntityDataSerializer<boolean>;
        static CAT_VARIANT: $EntityDataSerializer<$Holder<$CatVariant>>;
        static OPTIONAL_COMPONENT: $EntityDataSerializer<($Component) | undefined>;
        static POSE: $EntityDataSerializer<$Pose>;
        static ROTATIONS: $EntityDataSerializer<$Rotations>;
        static ARMADILLO_STATE: $EntityDataSerializer<$Armadillo$ArmadilloState>;
        static STRING: $EntityDataSerializer<string>;
        static COMPONENT: $EntityDataSerializer<$Component>;
        static FROG_VARIANT: $EntityDataSerializer<$Holder<$FrogVariant>>;
        static VECTOR3: $EntityDataSerializer<$Vector3f>;
    }
    export class $SynchedEntityData$Builder {
        build(): $SynchedEntityData;
        define<T>(accessor: $EntityDataAccessor_<T>, value: T): $SynchedEntityData$Builder;
        constructor(entity: $SyncedDataHolder);
    }
    export class $EntityDataSerializer$ForValueType<T> {
    }
    export interface $EntityDataSerializer$ForValueType<T> extends $EntityDataSerializer<T> {
        copy(arg0: T): T;
    }
    /**
     * Values that may be interpreted as {@link $EntityDataSerializer$ForValueType}.
     */
    export type $EntityDataSerializer$ForValueType_<T> = (() => void);
    export class $SynchedEntityData$DataValue<T> extends $Record {
        value(): T;
        id(): number;
        write(buffer: $RegistryFriendlyByteBuf): void;
        static read(buffer: $RegistryFriendlyByteBuf, id: number): $SynchedEntityData$DataValue<never>;
        static create<T>(dataAccessor: $EntityDataAccessor_<T>, value: T): $SynchedEntityData$DataValue<T>;
        serializer(): $EntityDataSerializer<T>;
        constructor(id: number, serializer: $EntityDataSerializer_<T>, value: T);
    }
    /**
     * Values that may be interpreted as {@link $SynchedEntityData$DataValue}.
     */
    export type $SynchedEntityData$DataValue_<T> = { id?: number, serializer?: $EntityDataSerializer_<any>, value?: any,  } | [id?: number, serializer?: $EntityDataSerializer_<any>, value?: any, ];
    /**
     * A Key for `SynchedEntityData`.
     */
    export class $EntityDataAccessor<T> extends $Record {
        id(): number;
        serializer(): $EntityDataSerializer<T>;
        constructor(id: number, serializer: $EntityDataSerializer_<T>);
    }
    /**
     * Values that may be interpreted as {@link $EntityDataAccessor}.
     */
    export type $EntityDataAccessor_<T> = { id?: number, serializer?: $EntityDataSerializer_<any>,  } | [id?: number, serializer?: $EntityDataSerializer_<any>, ];
    /**
     * Keeps data in sync from server to client for an entity.
     * A maximum of 254 parameters per entity class can be registered. The system then ensures that these values are updated on the client whenever they change on the server.
     * 
     * Use `#defineId` to register a piece of data for your entity class.
     * Use `#define` during `Entity#defineSynchedData` to set the default value for a given parameter.
     */
    export class $SynchedEntityData {
        /**
         * Gets all data entries which have changed since the last check and clears their dirty flag.
         */
        packDirty(): $List<$SynchedEntityData$DataValue<never>>;
        /**
         * Gets all data entries which have changed since the last check and clears their dirty flag.
         */
        getNonDefaultValues(): $List<$SynchedEntityData$DataValue<never>>;
        /**
         * Updates the data using the given entries. Used on the client when the update packet is received.
         */
        assignValues(entries: $List_<$SynchedEntityData$DataValue_<never>>): void;
        /**
         * Get the value of the given key for this entity.
         */
        get<T>(key: $EntityDataAccessor_<T>): T;
        set<T>(key: $EntityDataAccessor_<T>, value: T, force: boolean): void;
        /**
         * Set the value of the given key for this entity.
         */
        set<T>(key: $EntityDataAccessor_<T>, value: T): void;
        /**
         * Whether any keys have changed since the last synchronization packet to the client.
         */
        isDirty(): boolean;
        /**
         * Register a piece of data to be kept in sync for an entity class.
         * This method must be called during a static initializer of an entity class and the first parameter of this method must be that entity class.
         */
        static defineId<T>(clazz: $Class<$SyncedDataHolder>, serializer: $EntityDataSerializer_<T>): $EntityDataAccessor<T>;
        get nonDefaultValues(): $List<$SynchedEntityData$DataValue<never>>;
        get dirty(): boolean;
    }
}
