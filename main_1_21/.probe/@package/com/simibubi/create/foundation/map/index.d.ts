import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $MapDecorationTextureManager } from "@package/net/minecraft/client/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $IMapDecorationRenderer } from "@package/net/neoforged/neoforge/client/gui/map";
import { $MapDecoration_, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";

declare module "@package/com/simibubi/create/foundation/map" {
    export class $StationMapDecorationRenderer implements $IMapDecorationRenderer {
        render(arg0: $MapDecoration_, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: $MapItemSavedData, arg4: $MapDecorationTextureManager, arg5: boolean, arg6: number, arg7: number): boolean;
        constructor();
    }
}
