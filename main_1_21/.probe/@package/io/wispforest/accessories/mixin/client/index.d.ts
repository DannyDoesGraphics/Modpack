import { $EntityModel } from "@package/net/minecraft/client/model";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $ModelPart, $ModelPart$Cube } from "@package/net/minecraft/client/model/geom";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $List_, $Map, $List } from "@package/java/util";

declare module "@package/io/wispforest/accessories/mixin/client" {
    export class $AbstractContainerScreenAccessor {
    }
    export interface $AbstractContainerScreenAccessor {
        accessories$getClickedSlot(): $Slot;
        accessories$getDraggingItem(): $ItemStack;
        accessories$isSplittingStack(): boolean;
        accessories$getQuickCraftingType(): number;
        accessories$recalculateQuickCraftRemaining(): void;
        accessories$leftPos(): number;
        accessories$topPos(): number;
    }
    export class $GuiGraphicsAccessor {
    }
    export interface $GuiGraphicsAccessor {
        callBlitSprite(arg0: $TextureAtlasSprite, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $GuiGraphicsAccessor}.
     */
    export type $GuiGraphicsAccessor_ = ((arg0: $TextureAtlasSprite, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => void);
    export class $LivingEntityRendererAccessor<T extends $LivingEntity, M extends $EntityModel<T>> {
    }
    export interface $LivingEntityRendererAccessor<T extends $LivingEntity, M extends $EntityModel<T>> {
        getLayers(): $List<$RenderLayer<T, M>>;
        get layers(): $List<$RenderLayer<T, M>>;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityRendererAccessor}.
     */
    export type $LivingEntityRendererAccessor_<T, M> = (() => $List_<$RenderLayer<T, M>>);
    export class $ModelPartAccessor {
    }
    export interface $ModelPartAccessor {
        getCubes(): $List<$ModelPart$Cube>;
        getChildren(): $Map<string, $ModelPart>;
        get cubes(): $List<$ModelPart$Cube>;
        get children(): $Map<string, $ModelPart>;
    }
}
