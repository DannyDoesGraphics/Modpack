import { $CrossShaftDoubleAxleBogeyDisplay, $DoubleAxleBogeyDisplay } from "@package/com/railwayteam/railways/content/custom_bogeys/renderer/standard/double_axle/base";
import { $ElementProvider } from "@package/com/railwayteam/railways/content/custom_bogeys/renderer/unified";
export * as base from "@package/com/railwayteam/railways/content/custom_bogeys/renderer/standard/double_axle/base";

declare module "@package/com/railwayteam/railways/content/custom_bogeys/renderer/standard/double_axle" {
    export class $ModernBogeyDisplay extends $DoubleAxleBogeyDisplay {
        constructor(arg0: $ElementProvider<never>);
    }
    export class $FreightBogeyDisplay extends $CrossShaftDoubleAxleBogeyDisplay {
        constructor(arg0: $ElementProvider<never>);
    }
    export class $BlombergBogeyDisplay extends $CrossShaftDoubleAxleBogeyDisplay {
        constructor(arg0: $ElementProvider<never>);
    }
    export class $ArchbarBogeyDisplay extends $CrossShaftDoubleAxleBogeyDisplay {
        constructor(arg0: $ElementProvider<never>);
    }
    export class $PassengerBogeyDisplay extends $DoubleAxleBogeyDisplay {
        constructor(arg0: $ElementProvider<never>);
    }
    export class $Y25BogeyDisplay extends $CrossShaftDoubleAxleBogeyDisplay {
        constructor(arg0: $ElementProvider<never>);
    }
}
