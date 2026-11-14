import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Button$OnPress, $MultiLineTextWidget, $Button$OnPress_, $WidgetTooltipHolder, $MultilineTextField } from "@package/net/minecraft/client/gui/components";

declare module "@package/io/wispforest/owo/mixin/ui/access" {
    export class $CheckboxWidgetAccessor {
    }
    export interface $CheckboxWidgetAccessor {
        owo$setChecked(arg0: boolean): void;
        owo$getTextWidget(): $MultiLineTextWidget;
    }
    export class $ButtonWidgetAccessor {
    }
    export interface $ButtonWidgetAccessor {
        owo$setOnPress(arg0: $Button$OnPress_): void;
    }
    /**
     * Values that may be interpreted as {@link $ButtonWidgetAccessor}.
     */
    export type $ButtonWidgetAccessor_ = ((arg0: $Button$OnPress) => void);
    export class $EditBoxWidgetAccessor {
    }
    export interface $EditBoxWidgetAccessor {
        owo$getEditBox(): $MultilineTextField;
    }
    /**
     * Values that may be interpreted as {@link $EditBoxWidgetAccessor}.
     */
    export type $EditBoxWidgetAccessor_ = (() => $MultilineTextField);
    export class $ClickableWidgetAccessor {
    }
    export interface $ClickableWidgetAccessor {
        owo$setX(arg0: number): void;
        owo$setY(arg0: number): void;
        owo$setHeight(arg0: number): void;
        owo$setWidth(arg0: number): void;
        owo$getTooltip(): $WidgetTooltipHolder;
    }
    export class $TextFieldWidgetAccessor {
    }
    export interface $TextFieldWidgetAccessor {
        owo$drawsBackground(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TextFieldWidgetAccessor}.
     */
    export type $TextFieldWidgetAccessor_ = (() => boolean);
    export class $BlockEntityAccessor {
    }
    export interface $BlockEntityAccessor {
        owo$setCachedState(arg0: $BlockState_): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityAccessor}.
     */
    export type $BlockEntityAccessor_ = ((arg0: $BlockState) => void);
    export class $EditBoxAccessor {
    }
    export interface $EditBoxAccessor {
        owo$setSelectionEnd(arg0: number): void;
        owo$getSelectionEnd(): number;
        owo$setWidth(arg0: number): void;
    }
}
