import { $JsonObject, $JsonElement } from "@package/com/google/gson";
import { $ArmorMaterial, $Item_, $Item, $ArmorItem } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ModelTemplate, $TextureMapping, $TextureSlot, $TexturedModel$Provider_ } from "@package/net/minecraft/data/models/model";
import { $ItemModelGeneratorsAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $BlockStateGenerator, $PropertyDispatch, $Variant, $PropertyDispatch$C4, $MultiPartGenerator, $VariantProperties$Rotation_, $Condition$TerminalCondition, $MultiVariantGenerator } from "@package/net/minecraft/data/models/blockstates";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $BlockFamily, $DataProvider, $PackOutput, $CachedOutput_ } from "@package/net/minecraft/data";
import { $BiConsumer, $Consumer, $BiConsumer_, $Function_, $Consumer_, $UnaryOperator_, $BiFunction_, $Supplier, $Function } from "@package/java/util/function";
import { $DripstoneThickness_, $DoorHingeSide_, $DoorHingeSide, $DoubleBlockHalf_, $Property, $BooleanProperty, $DoubleBlockHalf } from "@package/net/minecraft/world/level/block/state/properties";
import { $Holder_, $Holder, $FrontAndTop_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record, $Comparable } from "@package/java/lang";
export * as blockstates from "@package/net/minecraft/data/models/blockstates";
export * as model from "@package/net/minecraft/data/models/model";

