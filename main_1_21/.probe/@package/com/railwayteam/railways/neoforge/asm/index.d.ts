import { $ClassNode } from "@package/org/objectweb/asm/tree";
export * as testing from "@package/com/railwayteam/railways/neoforge/asm/testing";

declare module "@package/com/railwayteam/railways/neoforge/asm" {
    export class $ContainerLevelAccessASM {
        static processNode(arg0: $ClassNode): void;
        constructor();
    }
    export class $RollingModeEnumAdder {
        static processRollingMode(arg0: $ClassNode): void;
        constructor();
    }
}
