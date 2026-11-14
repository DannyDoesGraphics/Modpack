import { $Direction_, $Direction } from "@package/net/minecraft/core";

declare module "@package/appeng/block/orientation" {
    export class $SpinMapping {
        static getSpinFromUp(arg0: $Direction_, arg1: $Direction_): number;
        static getUpFromSpin(arg0: $Direction_, arg1: number): $Direction;
    }
}
