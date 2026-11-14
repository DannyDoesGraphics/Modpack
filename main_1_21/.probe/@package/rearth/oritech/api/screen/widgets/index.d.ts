import { $Consumer_, $BiConsumer_, $IntFunction_, $IntSupplier, $Supplier_, $IntSupplier_, $Supplier } from "@package/java/util/function";
import { $Vec3i } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $UIComponent, $OritechSurface_, $Insets_ } from "@package/rearth/oritech/api/screen";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Runnable_, $Enum, $Record } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/rearth/oritech/api/screen/widgets" {
    export class $BoxWidget extends $UIComponent {
        isFilled(): boolean;
        setFilled(arg0: boolean): void;
        setColor(arg0: number): void;
        static filled(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): $BoxWidget;
        getColor(): number;
        static outline(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): $BoxWidget;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean);
    }
    export class $SliderWidget$ValueLabelPosition extends $Enum<$SliderWidget$ValueLabelPosition> {
        static values(): $SliderWidget$ValueLabelPosition[];
        static valueOf(arg0: string): $SliderWidget$ValueLabelPosition;
        static END: $SliderWidget$ValueLabelPosition;
        static BEGIN: $SliderWidget$ValueLabelPosition;
    }
    /**
     * Values that may be interpreted as {@link $SliderWidget$ValueLabelPosition}.
     */
    export type $SliderWidget$ValueLabelPosition_ = "begin" | "end";
    export class $ToggleWidget extends $UIComponent {
        withTextShadow(arg0: boolean): $ToggleWidget;
        withTextColor(arg0: number): $ToggleWidget;
        setLabel(arg0: $Component_): void;
        getValue(): boolean;
        static of(arg0: number, arg1: number, arg2: $Component_, arg3: boolean, arg4: $BiConsumer_<$ToggleWidget, boolean>): $ToggleWidget;
        setValue(arg0: boolean): void;
        setActive(arg0: boolean): void;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Component_, arg4: boolean, arg5: $BiConsumer_<$ToggleWidget, boolean>);
        set label(value: $Component_);
        set active(value: boolean);
    }
    export class $TextureWidget extends $UIComponent {
        withVisibleArea(arg0: number, arg1: number, arg2: number, arg3: number): $TextureWidget;
        setVisibleArea(arg0: number, arg1: number, arg2: number, arg3: number): void;
        clearVisibleArea(): void;
        u: number;
        texture: $ResourceLocation;
        v: number;
        textureWidth: number;
        regionHeight: number;
        regionWidth: number;
        textureHeight: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $ResourceLocation_, arg5: number, arg6: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $ResourceLocation_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number);
    }
    export class $SliderWidget extends $UIComponent {
        setOrientation(arg0: $SliderWidget$Orientation_): void;
        getOrientation(): $SliderWidget$Orientation;
        setRange(arg0: number, arg1: number): void;
        withLogarithmicScale(arg0: boolean): $SliderWidget;
        withTextShadow(arg0: boolean): $SliderWidget;
        withTextColor(arg0: number): $SliderWidget;
        withOrientation(arg0: $SliderWidget$Orientation_): $SliderWidget;
        setValueLabelPosition(arg0: $SliderWidget$ValueLabelPosition_): void;
        withSnapValues(...arg0: number[]): $SliderWidget;
        withValueFormatter(arg0: $IntFunction_<$Component>): $SliderWidget;
        withTrackFillColor(arg0: number): $SliderWidget;
        withVertical(arg0: boolean): $SliderWidget;
        getValueLabelPosition(): $SliderWidget$ValueLabelPosition;
        withValueLabelPosition(arg0: $SliderWidget$ValueLabelPosition_): $SliderWidget;
        getMinValue(): number;
        getMaxValue(): number;
        getLength(): number;
        getValue(): number;
        setLength(arg0: number): void;
        setValue(arg0: number): void;
        isActive(): boolean;
        getTitle(): $Component;
        setActive(arg0: boolean): void;
        setTitle(arg0: $Component_): void;
        static KNOB_HOVER_COLOR: number;
        static KNOB_DISABLED_COLOR: number;
        static KNOB_OUTLINE: number;
        static DISABLED_TEXT_COLOR: number;
        static KNOB_COLOR: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $SliderWidget$Orientation_, arg4: $SliderWidget$ValueLabelPosition_, arg5: $Component_, arg6: number, arg7: number, arg8: number, arg9: $BiConsumer_<$SliderWidget, number>);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $SliderWidget$Orientation_, arg4: $Component_, arg5: number, arg6: number, arg7: number, arg8: $BiConsumer_<$SliderWidget, number>);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: number, arg6: number, arg7: number, arg8: $BiConsumer_<$SliderWidget, number>);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Component_, arg4: number, arg5: number, arg6: number, arg7: $BiConsumer_<$SliderWidget, number>);
        get minValue(): number;
        get maxValue(): number;
    }
    export class $LabelWidget extends $UIComponent {
        withAlignment(arg0: $LabelWidget$Alignment_): $LabelWidget;
        static getTextWidth(arg0: $Component_): number;
        withBrightColor(): $LabelWidget;
        withWrap(arg0: boolean): $LabelWidget;
        withDarkColor(): $LabelWidget;
        withShadow(arg0: boolean): $LabelWidget;
        getText(): $Component;
        setText(arg0: $Component_): void;
        withColor(arg0: number): $LabelWidget;
        static DARK_TEXT: number;
        static BRIGHT_TEXT: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Component_);
    }
    export class $ButtonWidget extends $UIComponent {
        static panel(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Consumer_<$ButtonWidget>): $ButtonWidget;
        withTextShadow(arg0: boolean): $ButtonWidget;
        withTextColor(arg0: number): $ButtonWidget;
        withSurfacePadding(arg0: $Insets_): $ButtonWidget;
        static darkPanel(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Consumer_<$ButtonWidget>): $ButtonWidget;
        setLabel(arg0: $Component_): void;
        getLabel(): $Component;
        isActive(): boolean;
        setActive(arg0: boolean): void;
        static DISABLED_COLOR: number;
        static DEFAULT_TEXT_COLOR: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Consumer_<$ButtonWidget>);
    }
    export class $SliderWidget$Orientation extends $Enum<$SliderWidget$Orientation> {
        static values(): $SliderWidget$Orientation[];
        static valueOf(arg0: string): $SliderWidget$Orientation;
        static VERTICAL: $SliderWidget$Orientation;
        static HORIZONTAL: $SliderWidget$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $SliderWidget$Orientation}.
     */
    export type $SliderWidget$Orientation_ = "horizontal" | "vertical";
    export class $ItemSlotWidget extends $UIComponent {
        static ITEM_SLOT_TEXTURE: $ResourceLocation;
        constructor(arg0: number, arg1: number);
    }
    export class $ScrollWidget extends $UIComponent {
        getScrollX(): number;
        getScrollY(): number;
        setContentDimensions(arg0: number, arg1: number): void;
        withVerticalScroll(arg0: boolean): $ScrollWidget;
        withHorizontalScroll(arg0: boolean): $ScrollWidget;
        withScrollSpeed(arg0: number): $ScrollWidget;
        withDragScrolling(arg0: boolean): $ScrollWidget;
        getTopmostHovered(arg0: number, arg1: number): $UIComponent;
        handleMouseScroll(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        addChild(arg0: $UIComponent): void;
        getChildren(): $List<$UIComponent>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get scrollX(): number;
        get scrollY(): number;
        get children(): $List<$UIComponent>;
    }
    export class $SurfaceWidget extends $UIComponent {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $OritechSurface_);
    }
    export class $BlockWidget extends $UIComponent {
        withRotation(arg0: number, arg1: number): $BlockWidget;
        appleRotation(arg0: $PoseStack): void;
        withMouseRotation(arg0: number): $BlockWidget;
        getState(): $BlockState;
        setState(arg0: $BlockState_): void;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $BlockState_);
    }
    export class $ItemWidget extends $UIComponent {
        withShowOverlay(arg0: boolean): $ItemWidget;
        withTooltipFromStack(arg0: boolean): $ItemWidget;
        getStack(): $ItemStack;
        setStack(arg0: $ItemStack_): void;
        constructor(arg0: number, arg1: number, arg2: $ItemStack_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $ItemStack_);
    }
    export class $BlockPreviewWidget$BlockEntry extends $Record {
        entity(): $BlockEntity;
        offset(): $Vec3i;
        state(): $BlockState;
        constructor(state: $BlockState_, entity: $BlockEntity, offset: $Vec3i);
    }
    /**
     * Values that may be interpreted as {@link $BlockPreviewWidget$BlockEntry}.
     */
    export type $BlockPreviewWidget$BlockEntry_ = { offset?: $Vec3i, entity?: $BlockEntity, state?: $BlockState_,  } | [offset?: $Vec3i, entity?: $BlockEntity, state?: $BlockState_, ];
    export class $BlockPreviewWidget extends $UIComponent {
        addBlock(arg0: $BlockState_, arg1: $BlockEntity, arg2: $Vec3i): void;
        withRotationSpeed(arg0: number): $BlockPreviewWidget;
        clearBlocks(): void;
        calculateSize(): void;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $SpriteWidget extends $UIComponent {
        setSprite(arg0: $TextureAtlasSprite): void;
        setColor(arg0: number): void;
        getSprite(): $TextureAtlasSprite;
        getColor(): number;
        withColor(arg0: number): $SpriteWidget;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $TextureAtlasSprite);
    }
    export class $LabelWidget$Alignment extends $Enum<$LabelWidget$Alignment> {
        static values(): $LabelWidget$Alignment[];
        static valueOf(arg0: string): $LabelWidget$Alignment;
        static CENTER: $LabelWidget$Alignment;
        static LEFT: $LabelWidget$Alignment;
        static RIGHT: $LabelWidget$Alignment;
    }
    /**
     * Values that may be interpreted as {@link $LabelWidget$Alignment}.
     */
    export type $LabelWidget$Alignment_ = "left" | "center" | "right";
    export class $OverlayWidget extends $UIComponent {
        withBackgroundColor(arg0: number): $OverlayWidget;
        withDismissHandler(arg0: $Runnable_): $OverlayWidget;
        withConsumeOutsideClicks(arg0: boolean): $OverlayWidget;
        withConsumeOutsideScroll(arg0: boolean): $OverlayWidget;
        getTopmostHovered(arg0: number, arg1: number): $UIComponent;
        addChild(arg0: $UIComponent): void;
        getChildren(): $List<$UIComponent>;
        constructor(arg0: number, arg1: number);
        get children(): $List<$UIComponent>;
    }
    export class $ProgressBarWidget extends $UIComponent {
        withTextShadow(arg0: boolean): $ProgressBarWidget;
        withTextColor(arg0: number): $ProgressBarWidget;
        withPulsing(arg0: boolean): $ProgressBarWidget;
        getFillSupplier(): $Supplier<number>;
        setFillSupplier(arg0: $Supplier_<number>): void;
        getFillColorSupplier(): $IntSupplier;
        setFillColorSupplier(arg0: $IntSupplier_): void;
        getTitle(): $Component;
        setTitle(arg0: $Component_): void;
        static BAR_BACKGROUND: number;
        static PRESET_GRAY: number;
        static BAR_OUTLINE: number;
        static BAR_END_MARKER: number;
        static BAR_MARKER: number;
        static PRESET_BLUE: number;
        static PRESET_GREEN: number;
        static PRESET_ORANGE: number;
        static DEFAULT_TEXT_COLOR: number;
        static PRESET_RED: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Component_, arg4: $Supplier_<number>, arg5: $IntSupplier_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Supplier_<number>, arg6: $IntSupplier_);
    }
}
