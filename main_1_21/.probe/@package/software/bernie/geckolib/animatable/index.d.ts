import { $GeoRenderProvider } from "@package/software/bernie/geckolib/animatable/client";
import { $Consumer_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $SerializableDataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $AnimatableInstanceCache } from "@package/software/bernie/geckolib/animatable/instance";
import { $Object } from "@package/java/lang";
import { $AnimatableManager$ControllerRegistrar_ } from "@package/software/bernie/geckolib/animation";
export * as client from "@package/software/bernie/geckolib/animatable/client";
export * as instance from "@package/software/bernie/geckolib/animatable/instance";

declare module "@package/software/bernie/geckolib/animatable" {
    export class $SingletonGeoAnimatable {
        static registerSyncedAnimatable(arg0: $GeoAnimatable): void;
    }
    export interface $SingletonGeoAnimatable extends $GeoAnimatable {
        createGeoRenderer(arg0: $Consumer_<$GeoRenderProvider>): void;
        syncAnimData<D>(arg0: number, arg1: $SerializableDataTicket<D>, arg2: D, arg3: $Entity): void;
        getRenderProvider(): $Object;
        triggerArmorAnim(arg0: $Entity, arg1: number, arg2: string, arg3: string): void;
        stopTriggeredArmorAnim(arg0: $Entity, arg1: number, arg2: string, arg3: string): void;
        getAnimData<D>(arg0: number, arg1: $SerializableDataTicket<D>): D;
        setAnimData<D>(arg0: $Entity, arg1: number, arg2: $SerializableDataTicket<D>, arg3: D): void;
        triggerAnim<D>(arg0: $Entity, arg1: number, arg2: string, arg3: string): void;
        stopTriggeredAnim(arg0: $Entity, arg1: number, arg2: string, arg3: string): void;
        animatableCacheOverride(): $AnimatableInstanceCache;
        get renderProvider(): $Object;
    }
    export class $GeoAnimatable {
    }
    export interface $GeoAnimatable {
        getTick(arg0: $Object): number;
        registerControllers(arg0: $AnimatableManager$ControllerRegistrar_): void;
        getAnimatableInstanceCache(): $AnimatableInstanceCache;
        getBoneResetTime(): number;
        shouldPlayAnimsWhileGamePaused(): boolean;
        animatableCacheOverride(): $AnimatableInstanceCache;
        get animatableInstanceCache(): $AnimatableInstanceCache;
        get boneResetTime(): number;
    }
    export class $GeoEntity {
    }
    export interface $GeoEntity extends $GeoAnimatable {
        getTick(arg0: $Object): number;
        getAnimData<D>(arg0: $SerializableDataTicket<D>): D;
        setAnimData<D>(arg0: $SerializableDataTicket<D>, arg1: D): void;
        triggerAnim(arg0: string, arg1: string): void;
        stopTriggeredAnim(arg0: string, arg1: string): void;
    }
    export class $GeoBlockEntity {
    }
    export interface $GeoBlockEntity extends $GeoAnimatable {
        getTick(arg0: $Object): number;
        getAnimData<D>(arg0: $SerializableDataTicket<D>): D;
        setAnimData<D>(arg0: $SerializableDataTicket<D>, arg1: D): void;
        triggerAnim(arg0: string, arg1: string): void;
        stopTriggeredAnim(arg0: string, arg1: string): void;
    }
    export class $GeoItem {
        static registerSyncedAnimatable(arg0: $GeoAnimatable): void;
        static getOrAssignId(arg0: $ItemStack_, arg1: $ServerLevel): number;
        static getId(arg0: $ItemStack_): number;
    }
    export interface $GeoItem extends $SingletonGeoAnimatable {
        isPerspectiveAware(): boolean;
        getTick(arg0: $Object): number;
        animatableCacheOverride(): $AnimatableInstanceCache;
        get perspectiveAware(): boolean;
    }
}
