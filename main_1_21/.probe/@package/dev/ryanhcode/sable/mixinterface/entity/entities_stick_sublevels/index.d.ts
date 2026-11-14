import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
export * as player from "@package/dev/ryanhcode/sable/mixinterface/entity/entities_stick_sublevels/player";
export * as packet_mixin from "@package/dev/ryanhcode/sable/mixinterface/entity/entities_stick_sublevels/packet_mixin";

declare module "@package/dev/ryanhcode/sable/mixinterface/entity/entities_stick_sublevels" {
    export class $EntityStickExtension {
    }
    export interface $EntityStickExtension {
        sable$getPlotPosition(): $Vec3;
        sable$setPlotPosition(arg0: $Vec3_): void;
        sable$plotLerpTo(arg0: $Vec3_, arg1: number): void;
    }
    export class $LivingEntityStickExtension {
    }
    export interface $LivingEntityStickExtension extends $EntityStickExtension {
        sable$setupLerp(): void;
        sable$applyLerp(): void;
        sable$getLerpTarget(): $Vec3;
    }
}
