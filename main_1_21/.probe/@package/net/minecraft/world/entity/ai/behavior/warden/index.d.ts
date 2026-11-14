import { $BehaviorControl, $Behavior } from "@package/net/minecraft/world/entity/ai/behavior";
import { $Function_ } from "@package/java/util/function";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Warden } from "@package/net/minecraft/world/entity/monster/warden";

declare module "@package/net/minecraft/world/entity/ai/behavior/warden" {
    export class $SetWardenLookTarget {
        static create(): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $Emerging<E extends $Warden> extends $Behavior<E> {
        static DEFAULT_DURATION: number;
        constructor(duration: number);
    }
    export class $Roar extends $Behavior<$Warden> {
        static DEFAULT_DURATION: number;
        constructor();
    }
    export class $SonicBoom extends $Behavior<$Warden> {
        static setCooldown(entity: $LivingEntity, cooldown: number): void;
        static COOLDOWN: number;
        static DEFAULT_DURATION: number;
        constructor();
    }
    export class $TryToSniff {
        static create(): $BehaviorControl<$LivingEntity>;
        constructor();
    }
    export class $ForceUnmount extends $Behavior<$LivingEntity> {
        static DEFAULT_DURATION: number;
        constructor();
    }
    export class $Sniffing<E extends $Warden> extends $Behavior<E> {
        static DEFAULT_DURATION: number;
        constructor(duration: number);
    }
    export class $Digging<E extends $Warden> extends $Behavior<E> {
        static DEFAULT_DURATION: number;
        constructor(duration: number);
    }
    export class $SetRoarTarget {
        static create<E extends $Warden>(targetFinder: $Function_<E, ($LivingEntity) | undefined>): $BehaviorControl<E>;
        constructor();
    }
}
