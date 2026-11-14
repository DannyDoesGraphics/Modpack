import { $IntConsumer } from "@package/it/unimi/dsi/fastutil/ints";
import { $Consumer, $Supplier, $IntSupplier } from "@package/java/util/function";

declare module "@package/dev/architectury/utils/value" {
    export class $IntValue {
    }
    export interface $IntValue extends $Value<number>, $IntSupplier, $IntConsumer {
        get(): number;
    }
    export class $Value<T> {
    }
    export interface $Value<T> extends $Supplier<T>, $Consumer<T> {
    }
}
