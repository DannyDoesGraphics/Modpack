import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Map } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $PlayerInteractEvent$EntityInteract } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Consumer_ } from "@package/java/util/function";
import { $MountedFluidStorageWrapper, $MountedFluidStorage } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { $MountedStorageManager } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Record } from "@package/java/lang";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $Item$Properties, $Item } from "@package/net/minecraft/world/item";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MinecartController } from "@package/com/simibubi/create/content/contraptions/minecart/capability";
import { $RailShape_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $EntityMountEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $AbstractMinecart } from "@package/net/minecraft/world/entity/vehicle";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $MountedItemStorage, $MountedItemStorageWrapper } from "@package/com/simibubi/create/api/contraption/storage/item";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as capability from "@package/com/simibubi/create/content/contraptions/minecart/capability";

declare module "@package/com/simibubi/create/content/contraptions/minecart" {
    export class $CouplingRenderer {
        static renderCoupling(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $Vec3_, arg3: $Couple<$AbstractMinecart>): void;
        static doDebugRender(arg0: $Couple<$MinecartController>): void;
        static tickDebugModeRenders(): void;
        static renderAll(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $Vec3_): void;
        constructor();
    }
    export class $CouplingHandlerClient {
        static tick(): void;
        constructor();
    }
    export class $TrainCargoManager$CargoInvWrapper extends $MountedItemStorageWrapper {
        storages: $ImmutableMap<$BlockPos, $MountedItemStorage>;
    }
    export class $CouplingHandler {
        static tryToCoupleCarts(arg0: $Player, arg1: $Level_, arg2: number, arg3: number): boolean;
        static getNextInCouplingChain(arg0: $Level_, arg1: $MinecartController, arg2: boolean): $MinecartController;
        static preventEntitiesFromMoutingOccupiedCart(arg0: $EntityMountEvent): void;
        static forEachLoadedCoupling(arg0: $Level_, arg1: $Consumer_<$Couple<$MinecartController>>): void;
        static status(arg0: $Player, arg1: string): void;
        constructor();
    }
    export class $CouplingPhysics {
        static softCollisionStep(arg0: $Level_, arg1: $Couple<$AbstractMinecart>, arg2: number): void;
        static hardCollisionStep(arg0: $Level_, arg1: $Couple<$AbstractMinecart>, arg2: number): void;
        static followLinkOnRail(arg0: $Vec3_, arg1: $Vec3_, arg2: number, arg3: $Vec3_): $Vec3;
        static tickCoupling(arg0: $Level_, arg1: $Couple<$MinecartController>): void;
        static tick(arg0: $Level_): void;
        constructor();
    }
    export class $CouplingCreationPacket extends $Record implements $ServerboundPacketPayload {
        id1(): number;
        id2(): number;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $CouplingCreationPacket>;
        constructor(arg0: $AbstractMinecart, arg1: $AbstractMinecart);
        constructor(id1: number, id2: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $CouplingCreationPacket}.
     */
    export type $CouplingCreationPacket_ = { id2?: number, id1?: number,  } | [id2?: number, id1?: number, ];
    export class $TrainCargoManager extends $MountedStorageManager {
        resetIdleCargoTracker(): void;
        tickIdleCargoTracker(): void;
        getTicksSinceLastExchange(): number;
        getVersion(): number;
        constructor();
        get ticksSinceLastExchange(): number;
        get version(): number;
    }
    export class $CouplingRenderer$CartEndpoint {
    }
    export class $MinecartCouplingItem extends $Item {
        static handleInteractionWithMinecart(arg0: $PlayerInteractEvent$EntityInteract): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $MinecartSim2020 {
        static canAddMotion(arg0: $AbstractMinecart): boolean;
        static moveCartAlongTrack(arg0: $AbstractMinecart, arg1: $Vec3_, arg2: $BlockPos_, arg3: $BlockState_): void;
        static predictNextPositionOf(arg0: $AbstractMinecart): $Vec3;
        static getRailVec(arg0: $RailShape_): $Vec3;
        constructor();
    }
    export class $TrainCargoManager$CargoTankWrapper extends $MountedFluidStorageWrapper {
        storages: $ImmutableMap<$BlockPos, $MountedFluidStorage>;
    }
}
