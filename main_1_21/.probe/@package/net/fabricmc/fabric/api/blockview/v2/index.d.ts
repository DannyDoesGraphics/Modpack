import { $Holder, $BlockPos_ } from "@package/net/minecraft/core";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $Object } from "@package/java/lang";

declare module "@package/net/fabricmc/fabric/api/blockview/v2" {
    export class $RenderDataBlockEntity {
    }
    export interface $RenderDataBlockEntity {
        getRenderData(): $Object;
        get renderData(): $Object;
    }
    export class $FabricBlockView {
    }
    export interface $FabricBlockView {
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
    }
}
