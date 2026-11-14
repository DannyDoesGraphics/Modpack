import { $InstancerProvider } from "@package/dev/engine_room/flywheel/api/instance";
import { $Level } from "@package/net/minecraft/world/level";
import { $RenderBuffers } from "@package/net/minecraft/client/renderer";
import { $Particle } from "@package/net/minecraft/client/particle";
import { $ConcurrentMap } from "@package/java/util/concurrent";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $BogeyStyle$SizeRenderer, $BogeyStyle$SizeRenderer_, $BogeySizes$BogeySize_, $BogeySizes$BogeySize } from "@package/com/simibubi/create/content/trains/bogey";
import { $Map_, $Map } from "@package/java/util";
import { $WeakReference } from "@package/java/lang/ref";
import { $AbstractContraptionEntity } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";

declare module "@package/com/railwayteam/railways/mixin/client" {
    export class $AccessorTrackVisual {
    }
    export interface $AccessorTrackVisual {
        railways$getVisualPos(): $BlockPos;
    }
    /**
     * Values that may be interpreted as {@link $AccessorTrackVisual}.
     */
    export type $AccessorTrackVisual_ = (() => $BlockPos_);
    export class $AccessorLevelRenderer {
    }
    export interface $AccessorLevelRenderer {
        railways$getRenderBuffers(): $RenderBuffers;
        callAddParticleInternal(arg0: $ParticleOptions_, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): $Particle;
    }
    export class $AccessorControlsHandler {
        static getEntityRef(): $WeakReference<$AbstractContraptionEntity>;
        static get entityRef(): $WeakReference<$AbstractContraptionEntity>;
    }
    export interface $AccessorControlsHandler {
    }
    export class $AccessorPartialModel {
        static railways$getALL(): $ConcurrentMap<$ResourceLocation, $PartialModel>;
        static railways$setPopulateOnInit(arg0: boolean): void;
        static railways$getPopulateOnInit(): boolean;
    }
    export interface $AccessorPartialModel {
        railways$setBakedModel(arg0: $BakedModel): void;
        railways$getBakedModel(): $BakedModel;
    }
    export class $AccessorEntity {
    }
    export interface $AccessorEntity {
        getXRot(): number;
        getYRot(): number;
        setYRot(arg0: number): void;
        setXRot(arg0: number): void;
    }
    export class $AccessorWalkAnimationState {
    }
    export interface $AccessorWalkAnimationState {
        getSpeedOld(): number;
        setSpeedOld(arg0: number): void;
        setPosition(arg0: number): void;
        set position(value: number);
    }
    export class $AccessorTrackBlockOutline {
        static getLongCross(): $VoxelShape;
        static getLongOrtho(): $VoxelShape;
        static getLongOrthoOffset(): $VoxelShape;
        static get longCross(): $VoxelShape;
        static get longOrtho(): $VoxelShape;
        static get longOrthoOffset(): $VoxelShape;
    }
    export interface $AccessorTrackBlockOutline {
    }
    export class $AccessorAbstractVisual {
    }
    export interface $AccessorAbstractVisual {
        railways$getInstancerProvider(): $InstancerProvider;
        railways$getLevel(): $Level;
    }
    export class $AccessorLivingEntityRenderer<T extends $LivingEntity> {
    }
    export interface $AccessorLivingEntityRenderer<T extends $LivingEntity> {
        callSetupRotations(arg0: T, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessorLivingEntityRenderer}.
     */
    export type $AccessorLivingEntityRenderer_<T> = ((arg0: T, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number) => void);
    export class $AccessorToolboxHandlerClient {
        static getCOOLDOWN(): number;
        static setCOOLDOWN(arg0: number): void;
    }
    export interface $AccessorToolboxHandlerClient {
    }
    export class $AccessorBogeyStyle {
    }
    export interface $AccessorBogeyStyle {
        getSizeRenderers(): $Map<$BogeySizes$BogeySize, $BogeyStyle$SizeRenderer>;
        get sizeRenderers(): $Map<$BogeySizes$BogeySize, $BogeyStyle$SizeRenderer>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorBogeyStyle}.
     */
    export type $AccessorBogeyStyle_ = (() => $Map_<$BogeySizes$BogeySize_, $BogeyStyle$SizeRenderer_>);
    export class $AccessorLocalPlayer {
    }
    export interface $AccessorLocalPlayer {
        railways$getXRotLast(): number;
        railways$getYRotLast(): number;
    }
}
