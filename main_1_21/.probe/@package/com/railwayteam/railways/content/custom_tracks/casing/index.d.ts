import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $SyncedBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $TrackBlockEntity, $BezierConnection } from "@package/com/simibubi/create/content/trains/track";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $List } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Supplier_ } from "@package/java/util/function";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $ChunkRenderTypeSet } from "@package/net/neoforged/neoforge/client";
import { $BlockPos_, $Direction_, $IdMapper } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ProperWaterloggedBlock } from "@package/com/simibubi/create/foundation/block";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $InstancerProvider_ } from "@package/dev/engine_room/flywheel/api/instance";
import { $BlockAndTintGetter, $LevelAccessor, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Item, $ItemStack_, $ItemStack, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $ItemOverrides, $BakedQuad, $ItemTransforms } from "@package/net/minecraft/client/renderer/block/model";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $TransformedInstance } from "@package/dev/engine_room/flywheel/lib/instance";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $BlockPlaceContext } from "@package/net/minecraft/world/item/context";
import { $C2SPacket } from "@package/com/railwayteam/railways/multiloader";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $RenderContext } from "@package/net/fabricmc/fabric/api/renderer/v1/render";
import { $Block_, $RenderShape, $EntityBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as neoforge from "@package/com/railwayteam/railways/content/custom_tracks/casing/neoforge";

declare module "@package/com/railwayteam/railways/content/custom_tracks/casing" {
    export class $CasingChecker {
        static isValid(arg0: $Block_): boolean;
        constructor();
    }
    export class $CasingCollisionBlockEntity extends $SyncedBlockEntity {
        randomTick(): void;
        keepAlive(): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $CasingCollisionUtils$SuperBuilder {
    }
    export class $CasingCollisionUtils$Builder {
    }
    export class $CasingCollisionUtils {
        static shouldMakeCollision(arg0: $TrackBlockEntity, arg1: $BlockState_): boolean;
        static manageTracks(arg0: $TrackBlockEntity, arg1: boolean): void;
        static register(): void;
        constructor();
    }
    export class $CasingCollisionBlock extends $Block implements $EntityBlock, $ProperWaterloggedBlock {
        randomTick(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $RandomSource): void;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        static create(arg0: $BlockBehaviour$Properties): $CasingCollisionBlock;
        static keepAlive(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getRenderShape(arg0: $BlockState_): $RenderShape;
        getFluidState(arg0: $BlockState_): $FluidState;
        getCollisionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getTicker<T extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<T>): $BlockEntityTicker<T>;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        fluidState(arg0: $BlockState_): $FluidState;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $CasingRenderUtils {
        static makeCasingInstance(arg0: $PartialModel, arg1: $Block_, arg2: $InstancerProvider_): $TransformedInstance;
        static casingPositions(arg0: $BezierConnection): $List<$Vec3>;
        static reTexture(arg0: $PartialModel, arg1: $Block_): $PartialModel;
        static renderBezierCasings(arg0: $PoseStack, arg1: $Level_, arg2: $PartialModel, arg3: $BlockState_, arg4: $VertexConsumer, arg5: $BezierConnection): void;
        static clearModelCache(): void;
        constructor();
    }
    export class $SlabUseOnCurvePacket implements $C2SPacket {
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $ServerPlayer): void;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $BlockPos_);
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $SpriteCopyingBakedModel implements $BakedModel {
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        isCustomRenderer(): boolean;
        getTransforms(): $ItemTransforms;
        getOverrides(): $ItemOverrides;
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        useAmbientOcclusion(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        isVanillaAdapter(): boolean;
        constructor(arg0: $BakedModel, arg1: $BakedModel, arg2: $BlockState_);
        get customRenderer(): boolean;
        get transforms(): $ItemTransforms;
        get overrides(): $ItemOverrides;
        get gui3d(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $RuntimeFakePartialModel {
        static make(arg0: $ResourceLocation_, arg1: $BakedModel): $PartialModel;
        constructor();
    }
    export class $CasingResourceReloadListener implements $ResourceManagerReloadListener {
        onResourceManagerReload(arg0: $ResourceManager): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getName(): string;
        static INSTANCE: $CasingResourceReloadListener;
        constructor();
        get name(): string;
    }
}
