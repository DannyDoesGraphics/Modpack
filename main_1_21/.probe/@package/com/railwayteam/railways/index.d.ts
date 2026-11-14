import { $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $Logger } from "@package/org/slf4j";
import { $CreateRegistrate } from "@package/com/simibubi/create/foundation/data";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ModelLayerLocation } from "@package/net/minecraft/client/model/geom";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $DataGenerator$PackGenerator } from "@package/net/minecraft/data";
export * as content from "@package/com/railwayteam/railways/content";
export * as config from "@package/com/railwayteam/railways/config";
export * as base from "@package/com/railwayteam/railways/base";
export * as util from "@package/com/railwayteam/railways/util";
export * as registry from "@package/com/railwayteam/railways/registry";
export * as mixin_interfaces from "@package/com/railwayteam/railways/mixin_interfaces";
export * as multiloader from "@package/com/railwayteam/railways/multiloader";
export * as neoforge from "@package/com/railwayteam/railways/neoforge";
export * as compat from "@package/com/railwayteam/railways/compat";
export * as mixin from "@package/com/railwayteam/railways/mixin";
export * as annotation from "@package/com/railwayteam/railways/annotation";
export * as ponder from "@package/com/railwayteam/railways/ponder";
export * as api from "@package/com/railwayteam/railways/api";
export * as impl from "@package/com/railwayteam/railways/impl";
export * as events from "@package/com/railwayteam/railways/events";

declare module "@package/com/railwayteam/railways" {
    export class $Railways {
        static registrate(): $CreateRegistrate;
        static init(): void;
        static asResource(arg0: string): $ResourceLocation;
        static gatherData(arg0: $DataGenerator$PackGenerator): void;
        static ID_NAME: string;
        static DATA_FIXER_VERSION: number;
        static MOD_ID: string;
        static LOGGER: $Logger;
        static NAME: string;
        constructor();
    }
    export class $RailwaysBuildInfo {
        static GIT_COMMIT: string;
        static VERSION: string;
        constructor();
    }
    export class $RailwaysClient {
        static registerModelLayer(arg0: $ModelLayerLocation, arg1: $Supplier_<$LayerDefinition>): void;
        static registerBuiltinPack(arg0: string, arg1: string): void;
        static init(): void;
        static registerClientCommands(arg0: $Consumer_<$CommandDispatcher<$SharedSuggestionProvider>>): void;
        constructor();
    }
    export class $ModSetup {
        static useBaseTab(): void;
        static useTracksTab(): void;
        static usePalettesTab(): void;
        static register(): void;
        constructor();
    }
}
