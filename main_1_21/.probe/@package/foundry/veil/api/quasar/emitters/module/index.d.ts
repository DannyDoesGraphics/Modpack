import { $QuasarParticle } from "@package/foundry/veil/api/quasar/particle";
export * as render from "@package/foundry/veil/api/quasar/emitters/module/render";

declare module "@package/foundry/veil/api/quasar/emitters/module" {
    export class $ForceParticleModule {
    }
    export interface $ForceParticleModule extends $ParticleModule {
        applyForce(arg0: $QuasarParticle): void;
        setStrength(arg0: number): void;
        set strength(value: number);
    }
    export class $CollisionParticleModule {
    }
    export interface $CollisionParticleModule extends $ParticleModule {
        collide(arg0: $QuasarParticle): void;
    }
    /**
     * Values that may be interpreted as {@link $CollisionParticleModule}.
     */
    export type $CollisionParticleModule_ = ((arg0: $QuasarParticle) => void);
    export class $RenderParticleModule {
    }
    export interface $RenderParticleModule extends $ParticleModule {
        isEnabled(): boolean;
        render(arg0: $QuasarParticle, arg1: number): void;
        get enabled(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RenderParticleModule}.
     */
    export type $RenderParticleModule_ = ((arg0: $QuasarParticle, arg1: number) => void);
    export class $ParticleModule {
    }
    export interface $ParticleModule {
        onRemove(): void;
    }
    export class $InitParticleModule {
    }
    export interface $InitParticleModule extends $ParticleModule {
        init(arg0: $QuasarParticle): void;
    }
    /**
     * Values that may be interpreted as {@link $InitParticleModule}.
     */
    export type $InitParticleModule_ = ((arg0: $QuasarParticle) => void);
    export class $UpdateParticleModule {
    }
    export interface $UpdateParticleModule extends $ParticleModule {
        update(arg0: $QuasarParticle): void;
    }
    /**
     * Values that may be interpreted as {@link $UpdateParticleModule}.
     */
    export type $UpdateParticleModule_ = ((arg0: $QuasarParticle) => void);
}
