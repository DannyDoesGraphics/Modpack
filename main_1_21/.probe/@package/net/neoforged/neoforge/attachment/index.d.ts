import { $Codec_ } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $List_ } from "@package/java/util";
import { $PlayerEvent$Clone } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Consumer_, $Predicate_, $BiPredicate_, $Supplier_, $Function_ } from "@package/java/util/function";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $LivingConversionEvent$Post } from "@package/net/neoforged/neoforge/event/entity/living";
import { $ChunkWatchEvent$Sent } from "@package/net/neoforged/neoforge/event/level";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $AddCallback } from "@package/net/neoforged/neoforge/registries/callback";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/neoforged/neoforge/attachment" {
    export class $AttachmentInternals {
        static onPlayerClone(event: $PlayerEvent$Clone): void;
        static onLivingConvert(event: $LivingConversionEvent$Post): void;
        static copyChunkAttachmentsOnPromotion(provider: $HolderLookup$Provider, from: $AttachmentHolder$AsField, to: $AttachmentHolder$AsField): void;
        /**
         * Do not call directly, use `IEntityExtension#copyAttachmentsFrom(Entity, boolean)`.
         */
        static copyEntityAttachments(from: $Entity, to: $Entity, isDeath: boolean): void;
    }
    /**
     * Implementation class for objects that can hold data attachments.
     * For the user-facing methods, see `IAttachmentHolder`.
     */
    export class $AttachmentHolder implements $IAttachmentHolder {
        removeData<T>(arg0: $AttachmentType_<T>): T;
        getData<T>(arg0: $AttachmentType_<T>): T;
        /**
         * Writes the serializable attachments to a tag.
         * Returns `null` if there are no serializable attachments.
         */
        serializeAttachments(provider: $HolderLookup$Provider): $CompoundTag;
        hasAttachments(): boolean;
        hasData(type: $AttachmentType_<never>): boolean;
        getExistingDataOrNull<T>(arg0: $AttachmentType_<T>): T;
        setData<T>(arg0: $AttachmentType_<T>, arg1: T): T;
        removeData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        getData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        /**
         * Syncs a data attachment of the given type with all relevant clients.
         * 
         * If there is currently no attachment of the given type,
         * the removal of the attachment is synced to the client.
         */
        syncData(type: $Supplier_<$AttachmentType<never>>): void;
        /**
         * Syncs a data attachment of the given type with all relevant clients.
         * 
         * If there is currently no attachment of the given type,
         * the removal of the attachment is synced to the client.
         */
        syncData(type: $AttachmentType_<never>): void;
        /**
         * Returns `true` if there is a data attachment of the give type, `false` otherwise.
         */
        hasData<T>(type: $Supplier_<$AttachmentType<T>>): boolean;
        getExistingDataOrNull<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        /**
         * @return an optional possibly containing a data attachment value of the given type
         * 
         * If there is no data attachment of the given type, an empty optional is returned.
         */
        getExistingData<T>(type: $Supplier_<$AttachmentType<T>>): (T) | undefined;
        /**
         * @return an optional possibly containing a data attachment value of the given type
         * 
         * If there is no data attachment of the given type, an empty optional is returned.
         */
        getExistingData<T>(type: $AttachmentType_<T>): (T) | undefined;
        setData<T>(arg0: $Supplier_<$AttachmentType<T>>, arg1: T): T;
        static ATTACHMENTS_NBT_KEY: string;
        constructor();
    }
    /**
     * Serializer for data attachments.
     * 
     * **The `#read(IAttachmentHolder, Tag, HolderLookup.Provider)` method must be implemented by subclasses!**
     */
    export class $IAttachmentSerializer<S extends $Tag, T> {
    }
    export interface $IAttachmentSerializer<S extends $Tag, T> {
        write(arg0: T, arg1: $HolderLookup$Provider): S;
        read(arg0: $IAttachmentHolder, arg1: S, arg2: $HolderLookup$Provider): T;
    }
    /**
     * Custom copy handler for data attachments, to improve efficiency compared to the default
     * serialize-deserialize-implementation.
     */
    export class $IAttachmentCopyHandler<T> {
    }
    export interface $IAttachmentCopyHandler<T> {
        copy(arg0: T, arg1: $IAttachmentHolder, arg2: $HolderLookup$Provider): T;
    }
    /**
     * Values that may be interpreted as {@link $IAttachmentCopyHandler}.
     */
    export type $IAttachmentCopyHandler_<T> = ((arg0: T, arg1: $IAttachmentHolder, arg2: $HolderLookup$Provider) => T);
    export interface $AttachmentType<T> extends RegistryMarked<RegistryTypes.NeoforgeAttachmentTypesTag, RegistryTypes.NeoforgeAttachmentTypes> {}
    /**
     * Version of the `AttachmentHolder` that is suitable for storing in a field.
     * To be used when extending `AttachmentHolder` is not possible,
     * for example because the class already has a supertype.
     */
    export class $AttachmentHolder$AsField extends $AttachmentHolder {
        deserializeInternal(provider: $HolderLookup$Provider, tag: $CompoundTag_): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(exposedHolder: $IAttachmentHolder);
    }
    export class $AttachmentSync {
        static syncInitialPlayerAttachments(arg0: $ServerPlayer): void;
        static syncLevelUpdate(arg0: $ServerLevel, arg1: $AttachmentType_<never>): void;
        static syncChunkUpdate(arg0: $LevelChunk, arg1: $AttachmentHolder$AsField, arg2: $AttachmentType_<never>): void;
        static syncBlockEntityUpdate(arg0: $BlockEntity, arg1: $AttachmentType_<never>): void;
        static syncInitialLevelAttachments(arg0: $ServerLevel, arg1: $ServerPlayer): void;
        static onChunkSent(arg0: $ChunkWatchEvent$Sent): void;
        static receiveSyncedDataAttachments(arg0: $AttachmentHolder, arg1: $RegistryAccess, arg2: $List_<$AttachmentType_<never>>, arg3: number[]): void;
        static syncInitialEntityAttachments(arg0: $Entity, arg1: $ServerPlayer, arg2: $Consumer_<$Packet<$ClientGamePacketListener>>): void;
        static syncEntityUpdate(arg0: $Entity, arg1: $AttachmentType_<never>): void;
        static SYNCED_ATTACHMENT_TYPES: $Registry<$AttachmentType<never>>;
        static ATTACHMENT_TYPE_ADD_CALLBACK: $AddCallback<$AttachmentType<never>>;
    }
    export class $LevelAttachmentsSavedData extends $SavedData {
        static init(level: $ServerLevel): void;
        constructor(level: $ServerLevel, tag: $CompoundTag_);
        constructor(level: $ServerLevel);
    }
    /**
     * Manages how data attachments are written (on the server) and read (on the client) from packets.
     * 
     * Sync is handled automatically in the following cases:
     * 
     * - A client is receiving initial data for this attachment holder.
     * - An attachment is default-created through `IAttachmentHolder#getData(AttachmentType)`.
     * - An attachment is updated through `IAttachmentHolder#setData(AttachmentType, Object)`.
     * - An attachment is removed through `IAttachmentHolder#removeData(AttachmentType)`.
     * 
     * For other cases such as modifications to mutable synced attachments,
     * `IAttachmentHolder#syncData(AttachmentType)` can be called to trigger syncing.
     */
    export class $AttachmentSyncHandler<T> {
    }
    export interface $AttachmentSyncHandler<T> {
        /**
         * Decides whether data should be sent to some player that can see the holder.
         * 
         * By default, all players that can see the holder are sent the data.
         * A typical use case for this method is to only send player-specific data to that player.
         * 
         * The returned value should be consistent for a given holder and player.
         */
        sendToPlayer(holder: $IAttachmentHolder, to: $ServerPlayer): boolean;
        write(arg0: $RegistryFriendlyByteBuf, arg1: T, arg2: boolean): void;
        read(arg0: $IAttachmentHolder, arg1: $RegistryFriendlyByteBuf, arg2: T): T;
    }
    /**
     * Represents a data attachment type: some data that can be added to any object implementing `IAttachmentHolder`.
     * 
     * Data attachment types must be registered to the registry.
     * 
     * ### `BlockEntity`-exclusive behavior:
     * 
     * - Modifications to attachments should be followed by a call to `BlockEntity#setChanged()`.
     * 
     * ### `Entity`-exclusive behavior:
     * 
     * - Serializable entity attachments are not copied on death by default (but they are copied when returning from the end).
     * - Serializable entity attachments can opt into copying on death via `Builder#copyOnDeath()`.
     * 
     * ### `Level`-exclusive behavior:
     * 
     * - (nothing)
     * 
     * ### `ChunkAccess`-exclusive behavior:
     * 
     * - Modifications to attachments should be followed by a call to `ChunkAccess#setUnsaved(boolean)`.
     * - Serializable attachments are copied from a `ProtoChunk` to a `LevelChunk` on promotion.
     */
    export class $AttachmentType<T> {
        static builder<T>(arg0: $Supplier_<T>): $AttachmentType$Builder<T>;
        static builder<T>(arg0: $Function_<$IAttachmentHolder, T>): $AttachmentType$Builder<T>;
        static serializable<S extends $Tag, T extends $INBTSerializable<S>>(arg0: $Function_<$IAttachmentHolder, T>): $AttachmentType$Builder<T>;
        static serializable<S extends $Tag, T extends $INBTSerializable<S>>(arg0: $Supplier_<T>): $AttachmentType$Builder<T>;
    }
    /**
     * Values that may be interpreted as {@link $AttachmentType}.
     */
    export type $AttachmentType_<T> = RegistryTypes.NeoforgeAttachmentTypes;
    /**
     * An object that can hold data attachments.
     */
    export class $IAttachmentHolder {
    }
    export interface $IAttachmentHolder {
        removeData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        removeData<T>(arg0: $AttachmentType_<T>): T;
        getData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        getData<T>(arg0: $AttachmentType_<T>): T;
        /**
         * Syncs a data attachment of the given type with all relevant clients.
         * 
         * If there is currently no attachment of the given type,
         * the removal of the attachment is synced to the client.
         */
        syncData(type: $Supplier_<$AttachmentType<never>>): void;
        /**
         * Syncs a data attachment of the given type with all relevant clients.
         * 
         * If there is currently no attachment of the given type,
         * the removal of the attachment is synced to the client.
         */
        syncData(type: $AttachmentType_<never>): void;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        hasAttachments(): boolean;
        /**
         * Returns `true` if there is a data attachment of the give type, `false` otherwise.
         */
        hasData<T>(type: $Supplier_<$AttachmentType<T>>): boolean;
        /**
         * Returns `true` if there is a data attachment of the give type, `false` otherwise.
         */
        hasData(type: $AttachmentType_<never>): boolean;
        getExistingDataOrNull<T>(arg0: $AttachmentType_<T>): T;
        getExistingDataOrNull<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        /**
         * @return an optional possibly containing a data attachment value of the given type
         * 
         * If there is no data attachment of the given type, an empty optional is returned.
         */
        getExistingData<T>(type: $Supplier_<$AttachmentType<T>>): (T) | undefined;
        /**
         * @return an optional possibly containing a data attachment value of the given type
         * 
         * If there is no data attachment of the given type, an empty optional is returned.
         */
        getExistingData<T>(type: $AttachmentType_<T>): (T) | undefined;
        setData<T>(arg0: $Supplier_<$AttachmentType<T>>, arg1: T): T;
        setData<T>(arg0: $AttachmentType_<T>, arg1: T): T;
    }
    export class $AttachmentType$Builder<T> {
        copyHandler(arg0: $IAttachmentCopyHandler_<T>): $AttachmentType$Builder<T>;
        build(): $AttachmentType<T>;
        sync(arg0: $StreamCodec<$RegistryFriendlyByteBuf, T>): $AttachmentType$Builder<T>;
        sync(arg0: $AttachmentSyncHandler<T>): $AttachmentType$Builder<T>;
        sync(arg0: $BiPredicate_<$IAttachmentHolder, $ServerPlayer>, arg1: $StreamCodec<$RegistryFriendlyByteBuf, T>): $AttachmentType$Builder<T>;
        serialize(arg0: $Codec_<T>): $AttachmentType$Builder<T>;
        serialize(arg0: $Codec_<T>, arg1: $Predicate_<T>): $AttachmentType$Builder<T>;
        serialize(arg0: $IAttachmentSerializer<never, T>): $AttachmentType$Builder<T>;
        copyOnDeath(): $AttachmentType$Builder<T>;
    }
}
