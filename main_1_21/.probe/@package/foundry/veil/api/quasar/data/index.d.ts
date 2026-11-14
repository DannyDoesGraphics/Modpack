import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $SpriteData, $RenderStyle, $RenderStyle_, $SpriteData_ } from "@package/foundry/veil/api/quasar/particle";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ParticleModuleData } from "@package/foundry/veil/api/quasar/data/module";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $EmitterShape_, $EmitterShape } from "@package/foundry/veil/api/quasar/emitters/shape";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Vector3dc, $Vector3fc, $Vector3d, $Vector3f } from "@package/org/joml";
export * as module from "@package/foundry/veil/api/quasar/data/module";

declare module "@package/foundry/veil/api/quasar/data" {
    export class $QuasarParticleData extends $Record {
        shouldCollide(): boolean;
        getRegistryId(): $ResourceLocation;
        faceVelocity(): boolean;
        velocityStretchFactor(): number;
        initModules(): $List<$Holder<$ParticleModuleData>>;
        updateModules(): $List<$Holder<$ParticleModuleData>>;
        collisionModules(): $List<$Holder<$ParticleModuleData>>;
        forceModules(): $List<$Holder<$ParticleModuleData>>;
        renderModules(): $List<$Holder<$ParticleModuleData>>;
        spriteData(): $SpriteData;
        renderStyle(): $RenderStyle;
        getAllModules(): $List<$Holder<$ParticleModuleData>>;
        additive(): boolean;
        static CODEC: $Codec<$Holder<$QuasarParticleData>>;
        static DIRECT_CODEC: $Codec<$QuasarParticleData>;
        constructor(shouldCollide: boolean, faceVelocity: boolean, velocityStretchFactor: number, initModules: $List_<$Holder_<$ParticleModuleData>>, updateModules: $List_<$Holder_<$ParticleModuleData>>, collisionModules: $List_<$Holder_<$ParticleModuleData>>, forceModules: $List_<$Holder_<$ParticleModuleData>>, renderModules: $List_<$Holder_<$ParticleModuleData>>, spriteData: $SpriteData_, additive: boolean, renderStyle: $RenderStyle_);
        get registryId(): $ResourceLocation;
        get allModules(): $List<$Holder<$ParticleModuleData>>;
    }
    /**
     * Values that may be interpreted as {@link $QuasarParticleData}.
     */
    export type $QuasarParticleData_ = { collisionModules?: $List_<$Holder_<$ParticleModuleData>>, renderStyle?: $RenderStyle_, additive?: boolean, renderModules?: $List_<$Holder_<$ParticleModuleData>>, faceVelocity?: boolean, spriteData?: $SpriteData_, updateModules?: $List_<$Holder_<$ParticleModuleData>>, velocityStretchFactor?: number, forceModules?: $List_<$Holder_<$ParticleModuleData>>, initModules?: $List_<$Holder_<$ParticleModuleData>>, shouldCollide?: boolean,  } | [collisionModules?: $List_<$Holder_<$ParticleModuleData>>, renderStyle?: $RenderStyle_, additive?: boolean, renderModules?: $List_<$Holder_<$ParticleModuleData>>, faceVelocity?: boolean, spriteData?: $SpriteData_, updateModules?: $List_<$Holder_<$ParticleModuleData>>, velocityStretchFactor?: number, forceModules?: $List_<$Holder_<$ParticleModuleData>>, initModules?: $List_<$Holder_<$ParticleModuleData>>, shouldCollide?: boolean, ];
    export class $EmitterShapeSettings extends $Record {
        getPos(arg0: $RandomSource, arg1: $Vector3dc): $Vector3d;
        getRegistryId(): $ResourceLocation;
        fromSurface(): boolean;
        dimensions(): $Vector3fc;
        shape(): $EmitterShape;
        rotation(): $Vector3fc;
        static CODEC: $Codec<$Holder<$EmitterShapeSettings>>;
        static DIRECT_CODEC: $Codec<$EmitterShapeSettings>;
        constructor(shape: $EmitterShape_, dimensions: $Vector3fc, rotation: $Vector3fc, fromSurface: boolean);
        get registryId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $EmitterShapeSettings}.
     */
    export type $EmitterShapeSettings_ = { shape?: $EmitterShape_, rotation?: $Vector3fc, dimensions?: $Vector3fc, fromSurface?: boolean,  } | [shape?: $EmitterShape_, rotation?: $Vector3fc, dimensions?: $Vector3fc, fromSurface?: boolean, ];
    export class $ParticleEmitterData extends $Record {
        getRegistryId(): $ResourceLocation;
        particleData(): $QuasarParticleData;
        maxLifetime(): number;
        maxParticles(): number;
        emitterSettings(): $EmitterSettings;
        particleDataHolder(): $Holder<$QuasarParticleData>;
        count(): number;
        loop(): boolean;
        rate(): number;
        static CODEC: $Codec<$Holder<$ParticleEmitterData>>;
        static DIRECT_CODEC: $Codec<$ParticleEmitterData>;
        constructor(maxLifetime: number, loop: boolean, rate: number, count: number, maxParticles: number, emitterSettings: $EmitterSettings_, particleDataHolder: $Holder_<$QuasarParticleData>);
        get registryId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $ParticleEmitterData}.
     */
    export type $ParticleEmitterData_ = { rate?: number, maxLifetime?: number, emitterSettings?: $EmitterSettings_, count?: number, maxParticles?: number, particleDataHolder?: $Holder_<$QuasarParticleData>, loop?: boolean,  } | [rate?: number, maxLifetime?: number, emitterSettings?: $EmitterSettings_, count?: number, maxParticles?: number, particleDataHolder?: $Holder_<$QuasarParticleData>, loop?: boolean, ];
    export class $ParticleSettings extends $Record {
        initialDirection(arg0: $RandomSource): $Vector3fc;
        initialDirection(): $Vector3fc;
        randomSpeed(): boolean;
        getRegistryId(): $ResourceLocation;
        randomSize(): boolean;
        particleSpeed(): number;
        particleSpeed(arg0: $RandomSource): number;
        particleSize(): number;
        particleSize(arg0: $RandomSource): number;
        particleSizeVariation(): number;
        particleLifetime(arg0: $RandomSource): number;
        particleLifetime(): number;
        particleLifetimeVariation(): number;
        randomInitialDirection(): boolean;
        randomInitialRotation(): boolean;
        randomLifetime(): boolean;
        particleDirection(arg0: $RandomSource): $Vector3f;
        static CODEC: $Codec<$Holder<$ParticleSettings>>;
        static DIRECT_CODEC: $Codec<$ParticleSettings>;
        constructor(particleSpeed: number, particleSize: number, particleSizeVariation: number, particleLifetime: number, particleLifetimeVariation: number, initialDirection: $Vector3fc, randomInitialDirection: boolean, randomInitialRotation: boolean, randomSpeed: boolean, randomSize: boolean, randomLifetime: boolean);
        get registryId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $ParticleSettings}.
     */
    export type $ParticleSettings_ = { randomSpeed?: boolean, initialDirection?: $Vector3fc, randomSize?: boolean, particleSize?: number, randomInitialDirection?: boolean, particleLifetimeVariation?: number, particleLifetime?: number, randomLifetime?: boolean, randomInitialRotation?: boolean, particleSizeVariation?: number, particleSpeed?: number,  } | [randomSpeed?: boolean, initialDirection?: $Vector3fc, randomSize?: boolean, particleSize?: number, randomInitialDirection?: boolean, particleLifetimeVariation?: number, particleLifetime?: number, randomLifetime?: boolean, randomInitialRotation?: boolean, particleSizeVariation?: number, particleSpeed?: number, ];
    export class $EmitterSettings extends $Record {
        particleSettings(): $ParticleSettings;
        emitterShapeSettingsHolders(): $List<$Holder<$EmitterShapeSettings>>;
        particleSettingsHolder(): $Holder<$ParticleSettings>;
        forceSpawn(): boolean;
        emitterShapeSettings(): $List<$EmitterShapeSettings>;
        static CODEC: $Codec<$EmitterSettings>;
        constructor(emitterShapeSettingsHolders: $List_<$Holder_<$EmitterShapeSettings>>, particleSettingsHolder: $Holder_<$ParticleSettings>, forceSpawn: boolean);
    }
    /**
     * Values that may be interpreted as {@link $EmitterSettings}.
     */
    export type $EmitterSettings_ = { forceSpawn?: boolean, emitterShapeSettingsHolders?: $List_<$Holder_<$EmitterShapeSettings>>, particleSettingsHolder?: $Holder_<$ParticleSettings>,  } | [forceSpawn?: boolean, emitterShapeSettingsHolders?: $List_<$Holder_<$EmitterShapeSettings>>, particleSettingsHolder?: $Holder_<$ParticleSettings>, ];
}
