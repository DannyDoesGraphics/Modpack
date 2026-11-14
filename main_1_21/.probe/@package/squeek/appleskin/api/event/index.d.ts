import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $FoodProperties, $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/squeek/appleskin/api/event" {
    export class $HUDOverlayEvent$Saturation extends $HUDOverlayEvent {
        guiGraphics: $GuiGraphics;
        saturationLevel: number;
        x: number;
        y: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $GuiGraphics);
    }
    export class $TooltipOverlayEvent extends $Event implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        defaultFood: $FoodProperties;
        itemStack: $ItemStack;
        modifiedFood: $FoodProperties;
    }
    export class $HUDOverlayEvent$HealthRestored extends $HUDOverlayEvent {
        modifiedHealth: number;
        itemStack: $ItemStack;
        guiGraphics: $GuiGraphics;
        x: number;
        y: number;
        foodProperties: $FoodProperties;
        constructor(arg0: number, arg1: $ItemStack_, arg2: $FoodProperties_, arg3: number, arg4: number, arg5: $GuiGraphics);
    }
    export class $TooltipOverlayEvent$Render extends $TooltipOverlayEvent {
        defaultFood: $FoodProperties;
        itemStack: $ItemStack;
        guiGraphics: $GuiGraphics;
        modifiedFood: $FoodProperties;
        x: number;
        y: number;
        constructor(arg0: $ItemStack_, arg1: number, arg2: number, arg3: $GuiGraphics, arg4: $FoodProperties_, arg5: $FoodProperties_);
    }
    export class $HUDOverlayEvent$Exhaustion extends $HUDOverlayEvent {
        guiGraphics: $GuiGraphics;
        exhaustion: number;
        x: number;
        y: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $GuiGraphics);
    }
    export class $TooltipOverlayEvent$Pre extends $TooltipOverlayEvent {
        defaultFood: $FoodProperties;
        itemStack: $ItemStack;
        modifiedFood: $FoodProperties;
        constructor(arg0: $ItemStack_, arg1: $FoodProperties_, arg2: $FoodProperties_);
    }
    export class $FoodValuesEvent extends $Event {
        modifiedFoodProperties: $FoodProperties;
        itemStack: $ItemStack;
        defaultFoodProperties: $FoodProperties;
        player: $Player;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: $FoodProperties_, arg3: $FoodProperties_);
    }
    export class $HUDOverlayEvent$HungerRestored extends $HUDOverlayEvent {
        itemStack: $ItemStack;
        currentFoodLevel: number;
        guiGraphics: $GuiGraphics;
        x: number;
        y: number;
        foodProperties: $FoodProperties;
        constructor(arg0: number, arg1: $ItemStack_, arg2: $FoodProperties_, arg3: number, arg4: number, arg5: $GuiGraphics);
    }
    export class $HUDOverlayEvent extends $Event implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        guiGraphics: $GuiGraphics;
        x: number;
        y: number;
    }
}
