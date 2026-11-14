import { $Holder } from "@package/net/minecraft/core";
import { $BoilerGenerator } from "@package/com/railwayteam/railways/content/palettes/boiler";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";

declare module "@package/com/railwayteam/railways/content/palettes/boiler/neoforge" {
    export class $BoilerBlockPlacementHelperImpl {
        static getAttribute(): $Holder<$Attribute>;
        constructor();
        static get attribute(): $Holder<$Attribute>;
    }
    export class $BoilerGeneratorImpl extends $BoilerGenerator {
    }
    export class $BoilerBigOutlinesImpl {
        static getRange(arg0: $Player): number;
        constructor();
    }
}
