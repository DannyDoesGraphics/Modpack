import { $ITooltipBuilder, $IClickableIngredientFactory } from "@package/mezz/jei/api/gui/builder";
import { $Consumer, $Function } from "@package/java/util/function";
import { $ITypedIngredient } from "@package/mezz/jei/api/ingredients";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $IFocusFactory, $RecipeType } from "@package/mezz/jei/api/recipe";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Class } from "@package/java/lang";
import { $List, $Collection } from "@package/java/util";
import { $IRecipesGui, $IClickableIngredient } from "@package/mezz/jei/api/runtime";

declare module "@package/mezz/jei/api/gui/handlers" {
    export class $IGuiClickableArea {
        static createBasic(arg0: number, arg1: number, arg2: number, arg3: number, ...arg4: $RecipeType<never>[]): $IGuiClickableArea;
    }
    export interface $IGuiClickableArea {
        getArea(): $Rect2i;
        /**
         * @deprecated
         */
        getTooltipStrings(): $List<$Component>;
        isTooltipEnabled(): boolean;
        getTooltip(arg0: $ITooltipBuilder): void;
        onClick(arg0: $IFocusFactory, arg1: $IRecipesGui): void;
        get area(): $Rect2i;
        get tooltipStrings(): $List<$Component>;
        get tooltipEnabled(): boolean;
    }
    export class $IGuiContainerHandler<T extends $AbstractContainerScreen<never>> {
    }
    export interface $IGuiContainerHandler<T extends $AbstractContainerScreen<never>> {
        /**
         * @deprecated
         */
        getClickableIngredientUnderMouse(arg0: T, arg1: number, arg2: number): ($IClickableIngredient<never>) | undefined;
        getClickableIngredientUnderMouse(arg0: $IClickableIngredientFactory, arg1: T, arg2: number, arg3: number): ($IClickableIngredient<never>) | undefined;
        getGuiExtraAreas(arg0: T): $List<$Rect2i>;
        getGuiClickableAreas(arg0: T, arg1: number, arg2: number): $Collection<$IGuiClickableArea>;
    }
    export class $IGhostIngredientHandler<T extends $Screen> {
    }
    export interface $IGhostIngredientHandler<T extends $Screen> {
        getTargetsTyped<I>(arg0: T, arg1: $ITypedIngredient<I>, arg2: boolean): $List<$IGhostIngredientHandler$Target<I>>;
        onComplete(): void;
        shouldHighlightTargets(): boolean;
        quickMove<I>(arg0: T, arg1: $ITypedIngredient<I>): boolean;
    }
    export class $IGuiProperties {
    }
    export interface $IGuiProperties {
        screenClass(): $Class<$Screen>;
        guiXSize(): number;
        guiYSize(): number;
        guiRight(): number;
        guiBottom(): number;
        screenWidth(): number;
        screenHeight(): number;
        guiLeft(): number;
        guiTop(): number;
    }
    export class $IScreenHandler<T extends $Screen> {
    }
    export interface $IScreenHandler<T extends $Screen> extends $Function<T, $IGuiProperties> {
        getClickableIngredientUnderMouse(arg0: $IClickableIngredientFactory, arg1: T, arg2: number, arg3: number): ($IClickableIngredient<never>) | undefined;
        apply(arg0: T): $IGuiProperties;
    }
    /**
     * Values that may be interpreted as {@link $IScreenHandler}.
     */
    export type $IScreenHandler_<T> = ((arg0: T) => $IGuiProperties);
    export class $IGhostIngredientHandler$Target<I> {
    }
    export interface $IGhostIngredientHandler$Target<I> extends $Consumer<I> {
        getArea(): $Rect2i;
        accept(arg0: I): void;
        get area(): $Rect2i;
    }
    export class $IGlobalGuiHandler {
    }
    export interface $IGlobalGuiHandler {
        getClickableIngredientUnderMouse(arg0: $IClickableIngredientFactory, arg1: number, arg2: number): ($IClickableIngredient<never>) | undefined;
        /**
         * @deprecated
         */
        getClickableIngredientUnderMouse(arg0: number, arg1: number): ($IClickableIngredient<never>) | undefined;
        getGuiExtraAreas(): $Collection<$Rect2i>;
        get guiExtraAreas(): $Collection<$Rect2i>;
    }
}
