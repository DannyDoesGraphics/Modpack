import { $File_ } from "@package/java/io";
import { $Path_ } from "@package/java/nio/file";
import { $Set_, $Collection_ } from "@package/java/util";
import { $CommonModLoader } from "@package/net/neoforged/neoforge/internal";

declare module "@package/net/neoforged/neoforge/data/loading" {
    export class $DatagenModLoader extends $CommonModLoader {
        static begin(mods: $Set_<string>, path: $Path_, inputs: $Collection_<$Path_>, existingPacks: $Collection_<$Path_>, existingMods: $Set_<string>, serverGenerators: boolean, clientGenerators: boolean, devToolGenerators: boolean, reportsGenerator: boolean, structureValidator: boolean, flat: boolean, assetIndex: string, assetsDir: $File_): void;
        static isRunningDataGen(): boolean;
        constructor();
        static get runningDataGen(): boolean;
    }
}
