import { $CClient$TrainMapTheme } from "@package/com/simibubi/create/infrastructure/config";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Rect2i, $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $UUID, $List, $UUID_, $List_, $Map } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $WeakReference } from "@package/java/lang/ref";
import { $ScreenEvent$Render$Post, $ClientTickEvent$Post, $InputEvent$MouseButton$Pre, $RenderTooltipEvent$Pre } from "@package/net/neoforged/neoforge/client/event";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Object2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum, $AutoCloseable } from "@package/java/lang";
import { $Pair, $Couple } from "@package/net/createmod/catnip/data";
import { $Level } from "@package/net/minecraft/world/level";
import { $FormattedText } from "@package/net/minecraft/network/chat";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $ServerTickEvent } from "@package/net/neoforged/neoforge/event/tick";
import { $Cache } from "@package/com/google/common/cache";
import { $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $ClientboundPacketPayload, $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/compat/trainmap" {
    export class $TrainMapSync$TrainMapSyncEntry {
        updateFrom(arg0: $TrainMapSync$TrainMapSyncEntry, arg1: boolean): void;
        getPosition(arg0: number, arg1: boolean, arg2: number): $Vec3;
        targetStationName: string;
        waitingForTrain: $UUID;
        prevPositions: number[];
        targetStationDistance: number;
        positions: number[];
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $TrainMapSync$TrainMapSyncEntry>;
        backwards: boolean;
        ownerName: string;
        state: $TrainMapSync$TrainState;
        fueled: boolean;
        prevDims: $List<$ResourceKey<$Level>>;
        signalState: $TrainMapSync$SignalState;
        dimensions: $List<$ResourceKey<$Level>>;
        constructor();
        constructor(arg0: number[], arg1: $List_<$ResourceKey_<$Level>>, arg2: $TrainMapSync$TrainState_, arg3: $TrainMapSync$SignalState_, arg4: boolean, arg5: boolean, arg6: number, arg7: string, arg8: string, arg9: $UUID_);
    }
    export class $FTBChunksTrainMap {
        static mouseClick(arg0: $InputEvent$MouseButton$Pre): void;
        static renderGui(arg0: $ScreenEvent$Render$Post): void;
        static cancelTooltips(arg0: $RenderTooltipEvent$Pre): void;
        static tick(): void;
        constructor();
    }
    export class $TrainMapSync {
        static serverTick(arg0: $ServerTickEvent): void;
        static requestReceived(arg0: $ServerPlayer): void;
        static send(arg0: $MinecraftServer, arg1: boolean): void;
        static lightPacketInterval: number;
        static ticks: number;
        static requestingPlayers: $Cache<$UUID, $WeakReference<$ServerPlayer>>;
        static fullPacketInterval: number;
        constructor();
    }
    export class $TrainMapSyncClient {
        static requestData(): void;
        static stopRequesting(): void;
        static receive(arg0: $TrainMapSyncPacket): void;
        static lastPacket: number;
        static currentData: $Map<$UUID, $TrainMapSync$TrainMapSyncEntry>;
        constructor();
    }
    export class $TrainMapSyncRequestPacket implements $ServerboundPacketPayload {
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static INSTANCE: $TrainMapSyncRequestPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrainMapSyncRequestPacket>;
        constructor();
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    export class $TrainMapRenderer$TrainMapInstance implements $AutoCloseable {
        close(): void;
        getImage(): $NativeImage;
        canBeSkipped(arg0: $Rect2i): boolean;
        draw(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: boolean): void;
        location: $ResourceLocation;
        get image(): $NativeImage;
    }
    export class $TrainMapEvents {
        static mouseClick(arg0: $InputEvent$MouseButton$Pre): void;
        static renderGui(arg0: $ScreenEvent$Render$Post): void;
        static cancelTooltips(arg0: $RenderTooltipEvent$Pre): void;
        static tick(arg0: $ClientTickEvent$Post): void;
        constructor();
    }
    export class $TrainMapRenderer implements $AutoCloseable {
        startDrawing(): void;
        getMaps(): $Object2ObjectMap<$Couple<number>, $TrainMapRenderer$TrainMapInstance>;
        getOrCreateAt(arg0: number, arg1: number): $TrainMapRenderer$TrainMapInstance;
        toSectionKey(arg0: number, arg1: number): $Couple<number>;
        blendPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        finishDrawing(): void;
        alphaAt(arg0: number, arg1: number): number;
        isEmpty(arg0: number, arg1: number): boolean;
        close(): void;
        is(arg0: number, arg1: number, arg2: number): boolean;
        render(arg0: $GuiGraphics, arg1: boolean, arg2: $Rect2i): void;
        resetData(): void;
        getPixel(arg0: number, arg1: number): number;
        setPixel(arg0: number, arg1: number, arg2: number): void;
        blendPixel(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        trackingTheme: $CClient$TrainMapTheme;
        static INSTANCE: $TrainMapRenderer;
        static WIDTH: number;
        static HEIGHT: number;
        trackingDim: $ResourceKey<$Level>;
        trackingVersion: number;
        constructor();
        get maps(): $Object2ObjectMap<$Couple<number>, $TrainMapRenderer$TrainMapInstance>;
    }
    export class $XaeroTrainMap {
        constructor();
    }
    export class $TrainMapSyncPacket implements $ClientboundPacketPayload {
        add(arg0: $UUID_, arg1: $TrainMapSync$TrainMapSyncEntry): void;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        entries: $List<$Pair<$UUID, $TrainMapSync$TrainMapSyncEntry>>;
        light: boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $TrainMapSyncPacket>;
        constructor(arg0: boolean);
        constructor(arg0: boolean, arg1: $List_<$Pair<$UUID_, $TrainMapSync$TrainMapSyncEntry>>);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    export class $TrainMapSync$TrainState extends $Enum<$TrainMapSync$TrainState> {
        static values(): $TrainMapSync$TrainState[];
        static valueOf(arg0: string): $TrainMapSync$TrainState;
        static RUNNING_MANUALLY: $TrainMapSync$TrainState;
        static SCHEDULE_INTERRUPTED: $TrainMapSync$TrainState;
        static DERAILED: $TrainMapSync$TrainState;
        static RUNNING: $TrainMapSync$TrainState;
        static NAVIGATION_FAILED: $TrainMapSync$TrainState;
        static CONDUCTOR_MISSING: $TrainMapSync$TrainState;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrainMapSync$TrainState>;
    }
    /**
     * Values that may be interpreted as {@link $TrainMapSync$TrainState}.
     */
    export type $TrainMapSync$TrainState_ = "running" | "running_manually" | "derailed" | "schedule_interrupted" | "conductor_missing" | "navigation_failed";
    export class $TrainMapSync$SignalState extends $Enum<$TrainMapSync$SignalState> {
        static values(): $TrainMapSync$SignalState[];
        static valueOf(arg0: string): $TrainMapSync$SignalState;
        static NOT_WAITING: $TrainMapSync$SignalState;
        static CHAIN_SIGNAL: $TrainMapSync$SignalState;
        static WAITING_FOR_REDSTONE: $TrainMapSync$SignalState;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrainMapSync$SignalState>;
        static BLOCK_SIGNAL: $TrainMapSync$SignalState;
    }
    /**
     * Values that may be interpreted as {@link $TrainMapSync$SignalState}.
     */
    export type $TrainMapSync$SignalState_ = "not_waiting" | "waiting_for_redstone" | "block_signal" | "chain_signal";
    export class $TrainMapManager {
        static renderToggleWidget(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        static handleToggleWidgetClick(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        static renderAndPick(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: boolean, arg4: $Rect2i): $List<$FormattedText>;
        static isToggleWidgetHovered(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        static redrawAll(arg0: $ResourceKey_<$Level>): void;
        static tick(arg0: $ResourceKey_<$Level>): void;
        static tick(): void;
        constructor();
    }
}
