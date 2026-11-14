import { $Event } from "@package/net/neoforged/bus/api";
import { $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $MapDecorationTextureManager } from "@package/net/minecraft/client/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $MapDecoration, $MapDecorationType_, $MapDecoration_, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Map_ } from "@package/java/util";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/net/neoforged/neoforge/client/gui/map" {
    export class $MapDecorationRendererManager {
        static init(): void;
        static render(decoration: $MapDecoration_, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, mapData: $MapItemSavedData, decorationTextures: $MapDecorationTextureManager, inItemFrame: boolean, packedLight: number, index: number): boolean;
    }
    /**
     * Interface for custom `MapDecoration` renderers
     */
    export class $IMapDecorationRenderer {
    }
    export interface $IMapDecorationRenderer {
        /**
         * Render the given `MapDecoration` on the map. If this method returns true, the vanilla rendering will be
         * canceled. Otherwise, it will render above whatever is rendered in this method, if anything
         */
        render(decoration: $MapDecoration_, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, mapData: $MapItemSavedData, decorationTextures: $MapDecorationTextureManager, inItemFrame: boolean, packedLight: number, index: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IMapDecorationRenderer}.
     */
    export type $IMapDecorationRenderer_ = ((arg0: $MapDecoration, arg1: $PoseStack, arg2: $MultiBufferSource, arg3: $MapItemSavedData, arg4: $MapDecorationTextureManager, arg5: boolean, arg6: number, arg7: number) => boolean);
    /**
     * Allows users to register custom decoration renderers for `MapDecoration`s
     * which require more dynamic rendering than a single texture on the map decoration atlas allows.
     * 
     * This event is not cancellable
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $RegisterMapDecorationRenderersEvent extends $Event implements $IModBusEvent {
        /**
         * Registers a decoration renderer for the given decoration type
         */
        register(type: $MapDecorationType_, renderer: $IMapDecorationRenderer_): void;
        constructor(renderers: $Map_<$MapDecorationType_, $IMapDecorationRenderer_>);
    }
}
