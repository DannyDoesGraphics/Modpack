export * as block_properties from "@package/dev/ryanhcode/sable/physics/config/block_properties";

declare module "@package/dev/ryanhcode/sable/physics/config" {
    export class $PhysicsConfigData {
        solverIterations: number;
        pgsIterations: number;
        substepsPerTick: number;
        contactSpringDampingRatio: number;
        stabilizationIterations: number;
        minDynamicBodiesPerIsland: number;
        contactSpringFrequency: number;
        constructor();
    }
}
