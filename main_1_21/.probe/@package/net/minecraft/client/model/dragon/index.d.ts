import { $SkullModelBase } from "@package/net/minecraft/client/model";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";

declare module "@package/net/minecraft/client/model/dragon" {
    export class $DragonHeadModel extends $SkullModelBase {
        static createHeadLayer(): $LayerDefinition;
        constructor(root: $ModelPart);
    }
}
