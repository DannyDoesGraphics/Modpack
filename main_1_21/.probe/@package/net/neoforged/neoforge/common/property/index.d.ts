import { $ModelProperty } from "@package/net/neoforged/neoforge/client/model/data";
import { $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $ModelState } from "@package/net/minecraft/client/resources/model";

declare module "@package/net/neoforged/neoforge/common/property" {
    export class $Properties {
        static StaticProperty: $BooleanProperty;
        static AnimationProperty: $ModelProperty<$ModelState>;
        constructor();
    }
}
