import { $EmiIngredient } from "@package/dev/emi/emi/api/stack";
import { $GlobalMixin } from "@package/dev/emi/emi/mixin";
import { $BiFunction, $Supplier_, $Function_, $BiFunction_, $BooleanSupplier_ } from "@package/java/util/function";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $EmiTexture } from "@package/dev/emi/emi/api/render";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $EmiRecipe } from "@package/dev/emi/emi/api/recipe";
import { $Enum, $Record } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Random, $List, $List_ } from "@package/java/util";
import { $FormattedCharSequence_ } from "@package/net/minecraft/util";

declare module "@package/dev/emi/emi/api/widget" {
    export class $TankWidget extends $SlotWidget implements $GlobalMixin {
        constructor(stack: $EmiIngredient, x: number, y: number, width: number, height: number, capacity: number);
    }
    export class $DrawableWidget extends $Widget implements $WidgetTooltipHolder<$DrawableWidget>, $GlobalMixin {
        tooltipText(tooltip: $List_<$Component_>): $DrawableWidget;
        tooltipText(tooltipSupplier: $BiFunction_<number, number, $List<$Component>>): $DrawableWidget;
        tooltip(tooltip: $List_<$ClientTooltipComponent>): $DrawableWidget;
        constructor(x: number, y: number, w: number, h: number, consumer: $DrawableWidget$DrawableWidgetConsumer_);
    }
    export class $Widget implements $Renderable, $GlobalMixin {
        getBounds(): $Bounds;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        getTooltip(mouseX: number, mouseY: number): $List<$ClientTooltipComponent>;
        mouseClicked(mouseX: number, mouseY: number, button: number): boolean;
        constructor();
        get bounds(): $Bounds;
    }
    export class $TextureWidget extends $Widget implements $WidgetTooltipHolder<$TextureWidget>, $GlobalMixin {
        tooltipText(tooltip: $List_<$Component_>): $TextureWidget;
        tooltipText(tooltipSupplier: $BiFunction_<number, number, $List<$Component>>): $TextureWidget;
        tooltip(tooltip: $List_<$ClientTooltipComponent>): $TextureWidget;
        constructor(texture: $ResourceLocation_, x: number, y: number, width: number, height: number, u: number, v: number, regionWidth: number, regionHeight: number, textureWidth: number, textureHeight: number);
        constructor(texture: $ResourceLocation_, x: number, y: number, width: number, height: number, u: number, v: number);
    }
    export class $SlotWidget extends $Widget implements $GlobalMixin {
        drawBack(drawBack: boolean): $SlotWidget;
        drawOverlay(draw: $GuiGraphics, mouseX: number, mouseY: number, delta: number): void;
        shouldDrawSlotHighlight(mouseX: number, mouseY: number): boolean;
        drawSlotHighlight(draw: $GuiGraphics, bounds: $Bounds_): void;
        drawStack(draw: $GuiGraphics, mouseX: number, mouseY: number, delta: number): void;
        backgroundTexture(id: $ResourceLocation_, u: number, v: number): $SlotWidget;
        large(large: boolean): $SlotWidget;
        getRecipe(): $EmiRecipe;
        appendTooltip(supplier: $Supplier_<$ClientTooltipComponent>): $SlotWidget;
        appendTooltip(text: $Component_): $SlotWidget;
        appendTooltip(arg0: $Function_<$EmiIngredient, $ClientTooltipComponent>): $SlotWidget;
        catalyst(catalyst: boolean): $SlotWidget;
        recipeContext(recipe: $EmiRecipe): $SlotWidget;
        customBackground(id: $ResourceLocation_, u: number, v: number, width: number, height: number): $SlotWidget;
        getStack(): $EmiIngredient;
        drawBackground(draw: $GuiGraphics, mouseX: number, mouseY: number, delta: number): void;
        constructor(stack: $EmiIngredient, x: number, y: number);
        get recipe(): $EmiRecipe;
        get stack(): $EmiIngredient;
    }
    export class $ButtonWidget$ClickAction {
    }
    export interface $ButtonWidget$ClickAction extends $GlobalMixin {
        click(arg0: number, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ButtonWidget$ClickAction}.
     */
    export type $ButtonWidget$ClickAction_ = ((arg0: number, arg1: number, arg2: number) => void);
    export class $TextWidget extends $Widget implements $GlobalMixin {
        verticalAlign(alignment: $TextWidget$Alignment_): $TextWidget;
        horizontalAlign(alignment: $TextWidget$Alignment_): $TextWidget;
        constructor(text: $FormattedCharSequence_, x: number, y: number, color: number, shadow: boolean);
    }
    export class $Bounds extends $Record implements $GlobalMixin {
        overlap(another: $Bounds_): $Bounds;
        bottom(): number;
        x(): number;
        contains(x: number, y: number): boolean;
        empty(): boolean;
        top(): number;
        y(): number;
        left(): number;
        right(): number;
        width(): number;
        height(): number;
        static EMPTY: $Bounds;
        constructor(x: number, y: number, width: number, height: number);
    }
    /**
     * Values that may be interpreted as {@link $Bounds}.
     */
    export type $Bounds_ = { y?: number, x?: number, height?: number, width?: number,  } | [y?: number, x?: number, height?: number, width?: number, ];
    export class $WidgetTooltipHolder<T> {
    }
    export interface $WidgetTooltipHolder<T> extends $GlobalMixin {
        tooltipText(tooltip: $List_<$Component_>): T;
        tooltipText(tooltipSupplier: $BiFunction_<number, number, $List<$Component>>): T;
        tooltip(tooltip: $List_<$ClientTooltipComponent>): T;
        tooltip(arg0: $BiFunction_<number, number, $List<$ClientTooltipComponent>>): T;
    }
    /**
     * Values that may be interpreted as {@link $WidgetTooltipHolder}.
     */
    export type $WidgetTooltipHolder_<T> = ((arg0: $BiFunction<number, number, $List<$ClientTooltipComponent>>) => T);
    export class $AnimatedTextureWidget extends $TextureWidget implements $GlobalMixin {
        constructor(texture: $ResourceLocation_, x: number, y: number, width: number, height: number, u: number, v: number, regionWidth: number, regionHeight: number, textureWidth: number, textureHeight: number, time: number, horizontal: boolean, endToStart: boolean, fullToEmpty: boolean);
        constructor(texture: $ResourceLocation_, x: number, y: number, width: number, height: number, u: number, v: number, time: number, horizontal: boolean, endToStart: boolean, fullToEmpty: boolean);
    }
    export class $DrawableWidget$DrawableWidgetConsumer {
    }
    export interface $DrawableWidget$DrawableWidgetConsumer extends $GlobalMixin {
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $DrawableWidget$DrawableWidgetConsumer}.
     */
    export type $DrawableWidget$DrawableWidgetConsumer_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number) => void);
    export class $FillingArrowWidget extends $AnimatedTextureWidget implements $GlobalMixin {
        constructor(x: number, y: number, time: number);
    }
    export class $GeneratedSlotWidget extends $SlotWidget implements $GlobalMixin {
        constructor(stackSupplier: $Function_<$Random, $EmiIngredient>, unique: number, x: number, y: number);
    }
    export class $ButtonWidget extends $Widget implements $GlobalMixin {
        constructor(x: number, y: number, width: number, height: number, u: number, v: number, isActive: $BooleanSupplier_, action: $ButtonWidget$ClickAction_);
        constructor(x: number, y: number, width: number, height: number, u: number, v: number, texture: $ResourceLocation_, isActive: $BooleanSupplier_, action: $ButtonWidget$ClickAction_);
    }
    export class $TextWidget$Alignment extends $Enum<$TextWidget$Alignment> implements $GlobalMixin {
        static values(): $TextWidget$Alignment[];
        static valueOf(name: string): $TextWidget$Alignment;
        offset(length: number): number;
        static CENTER: $TextWidget$Alignment;
        static START: $TextWidget$Alignment;
        static END: $TextWidget$Alignment;
    }
    /**
     * Values that may be interpreted as {@link $TextWidget$Alignment}.
     */
    export type $TextWidget$Alignment_ = "start" | "center" | "end";
    export class $WidgetHolder {
    }
    export interface $WidgetHolder extends $GlobalMixin {
        addGeneratedSlot(stackSupplier: $Function_<$Random, $EmiIngredient>, unique: number, x: number, y: number): $GeneratedSlotWidget;
        addFillingArrow(x: number, y: number, time: number): $FillingArrowWidget;
        addAnimatedTexture(texture: $EmiTexture, x: number, y: number, time: number, horizontal: boolean, endToStart: boolean, fullToEmpty: boolean): $AnimatedTextureWidget;
        addAnimatedTexture(texture: $ResourceLocation_, x: number, y: number, width: number, height: number, u: number, v: number, time: number, horizontal: boolean, endToStart: boolean, fullToEmpty: boolean): $AnimatedTextureWidget;
        addAnimatedTexture(texture: $ResourceLocation_, x: number, y: number, width: number, height: number, u: number, v: number, regionWidth: number, regionHeight: number, textureWidth: number, textureHeight: number, time: number, horizontal: boolean, endToStart: boolean, fullToEmpty: boolean): $AnimatedTextureWidget;
        addTank(stack: $EmiIngredient, x: number, y: number, width: number, height: number, capacity: number): $TankWidget;
        addDrawable(x: number, y: number, width: number, height: number, consumer: $DrawableWidget$DrawableWidgetConsumer_): $DrawableWidget;
        addTooltipText(tooltip: $List_<$Component_>, x: number, y: number, width: number, height: number): $TooltipWidget;
        addText(text: $Component_, x: number, y: number, color: number, shadow: boolean): $TextWidget;
        addText(text: $FormattedCharSequence_, x: number, y: number, color: number, shadow: boolean): $TextWidget;
        addTooltip(tooltip: $List_<$ClientTooltipComponent>, x: number, y: number, width: number, height: number): $TooltipWidget;
        addTooltip(tooltipSupplier: $BiFunction_<number, number, $List<$ClientTooltipComponent>>, x: number, y: number, width: number, height: number): $TooltipWidget;
        addSlot(x: number, y: number): $SlotWidget;
        addSlot(ingredient: $EmiIngredient, x: number, y: number): $SlotWidget;
        addButton(x: number, y: number, width: number, height: number, u: number, v: number, texture: $ResourceLocation_, isActive: $BooleanSupplier_, action: $ButtonWidget$ClickAction_): $ButtonWidget;
        addButton(x: number, y: number, width: number, height: number, u: number, v: number, isActive: $BooleanSupplier_, action: $ButtonWidget$ClickAction_): $ButtonWidget;
        addTexture(texture: $ResourceLocation_, x: number, y: number, width: number, height: number, u: number, v: number): $TextureWidget;
        addTexture(texture: $ResourceLocation_, x: number, y: number, width: number, height: number, u: number, v: number, regionWidth: number, regionHeight: number, textureWidth: number, textureHeight: number): $TextureWidget;
        addTexture(texture: $EmiTexture, x: number, y: number): $TextureWidget;
        add<T extends $Widget>(arg0: T): T;
        getWidth(): number;
        getHeight(): number;
        get width(): number;
        get height(): number;
    }
    export class $TooltipWidget extends $Widget implements $GlobalMixin {
        constructor(tooltipSupplier: $BiFunction_<number, number, $List<$ClientTooltipComponent>>, x: number, y: number, width: number, height: number);
    }
}
