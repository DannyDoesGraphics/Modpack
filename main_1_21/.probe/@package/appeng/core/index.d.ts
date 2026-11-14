import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Collection } from "@package/java/util";
import { $ModContainer } from "@package/net/neoforged/fml";
import { $AEKeyType_ } from "@package/appeng/api/stacks";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ModelEvent$RegisterGeometryLoaders, $RegisterParticleProvidersEvent, $RegisterColorHandlersEvent$Block, $ModelEvent$RegisterAdditional, $RegisterColorHandlersEvent$Item } from "@package/net/neoforged/neoforge/client/event";
import { $DoubleSupplier } from "@package/java/util/function";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Throwable, $Object } from "@package/java/lang";
import { $AEBaseBlockEntity } from "@package/appeng/blockentity";
import { $NewRegistryEvent } from "@package/net/neoforged/neoforge/registries";
import { $Level as $Level$1, $Level_ } from "@package/net/minecraft/world/level";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $CreativeModeTab_, $CreativeModeTab, $ItemStack } from "@package/net/minecraft/world/item";
import { $TerminalStyle, $TerminalStyle_, $PowerUnit } from "@package/appeng/api/config";
import { $ChannelMode_, $ChannelMode } from "@package/appeng/api/networking/pathing";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $RegisterCommandsEvent, $BuildCreativeModeTabContentsEvent } from "@package/net/neoforged/neoforge/event";
import { $CableRenderMode } from "@package/appeng/api/parts";
import { $EffectType_ } from "@package/appeng/client";
import { $PageAnchor_, $Guide } from "@package/guideme";
import { $ClientboundPacket_ } from "@package/appeng/core/network";
import { $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ItemDefinition } from "@package/appeng/core/definitions";
import { $Level } from "@package/org/apache/logging/log4j";
import { $HitResult } from "@package/net/minecraft/world/phys";
export * as network from "@package/appeng/core/network";
export * as localization from "@package/appeng/core/localization";
export * as stats from "@package/appeng/core/stats";
export * as definitions from "@package/appeng/core/definitions";
export * as settings from "@package/appeng/core/settings";
export * as worlddata from "@package/appeng/core/worlddata";

