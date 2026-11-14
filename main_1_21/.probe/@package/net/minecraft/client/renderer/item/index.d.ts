import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $GlobalPos_, $GlobalPos } from "@package/net/minecraft/core";
import { $ItemStack, $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";

declare module "@package/net/minecraft/client/renderer/item" {
    export class $CompassItemPropertyFunction$CompassWobble {
    }
    export class $CompassItemPropertyFunction$CompassTarget {
    }
    export interface $CompassItemPropertyFunction$CompassTarget {
        getPos(level: $ClientLevel, stack: $ItemStack_, entity: $Entity): $GlobalPos;
    }
    /**
     * Values that may be interpreted as {@link $CompassItemPropertyFunction$CompassTarget}.
     */
    export type $CompassItemPropertyFunction$CompassTarget_ = ((arg0: $ClientLevel, arg1: $ItemStack, arg2: $Entity) => $GlobalPos_);
    export class $CompassItemPropertyFunction implements $ClampedItemPropertyFunction {
        unclampedCall(stack: $ItemStack_, level: $ClientLevel | null, entity: $LivingEntity | null, seed: number): number;
        /**
         * @deprecated
         */
        call(stack: $ItemStack_, level: $ClientLevel | null, entity: $LivingEntity | null, seed: number): number;
        static DEFAULT_ROTATION: number;
        compassTarget: $CompassItemPropertyFunction$CompassTarget;
        constructor(compassTarget: $CompassItemPropertyFunction$CompassTarget_);
    }
    export class $ClampedItemPropertyFunction {
    }
    export interface $ClampedItemPropertyFunction extends $ItemPropertyFunction {
        unclampedCall(stack: $ItemStack_, level: $ClientLevel | null, entity: $LivingEntity | null, seed: number): number;
        /**
         * @deprecated
         */
        call(stack: $ItemStack_, level: $ClientLevel | null, entity: $LivingEntity | null, seed: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ClampedItemPropertyFunction}.
     */
    export type $ClampedItemPropertyFunction_ = ((arg0: $ItemStack, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number) => number);
    export class $ItemProperties {
        static registerGeneric(arg0: $ResourceLocation_, arg1: $ItemPropertyFunction_): $ItemPropertyFunction;
        static getProperty(stack: $ItemStack_, location: $ResourceLocation_): $ItemPropertyFunction;
        static register(item: $Item_, name: $ResourceLocation_, property: $ClampedItemPropertyFunction_): void;
        static register(arg0: $Item_, arg1: $ResourceLocation_, arg2: $ItemPropertyFunction_): void;
        constructor();
    }
    /**
     * @deprecated
     */
    export class $ItemPropertyFunction {
    }
    export interface $ItemPropertyFunction {
        call(stack: $ItemStack_, level: $ClientLevel | null, entity: $LivingEntity | null, seed: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ItemPropertyFunction}.
     */
    export type $ItemPropertyFunction_ = ((arg0: $ItemStack, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number) => number);
}
