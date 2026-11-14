import { $Supplier_, $BooleanSupplier_ } from "@package/java/util/function";
import { $Throwable, $Enum } from "@package/java/lang";

declare module "@package/net/fabricmc/fabric/api/util" {
    export class $TriState extends $Enum<$TriState> {
        get(): boolean;
        static values(): $TriState[];
        static valueOf(arg0: string): $TriState;
        map<T>(arg0: $BooleanFunction_<T>): (T) | undefined;
        static of(arg0: boolean): $TriState;
        static of(arg0: boolean): $TriState;
        orElse(arg0: boolean): boolean;
        orElseThrow<X extends $Throwable>(arg0: $Supplier_<X>): boolean;
        orElseGet(arg0: $BooleanSupplier_): boolean;
        getBoxed(): boolean;
        static TRUE: $TriState;
        static FALSE: $TriState;
        static DEFAULT: $TriState;
        get boxed(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TriState}.
     */
    export type $TriState_ = "false" | "default" | "true";
    export class $BooleanFunction<R> {
    }
    export interface $BooleanFunction<R> {
        apply(arg0: boolean): R;
    }
    /**
     * Values that may be interpreted as {@link $BooleanFunction}.
     */
    export type $BooleanFunction_<R> = ((arg0: boolean) => R);
}
