import { $DoubleSupplier } from "@package/java/util/function";

declare module "@package/software/bernie/geckolib/loading/math" {
    export class $MathValue {
    }
    export interface $MathValue extends $DoubleSupplier {
        get(): number;
        getAsDouble(): number;
        isMutable(): boolean;
        get asDouble(): number;
        get mutable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MathValue}.
     */
    export type $MathValue_ = (() => number);
}
