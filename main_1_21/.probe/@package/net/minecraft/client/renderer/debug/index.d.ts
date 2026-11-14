import { $Level, $LightLayer_ } from "@package/net/minecraft/world/level";
import { $MultiBufferSource_, $MultiBufferSource, $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameEventListener, $PositionSource, $GameEvent, $GameEventListener$DeliveryMode } from "@package/net/minecraft/world/level/gameevent";
import { $Minecraft } from "@package/net/minecraft/client";
import { $BeeDebugPayload$BeeInfo_, $HiveDebugPayload$HiveInfo_, $BrainDebugPayload$BrainDump_, $StructuresDebugPayload$PieceInfo_, $BreezeDebugPayload$BreezeInfo_, $GoalDebugPayload$DebugGoal_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $Collection_, $List_ } from "@package/java/util";
import { $Path } from "@package/net/minecraft/world/level/pathfinder";
import { $BlockPos, $BlockPos_, $SectionPos } from "@package/net/minecraft/core";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Record } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Vec3_, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/client/renderer/debug" {
    export class $LightSectionDebugRenderer$SectionData {
    }
    export class $DebugRenderer {
        static renderFloatingText(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, text: string, x: number, arg4: number, y: number, arg6: number, z: number): void;
        static renderFloatingText(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, text: string, x: number, arg4: number, y: number, arg6: number, z: number, arg8: boolean, color: number, scale: boolean): void;
        static renderFloatingText(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, text: string, x: number, arg4: number, y: number, arg6: number): void;
        static renderFloatingText(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, text: string, x: number, y: number, z: number, color: number): void;
        handler$eln000$moonlight$supp$renderVanillaDebug(arg0: $PoseStack, arg1: $MultiBufferSource$BufferSource, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        static getTargetedEntity(entity: $Entity | null, distance: number): ($Entity) | undefined;
        static renderFilledUnitCube(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, pos: $BlockPos_, red: number, green: number, blue: number, alpha: number): void;
        static renderFilledBox(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, minX: number, arg3: number, minY: number, arg5: number, minZ: number, arg7: number, maxX: number, arg9: number, maxY: number, arg11: number): void;
        static renderFilledBox(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, startPos: $BlockPos_, endPos: $BlockPos_, red: number, green: number, blue: number, alpha: number): void;
        static renderFilledBox(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, boundingBox: $AABB_, red: number, green: number, blue: number, alpha: number): void;
        static renderFilledBox(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, pos: $BlockPos_, scale: number, red: number, green: number, blue: number, alpha: number): void;
        clear(): void;
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource$BufferSource, camX: number, arg3: number, camY: number): void;
        /**
         * Toggles the `#renderChunkborder` value, effectively toggling the `#chunkBorderRenderer` on or off.
         * 
         * @return the new, inverted value
         */
        switchRenderChunkborder(): boolean;
        waterDebugRenderer: $DebugRenderer$SimpleDebugRenderer;
        neighborsUpdateRenderer: $DebugRenderer$SimpleDebugRenderer;
        pathfindingRenderer: $PathfindingRenderer;
        gameTestDebugRenderer: $GameTestDebugRenderer;
        supportBlockRenderer: $DebugRenderer$SimpleDebugRenderer;
        solidFaceRenderer: $DebugRenderer$SimpleDebugRenderer;
        breezeDebugRenderer: $BreezeDebugRenderer;
        gameEventListenerRenderer: $GameEventListenerRenderer;
        structureRenderer: $StructureRenderer;
        lightDebugRenderer: $DebugRenderer$SimpleDebugRenderer;
        chunkRenderer: $DebugRenderer$SimpleDebugRenderer;
        brainDebugRenderer: $BrainDebugRenderer;
        heightMapRenderer: $DebugRenderer$SimpleDebugRenderer;
        chunkBorderRenderer: $DebugRenderer$SimpleDebugRenderer;
        collisionBoxRenderer: $DebugRenderer$SimpleDebugRenderer;
        skyLightSectionDebugRenderer: $LightSectionDebugRenderer;
        goalSelectorRenderer: $GoalSelectorDebugRenderer;
        beeDebugRenderer: $BeeDebugRenderer;
        villageSectionsDebugRenderer: $VillageSectionsDebugRenderer;
        raidDebugRenderer: $RaidDebugRenderer;
        worldGenAttemptRenderer: $DebugRenderer$SimpleDebugRenderer;
        constructor(minecraft: $Minecraft);
    }
    export class $HeightMapRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        clear(): void;
        constructor(minecraft: $Minecraft);
    }
    export class $NeighborsUpdateRenderer implements $DebugRenderer$SimpleDebugRenderer {
        addUpdate(gameTime: number, arg1: $BlockPos_): void;
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        clear(): void;
    }
    export class $StructureRenderer implements $DebugRenderer$SimpleDebugRenderer {
        addBoundingBox(boundingBox: $BoundingBox, pieces: $List_<$StructuresDebugPayload$PieceInfo_>, dimension: $ResourceKey_<$Level>): void;
        clear(): void;
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        constructor(minecraft: $Minecraft);
    }
    export class $BreezeDebugRenderer {
        clear(): void;
        add(breeze: $BreezeDebugPayload$BreezeInfo_): void;
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, xOffset: number, arg3: number, yOffset: number): void;
        constructor(minecraft: $Minecraft);
    }
    export class $BrainDebugRenderer$PoiInfo {
        pos: $BlockPos;
        freeTicketCount: number;
        type: string;
        constructor(pos: $BlockPos_, type: string, freeTicketCount: number);
    }
    export class $SolidFaceRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        clear(): void;
        constructor(minecraft: $Minecraft);
    }
    export class $GameTestDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        clear(): void;
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        addMarker(pos: $BlockPos_, color: number, text: string, removeAfter: number): void;
        constructor();
    }
    export class $RaidDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        setRaidCenters(raidCenters: $Collection_<$BlockPos_>): void;
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        clear(): void;
        constructor(minecraft: $Minecraft);
        set raidCenters(value: $Collection_<$BlockPos_>);
    }
    export class $PathfindingRenderer implements $DebugRenderer$SimpleDebugRenderer {
        static renderPath(poseStack: $PoseStack, buffer: $MultiBufferSource_, path: $Path, arg3: number, arg4: boolean, arg5: boolean, x: number, arg7: number, y: number): void;
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        addPath(entityId: number, path: $Path, maxDistanceToWaypoint: number): void;
        static renderPathLine(poseStack: $PoseStack, consumer: $VertexConsumer, path: $Path, x: number, arg4: number, y: number): void;
        clear(): void;
        constructor();
    }
    export class $WorldGenAttemptRenderer implements $DebugRenderer$SimpleDebugRenderer {
        addPos(pos: $BlockPos_, scale: number, red: number, green: number, blue: number, alpha: number): void;
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        clear(): void;
        constructor();
    }
    export class $SupportBlockRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        clear(): void;
        constructor(minecraft: $Minecraft);
    }
    export class $GameEventListenerRenderer$TrackedGameEvent extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $GameEventListenerRenderer$TrackedGameEvent}.
     */
    export type $GameEventListenerRenderer$TrackedGameEvent_ = { gameEvent?: $ResourceKey_<$GameEvent>, position?: $Vec3_, timeStamp?: number,  } | [gameEvent?: $ResourceKey_<$GameEvent>, position?: $Vec3_, timeStamp?: number, ];
    export class $ChunkBorderRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        handler$foc000$sable$render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        clear(): void;
        constructor(minecraft: $Minecraft);
    }
    export class $CollisionBoxRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        clear(): void;
        constructor(minecraft: $Minecraft);
    }
    export class $WaterDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        clear(): void;
        constructor(minecraft: $Minecraft);
    }
    export class $LightDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        clear(): void;
        constructor(minecraft: $Minecraft);
    }
    export class $GoalSelectorDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        addGoalSelector(mobId: number, entityPos: $BlockPos_, goals: $List_<$GoalDebugPayload$DebugGoal_>): void;
        clear(): void;
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        removeGoalSelector(mobId: number): void;
        constructor(minecraft: $Minecraft);
    }
    export class $BeeDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        addOrUpdateBeeInfo(beeInfo: $BeeDebugPayload$BeeInfo_): void;
        addOrUpdateHiveInfo(hiveInfo: $HiveDebugPayload$HiveInfo_, lastSeen: number): void;
        clear(): void;
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        removeBeeInfo(id: number): void;
        constructor(minecraft: $Minecraft);
    }
    export class $GameEventListenerRenderer implements $DebugRenderer$SimpleDebugRenderer {
        trackGameEvent(gameEvent: $ResourceKey_<$GameEvent>, position: $Vec3_): void;
        trackListener(listenerSource: $PositionSource, listenerRange: number): void;
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        clear(): void;
        constructor(minecraft: $Minecraft);
    }
    export class $ChunkDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        clear(): void;
        constructor(minecraft: $Minecraft);
    }
    export class $LightSectionDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        clear(): void;
        constructor(minecraft: $Minecraft, lightLayer: $LightLayer_);
    }
    export class $GoalSelectorDebugRenderer$EntityGoalInfo extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $GoalSelectorDebugRenderer$EntityGoalInfo}.
     */
    export type $GoalSelectorDebugRenderer$EntityGoalInfo_ = { goals?: $List_<$GoalDebugPayload$DebugGoal_>, entityPos?: $BlockPos_,  } | [goals?: $List_<$GoalDebugPayload$DebugGoal_>, entityPos?: $BlockPos_, ];
    export class $GameTestDebugRenderer$Marker {
    }
    export class $BeeDebugRenderer$HiveDebugInfo extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BeeDebugRenderer$HiveDebugInfo}.
     */
    export type $BeeDebugRenderer$HiveDebugInfo_ = { info?: $HiveDebugPayload$HiveInfo_, lastSeen?: number,  } | [info?: $HiveDebugPayload$HiveInfo_, lastSeen?: number, ];
    export class $VillageSectionsDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        setVillageSection(pos: $SectionPos): void;
        setNotVillageSection(pos: $SectionPos): void;
        clear(): void;
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        set villageSection(value: $SectionPos);
        set notVillageSection(value: $SectionPos);
    }
    export class $DebugRenderer$SimpleDebugRenderer {
    }
    export interface $DebugRenderer$SimpleDebugRenderer {
        clear(): void;
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
    }
    /**
     * Values that may be interpreted as {@link $DebugRenderer$SimpleDebugRenderer}.
     */
    export type $DebugRenderer$SimpleDebugRenderer_ = ((arg0: $PoseStack, arg1: $MultiBufferSource, arg2: number, arg3: number, arg4: number) => void);
    export class $ChunkDebugRenderer$ChunkData {
    }
    export class $GameEventListenerRenderer$TrackedListener implements $GameEventListener {
        getDeliveryMode(): $GameEventListener$DeliveryMode;
        get deliveryMode(): $GameEventListener$DeliveryMode;
    }
    export class $BrainDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        setFreeTicketCount(pos: $BlockPos_, freeTicketCount: number): void;
        removePoi(pos: $BlockPos_): void;
        addOrUpdateBrainDump(brainDump: $BrainDebugPayload$BrainDump_): void;
        clear(): void;
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, x: number, arg3: number, y: number): void;
        addPoi(poiInfo: $BrainDebugRenderer$PoiInfo): void;
        removeBrainDump(id: number): void;
        constructor(minecraft: $Minecraft);
    }
}
