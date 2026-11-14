import { $Object } from "@package/java/lang";

declare module "@package/jdk/internal/event" {
    export class $Event {
        shouldCommit(): boolean;
        commit(): void;
        begin(): void;
        end(): void;
        isEnabled(): boolean;
        set(arg0: number, arg1: $Object): void;
        get enabled(): boolean;
    }
}
