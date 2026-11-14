import { $LerpedFloat } from "@package/net/createmod/catnip/animation";

declare module "@package/dev/ryanhcode/sable/neoforge/mixinhelper/compatibility/create/harvester" {
    export class $HarvesterLerpedSpeed {
    }
    export interface $HarvesterLerpedSpeed {
        sable$clientTick(): void;
        sable$getLerpedFloat(): $LerpedFloat;
    }
}
