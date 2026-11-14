import { $CommonModLoader } from "@package/net/neoforged/neoforge/internal";

declare module "@package/net/neoforged/neoforge/server/loading" {
    export class $ServerModLoader extends $CommonModLoader {
        static load(): void;
        static hasErrors(): boolean;
        constructor();
    }
}
