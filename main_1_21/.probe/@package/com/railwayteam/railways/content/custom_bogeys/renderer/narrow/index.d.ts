import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $BogeyDisplay, $ElementProvider } from "@package/com/railwayteam/railways/content/custom_bogeys/renderer/unified";

declare module "@package/com/railwayteam/railways/content/custom_bogeys/renderer/narrow" {
    export class $NarrowDoubleScotchYokeBogeyDisplay implements $BogeyDisplay {
        update(arg0: $CompoundTag_, arg1: number): void;
        constructor(arg0: $ElementProvider<never>);
    }
    export class $NarrowSmallBogeyDisplay implements $BogeyDisplay {
        update(arg0: $CompoundTag_, arg1: number): void;
        constructor(arg0: $ElementProvider<never>);
    }
    export class $NarrowScotchYokeBogeyDisplay implements $BogeyDisplay {
        update(arg0: $CompoundTag_, arg1: number): void;
        constructor(arg0: $ElementProvider<never>);
    }
}
