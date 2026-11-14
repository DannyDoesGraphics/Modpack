import { $MultiBufferSource$BufferSource, $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $TrackEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $TrackBlock, $BezierTrackPointLocation_, $TrackTargetingBehaviour } from "@package/com/simibubi/create/content/trains/track";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $UUID, $List, $UUID_, $Map, $Set } from "@package/java/util";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $DebugRenderer$SimpleDebugRenderer } from "@package/net/minecraft/client/renderer/debug";
import { $ConductorEntity } from "@package/com/railwayteam/railways/content/conductor";
import { $Consumer, $BiConsumer_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockEntry } from "@package/com/tterrag/registrate/util/entry";
import { $MountedFluidStorageType_ } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $EdgePointType } from "@package/com/simibubi/create/content/trains/graph";
import { $BlockPos, $Direction$Axis_, $BlockPos_, $Direction_, $Registry, $Direction$AxisDirection_ } from "@package/net/minecraft/core";
import { $Path } from "@package/java/nio/file";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Throwable, $Enum, $Record, $Class, $Object } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $LevelAccessor, $LevelReader, $BlockGetter } from "@package/net/minecraft/world/level";
import { $DyeColor_, $Item, $ItemStack_, $ItemStack, $DyeColor } from "@package/net/minecraft/world/item";
import { $MapColor, $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ProcessingRecipeBuilder } from "@package/com/simibubi/create/content/processing/recipe";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $VoxelShaper } from "@package/net/createmod/catnip/math";
import { $EnderMan } from "@package/net/minecraft/world/entity/monster";
import { $Block_, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Matrix4f } from "@package/org/joml";
export * as packet from "@package/com/railwayteam/railways/util/packet";
export * as neoforge from "@package/com/railwayteam/railways/util/neoforge";
export * as client from "@package/com/railwayteam/railways/util/client";

