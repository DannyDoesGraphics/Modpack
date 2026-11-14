import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/dev/worldgen/lithostitched/api/worldgen/bandlands" {
    export class $Band {
        static CODEC: $Codec<$Band>;
    }
    export interface $Band {
        fill(blockStates: $BlockState_[], randomSource: $RandomSource): void;
        codec(): $MapCodec<$Band>;
    }
}
