import { $CrashReport } from "@package/net/minecraft";
import { $Options$FieldAccess } from "@package/net/minecraft/client";
import { $StringBuilder } from "@package/java/lang";
import { $GuiGraphics, $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/neoforged/neoforge/forge/snapshots" {
    export class $ForgeSnapshotsMod {
        static addCrashReportHeader(builder: $StringBuilder, crashReport: $CrashReport): void;
        static processOptions(fieldAccess: $Options$FieldAccess): void;
        static logStartupWarning(): void;
        static BRANDING_ID: string;
        static BRANDING_NAME: string;
        constructor();
    }
    export class $ForgeSnapshotsModClient {
        static renderMainMenuWarning(neoForgeVersion: string, graphics: $GuiGraphics, font: $Font, width: number, height: number, alpha: number): void;
        constructor();
    }
}
