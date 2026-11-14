import { $Level_ } from "@package/net/minecraft/world/level";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $TrackEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $TrackShape_, $TrackMaterial, $BezierConnection, $TrackShape } from "@package/com/simibubi/create/content/trains/track";
import { $AbstractBogeyBlock } from "@package/com/simibubi/create/content/trains/bogey";
import { $UUID, $List, $Map_, $Map, $Set, $UUID_, $Set_, $List_ } from "@package/java/util";
import { $CarriageBogey, $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $RandomSource } from "@package/net/minecraft/util";
import { $TrackEdge, $TrackNode } from "@package/com/simibubi/create/content/trains/graph";
import { $MountedFluidStorageWrapper } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { $BlockPos, $BlockPos_, $Direction_, $Direction$Axis_, $Direction } from "@package/net/minecraft/core";
import { $TrackSwitchBlock$SwitchState, $TrackSwitch } from "@package/com/railwayteam/railways/content/switches";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Comparable } from "@package/java/lang";
import { $Pair, $Couple } from "@package/net/createmod/catnip/data";

declare module "@package/com/railwayteam/railways/mixin_interfaces" {
    export class $IDistanceTravelled {
    }
    export interface $IDistanceTravelled {
        railways$getDistanceTravelled(): number;
    }
    /**
     * Values that may be interpreted as {@link $IDistanceTravelled}.
     */
    export type $IDistanceTravelled_ = (() => number);
    export class $ICarriageBufferDistanceTracker {
    }
    export interface $ICarriageBufferDistanceTracker {
        railways$getLeadingDistance(): number;
        railways$getTrailingDistance(): number;
        railways$setLeadingDistance(arg0: number): void;
        railways$setTrailingDistance(arg0: number): void;
    }
    export class $IWaypointableNavigation {
    }
    export interface $IWaypointableNavigation {
        railways$isWaypointMode(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IWaypointableNavigation}.
     */
    export type $IWaypointableNavigation_ = (() => boolean);
    export class $IGenerallySearchableNavigation$PointTest {
    }
    export interface $IGenerallySearchableNavigation$PointTest {
        test(arg0: number, arg1: number, arg2: $Map_<$TrackEdge, $Pair<boolean, $Couple<$TrackNode>>>, arg3: $Pair<$Couple<$TrackNode>, $TrackEdge>, arg4: $TrackEdgePoint): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IGenerallySearchableNavigation$PointTest}.
     */
    export type $IGenerallySearchableNavigation$PointTest_ = ((arg0: number, arg1: number, arg2: $Map<$TrackEdge, $Pair<boolean, $Couple<$TrackNode>>>, arg3: $Pair<$Couple<$TrackNode>, $TrackEdge>, arg4: $TrackEdgePoint) => boolean);
    export class $RailwaySavedDataDuck {
    }
    export interface $RailwaySavedDataDuck {
        railway$getShadowTrains(): $Map<$UUID, $Train>;
        railways$getShadowKeys(): $Map<$ResourceLocation, $UUID>;
    }
    export class $IFuelInventory {
    }
    export interface $IFuelInventory {
        railways$getFluidFuels(): $MountedFluidStorageWrapper;
    }
    /**
     * Values that may be interpreted as {@link $IFuelInventory}.
     */
    export type $IFuelInventory_ = (() => $MountedFluidStorageWrapper);
    export class $IPotentiallyInvisibleSpriteContents {
    }
    export interface $IPotentiallyInvisibleSpriteContents {
        railways$shouldDoInvisibility(): boolean;
        railways$isVisible(): boolean;
        railways$uploadFrame(arg0: boolean): void;
    }
    export class $IHasCustomOutline {
    }
    export interface $IHasCustomOutline {
        matrixRotation(arg0: $PoseStack, arg1: $BlockState_): void;
        customOutline(arg0: $PoseStack, arg1: $VertexConsumer, arg2: $BlockState_): void;
        drawLineWithAxisOffset(arg0: $VertexConsumer, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $Direction$Axis_): void;
        drawLine(arg0: $VertexConsumer, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
    }
    export class $IHasTrackCasing {
        static getTrackCasing(arg0: $Level_, arg1: $BlockPos_): $Block;
        static setTrackCasing(arg0: $Level_, arg1: $BlockPos_, arg2: $Block_): void;
        static setAlternateModel(arg0: $Level_, arg1: $BlockPos_, arg2: boolean): boolean;
        static isAlternate(arg0: $Level_, arg1: $BlockPos_): boolean;
    }
    export interface $IHasTrackCasing {
        getTrackCasing(): $Block;
        setTrackCasing(arg0: $Block_): void;
        setAlternate(arg0: boolean): void;
        isAlternate(): boolean;
    }
    export class $IPreAssembleCallback {
    }
    export interface $IPreAssembleCallback {
        railways$preAssemble(): void;
    }
    /**
     * Values that may be interpreted as {@link $IPreAssembleCallback}.
     */
    export type $IPreAssembleCallback_ = (() => void);
    export class $ISwitchDisabledEdge {
        static automaticallySelect(arg0: $TrackEdge): void;
        static isDisabled(arg0: $TrackEdge): boolean;
        static isEnabled(arg0: $TrackEdge): boolean;
        static isAutomatic(arg0: $TrackEdge): boolean;
    }
    export interface $ISwitchDisabledEdge {
        setAutomatic(arg0: boolean): void;
        getAutomaticallySelectedPriority(): number;
        isAutomaticallySelected(): boolean;
        ackAutomaticSelection(): void;
        setAutomaticallySelected(): void;
        isEnabled(): boolean;
        isAutomatic(): boolean;
        setEnabled(arg0: boolean): void;
        get automaticallySelectedPriority(): number;
    }
    export class $IStandardBogeyTEVirtualCoupling {
    }
    export interface $IStandardBogeyTEVirtualCoupling {
        setCouplingDistance(arg0: number): void;
        getCouplingDistance(): number;
        setFront(arg0: boolean): void;
        setCouplingDirection(arg0: $Direction_): void;
        getCouplingDirection(): $Direction;
        getFront(): boolean;
    }
    export class $IMonorailBezier$MonorailAngles {
        beam: $PoseStack$Pose;
        lightPosition: $BlockPos;
        beamCaps: $Couple<$PoseStack$Pose>;
        constructor();
    }
    export class $IHandcarTrain {
    }
    export interface $IHandcarTrain {
        railways$isHandcar(): boolean;
        railways$setHandcar(arg0: boolean): void;
    }
    export class $IIndexedSchedule {
    }
    export interface $IIndexedSchedule {
        railways$setIndex(arg0: number): void;
        railways$getIndex(): number;
    }
    export class $IMonorailBezier {
    }
    export interface $IMonorailBezier {
        getBakedMonorails(): $IMonorailBezier$MonorailAngles[];
        get bakedMonorails(): $IMonorailBezier$MonorailAngles[];
    }
    /**
     * Values that may be interpreted as {@link $IMonorailBezier}.
     */
    export type $IMonorailBezier_ = (() => $IMonorailBezier$MonorailAngles[]);
    export class $IUpdateCount {
        static outOfSync(arg0: $IUpdateCount, arg1: $IUpdateCount): boolean;
    }
    export interface $IUpdateCount {
        railways$getUpdateCount(): number;
        railways$fromParent(arg0: $IUpdateCount): void;
        railways$markUpdate(): void;
    }
    export class $IGetBezierConnection {
    }
    export interface $IGetBezierConnection {
        getBezierConnection(): $BezierConnection;
        get bezierConnection(): $BezierConnection;
    }
    /**
     * Values that may be interpreted as {@link $IGetBezierConnection}.
     */
    export type $IGetBezierConnection_ = (() => $BezierConnection);
    export class $ICarriageFlywheel {
    }
    export interface $ICarriageFlywheel {
        railways$getAngle(): number;
        railways$setAngle(arg0: number): void;
    }
    export class $IGenerallySearchableNavigation$FrontierEntry implements $Comparable<$IGenerallySearchableNavigation$FrontierEntry> {
        compareTo(arg0: $IGenerallySearchableNavigation$FrontierEntry): number;
        node2: $TrackNode;
        edge: $TrackEdge;
        distance: number;
        penalty: number;
        node1: $TrackNode;
        constructor(arg0: number, arg1: number, arg2: $TrackNode, arg3: $TrackNode, arg4: $TrackEdge);
    }
    export class $IBufferBlockedTrain {
    }
    export interface $IBufferBlockedTrain {
        railways$isControlBlocked(): boolean;
        railways$getBlockedSign(): number;
        railways$setControlBlocked(arg0: boolean, arg1: boolean): void;
    }
    export class $IGenerallySearchableNavigation {
    }
    export interface $IGenerallySearchableNavigation {
        railways$findNearestApproachableSwitch(arg0: boolean): $Pair<$TrackSwitch, $Pair<boolean, ($TrackSwitchBlock$SwitchState) | undefined>>;
        railways$searchGeneral(arg0: number, arg1: number, arg2: boolean, arg3: $IGenerallySearchableNavigation$PointTest_): void;
        railways$searchGeneral(arg0: number, arg1: boolean, arg2: $IGenerallySearchableNavigation$PointTest_): void;
    }
    export class $CopycatDuck {
    }
    export interface $CopycatDuck {
        railways$setMaterialSimple(arg0: $BlockState_): void;
    }
    /**
     * Values that may be interpreted as {@link $CopycatDuck}.
     */
    export type $CopycatDuck_ = ((arg0: $BlockState) => void);
    export class $IGenericCrossingTrackBE {
        static getQuads(arg0: $Pair<$TrackMaterial, $TrackShape_>, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        static getQuads(arg0: $TrackMaterial, arg1: $TrackShape_, arg2: $Direction_, arg3: $RandomSource): $List<$BakedQuad>;
        static getModel(arg0: $Pair<$TrackMaterial, $TrackShape_>): $BakedModel;
        static getModel(arg0: $TrackMaterial, arg1: $TrackShape_): $BakedModel;
    }
    export interface $IGenericCrossingTrackBE {
        railways$getSecondCrossingPiece(): $Pair<$TrackMaterial, $TrackShape>;
        railways$getFirstCrossingPiece(): $Pair<$TrackMaterial, $TrackShape>;
    }
    export class $IContraptionFuel {
    }
    export interface $IContraptionFuel {
        railways$getFluidFuels(): $MountedFluidStorageWrapper;
    }
    /**
     * Values that may be interpreted as {@link $IContraptionFuel}.
     */
    export type $IContraptionFuel_ = (() => $MountedFluidStorageWrapper);
    export class $IDeployAnywayBlockItem {
    }
    export interface $IDeployAnywayBlockItem {
    }
    export class $IStrictSignalTrain {
    }
    export interface $IStrictSignalTrain {
        railways$setStrictSignals(arg0: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $IStrictSignalTrain}.
     */
    export type $IStrictSignalTrain_ = ((arg0: boolean) => void);
    export class $IOccupiedCouplers {
    }
    export interface $IOccupiedCouplers {
        railways$getOccupiedCouplers(): $Set<$UUID>;
    }
    /**
     * Values that may be interpreted as {@link $IOccupiedCouplers}.
     */
    export type $IOccupiedCouplers_ = (() => $Set_<$UUID_>);
    export class $IBufferBlockCheckableNavigation {
    }
    export interface $IBufferBlockCheckableNavigation {
        railways$updateControlsBlock(arg0: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $IBufferBlockCheckableNavigation}.
     */
    export type $IBufferBlockCheckableNavigation_ = ((arg0: boolean) => void);
    export class $CarriageBogeyUtils {
        static getType(arg0: $CarriageBogey): $AbstractBogeyBlock<never>;
    }
    export interface $CarriageBogeyUtils {
    }
    export class $ICrashAdvancement {
    }
    export interface $ICrashAdvancement {
        railways$awardCrashAdvancements(): void;
    }
    /**
     * Values that may be interpreted as {@link $ICrashAdvancement}.
     */
    export type $ICrashAdvancement_ = (() => void);
    export class $ILimited {
    }
    export interface $ILimited {
        isLimitEnabled(): boolean;
        setLimitEnabled(arg0: boolean): void;
    }
    export class $AnimatedTextureDuck {
    }
    export interface $AnimatedTextureDuck {
        railways$uploadWithVisibility(): void;
    }
    /**
     * Values that may be interpreted as {@link $AnimatedTextureDuck}.
     */
    export type $AnimatedTextureDuck_ = (() => void);
    export class $ILimitedGlobalStation {
    }
    export interface $ILimitedGlobalStation extends $ILimited {
        isStationEnabled(): boolean;
        getDisablingTrain(): $Train;
        orDisablingTrain(arg0: $Train, arg1: $Train): $Train;
        get stationEnabled(): boolean;
        get disablingTrain(): $Train;
    }
    export class $IShadowTrain {
    }
    export interface $IShadowTrain {
        railways$isShadow(): boolean;
        railways$getShadowKey(): $ResourceLocation;
        railways$setShadow(arg0: $ResourceLocation_): void;
        railways$clearShadow(): void;
    }
    export class $ICarriageConductors {
    }
    export interface $ICarriageConductors {
        railways$getControllingConductors(): $List<$UUID>;
    }
    /**
     * Values that may be interpreted as {@link $ICarriageConductors}.
     */
    export type $ICarriageConductors_ = (() => $List_<$UUID_>);
}
