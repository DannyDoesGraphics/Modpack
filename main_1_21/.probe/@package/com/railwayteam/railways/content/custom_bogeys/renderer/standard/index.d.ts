import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ElementProvider, $BogeyDisplay$EntityAware } from "@package/com/railwayteam/railways/content/custom_bogeys/renderer/unified";
import { $CarriageContraptionEntity } from "@package/com/simibubi/create/content/trains/entity";
export * as medium from "@package/com/railwayteam/railways/content/custom_bogeys/renderer/standard/medium";
export * as double_axle from "@package/com/railwayteam/railways/content/custom_bogeys/renderer/standard/double_axle";
export * as large from "@package/com/railwayteam/railways/content/custom_bogeys/renderer/standard/large";
export * as triple_axle from "@package/com/railwayteam/railways/content/custom_bogeys/renderer/standard/triple_axle";
export * as single_axle from "@package/com/railwayteam/railways/content/custom_bogeys/renderer/standard/single_axle";

declare module "@package/com/railwayteam/railways/content/custom_bogeys/renderer/standard" {
    export class $HandcarBogeyDisplay implements $BogeyDisplay$EntityAware {
        entityUpdate(arg0: $CarriageContraptionEntity): void;
        update(arg0: $CompoundTag_, arg1: number): void;
        constructor(arg0: $ElementProvider<never>);
    }
}
