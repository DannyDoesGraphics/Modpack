import { $Level_, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $RotationPropagatorAccessor } from "@package/com/hlysine/create_connected/mixin";
import { $KineticNetworkAccessor } from "@package/com/hlysine/create_connected/mixin/kineticbattery";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $Map } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as turntable from "@package/com/simibubi/create/content/kinetics/turntable";
export * as base from "@package/com/simibubi/create/content/kinetics/base";
export * as press from "@package/com/simibubi/create/content/kinetics/press";
export * as chainConveyor from "@package/com/simibubi/create/content/kinetics/chainConveyor";
export * as crafter from "@package/com/simibubi/create/content/kinetics/crafter";
export * as mechanicalArm from "@package/com/simibubi/create/content/kinetics/mechanicalArm";
export * as deployer from "@package/com/simibubi/create/content/kinetics/deployer";
export * as transmission from "@package/com/simibubi/create/content/kinetics/transmission";
export * as waterwheel from "@package/com/simibubi/create/content/kinetics/waterwheel";
export * as simpleRelays from "@package/com/simibubi/create/content/kinetics/simpleRelays";
export * as crank from "@package/com/simibubi/create/content/kinetics/crank";
export * as belt from "@package/com/simibubi/create/content/kinetics/belt";
export * as speedController from "@package/com/simibubi/create/content/kinetics/speedController";
export * as fan from "@package/com/simibubi/create/content/kinetics/fan";
export * as motor from "@package/com/simibubi/create/content/kinetics/motor";
export * as gauge from "@package/com/simibubi/create/content/kinetics/gauge";
export * as flywheel from "@package/com/simibubi/create/content/kinetics/flywheel";
export * as saw from "@package/com/simibubi/create/content/kinetics/saw";
export * as mixer from "@package/com/simibubi/create/content/kinetics/mixer";
export * as crusher from "@package/com/simibubi/create/content/kinetics/crusher";
export * as gearbox from "@package/com/simibubi/create/content/kinetics/gearbox";
export * as millstone from "@package/com/simibubi/create/content/kinetics/millstone";
export * as steamEngine from "@package/com/simibubi/create/content/kinetics/steamEngine";
export * as chainDrive from "@package/com/simibubi/create/content/kinetics/chainDrive";
export * as drill from "@package/com/simibubi/create/content/kinetics/drill";
export * as clock from "@package/com/simibubi/create/content/kinetics/clock";
export * as gantry from "@package/com/simibubi/create/content/kinetics/gantry";

declare module "@package/com/simibubi/create/content/kinetics" {
    export class $RotationPropagator implements $RotationPropagatorAccessor {
        static callFindConnectedNeighbour$create_connected_$md$5c91d2$0(arg0: $KineticBlockEntity, arg1: $BlockPos_): $KineticBlockEntity;
        static handleAdded(arg0: $Level_, arg1: $BlockPos_, arg2: $KineticBlockEntity): void;
        static handleRemoved(arg0: $Level_, arg1: $BlockPos_, arg2: $KineticBlockEntity): void;
        static isConnected(arg0: $KineticBlockEntity, arg1: $KineticBlockEntity): boolean;
        constructor();
    }
    export class $KineticDebugger {
        static getSelectedBE(): $KineticBlockEntity;
        static isF3DebugModeActive(): boolean;
        static isActive(): boolean;
        static tick(): void;
        static rainbowDebug: boolean;
        constructor();
        static get selectedBE(): $KineticBlockEntity;
        static get f3DebugModeActive(): boolean;
        static get active(): boolean;
    }
    export class $TorquePropagator {
        getOrCreateNetworkFor(arg0: $KineticBlockEntity): $KineticNetwork;
        onLoadWorld(arg0: $LevelAccessor): void;
        onUnloadWorld(arg0: $LevelAccessor): void;
        constructor();
    }
    export class $KineticNetwork implements $KineticNetworkAccessor {
        updateCapacity(): void;
        calculateCapacity(): number;
        calculateStress(): number;
        redirect$bbf000$simulated$extraKineticsCapacity(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        redirect$bbf000$simulated$extraKineticsStress(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        getActualStressOf(arg0: $KineticBlockEntity): number;
        updateCapacityFor(arg0: $KineticBlockEntity, arg1: number): void;
        updateStressFor(arg0: $KineticBlockEntity, arg1: number): void;
        updateStress(): void;
        initFromTE(arg0: number, arg1: number, arg2: number): void;
        addSilently(arg0: $KineticBlockEntity, arg1: number, arg2: number): void;
        updateNetwork(): void;
        getActualCapacityOf(arg0: $KineticBlockEntity): number;
        remove(arg0: $KineticBlockEntity): void;
        add(arg0: $KineticBlockEntity): void;
        getSize(): number;
        sync(): void;
        getUnloadedStress(): number;
        sources: $Map<$KineticBlockEntity, number>;
        members: $Map<$KineticBlockEntity, number>;
        initialized: boolean;
        id: number;
        constructor();
        get size(): number;
        get unloadedStress(): number;
    }
}
