import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item$Properties, $BlockItem, $Item } from "@package/net/minecraft/world/item";
import { $SerializableDataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $List, $Map } from "@package/java/util";
import { $GeoItem } from "@package/software/bernie/geckolib/animatable";
import { $AnimatableManager$ControllerRegistrar_ } from "@package/software/bernie/geckolib/animation";
import { $GeoRenderProvider } from "@package/software/bernie/geckolib/animatable/client";
import { $Consumer_ } from "@package/java/util/function";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AnimatableInstanceCache } from "@package/software/bernie/geckolib/animatable/instance";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Object } from "@package/java/lang";
export * as tools from "@package/rearth/oritech/item/tools";
export * as other from "@package/rearth/oritech/item/other";

declare module "@package/rearth/oritech/item" {
    export class $UnstableContainerItem extends $Item implements $GeoItem {
        static getBlocksFromTag(arg0: $TagKey_<$Block>): $List<$MutableComponent>;
        createGeoRenderer(arg0: $Consumer_<$GeoRenderProvider>): void;
        registerControllers(arg0: $AnimatableManager$ControllerRegistrar_): void;
        getAnimatableInstanceCache(): $AnimatableInstanceCache;
        isPerspectiveAware(): boolean;
        getTick(arg0: $Object): number;
        animatableCacheOverride(): $AnimatableInstanceCache;
        syncAnimData<D>(arg0: number, arg1: $SerializableDataTicket<D>, arg2: D, arg3: $Entity): void;
        getRenderProvider(): $Object;
        triggerArmorAnim(arg0: $Entity, arg1: number, arg2: string, arg3: string): void;
        stopTriggeredArmorAnim(arg0: $Entity, arg1: number, arg2: string, arg3: string): void;
        getAnimData<D>(arg0: number, arg1: $SerializableDataTicket<D>): D;
        setAnimData<D>(arg0: $Entity, arg1: number, arg2: $SerializableDataTicket<D>, arg3: D): void;
        triggerAnim<D>(arg0: $Entity, arg1: number, arg2: string, arg3: string): void;
        stopTriggeredAnim(arg0: $Entity, arg1: number, arg2: string, arg3: string): void;
        getBoneResetTime(): number;
        shouldPlayAnimsWhileGamePaused(): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: number, arg2: string);
        get animatableInstanceCache(): $AnimatableInstanceCache;
        get perspectiveAware(): boolean;
        get renderProvider(): $Object;
        get boneResetTime(): number;
    }
    export class $OritechGeoItem extends $BlockItem implements $GeoItem {
        createGeoRenderer(arg0: $Consumer_<$GeoRenderProvider>): void;
        registerControllers(arg0: $AnimatableManager$ControllerRegistrar_): void;
        getAnimatableInstanceCache(): $AnimatableInstanceCache;
        isPerspectiveAware(): boolean;
        getTick(arg0: $Object): number;
        animatableCacheOverride(): $AnimatableInstanceCache;
        syncAnimData<D>(arg0: number, arg1: $SerializableDataTicket<D>, arg2: D, arg3: $Entity): void;
        getRenderProvider(): $Object;
        triggerArmorAnim(arg0: $Entity, arg1: number, arg2: string, arg3: string): void;
        stopTriggeredArmorAnim(arg0: $Entity, arg1: number, arg2: string, arg3: string): void;
        getAnimData<D>(arg0: number, arg1: $SerializableDataTicket<D>): D;
        setAnimData<D>(arg0: $Entity, arg1: number, arg2: $SerializableDataTicket<D>, arg3: D): void;
        triggerAnim<D>(arg0: $Entity, arg1: number, arg2: string, arg3: string): void;
        stopTriggeredAnim(arg0: $Entity, arg1: number, arg2: string, arg3: string): void;
        getBoneResetTime(): number;
        shouldPlayAnimsWhileGamePaused(): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties, arg2: number, arg3: string);
        get animatableInstanceCache(): $AnimatableInstanceCache;
        get perspectiveAware(): boolean;
        get renderProvider(): $Object;
        get boneResetTime(): number;
    }
}
