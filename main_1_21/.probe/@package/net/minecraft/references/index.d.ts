import { $Item } from "@package/net/minecraft/world/item";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";

declare module "@package/net/minecraft/references" {
    export class $Blocks {
        static PUMPKIN_STEM: $ResourceKey<$Block>;
        static PUMPKIN: $ResourceKey<$Block>;
        static ATTACHED_PUMPKIN_STEM: $ResourceKey<$Block>;
        static ATTACHED_MELON_STEM: $ResourceKey<$Block>;
        static MELON: $ResourceKey<$Block>;
        static MELON_STEM: $ResourceKey<$Block>;
        constructor();
    }
    export class $Items {
        static MELON_SEEDS: $ResourceKey<$Item>;
        static PUMPKIN_SEEDS: $ResourceKey<$Item>;
        constructor();
    }
}
