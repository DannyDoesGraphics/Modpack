import { $VersionChecker$Status } from "@package/net/neoforged/fml";

declare module "@package/net/neoforged/neoforge/internal/versions/neoforge" {
    export class $NeoForgeVersion {
        static getTarget(): string;
        static getVersion(): string;
        static getStatus(): $VersionChecker$Status;
        static getFmlVersion(): string;
        static MOD_ID: string;
        constructor();
        static get target(): string;
        static get version(): string;
        static get status(): $VersionChecker$Status;
        static get fmlVersion(): string;
    }
}
