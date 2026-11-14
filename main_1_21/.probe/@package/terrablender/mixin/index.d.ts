import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $Climate$ParameterList, $MultiNoiseBiomeSourceParameterList, $Biome } from "@package/net/minecraft/world/level/biome";

declare module "@package/terrablender/mixin" {
    export class $MultiNoiseBiomeSourceAccess {
    }
    export interface $MultiNoiseBiomeSourceAccess {
        getParameters(): $Either<$Climate$ParameterList<$Holder<$Biome>>, $Holder<$MultiNoiseBiomeSourceParameterList>>;
        setParameters(arg0: $Either<$Climate$ParameterList<$Holder_<$Biome>>, $Holder_<$MultiNoiseBiomeSourceParameterList>>): void;
    }
}
