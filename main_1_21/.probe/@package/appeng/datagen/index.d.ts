import { $GatherDataEvent } from "@package/net/neoforged/neoforge/data/event";
export * as providers from "@package/appeng/datagen/providers";

declare module "@package/appeng/datagen" {
    export class $AE2DataGenerators {
        static onGatherData(arg0: $GatherDataEvent): void;
        constructor();
    }
}
