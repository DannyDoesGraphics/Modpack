import { $SerializationContext, $Endec } from "@package/io/wispforest/endec";
import { $DataComponentType$Builder } from "@package/net/minecraft/core/component";

declare module "@package/io/wispforest/owo/serialization" {
    export class $OwoComponentTypeBuilder<T> {
    }
    export interface $OwoComponentTypeBuilder<T> {
        endec(endec: $Endec<T>): $DataComponentType$Builder<T>;
        endec(endec: $Endec<T>, assumedContext: $SerializationContext): $DataComponentType$Builder<T>;
    }
}
