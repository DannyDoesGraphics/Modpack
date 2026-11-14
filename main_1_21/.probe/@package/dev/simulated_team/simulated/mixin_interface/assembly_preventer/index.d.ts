import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";

declare module "@package/dev/simulated_team/simulated/mixin_interface/assembly_preventer" {
    export class $PrimaryAssemblerExtension {
    }
    export interface $PrimaryAssemblerExtension {
        simulated$setPrimaryAssembler(arg0: $BlockPos_): void;
        simulated$getPrimaryAssembler(): $BlockPos;
    }
}
