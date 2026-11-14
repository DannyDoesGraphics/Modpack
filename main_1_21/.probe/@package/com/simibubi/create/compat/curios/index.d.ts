import { $RenderLayerParent } from "@package/net/minecraft/client/renderer/entity";
import { $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $ICurioRenderer } from "@package/top/theillusivec4/curios/api/client";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ModelPart, $ModelLayerLocation } from "@package/net/minecraft/client/model/geom";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $PackOutput } from "@package/net/minecraft/data";
import { $EntityRenderersEvent$RegisterLayerDefinitions } from "@package/net/neoforged/neoforge/client/event";
import { $EntityModel } from "@package/net/minecraft/client/model";
import { $CuriosDataProvider, $SlotContext_ } from "@package/top/theillusivec4/curios/api";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $MeshDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/com/simibubi/create/compat/curios" {
    export class $Curios {
        static init(arg0: $IEventBus): void;
        constructor();
    }
    export class $CuriosDataGenerator extends $CuriosDataProvider {
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
    }
    export class $GogglesCurioRenderer implements $ICurioRenderer {
        static mesh(): $MeshDefinition;
        render<T extends $LivingEntity, M extends $EntityModel<T>>(arg0: $ItemStack_, arg1: $SlotContext_, arg2: $PoseStack, arg3: $RenderLayerParent<T, M>, arg4: $MultiBufferSource_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        static LAYER: $ModelLayerLocation;
        constructor(arg0: $ModelPart);
    }
    export class $CuriosRenderers {
        static onLayerRegister(arg0: $EntityRenderersEvent$RegisterLayerDefinitions): void;
        static register(): void;
        constructor();
    }
}
