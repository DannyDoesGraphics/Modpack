import { $EntityModel } from "@package/net/minecraft/client/model";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";

declare module "@package/net/mehvahdjukaar/moonlight/api/client/model" {
    export class $IModelPartExtension {
        static getRootPart(arg0: $EntityModel<never>): $ModelPart;
        static getTextureSize(arg0: $EntityModel<never>): number[];
    }
    export interface $IModelPartExtension {
        moonlight$setDimensions(arg0: number, arg1: number): void;
        moonlight$getTextHeight(): number;
        moonlight$getTextWidth(): number;
    }
}