declare module "@package/appeng/core" {
    export class $AppEngBase implements $AppEng {
        getPlayers(): $Collection<$ServerPlayer>;
        registerCommands(arg0: $RegisterCommandsEvent): void;
        getCurrentServer(): $MinecraftServer;
        getCableRenderMode(): $CableRenderMode;
        registerSounds(arg0: $Registry<$SoundEvent_>): void;
        registerCreativeTabs(arg0: $Registry<$CreativeModeTab_>): void;
        registerKeyTypes(arg0: $Registry<$AEKeyType_>): void;
        postRegistrationInitialization(): void;
        registerRegistries(arg0: $NewRegistryEvent): void;
        sendToAllNearExcept(arg0: $Player, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Level_, arg6: $ClientboundPacket_): void;
        setPartInteractionPlayer(arg0: $Player): void;
        openGuideAtAnchor(arg0: $PageAnchor_): void;
        getCurrentMouseOver(): $HitResult;
        constructor(arg0: $IEventBus, arg1: $ModContainer);
        get players(): $Collection<$ServerPlayer>;
        get currentServer(): $MinecraftServer;
        get cableRenderMode(): $CableRenderMode;
        set partInteractionPlayer(value: $Player);
        get currentMouseOver(): $HitResult;
    }
    export class $AELog {
        static grid(arg0: string, ...arg1: $Object[]): void;
        static isCraftingLogEnabled(): boolean;
        static isLogEnabled(): boolean;
        static setCraftingLogEnabled(arg0: boolean): void;
        static setDebugLogEnabled(arg0: boolean): void;
        static setGridLogEnabled(arg0: boolean): void;
        static isDebugLogEnabled(): boolean;
        static isCraftingDebugLogEnabled(): boolean;
        static isGridLogEnabled(): boolean;
        static blockUpdate(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockState_, arg3: $AEBaseBlockEntity): void;
        static craftingDebug(arg0: string, ...arg1: $Object[]): void;
        static log(arg0: $Level, arg1: string, ...arg2: $Object[]): void;
        static info(arg0: $Throwable, arg1: string): void;
        static info(arg0: string, ...arg1: $Object[]): void;
        static info(arg0: $Throwable): void;
        static debug(arg0: string, ...arg1: $Object[]): void;
        static error(arg0: $Throwable, arg1: string): void;
        static error(arg0: string, ...arg1: $Object[]): void;
        static error(arg0: $Throwable): void;
        static warn(arg0: $Throwable): void;
        static warn(arg0: $Throwable, arg1: string): void;
        static warn(arg0: string, ...arg1: $Object[]): void;
        static crafting(arg0: string, ...arg1: $Object[]): void;
        static get logEnabled(): boolean;
        static get craftingDebugLogEnabled(): boolean;
    }
    export class $AppEng {
        static makeId(arg0: string): $ResourceLocation;
        static instance(): $AppEng;
        static MOD_ID: string;
        static MOD_NAME: string;
    }
    export interface $AppEng {
        getPlayers(): $Collection<$ServerPlayer>;
        spawnEffect(arg0: $EffectType_, arg1: $Level_, arg2: number, arg3: number, arg4: number, arg5: $Object): void;
        getCurrentServer(): $MinecraftServer;
        openGuideAtAnchor(arg0: $PageAnchor_): void;
        registerHotkey(arg0: string): void;
        getCableRenderMode(): $CableRenderMode;
        getClientLevel(): $Level$1;
        getCurrentMouseOver(): $HitResult;
        sendToAllNearExcept(arg0: $Player, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Level_, arg6: $ClientboundPacket_): void;
        setPartInteractionPlayer(arg0: $Player): void;
        get players(): $Collection<$ServerPlayer>;
        get currentServer(): $MinecraftServer;
        get cableRenderMode(): $CableRenderMode;
        get clientLevel(): $Level$1;
        get currentMouseOver(): $HitResult;
        set partInteractionPlayer(value: $Player);
    }
    export class $AppEngServer extends $AppEngBase {
        constructor(arg0: $IEventBus, arg1: $ModContainer);
    }
    export class $MainCreativeTab {
        static addExternal(arg0: $ResourceKey_<$CreativeModeTab>, arg1: $ItemDefinition<never>): void;
        static add(arg0: $ItemDefinition<never>): void;
        static init(arg0: $Registry<$CreativeModeTab_>): void;
        static initExternal(arg0: $BuildCreativeModeTabContentsEvent): void;
        constructor();
    }
    export class $AEConfig$ClientConfig {
    }
    export class $AEConfig$CommonConfig {
    }
    export class $AppEngClient extends $AppEngBase {
        static instance(): $AppEngClient;
        shouldAddParticles(arg0: $RandomSource): boolean;
        registerParticleFactories(arg0: $RegisterParticleProvidersEvent): void;
        registerBlockColors(arg0: $RegisterColorHandlersEvent$Block): void;
        registerItemColors(arg0: $RegisterColorHandlersEvent$Item): void;
        modelRegistryEventAdditionalModels(arg0: $ModelEvent$RegisterAdditional): void;
        modelRegistryEvent(arg0: $ModelEvent$RegisterGeometryLoaders): void;
        getGuide(): $Guide;
        constructor(arg0: $IEventBus, arg1: $ModContainer);
        get guide(): $Guide;
    }
    export class $AEConfig {
        isEnableEffects(): boolean;
        getP2PTunnelEnergyTax(): number;
        getP2PTunnelTransportTax(): number;
        wireless_getDrainRate(arg0: number): number;
        wireless_getMaxRange(arg0: number): number;
        wireless_getPowerDrain(arg0: number): number;
        isSearchModNameInTooltips(): boolean;
        setSearchModNameInTooltips(arg0: boolean): void;
        isUseExternalSearch(): boolean;
        setUseExternalSearch(arg0: boolean): void;
        isClearExternalSearchOnOpen(): boolean;
        setClearExternalSearchOnOpen(arg0: boolean): void;
        isRememberLastSearch(): boolean;
        setRememberLastSearch(arg0: boolean): void;
        isAutoFocusSearch(): boolean;
        setAutoFocusSearch(arg0: boolean): void;
        isSyncWithExternalSearch(): boolean;
        setSyncWithExternalSearch(arg0: boolean): void;
        getTerminalStyle(): $TerminalStyle;
        setTerminalStyle(arg0: $TerminalStyle_): void;
        getGridEnergyStoragePerNode(): number;
        getCrystalResonanceGeneratorRate(): number;
        nextEnergyUnit(arg0: boolean): void;
        getFormationPlaneEntityLimit(): number;
        isUseLargeFonts(): boolean;
        isUseColoredCraftingStatus(): boolean;
        isDisableColoredCableRecipesInRecipeViewer(): boolean;
        isEnableFacadesInRecipeViewer(): boolean;
        isEnableFacadeRecipesInRecipeViewer(): boolean;
        isExposeNetworkInventoryToEmi(): boolean;
        getCraftingCalculationTimePerTick(): number;
        isSpatialAnchorEnablesRandomTicks(): boolean;
        getSpatialPowerExponent(): number;
        getSpatialPowerMultiplier(): number;
        getChargerChargeRate(): number;
        getWirelessTerminalBattery(): $DoubleSupplier;
        getEntropyManipulatorBattery(): $DoubleSupplier;
        getMatterCannonBattery(): $DoubleSupplier;
        getPortableCellBattery(): $DoubleSupplier;
        getColorApplicatorBattery(): $DoubleSupplier;
        getChargedStaffBattery(): $DoubleSupplier;
        setShowDebugGuiOverlays(arg0: boolean): void;
        isSpawnPressesInMeteoritesEnabled(): boolean;
        isSpawnFlawlessOnlyEnabled(): boolean;
        isMatterCanonBlockDamageEnabled(): boolean;
        isTinyTntBlockDamageEnabled(): boolean;
        getGrowthAcceleratorSpeed(): number;
        isAnnihilationPlaneSkyDustGenerationEnabled(): boolean;
        isBlockUpdateLogEnabled(): boolean;
        isChunkLoggerTraceEnabled(): boolean;
        getChannelMode(): $ChannelMode;
        setChannelModel(arg0: $ChannelMode_): void;
        isPlacementPreviewEnabled(): boolean;
        isTooltipShowCellUpgrades(): boolean;
        isTooltipShowCellContent(): boolean;
        getTooltipMaxCellContentShown(): number;
        isPinAutoCraftedItems(): boolean;
        setPinAutoCraftedItems(arg0: boolean): void;
        isNotifyForFinishedCraftingJobs(): boolean;
        setNotifyForFinishedCraftingJobs(arg0: boolean): void;
        isClearGridOnClose(): boolean;
        setClearGridOnClose(arg0: boolean): void;
        getVibrationChamberBaseEnergyPerFuelTick(): number;
        getVibrationChamberMinEnergyPerGameTick(): number;
        getVibrationChamberMaxEnergyPerGameTick(): number;
        getTerminalMargin(): number;
        getSelectedEnergyUnit(): $PowerUnit;
        static register(arg0: $ModContainer): void;
        save(): void;
        static instance(): $AEConfig;
        isShowDebugGuiOverlays(): boolean;
        isDebugToolsEnabled(): boolean;
        get enableEffects(): boolean;
        get p2PTunnelEnergyTax(): number;
        get p2PTunnelTransportTax(): number;
        get gridEnergyStoragePerNode(): number;
        get crystalResonanceGeneratorRate(): number;
        get formationPlaneEntityLimit(): number;
        get useLargeFonts(): boolean;
        get useColoredCraftingStatus(): boolean;
        get disableColoredCableRecipesInRecipeViewer(): boolean;
        get enableFacadesInRecipeViewer(): boolean;
        get enableFacadeRecipesInRecipeViewer(): boolean;
        get exposeNetworkInventoryToEmi(): boolean;
        get craftingCalculationTimePerTick(): number;
        get spatialAnchorEnablesRandomTicks(): boolean;
        get spatialPowerExponent(): number;
        get spatialPowerMultiplier(): number;
        get chargerChargeRate(): number;
        get wirelessTerminalBattery(): $DoubleSupplier;
        get entropyManipulatorBattery(): $DoubleSupplier;
        get matterCannonBattery(): $DoubleSupplier;
        get portableCellBattery(): $DoubleSupplier;
        get colorApplicatorBattery(): $DoubleSupplier;
        get chargedStaffBattery(): $DoubleSupplier;
        get spawnPressesInMeteoritesEnabled(): boolean;
        get spawnFlawlessOnlyEnabled(): boolean;
        get matterCanonBlockDamageEnabled(): boolean;
        get tinyTntBlockDamageEnabled(): boolean;
        get growthAcceleratorSpeed(): number;
        get annihilationPlaneSkyDustGenerationEnabled(): boolean;
        get blockUpdateLogEnabled(): boolean;
        get chunkLoggerTraceEnabled(): boolean;
        get channelMode(): $ChannelMode;
        set channelModel(value: $ChannelMode_);
        get placementPreviewEnabled(): boolean;
        get tooltipShowCellUpgrades(): boolean;
        get tooltipShowCellContent(): boolean;
        get tooltipMaxCellContentShown(): number;
        get vibrationChamberBaseEnergyPerFuelTick(): number;
        get vibrationChamberMinEnergyPerGameTick(): number;
        get vibrationChamberMaxEnergyPerGameTick(): number;
        get terminalMargin(): number;
        get selectedEnergyUnit(): $PowerUnit;
        get debugToolsEnabled(): boolean;
    }
    export class $FacadeCreativeTab {
        static getDisplayItems(): $Collection<$ItemStack>;
        static init(arg0: $Registry<$CreativeModeTab_>): void;
        constructor();
        static get displayItems(): $Collection<$ItemStack>;
    }
}
