import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $SubLevelPhysicsSystem } from "@package/dev/ryanhcode/sable/sublevel/system";
import { $Event } from "@package/net/neoforged/bus/api";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";

declare module "@package/dev/ryanhcode/sable/neoforge/event" {
    export class $ForgeSablePrePhysicsTickEvent extends $Event {
        getPhysicsSystem(): $SubLevelPhysicsSystem;
        getTimeStep(): number;
        constructor(arg0: $SubLevelPhysicsSystem, arg1: number);
        get physicsSystem(): $SubLevelPhysicsSystem;
        get timeStep(): number;
    }
    export class $ForgeSableSubLevelContainerReadyEvent extends $Event {
        getContainer(): $SubLevelContainer;
        getLevel(): $Level;
        constructor(arg0: $Level_, arg1: $SubLevelContainer);
        get container(): $SubLevelContainer;
        get level(): $Level;
    }
    export class $ForgeSablePostPhysicsTickEvent extends $Event {
        getPhysicsSystem(): $SubLevelPhysicsSystem;
        getTimeStep(): number;
        constructor(arg0: $SubLevelPhysicsSystem, arg1: number);
        get physicsSystem(): $SubLevelPhysicsSystem;
        get timeStep(): number;
    }
}
