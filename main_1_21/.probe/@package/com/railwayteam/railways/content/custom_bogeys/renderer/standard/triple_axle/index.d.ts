import { $TripleAxleBogeyDisplay } from "@package/com/railwayteam/railways/content/custom_bogeys/renderer/standard/triple_axle/base";
import { $ElementProvider } from "@package/com/railwayteam/railways/content/custom_bogeys/renderer/unified";
export * as base from "@package/com/railwayteam/railways/content/custom_bogeys/renderer/standard/triple_axle/base";

declare module "@package/com/railwayteam/railways/content/custom_bogeys/renderer/standard/triple_axle" {
    export class $HeavyweightBogeyDisplay extends $TripleAxleBogeyDisplay {
        constructor(arg0: $ElementProvider<never>);
    }
    export class $RadialBogeyDisplay extends $TripleAxleBogeyDisplay {
        constructor(arg0: $ElementProvider<never>);
    }
}
