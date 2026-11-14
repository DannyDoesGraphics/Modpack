import { $Predicate_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $OwoUIAdapter, $ParentComponent, $Component } from "@package/io/wispforest/owo/ui/core";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $Enum } from "@package/java/lang";

declare module "@package/io/wispforest/owo/ui/layers" {
    export class $Layer$Instance$AnchorSide extends $Enum<$Layer$Instance$AnchorSide> {
        static values(): $Layer$Instance$AnchorSide[];
        static valueOf(name: string): $Layer$Instance$AnchorSide;
        static TOP: $Layer$Instance$AnchorSide;
        static LEFT: $Layer$Instance$AnchorSide;
        static RIGHT: $Layer$Instance$AnchorSide;
        static BOTTOM: $Layer$Instance$AnchorSide;
    }
    /**
     * Values that may be interpreted as {@link $Layer$Instance$AnchorSide}.
     */
    export type $Layer$Instance$AnchorSide_ = "top" | "bottom" | "left" | "right";
    export class $Layer$Instance {
        queryWidget(locator: $Predicate_<$AbstractWidget>): $AbstractWidget;
        alignComponentToWidget(locator: $Predicate_<$AbstractWidget>, anchor: $Layer$Instance$AnchorSide_, justification: number, component: $Component): void;
        resize(width: number, height: number): void;
        alignComponentToHandledScreenCoordinates(component: $Component, x: number, y: number): void;
        dispatchLayoutUpdates(): void;
        adapter: $OwoUIAdapter<R>;
        aggressivePositioning: boolean;
        screen: S;
    }
    export class $Layer<S extends $Screen, R extends $ParentComponent> {
        getInstance(screen: S): $Layer$Instance;
        instantiate(screen: S): $Layer$Instance;
    }
}
