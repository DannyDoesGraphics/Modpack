import { $Codec_ } from "@package/com/mojang/serialization";
import { $OptionInstance$ValueSet } from "@package/net/minecraft/client";

declare module "@package/com/ishland/c2me/client/uncapvd/mixin" {
    export class $ISimpleOption<T> {
    }
    export interface $ISimpleOption<T> {
        setCallbacks(arg0: $OptionInstance$ValueSet<T>): void;
        setCodec(arg0: $Codec_<T>): void;
        set callbacks(value: $OptionInstance$ValueSet<T>);
        set codec(value: $Codec_<T>);
    }
}
