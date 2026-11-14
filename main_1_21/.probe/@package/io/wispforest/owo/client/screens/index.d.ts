import { $Endec } from "@package/io/wispforest/endec";
import { $Consumer_ } from "@package/java/util/function";
import { $Observable } from "@package/io/wispforest/owo/util";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Record, $Class } from "@package/java/lang";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $ReflectiveEndecBuilder } from "@package/io/wispforest/endec/impl";

declare module "@package/io/wispforest/owo/client/screens" {
    export class $OwoScreenHandler {
    }
    export interface $OwoScreenHandler {
        sendMessage<R extends $Record>(message: R): void;
        addClientboundMessage<R extends $Record>(messageClass: $Class<R>, handler: $Consumer_<R>): void;
        addClientboundMessage<R extends $Record>(messageClass: $Class<R>, endec: $Endec<R>, handler: $Consumer_<R>): void;
        endecBuilder(): $ReflectiveEndecBuilder;
        addServerboundMessage<R extends $Record>(messageClass: $Class<R>, handler: $Consumer_<R>): void;
        addServerboundMessage<R extends $Record>(messageClass: $Class<R>, endec: $Endec<R>, handler: $Consumer_<R>): void;
        createProperty<T>(clazz: $Class<T>, endec: $Endec<T>, initial: T): $SyncedProperty<T>;
        createProperty<T>(clazz: $Class<T>, initial: T): $SyncedProperty<T>;
        player(): $Player;
    }
    export class $ScreenInternals$SyncPropertiesPacket extends $Record implements $CustomPacketPayload {
        payload(): $FriendlyByteBuf;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static ENDEC: $Endec<$ScreenInternals$SyncPropertiesPacket>;
        static ID: $CustomPacketPayload$Type<$ScreenInternals$SyncPropertiesPacket>;
        constructor(payload: $FriendlyByteBuf);
    }
    /**
     * Values that may be interpreted as {@link $ScreenInternals$SyncPropertiesPacket}.
     */
    export type $ScreenInternals$SyncPropertiesPacket_ = { payload?: $FriendlyByteBuf,  } | [payload?: $FriendlyByteBuf, ];
    export class $SyncedProperty<T> extends $Observable<T> {
        markDirty(): void;
        needsSync(): boolean;
        index(): number;
        write(buf: $FriendlyByteBuf): void;
        read(buf: $FriendlyByteBuf): void;
        constructor(index: number, endec: $Endec<T>, initial: T, owner: $AbstractContainerMenu);
    }
    export class $ScreenInternals$LocalPacket extends $Record implements $CustomPacketPayload {
        packetId(): number;
        payload(): $FriendlyByteBuf;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static ENDEC: $Endec<$ScreenInternals$LocalPacket>;
        static ID: $CustomPacketPayload$Type<$ScreenInternals$LocalPacket>;
        constructor(packetId: number, payload: $FriendlyByteBuf);
    }
    /**
     * Values that may be interpreted as {@link $ScreenInternals$LocalPacket}.
     */
    export type $ScreenInternals$LocalPacket_ = { packetId?: number, payload?: $FriendlyByteBuf,  } | [packetId?: number, payload?: $FriendlyByteBuf, ];
}
