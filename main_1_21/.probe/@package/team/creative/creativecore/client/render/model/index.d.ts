import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/team/creative/creativecore/client/render/model" {
    export class $CreativeQuadLighter {
    }
    export interface $CreativeQuadLighter {
        setState(arg0: $BlockState_): void;
        setCustomTint(arg0: number): void;
        set state(value: $BlockState_);
        set customTint(value: number);
    }
}
