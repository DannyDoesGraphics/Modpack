import { $FabricBakedModel } from "@package/net/fabricmc/fabric/api/renderer/v1/model";

declare module "@package/net/fabricmc/fabric/mixin/renderer/client" {
    export class $BakedModelMixin {
    }
    export interface $BakedModelMixin extends $FabricBakedModel {
    }
}
