import { $Colorc } from "@package/foundry/veil/api/client/color";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $MolangEnvironment } from "@package/gg/moonflower/molangcompiler/api";
import { $Camera } from "@package/net/minecraft/client";
import { $Iterator, $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos } from "@package/net/minecraft/core";
import { $TickTaskScheduler } from "@package/foundry/veil/api";
import { $MatrixStack } from "@package/foundry/veil/api/client/render";
import { $Trail } from "@package/foundry/veil/api/quasar/fx";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $CodeModule_ } from "@package/foundry/veil/api/quasar/data/module";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Record } from "@package/java/lang";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $QuasarParticleData_, $QuasarParticleData, $ParticleSettings, $ParticleSettings_, $EmitterShapeSettings, $ParticleEmitterData, $EmitterShapeSettings_ } from "@package/foundry/veil/api/quasar/data";
import { $Vector4fc, $Vector3dc, $Vector3d, $Vector3f, $Vector4f, $Vector3fc } from "@package/org/joml";
import { $ForceParticleModule, $ParticleModule, $CollisionParticleModule, $UpdateParticleModule, $InitParticleModule, $RenderParticleModule } from "@package/foundry/veil/api/quasar/emitters/module";

declare module "@package/foundry/veil/api/quasar/particle" {
    export class $RenderStyle {
        static CODEC: $Codec<$RenderStyle>;
    }
    export interface $RenderStyle {
        clear(): void;
        setup(arg0: number): boolean;
        render(arg0: $MatrixStack, arg1: $QuasarParticle, arg2: $RenderData, arg3: $Vector3fc, arg4: $VertexConsumer, arg5: number, arg6: number): void;
        getRenderType(arg0: $QuasarParticle, arg1: $RenderData): $RenderType;
        set up(value: number);
    }
    /**
     * Values that may be interpreted as {@link $RenderStyle}.
     */
    export type $RenderStyle_ = RegistryTypes.VeilQuasarRenderStyle | ((arg0: $MatrixStack, arg1: $QuasarParticle, arg2: $RenderData, arg3: $Vector3fc, arg4: $VertexConsumer, arg5: number, arg6: number) => void);
    export class $RenderData {
        markDirty(): void;
        getRenderPosition(): $Vector3dc;
        getRed(): number;
        getGreen(): number;
        getBlue(): number;
        getAlpha(): number;
        getPackedLight(): number;
        renderTrails(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Vec3_, arg3: number): void;
        setFixedPackedLight(arg0: number): void;
        setAtlasSprite(arg0: $TextureAtlasSprite): void;
        getAtlasSprite(): $TextureAtlasSprite;
        getSpriteData(): $SpriteData;
        getRenderRotation(): $Vector3fc;
        getRenderRadius(): number;
        getRenderAge(): number;
        getAgePercent(): number;
        getFixedPackedLight(): number;
        getTrails(): $List<$Trail>;
        setSpriteData(arg0: $SpriteData_): void;
        tick(arg0: $QuasarParticle, arg1: number): void;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setColor(arg0: $Vector4fc): void;
        setColor(arg0: $Colorc): void;
        isAdditive(): boolean;
        setAdditive(arg0: boolean): void;
        render(arg0: $QuasarParticle, arg1: number): void;
        getRenderType(): $RenderType;
        setAlpha(arg0: number): void;
        setRed(arg0: number): void;
        setGreen(arg0: number): void;
        setBlue(arg0: number): void;
        /**
         * @deprecated
         */
        static BLANK: $ResourceLocation;
        agePercent: number;
        renderAge: number;
        constructor(arg0: $QuasarParticle, arg1: $QuasarParticleData_);
        get renderPosition(): $Vector3dc;
        get packedLight(): number;
        get renderRotation(): $Vector3fc;
        get renderRadius(): number;
        get trails(): $List<$Trail>;
        get renderType(): $RenderType;
    }
    export interface $RenderStyle extends RegistryMarked<RegistryTypes.VeilQuasarRenderStyleTag, RegistryTypes.VeilQuasarRenderStyle> {}
    export class $ParticleModuleSet {
        getEnabledRenderModules(): $Iterator<$RenderParticleModule>;
        getRenderModules(): $RenderParticleModule[];
        getAllModules(): $ParticleModule[];
        getEnabledRenderModuleCount(): number;
        getCollisionModules(): $CollisionParticleModule[];
        getInitModules(): $InitParticleModule[];
        updateEnabled(): void;
        getUpdateModules(): $UpdateParticleModule[];
        getForceModules(): $ForceParticleModule[];
        getEnabledRenderModulesArray(): $RenderParticleModule[];
        static builder(): $ParticleModuleSet$Builder;
        copy(): $ParticleModuleSet;
        get enabledRenderModules(): $Iterator<$RenderParticleModule>;
        get renderModules(): $RenderParticleModule[];
        get allModules(): $ParticleModule[];
        get enabledRenderModuleCount(): number;
        get collisionModules(): $CollisionParticleModule[];
        get initModules(): $InitParticleModule[];
        get updateModules(): $UpdateParticleModule[];
        get forceModules(): $ForceParticleModule[];
        get enabledRenderModulesArray(): $RenderParticleModule[];
    }
    export class $ParticleModuleSet$Builder {
        addModule(arg0: $ParticleModule): void;
        build(): $ParticleModuleSet;
        constructor();
    }
    export class $QuasarParticle {
        getModules(): $ParticleModuleSet;
        getRadius(): number;
        setRadius(arg0: number): void;
        setAge(arg0: number): void;
        getRenderData(): $RenderData;
        getRandomSource(): $RandomSource;
        getLifetime(): number;
        getEmitter(): $ParticleEmitter;
        getBlockPosition(): $BlockPos;
        getBlockStateInOrUnder(): $BlockState;
        vectorToRotation(arg0: number, arg1: number, arg2: number): void;
        getEnvironment(): $MolangEnvironment;
        getSettings(): $ParticleSettings;
        remove(): void;
        init(): void;
        tick(): void;
        getLevel(): $ClientLevel;
        getData(): $QuasarParticleData;
        getScheduler(): $TickTaskScheduler;
        getAge(): number;
        render(arg0: number): void;
        isRemoved(): boolean;
        getRotation(): $Vector3f;
        getBoundingBox(): $AABB;
        getVelocity(): $Vector3d;
        onRemove(): void;
        getPosition(): $Vector3d;
        constructor(arg0: $ClientLevel, arg1: $RandomSource, arg2: $TickTaskScheduler, arg3: $QuasarParticleData_, arg4: $ParticleModuleSet, arg5: $ParticleSettings_, arg6: $ParticleEmitter);
        get modules(): $ParticleModuleSet;
        get renderData(): $RenderData;
        get randomSource(): $RandomSource;
        get lifetime(): number;
        get emitter(): $ParticleEmitter;
        get blockPosition(): $BlockPos;
        get blockStateInOrUnder(): $BlockState;
        get environment(): $MolangEnvironment;
        get settings(): $ParticleSettings;
        get level(): $ClientLevel;
        get data(): $QuasarParticleData;
        get scheduler(): $TickTaskScheduler;
        get removed(): boolean;
        get rotation(): $Vector3f;
        get boundingBox(): $AABB;
        get velocity(): $Vector3d;
        get position(): $Vector3d;
    }
    export class $ParticleEmitter {
        getParticleCount(): number;
        setLoop(arg0: boolean): void;
        addCodeModule(arg0: $CodeModule_): void;
        getMaxLifetime(): number;
        getMaxParticles(): number;
        getEmitterShapeSettings(): $List<$EmitterShapeSettings>;
        getParticleSettings(): $ParticleSettings;
        isForceSpawn(): boolean;
        getParticleData(): $QuasarParticleData;
        getAttachedEntity(): $Entity;
        setMaxLifetime(arg0: number): void;
        setRate(arg0: number): void;
        setMaxParticles(arg0: number): void;
        setEmitterShapeSettings(arg0: $List_<$EmitterShapeSettings_>): void;
        setParticleSettings(arg0: $ParticleSettings_): void;
        setForceSpawn(arg0: boolean): void;
        setParticleData(arg0: $QuasarParticleData_): void;
        setAttachedEntity(arg0: $Entity): void;
        getRate(): number;
        static clearErrors(): void;
        getRegistryName(): $ResourceLocation;
        remove(): void;
        reset(): void;
        trim(arg0: number): number;
        getCount(): number;
        isLoop(): boolean;
        getData(): $ParticleEmitterData;
        setPosition(arg0: $Vec3_): void;
        setPosition(arg0: $Vector3dc): void;
        setPosition(arg0: number, arg1: number, arg2: number): void;
        render(arg0: $MatrixStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
        setCount(arg0: number): void;
        isRemoved(): boolean;
        getPosition(): $Vector3d;
        get particleCount(): number;
        get registryName(): $ResourceLocation;
        get data(): $ParticleEmitterData;
        get removed(): boolean;
    }
    export class $SpriteData extends $Record {
        frameTime(): number;
        frameCount(): number;
        frameWidth(): number;
        frameHeight(): number;
        stretchToLifetime(): boolean;
        uv(arg0: number, arg1: number, arg2: $Vector4f): $Vector4f;
        v(arg0: number, arg1: number, arg2: number): number;
        u(arg0: number, arg1: number, arg2: number): number;
        sprite(): $ResourceLocation;
        static CODEC: $Codec<$SpriteData>;
        constructor(sprite: $ResourceLocation_, frameCount: number, frameTime: number, frameWidth: number, frameHeight: number, stretchToLifetime: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SpriteData}.
     */
    export type $SpriteData_ = { frameCount?: number, frameHeight?: number, frameTime?: number, sprite?: $ResourceLocation_, frameWidth?: number, stretchToLifetime?: boolean,  } | [frameCount?: number, frameHeight?: number, frameTime?: number, sprite?: $ResourceLocation_, frameWidth?: number, stretchToLifetime?: boolean, ];
}
