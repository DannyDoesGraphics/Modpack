import { $BlockPos_ } from "@package/net/minecraft/core";
import { $TickingInstruction } from "@package/net/createmod/ponder/foundation/instruction";

declare module "@package/com/simibubi/create/foundation/ponder/instruction" {
    export class $AnimateBlockEntityInstruction extends $TickingInstruction {
        static bearing(arg0: $BlockPos_, arg1: number, arg2: number): $AnimateBlockEntityInstruction;
        static pulley(arg0: $BlockPos_, arg1: number, arg2: number): $AnimateBlockEntityInstruction;
        static bogey(arg0: $BlockPos_, arg1: number, arg2: number): $AnimateBlockEntityInstruction;
        static deployer(arg0: $BlockPos_, arg1: number, arg2: number): $AnimateBlockEntityInstruction;
    }
}
