import { $AutoCloseable } from "@package/java/lang";
export * as modifier from "@package/foundry/veil/api/flare/modifier";

declare module "@package/foundry/veil/api/flare" {
    export class $EffectHost {
    }
    export interface $EffectHost extends $AutoCloseable {
        getName(): string;
        update(arg0: number): void;
        getValue(arg0: string): number;
        close(): void;
        get name(): string;
    }
}
