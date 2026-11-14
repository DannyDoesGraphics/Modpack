import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $Climate$ParameterList, $Biome } from "@package/net/minecraft/world/level/biome";

declare module "@package/net/werdei/biome_replacer/replacer" {
    export class $MultiNoiseBiomeSourceExtension {
    }
    export interface $MultiNoiseBiomeSourceExtension {
        biome_replacer$getParameters(): $Climate$ParameterList<$Holder<$Biome>>;
        biome_replacer$setParameters(arg0: $Climate$ParameterList<$Holder_<$Biome>>): void;
    }
}
