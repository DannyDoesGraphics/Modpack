import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Set, $Set_ } from "@package/java/util";

declare module "@package/io/wispforest/owo/network" {
    export class $OwoClientConnectionExtension {
    }
    export interface $OwoClientConnectionExtension {
        owo$setChannelSet(arg0: $Set_<$ResourceLocation_>): void;
        owo$getChannelSet(): $Set<$ResourceLocation>;
    }
}
