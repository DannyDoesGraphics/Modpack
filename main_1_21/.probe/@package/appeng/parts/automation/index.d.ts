import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $BasicUnbakedModel } from "@package/appeng/client/render";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ConfigInventory } from "@package/appeng/util";
import { $IActionSource } from "@package/appeng/api/networking/security";
import { $AEKeyType_, $KeyCounter, $AEKeyType, $AEKey } from "@package/appeng/api/stacks";
import { $RandomSource } from "@package/net/minecraft/util";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $ChunkRenderTypeSet } from "@package/net/neoforged/neoforge/client";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Item_, $Item, $Item$Properties, $ItemStack_, $ItemStack, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $IGridNode } from "@package/appeng/api/networking";
import { $Actionable_, $Setting, $RedstoneMode } from "@package/appeng/api/config";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ICraftingProvider, $ICraftingLink, $ICraftingRequester } from "@package/appeng/api/networking/crafting";
import { $ModelData, $ModelProperty } from "@package/net/neoforged/neoforge/client/model/data";
import { $TickRateModulation, $IGridTickable, $TickingRequest } from "@package/appeng/api/networking/ticking";
import { $IDynamicBakedModel } from "@package/net/neoforged/neoforge/client/model";
import { $BlockPlaceContext } from "@package/net/minecraft/world/item/context";
import { $PartItem } from "@package/appeng/items/parts";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $IEnergySource_ } from "@package/appeng/api/networking/energy";
import { $ModelState, $BakedModel, $ModelBaker, $Material, $UnbakedModel } from "@package/net/minecraft/client/resources/model";
import { $UUID_, $Set_, $Map, $Set, $List, $List_, $Collection } from "@package/java/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Supplier_, $Predicate_, $Predicate, $Function_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ItemEnchantments_, $ItemEnchantments } from "@package/net/minecraft/world/item/enchantment";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Record, $Runnable_ } from "@package/java/lang";
import { $ISubMenu } from "@package/appeng/menu";
import { $IPriorityHost, $IConfigInvHost } from "@package/appeng/helpers";
import { $BlockAndTintGetter, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $GenericStackInv } from "@package/appeng/helpers/externalstorage";
import { $ItemOverrides, $BakedQuad, $ItemTransforms } from "@package/net/minecraft/client/renderer/block/model";
import { $ExternalStorageFacade } from "@package/appeng/me/storage";
import { $IUpgradeInventory, $IUpgradeableObject } from "@package/appeng/api/upgrades";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $ImmutableSet } from "@package/com/google/common/collect";
import { $IPartCollisionHelper, $IPartItem, $IPartModel } from "@package/appeng/api/parts";
import { $TickRates_ } from "@package/appeng/core/settings";
import { $KeyTypeSelection, $IConfigManager, $KeyTypeSelectionHost, $IConfigurableObject } from "@package/appeng/api/util";
import { $ISubMenuHost, $AEKeyFilter, $IStorageMounts_, $MEStorage, $IStorageProvider } from "@package/appeng/api/storage";
import { $IPatternDetails } from "@package/appeng/api/crafting";
import { $AEBasePart, $PartModel } from "@package/appeng/parts";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $RenderContext } from "@package/net/fabricmc/fabric/api/renderer/v1/render";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ExternalStorageStrategy$Factory_, $StackImportStrategy_, $StackImportStrategy, $PlacementStrategy, $PlacementStrategy$Factory_, $StackImportStrategy$Factory_, $ExternalStorageStrategy, $PickupStrategy$Result, $StackExportStrategy, $PickupStrategy$Factory_, $StackTransferContext, $PickupSink_, $StackExportStrategy$Factory_, $PickupStrategy } from "@package/appeng/api/behaviors";

