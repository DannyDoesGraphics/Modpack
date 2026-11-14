import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $BogeyDisplay, $ElementProvider } from "@package/com/railwayteam/railways/content/custom_bogeys/renderer/unified";

declare module "@package/com/railwayteam/railways/content/custom_bogeys/renderer/standard/triple_axle/base" {
    export class $TripleAxleBogeyDisplay implements $BogeyDisplay {
        update(arg0: $CompoundTag_, arg1: number): void;
        constructor(arg0: $ElementProvider<never>, arg1: $PartialModel, arg2: $PartialModel, arg3: boolean);
    }
}
