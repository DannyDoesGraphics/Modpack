import { $Enum } from "@package/java/lang";
import { $DensityFunction$ContextProvider, $DensityFunction$FunctionContext } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/com/ishland/c2me/opts/dfc/common/ast" {
    export class $EvalType extends $Enum<$EvalType> {
        static values(): $EvalType[];
        static valueOf(name: string): $EvalType;
        static from(pos: $DensityFunction$FunctionContext): $EvalType;
        static from(applier: $DensityFunction$ContextProvider): $EvalType;
        static INTERPOLATION: $EvalType;
        static NORMAL: $EvalType;
    }
    /**
     * Values that may be interpreted as {@link $EvalType}.
     */
    export type $EvalType_ = "normal" | "interpolation";
}
