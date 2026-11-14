import { $CompatTrackBlockStateGenerator, $NarrowGaugeCompatTrackBlockStateGenerator, $WideGaugeCompatTrackBlockStateGenerator } from "@package/com/railwayteam/railways/compat/tracks";

declare module "@package/com/railwayteam/railways/compat/tracks/neoforge" {
    export class $NarrowGaugeCompatTrackBlockStateGeneratorImpl extends $NarrowGaugeCompatTrackBlockStateGenerator {
        constructor();
    }
    export class $WideGaugeCompatTrackBlockStateGeneratorImpl extends $WideGaugeCompatTrackBlockStateGenerator {
        constructor();
    }
    export class $CompatTrackBlockStateGeneratorImpl extends $CompatTrackBlockStateGenerator {
        constructor();
    }
}
