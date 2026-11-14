import { $FabricBlockView } from "@package/net/fabricmc/fabric/api/blockview/v2";

declare module "@package/net/fabricmc/fabric/mixin/blockview" {
    export class $BlockViewMixin {
    }
    export interface $BlockViewMixin extends $FabricBlockView {
    }
}
