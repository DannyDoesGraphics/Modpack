import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $Supplier_, $Function_, $Function } from "@package/java/util/function";
import { $RenderSection, $TaskQueueType, $TaskQueueType_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ChunkRenderList, $SortedRenderLists } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists";
import { $ArrayDeque, $Map_, $Map } from "@package/java/util";

declare module "@package/foundry/veil/forge/ext" {
    export class $SodiumWorldRendererExtension {
    }
    export interface $SodiumWorldRendererExtension {
        veil$setSortedRenderLists(arg0: $SortedRenderLists): void;
        veil$getTaskLists(): $Map<$TaskQueueType, $ArrayDeque<$RenderSection>>;
        veil$setTaskLists(arg0: $Map_<$TaskQueueType_, $ArrayDeque<$RenderSection>>): void;
        veil$getSortedRenderLists(): $SortedRenderLists;
    }
    export class $DeferredRegisterExtensions<T> {
    }
    export interface $DeferredRegisterExtensions<T> {
        register<I extends T>(arg0: $ResourceLocation_, arg1: $Function_<$ResourceLocation, I>): $DeferredHolder<T, I>;
        register<I extends T>(arg0: $ResourceLocation_, arg1: $Supplier_<I>): $DeferredHolder<T, I>;
    }
    /**
     * Values that may be interpreted as {@link $DeferredRegisterExtensions}.
     */
    export type $DeferredRegisterExtensions_<T> = ((arg0: $ResourceLocation, arg1: $Function<$ResourceLocation, any>) => $DeferredHolder<T, any>);
    export class $RenderSectionExtension {
    }
    export interface $RenderSectionExtension {
        veil$hasNotRendered(): boolean;
        veil$markRendered(): void;
        veil$addIncomingDirections(arg0: number): void;
    }
    export class $RenderRegionExtension {
    }
    export interface $RenderRegionExtension {
        veil$getPerspectiveRenderList(): $ChunkRenderList;
    }
    /**
     * Values that may be interpreted as {@link $RenderRegionExtension}.
     */
    export type $RenderRegionExtension_ = (() => $ChunkRenderList);
}
