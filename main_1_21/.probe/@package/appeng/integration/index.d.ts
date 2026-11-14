import { $InterModEnqueueEvent } from "@package/net/neoforged/fml/event/lifecycle";
export * as modules from "@package/appeng/integration/modules";
export * as abstraction from "@package/appeng/integration/abstraction";

declare module "@package/appeng/integration" {
    export class $Integrations {
        static enqueueIMC(arg0: $InterModEnqueueEvent): void;
        constructor();
    }
}
