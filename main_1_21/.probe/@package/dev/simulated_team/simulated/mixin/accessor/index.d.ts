import { $SimpleBlockEntityVisualizer$Factory } from "@package/dev/engine_room/flywheel/lib/visualization";
import { $Predicate } from "@package/java/util/function";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos } from "@package/net/minecraft/core";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List, $List_ } from "@package/java/util";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $LinkBehaviour } from "@package/com/simibubi/create/content/redstone/link";
import { $NonNullSupplier } from "@package/com/tterrag/registrate/util/nullness";
import { $AABB, $AABB_ } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Parrot } from "@package/net/minecraft/world/entity/animal";

declare module "@package/dev/simulated_team/simulated/mixin/accessor" {
    export class $ParrotElementAccessor {
    }
    export interface $ParrotElementAccessor {
        getEntity(): $Parrot;
        get entity(): $Parrot;
    }
    /**
     * Values that may be interpreted as {@link $ParrotElementAccessor}.
     */
    export type $ParrotElementAccessor_ = (() => $Parrot);
    export class $LevelRendererAccessor {
        static invokeRenderShape(arg0: $PoseStack, arg1: $VertexConsumer, arg2: $VoxelShape, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
    }
    export interface $LevelRendererAccessor {
    }
    export class $ContraptionAccessor {
    }
    export interface $ContraptionAccessor {
        getSuperGlue(): $List<$AABB>;
        get superGlue(): $List<$AABB>;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionAccessor}.
     */
    export type $ContraptionAccessor_ = (() => $List_<$AABB_>);
    export class $ControlledContraptionEntityAccessor {
    }
    export interface $ControlledContraptionEntityAccessor {
        getControllerPos(): $BlockPos;
        invokeMakeStructureTransform(): $StructureTransform;
        get controllerPos(): $BlockPos;
    }
    export class $CreateBlockEntityBuilderAccessor<T extends $BlockEntity, P> {
    }
    export interface $CreateBlockEntityBuilderAccessor<T extends $BlockEntity, P> {
        getVisualFactory(): $NonNullSupplier<$SimpleBlockEntityVisualizer$Factory<T>>;
        getRenderNormally(): $Predicate<T>;
        get visualFactory(): $NonNullSupplier<$SimpleBlockEntityVisualizer$Factory<T>>;
        get renderNormally(): $Predicate<T>;
    }
    export class $KeyMappingsAccessor {
    }
    export interface $KeyMappingsAccessor {
        getKey(): $InputConstants$Key;
        get key(): $InputConstants$Key;
    }
    /**
     * Values that may be interpreted as {@link $KeyMappingsAccessor}.
     */
    export type $KeyMappingsAccessor_ = (() => $InputConstants$Key);
    export class $BlockBehaviourAccessor {
    }
    export interface $BlockBehaviourAccessor {
        getHasCollision(): boolean;
        get hasCollision(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviourAccessor}.
     */
    export type $BlockBehaviourAccessor_ = (() => boolean);
    export class $RedstoneLinkBlockEntityAccessor {
    }
    export interface $RedstoneLinkBlockEntityAccessor {
        getLink(): $LinkBehaviour;
        get link(): $LinkBehaviour;
    }
    /**
     * Values that may be interpreted as {@link $RedstoneLinkBlockEntityAccessor}.
     */
    export type $RedstoneLinkBlockEntityAccessor_ = (() => $LinkBehaviour);
    export class $CreativeModeInventoryScreenAccessor {
    }
    export interface $CreativeModeInventoryScreenAccessor {
        getLeftPos(): number;
        getTopPos(): number;
        get leftPos(): number;
        get topPos(): number;
    }
}
