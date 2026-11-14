import { $Blender } from "@package/net/minecraft/world/level/levelgen/blending";
import { $DfcObjectCache } from "@package/com/ishland/c2me/opts/dfc/common/gen/jvm/util";
import { $DensityFunction$FunctionContext } from "@package/net/minecraft/world/level/levelgen";
import { $EvalType_, $EvalType } from "@package/com/ishland/c2me/opts/dfc/common/ast";

declare module "@package/com/ishland/c2me/opts/dfc/common/gen/jvm/vif" {
    export class $NoisePosVanillaInterface implements $DensityFunction$FunctionContext {
        ensureUninitialized(): void;
        deInit(): void;
        blockX(): number;
        blockZ(): number;
        getType(): $EvalType;
        at(x: number, y: number, z: number, type: $EvalType_, cache: $DfcObjectCache): $NoisePosVanillaInterface;
        blockY(): number;
        getBlender(): $Blender;
        constructor();
        get type(): $EvalType;
        get blender(): $Blender;
    }
}
