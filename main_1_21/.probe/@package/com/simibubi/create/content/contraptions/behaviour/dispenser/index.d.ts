import { $BlockPos_ } from "@package/net/minecraft/core";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $ContraptionMatrices, $ActorVisual } from "@package/com/simibubi/create/content/contraptions/render";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
export * as storage from "@package/com/simibubi/create/content/contraptions/behaviour/dispenser/storage";

declare module "@package/com/simibubi/create/content/contraptions/behaviour/dispenser" {
    export class $DropperMovementBehaviour implements $MovementBehaviour {
        visitNewPosition(arg0: $MovementContext, arg1: $BlockPos_): void;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        startMoving(arg0: $MovementContext): void;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        onDisabledByControls(arg0: $MovementContext): void;
        mustTickWhileDisabled(): boolean;
        onSpeedChanged(arg0: $MovementContext, arg1: $Vec3_, arg2: $Vec3_): void;
        cancelStall(arg0: $MovementContext): void;
        collectOrDropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        getActiveAreaOffset(arg0: $MovementContext): $Vec3;
        disableBlockEntityRendering(): boolean;
        stopMoving(arg0: $MovementContext): void;
        writeExtraData(arg0: $MovementContext): void;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        createVisual(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext): $ActorVisual;
        isActive(arg0: $MovementContext): boolean;
        tick(arg0: $MovementContext): void;
        constructor();
    }
    export class $DispenserMovementBehaviour extends $DropperMovementBehaviour {
        constructor();
    }
}
