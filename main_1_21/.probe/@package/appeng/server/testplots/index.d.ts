import { $Level_, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Annotation } from "@package/java/lang/annotation";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";
import { $IGrid } from "@package/appeng/api/networking";
import { $ArrayList, $List, $Map_, $Collection_ } from "@package/java/util";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $AEColor } from "@package/appeng/api/util";
import { $InternalInventory } from "@package/appeng/api/inventories";
import { $Consumer_ } from "@package/java/util/function";
import { $P2PTunnelPart } from "@package/appeng/parts/p2p";
import { $BlockPos, $BlockPos_, $Direction_, $Vec3i, $Direction } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $Plot, $PlotBuilder, $PlotTestHelper } from "@package/appeng/server/testworld";
import { $PartItem } from "@package/appeng/items/parts";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ItemDefinition } from "@package/appeng/core/definitions";
import { $Record, $Object, $Class } from "@package/java/lang";
import { $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/appeng/server/testplots" {
    export class $TestPlot implements $Annotation {
        value(): string;
    }
    export class $PatternProviderPlots {
        static patternProviderLoop(arg0: $PlotBuilder): void;
    }
    export class $TestPlotCollection {
        add(arg0: $ResourceLocation_, arg1: $Consumer_<$PlotBuilder>, arg2: $Consumer_<$PlotTestHelper>): void;
        add(arg0: $ResourceLocation_, arg1: $Consumer_<$PlotBuilder>): void;
        add(arg0: string, arg1: $Consumer_<$PlotBuilder>, arg2: $Consumer_<$PlotTestHelper>): void;
        add(arg0: string, arg1: $Consumer_<$PlotBuilder>): void;
        constructor(arg0: $Map_<$ResourceLocation_, $Consumer_<$PlotBuilder>>);
    }
    export class $TestPlotGenerator implements $Annotation {
    }
    export class $MemoryCardTestPlots {
        static testExportBus(arg0: $PlotBuilder): void;
        static testInterface(arg0: $PlotBuilder): void;
        static testPatternProvider(arg0: $PlotBuilder): void;
    }
    export class $SpatialTestPlots$PlotInfo extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SpatialTestPlots$PlotInfo}.
     */
    export type $SpatialTestPlots$PlotInfo_ = { bounds?: $AABB_, origin?: $BlockPos_, level?: $ServerLevel,  } | [bounds?: $AABB_, origin?: $BlockPos_, level?: $ServerLevel, ];
    export class $AnnihilationPlaneTests {
        static annihilationPlaneSeedFarm(arg0: $PlotBuilder): void;
        constructor();
    }
    export class $TestPlotClass implements $Annotation {
    }
    export class $InvalidPatternTestPlot {
        static patternInvalidRecipeId(arg0: $PlotBuilder): void;
        constructor();
    }
    export class $ChannelTests$ChannelChecker {
    }
    export class $KitOutPlayerEvent extends $PlayerEvent {
        getPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer);
        get player(): $ServerPlayer;
    }
    export class $QnbTestPlots {
        static simpleQnbLink(arg0: $PlotBuilder): void;
    }
    export class $SpawnExtraGridTestTools extends $Event {
        getGrid(): $IGrid;
        getPlotId(): $ResourceLocation;
        getInventory(): $InternalInventory;
        constructor(arg0: $ResourceLocation_, arg1: $InternalInventory, arg2: $IGrid);
        get grid(): $IGrid;
        get plotId(): $ResourceLocation;
        get inventory(): $InternalInventory;
    }
    export class $GuidebookPlot {
        static guidebookStructureWorkArea(arg0: $PlotBuilder): void;
    }
    export class $SpatialTestPlots {
        static controllerInsideScs(arg0: $PlotBuilder): void;
        static craftingCpuInsideScs(arg0: $PlotBuilder): void;
        static storeAndRetrieveEntities(arg0: $PlotBuilder): void;
    }
    export class $AutoCraftingTestPlots {
        static patternProviderFacesRoundRobin(arg0: $PlotBuilder): void;
        static processingPatternInputsUnstacking(arg0: $PlotBuilder): void;
        static testCraftingCpuDupe(arg0: $PlotBuilder): void;
        static create(arg0: $PlotBuilder): void;
    }
    export class $ExternalEnergyTestPlots {
        static testEnergyAcceptorBlock(arg0: $PlotBuilder): void;
        static testEnergyAcceptorPart(arg0: $PlotBuilder): void;
        static testController(arg0: $PlotBuilder): void;
        static testInscriber(arg0: $PlotBuilder): void;
        static testChest(arg0: $PlotBuilder): void;
        static testCharger(arg0: $PlotBuilder): void;
        static testGrowthAccelerator(arg0: $PlotBuilder): void;
        constructor();
    }
    export class $P2PPlotHelper {
        static linkTunnels<T extends $P2PTunnelPart<never>>(arg0: $IGrid, arg1: $Class<T>, arg2: $BlockPos_, arg3: $BlockPos_): number;
        static linkTunnels(arg0: $IGrid, arg1: $PosAndSide_, arg2: $Collection_<$PosAndSide_>): number;
        static placeTunnel<T extends $P2PTunnelPart<never>>(arg0: $PlotBuilder, arg1: $ItemDefinition<$PartItem<T>>): void;
    }
    export class $SubnetPlots {
        static energy_overlay(arg0: $PlotBuilder): void;
        static multi_storage_bus(arg0: $PlotBuilder): void;
        static subnet(arg0: $PlotBuilder): void;
    }
    export class $SpawnTestTools {
        static spawnWirelessTerminals(arg0: $SpawnExtraGridTestTools): void;
        constructor();
    }
    export class $CraftingPatternHelper {
        static encodeShapelessCraftingRecipe(arg0: $Level_, ...arg1: $ItemStack_[]): $ItemStack;
        static encodeStoneCutterPattern(arg0: $Level_, arg1: $ItemLike_, arg2: $ItemLike_, arg3: boolean): $ItemStack;
        static encodeSmithingPattern(arg0: $Level_, arg1: $ItemLike_, arg2: $ItemLike_, arg3: $ItemLike_, arg4: boolean): $ItemStack;
        static encodeCraftingPattern(arg0: $ServerLevel, arg1: $Object[], arg2: boolean, arg3: boolean): $ItemStack;
        constructor();
    }
    export class $CrystalResonanceGeneratorTestPlots {
        static chargesCell(arg0: $PlotBuilder): void;
        static suppression(arg0: $PlotBuilder): void;
        static suppressionFlag(arg0: $PlotBuilder): void;
        constructor();
    }
    export class $TestPlots {
        static createPlots(): $List<$Plot>;
        static allTerminals(arg0: $PlotBuilder): void;
        static itemChest(arg0: $PlotBuilder): void;
        static fluidChest(arg0: $PlotBuilder): void;
        static importExportBus(arg0: $PlotBuilder): void;
        static invertedImportBusMultitype(arg0: $PlotBuilder): void;
        static importAndExportInOneTick(arg0: $PlotBuilder): void;
        static exportFromStorageBus(arg0: $PlotBuilder): void;
        static importIntoStorageBus(arg0: $PlotBuilder): void;
        static importOnPulse(arg0: $PlotBuilder): void;
        static importOnPulseTransactionCrash(arg0: $PlotBuilder): void;
        static matterCannonRange(arg0: $PlotBuilder): void;
        static testInsertFluidIntoMEChest(arg0: $PlotBuilder): void;
        static testInsertItemsIntoMEChest(arg0: $PlotBuilder): void;
        static maxChannelsAdHocTest(arg0: $PlotBuilder): void;
        static blockingModeSubnetworkChestTest(arg0: $PlotBuilder): void;
        static terminalFullOfEnchantedItems(arg0: $PlotBuilder): void;
        static importLavaFromCauldron(arg0: $PlotBuilder): void;
        static getColorsTransparentFirst(): $ArrayList<$AEColor>;
        static processorInscriber(arg0: $PlotBuilder, arg1: $ItemLike_, arg2: $ItemLike_): void;
        static getPlotIds(): $List<$ResourceLocation>;
        static toolRepairRecipe(arg0: $PlotBuilder): void;
        static getById(arg0: $ResourceLocation_): $Plot;
        static inscriber(arg0: $PlotBuilder): void;
        static get colorsTransparentFirst(): $ArrayList<$AEColor>;
        static get plotIds(): $List<$ResourceLocation>;
    }
    export class $ItemP2PTestPlots {
        static recursiveItemP2P(arg0: $PlotBuilder): void;
        static item(arg0: $PlotBuilder): void;
        constructor();
    }
    export class $P2PTestPlots {
        static testOutOfChannelReconnectBehavior(arg0: $PlotBuilder): void;
        static fluid(arg0: $PlotBuilder): void;
        static energy(arg0: $PlotBuilder): void;
        static me(arg0: $PlotBuilder): void;
        static light(arg0: $PlotBuilder): void;
        constructor();
    }
    export class $PatternProviderLockModePlots {
        static testBlockLockModePulseStartingHigh(arg0: $PlotBuilder): void;
        static testBlockLockModePulse(arg0: $PlotBuilder): void;
        static testPartLockModePulse(arg0: $PlotBuilder): void;
        static testBlockLockModeHigh(arg0: $PlotBuilder): void;
        static testPartLockModeHigh(arg0: $PlotBuilder): void;
        static testBlockLockModeLow(arg0: $PlotBuilder): void;
        static testPartLockModeLow(arg0: $PlotBuilder): void;
        static testBlockLockModeResult(arg0: $PlotBuilder): void;
        static testPartLockModeResult(arg0: $PlotBuilder): void;
        static testPartWaitForPulseSaved(arg0: $PlotBuilder): void;
        static testBlockWaitForPulseSaved(arg0: $PlotBuilder): void;
        static testPartWaitForResultSaved(arg0: $PlotBuilder): void;
        static testBlockWaitForResultSaved(arg0: $PlotBuilder): void;
    }
    export class $InterfaceTestPlots {
        static interfaceSlotFiltering(arg0: $PlotBuilder): void;
        static interfaceRestockDupeTest(arg0: $PlotBuilder): void;
        static interfaceToInterfaceDifferentNetworks(arg0: $PlotBuilder): void;
        static interfacePartCaps(arg0: $PlotBuilder): void;
        static cancelingJobsFromInterfaceCrash(arg0: $PlotBuilder): void;
        constructor();
    }
    export class $InscriberTestPlots {
        static generateInscriberRecipePlots(arg0: $TestPlotCollection): void;
    }
    export class $ChannelTests {
        static channelAssignmentTest(arg0: $PlotBuilder): void;
        constructor();
    }
    export class $PosAndSide extends $Record {
        offset(arg0: $Vec3i): $PosAndSide;
        pos(): $BlockPos;
        static up(arg0: $BlockPos_): $PosAndSide;
        static down(arg0: $BlockPos_): $PosAndSide;
        side(): $Direction;
        static east(arg0: $BlockPos_): $PosAndSide;
        static west(arg0: $BlockPos_): $PosAndSide;
        static north(arg0: $BlockPos_): $PosAndSide;
        static south(arg0: $BlockPos_): $PosAndSide;
        constructor(pos: $BlockPos_, side: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $PosAndSide}.
     */
    export type $PosAndSide_ = { pos?: $BlockPos_, side?: $Direction_,  } | [pos?: $BlockPos_, side?: $Direction_, ];
}
