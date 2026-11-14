import { $ImmutableList } from "@package/com/google/common/collect";
import { $Schema } from "@package/com/mojang/datafixers/schemas";
import { $DataFix, $TypeRewriteRule } from "@package/com/mojang/datafixers";

declare module "@package/com/railwayteam/railways/base/datafixers" {
    export class $StreamlinedSmokeStackFacingFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: string);
    }
    export class $CompatCherryTrackFix extends $DataFix {
        static narrowCherryOld: $ImmutableList<string>;
        static standardCherryOld: $ImmutableList<string>;
        static wideCherryOld: $ImmutableList<string>;
        constructor(arg0: $Schema, arg1: string);
    }
    export class $UpsideDownMonoBogeyFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: string);
    }
    export class $LocoMetalSmokeboxFacingFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(arg0: $Schema, arg1: string);
    }
}
