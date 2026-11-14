import { $SingleAxleBogeyDisplay } from "@package/com/railwayteam/railways/content/custom_bogeys/renderer/standard/single_axle/base";
import { $ElementProvider } from "@package/com/railwayteam/railways/content/custom_bogeys/renderer/unified";
export * as base from "@package/com/railwayteam/railways/content/custom_bogeys/renderer/standard/single_axle/base";

declare module "@package/com/railwayteam/railways/content/custom_bogeys/renderer/standard/single_axle" {
    export class $CoilspringBogeyDisplay extends $SingleAxleBogeyDisplay {
        constructor(arg0: $ElementProvider<never>);
    }
    export class $LeafspringBogeyDisplay extends $SingleAxleBogeyDisplay {
        constructor(arg0: $ElementProvider<never>);
    }
    export class $SingleaxleBogeyDisplay extends $SingleAxleBogeyDisplay {
        constructor(arg0: $ElementProvider<never>);
    }
}
