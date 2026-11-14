import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $Object, $Record } from "@package/java/lang";
import { $Widget } from "@package/dev/ftb/mods/ftblibrary/ui";

declare module "@package/dev/ftb/mods/ftblibrary/util/client" {
    export class $PositionedIngredient extends $Record {
        area(): $Rect2i;
        ingredient(): $Object;
        static of(ingredient: $Object, widget: $Widget, tooltip: boolean): ($PositionedIngredient) | undefined;
        static of(ingredient: $Object, widget: $Widget): ($PositionedIngredient) | undefined;
        tooltip(): boolean;
        constructor(ingredient: $Object, area: $Rect2i, tooltip: boolean);
    }
    /**
     * Values that may be interpreted as {@link $PositionedIngredient}.
     */
    export type $PositionedIngredient_ = { area?: $Rect2i, tooltip?: boolean, ingredient?: $Object,  } | [area?: $Rect2i, tooltip?: boolean, ingredient?: $Object, ];
}
