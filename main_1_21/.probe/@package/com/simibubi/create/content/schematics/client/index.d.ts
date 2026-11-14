import { $File_ } from "@package/java/io";
import { $Translate, $PoseTransformStack } from "@package/dev/engine_room/flywheel/lib/transform";
import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $AABBOutline } from "@package/net/createmod/catnip/outliner";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $StructurePlaceSettings } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Minecraft, $DeltaTracker } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $SuperRenderTypeBuffer } from "@package/net/createmod/catnip/render";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Direction$Axis_ } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $SchematicLevel } from "@package/net/createmod/catnip/levelWrappers";
import { $LocalFloatRef, $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $Font, $GuiGraphics, $LayeredDraw$Layer } from "@package/net/minecraft/client/gui";
import { $Vec3_, $AABB_, $Vec3, $AABB, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $ToolType_, $ToolType } from "@package/com/simibubi/create/content/schematics/client/tools";
export * as tools from "@package/com/simibubi/create/content/schematics/client/tools";

declare module "@package/com/simibubi/create/content/schematics/client" {
    export class $SchematicRenderer$ThreadLocalObjects {
    }
    export class $SchematicPromptScreen extends $AbstractSimiScreen {
        init(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
    }
    export class $SchematicRenderer {
        update(): void;
        render(arg0: $PoseStack, arg1: $SuperRenderTypeBuffer): void;
        constructor(arg0: $SchematicLevel);
    }
    export class $SchematicTransformation {
        isFlipped(): boolean;
        rotate90(arg0: boolean): void;
        getAnchor(): $BlockPos;
        applyTransformations(arg0: $PoseStack, arg1: $Vec3_): void;
        getScaleLR(): $LerpedFloat;
        getScaleFB(): $LerpedFloat;
        toSettings(): $StructurePlaceSettings;
        getRotationOffset(arg0: boolean): $Vec3;
        getCurrentRotation(): number;
        toLocalSpace(arg0: $Vec3_): $Vec3;
        getMirrorModifier(arg0: $Direction$Axis_): number;
        getRotationTarget(): number;
        fromAnchor(arg0: $BlockPos_): $BlockPos;
        wrapOperation$ggk000$sable$transformFromSublevel$mixinextras$bridge$22(arg0: $PoseTransformStack, arg1: $Vec3_, arg2: $Operation_<any>, arg3: $LocalRef<any>, arg4: $LocalFloatRef, arg5: $LocalRef<any>): $Translate<any>;
        wrapOperation$ggk000$sable$transformFromSublevel(arg0: $PoseTransformStack, arg1: $Vec3_, arg2: $Operation_<any>, arg3: $Vec3_, arg4: number, arg5: $PoseStack): $Translate<any>;
        init(arg0: $BlockPos_, arg1: $StructurePlaceSettings, arg2: $AABB_): void;
        flip(arg0: $Direction$Axis_): void;
        move(arg0: number, arg1: number, arg2: number): void;
        tick(): void;
        startAt(arg0: $BlockPos_): void;
        moveTo(arg0: $BlockPos_): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        constructor();
        get flipped(): boolean;
        get anchor(): $BlockPos;
        get scaleLR(): $LerpedFloat;
        get scaleFB(): $LerpedFloat;
        get currentRotation(): number;
        get rotationTarget(): number;
    }
    export class $SchematicAndQuillHandler {
        saveSchematic(arg0: string, arg1: boolean): void;
        onMouseInput(arg0: number, arg1: boolean): boolean;
        wrapOperation$gdc000$sable$preventMovingSelectedOutOfPlot(arg0: $BlockHitResult, arg1: $Operation_<any>): $BlockPos;
        tick(): void;
        discard(): void;
        mouseScrolled(arg0: number): boolean;
        secondPos: $BlockPos;
        firstPos: $BlockPos;
        constructor();
    }
    export class $ClientSchematicLoader {
        getAvailableSchematics(): $List<$Component>;
        startNewUpload(arg0: string): void;
        static validateSizeLimitation(arg0: number): boolean;
        static isGZIPEncoded(arg0: $File_): boolean;
        refresh(): void;
        tick(): void;
        static PACKET_DELAY: number;
        constructor();
        get availableSchematics(): $List<$Component>;
    }
    export class $ToolSelectionScreen extends $Screen {
        setSelectedElement(arg0: $ToolType_): void;
        renderPassive(arg0: $GuiGraphics, arg1: number): void;
        update(): void;
        cycle(arg0: number): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        scrollToCycle: string;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        holdToFocus: string;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        focused: boolean;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $List_<$ToolType_>, arg1: $Consumer_<$ToolType>);
        set selectedElement(value: $ToolType_);
    }
    export class $SchematicHotbarSlotOverlay {
        renderOn(arg0: $GuiGraphics, arg1: number): void;
        constructor();
    }
    export class $SchematicHandler implements $LayeredDraw$Layer {
        markDirty(): void;
        equip(arg0: $ToolType_): void;
        loadSettings(arg0: $ItemStack_): void;
        onMouseInput(arg0: number, arg1: boolean): boolean;
        getTransformation(): $SchematicTransformation;
        isDeployed(): boolean;
        getCurrentSchematicName(): string;
        getActiveSchematicItem(): $ItemStack;
        deploy(): void;
        printInstantly(): void;
        getOutline(): $AABBOutline;
        getBounds(): $AABB;
        isActive(): boolean;
        sync(): void;
        tick(): void;
        render(arg0: $PoseStack, arg1: $SuperRenderTypeBuffer, arg2: $Vec3_): void;
        render(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        mouseScrolled(arg0: number): boolean;
        onKeyInput(arg0: number, arg1: boolean): void;
        updateRenderers(): void;
        constructor();
        get transformation(): $SchematicTransformation;
        get deployed(): boolean;
        get currentSchematicName(): string;
        get activeSchematicItem(): $ItemStack;
        get outline(): $AABBOutline;
        get bounds(): $AABB;
        get active(): boolean;
    }
    export class $SchematicEditScreen extends $AbstractSimiScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
    }
}
