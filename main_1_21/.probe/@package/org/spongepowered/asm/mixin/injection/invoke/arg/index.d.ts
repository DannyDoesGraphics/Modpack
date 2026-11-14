import { $Object } from "@package/java/lang";

declare module "@package/org/spongepowered/asm/mixin/injection/invoke/arg" {
    export class $Args {
        size(): number;
        get<T>(arg0: number): T;
        set<T>(arg0: number, arg1: T): void;
        setAll(...arg0: $Object[]): void;
        set all(value: $Object[]);
    }
}
