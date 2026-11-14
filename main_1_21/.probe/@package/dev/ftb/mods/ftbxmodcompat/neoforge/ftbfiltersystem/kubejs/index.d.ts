import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Object, $Record } from "@package/java/lang";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";

declare module "@package/dev/ftb/mods/ftbxmodcompat/neoforge/ftbfiltersystem/kubejs" {
    export class $CustomFilterKubeEvent extends $Record implements $KubeEvent {
        stack(): $ItemStack;
        data(): string;
        getStack(): $ItemStack;
        getData(): string;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(stack: $ItemStack_, data: string);
    }
    /**
     * Values that may be interpreted as {@link $CustomFilterKubeEvent}.
     */
    export type $CustomFilterKubeEvent_ = { stack?: $ItemStack_, data?: string,  } | [stack?: $ItemStack_, data?: string, ];
}