declare module "@package/net/minecraft/data/models" {
    export class $BlockModelGenerators$BlockStateGeneratorSupplier {
    }
    export interface $BlockModelGenerators$BlockStateGeneratorSupplier {
    }
    /**
     * Values that may be interpreted as {@link $BlockModelGenerators$BlockStateGeneratorSupplier}.
     */
    export type $BlockModelGenerators$BlockStateGeneratorSupplier_ = (() => void);
    export class $BlockModelGenerators$BlockFamilyProvider {
        fullBlock(block: $Block_, modelTemplate: $ModelTemplate): $BlockModelGenerators$BlockFamilyProvider;
        slab(buttonBlock: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        pressurePlate(buttonBlock: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        stairs(buttonBlock: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        fenceGate(buttonBlock: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        generateFor(family: $BlockFamily): $BlockModelGenerators$BlockFamilyProvider;
        donateModelTo(sourceBlock: $Block_, block: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        customFence(buttonBlock: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        customFenceGate(buttonBlock: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        fence(buttonBlock: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        sign(buttonBlock: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        wall(buttonBlock: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        button(buttonBlock: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        constructor(mapping: $BlockModelGenerators, arg1: $TextureMapping);
    }
    export class $BlockModelGenerators$TintState extends $Enum<$BlockModelGenerators$TintState> {
        getCross(): $ModelTemplate;
        getCrossPot(): $ModelTemplate;
        static values(): $BlockModelGenerators$TintState[];
        static valueOf(arg0: string): $BlockModelGenerators$TintState;
        static NOT_TINTED: $BlockModelGenerators$TintState;
        static TINTED: $BlockModelGenerators$TintState;
        get cross(): $ModelTemplate;
        get crossPot(): $ModelTemplate;
    }
    /**
     * Values that may be interpreted as {@link $BlockModelGenerators$TintState}.
     */
    export type $BlockModelGenerators$TintState_ = "tinted" | "not_tinted";
    export class $BlockModelGenerators {
        static createFence(buttonBlock: $Block_, unpoweredModelLocation: $ResourceLocation_, poweredModelLocation: $ResourceLocation_): $BlockStateGenerator;
        applyRotation(frontAndTop: $FrontAndTop_, variant: $Variant): $Variant;
        static createFacingDispatch(): $PropertyDispatch;
        createSuffixedVariant(block: $Block_, suffix: string, modelTemplate: $ModelTemplate, textureMappingGetter: $Function_<$ResourceLocation, $TextureMapping>): $ResourceLocation;
        createNonTemplateModelBlock(railBlock: $Block_): void;
        createNonTemplateModelBlock(bulbBlock: $Block_, sourceBlock: $Block_): void;
        createSimpleFlatItemModel(flatBlock: $Block_, layerZeroTextureSuffix: string): void;
        createSimpleFlatItemModel(flatItem: $Item_): void;
        createSimpleFlatItemModel(railBlock: $Block_): void;
        skipAutoItemBlock(railBlock: $Block_): void;
        static createSlab(orientableTrapdoorBlock: $Block_, topModelLocation: $ResourceLocation_, bottomModelLocation: $ResourceLocation_, openModelLocation: $ResourceLocation_): $BlockStateGenerator;
        static createStairs(orientableTrapdoorBlock: $Block_, topModelLocation: $ResourceLocation_, bottomModelLocation: $ResourceLocation_, openModelLocation: $ResourceLocation_): $BlockStateGenerator;
        createDoor(railBlock: $Block_): void;
        static createDoor(doorBlock: $Block_, topLeftModelLocation: $ResourceLocation_, topLeftOpenModelLocation: $ResourceLocation_, topRightModelLocation: $ResourceLocation_, topRightOpenModelLocation: $ResourceLocation_, bottomLeftModelLocation: $ResourceLocation_, bottomLeftOpenModelLocation: $ResourceLocation_, bottomRightModelLocation: $ResourceLocation_, bottomRightOpenModelLocation: $ResourceLocation_): $BlockStateGenerator;
        createTrapdoor(railBlock: $Block_): void;
        static createTrapdoor(orientableTrapdoorBlock: $Block_, topModelLocation: $ResourceLocation_, bottomModelLocation: $ResourceLocation_, openModelLocation: $ResourceLocation_): $BlockStateGenerator;
        static createOrientableTrapdoor(orientableTrapdoorBlock: $Block_, topModelLocation: $ResourceLocation_, bottomModelLocation: $ResourceLocation_, openModelLocation: $ResourceLocation_): $BlockStateGenerator;
        createOrientableTrapdoor(railBlock: $Block_): void;
        static createSimpleBlock(block: $Block_, modelLocation: $ResourceLocation_): $MultiVariantGenerator;
        delegateItemModel(item: $Item_, delegateModelLocation: $ResourceLocation_): void;
        delegateItemModel(airLikeBlock: $Block_, particleTexture: $ResourceLocation_): void;
        static createWall(orientableTrapdoorBlock: $Block_, topModelLocation: $ResourceLocation_, bottomModelLocation: $ResourceLocation_, openModelLocation: $ResourceLocation_): $BlockStateGenerator;
        static createCustomFence(customFenceBlock: $Block_, postModelId: $ResourceLocation_, northModelId: $ResourceLocation_, eastModelId: $ResourceLocation_, southModelId: $ResourceLocation_, westModelId: $ResourceLocation_): $BlockStateGenerator;
        static createFenceGate(fenceGateBlock: $Block_, openModelLocation: $ResourceLocation_, closedModelLocation: $ResourceLocation_, wallOpenModelLocation: $ResourceLocation_, wallClosedModelLocation: $ResourceLocation_, uvLock: boolean): $BlockStateGenerator;
        static createPressurePlate(buttonBlock: $Block_, unpoweredModelLocation: $ResourceLocation_, poweredModelLocation: $ResourceLocation_): $BlockStateGenerator;
        static createRotatedVariant(block: $Block_, normalModelLocation: $ResourceLocation_, mirroredModelLocation: $ResourceLocation_): $MultiVariantGenerator;
        static createRotatedVariant(block: $Block_, modelLocation: $ResourceLocation_): $MultiVariantGenerator;
        static createNorthWestMirroredCubeGenerator(columnBlock: $Block_, location: $ResourceLocation_, textureMapping: $TextureMapping, modelOutput: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>): $BlockStateGenerator;
        static createMirroredColumnGenerator(columnBlock: $Block_, location: $ResourceLocation_, textureMapping: $TextureMapping, modelOutput: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>): $BlockStateGenerator;
        static createRotatedPillar(): $PropertyDispatch;
        static createHorizontalFacingDispatch(): $PropertyDispatch;
        static createHorizontalFacingDispatchAlt(): $PropertyDispatch;
        static createTorchHorizontalDispatch(): $PropertyDispatch;
        static createRotatedVariants(modelLocation: $ResourceLocation_): $Variant[];
        static createBooleanModelDispatch(property: $BooleanProperty, trueModelLocation: $ResourceLocation_, falseModelLocation: $ResourceLocation_): $PropertyDispatch;
        createRotatedMirroredVariantBlock(railBlock: $Block_): void;
        createRotatedVariantBlock(railBlock: $Block_): void;
        createBrushableBlock(railBlock: $Block_): void;
        static createMirroredCubeGenerator(columnBlock: $Block_, location: $ResourceLocation_, textureMapping: $TextureMapping, modelOutput: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>): $BlockStateGenerator;
        static configureDoorHalf(properties: $PropertyDispatch$C4<$Direction_, $DoubleBlockHalf_, $DoorHingeSide_, boolean>, half: $DoubleBlockHalf_, leftModelLocation: $ResourceLocation_, leftOpenModelLocation: $ResourceLocation_, rightModelLocation: $ResourceLocation_, rightOpenModelLocation: $ResourceLocation_): $PropertyDispatch$C4<$Direction, $DoubleBlockHalf, $DoorHingeSide, boolean>;
        static createPillarBlockUVLocked(block: $Block_, textureMapping: $TextureMapping, modelOutput: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>): $BlockStateGenerator;
        static createAxisAlignedPillarBlock(axisAlignedPillarBlock: $Block_, modelLocation: $ResourceLocation_): $BlockStateGenerator;
        createAxisAlignedPillarBlock(axisAlignedPillarBlock: $Block_, provider: $TexturedModel$Provider_): void;
        createAxisAlignedPillarBlockCustomModel(airLikeBlock: $Block_, particleTexture: $ResourceLocation_): void;
        createHorizontallyRotatedBlock(axisAlignedPillarBlock: $Block_, provider: $TexturedModel$Provider_): void;
        static createRotatedPillarWithHorizontalVariant(buttonBlock: $Block_, unpoweredModelLocation: $ResourceLocation_, poweredModelLocation: $ResourceLocation_): $BlockStateGenerator;
        createRotatedPillarWithHorizontalVariant(rotatedPillarBlock: $Block_, modelProvider: $TexturedModel$Provider_, horizontalModelProvider: $TexturedModel$Provider_): void;
        createTrivialCube(railBlock: $Block_): void;
        createTrivialBlock(axisAlignedPillarBlock: $Block_, provider: $TexturedModel$Provider_): void;
        createTrivialBlock(block: $Block_, textureMapping: $TextureMapping, modelTemplate: $ModelTemplate): void;
        createHangingSign(particleBlock: $Block_, hangingSignBlock: $Block_, wallHangingSignBlock: $Block_): void;
        copyDoorModel(bulbBlock: $Block_, sourceBlock: $Block_): void;
        copyTrapdoorModel(bulbBlock: $Block_, sourceBlock: $Block_): void;
        woodProvider(logBlock: $Block_): $BlockModelGenerators$WoodProvider;
        createCrossBlockWithDefaultItem(crossBlock: $Block_, tintState: $BlockModelGenerators$TintState_): void;
        createCrossBlockWithDefaultItem(crossBlock: $Block_, tintState: $BlockModelGenerators$TintState_, textureMapping: $TextureMapping): void;
        createCrossBlock(crossBlock: $Block_, tintState: $BlockModelGenerators$TintState_, textureMapping: $TextureMapping): void;
        createCrossBlock(crossBlock: $Block_, tintState: $BlockModelGenerators$TintState_, property: $Property<number>, ...propertyValues: number[]): void;
        createCrossBlock(crossBlock: $Block_, tintState: $BlockModelGenerators$TintState_): void;
        createPlant(growingPlantBlock: $Block_, plantBlock: $Block_, tintState: $BlockModelGenerators$TintState_): void;
        createCoralFans(bulbBlock: $Block_, sourceBlock: $Block_): void;
        createStems(bulbBlock: $Block_, sourceBlock: $Block_): void;
        createDoubleBlock(doubleBlock: $Block_, topHalfModelLocation: $ResourceLocation_, bottomHalfModelLocation: $ResourceLocation_): void;
        createCoral(coralBlock: $Block_, deadCoralBlock: $Block_, coralFullBlock: $Block_, deadCoralFullBlock: $Block_, coralFanBlock: $Block_, deadCoralFanBlock: $Block_, coralWallFanBlock: $Block_, deadCoralWallFanBlock: $Block_): void;
        createDoublePlant(crossBlock: $Block_, tintState: $BlockModelGenerators$TintState_): void;
        createPassiveRail(railBlock: $Block_): void;
        createActiveRail(railBlock: $Block_): void;
        blockEntityModels(entityBlockBaseModel: $Block_, particleBlock: $Block_): $BlockModelGenerators$BlockEntityModelGenerator;
        blockEntityModels(entityBlockModelLocation: $ResourceLocation_, particleBlock: $Block_): $BlockModelGenerators$BlockEntityModelGenerator;
        createAirLikeBlock(airLikeBlock: $Block_, particleTexture: $ResourceLocation_): void;
        createAirLikeBlock(airLikeBlock: $Block_, particleItem: $Item_): void;
        createFullAndCarpetBlocks(bulbBlock: $Block_, sourceBlock: $Block_): void;
        createFlowerBed(railBlock: $Block_): void;
        createColoredBlockWithRandomRotations(modelProvider: $TexturedModel$Provider_, ...coloredBlocks: $Block_[]): void;
        createColoredBlockWithStateRotations(modelProvider: $TexturedModel$Provider_, ...coloredBlocks: $Block_[]): void;
        createGlassBlocks(bulbBlock: $Block_, sourceBlock: $Block_): void;
        createCommandBlock(railBlock: $Block_): void;
        createAnvil(railBlock: $Block_): void;
        createBambooModels(age: number): $List<$Variant>;
        createColumnWithFacing(): $PropertyDispatch;
        static createEmptyOrFullDispatch<T extends $Comparable<T>>(property: $Property<T>, minimumValueForFullVariant: T, fullVariantModelLocation: $ResourceLocation_, emptyVariantModelLocation: $ResourceLocation_): $PropertyDispatch;
        createBeeNest(beeNestBlock: $Block_, textureMappingGetter: $Function_<$Block, $TextureMapping>): void;
        createCropBlock(cropBlock: $Block_, ageProperty: $Property<number>, ...ageToVisualStageMapping: number[]): void;
        createFurnace(axisAlignedPillarBlock: $Block_, provider: $TexturedModel$Provider_): void;
        createCampfires(...campfireBlocks: $Block_[]): void;
        createAzalea(railBlock: $Block_): void;
        createPottedAzalea(railBlock: $Block_): void;
        createMushroomBlock(railBlock: $Block_): void;
        createCraftingTableLike(craftingTableBlock: $Block_, craftingTableMaterialBlock: $Block_, textureMappingGetter: $BiFunction_<$Block, $Block, $TextureMapping>): void;
        createGenericCube(railBlock: $Block_): void;
        createPumpkinVariant(pumpkinBlock: $Block_, columnTextureMapping: $TextureMapping): void;
        createDispenserBlock(railBlock: $Block_): void;
        createCopperBulb(bulbBlock: $Block_, unlit: $ResourceLocation_, unlitPowered: $ResourceLocation_, lit: $ResourceLocation_, litPowered: $ResourceLocation_): $BlockStateGenerator;
        createCopperBulb(railBlock: $Block_): void;
        copyCopperBulbModel(bulbBlock: $Block_, sourceBlock: $Block_): void;
        createAmethystCluster(railBlock: $Block_): void;
        createPointedDripstoneVariant(direction: $Direction_, dripstoneThickness: $DripstoneThickness_): $Variant;
        createNyliumBlock(railBlock: $Block_): void;
        createRotatableColumn(railBlock: $Block_): void;
        createFloorFireModels(fireBlock: $Block_): $List<$ResourceLocation>;
        createSideFireModels(fireBlock: $Block_): $List<$ResourceLocation>;
        createTopFireModels(fireBlock: $Block_): $List<$ResourceLocation>;
        static wrapModels(modelLocations: $List_<$ResourceLocation_>, variantMapper: $UnaryOperator_<$Variant>): $List<$Variant>;
        createLantern(railBlock: $Block_): void;
        createGrassLikeBlock(grassLikeBlock: $Block_, modelLocation: $ResourceLocation_, variant: $Variant): void;
        createWeightedPressurePlate(bulbBlock: $Block_, sourceBlock: $Block_): void;
        copyModel(bulbBlock: $Block_, sourceBlock: $Block_): void;
        createNonTemplateHorizontalBlock(railBlock: $Block_): void;
        createPistonVariant(pistonBlock: $Block_, baseModelLocation: $ResourceLocation_, topTextureMapping: $TextureMapping): void;
        createNormalTorch(bulbBlock: $Block_, sourceBlock: $Block_): void;
        createTurtleEggModel(eggAmount: number, variantId: number): $ResourceLocation;
        createTurtleEggModel(hatchAmount: number, variantName: string, textureMapping: $TextureMapping): $ResourceLocation;
        createMultiface(railBlock: $Block_): void;
        addSlotStateAndRotationVariants(generator: $MultiPartGenerator, condition: $Condition$TerminalCondition, rotation: $VariantProperties$Rotation_): void;
        addBookSlotModel(generator: $MultiPartGenerator, condition: $Condition$TerminalCondition, rotation: $VariantProperties$Rotation_, hasBookProperty: $BooleanProperty, template: $ModelTemplate, hasBook: boolean): void;
        createShulkerBox(railBlock: $Block_): void;
        createGrowingPlant(growingPlantBlock: $Block_, plantBlock: $Block_, tintState: $BlockModelGenerators$TintState_): void;
        createBedItem(bulbBlock: $Block_, sourceBlock: $Block_): void;
        createNetherRoots(bulbBlock: $Block_, sourceBlock: $Block_): void;
        createCandleAndCandleCake(bulbBlock: $Block_, sourceBlock: $Block_): void;
        run(): void;
        family(block: $Block_): $BlockModelGenerators$BlockFamilyProvider;
        static createButton(buttonBlock: $Block_, unpoweredModelLocation: $ResourceLocation_, poweredModelLocation: $ResourceLocation_): $BlockStateGenerator;
        static MULTIFACE_GENERATOR: $List<$Pair<$BooleanProperty, $Function<$ResourceLocation, $Variant>>>;
        blockStateOutput: $Consumer<$BlockStateGenerator>;
        modelOutput: $BiConsumer<$ResourceLocation, $Supplier<$JsonElement>>;
        constructor(blockStateOutput: $Consumer_<$BlockStateGenerator>, modelOutput: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>, skippedAutoModelsOutput: $Consumer_<$Item>);
    }
    export class $ModelProvider implements $DataProvider {
        /**
         * Gets a name for this provider, to use in logging.
         */
        getName(): string;
        run(output: $CachedOutput_): $CompletableFuture<never>;
        constructor(output: $PackOutput);
        get name(): string;
    }
    export class $ItemModelGenerators implements $ItemModelGeneratorsAccessor {
        getItemModelForTrimMaterial(modelLocation: $ResourceLocation_, trimId: string): $ResourceLocation;
        generateFlatItem(item: $Item_, layerZeroItem: $Item_, modelTemplate: $ModelTemplate): void;
        generateFlatItem(item: $Item_, modelLocationSuffix: string, modelTemplate: $ModelTemplate): void;
        generateFlatItem(item: $Item_, modelTemplate: $ModelTemplate): void;
        generateItemWithOverlay(item: $Item_): void;
        generateLayeredItem(modelLocation: $ResourceLocation_, layer0: $ResourceLocation_, layer1: $ResourceLocation_): void;
        generateLayeredItem(modelLocation: $ResourceLocation_, layer0: $ResourceLocation_, layer1: $ResourceLocation_, layer2: $ResourceLocation_): void;
        generateCompassItem(item: $Item_): void;
        generateClockItem(item: $Item_): void;
        generateBaseArmorTrimTemplate(modelLocation: $ResourceLocation_, modelGetter: $Map_<$TextureSlot, $ResourceLocation_>, armorMaterial: $Holder_<$ArmorMaterial>): $JsonObject;
        generateArmorTrims(armorItem: $ArmorItem): void;
        static getGENERATED_TRIM_MODELS$create_$md$5c91d2$0(): $List<any>;
        run(): void;
        output: $BiConsumer<$ResourceLocation, $Supplier<$JsonElement>>;
        static GENERATED_TRIM_MODELS: $List<$ItemModelGenerators$TrimModelData>;
        static TRIM_TYPE_PREDICATE_ID: $ResourceLocation;
        constructor(output: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>);
        static get GENERATED_TRIM_MODELS$create_$md$5c91d2$0(): $List<any>;
    }
    export class $BlockModelGenerators$WoodProvider {
        wood(logBlock: $Block_): $BlockModelGenerators$WoodProvider;
        logWithHorizontal(logBlock: $Block_): $BlockModelGenerators$WoodProvider;
        logUVLocked(logBlock: $Block_): $BlockModelGenerators$WoodProvider;
        log(logBlock: $Block_): $BlockModelGenerators$WoodProvider;
        constructor(logMapping: $BlockModelGenerators, arg1: $TextureMapping);
    }
    export class $ItemModelGenerators$TrimModelData extends $Record {
        itemModelIndex(): number;
        overrideArmorMaterials(): $Map<$Holder<$ArmorMaterial>, string>;
        name(): string;
        name(armorMaterial: $Holder_<$ArmorMaterial>): string;
        constructor(arg0: string, arg1: number, arg2: $Map_<$Holder_<$ArmorMaterial>, string>);
    }
    /**
     * Values that may be interpreted as {@link $ItemModelGenerators$TrimModelData}.
     */
    export type $ItemModelGenerators$TrimModelData_ = { overrideArmorMaterials?: $Map_<$Holder_<$ArmorMaterial>, string>, name?: string, itemModelIndex?: number,  } | [overrideArmorMaterials?: $Map_<$Holder_<$ArmorMaterial>, string>, name?: string, itemModelIndex?: number, ];
    export class $BlockModelGenerators$BlockEntityModelGenerator {
        createWithCustomBlockItemModel(modelTemplate: $ModelTemplate, ...blocks: $Block_[]): $BlockModelGenerators$BlockEntityModelGenerator;
        createWithoutBlockItem(...blocks: $Block_[]): $BlockModelGenerators$BlockEntityModelGenerator;
        create(...blocks: $Block_[]): $BlockModelGenerators$BlockEntityModelGenerator;
        constructor(baseModel: $BlockModelGenerators, particleBlock: $ResourceLocation_, arg2: $Block_);
    }
    export class $BlockModelGenerators$BookSlotModelCacheKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockModelGenerators$BookSlotModelCacheKey}.
     */
    export type $BlockModelGenerators$BookSlotModelCacheKey_ = { modelSuffix?: string, template?: $ModelTemplate,  } | [modelSuffix?: string, template?: $ModelTemplate, ];
}