declare module "@package/appeng/parts/automation" {
    export class $EnergyLevelEmitterPart extends $AbstractLevelEmitterPart {
        static MODEL_STATUS_HAS_CHANNEL: $ResourceLocation;
        static MODEL_ON_OFF: $PartModel;
        static MODEL_OFF_OFF: $PartModel;
        static MODEL_OFF_HAS_CHANNEL: $PartModel;
        static MODEL_BASE_ON: $ResourceLocation;
        static MODEL_STATUS_OFF: $ResourceLocation;
        static MODEL_ON_HAS_CHANNEL: $PartModel;
        static MODEL_OFF_ON: $PartModel;
        static MODEL_BASE_OFF: $ResourceLocation;
        static MODEL_STATUS_ON: $ResourceLocation;
        static MODEL_ON_ON: $PartModel;
        constructor(arg0: $IPartItem<never>);
    }
    export class $PlaneBakedModel implements $IDynamicBakedModel {
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        isCustomRenderer(): boolean;
        getOverrides(): $ItemOverrides;
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        useAmbientOcclusion(): boolean;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        /**
         * @deprecated
         */
        getTransforms(): $ItemTransforms;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        isVanillaAdapter(): boolean;
        get customRenderer(): boolean;
        get overrides(): $ItemOverrides;
        get gui3d(): boolean;
        get transforms(): $ItemTransforms;
        get vanillaAdapter(): boolean;
    }
    export class $ItemPickupStrategy implements $PickupStrategy {
        tryPickup(arg0: $IEnergySource_, arg1: $PickupSink_): $PickupStrategy$Result;
        canPickUpEntity(arg0: $Entity): boolean;
        pickUpEntity(arg0: $IEnergySource_, arg1: $PickupSink_, arg2: $Entity): boolean;
        static isItemBlacklisted(arg0: $Item_): boolean;
        static isBlockBlacklisted(arg0: $Block_): boolean;
        reset(): void;
        static TAG_BLACKLIST: $ResourceLocation;
        constructor(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockEntity, arg4: $ItemEnchantments_, arg5: $UUID_);
    }
    export class $StorageExportStrategy<T, S> implements $StackExportStrategy {
        static createItem(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_): $StackExportStrategy;
        static createFluid(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_): $StackExportStrategy;
        transfer(arg0: $StackTransferContext, arg1: $AEKey, arg2: number): number;
        push(arg0: $AEKey, arg1: number, arg2: $Actionable_): number;
        constructor(arg0: $BlockCapability<T, $Direction_>, arg1: $HandlerStrategy<T, S>, arg2: $ServerLevel, arg3: $BlockPos_, arg4: $Direction_);
    }
    export class $AnnihilationPlanePart extends $AEBasePart implements $IGridTickable {
        getEnchantments(): $ItemEnchantments;
        static getModels(): $List<$IPartModel>;
        getTickingRequest(arg0: $IGridNode): $TickingRequest;
        tickingRequest(arg0: $IGridNode, arg1: number): $TickRateModulation;
        getConnections(): $PlaneConnections;
        constructor(arg0: $IPartItem<never>);
        get enchantments(): $ItemEnchantments;
        static get models(): $List<$IPartModel>;
        get connections(): $PlaneConnections;
    }
    export class $ItemPlacementStrategy$PlaneDirectionalPlaceContext extends $BlockPlaceContext {
    }
    export class $StackExportFacade implements $StackExportStrategy {
        transfer(arg0: $StackTransferContext, arg1: $AEKey, arg2: number): number;
        push(arg0: $AEKey, arg1: number, arg2: $Actionable_): number;
        constructor(arg0: $List_<$StackExportStrategy>);
    }
    export class $UpgradeablePart extends $AEBasePart implements $IConfigurableObject, $IUpgradeableObject {
        getConfigManager(): $IConfigManager;
        upgradesChanged(): void;
        getRSMode(): $RedstoneMode;
        getUpgrades(): $IUpgradeInventory;
        getInstalledUpgrades(arg0: $ItemLike_): number;
        isUpgradedWith(arg0: $ItemLike_): boolean;
        constructor(arg0: $IPartItem<never>);
        get configManager(): $IConfigManager;
        get RSMode(): $RedstoneMode;
        get upgrades(): $IUpgradeInventory;
    }
    export class $AnnihilationPlanePart$ContinuousGeneration extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $AnnihilationPlanePart$ContinuousGeneration}.
     */
    export type $AnnihilationPlanePart$ContinuousGeneration_ = { what?: $AEKey, ticks?: number, amount?: number,  } | [what?: $AEKey, ticks?: number, amount?: number, ];
    export class $ItemPickupStrategy$HarvestTool extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ItemPickupStrategy$HarvestTool}.
     */
    export type $ItemPickupStrategy$HarvestTool_ = { item?: $ItemStack_, fallback?: boolean,  } | [item?: $ItemStack_, fallback?: boolean, ];
    export class $IOBusPart extends $UpgradeablePart implements $IGridTickable, $IConfigInvHost, $ISubMenuHost {
        getTickingRequest(arg0: $IGridNode): $TickingRequest;
        tickingRequest(arg0: $IGridNode, arg1: number): $TickRateModulation;
        returnToMainMenu(arg0: $Player, arg1: $ISubMenu): void;
        getMainMenuIcon(): $ItemStack;
        getConfig(): $GenericStackInv;
        static MODELS_HAS_CHANNEL: $IPartModel;
        static MODEL_BASE: $ResourceLocation;
        static MODELS_ON: $IPartModel;
        static MODELS_OFF: $IPartModel;
        constructor(arg0: $TickRates_, arg1: $Set_<$AEKeyType_>, arg2: $IPartItem<never>);
        get mainMenuIcon(): $ItemStack;
        get config(): $GenericStackInv;
    }
    export class $ForgeExternalStorageStrategy<T, S> implements $ExternalStorageStrategy {
        static createItem(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_): $ExternalStorageStrategy;
        static createFluid(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_): $ExternalStorageStrategy;
        createWrapper(arg0: boolean, arg1: $Runnable_): $MEStorage;
        constructor(arg0: $BlockCapability<T, $Direction_>, arg1: $HandlerStrategy<T, S>, arg2: $ServerLevel, arg3: $BlockPos_, arg4: $Direction_);
    }
    export class $StorageLevelEmitterPart extends $AbstractLevelEmitterPart implements $IConfigInvHost, $ICraftingProvider {
        isBusy(): boolean;
        getAvailablePatterns(): $List<$IPatternDetails>;
        pushPattern(arg0: $IPatternDetails, arg1: $KeyCounter[]): boolean;
        getEmitableItems(): $Set<$AEKey>;
        getConfig(): $ConfigInventory;
        getPatternPriority(): number;
        static MODEL_STATUS_HAS_CHANNEL: $ResourceLocation;
        static MODEL_ON_OFF: $PartModel;
        static MODEL_OFF_OFF: $PartModel;
        static MODEL_OFF_HAS_CHANNEL: $PartModel;
        static MODEL_BASE_ON: $ResourceLocation;
        static MODEL_STATUS_OFF: $ResourceLocation;
        static MODEL_ON_HAS_CHANNEL: $PartModel;
        static MODEL_OFF_ON: $PartModel;
        static MODEL_BASE_OFF: $ResourceLocation;
        static MODEL_STATUS_ON: $ResourceLocation;
        static MODEL_ON_ON: $PartModel;
        constructor(arg0: $IPartItem<never>);
        get busy(): boolean;
        get availablePatterns(): $List<$IPatternDetails>;
        get emitableItems(): $Set<$AEKey>;
        get config(): $ConfigInventory;
        get patternPriority(): number;
    }
    export class $StackImportFacade implements $StackImportStrategy {
        transfer(arg0: $StackTransferContext): boolean;
        constructor(arg0: $List_<$StackImportStrategy_>);
    }
    export class $FormationPlanePart extends $UpgradeablePart implements $IStorageProvider, $IPriorityHost, $IConfigInvHost {
        static getModels(): $List<$IPartModel>;
        mountInventories(arg0: $IStorageMounts_): void;
        onSettingChanged(arg0: $IConfigManager, arg1: $Setting<never>): void;
        returnToMainMenu(arg0: $Player, arg1: $ISubMenu): void;
        getMainMenuIcon(): $ItemStack;
        setPriority(arg0: number): void;
        getPriority(): number;
        getConfig(): $ConfigInventory;
        getConnections(): $PlaneConnections;
        constructor(arg0: $IPartItem<never>);
        static get models(): $List<$IPartModel>;
        get mainMenuIcon(): $ItemStack;
        get config(): $ConfigInventory;
        get connections(): $PlaneConnections;
    }
    export class $AbstractLevelEmitterPart extends $UpgradeablePart {
        onSettingChanged(arg0: $IConfigManager, arg1: $Setting<never>): void;
        getReportingValue(): number;
        setReportingValue(arg0: number): void;
        constructor(arg0: $IPartItem<never>);
    }
    export class $PlaneModelData {
        static CONNECTIONS: $ModelProperty<$PlaneConnections>;
    }
    export class $ExportBusPart extends $IOBusPart implements $ICraftingRequester {
        getRequestedJobs(): $ImmutableSet<$ICraftingLink>;
        insertCraftedItems(arg0: $ICraftingLink, arg1: $AEKey, arg2: number, arg3: $Actionable_): number;
        jobStateChange(arg0: $ICraftingLink): void;
        static MODELS_HAS_CHANNEL: $IPartModel;
        static MODEL_BASE: $ResourceLocation;
        static MODELS_ON: $IPartModel;
        static MODELS_OFF: $IPartModel;
        constructor(arg0: $IPartItem<never>);
        get requestedJobs(): $ImmutableSet<$ICraftingLink>;
    }
    export class $HandlerStrategy<C, S> {
        getFacade(arg0: C): $ExternalStorageFacade;
        insert(arg0: C, arg1: $AEKey, arg2: number, arg3: $Actionable_): number;
        isSupported(arg0: $AEKey): boolean;
        getStack(arg0: $AEKey, arg1: number): S;
        getKeyType(): $AEKeyType;
        static FLUIDS: $HandlerStrategy<$IFluidHandler, $FluidStack>;
        static ITEMS: $HandlerStrategy<$IItemHandler, $ItemStack>;
        constructor(arg0: $AEKeyType_);
        get keyType(): $AEKeyType;
    }
    export class $PlacementStrategyFacade implements $PlacementStrategy {
    }
    export class $ItemPlacementStrategy implements $PlacementStrategy {
        placeInWorld(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: boolean): number;
        clearBlocked(): void;
        constructor(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockEntity, arg4: $UUID_);
    }
    export class $FluidPickupStrategy implements $PickupStrategy {
        tryPickup(arg0: $IEnergySource_, arg1: $PickupSink_): $PickupStrategy$Result;
        canPickUpEntity(arg0: $Entity): boolean;
        pickUpEntity(arg0: $IEnergySource_, arg1: $PickupSink_, arg2: $Entity): boolean;
        reset(): void;
        constructor(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockEntity, arg4: $ItemEnchantments_, arg5: $UUID_);
    }
    export class $PlaneConnectionHelper {
        getBoxes(arg0: $IPartCollisionHelper): void;
        updateConnections(): void;
        getConnections(): $PlaneConnections;
        constructor(arg0: $AEBasePart);
        get connections(): $PlaneConnections;
    }
    export class $FluidPlacementStrategy implements $PlacementStrategy {
        placeInWorld(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: boolean): number;
        clearBlocked(): void;
        constructor(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockEntity, arg4: $UUID_);
    }
    export class $PlaneConnections {
        isRight(): boolean;
        isLeft(): boolean;
        static of(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): $PlaneConnections;
        getIndex(): number;
        isUp(): boolean;
        isDown(): boolean;
        static PERMUTATIONS: $List<$PlaneConnections>;
        get right(): boolean;
        get left(): boolean;
        get index(): number;
        get up(): boolean;
        get down(): boolean;
    }
    export class $ImportBusPart extends $IOBusPart implements $KeyTypeSelectionHost {
        getKeyTypeSelection(): $KeyTypeSelection;
        static MODELS_HAS_CHANNEL: $IPartModel;
        static MODEL_BASE: $ResourceLocation;
        static MODELS_ON: $IPartModel;
        static MODELS_OFF: $IPartModel;
        constructor(arg0: $IPartItem<never>);
        get keyTypeSelection(): $KeyTypeSelection;
    }
    export class $PlaneModels {
        getModels(): $List<$IPartModel>;
        getModel(arg0: boolean, arg1: boolean): $IPartModel;
        static MODEL_CHASSIS_OFF: $ResourceLocation;
        static MODEL_CHASSIS_HAS_CHANNEL: $ResourceLocation;
        static MODEL_CHASSIS_ON: $ResourceLocation;
        constructor(arg0: string, arg1: string);
        get models(): $List<$IPartModel>;
    }
    export class $FormationPlanePart$InWorldStorage implements $MEStorage {
        getAvailableStacks(arg0: $KeyCounter): void;
        getAvailableStacks(): $KeyCounter;
        isPreferredStorageFor(arg0: $AEKey, arg1: $IActionSource): boolean;
        extract(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        insert(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
    }
    export class $StackWorldBehaviors {
        static createExternalStorageStrategies(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_): $Map<$AEKeyType, $ExternalStorageStrategy>;
        static withImportStrategy(): $Set<$AEKeyType>;
        static hasImportStrategyTypeFilter(): $Predicate<$AEKeyType>;
        static createImportFacade(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_, arg3: $Predicate_<$AEKeyType>): $StackImportStrategy;
        static registerImportStrategy(arg0: $AEKeyType_, arg1: $StackImportStrategy$Factory_): void;
        static withExportStrategy(): $Set<$AEKeyType>;
        static createExportFacade(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_): $StackExportStrategy;
        static registerExportStrategy(arg0: $AEKeyType_, arg1: $StackExportStrategy$Factory_): void;
        static withPlacementStrategy(): $Set<$AEKeyType>;
        static createPlacementStrategies(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockEntity, arg4: $UUID_): $PlacementStrategy;
        static createPickupStrategies(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockEntity, arg4: $ItemEnchantments_, arg5: $UUID_): $List<$PickupStrategy>;
        static registerPlacementStrategy(arg0: $AEKeyType_, arg1: $PlacementStrategy$Factory_): void;
        static registerPickupStrategy(arg0: $AEKeyType_, arg1: $PickupStrategy$Factory_): void;
        static registerExternalStorageStrategy(arg0: $AEKeyType_, arg1: $ExternalStorageStrategy$Factory_): void;
        static hasImportStrategyFilter(): $AEKeyFilter;
        static hasExportStrategyFilter(): $AEKeyFilter;
        static hasPlacementStrategy(): $AEKeyFilter;
    }
    export class $StackTransferContextImpl implements $StackTransferContext {
    }
    export class $StorageImportStrategy<T, S> implements $StackImportStrategy {
        static createItem(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_): $StackImportStrategy;
        static createFluid(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_): $StackImportStrategy;
        transfer(arg0: $StackTransferContext): boolean;
        constructor(arg0: $BlockCapability<T, $Direction_>, arg1: $HandlerStrategy<T, S>, arg2: $ServerLevel, arg3: $BlockPos_, arg4: $Direction_);
    }
    export class $AnnihilationPlanePartItem extends $PartItem<$AnnihilationPlanePart> {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $PlaneModel implements $BasicUnbakedModel {
        bake(arg0: $ModelBaker, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelState): $BakedModel;
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>): void;
        getDependencies(): $Collection<$ResourceLocation>;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $ResourceLocation_);
        get dependencies(): $Collection<$ResourceLocation>;
    }
}
