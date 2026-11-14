import { $Component_ } from "@package/net/minecraft/network/chat";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ConfigurationTask$Type_ } from "@package/net/minecraft/server/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CustomPacketPayload, $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $ServerCommonPacketListener, $ClientCommonPacketListener } from "@package/net/minecraft/network/protocol/common";
import { $Supplier_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ICommonPacketListener } from "@package/net/neoforged/neoforge/common/extensions";
import { $ChannelHandlerContext } from "@package/io/netty/channel";
import { $Connection, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $Runnable_, $Record } from "@package/java/lang";

declare module "@package/net/neoforged/neoforge/network/handling" {
    /**
     * Callback for handling custom packets.
     */
    export class $IPayloadHandler<T extends $CustomPacketPayload> {
    }
    export interface $IPayloadHandler<T extends $CustomPacketPayload> {
        handle(arg0: T, arg1: $IPayloadContext): void;
    }
    /**
     * Values that may be interpreted as {@link $IPayloadHandler}.
     */
    export type $IPayloadHandler_<T> = ((arg0: T, arg1: $IPayloadContext) => void);
    export class $ServerPayloadContext extends $Record implements $IPayloadContext {
        finishCurrentTask(arg0: $ConfigurationTask$Type_): void;
        payloadId(): $ResourceLocation;
        handle(arg0: $CustomPacketPayload_): void;
        listener(): $ServerCommonPacketListener;
        flow(): $PacketFlow;
        enqueueWork(arg0: $Runnable_): $CompletableFuture<void>;
        enqueueWork<T>(arg0: $Supplier_<T>): $CompletableFuture<T>;
        player(): $ServerPlayer;
        channelHandlerContext(): $ChannelHandlerContext;
        handle(arg0: $Packet<never>): void;
        protocol(): $ConnectionProtocol;
        connection(): $Connection;
        disconnect(arg0: $Component_): void;
        reply(arg0: $CustomPacketPayload_): void;
        constructor(listener: $ServerCommonPacketListener, payloadId: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $ServerPayloadContext}.
     */
    export type $ServerPayloadContext_ = { listener?: $ServerCommonPacketListener, payloadId?: $ResourceLocation_,  } | [listener?: $ServerCommonPacketListener, payloadId?: $ResourceLocation_, ];
    /**
     * Common context interface for payload handlers.
     */
    export class $IPayloadContext {
    }
    export interface $IPayloadContext {
        /**
         * @return the channel handler context
         */
        channelHandlerContext(): $ChannelHandlerContext;
        /**
         * Marks a `ConfigurationTask` as completed.
         */
        finishCurrentTask(type: $ConfigurationTask$Type_): void;
        /**
         * Handles a packet using the current context.
         * 
         * Used to trigger vanilla handling when custom payloads may be transformed into a vanilla packet.
         */
        handle(packet: $Packet<never>): void;
        /**
         * Sends the given payload back to the sender.
         */
        handle(payload: $CustomPacketPayload_): void;
        /**
         * @return the protocol of the connection
         */
        protocol(): $ConnectionProtocol;
        /**
         * @return the connection
         */
        connection(): $Connection;
        /**
         * Retrieves the packet listener associated with this context.
         * 
         * For usability, this is typed to `ICommonPacketListener`, but can be downcast to the vanilla packet listeners if necessary.
         */
        listener(): $ICommonPacketListener;
        /**
         * Disconnects the player from the network.
         */
        disconnect(reason: $Component_): void;
        /**
         * @return the flow of the received payload
         */
        flow(): $PacketFlow;
        enqueueWork<T>(task: $Supplier_<T>): $CompletableFuture<T>;
        /**
         * For handlers running on the network thread, submits the given task to be run on the main thread of the game.
         * 
         * For handlers running on the main thread, immediately executes the task.
         * 
         * On the network thread, the future will be automatically guarded against exceptions using `CompletableFuture#exceptionally`.
         * If you need to catch your own exceptions, use a try/catch block within your task.
         */
        enqueueWork(task: $Runnable_): $CompletableFuture<void>;
        /**
         * Retrieves the player relevant to this payload. Players are only available in the `ConnectionProtocol#PLAY` phase.
         * 
         * For server-bound payloads, retrieves the sending `ServerPlayer`.
         * 
         * For client-bound payloads, retrieves the receiving `LocalPlayer`.
         */
        player(): $Player;
        /**
         * Sends the given payload back to the sender.
         */
        reply(payload: $CustomPacketPayload_): void;
    }
    export class $DirectionalPayloadHandler<T extends $CustomPacketPayload> extends $Record implements $IPayloadHandler<T> {
        handle(arg0: T, arg1: $IPayloadContext): void;
        clientSide(): $IPayloadHandler<T>;
        serverSide(): $IPayloadHandler<T>;
        constructor(clientSide: $IPayloadHandler_<T>, serverSide: $IPayloadHandler_<T>);
    }
    /**
     * Values that may be interpreted as {@link $DirectionalPayloadHandler}.
     */
    export type $DirectionalPayloadHandler_<T> = { clientSide?: $IPayloadHandler_<$CustomPacketPayload>, serverSide?: $IPayloadHandler_<$CustomPacketPayload>,  } | [clientSide?: $IPayloadHandler_<$CustomPacketPayload>, serverSide?: $IPayloadHandler_<$CustomPacketPayload>, ];
    export class $ClientPayloadContext extends $Record implements $IPayloadContext {
        finishCurrentTask(arg0: $ConfigurationTask$Type_): void;
        payloadId(): $ResourceLocation;
        handle(arg0: $CustomPacketPayload_): void;
        listener(): $ClientCommonPacketListener;
        flow(): $PacketFlow;
        enqueueWork(arg0: $Runnable_): $CompletableFuture<void>;
        enqueueWork<T>(arg0: $Supplier_<T>): $CompletableFuture<T>;
        player(): $Player;
        channelHandlerContext(): $ChannelHandlerContext;
        handle(arg0: $Packet<never>): void;
        protocol(): $ConnectionProtocol;
        connection(): $Connection;
        disconnect(arg0: $Component_): void;
        reply(arg0: $CustomPacketPayload_): void;
        constructor(listener: $ClientCommonPacketListener, payloadId: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $ClientPayloadContext}.
     */
    export type $ClientPayloadContext_ = { listener?: $ClientCommonPacketListener, payloadId?: $ResourceLocation_,  } | [listener?: $ClientCommonPacketListener, payloadId?: $ResourceLocation_, ];
    export class $MainThreadPayloadHandler<T extends $CustomPacketPayload> extends $Record implements $IPayloadHandler<T> {
        handler(): $IPayloadHandler<T>;
        handle(arg0: T, arg1: $IPayloadContext): void;
        constructor(handler: $IPayloadHandler_<T>);
    }
    /**
     * Values that may be interpreted as {@link $MainThreadPayloadHandler}.
     */
    export type $MainThreadPayloadHandler_<T> = { handler?: $IPayloadHandler_<$CustomPacketPayload>,  } | [handler?: $IPayloadHandler_<$CustomPacketPayload>, ];
}
