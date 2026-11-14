import { $CreateGameTestHelper } from "@package/com/simibubi/create/infrastructure/gametest";

declare module "@package/com/simibubi/create/infrastructure/gametest/tests" {
    export class $TestRegressions {
        static issue9615_efficientDeployers(arg0: $CreateGameTestHelper): void;
        constructor();
    }
    export class $TestItems {
        static storages(arg0: $CreateGameTestHelper): void;
        static thresholdSwitch(arg0: $CreateGameTestHelper): void;
        static andesiteTunnelSplit(arg0: $CreateGameTestHelper): void;
        static armMultiOutput(arg0: $CreateGameTestHelper): void;
        static armPurgatory(arg0: $CreateGameTestHelper): void;
        static attributeFilters(arg0: $CreateGameTestHelper): void;
        static beltCoaster(arg0: $CreateGameTestHelper): void;
        static brassTunnelFiltering(arg0: $CreateGameTestHelper): void;
        static brassTunnelPreferNearest(arg0: $CreateGameTestHelper): void;
        static brassTunnelRoundRobin(arg0: $CreateGameTestHelper): void;
        static brassTunnelSplit(arg0: $CreateGameTestHelper): void;
        static brassTunnelSyncInput(arg0: $CreateGameTestHelper): void;
        static smartObserverBeltAndFunnel(arg0: $CreateGameTestHelper): void;
        static smartObserverChutes(arg0: $CreateGameTestHelper): void;
        static smartObserverCounting(arg0: $CreateGameTestHelper): void;
        static smartObserverFilteredStorage(arg0: $CreateGameTestHelper): void;
        static smartObserverStorage(arg0: $CreateGameTestHelper): void;
        static depotDisplay(arg0: $CreateGameTestHelper): void;
        static vaultComparatorOutput(arg0: $CreateGameTestHelper): void;
        static depotComparatorOutput(arg0: $CreateGameTestHelper): void;
        static fanProcessing(arg0: $CreateGameTestHelper): void;
        constructor();
    }
    export class $TestFluids {
        static steamEngine(arg0: $CreateGameTestHelper): void;
        static hosePulleyTransfer(arg0: $CreateGameTestHelper): void;
        static inWorldPumpingOut(arg0: $CreateGameTestHelper): void;
        static inWorldPumpingIn(arg0: $CreateGameTestHelper): void;
        static threePipeCombine(arg0: $CreateGameTestHelper): void;
        static threePipeSplit(arg0: $CreateGameTestHelper): void;
        static largeWaterwheel(arg0: $CreateGameTestHelper): void;
        static smallWaterwheel(arg0: $CreateGameTestHelper): void;
        static waterwheelMaterials(arg0: $CreateGameTestHelper): void;
        static smartObserverPipes(arg0: $CreateGameTestHelper): void;
        static thresholdSwitch(arg0: $CreateGameTestHelper): void;
        static openPipes(arg0: $CreateGameTestHelper): void;
        static spouting(arg0: $CreateGameTestHelper): void;
        constructor();
    }
    export class $TestProcessing {
        static potionBrewing(arg0: $CreateGameTestHelper): void;
        static brassMixing(arg0: $CreateGameTestHelper): void;
        static brassMixing2(arg0: $CreateGameTestHelper): void;
        static spoutCrafting(arg0: $CreateGameTestHelper): void;
        static crushingWheelCrafting(arg0: $CreateGameTestHelper): void;
        static precisionMechanismCrafting(arg0: $CreateGameTestHelper): void;
        static sandWashing(arg0: $CreateGameTestHelper): void;
        static stoneCobbleSandCrushing(arg0: $CreateGameTestHelper): void;
        static trackCrafting(arg0: $CreateGameTestHelper): void;
        static waterFillingBottle(arg0: $CreateGameTestHelper): void;
        static wheatMilling(arg0: $CreateGameTestHelper): void;
        constructor();
    }
    export class $TestContraptions {
        static arrowDispenser(arg0: $CreateGameTestHelper): void;
        static cropFarming(arg0: $CreateGameTestHelper): void;
        static mountedItemExtract(arg0: $CreateGameTestHelper): void;
        static mountedFluidDrain(arg0: $CreateGameTestHelper): void;
        static ploughing(arg0: $CreateGameTestHelper): void;
        static redstoneContacts(arg0: $CreateGameTestHelper): void;
        static elevator(arg0: $CreateGameTestHelper): void;
        static rollerFilling(arg0: $CreateGameTestHelper): void;
        static rollerPavingAndClearing(arg0: $CreateGameTestHelper): void;
        static dispensersDontFight(arg0: $CreateGameTestHelper): void;
        static dispensersRefill(arg0: $CreateGameTestHelper): void;
        static vaultsProtectFuel(arg0: $CreateGameTestHelper): void;
        static controls(arg0: $CreateGameTestHelper): void;
        constructor();
    }
    export class $TestMisc {
        static schematicannon(arg0: $CreateGameTestHelper): void;
        static shearing(arg0: $CreateGameTestHelper): void;
        static smartObserverBlocks(arg0: $CreateGameTestHelper): void;
        static thresholdSwitchPulley(arg0: $CreateGameTestHelper): void;
        static netheriteBacktank(arg0: $CreateGameTestHelper): void;
        constructor();
    }
}
