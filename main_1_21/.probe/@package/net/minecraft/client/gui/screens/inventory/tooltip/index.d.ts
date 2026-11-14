import { $OrderedTextTooltipComponentAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $ProfileResult_, $ProfileResult } from "@package/com/mojang/authlib/yggdrasil";
import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $BundleContents } from "@package/net/minecraft/world/item/component";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Matrix4f, $Vector2ic } from "@package/org/joml";
import { $FormattedCharSequence, $FormattedCharSequence_ } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/client/gui/screens/inventory/tooltip" {
    export class $ClientActivePlayersTooltip$ActivePlayersTooltip extends $Record implements $TooltipComponent {
        profiles(): $List<$ProfileResult>;
        constructor(arg0: $List_<$ProfileResult_>);
    }
    /**
     * Values that may be interpreted as {@link $ClientActivePlayersTooltip$ActivePlayersTooltip}.
     */
    export type $ClientActivePlayersTooltip$ActivePlayersTooltip_ = { profiles?: $List_<$ProfileResult_>,  } | [profiles?: $List_<$ProfileResult_>, ];
    export class $DefaultTooltipPositioner implements $ClientTooltipPositioner {
        positionTooltip(screenWidth: number, screenHeight: number, mouseX: number, mouseY: number, tooltipWidth: number, tooltipHeight: number): $Vector2ic;
        static INSTANCE: $ClientTooltipPositioner;
    }
    export class $ClientTooltipPositioner {
    }
    export interface $ClientTooltipPositioner {
        positionTooltip(screenWidth: number, screenHeight: number, mouseX: number, mouseY: number, tooltipWidth: number, tooltipHeight: number): $Vector2ic;
    }
    /**
     * Values that may be interpreted as {@link $ClientTooltipPositioner}.
     */
    export type $ClientTooltipPositioner_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => $Vector2ic);
    export class $ClientBundleTooltip$Texture extends $Enum<$ClientBundleTooltip$Texture> {
    }
    /**
     * Values that may be interpreted as {@link $ClientBundleTooltip$Texture}.
     */
    export type $ClientBundleTooltip$Texture_ = "blocked_slot" | "slot";
    export class $ClientTooltipComponent {
        static create(text: $FormattedCharSequence_): $ClientTooltipComponent;
        static create(visualTooltipComponent: $TooltipComponent): $ClientTooltipComponent;
    }
    export interface $ClientTooltipComponent {
        renderText(font: $Font, mouseX: number, mouseY: number, matrix: $Matrix4f, bufferSource: $MultiBufferSource$BufferSource): void;
        renderImage(font: $Font, x: number, y: number, guiGraphics: $GuiGraphics): void;
        getWidth(font: $Font): number;
        getHeight(): number;
        get height(): number;
    }
    export class $BelowOrAboveWidgetTooltipPositioner implements $ClientTooltipPositioner {
        positionTooltip(screenWidth: number, screenHeight: number, mouseX: number, mouseY: number, tooltipWidth: number, tooltipHeight: number): $Vector2ic;
        constructor(screenRectangle: $ScreenRectangle_);
    }
    export class $ClientBundleTooltip implements $ClientTooltipComponent {
        renderImage(font: $Font, x: number, y: number, guiGraphics: $GuiGraphics): void;
        getWidth(font: $Font): number;
        getHeight(): number;
        renderText(font: $Font, mouseX: number, mouseY: number, matrix: $Matrix4f, bufferSource: $MultiBufferSource$BufferSource): void;
        constructor(contents: $BundleContents);
        get height(): number;
    }
    export class $ClientActivePlayersTooltip implements $ClientTooltipComponent {
        renderImage(font: $Font, x: number, y: number, guiGraphics: $GuiGraphics): void;
        getWidth(font: $Font): number;
        getHeight(): number;
        renderText(font: $Font, mouseX: number, mouseY: number, matrix: $Matrix4f, bufferSource: $MultiBufferSource$BufferSource): void;
        constructor(tooltip: $ClientActivePlayersTooltip$ActivePlayersTooltip_);
        get height(): number;
    }
    export class $TooltipRenderUtil {
        static renderTooltipBackground(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        static renderTooltipBackground(guiGraphics: $GuiGraphics, x: number, y: number, length: number, z: number, color: number): void;
        static MOUSE_OFFSET: number;
        static PADDING_LEFT: number;
        static PADDING_RIGHT: number;
        static PADDING_TOP: number;
        static PADDING_BOTTOM: number;
        constructor();
    }
    export class $MenuTooltipPositioner implements $ClientTooltipPositioner {
        positionTooltip(screenWidth: number, screenHeight: number, mouseX: number, mouseY: number, tooltipWidth: number, tooltipHeight: number): $Vector2ic;
        static MAX_OVERLAP_WITH_WIDGET: number;
        static MAX_DISTANCE_TO_WIDGET: number;
        constructor(screenRectangle: $ScreenRectangle_);
    }
    export class $ClientTextTooltip implements $ClientTooltipComponent, $OrderedTextTooltipComponentAccessor {
        renderText(font: $Font, mouseX: number, mouseY: number, matrix: $Matrix4f, bufferSource: $MultiBufferSource$BufferSource): void;
        getWidth(font: $Font): number;
        getHeight(): number;
        renderImage(font: $Font, x: number, y: number, guiGraphics: $GuiGraphics): void;
        getText(): $FormattedCharSequence;
        constructor(text: $FormattedCharSequence_);
        get height(): number;
        get text(): $FormattedCharSequence;
    }
}
