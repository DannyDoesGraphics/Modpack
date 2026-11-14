import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/net/mehvahdjukaar/moonlight/api/block" {
    export class $IBlockHolder {
    }
    export interface $IBlockHolder {
        getHeldBlock(): $BlockState;
        getHeldBlock(arg0: number): $BlockState;
        setHeldBlock(arg0: $BlockState_, arg1: number): boolean;
        setHeldBlock(arg0: $BlockState_): boolean;
    }
}
