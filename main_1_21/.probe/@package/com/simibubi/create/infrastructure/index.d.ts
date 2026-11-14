import { $RegisterEvent } from "@package/net/neoforged/neoforge/registries";
export * as worldgen from "@package/com/simibubi/create/infrastructure/worldgen";
export * as command from "@package/com/simibubi/create/infrastructure/command";
export * as debugInfo from "@package/com/simibubi/create/infrastructure/debugInfo";
export * as ponder from "@package/com/simibubi/create/infrastructure/ponder";
export * as gui from "@package/com/simibubi/create/infrastructure/gui";
export * as data from "@package/com/simibubi/create/infrastructure/data";
export * as config from "@package/com/simibubi/create/infrastructure/config";
export * as gametest from "@package/com/simibubi/create/infrastructure/gametest";

declare module "@package/com/simibubi/create/infrastructure" {
    export class $RemapHelper {
        static remap(arg0: $RegisterEvent): void;
        constructor();
    }
}
