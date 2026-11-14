import { $Component } from "@package/io/wispforest/owo/ui/core";
import { $Runnable_ } from "@package/java/lang";

declare module "@package/io/wispforest/accessories/pond/owo" {
    export class $ComponentExtension<T extends $Component> {
        static bypassCheck(component: $Component, runnable: $Runnable_): void;
    }
    export interface $ComponentExtension<T extends $Component> {
        allowIndividualOverdraw(arg0: boolean): T;
        allowIndividualOverdraw(): boolean;
    }
}