declare module "@package/com/railwayteam/railways/util" {
    export class $DebugRendererExtensions$Renderers extends $Enum<$DebugRendererExtensions$Renderers> {
        static values(): $DebugRendererExtensions$Renderers[];
        static valueOf(arg0: string): $DebugRendererExtensions$Renderers;
        getRenderer(): $DebugRenderer$SimpleDebugRenderer;
        static SOLID_FACE: $DebugRendererExtensions$Renderers;
        static BEE: $DebugRendererExtensions$Renderers;
        static STRUCTURE: $DebugRendererExtensions$Renderers;
        static LIGHT: $DebugRendererExtensions$Renderers;
        static RAID: $DebugRendererExtensions$Renderers;
        static VILLAGE_SECTIONS: $DebugRendererExtensions$Renderers;
        static PATHFINDING: $DebugRendererExtensions$Renderers;
        static GOAL_SELECTOR: $DebugRendererExtensions$Renderers;
        static HEIGHT_MAP: $DebugRendererExtensions$Renderers;
        static NEIGHBORS_UPDATE: $DebugRendererExtensions$Renderers;
        static WORLD_GEN_ATTEMPT: $DebugRendererExtensions$Renderers;
        static GAME_TEST: $DebugRendererExtensions$Renderers;
        static GAME_EVENT: $DebugRendererExtensions$Renderers;
        static BRAIN: $DebugRendererExtensions$Renderers;
        static WATER: $DebugRendererExtensions$Renderers;
        static COLLISION_BOX: $DebugRendererExtensions$Renderers;
        static CHUNK: $DebugRendererExtensions$Renderers;
        get renderer(): $DebugRenderer$SimpleDebugRenderer;
    }
    /**
     * Values that may be interpreted as {@link $DebugRendererExtensions$Renderers}.
     */
    export type $DebugRendererExtensions$Renderers_ = "pathfinding" | "water" | "height_map" | "collision_box" | "neighbors_update" | "structure" | "light" | "world_gen_attempt" | "solid_face" | "chunk" | "brain" | "village_sections" | "bee" | "raid" | "goal_selector" | "game_test" | "game_event";
    export class $MethodVarHandleUtils {
        static getStaticField<T>(arg0: $Class<never>, arg1: string, arg2: $Class<T>, arg3: T): T;
        static getStaticField<T>(arg0: $Class<never>, arg1: string, arg2: $Class<T>): T;
        constructor();
    }
    export class $AdventureUtils {
        static isAdventure(arg0: $Player): boolean;
        constructor();
    }
    export class $TextUtils {
        static ensureEndsWith(arg0: string, arg1: string): string;
        static stripPrefix(arg0: string, arg1: string): string;
        static snakeCaseToTitleCase(arg0: string): string;
        static translateWithFormatting(arg0: string, ...arg1: $Object[]): $Component;
        static joinSpace(...arg0: string[]): string;
        static joinUnderscore(...arg0: string[]): string;
        static prefixToFolder(arg0: string, arg1: string): string;
        static titleCaseConversion(arg0: string): string;
        static join(arg0: string, ...arg1: string[]): string;
        constructor();
    }
    export class $DevCapeUtils extends $Enum<$DevCapeUtils> {
        useDevCape(arg0: $UUID_): boolean;
        refresh(): void;
        static values(): $DevCapeUtils[];
        static valueOf(arg0: string): $DevCapeUtils;
        init(): void;
        isDev(arg0: $Player): boolean;
        isDev(arg0: $UUID_): boolean;
        static usageStatusClientside: $Map<$UUID, boolean>;
        static INSTANCE: $DevCapeUtils;
        static usageStatusServerside: $Map<$UUID, boolean>;
    }
    /**
     * Values that may be interpreted as {@link $DevCapeUtils}.
     */
    export type $DevCapeUtils_ = "instance";
    export class $RegistrationListening$DualListener<T, U> {
        listener2: $RegistrationListening$Listener<U>;
        listener1: $RegistrationListening$Listener<T>;
        constructor(arg0: $Registry<T>, arg1: $ResourceLocation_, arg2: $Registry<U>, arg3: $ResourceLocation_, arg4: $BiConsumer_<T, U>);
    }
    export class $ShapeWrapper {
        get(): $VoxelShape;
        get(arg0: $Direction$Axis_): $VoxelShape;
        get(arg0: $Direction_): $VoxelShape;
        static wrapped(arg0: $VoxelShape): $ShapeWrapper;
        static wrapped(arg0: $VoxelShaper): $ShapeWrapper;
        constructor(arg0: $VoxelShape);
        constructor(arg0: $VoxelShaper);
    }
    export class $RegistrationListening {
        static whenBothRegistered<T>(arg0: $Registry<T>, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $BiConsumer_<T, T>): void;
        static whenBothRegistered<T, U>(arg0: $Registry<T>, arg1: $ResourceLocation_, arg2: $Registry<U>, arg3: $ResourceLocation_, arg4: $BiConsumer_<T, U>): void;
        static whenRegistered<T>(arg0: $Registry<T>, arg1: $ResourceLocation_, arg2: $Consumer_<T>): void;
        static addListener<T>(arg0: $RegistrationListening$Listener_<T>): void;
        constructor();
    }
    export class $ShapeUtils {
        static isTouching(arg0: $Vec3_, arg1: $BlockPos_, arg2: $VoxelShape): boolean;
        static isTouching(arg0: $Vec3_, arg1: $VoxelShape): boolean;
        constructor();
    }
    export class $RegistrationListening$Listener<T> extends $Record {
        id(): $ResourceLocation;
        consumer(): $Consumer<T>;
        registry(): $Registry<T>;
        onRegister(arg0: T): void;
        constructor(registry: $Registry<T>, id: $ResourceLocation_, consumer: $Consumer_<T>);
    }
    /**
     * Values that may be interpreted as {@link $RegistrationListening$Listener}.
     */
    export type $RegistrationListening$Listener_<T> = { id?: $ResourceLocation_, registry?: $Registry<any>, consumer?: $Consumer_<any>,  } | [id?: $ResourceLocation_, registry?: $Registry<any>, consumer?: $Consumer_<any>, ];
    export class $MathUtils {
        static copy(arg0: $Matrix4f): $Matrix4f;
        constructor();
    }
    export class $CustomTrackOverlayRendering {
        static renderOverlay(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Direction$AxisDirection_, arg3: $BezierTrackPointLocation_, arg4: $PoseStack, arg5: $MultiBufferSource_, arg6: number, arg7: number, arg8: $PartialModel, arg9: number): void;
        static renderOverlay(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Direction$AxisDirection_, arg3: $BezierTrackPointLocation_, arg4: $PoseStack, arg5: $MultiBufferSource_, arg6: number, arg7: number, arg8: $EdgePointType<never>, arg9: number): void;
        static renderOverlay(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Direction$AxisDirection_, arg3: $BezierTrackPointLocation_, arg4: $PoseStack, arg5: $MultiBufferSource_, arg6: number, arg7: number, arg8: $PartialModel, arg9: number, arg10: boolean): void;
        static prepareTrackOverlay(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BezierTrackPointLocation_, arg4: $Direction$AxisDirection_, arg5: $PoseStack, arg6: $PartialModel): $PartialModel;
        static overlayWillOverlap(arg0: $TrackTargetingBehaviour<$TrackEdgePoint>): boolean;
        static register(arg0: $EdgePointType<never>, arg1: $PartialModel): void;
        static CUSTOM_OVERLAYS: $Map<$EdgePointType<never>, $PartialModel>;
        constructor();
    }
    export class $ItemUtils {
        static isUnbreakable(arg0: $ItemStack_): boolean;
        static copyStackData(arg0: $ItemStack_, arg1: $ItemStack_): void;
        static oppositeHand(arg0: $InteractionHand_): $InteractionHand;
        static blocksEndermanView(arg0: $ItemStack_, arg1: $Player, arg2: $EnderMan): boolean;
        constructor();
    }
    export class $FluidUtils {
        static getFluid(arg0: $Object): $Fluid;
        static addFluidOutput(arg0: $ProcessingRecipeBuilder<any, any, any>, arg1: $Fluid_, arg2: number, arg3: $CompoundTag_): void;
        static canUseAsFuelStorage(arg0: $BlockEntity): boolean;
        constructor();
    }
    export class $Utils {
        static modsDir(): $Path;
        static isDevEnv(): boolean;
        static sendCreatePacketToServer(arg0: $Object): void;
        static sendHonkPacket(arg0: $Train, arg1: boolean): void;
        static isEnvVarTrue(arg0: string): boolean;
        static getEnvVar(arg0: string): string;
        static configDir(): $Path;
        constructor();
        static get devEnv(): boolean;
    }
    export class $EntityUtils {
        static isHoldingItem(arg0: $Player, arg1: $Predicate_<$Item>): boolean;
        static getReachDistance(arg0: $Player): number;
        static handleUseEvent(arg0: $Player, arg1: $InteractionHand_, arg2: $BlockHitResult): boolean;
        static createConductorFakePlayer(arg0: $ServerLevel, arg1: $ConductorEntity): $ServerPlayer;
        static givePlayerItem(arg0: $Player, arg1: $ItemStack_): void;
        static isHolding(arg0: $Player, arg1: $Predicate_<$ItemStack>): boolean;
        static getPersistentData(arg0: $Entity): $CompoundTag;
        constructor();
    }
    export class $ConditionalMixinManager {
        static shouldApply(arg0: string): boolean;
        constructor();
    }
    export class $BlockPosUtils {
        static min(arg0: $BlockPos_, arg1: $BlockPos_): $BlockPos;
        static max(arg0: $BlockPos_, arg1: $BlockPos_): $BlockPos;
        static normalize(arg0: $BlockPos_): $BlockPos;
        constructor();
    }
    export class $DebugRendererExtensions {
        static getEnabledRenderers(): $Set<$DebugRendererExtensions$Renderers>;
        static render(arg0: $PoseStack, arg1: $MultiBufferSource$BufferSource, arg2: number, arg3: number, arg4: number): void;
        constructor();
        static get enabledRenderers(): $Set<$DebugRendererExtensions$Renderers>;
    }
    export class $BlockStateUtils {
        static blockWithProperties(arg0: $Block_, arg1: $BlockState_): $BlockState;
        static blockWithProperties(arg0: $BlockState_, arg1: $BlockState_): $BlockState;
        static getWoolBlock(arg0: $DyeColor_): $Block;
        static trackWith(arg0: $TrackBlock, arg1: $BlockState_): $BlockState;
        static getWoolColor(arg0: $Block_): $DyeColor;
        static getSoundType(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity): $SoundType;
        constructor();
    }
    export class $AbstractionUtils {
        static portableFuelInterfaceBlockHasState(arg0: $BlockState_): boolean;
        static isInstanceOfFuelTankMountedStorageType(arg0: $MountedFluidStorageType_<never>): boolean;
        static getFluidTankBlockEntry(): $BlockEntry<never>;
        static getPortableFuelInterfaceBlockEntry(): $BlockEntry<never>;
        static isInstanceOfFuelTankBlockEntity(arg0: $BlockEntity): boolean;
        constructor();
        static get fluidTankBlockEntry(): $BlockEntry<never>;
        static get portableFuelInterfaceBlockEntry(): $BlockEntry<never>;
    }
    export class $MixinVariables {
        static trackEdgeCarriageTravelling: boolean;
        static navigationCallDepth: number;
        static trackEdgeTemporarilyFlipped: boolean;
        static largeGhastFireballExplosion: boolean;
        static temporarilySkipSwitches: boolean;
        static signalPropagatorCallDepth: number;
        constructor();
    }
    export class $AllBlocksWrapper {
        static metalGirder(): $BlockEntry<never>;
        static track(): $BlockEntry<never>;
    }
    export interface $AllBlocksWrapper {
    }
    export class $ColorUtils {
        static coloredName(arg0: string): string;
        static mapColorFromDye(arg0: $DyeColor_): $MapColor;
        static mapColorFromDye(arg0: $DyeColor_, arg1: $MapColor): $MapColor;
        static getDyeColorDyeItem(arg0: $DyeColor_): $Item;
        static ORDERED_DYE_COLORS: $List<$DyeColor>;
        constructor();
    }
    export class $ExceptionUtils {
        static throwExceptionUnchecked(arg0: $Throwable): void;
        constructor();
    }
}
