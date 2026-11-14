import { $Hash$Strategy } from "@package/it/unimi/dsi/fastutil";
import { $Object } from "@package/java/lang";

declare module "@package/net/neoforged/neoforge/common/util/strategy" {
    /**
     * A strategy that uses `System#identityHashCode(Object)` and `a == b` comparisons.
     */
    export class $IdentityStrategy implements $Hash$Strategy<$Object> {
        equals(a: $Object, b: $Object): boolean;
        hashCode(o: $Object): number;
        static IDENTITY: $Hash$Strategy<$Object>;
    }
    /**
     * A strategy that uses `Objects#hashCode(Object)` and `Object#equals(Object)`.
     */
    export class $BasicStrategy implements $Hash$Strategy<$Object> {
        equals(a: $Object, b: $Object): boolean;
        hashCode(o: $Object): number;
        static BASIC: $Hash$Strategy<$Object>;
    }
}
