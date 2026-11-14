import { $SchematicHandler, $SchematicTransformation } from "@package/com/simibubi/create/content/schematics/client";
import { $MutableComponent, $Component } from "@package/net/minecraft/network/chat";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $RaycastHelper$PredicateTraceResult } from "@package/com/simibubi/create/foundation/utility";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List } from "@package/java/util";
import { $SuperRenderTypeBuffer } from "@package/net/createmod/catnip/render";
import { $Predicate_ } from "@package/java/util/function";
import { $Direction } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LocalIntRef, $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $AllIcons } from "@package/com/simibubi/create/foundation/gui";
import { $Enum } from "@package/java/lang";
import { $Gui, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Vec3_, $AABB } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/content/schematics/client/tools" {
    export class $RotateTool extends $PlacementToolBase {
        constructor();
    }
    export class $ToolType extends $Enum<$ToolType> {
        getTool(): $ISchematicTool;
        static getTools(arg0: boolean): $List<$ToolType>;
        getDescription(): $List<$Component>;
        static values(): $ToolType[];
        static valueOf(arg0: string): $ToolType;
        getDisplayName(): $MutableComponent;
        getIcon(): $AllIcons;
        static PRINT: $ToolType;
        static MOVE: $ToolType;
        static ROTATE: $ToolType;
        static DEPLOY: $ToolType;
        static MOVE_Y: $ToolType;
        static FLIP: $ToolType;
        get tool(): $ISchematicTool;
        get description(): $List<$Component>;
        get displayName(): $MutableComponent;
        get icon(): $AllIcons;
    }
    /**
     * Values that may be interpreted as {@link $ToolType}.
     */
    export type $ToolType_ = "deploy" | "move" | "move_y" | "rotate" | "flip" | "print";
    export class $ISchematicTool {
    }
    export interface $ISchematicTool {
        updateSelection(): void;
        renderTool(arg0: $PoseStack, arg1: $SuperRenderTypeBuffer, arg2: $Vec3_): void;
        renderOnSchematic(arg0: $PoseStack, arg1: $SuperRenderTypeBuffer): void;
        handleRightClick(): boolean;
        handleMouseWheel(arg0: number): boolean;
        renderOverlay(arg0: $Gui, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number): void;
        init(): void;
    }
    export class $FlipTool extends $PlacementToolBase {
        constructor();
    }
    export class $MoveTool extends $PlacementToolBase {
        constructor();
    }
    export class $PlacementToolBase extends $SchematicToolBase {
        constructor();
    }
    export class $PlaceTool extends $SchematicToolBase {
        constructor();
    }
    export class $SchematicToolBase implements $ISchematicTool {
        redirect$fae000$create_pattern_schematics$getFacingResult(arg0: $RaycastHelper$PredicateTraceResult): $Direction;
        updateSelection(): void;
        renderTool(arg0: $PoseStack, arg1: $SuperRenderTypeBuffer, arg2: $Vec3_): void;
        renderOnSchematic(arg0: $PoseStack, arg1: $SuperRenderTypeBuffer): void;
        handler$fae000$create_pattern_schematics$renderOnSchematic(arg0: $CallbackInfo): void;
        wrapOperation$gdg000$sable$rayTraceSublevels(arg0: $Vec3_, arg1: $Vec3_, arg2: $Predicate_<any>, arg3: $Operation_<any>, arg4: $LocalPlayer, arg5: $SchematicTransformation): $RaycastHelper$PredicateTraceResult;
        handler$fae004$create_pattern_schematics$init(arg0: $CallbackInfo): void;
        updateTargetPos(): void;
        handler$gdg000$sable$forceUpdateSelection(arg0: $CallbackInfo, arg1: $Vec3_): void;
        redirect$fae000$create_pattern_schematics$getExtendedBounds(arg0: $SchematicHandler): $AABB;
        wrapOperation$gdg000$sable$rayTraceSublevels$mixinextras$bridge$15(arg0: $Vec3_, arg1: $Vec3_, arg2: $Predicate_<any>, arg3: $Operation_<any>, arg4: $LocalRef<any>, arg5: $LocalRef<any>): $RaycastHelper$PredicateTraceResult;
        renderOverlay(arg0: $Gui, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number): void;
        init(): void;
        constructor();
    }
    export class $MoveVerticalTool extends $PlacementToolBase {
        constructor();
    }
    export class $DeployTool extends $PlacementToolBase {
        wrapOperation$gdb000$sable$manualTransformBB(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: $Operation_<any>, arg5: number, arg6: number, arg7: $Vec3_): void;
        wrapOperation$gdb000$sable$manualTransformBB$mixinextras$bridge$8(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: $Operation_<any>, arg5: $LocalIntRef, arg6: $LocalIntRef, arg7: $LocalRef<any>): void;
        handler$epn000$create_pattern_schematics$renderTool(arg0: $CallbackInfo): void;
        constructor();
    }
}
