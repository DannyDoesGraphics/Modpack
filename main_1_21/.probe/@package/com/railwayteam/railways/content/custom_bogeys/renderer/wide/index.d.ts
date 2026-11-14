import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $BogeyDisplay, $ElementProvider } from "@package/com/railwayteam/railways/content/custom_bogeys/renderer/unified";

declare module "@package/com/railwayteam/railways/content/custom_bogeys/renderer/wide" {
    export class $WideComicallyLargeScotchYokeBogeyDisplay implements $BogeyDisplay {
        update(arg0: $CompoundTag_, arg1: number): void;
        constructor(arg0: $ElementProvider<never>);
    }
    export class $WideScotchYokeBogeyDisplay implements $BogeyDisplay {
        update(arg0: $CompoundTag_, arg1: number): void;
        constructor(arg0: $ElementProvider<never>);
    }
    export class $WideDefaultBogeyDisplay implements $BogeyDisplay {
        update(arg0: $CompoundTag_, arg1: number): void;
        constructor(arg0: $ElementProvider<never>);
    }
}
