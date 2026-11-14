import { $DoubleSupplier } from "@package/java/util/function";
import { $FluidManipulationBehaviour$BottomlessFluidMode } from "@package/com/simibubi/create/content/fluids/transfer";
import { $ContraptionMovementSetting } from "@package/com/simibubi/create/api/contraption";
import { $ModConfigEvent$Reloading, $ModConfigEvent$Loading } from "@package/net/neoforged/fml/event/config";
import { $ConfigBase$ConfigInt, $ConfigBase$ConfigFloat, $ConfigBase$ConfigGroup, $ConfigBase$ConfigBool, $ConfigBase, $ConfigBase$ConfigEnum } from "@package/net/createmod/catnip/config";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";
import { $ModConfig$Type_ } from "@package/net/neoforged/fml/config";
import { $StockKeeperRequestScreen$SearchSyncMode } from "@package/com/simibubi/create/content/logistics/stockTicker";
import { $NonNullUnaryOperator } from "@package/com/tterrag/registrate/util/nullness";
import { $ModLoadingContext, $ModContainer } from "@package/net/neoforged/fml";
import { $ModConfigSpec } from "@package/net/neoforged/neoforge/common";
import { $BlockBuilder } from "@package/com/tterrag/registrate/builders";

declare module "@package/com/simibubi/create/infrastructure/config" {
    export class $CClient$Comments {
    }
    export class $CServer extends $ConfigBase {
        recipes: $CRecipes;
        tickrateSyncTimer: $ConfigBase$ConfigInt;
        infrastructure: $ConfigBase$ConfigGroup;
        schematics: $CSchematics;
        logistics: $CLogistics;
        equipment: $CEquipment;
        specification: $ModConfigSpec;
        kinetics: $CKinetics;
        trains: $CTrains;
        fluids: $CFluids;
        constructor();
    }
    export class $CLogistics$Comments {
    }
    export class $CRecipes$Comments {
    }
    export class $CClient$PlacementIndicatorSetting extends $Enum<$CClient$PlacementIndicatorSetting> {
        static values(): $CClient$PlacementIndicatorSetting[];
        static valueOf(arg0: string): $CClient$PlacementIndicatorSetting;
        static TEXTURE: $CClient$PlacementIndicatorSetting;
        static TRIANGLE: $CClient$PlacementIndicatorSetting;
        static NONE: $CClient$PlacementIndicatorSetting;
    }
    /**
     * Values that may be interpreted as {@link $CClient$PlacementIndicatorSetting}.
     */
    export type $CClient$PlacementIndicatorSetting_ = "texture" | "triangle" | "none";
    export class $CEquipment extends $ConfigBase {
        maxSymmetryWandRange: $ConfigBase$ConfigInt;
        airInBacktank: $ConfigBase$ConfigInt;
        toolboxRange: $ConfigBase$ConfigInt;
        maxExtendoGripActions: $ConfigBase$ConfigInt;
        specification: $ModConfigSpec;
        placementAssistRange: $ConfigBase$ConfigInt;
        enchantedBacktankCapacity: $ConfigBase$ConfigInt;
        maxPotatoCannonShots: $ConfigBase$ConfigInt;
        constructor();
    }
    export class $CServer$Comments {
    }
    export class $CClient$TrainMapTheme extends $Enum<$CClient$TrainMapTheme> {
        static values(): $CClient$TrainMapTheme[];
        static valueOf(arg0: string): $CClient$TrainMapTheme;
        static RED: $CClient$TrainMapTheme;
        static WHITE: $CClient$TrainMapTheme;
        static GREY: $CClient$TrainMapTheme;
    }
    /**
     * Values that may be interpreted as {@link $CClient$TrainMapTheme}.
     */
    export type $CClient$TrainMapTheme_ = "red" | "grey" | "white";
    export class $CCommon extends $ConfigBase {
        worldGen: $CWorldGen;
        specification: $ModConfigSpec;
        constructor();
    }
    export class $CKinetics$Comments {
    }
    export class $CSchematics$Comments {
    }
    export class $CWorldGen$Comments {
    }
    export class $CLogistics extends $ConfigBase {
        defaultExtractionTimer: $ConfigBase$ConfigInt;
        factoryGaugeTimer: $ConfigBase$ConfigInt;
        mechanicalArmRange: $ConfigBase$ConfigInt;
        psiTimeout: $ConfigBase$ConfigInt;
        brassTunnelTimer: $ConfigBase$ConfigInt;
        specification: $ModConfigSpec;
        vaultCapacity: $ConfigBase$ConfigInt;
        seatHostileMobs: $ConfigBase$ConfigBool;
        linkRange: $ConfigBase$ConfigInt;
        displayLinkRange: $ConfigBase$ConfigInt;
        packagePortRange: $ConfigBase$ConfigInt;
        chainConveyorCapacity: $ConfigBase$ConfigInt;
        constructor();
    }
    export class $CStress$Comments {
    }
    export class $CFluids$Comments {
    }
    export class $CFluids extends $ConfigBase {
        mechanicalPumpRange: $ConfigBase$ConfigInt;
        pipesPlaceFluidSourceBlocks: $ConfigBase$ConfigBool;
        specification: $ModConfigSpec;
        hosePulleyBlockThreshold: $ConfigBase$ConfigInt;
        fillInfinite: $ConfigBase$ConfigBool;
        fluidTankMaxHeight: $ConfigBase$ConfigInt;
        hosePulleyRange: $ConfigBase$ConfigInt;
        bottomlessFluidMode: $ConfigBase$ConfigEnum<$FluidManipulationBehaviour$BottomlessFluidMode>;
        fluidTankCapacity: $ConfigBase$ConfigInt;
        fluidFillPlaceFluidSourceBlocks: $ConfigBase$ConfigBool;
        constructor();
    }
    export class $CKinetics$DeployerAggroSetting extends $Enum<$CKinetics$DeployerAggroSetting> {
        static values(): $CKinetics$DeployerAggroSetting[];
        static valueOf(arg0: string): $CKinetics$DeployerAggroSetting;
        static ALL: $CKinetics$DeployerAggroSetting;
        static CREEPERS: $CKinetics$DeployerAggroSetting;
        static NONE: $CKinetics$DeployerAggroSetting;
    }
    /**
     * Values that may be interpreted as {@link $CKinetics$DeployerAggroSetting}.
     */
    export type $CKinetics$DeployerAggroSetting_ = "all" | "creepers" | "none";
    export class $CRecipes extends $ConfigBase {
        lightSourceCountForRefinedRadiance: $ConfigBase$ConfigInt;
        bulkCutting: $ConfigBase$ConfigBool;
        allowStonecuttingOnSaw: $ConfigBase$ConfigBool;
        maxFireworkIngredientsInCrafter: $ConfigBase$ConfigInt;
        specification: $ModConfigSpec;
        allowShapelessInMixer: $ConfigBase$ConfigBool;
        allowRegularCraftingInCrafter: $ConfigBase$ConfigBool;
        enableRefinedRadianceRecipe: $ConfigBase$ConfigBool;
        allowShapedSquareInPress: $ConfigBase$ConfigBool;
        bulkPressing: $ConfigBase$ConfigBool;
        allowBrewingInMixer: $ConfigBase$ConfigBool;
        enableShadowSteelRecipe: $ConfigBase$ConfigBool;
        allowCastingBySpout: $ConfigBase$ConfigBool;
        displayLogStrippingRecipes: $ConfigBase$ConfigBool;
        constructor();
    }
    export class $CWorldGen extends $ConfigBase {
        disable: $ConfigBase$ConfigBool;
        specification: $ModConfigSpec;
        constructor();
    }
    export class $CEquipment$Comments {
    }
    export class $CTrains$Comments {
    }
    export class $CKinetics extends $ConfigBase {
        fanPushDistance: $ConfigBase$ConfigInt;
        spawnerMovement: $ConfigBase$ConfigEnum<$ContraptionMovementSetting>;
        fanProcessingTime: $ConfigBase$ConfigInt;
        rollerFillDepth: $ConfigBase$ConfigInt;
        minimumWindmillSails: $ConfigBase$ConfigInt;
        kineticValidationFrequency: $ConfigBase$ConfigInt;
        windmillSailsPerRPM: $ConfigBase$ConfigInt;
        minecartContraptionInContainers: $ConfigBase$ConfigBool;
        fan: $ConfigBase$ConfigGroup;
        maxBeltLength: $ConfigBase$ConfigInt;
        maxChainConveyorConnections: $ConfigBase$ConfigInt;
        harvestPartiallyGrown: $ConfigBase$ConfigBool;
        stats: $ConfigBase$ConfigGroup;
        fanRotationArgmax: $ConfigBase$ConfigInt;
        mediumCapacity: $ConfigBase$ConfigFloat;
        amethystMovement: $ConfigBase$ConfigEnum<$ContraptionMovementSetting>;
        obsidianMovement: $ConfigBase$ConfigEnum<$ContraptionMovementSetting>;
        highCapacity: $ConfigBase$ConfigFloat;
        disableStress: $ConfigBase$ConfigBool;
        fanBlockCheckRate: $ConfigBase$ConfigInt;
        highStressImpact: $ConfigBase$ConfigFloat;
        maxPistonPoles: $ConfigBase$ConfigInt;
        maxChassisRange: $ConfigBase$ConfigInt;
        survivalContraptionPickup: $ConfigBase$ConfigBool;
        mediumStressImpact: $ConfigBase$ConfigFloat;
        syncPlayerPickupHitboxWithContraptionHitbox: $ConfigBase$ConfigBool;
        noDropWhenContraptionReplaceBlocks: $ConfigBase$ConfigBool;
        ignoreDeployerAttacks: $ConfigBase$ConfigEnum<$CKinetics$DeployerAggroSetting>;
        specification: $ModConfigSpec;
        ejectorScanInterval: $ConfigBase$ConfigInt;
        crankHungerMultiplier: $ConfigBase$ConfigFloat;
        reinforcedDeepslateMovement: $ConfigBase$ConfigEnum<$ContraptionMovementSetting>;
        harvesterReplants: $ConfigBase$ConfigBool;
        stabiliseStableContraptions: $ConfigBase$ConfigBool;
        maxRotationSpeed: $ConfigBase$ConfigInt;
        fastSpeed: $ConfigBase$ConfigFloat;
        maxChainConveyorLength: $ConfigBase$ConfigInt;
        contraptions: $ConfigBase$ConfigGroup;
        moveItemsToStorage: $ConfigBase$ConfigBool;
        maxEjectorDistance: $ConfigBase$ConfigInt;
        stressValues: $CStress;
        maxRopeLength: $ConfigBase$ConfigInt;
        maxBlocksMoved: $ConfigBase$ConfigInt;
        maxCartCouplingLength: $ConfigBase$ConfigInt;
        mediumSpeed: $ConfigBase$ConfigFloat;
        crushingDamage: $ConfigBase$ConfigInt;
        fanPullDistance: $ConfigBase$ConfigInt;
        constructor();
    }
    export class $CSchematics extends $ConfigBase {
        schematicIdleTimeout: $ConfigBase$ConfigInt;
        schematicannon: $ConfigBase$ConfigGroup;
        schematicannonDelay: $ConfigBase$ConfigInt;
        specification: $ModConfigSpec;
        maxSchematics: $ConfigBase$ConfigInt;
        creativePrintIncludesAir: $ConfigBase$ConfigBool;
        maxTotalSchematicSize: $ConfigBase$ConfigInt;
        maxSchematicPacketSize: $ConfigBase$ConfigInt;
        schematicannonShotsPerGunpowder: $ConfigBase$ConfigInt;
        constructor();
    }
    export class $AllConfigs {
        static byType(arg0: $ModConfig$Type_): $ConfigBase;
        static register(arg0: $ModLoadingContext, arg1: $ModContainer): void;
        static common(): $CCommon;
        static client(): $CClient;
        static server(): $CServer;
        static onLoad(arg0: $ModConfigEvent$Loading): void;
        static onReload(arg0: $ModConfigEvent$Reloading): void;
        constructor();
    }
    export class $CClient extends $ConfigBase {
        ingameMenuConfigButtonRow: $ConfigBase$ConfigInt;
        showExtendedTrackGraphOnF3: $ConfigBase$ConfigBool;
        sound: $ConfigBase$ConfigGroup;
        trains: $ConfigBase$ConfigGroup;
        enableOverstressedTooltip: $ConfigBase$ConfigBool;
        overlayBorderColorTop: $ConfigBase$ConfigInt;
        ignoreFabulousWarning: $ConfigBase$ConfigBool;
        client: $ConfigBase$ConfigGroup;
        showTrackGraphOnF3: $ConfigBase$ConfigBool;
        trainMapColorTheme: $ConfigBase$ConfigEnum<$CClient$TrainMapTheme>;
        overlayBorderColorBot: $ConfigBase$ConfigInt;
        mainMenuConfigButtonRow: $ConfigBase$ConfigInt;
        fluidFogSettings: $ConfigBase$ConfigGroup;
        fanParticleDensity: $ConfigBase$ConfigFloat;
        overlay: $ConfigBase$ConfigGroup;
        overlayCustomColor: $ConfigBase$ConfigBool;
        rotateWhenSeated: $ConfigBase$ConfigBool;
        explainRenderErrors: $ConfigBase$ConfigBool;
        specification: $ModConfigSpec;
        filterItemRenderDistance: $ConfigBase$ConfigFloat;
        syncRecipeViewerSearch: $ConfigBase$ConfigEnum<$StockKeeperRequestScreen$SearchSyncMode>;
        chocolateTransparencyMultiplier: $ConfigBase$ConfigFloat;
        ambientVolumeCap: $ConfigBase$ConfigFloat;
        mountedZoomMultiplier: $ConfigBase$ConfigFloat;
        honeyTransparencyMultiplier: $ConfigBase$ConfigFloat;
        enableAmbientSounds: $ConfigBase$ConfigBool;
        overlayOffsetY: $ConfigBase$ConfigInt;
        overlayOffsetX: $ConfigBase$ConfigInt;
        ingameMenuConfigButtonOffsetX: $ConfigBase$ConfigInt;
        integration: $ConfigBase$ConfigGroup;
        mainMenuConfigButtonOffsetX: $ConfigBase$ConfigInt;
        showTrainMapOverlay: $ConfigBase$ConfigBool;
        tooltips: $ConfigBase$ConfigBool;
        overlayBackgroundColor: $ConfigBase$ConfigInt;
        constructor();
    }
    export class $CStress extends $ConfigBase {
        static setImpact<B extends $Block, P>(arg0: number): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        static setNoImpact<B extends $Block, P>(): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        getImpact(arg0: $Block_): $DoubleSupplier;
        static setCapacity<B extends $Block, P>(arg0: number): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        getCapacity(arg0: $Block_): $DoubleSupplier;
        specification: $ModConfigSpec;
        constructor();
    }
    export class $CTrains extends $ConfigBase {
        maxTrackPlacementLength: $ConfigBase$ConfigInt;
        specification: $ModConfigSpec;
        trainsCauseDamage: $ConfigBase$ConfigBool;
        trainStats: $ConfigBase$ConfigGroup;
        poweredTrainAcceleration: $ConfigBase$ConfigFloat;
        maxBogeyCount: $ConfigBase$ConfigInt;
        trainTurningTopSpeed: $ConfigBase$ConfigFloat;
        maxAssemblyLength: $ConfigBase$ConfigInt;
        poweredTrainTurningTopSpeed: $ConfigBase$ConfigFloat;
        poweredTrainStats: $ConfigBase$ConfigGroup;
        trainAcceleration: $ConfigBase$ConfigFloat;
        poweredTrainTopSpeed: $ConfigBase$ConfigFloat;
        manualTrainSpeedModifier: $ConfigBase$ConfigFloat;
        trainTopSpeed: $ConfigBase$ConfigFloat;
        constructor();
    }
    export class $CCommon$Comments {
    }
}
