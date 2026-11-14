import { $Level } from "@package/net/minecraft/world/level";
import { $PositionSource, $GameEvent } from "@package/net/minecraft/world/level/gameevent";
import { $UUID, $List, $UUID_, $Set_, $List_, $Set } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $Path } from "@package/net/minecraft/world/level/pathfinder";
import { $BlockPos, $BlockPos_, $SectionPos } from "@package/net/minecraft/core";
import { $ConnectionProtocol_, $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PacketFlow_ } from "@package/net/minecraft/network/protocol";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $StreamMemberEncoder_, $StreamCodec, $StreamDecoder_ } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/protocol/common/custom" {
    export class $BrainDebugPayload$BrainDump extends $Record {
        hasPoi(pos: $BlockPos_): boolean;
        gossips(): $List<string>;
        maxHealth(): number;
        name(): string;
        id(): number;
        write(buffer: $FriendlyByteBuf): void;
        pos(): $Vec3;
        path(): $Path;
        xp(): number;
        uuid(): $UUID;
        activities(): $List<string>;
        inventory(): string;
        health(): number;
        profession(): string;
        memories(): $List<string>;
        pois(): $Set<$BlockPos>;
        behaviors(): $List<string>;
        wantsGolem(): boolean;
        angerLevel(): number;
        potentialPois(): $Set<$BlockPos>;
        hasPotentialPoi(pos: $BlockPos_): boolean;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $UUID_, arg1: number, arg2: string, arg3: string, arg4: number, arg5: number, arg6: number, arg7: $Vec3_, arg8: string, arg9: $Path | null, arg10: boolean, arg11: number, arg12: $List_<string>, arg13: $List_<string>, arg14: $List_<string>, arg15: $List_<string>, arg16: $Set_<$BlockPos_>, arg17: $Set_<$BlockPos_>);
    }
    /**
     * Values that may be interpreted as {@link $BrainDebugPayload$BrainDump}.
     */
    export type $BrainDebugPayload$BrainDump_ = { id?: number, memories?: $List_<string>, path?: $Path, inventory?: string, uuid?: $UUID_, maxHealth?: number, name?: string, activities?: $List_<string>, wantsGolem?: boolean, profession?: string, pois?: $Set_<$BlockPos_>, gossips?: $List_<string>, pos?: $Vec3_, angerLevel?: number, behaviors?: $List_<string>, health?: number, xp?: number, potentialPois?: $Set_<$BlockPos_>,  } | [id?: number, memories?: $List_<string>, path?: $Path, inventory?: string, uuid?: $UUID_, maxHealth?: number, name?: string, activities?: $List_<string>, wantsGolem?: boolean, profession?: string, pois?: $Set_<$BlockPos_>, gossips?: $List_<string>, pos?: $Vec3_, angerLevel?: number, behaviors?: $List_<string>, health?: number, xp?: number, potentialPois?: $Set_<$BlockPos_>, ];
    export class $BrainDebugPayload extends $Record implements $CustomPacketPayload {
        brainDump(): $BrainDebugPayload$BrainDump;
        type(): $CustomPacketPayload$Type<$BrainDebugPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$BrainDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $BrainDebugPayload>;
        constructor(arg0: $BrainDebugPayload$BrainDump_);
    }
    /**
     * Values that may be interpreted as {@link $BrainDebugPayload}.
     */
    export type $BrainDebugPayload_ = { brainDump?: $BrainDebugPayload$BrainDump_,  } | [brainDump?: $BrainDebugPayload$BrainDump_, ];
    export class $RaidsDebugPayload extends $Record implements $CustomPacketPayload {
        raidCenters(): $List<$BlockPos>;
        type(): $CustomPacketPayload$Type<$RaidsDebugPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$RaidsDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $RaidsDebugPayload>;
        constructor(arg0: $List_<$BlockPos_>);
    }
    /**
     * Values that may be interpreted as {@link $RaidsDebugPayload}.
     */
    export type $RaidsDebugPayload_ = { raidCenters?: $List_<$BlockPos_>,  } | [raidCenters?: $List_<$BlockPos_>, ];
    export class $BeeDebugPayload$BeeInfo extends $Record {
        hivePos(): $BlockPos;
        hasHive(pos: $BlockPos_): boolean;
        goals(): $Set<string>;
        id(): number;
        write(buffer: $FriendlyByteBuf): void;
        pos(): $Vec3;
        path(): $Path;
        uuid(): $UUID;
        flowerPos(): $BlockPos;
        travelTicks(): number;
        generateName(): string;
        blacklistedHives(): $List<$BlockPos>;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $UUID_, arg1: number, arg2: $Vec3_, arg3: $Path | null, arg4: $BlockPos_ | null, arg5: $BlockPos_ | null, arg6: number, arg7: $Set_<string>, arg8: $List_<$BlockPos_>);
    }
    /**
     * Values that may be interpreted as {@link $BeeDebugPayload$BeeInfo}.
     */
    export type $BeeDebugPayload$BeeInfo_ = { hivePos?: $BlockPos_, pos?: $Vec3_, flowerPos?: $BlockPos_, travelTicks?: number, goals?: $Set_<string>, uuid?: $UUID_, path?: $Path, id?: number, blacklistedHives?: $List_<$BlockPos_>,  } | [hivePos?: $BlockPos_, pos?: $Vec3_, flowerPos?: $BlockPos_, travelTicks?: number, goals?: $Set_<string>, uuid?: $UUID_, path?: $Path, id?: number, blacklistedHives?: $List_<$BlockPos_>, ];
    export class $PathfindingDebugPayload extends $Record implements $CustomPacketPayload {
        maxNodeDistance(): number;
        type(): $CustomPacketPayload$Type<$PathfindingDebugPayload>;
        path(): $Path;
        entityId(): number;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$PathfindingDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $PathfindingDebugPayload>;
        constructor(arg0: number, arg1: $Path, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $PathfindingDebugPayload}.
     */
    export type $PathfindingDebugPayload_ = { entityId?: number, maxNodeDistance?: number, path?: $Path,  } | [entityId?: number, maxNodeDistance?: number, path?: $Path, ];
    export class $WorldGenAttemptDebugPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$WorldGenAttemptDebugPayload>;
        scale(): number;
        pos(): $BlockPos;
        red(): number;
        blue(): number;
        green(): number;
        alpha(): number;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$WorldGenAttemptDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $WorldGenAttemptDebugPayload>;
        constructor(arg0: $BlockPos_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
    }
    /**
     * Values that may be interpreted as {@link $WorldGenAttemptDebugPayload}.
     */
    export type $WorldGenAttemptDebugPayload_ = { alpha?: number, scale?: number, blue?: number, red?: number, pos?: $BlockPos_, green?: number,  } | [alpha?: number, scale?: number, blue?: number, red?: number, pos?: $BlockPos_, green?: number, ];
    export class $HiveDebugPayload$HiveInfo extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        pos(): $BlockPos;
        occupantCount(): number;
        honeyLevel(): number;
        hiveType(): string;
        sedated(): boolean;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $BlockPos_, arg1: string, arg2: number, arg3: number, arg4: boolean);
    }
    /**
     * Values that may be interpreted as {@link $HiveDebugPayload$HiveInfo}.
     */
    export type $HiveDebugPayload$HiveInfo_ = { hiveType?: string, occupantCount?: number, pos?: $BlockPos_, sedated?: boolean, honeyLevel?: number,  } | [hiveType?: string, occupantCount?: number, pos?: $BlockPos_, sedated?: boolean, honeyLevel?: number, ];
    export class $BreezeDebugPayload$BreezeInfo extends $Record {
        id(): number;
        write(buffer: $FriendlyByteBuf): void;
        uuid(): $UUID;
        generateName(): string;
        attackTarget(): number;
        jumpTarget(): $BlockPos;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $UUID_, arg1: number, arg2: number, arg3: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $BreezeDebugPayload$BreezeInfo}.
     */
    export type $BreezeDebugPayload$BreezeInfo_ = { attackTarget?: number, jumpTarget?: $BlockPos_, uuid?: $UUID_, id?: number,  } | [attackTarget?: number, jumpTarget?: $BlockPos_, uuid?: $UUID_, id?: number, ];
    export class $GameTestClearMarkersDebugPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$GameTestClearMarkersDebugPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$GameTestClearMarkersDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $GameTestClearMarkersDebugPayload>;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $GameTestClearMarkersDebugPayload}.
     */
    export type $GameTestClearMarkersDebugPayload_ = {  } | [];
    export class $VillageSectionsDebugPayload extends $Record implements $CustomPacketPayload {
        villageChunks(): $Set<$SectionPos>;
        notVillageChunks(): $Set<$SectionPos>;
        type(): $CustomPacketPayload$Type<$VillageSectionsDebugPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$VillageSectionsDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $VillageSectionsDebugPayload>;
        constructor(arg0: $Set_<$SectionPos>, arg1: $Set_<$SectionPos>);
    }
    /**
     * Values that may be interpreted as {@link $VillageSectionsDebugPayload}.
     */
    export type $VillageSectionsDebugPayload_ = { notVillageChunks?: $Set_<$SectionPos>, villageChunks?: $Set_<$SectionPos>,  } | [notVillageChunks?: $Set_<$SectionPos>, villageChunks?: $Set_<$SectionPos>, ];
    export class $BeeDebugPayload extends $Record implements $CustomPacketPayload {
        beeInfo(): $BeeDebugPayload$BeeInfo;
        type(): $CustomPacketPayload$Type<$BeeDebugPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$BeeDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $BeeDebugPayload>;
        constructor(arg0: $BeeDebugPayload$BeeInfo_);
    }
    /**
     * Values that may be interpreted as {@link $BeeDebugPayload}.
     */
    export type $BeeDebugPayload_ = { beeInfo?: $BeeDebugPayload$BeeInfo_,  } | [beeInfo?: $BeeDebugPayload$BeeInfo_, ];
    export class $StructuresDebugPayload$PieceInfo extends $Record {
        isStart(): boolean;
        boundingBox(): $BoundingBox;
        write(buffer: $FriendlyByteBuf): void;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $BoundingBox, arg1: boolean);
        get start(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $StructuresDebugPayload$PieceInfo}.
     */
    export type $StructuresDebugPayload$PieceInfo_ = { isStart?: boolean, boundingBox?: $BoundingBox,  } | [isStart?: boolean, boundingBox?: $BoundingBox, ];
    export class $GameTestAddMarkerDebugPayload extends $Record implements $CustomPacketPayload {
        durationMs(): number;
        type(): $CustomPacketPayload$Type<$GameTestAddMarkerDebugPayload>;
        pos(): $BlockPos;
        color(): number;
        text(): string;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$GameTestAddMarkerDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $GameTestAddMarkerDebugPayload>;
        constructor(arg0: $BlockPos_, arg1: number, arg2: string, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $GameTestAddMarkerDebugPayload}.
     */
    export type $GameTestAddMarkerDebugPayload_ = { durationMs?: number, text?: string, pos?: $BlockPos_, color?: number,  } | [durationMs?: number, text?: string, pos?: $BlockPos_, color?: number, ];
    export class $CustomPacketPayload$TypeAndCodec<B extends $FriendlyByteBuf, T extends $CustomPacketPayload> extends $Record {
        type(): $CustomPacketPayload$Type<T>;
        codec(): $StreamCodec<B, T>;
        constructor(type: $CustomPacketPayload$Type_<T>, codec: $StreamCodec<B, T>);
    }
    /**
     * Values that may be interpreted as {@link $CustomPacketPayload$TypeAndCodec}.
     */
    export type $CustomPacketPayload$TypeAndCodec_<B, T> = { type?: $CustomPacketPayload$Type_<$CustomPacketPayload_>, codec?: $StreamCodec<$FriendlyByteBuf, $CustomPacketPayload_>,  } | [type?: $CustomPacketPayload$Type_<$CustomPacketPayload_>, codec?: $StreamCodec<$FriendlyByteBuf, $CustomPacketPayload_>, ];
    export class $NeighborUpdatesDebugPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$NeighborUpdatesDebugPayload>;
        time(): number;
        pos(): $BlockPos;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$NeighborUpdatesDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $NeighborUpdatesDebugPayload>;
        constructor(arg0: number, arg1: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $NeighborUpdatesDebugPayload}.
     */
    export type $NeighborUpdatesDebugPayload_ = { pos?: $BlockPos_, time?: number,  } | [pos?: $BlockPos_, time?: number, ];
    export class $StructuresDebugPayload extends $Record implements $CustomPacketPayload {
        mainBB(): $BoundingBox;
        dimension(): $ResourceKey<$Level>;
        type(): $CustomPacketPayload$Type<$StructuresDebugPayload>;
        pieces(): $List<$StructuresDebugPayload$PieceInfo>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$StructuresDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $StructuresDebugPayload>;
        constructor(arg0: $ResourceKey_<$Level>, arg1: $BoundingBox, arg2: $List_<$StructuresDebugPayload$PieceInfo_>);
    }
    /**
     * Values that may be interpreted as {@link $StructuresDebugPayload}.
     */
    export type $StructuresDebugPayload_ = { pieces?: $List_<$StructuresDebugPayload$PieceInfo_>, mainBB?: $BoundingBox, dimension?: $ResourceKey_<$Level>,  } | [pieces?: $List_<$StructuresDebugPayload$PieceInfo_>, mainBB?: $BoundingBox, dimension?: $ResourceKey_<$Level>, ];
    export class $PoiAddedDebugPayload extends $Record implements $CustomPacketPayload {
        freeTicketCount(): number;
        poiType(): string;
        type(): $CustomPacketPayload$Type<$PoiAddedDebugPayload>;
        pos(): $BlockPos;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$PoiAddedDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $PoiAddedDebugPayload>;
        constructor(arg0: $BlockPos_, arg1: string, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $PoiAddedDebugPayload}.
     */
    export type $PoiAddedDebugPayload_ = { freeTicketCount?: number, poiType?: string, pos?: $BlockPos_,  } | [freeTicketCount?: number, poiType?: string, pos?: $BlockPos_, ];
    export class $PoiTicketCountDebugPayload extends $Record implements $CustomPacketPayload {
        freeTicketCount(): number;
        type(): $CustomPacketPayload$Type<$PoiTicketCountDebugPayload>;
        pos(): $BlockPos;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$PoiTicketCountDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $PoiTicketCountDebugPayload>;
        constructor(arg0: $BlockPos_, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $PoiTicketCountDebugPayload}.
     */
    export type $PoiTicketCountDebugPayload_ = { pos?: $BlockPos_, freeTicketCount?: number,  } | [pos?: $BlockPos_, freeTicketCount?: number, ];
    export class $CustomPacketPayload$Type<T extends $CustomPacketPayload> extends $Record {
        id(): $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $CustomPacketPayload$Type}.
     */
    export type $CustomPacketPayload$Type_<T> = { id?: $ResourceLocation_,  } | [id?: $ResourceLocation_, ];
    export class $PoiRemovedDebugPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$PoiRemovedDebugPayload>;
        pos(): $BlockPos;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$PoiRemovedDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $PoiRemovedDebugPayload>;
        constructor(arg0: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $PoiRemovedDebugPayload}.
     */
    export type $PoiRemovedDebugPayload_ = { pos?: $BlockPos_,  } | [pos?: $BlockPos_, ];
    export class $BreezeDebugPayload extends $Record implements $CustomPacketPayload {
        breezeInfo(): $BreezeDebugPayload$BreezeInfo;
        type(): $CustomPacketPayload$Type<$BreezeDebugPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$BreezeDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $BreezeDebugPayload>;
        constructor(arg0: $BreezeDebugPayload$BreezeInfo_);
    }
    /**
     * Values that may be interpreted as {@link $BreezeDebugPayload}.
     */
    export type $BreezeDebugPayload_ = { breezeInfo?: $BreezeDebugPayload$BreezeInfo_,  } | [breezeInfo?: $BreezeDebugPayload$BreezeInfo_, ];
    export class $DiscardedPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$DiscardedPayload>;
        id(): $ResourceLocation;
        static codec<T extends $FriendlyByteBuf>(id: $ResourceLocation_, maxSize: number): $StreamCodec<T, $DiscardedPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $DiscardedPayload}.
     */
    export type $DiscardedPayload_ = { id?: $ResourceLocation_,  } | [id?: $ResourceLocation_, ];
    export class $GoalDebugPayload extends $Record implements $CustomPacketPayload {
        goals(): $List<$GoalDebugPayload$DebugGoal>;
        type(): $CustomPacketPayload$Type<$GoalDebugPayload>;
        pos(): $BlockPos;
        entityId(): number;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$GoalDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $GoalDebugPayload>;
        constructor(arg0: number, arg1: $BlockPos_, arg2: $List_<$GoalDebugPayload$DebugGoal_>);
    }
    /**
     * Values that may be interpreted as {@link $GoalDebugPayload}.
     */
    export type $GoalDebugPayload_ = { goals?: $List_<$GoalDebugPayload$DebugGoal_>, entityId?: number, pos?: $BlockPos_,  } | [goals?: $List_<$GoalDebugPayload$DebugGoal_>, entityId?: number, pos?: $BlockPos_, ];
    export class $GameEventDebugPayload extends $Record implements $CustomPacketPayload {
        gameEventType(): $ResourceKey<$GameEvent>;
        type(): $CustomPacketPayload$Type<$GameEventDebugPayload>;
        pos(): $Vec3;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$GameEventDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $GameEventDebugPayload>;
        constructor(arg0: $ResourceKey_<$GameEvent>, arg1: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $GameEventDebugPayload}.
     */
    export type $GameEventDebugPayload_ = { pos?: $Vec3_, gameEventType?: $ResourceKey_<$GameEvent>,  } | [pos?: $Vec3_, gameEventType?: $ResourceKey_<$GameEvent>, ];
    export class $BrandPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$BrandPayload>;
        brand(): string;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$BrandPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $BrandPayload>;
        constructor(arg0: string);
    }
    /**
     * Values that may be interpreted as {@link $BrandPayload}.
     */
    export type $BrandPayload_ = { brand?: string,  } | [brand?: string, ];
    export class $GoalDebugPayload$DebugGoal extends $Record {
        name(): string;
        priority(): number;
        write(buffer: $FriendlyByteBuf): void;
        isRunning(): boolean;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: number, arg1: boolean, arg2: string);
        get running(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $GoalDebugPayload$DebugGoal}.
     */
    export type $GoalDebugPayload$DebugGoal_ = { isRunning?: boolean, priority?: number, name?: string,  } | [isRunning?: boolean, priority?: number, name?: string, ];
    export class $GameEventListenerDebugPayload extends $Record implements $CustomPacketPayload {
        listenerPos(): $PositionSource;
        listenerRange(): number;
        type(): $CustomPacketPayload$Type<$GameEventListenerDebugPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$GameEventListenerDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $GameEventListenerDebugPayload>;
        constructor(arg0: $PositionSource, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $GameEventListenerDebugPayload}.
     */
    export type $GameEventListenerDebugPayload_ = { listenerPos?: $PositionSource, listenerRange?: number,  } | [listenerPos?: $PositionSource, listenerRange?: number, ];
    export class $HiveDebugPayload extends $Record implements $CustomPacketPayload {
        hiveInfo(): $HiveDebugPayload$HiveInfo;
        type(): $CustomPacketPayload$Type<$HiveDebugPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$HiveDebugPayload>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $HiveDebugPayload>;
        constructor(arg0: $HiveDebugPayload$HiveInfo_);
    }
    /**
     * Values that may be interpreted as {@link $HiveDebugPayload}.
     */
    export type $HiveDebugPayload_ = { hiveInfo?: $HiveDebugPayload$HiveInfo_,  } | [hiveInfo?: $HiveDebugPayload$HiveInfo_, ];
    export class $CustomPacketPayload$FallbackProvider<B extends $FriendlyByteBuf> {
    }
    export interface $CustomPacketPayload$FallbackProvider<B extends $FriendlyByteBuf> {
        create(id: $ResourceLocation_): $StreamCodec<B, $CustomPacketPayload>;
    }
    /**
     * Values that may be interpreted as {@link $CustomPacketPayload$FallbackProvider}.
     */
    export type $CustomPacketPayload$FallbackProvider_<B> = ((arg0: $ResourceLocation) => $StreamCodec<B, $CustomPacketPayload>);
    export class $CustomPacketPayload {
        static createType<T extends $CustomPacketPayload>(id: string): $CustomPacketPayload$Type<T>;
        static codec<B extends $ByteBuf, T extends $CustomPacketPayload>(encoder: $StreamMemberEncoder_<B, T>, decoder: $StreamDecoder_<B, T>): $StreamCodec<B, T>;
        static codec<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider_<B>, arg1: $List_<$CustomPacketPayload$TypeAndCodec_<B, never>>, arg2: $ConnectionProtocol_, arg3: $PacketFlow_): $StreamCodec<B, $CustomPacketPayload>;
    }
    export interface $CustomPacketPayload {
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
    }
    /**
     * Values that may be interpreted as {@link $CustomPacketPayload}.
     */
    export type $CustomPacketPayload_ = (() => $CustomPacketPayload$Type_<$CustomPacketPayload>);
}
