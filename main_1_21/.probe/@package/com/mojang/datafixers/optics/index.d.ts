import { $Function } from "@package/java/util/function";
import { $TypeToken } from "@package/com/google/common/reflect";
import { $Set_ } from "@package/java/util";
import { $App, $K2, $K1, $App2 } from "@package/com/mojang/datafixers/kinds";

declare module "@package/com/mojang/datafixers/optics" {
    export class $Optic<Proof extends $K1, S, T, A, B> {
    }
    export interface $Optic<Proof extends $K1, S, T, A, B> {
        "eval"<P extends $K2>(arg0: $App<Proof, P>): $Function<$App2<P, A, B>, $App2<P, S, T>>;
        upCast<Proof2 extends $K1>(arg0: $Set_<$TypeToken<$K1>>, arg1: $TypeToken<Proof2>): ($Optic<Proof2, S, T, A, B>) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $Optic}.
     */
    export type $Optic_<Proof, S, T, A, B> = ((arg0: $App<Proof, any>) => $Function<$App2<any, A, B>, $App2<any, S, T>>);
}
