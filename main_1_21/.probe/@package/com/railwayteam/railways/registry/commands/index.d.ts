import { $CommandSourceStack, $SharedSuggestionProvider, $CommandBuildContext } from "@package/net/minecraft/commands";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $ArgumentBuilder } from "@package/com/mojang/brigadier/builder";
import { $Comparable, $Comparable_, $Record } from "@package/java/lang";

declare module "@package/com/railwayteam/railways/registry/commands" {
    export class $ClearCapCacheCommand {
        static register(): $ArgumentBuilder<$SharedSuggestionProvider, never>;
        constructor();
    }
    export class $ShadowRealmCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
    export class $ReloadDevCapesCommand {
        static register(): $ArgumentBuilder<$SharedSuggestionProvider, never>;
        constructor();
    }
    export class $PalettesDemoCommand$Entry {
    }
    export class $PalettesDemoCommand$Transform<T extends $Comparable<T>> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PalettesDemoCommand$Transform}.
     */
    export type $PalettesDemoCommand$Transform_<T> = { value?: $Comparable_<T>, property?: $Property<$Comparable_<T>>,  } | [value?: $Comparable_<T>, property?: $Property<$Comparable_<T>>, ];
    export class $PalettesDemoCommand$PatternBuilder {
    }
    export class $IdentifyTrainCommand {
        static register(): $ArgumentBuilder<$SharedSuggestionProvider, never>;
        constructor();
    }
    export class $CountPaintCommand {
        static register(arg0: $CommandBuildContext): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
    export class $FillPaintCommand {
        static register(arg0: $CommandBuildContext): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
    export class $ReloadCreativeTabsCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
    export class $TrainInfoCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
    export class $ClearCasingCacheCommand {
        static register(): $ArgumentBuilder<$SharedSuggestionProvider, never>;
        constructor();
    }
    export class $SplitTrainCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
    export class $ReloadCasingCollisionCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
    export class $PalettesDemoCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
    export class $ConductorDemoCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
    export class $TrackDemoCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
}
