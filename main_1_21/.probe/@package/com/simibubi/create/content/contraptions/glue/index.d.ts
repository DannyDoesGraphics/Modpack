import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $PortalProcessor, $Entity, $Entity$RemovalReason, $EntityType$Builder } from "@package/net/minecraft/world/entity";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $List, $Set_, $Map, $Set } from "@package/java/util";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $PlayerInteractEvent$RightClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $BlockEvent$EntityPlaceEvent } from "@package/net/neoforged/neoforge/event/level";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $LevelAccessor, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $SpecialEntityItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $EntityRendererProvider$Context, $EntityRenderDispatcher, $EntityRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $Item, $Item$Properties } from "@package/net/minecraft/world/item";
import { $IEntityWithComplexSpawn } from "@package/net/neoforged/neoforge/entity";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $AABB_, $AABB } from "@package/net/minecraft/world/phys";
import { $ClientboundPacketPayload, $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/contraptions/glue" {
    export class $SuperGlueRemovalPacket extends $Record implements $ServerboundPacketPayload {
        soundSource(): $BlockPos;
        handle(arg0: $ServerPlayer): void;
        entityId(): number;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SuperGlueRemovalPacket>;
        constructor(entityId: number, soundSource: $BlockPos_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $SuperGlueRemovalPacket}.
     */
    export type $SuperGlueRemovalPacket_ = { soundSource?: $BlockPos_, entityId?: number,  } | [soundSource?: $BlockPos_, entityId?: number, ];
    export class $SuperGlueSelectionHandler {
        onMouseInput(arg0: boolean): boolean;
        confirm(): void;
        tick(): void;
        discard(): void;
        constructor();
    }
    export class $SuperGlueRenderer extends $EntityRenderer<$SuperGlueEntity> {
        getTextureLocation(arg0: $SuperGlueEntity): $ResourceLocation;
        shouldRender(arg0: $SuperGlueEntity, arg1: $Frustum, arg2: number, arg3: number, arg4: number): boolean;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $SuperGlueItem extends $Item {
        static glueItemAlwaysPlacesWhenUsed(arg0: $PlayerInteractEvent$RightClickBlock): void;
        static spawnParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: boolean): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $SuperGlueSelectionPacket extends $Record implements $ServerboundPacketPayload {
        from(): $BlockPos;
        to(): $BlockPos;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SuperGlueSelectionPacket>;
        constructor(from: $BlockPos_, to: $BlockPos_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $SuperGlueSelectionPacket}.
     */
    export type $SuperGlueSelectionPacket_ = { to?: $BlockPos_, from?: $BlockPos_,  } | [to?: $BlockPos_, from?: $BlockPos_, ];
    export class $GlueEffectPacket extends $Record implements $ClientboundPacketPayload {
        fullBlock(): boolean;
        pos(): $BlockPos;
        handle(arg0: $LocalPlayer): void;
        direction(): $Direction;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $GlueEffectPacket>;
        constructor(pos: $BlockPos_, direction: $Direction_, fullBlock: boolean);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $GlueEffectPacket}.
     */
    export type $GlueEffectPacket_ = { direction?: $Direction_, fullBlock?: boolean, pos?: $BlockPos_,  } | [direction?: $Direction_, fullBlock?: boolean, pos?: $BlockPos_, ];
    export class $SuperGlueHandler {
        static glueInOffHandAppliesOnBlockPlace(arg0: $BlockEvent$EntityPlaceEvent, arg1: $BlockPos_, arg2: $Player): void;
        static glueListensForBlockPlacement(arg0: $BlockEvent$EntityPlaceEvent): void;
        constructor();
    }
    export class $SuperGlueSelectionHelper {
        static collectGlueFromInventory(arg0: $Player, arg1: number, arg2: boolean): boolean;
        static searchGlueGroup(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockPos_, arg3: boolean): $Set<$BlockPos>;
        constructor();
    }
    export class $SuperGlueEntity extends $Entity implements $IEntityWithComplexSpawn, $SpecialEntityItemRequirement {
        spawnParticles(): void;
        static collectCropped(arg0: $Level_, arg1: $AABB_): $List<$SuperGlueEntity>;
        static isGlued(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Direction_, arg3: $Set_<$SuperGlueEntity>): boolean;
        resetPositionToBB(): void;
        static isValidFace(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): boolean;
        static isSideSticky(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): boolean;
        playPlaceSound(): void;
        static writeBoundingBox(arg0: $CompoundTag_, arg1: $AABB_): void;
        static readBoundingBox(arg0: $CompoundTag_): $AABB;
        writeSpawnData(arg0: $RegistryFriendlyByteBuf): void;
        readSpawnData(arg0: $RegistryFriendlyByteBuf): void;
        getRequiredItems(): $ItemRequirement;
        contains(arg0: $BlockPos_): boolean;
        static build(arg0: $EntityType$Builder<never>): $EntityType$Builder<never>;
        static span(arg0: $BlockPos_, arg1: $BlockPos_): $AABB;
        addAdditionalSaveData(arg0: $CompoundTag_): void;
        readAdditionalSaveData(arg0: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        hasImpulse: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        horizontalCollision: boolean;
        constructor(arg0: $Level_, arg1: $AABB_);
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        get requiredItems(): $ItemRequirement;
    }
}
