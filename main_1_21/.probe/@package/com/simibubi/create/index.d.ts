import { $MechanicalMixerBlock, $MechanicalMixerBlockEntity } from "@package/com/simibubi/create/content/kinetics/mixer";
import { $PackagePortMenu } from "@package/com/simibubi/create/content/logistics/packagePort";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $IRecipeTypeInfo } from "@package/com/simibubi/create/foundation/recipe";
import { $MechanicalPressBlockEntity, $MechanicalPressBlock } from "@package/com/simibubi/create/content/kinetics/press";
import { $ModContainer } from "@package/net/neoforged/fml";
import { $PackageEntity, $PackageItem$PackageOrderData } from "@package/com/simibubi/create/content/logistics/box";
import { $SawBlockEntity, $SawBlock } from "@package/com/simibubi/create/content/kinetics/saw";
import { $Lazy } from "@package/net/neoforged/neoforge/common/util";
import { $TreeFertilizerItem, $BuildersTeaItem } from "@package/com/simibubi/create/content/equipment";
import { $BeltConnectorItem } from "@package/com/simibubi/create/content/kinetics/belt/item";
import { $SlidingDoorBlock, $SlidingDoorBlockEntity } from "@package/com/simibubi/create/content/decoration/slidingDoor";
import { $ExperienceBlock, $ExperienceNuggetItem } from "@package/com/simibubi/create/content/materials";
import { $ToolboxBlockEntity, $ToolboxMenu, $ToolboxMountedStorageType, $ToolboxInventory, $ToolboxBlock } from "@package/com/simibubi/create/content/equipment/toolbox";
import { $ItemHatchBlock, $ItemHatchBlockEntity } from "@package/com/simibubi/create/content/logistics/itemHatch";
import { $BeltTunnelBlockEntity, $BeltTunnelBlock, $BrassTunnelBlock, $BrassTunnelBlockEntity } from "@package/com/simibubi/create/content/logistics/tunnel";
import { $RepackagerBlockEntity, $RepackagerBlock } from "@package/com/simibubi/create/content/logistics/packager/repackager";
import { $TurntableBlock, $TurntableBlockEntity } from "@package/com/simibubi/create/content/kinetics/turntable";
import { $CTSpriteShiftEntry } from "@package/com/simibubi/create/foundation/block/connected";
import { $PotionFluid, $PotionFluid$BottleType } from "@package/com/simibubi/create/content/fluids/potion";
import { $ContraptionType_, $ContraptionType } from "@package/com/simibubi/create/api/contraption";
import { $ClockworkBearingBlock, $WindmillBearingBlockEntity, $MechanicalBearingBlock, $WindmillBearingBlock, $MechanicalBearingBlockEntity, $ClockworkBearingBlockEntity, $SailBlock } from "@package/com/simibubi/create/content/contraptions/bearing";
import { $RedstoneContactBlock } from "@package/com/simibubi/create/content/redstone/contact";
import { $DepotMountedStorageType } from "@package/com/simibubi/create/content/logistics/depot/storage";
import { $EntityAttributeCreationEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $TerrainTools, $TerrainBrushes, $PlacementOptions, $WorldshaperItem } from "@package/com/simibubi/create/content/equipment/zapper/terrainzapper";
import { $CopycatBlockEntity, $CopycatStepBlock, $CopycatPanelBlock } from "@package/com/simibubi/create/content/decoration/copycat";
import { $ControllerRailBlock } from "@package/com/simibubi/create/content/redstone/rail";
import { $PackagerLinkBlockEntity, $PackagerLinkBlock, $GlobalLogisticsManager } from "@package/com/simibubi/create/content/logistics/packagerLink";
import { $SchematicTableBlockEntity, $SchematicTableBlock, $SchematicTableMenu } from "@package/com/simibubi/create/content/schematics/table";
import { $GogglesItem } from "@package/com/simibubi/create/content/equipment/goggles";
import { $BezierTrackPointLocation, $FakeTrackBlock, $TrackPlacement$ConnectingFrom, $TrackBlock, $FakeTrackBlockEntity, $TrackBlockEntity } from "@package/com/simibubi/create/content/trains/track";
import { $ChassisBlockEntity, $LinearChassisBlock, $StickerBlock, $StickerBlockEntity, $RadialChassisBlock } from "@package/com/simibubi/create/content/contraptions/chassis";
import { $Random, $List, $UUID, $Map } from "@package/java/util";
import { $ClipboardOverrides$ClipboardType, $ClipboardBlockEntity, $ClipboardContent, $ClipboardEntry, $ClipboardBlock } from "@package/com/simibubi/create/content/equipment/clipboard";
import { $DataProvider, $CachedOutput_, $DataGenerator } from "@package/net/minecraft/data";
import { $ListFilterItem, $PackageFilterMenu, $AttributeFilterWhitelistMode, $AttributeFilterMenu, $FilterMenu, $PackageFilterItem, $AttributeFilterItem } from "@package/com/simibubi/create/content/logistics/filter";
import { $BlockEntityEntry, $FluidEntry, $BlockEntry, $MenuEntry, $EntityEntry, $RegistryEntry, $ItemEntry } from "@package/com/tterrag/registrate/util/entry";
import { $Direction_, $Direction, $Holder_, $BlockPos, $Holder$Reference, $Vec3i, $Holder, $Direction$Axis, $Direction$Axis_, $Registry } from "@package/net/minecraft/core";
import { $SymmetryMirror } from "@package/com/simibubi/create/content/equipment/symmetryWand/mirror";
import { $CopperBlockSet, $WrenchableDirectionalBlock, $DyedBlockList } from "@package/com/simibubi/create/foundation/block";
import { $ModelSwapper } from "@package/com/simibubi/create/foundation/model";
import { $Enum, $Record } from "@package/java/lang";
import { $RedstoneLinkNetworkHandler, $RedstoneLinkBlockEntity, $RedstoneLinkBlock } from "@package/com/simibubi/create/content/redstone/link";
import { $RegisterEvent, $RegisterEvent$RegisterHelper_, $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $ServerLagger } from "@package/com/simibubi/create/infrastructure/command";
import { $DisplayLinkBlock, $ClickToLinkBlockItem$ClickToLinkData, $DisplayLinkBlockEntity } from "@package/com/simibubi/create/content/redstone/displayLink";
import { $Fluid, $Fluid_, $FluidState } from "@package/net/minecraft/world/level/material";
import { $SpeedControllerBlock, $SpeedControllerBlockEntity } from "@package/com/simibubi/create/content/kinetics/speedController";
import { $HauntedBellBlock, $SoulPulseEffectHandler, $PeculiarBellBlock, $PeculiarBellBlockEntity, $HauntedBellBlockEntity } from "@package/com/simibubi/create/content/equipment/bell";
import { $CreativeCrateMountedStorageType, $CreativeCrateBlockEntity, $CreativeCrateBlock } from "@package/com/simibubi/create/content/logistics/crate";
import { $MechanicalCrafterBlock, $MechanicalCrafterBlockEntity } from "@package/com/simibubi/create/content/kinetics/crafter";
import { $FactoryPanelBlock, $FactoryPanelBlockEntity, $FactoryPanelSetItemMenu } from "@package/com/simibubi/create/content/logistics/factoryBoard";
import { $DeployerBlock, $DeployerBlockEntity } from "@package/com/simibubi/create/content/kinetics/deployer";
import { $EntityDataSerializer } from "@package/net/minecraft/network/syncher";
import { $CreativeFluidTankMountedStorageType } from "@package/com/simibubi/create/content/fluids/tank/storage/creative";
import { $TagDependentIngredientItem } from "@package/com/simibubi/create/foundation/item";
import { $AutoRequestData, $RedstoneRequesterBlockEntity, $RedstoneRequesterMenu, $RedstoneRequesterBlock } from "@package/com/simibubi/create/content/logistics/redstoneRequester";
import { $SchematicItem, $SchematicAndQuillItem, $ServerSchematicLoader, $SchematicProcessor } from "@package/com/simibubi/create/content/schematics";
import { $ChainConveyorBlock, $ChainConveyorBlockEntity } from "@package/com/simibubi/create/content/kinetics/chainConveyor";
import { $FluidValveBlockEntity, $FluidValveBlock } from "@package/com/simibubi/create/content/fluids/pipes/valve";
import { $VirtualFluid, $FluidTransportBehaviour$AttachmentTypes$ComponentPartials } from "@package/com/simibubi/create/content/fluids";
import { $DamageType_, $DamageType } from "@package/net/minecraft/world/damagesource";
import { $DispenserMountedStorageType } from "@package/com/simibubi/create/content/contraptions/behaviour/dispenser/storage";
import { $RecipeSerializer_, $Recipe, $RecipeHolder, $RecipeInput, $RecipeSerializer, $RecipeHolder_, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $MillstoneBlock, $MillstoneBlockEntity } from "@package/com/simibubi/create/content/kinetics/millstone";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $GlobalRailwayManager } from "@package/com/simibubi/create/content/trains";
import { $GearboxBlockEntity, $VerticalGearboxItem, $GearboxBlock } from "@package/com/simibubi/create/content/kinetics/gearbox";
import { $RegisterKeyMappingsEvent, $RegisterParticleProvidersEvent } from "@package/net/neoforged/neoforge/client/event";
import { $HandCrankBlockEntity, $HandCrankBlock, $ValveHandleBlockEntity, $ValveHandleBlock } from "@package/com/simibubi/create/content/kinetics/crank";
import { $SoundEvent, $SoundSource_, $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $RedstoneContactBlockEntityTypeGetter } from "@package/dev/ryanhcode/sable/neoforge/mixinhelper/compatibility/create/redstone_contact";
import { $ContraptionControlsBlock, $ContraptionControlsBlockEntity } from "@package/com/simibubi/create/content/contraptions/actors/contraptionControls";
import { $MinecartCouplingItem } from "@package/com/simibubi/create/content/contraptions/minecart";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CreativeMotorBlock, $CreativeMotorBlockEntity } from "@package/com/simibubi/create/content/kinetics/motor";
import { $PlacardBlockEntity, $PlacardBlock } from "@package/com/simibubi/create/content/decoration/placard";
import { $CasingConnectivity, $CasingBlock } from "@package/com/simibubi/create/content/decoration/encasing";
import { $VoxelShaper } from "@package/net/createmod/catnip/math";
import { $IronBarsBlock, $Block, $WeatheringCopper$WeatherState, $Mirror, $RotatedPillarBlock, $Block_, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Gson, $JsonObject_ } from "@package/com/google/gson";
import { $BlueprintItem, $BlueprintMenu, $BlueprintEntity } from "@package/com/simibubi/create/content/equipment/blueprint";
import { $ChromaticCompoundItem, $ShadowSteelItem, $RefinedRadianceItem } from "@package/com/simibubi/create/content/legacy";
import { $SequencedGearshiftBlockEntity, $SequencedGearshiftBlock } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $SmartChuteBlock, $SmartChuteBlockEntity, $ChuteBlock, $ChuteBlockEntity } from "@package/com/simibubi/create/content/logistics/chute";
import { $PackageOrderWithCrafts, $StockTickerBlock, $StockTickerBlockEntity, $StockKeeperRequestMenu, $StockKeeperCategoryMenu } from "@package/com/simibubi/create/content/logistics/stockTicker";
import { $StationBlock, $StationBlockEntity } from "@package/com/simibubi/create/content/trains/station";
import { $PumpBlock, $PumpBlockEntity } from "@package/com/simibubi/create/content/fluids/pump";
import { $CarriageSyncDataSerializer, $CarriageContraptionEntity } from "@package/com/simibubi/create/content/trains/entity";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $CreateRegistrate } from "@package/com/simibubi/create/foundation/data";
import { $Path_ } from "@package/java/nio/file";
import { $CardboardSwordItem } from "@package/com/simibubi/create/content/equipment/tool";
import { $FluidPipeBlockEntity, $GlassFluidPipeBlock, $EncasedPipeBlock, $FluidPipeBlock, $SmartFluidPipeBlockEntity, $StraightPipeBlockEntity, $SmartFluidPipeBlock } from "@package/com/simibubi/create/content/fluids/pipes";
import { $TorquePropagator } from "@package/com/simibubi/create/content/kinetics";
import { $MapDecorationType } from "@package/net/minecraft/world/level/saveddata/maps";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $SuperGlueSelectionHandler, $SuperGlueItem, $SuperGlueEntity } from "@package/com/simibubi/create/content/contraptions/glue";
import { $FluidTankMountedStorageType } from "@package/com/simibubi/create/content/fluids/tank/storage";
import { $FlapDisplayBlockEntity, $FlapDisplayBlock } from "@package/com/simibubi/create/content/trains/display";
import { $Logger } from "@package/org/slf4j";
import { $SymmetryWandItem } from "@package/com/simibubi/create/content/equipment/symmetryWand";
import { $WrenchItem } from "@package/com/simibubi/create/content/equipment/wrench";
import { $PistonExtensionPoleBlock, $MechanicalPistonBlockEntity, $MechanicalPistonBlock, $MechanicalPistonHeadBlock } from "@package/com/simibubi/create/content/contraptions/piston";
import { $ControlsBlock } from "@package/com/simibubi/create/content/contraptions/actors/trainControls";
import { $AnalogLeverBlockEntity, $AnalogLeverBlock } from "@package/com/simibubi/create/content/redstone/analogLever";
import { $ClientResourceReloadListener } from "@package/com/simibubi/create/foundation";
import { $CartAssemblerBlock$MinecartAnchorBlock, $CartAssemblerBlock, $CartAssemblerBlockEntity, $MinecartContraptionItem } from "@package/com/simibubi/create/content/contraptions/mounted";
import { $HarvesterBlock, $HarvesterBlockEntity } from "@package/com/simibubi/create/content/contraptions/actors/harvester";
import { $ItemVaultBlock, $ItemVaultBlockEntity, $ItemVaultMountedStorageType } from "@package/com/simibubi/create/content/logistics/vault";
import { $SandPaperItemComponent, $SandPaperItem } from "@package/com/simibubi/create/content/equipment/sandPaper";
import { $EntityType_, $Entity, $EntityType } from "@package/net/minecraft/world/entity";
import { $SchematicannonMenu, $SchematicannonBlock, $SchematicannonBlockEntity$SchematicannonOptions, $SchematicannonBlockEntity } from "@package/com/simibubi/create/content/schematics/cannon";
import { $ParticleOptions, $ParticleType } from "@package/net/minecraft/core/particles";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $ExtendoGripItem } from "@package/com/simibubi/create/content/equipment/extendoGrip";
import { $FallbackMountedStorageType } from "@package/com/simibubi/create/impl/contraption/storage";
import { $PotatoProjectileEntity, $PotatoCannonItem, $PotatoCannonRenderHandler } from "@package/com/simibubi/create/content/equipment/potatoCannon";
import { $AttachmentType } from "@package/net/neoforged/neoforge/attachment";
import { $SpriteShiftEntry, $BindableTexture } from "@package/net/createmod/catnip/render";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BeltBlock, $BeltBlockEntity } from "@package/com/simibubi/create/content/kinetics/belt";
import { $NixieTubeBlock, $NixieTubeBlockEntity } from "@package/com/simibubi/create/content/redstone/nixieTube";
import { $LecternDisplayTarget, $SignDisplayTarget, $DisplayBoardTarget, $NixieTubeDisplayTarget } from "@package/com/simibubi/create/content/redstone/displayLink/target";
import { $PulseTimerBlockEntity, $ToggleLatchBlock, $PoweredLatchBlock, $BrassDiodeBlock, $PulseExtenderBlockEntity, $PulseRepeaterBlockEntity } from "@package/com/simibubi/create/content/redstone/diodes";
import { $CogWheelBlock, $BracketedKineticBlockEntity, $ShaftBlock, $SimpleKineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/simpleRelays";
import { $DrillBlockEntity, $DrillBlock } from "@package/com/simibubi/create/content/kinetics/drill";
import { $TrackObserverBlock, $TrackObserverBlockEntity } from "@package/com/simibubi/create/content/trains/observer";
import { $BasePacketPayload$PacketTypeProvider } from "@package/net/createmod/catnip/net/base";
import { $NozzleBlock, $EncasedFanBlock, $NozzleBlockEntity, $EncasedFanBlockEntity } from "@package/com/simibubi/create/content/kinetics/fan";
import { $BeltFunnelBlock, $FunnelBlockEntity, $BrassFunnelBlock, $AndesiteFunnelBlock } from "@package/com/simibubi/create/content/logistics/funnel";
import { $FluidTankBlock, $FluidTankBlockEntity, $CreativeFluidTankBlockEntity } from "@package/com/simibubi/create/content/fluids/tank";
import { $ScheduleItem, $ScheduleMenu } from "@package/com/simibubi/create/content/trains/schedule";
import { $ValueSettingsClient } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $SpoutBlockEntity, $SpoutBlock } from "@package/com/simibubi/create/content/fluids/spout";
import { $GirderEncasedShaftBlock, $GirderBlock } from "@package/com/simibubi/create/content/decoration/girder";
import { $ChestMountedStorageType } from "@package/com/simibubi/create/api/contraption/storage/item/chest";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $Enchantment, $Enchantment_ } from "@package/net/minecraft/world/item/enchantment";
import { $SeatBlock, $SeatEntity } from "@package/com/simibubi/create/content/contraptions/actors/seat";
import { $GantryShaftBlock$Part, $GantryShaftBlockEntity, $GantryShaftBlock, $GantryShaftBlock$Part_ } from "@package/com/simibubi/create/content/kinetics/gantry";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $FlywheelBlockEntity, $FlywheelBlock } from "@package/com/simibubi/create/content/kinetics/flywheel";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $ElevatorContactBlockEntity, $ElevatorPulleyBlock, $ElevatorPulleyBlockEntity, $ElevatorContactBlock } from "@package/com/simibubi/create/content/contraptions/elevator";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $ItemContainerContents } from "@package/net/minecraft/world/item/component";
import { $ArmBlockEntity, $ArmBlock } from "@package/com/simibubi/create/content/kinetics/mechanicalArm";
import { $ThresholdSwitchBlockEntity, $ThresholdSwitchBlock } from "@package/com/simibubi/create/content/redstone/thresholdSwitch";
import { $ZapperRenderHandler, $PlacementPatterns } from "@package/com/simibubi/create/content/equipment/zapper";
import { $CrushingWheelBlockEntity, $CrushingWheelBlock, $CrushingWheelControllerBlockEntity, $CrushingWheelControllerBlock } from "@package/com/simibubi/create/content/kinetics/crusher";
import { $ChainGearshiftBlockEntity, $ChainGearshiftBlock, $ChainDriveBlock } from "@package/com/simibubi/create/content/kinetics/chainDrive";
import { $HosePulleyBlockEntity, $HosePulleyBlock } from "@package/com/simibubi/create/content/fluids/hosePulley";
import { $WhistleBlock, $WhistleExtenderBlock, $WhistleBlockEntity } from "@package/com/simibubi/create/content/decoration/steamWhistle";
import { $BasinBlockEntity, $BasinBlock } from "@package/com/simibubi/create/content/processing/basin";
import { $BracketBlock } from "@package/com/simibubi/create/content/decoration/bracket";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $WaterWheelBlockEntity, $LargeWaterWheelBlockEntity, $LargeWaterWheelBlock, $WaterWheelBlock, $WaterWheelStructuralBlock } from "@package/com/simibubi/create/content/kinetics/waterwheel";
import { $GaugeBlock, $StressGaugeBlockEntity, $SpeedGaugeBlockEntity } from "@package/com/simibubi/create/content/kinetics/gauge";
import { $ItemAttribute$ItemAttributeEntry } from "@package/com/simibubi/create/content/logistics/item/filter/attribute";
import { $MountedItemStorageType, $MountedItemStorage, $MountedItemStorageType_ } from "@package/com/simibubi/create/api/contraption/storage/item";
import { $BlazeBurnerBlock, $LitBlazeBurnerBlock, $BlazeBurnerBlockEntity, $BlazeBurnerBlockItem } from "@package/com/simibubi/create/content/processing/burner";
import { $Codec } from "@package/com/mojang/serialization";
import { $DivingHelmetItem, $BacktankItem, $BacktankBlockEntity, $DivingBootsItem, $BacktankBlock, $BacktankItem$BacktankBlockItem, $BaseArmorItem } from "@package/com/simibubi/create/content/equipment/armor";
import { $SteamEngineBlock, $SteamEngineBlockEntity, $PoweredShaftBlockEntity, $PoweredShaftBlock } from "@package/com/simibubi/create/content/kinetics/steamEngine";
import { $LangBuilder } from "@package/net/createmod/catnip/lang";
import { $SignalBlock, $SignalBlockEntity } from "@package/com/simibubi/create/content/trains/signal";
import { $FluidType, $FluidType$Properties, $BaseFlowingFluid$Flowing } from "@package/net/neoforged/neoforge/fluids";
import { $KeyMapping } from "@package/net/minecraft/client";
import { $Unit, $StringRepresentable } from "@package/net/minecraft/util";
import { $MountedFluidStorageType } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { $EncasedShaftBlock, $EncasedCogwheelBlock } from "@package/com/simibubi/create/content/kinetics/simpleRelays/encased";
import { $OrientedContraptionEntity, $ControlledContraptionEntity } from "@package/com/simibubi/create/content/contraptions";
import { $FMLClientSetupEvent, $FMLCommonSetupEvent } from "@package/net/neoforged/fml/event/lifecycle";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $RollerBlockEntity, $RollerBlock } from "@package/com/simibubi/create/content/contraptions/actors/roller";
import { $CuckooClockBlock, $CuckooClockBlockEntity } from "@package/com/simibubi/create/content/kinetics/clock";
import { $DeskBellBlockEntity, $DeskBellBlock } from "@package/com/simibubi/create/content/redstone/deskBell";
import { $DyeColor, $ItemStack_, $CreativeModeTab$DisplayItemsGenerator, $Item, $Item_, $CreativeModeTab } from "@package/net/minecraft/world/item";
import { $StructureProcessorType } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $BogeyStyle, $StandardBogeyBlock, $StandardBogeyBlockEntity } from "@package/com/simibubi/create/content/trains/bogey";
import { $ShoppingListItem, $TableClothBlock, $TableClothBlockEntity, $ShoppingListItem$ShoppingList } from "@package/com/simibubi/create/content/logistics/tableCloth";
import { $SmartObserverBlockEntity, $SmartObserverBlock } from "@package/com/simibubi/create/content/redstone/smartObserver";
import { $MinecartController } from "@package/com/simibubi/create/content/contraptions/minecart/capability";
import { $PackagerBlock, $PackagerBlockEntity } from "@package/com/simibubi/create/content/logistics/packager";
import { $WoodType_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $TrainTrapdoorBlock, $MetalLadderBlock, $CardboardBlock, $MetalScaffoldingBlock } from "@package/com/simibubi/create/content/decoration";
import { $FrogportBlockEntity, $FrogportBlock } from "@package/com/simibubi/create/content/logistics/packagePort/frogport";
import { $LecternControllerBlockEntity, $LecternControllerBlock, $LinkedControllerItem, $LinkedControllerMenu } from "@package/com/simibubi/create/content/redstone/link/controller";
import { $ItemCountDisplaySource, $FillLevelDisplaySource, $ComputerDisplaySource, $ObservedTrainNameSource, $ScoreboardDisplaySource, $ItemListDisplaySource, $KineticStressDisplaySource, $DeathCounterDisplaySource, $FluidAmountDisplaySource, $TrainStatusDisplaySource, $EntityNameDisplaySource, $StopWatchDisplaySource, $AccumulatedItemCountDisplaySource, $ItemNameDisplaySource, $StationSummaryDisplaySource, $CurrentFloorDisplaySource, $BoilerDisplaySource, $FluidListDisplaySource, $NixieTubeDisplaySource, $FactoryGaugeDisplaySource, $PackageAddressDisplaySource, $ItemThroughputDisplaySource, $KineticSpeedDisplaySource, $EnchantPowerDisplaySource, $RedstonePowerDisplaySource, $TimeOfDayDisplaySource } from "@package/com/simibubi/create/content/redstone/displayLink/source";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $SchematicAndQuillHandler, $SchematicHandler, $ClientSchematicLoader } from "@package/com/simibubi/create/content/schematics/client";
import { $ItemDrainBlockEntity, $ItemDrainBlock } from "@package/com/simibubi/create/content/fluids/drain";
import { $DepotBlock, $DepotBlockEntity, $EjectorBlockEntity, $EjectorBlock } from "@package/com/simibubi/create/content/logistics/depot";
import { $GantryContraptionEntity, $GantryCarriageBlockEntity, $GantryCarriageBlock } from "@package/com/simibubi/create/content/contraptions/gantry";
import { $BiFunction_, $Supplier_, $BiConsumer_, $Supplier, $Predicate } from "@package/java/util/function";
import { $SimpleMountedStorageType$Impl } from "@package/com/simibubi/create/api/contraption/storage/item/simple";
import { $PortableStorageInterfaceBlock, $PortableFluidInterfaceBlockEntity, $PortableItemInterfaceBlockEntity } from "@package/com/simibubi/create/content/contraptions/actors/psi";
import { $SequencedAssemblyRecipe$SequencedAssembly, $SequencedAssemblyItem } from "@package/com/simibubi/create/content/processing/sequenced";
import { $RoseQuartzLampBlock } from "@package/com/simibubi/create/content/redstone";
import { $TagKey } from "@package/net/minecraft/tags";
import { $PloughBlock } from "@package/com/simibubi/create/content/contraptions/actors/plough";
import { $PostboxBlock, $PostboxBlockEntity } from "@package/com/simibubi/create/content/logistics/packagePort/postbox";
import { $PulleyBlock$MagnetBlock, $PulleyBlock, $PulleyBlockEntity, $PulleyBlock$RopeBlock } from "@package/com/simibubi/create/content/contraptions/pulley";
import { $ClutchBlockEntity, $GearshiftBlockEntity, $GearshiftBlock, $ClutchBlock } from "@package/com/simibubi/create/content/kinetics/transmission";
import { $DisplaySource, $DisplayTarget } from "@package/com/simibubi/create/api/behaviour/display";
export * as foundation from "@package/com/simibubi/create/foundation";
export * as content from "@package/com/simibubi/create/content";
export * as infrastructure from "@package/com/simibubi/create/infrastructure";
export * as api from "@package/com/simibubi/create/api";
export * as compat from "@package/com/simibubi/create/compat";
export * as impl from "@package/com/simibubi/create/impl";

declare module "@package/com/simibubi/create" {
    export class $AllTags$AllMountedItemStorageTypeTags extends $Enum<$AllTags$AllMountedItemStorageTypeTags> {
        static values(): $AllTags$AllMountedItemStorageTypeTags[];
        static valueOf(arg0: string): $AllTags$AllMountedItemStorageTypeTags;
        matches(arg0: $MountedItemStorage): boolean;
        matches(arg0: $MountedItemStorageType_<never>): boolean;
        static INTERNAL: $AllTags$AllMountedItemStorageTypeTags;
        tag: $TagKey<$MountedItemStorageType<never>>;
        static FUEL_BLACKLIST: $AllTags$AllMountedItemStorageTypeTags;
    }
    /**
     * Values that may be interpreted as {@link $AllTags$AllMountedItemStorageTypeTags}.
     */
    export type $AllTags$AllMountedItemStorageTypeTags_ = "internal" | "fuel_blacklist";
    export class $AllCreativeModeTabs$RegistrateDisplayItemsGenerator implements $CreativeModeTab$DisplayItemsGenerator {
    }
    export class $AllStructureProcessorTypes {
        static register(arg0: $IEventBus): void;
        static SCHEMATIC: $DeferredHolder<$StructureProcessorType<never>, $StructureProcessorType<$SchematicProcessor>>;
        constructor();
    }
    export class $AllContraptionMovementSettings {
        static registerDefaults(): void;
        constructor();
    }
    export class $AllDisplaySources {
        static register(): void;
        static TIME_OF_DAY: $RegistryEntry<$DisplaySource, $TimeOfDayDisplaySource>;
        static DEATH_COUNT: $RegistryEntry<$DisplaySource, $DeathCounterDisplaySource>;
        static ACCUMULATE_ITEMS: $RegistryEntry<$DisplaySource, $AccumulatedItemCountDisplaySource>;
        static KINETIC_STRESS: $RegistryEntry<$DisplaySource, $KineticStressDisplaySource>;
        static BOILER: $RegistryEntry<$DisplaySource, $BoilerDisplaySource>;
        static ITEM_THROUGHPUT: $RegistryEntry<$DisplaySource, $ItemThroughputDisplaySource>;
        static CURRENT_FLOOR: $RegistryEntry<$DisplaySource, $CurrentFloorDisplaySource>;
        static TRAIN_STATUS: $RegistryEntry<$DisplaySource, $TrainStatusDisplaySource>;
        static LIST_FLUIDS: $RegistryEntry<$DisplaySource, $FluidListDisplaySource>;
        static READ_PACKAGE_ADDRESS: $RegistryEntry<$DisplaySource, $PackageAddressDisplaySource>;
        static STATION_SUMMARY: $RegistryEntry<$DisplaySource, $StationSummaryDisplaySource>;
        static COUNT_FLUIDS: $RegistryEntry<$DisplaySource, $FluidAmountDisplaySource>;
        static OBSERVED_TRAIN_NAME: $RegistryEntry<$DisplaySource, $ObservedTrainNameSource>;
        static LIST_ITEMS: $RegistryEntry<$DisplaySource, $ItemListDisplaySource>;
        static FILL_LEVEL: $RegistryEntry<$DisplaySource, $FillLevelDisplaySource>;
        static ENTITY_NAME: $RegistryEntry<$DisplaySource, $EntityNameDisplaySource>;
        static ITEM_NAMES: $RegistryEntry<$DisplaySource, $ItemNameDisplaySource>;
        static REDSTONE_POWER: $RegistryEntry<$DisplaySource, $RedstonePowerDisplaySource>;
        static KINETIC_SPEED: $RegistryEntry<$DisplaySource, $KineticSpeedDisplaySource>;
        static STOPWATCH: $RegistryEntry<$DisplaySource, $StopWatchDisplaySource>;
        static SCOREBOARD: $RegistryEntry<$DisplaySource, $ScoreboardDisplaySource>;
        static GAUGE_STATUS: $RegistryEntry<$DisplaySource, $FactoryGaugeDisplaySource>;
        static LEGACY_NAMES: $Map<string, $RegistryEntry<$DisplaySource, $DisplaySource>>;
        static COMPUTER: $RegistryEntry<$DisplaySource, $ComputerDisplaySource>;
        static NIXIE_TUBE: $RegistryEntry<$DisplaySource, $NixieTubeDisplaySource>;
        static ENCHANT_POWER: $RegistryEntry<$DisplaySource, $EnchantPowerDisplaySource>;
        static COUNT_ITEMS: $RegistryEntry<$DisplaySource, $ItemCountDisplaySource>;
        constructor();
    }
    export class $AllFluids$SolidRenderedPlaceableFluidType extends $AllFluids$TintedFluidType {
        static SIZE: $Lazy<number>;
        static BUCKET_VOLUME: number;
    }
    export class $AllSoundEvents$ConfiguredSoundEvent extends $Record {
        event(): $Supplier<$SoundEvent>;
        volume(): number;
        pitch(): number;
        constructor(event: $Supplier_<$SoundEvent>, volume: number, pitch: number);
    }
    /**
     * Values that may be interpreted as {@link $AllSoundEvents$ConfiguredSoundEvent}.
     */
    export type $AllSoundEvents$ConfiguredSoundEvent_ = { event?: $Supplier_<$SoundEvent>, volume?: number, pitch?: number,  } | [event?: $Supplier_<$SoundEvent>, volume?: number, pitch?: number, ];
    export class $AllCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering$Type extends $Enum<$AllCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering$Type> {
        static values(): $AllCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering$Type[];
        static valueOf(arg0: string): $AllCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering$Type;
        static BEFORE: $AllCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering$Type;
        static AFTER: $AllCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering$Type;
    }
    /**
     * Values that may be interpreted as {@link $AllCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering$Type}.
     */
    export type $AllCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering$Type_ = "before" | "after";
    export class $AllPartialModels {
        static init(): void;
        static COPPER_BACKTANK_COGS: $PartialModel;
        static WHISTLE_MOUTH_LARGE: $PartialModel;
        static TOOLBOX_LIDS: $Map<$DyeColor, $PartialModel>;
        static BRASS_BELT_COVER_X: $PartialModel;
        static BELT_MIDDLE_BOTTOM: $PartialModel;
        static BRASS_BELT_COVER_Z: $PartialModel;
        static LARGE_WATER_WHEEL: $PartialModel;
        static FLUID_PIPE_CASING: $PartialModel;
        static GAUGE_HEAD_SPEED: $PartialModel;
        static BLAZE_BURNER_FLAME: $PartialModel;
        static SYMMETRY_TRIPLEPLANE: $PartialModel;
        static HOSE_COIL: $PartialModel;
        static TRACK_STATION_OVERLAY: $PartialModel;
        static ARM_COG: $PartialModel;
        static ENCASED_FAN_INNER: $PartialModel;
        static ROPE_HALF: $PartialModel;
        static SHAFT_HALF: $PartialModel;
        static BEARING_TOP: $PartialModel;
        static SMALL_BOGEY_WHEELS: $PartialModel;
        static ELEVATOR_BELT_HALF: $PartialModel;
        static FLEXPEATER_INDICATOR: $PartialModel;
        static GIRDER_SEGMENT_TOP: $PartialModel;
        static HAND_CRANK_HANDLE: $PartialModel;
        static BLAZE_IDLE: $PartialModel;
        static SAW_BLADE_VERTICAL_REVERSED: $PartialModel;
        static BELT_START_BOTTOM: $PartialModel;
        static CUCKOO_HOUR_HAND: $PartialModel;
        static BLAZE_GOGGLES_SMALL: $PartialModel;
        static SYMMETRY_PLANE: $PartialModel;
        static BLAZE_SUPER_ACTIVE: $PartialModel;
        static HAND_CRANK_BASE: $PartialModel;
        static SAW_BLADE_VERTICAL_ACTIVE: $PartialModel;
        static FROGPORT_HEAD: $PartialModel;
        static ELEVATOR_BELT: $PartialModel;
        static BLAZE_CAGE: $PartialModel;
        static LARGE_BOGEY_WHEELS: $PartialModel;
        static BLAZE_BURNER_RODS: $PartialModel;
        static PULLEY_MAGNET: $PartialModel;
        static TRACK_SIGNAL_DUAL_OVERLAY: $PartialModel;
        static ARM_BASE: $PartialModel;
        static CUCKOO_MINUTE_HAND: $PartialModel;
        static STATION_ASSEMBLE: $PartialModel;
        static HOSE_HALF: $PartialModel;
        static SIGNAL_RED: $PartialModel;
        static GAUGE_HEAD_STRESS: $PartialModel;
        static ENGINE_PISTON: $PartialModel;
        static ARM_CLAW_GRIP_UPPER: $PartialModel;
        static PACKAGES_TO_HIDE_AS: $List<$PartialModel>;
        static LARGE_WATER_WHEEL_EXTENSION: $PartialModel;
        static SIGNAL_COMPUTER_WHITE_CUBE: $PartialModel;
        static FLYWHEEL: $PartialModel;
        static ARM_LOWER_BODY: $PartialModel;
        static TRACK_SEGMENT_RIGHT: $PartialModel;
        static SIGNAL_YELLOW: $PartialModel;
        static EJECTOR_TOP: $PartialModel;
        static PIPE_ATTACHMENTS: $Map<$FluidTransportBehaviour$AttachmentTypes$ComponentPartials, $Map<$Direction, $PartialModel>>;
        static GANTRY_SHAFTS: $Map<$AllPartialModels$GantryShaftKey, $PartialModel>;
        static FROGPORT_BODY: $PartialModel;
        static SHAFTLESS_LARGE_COGWHEEL: $PartialModel;
        static NETHERITE_BACKTANK_COGS: $PartialModel;
        static BLAZE_GOGGLES: $PartialModel;
        static SIGNAL_YELLOW_CUBE: $PartialModel;
        static CRUSHING_WHEEL: $PartialModel;
        static MECHANICAL_PRESS_HEAD: $PartialModel;
        static BLAZE_BURNER_SUPER_RODS_2: $PartialModel;
        static BELT_START: $PartialModel;
        static SIGNAL_COMPUTER_WHITE_BASE: $PartialModel;
        static SAW_BLADE_VERTICAL_INACTIVE: $PartialModel;
        static PORTABLE_STORAGE_INTERFACE_TOP: $PartialModel;
        static FACTORY_PANEL_LIGHT: $PartialModel;
        static SYMMETRY_CROSSPLANE: $PartialModel;
        static SHAFTLESS_COGWHEEL: $PartialModel;
        static TURNTABLE: $PartialModel;
        static BLAZE_BURNER_RODS_2: $PartialModel;
        static BELT_DIAGONAL_MIDDLE: $PartialModel;
        static GIRDER_SEGMENT_BOTTOM: $PartialModel;
        static SIGNAL_COMPUTER_WHITE: $PartialModel;
        static SIGNAL_WHITE_CUBE: $PartialModel;
        static BELT_MIDDLE: $PartialModel;
        static DISPLAY_LINK_GLOW: $PartialModel;
        static MECHANICAL_PUMP_COG: $PartialModel;
        static FROGPORT_TONGUE: $PartialModel;
        static MECHANICAL_MIXER_HEAD: $PartialModel;
        static PACKAGER_TRAY_DEFRAG: $PartialModel;
        static ELEVATOR_COIL: $PartialModel;
        static FACTORY_PANEL_DOTTED: $Map<$Direction, $PartialModel>;
        static ROLLER_WHEEL: $PartialModel;
        static CUCKOO_CREEPER: $PartialModel;
        static CONTRAPTION_CONTROLS_INDICATOR: $List<$PartialModel>;
        static WATER_WHEEL: $PartialModel;
        static SAW_BLADE_HORIZONTAL_ACTIVE: $PartialModel;
        static TRACK_OBSERVER_OVERLAY: $PartialModel;
        static FACTORY_PANEL_ARROWS: $Map<$Direction, $PartialModel>;
        static SIGNAL_ON: $PartialModel;
        static COUPLING_CONNECTOR: $PartialModel;
        static BELT_TUNNEL_FLAP: $PartialModel;
        static TRAIN_CONTROLS_COVER: $PartialModel;
        static CRAFTING_BLUEPRINT_1x1: $PartialModel;
        static PACKAGER_HATCH_CLOSED: $PartialModel;
        static METAL_GIRDER_BRACKETS: $Map<$Direction, $PartialModel>;
        static CHAIN_CONVEYOR_WHEEL: $PartialModel;
        static ROPE_COIL: $PartialModel;
        static COUPLING_ATTACHMENT: $PartialModel;
        static ROPE: $PartialModel;
        static COPPER_BACKTANK_SHAFT: $PartialModel;
        static SPOUT_TOP: $PartialModel;
        static BELT_PULLEY: $PartialModel;
        static POSTBOX_FLAG: $PartialModel;
        static TRAIN_CONTROLS_LEVER: $PartialModel;
        static NETHERITE_BACKTANK_SHAFT: $PartialModel;
        static SHAFT: $PartialModel;
        static DESK_BELL_PLUNGER: $PartialModel;
        static TABLE_CLOTH_SE: $PartialModel;
        static SCHEMATICANNON_PIPE: $PartialModel;
        static CUCKOO_RIGHT_DOOR: $PartialModel;
        static TABLE_CLOTH_PRICE_SIDE: $PartialModel;
        static BELT_DIAGONAL_END: $PartialModel;
        static PACKAGE_RIGGING: $Map<$ResourceLocation, $PartialModel>;
        static TRACK_TIE: $PartialModel;
        static GANTRY_COGS: $PartialModel;
        static TABLE_CLOTH_SW: $PartialModel;
        static GANTRY_SHAFT_MIDDLE: $PartialModel;
        static TABLE_CLOTH_PRICE_TOP: $PartialModel;
        static SCHEMATICANNON_CONNECTOR: $PartialModel;
        static CRAFTING_BLUEPRINT_2x2: $PartialModel;
        static BOGEY_DRIVE_BELT: $PartialModel;
        static BLAZE_ACTIVE: $PartialModel;
        static SIGNAL_OFF: $PartialModel;
        static PACKAGER_HATCH_OPEN: $PartialModel;
        static STICKER_HEAD: $PartialModel;
        static BELT_END: $PartialModel;
        static PORTABLE_STORAGE_INTERFACE_MIDDLE_POWERED: $PartialModel;
        static HOSE_HALF_MAGNET: $PartialModel;
        static WHISTLE_MOUTH_MEDIUM: $PartialModel;
        static SPEED_CONTROLLER_BRACKET: $PartialModel;
        static FUNNEL_FLAP: $PartialModel;
        static SIGNAL_WHITE: $PartialModel;
        static DYED_VALVE_HANDLES: $Map<$DyeColor, $PartialModel>;
        static DEPLOYER_HAND_POINTING: $PartialModel;
        static ANALOG_LEVER_HANDLE: $PartialModel;
        static ARM_UPPER_BODY: $PartialModel;
        static MILLSTONE_COG: $PartialModel;
        static ANDESITE_BELT_COVER_Z: $PartialModel;
        static ELEVATOR_MAGNET: $PartialModel;
        static PORTABLE_FLUID_INTERFACE_MIDDLE_POWERED: $PartialModel;
        static TRACK_ASSEMBLING_OVERLAY: $PartialModel;
        static MECHANICAL_CRAFTER_ARROW: $PartialModel;
        static ANDESITE_BELT_COVER_X: $PartialModel;
        static BLAZE_BURNER_SUPER_RODS: $PartialModel;
        static CRAFTING_BLUEPRINT_3x3: $PartialModel;
        static ENGINE_LINKAGE: $PartialModel;
        static POWERED_SHAFT: $PartialModel;
        static BOGEY_PIN: $PartialModel;
        static ROPE_HALF_MAGNET: $PartialModel;
        static CONTRAPTION_CONTROLS_BUTTON: $PartialModel;
        static TABLE_CLOTH_NE: $PartialModel;
        static BEARING_TOP_WOODEN: $PartialModel;
        static BLAZE_SUPER: $PartialModel;
        static PORTABLE_FLUID_INTERFACE_TOP: $PartialModel;
        static ARM_CLAW_BASE: $PartialModel;
        static PACKAGER_TRAY_REGULAR: $PartialModel;
        static TRACK_SEGMENT_LEFT: $PartialModel;
        static DESK_BELL_BELL: $PartialModel;
        static SIGNAL_RED_CUBE: $PartialModel;
        static TABLE_CLOTH_NW: $PartialModel;
        static GAUGE_DIAL: $PartialModel;
        static CHAIN_CONVEYOR_GUARD: $PartialModel;
        static GIRDER_SEGMENT_MIDDLE: $PartialModel;
        static CUCKOO_LEFT_DOOR: $PartialModel;
        static MECHANICAL_CRAFTER_BELT_FRAME: $PartialModel;
        static DRILL_HEAD: $PartialModel;
        static FLUID_VALVE_POINTER: $PartialModel;
        static ARM_CLAW_GRIP_LOWER: $PartialModel;
        static ANALOG_LEVER_INDICATOR: $PartialModel;
        static MECHANICAL_MIXER_POLE: $PartialModel;
        static FACTORY_PANEL_LINES: $Map<$Direction, $PartialModel>;
        static GAUGE_INDICATOR: $PartialModel;
        static PORTABLE_STORAGE_INTERFACE_MIDDLE: $PartialModel;
        static COGWHEEL_SHAFT: $PartialModel;
        static BOILER_GAUGE_DIAL: $PartialModel;
        static GOGGLES: $PartialModel;
        static FACTORY_PANEL: $PartialModel;
        static BLAZE_INERT: $PartialModel;
        static FROGPORT_HEAD_GOGGLES: $PartialModel;
        static COUPLING_RING: $PartialModel;
        static ARM_CLAW_BASE_GOGGLES: $PartialModel;
        static PACKAGES: $Map<$ResourceLocation, $PartialModel>;
        static BELT_END_BOTTOM: $PartialModel;
        static PORTABLE_FLUID_INTERFACE_MIDDLE: $PartialModel;
        static BOGEY_PISTON: $PartialModel;
        static FACTORY_PANEL_RED_LIGHT: $PartialModel;
        static VALVE_HANDLE: $PartialModel;
        static ROLLER_FRAME: $PartialModel;
        static WHISTLE_MOUTH_SMALL: $PartialModel;
        static DEPLOYER_HAND_HOLDING: $PartialModel;
        static SAW_BLADE_HORIZONTAL_REVERSED: $PartialModel;
        static SPOUT_BOTTOM: $PartialModel;
        static FACTORY_PANEL_RESTOCKER: $PartialModel;
        static SPOUT_MIDDLE: $PartialModel;
        static DISPLAY_LINK_TUBE: $PartialModel;
        static TRAIN_COUPLING_CABLE: $PartialModel;
        static HOSE_MAGNET: $PartialModel;
        static TRAIN_HAT: $PartialModel;
        static HOSE: $PartialModel;
        static HAUNTED_BELL: $PartialModel;
        static MECHANICAL_CRAFTER_BELT: $PartialModel;
        static SIGNAL_PANEL: $PartialModel;
        static DEPLOYER_HAND_PUNCHING: $PartialModel;
        static PECULIAR_BELL: $PartialModel;
        static MECHANICAL_CRAFTER_LID: $PartialModel;
        static CUCKOO_PIG: $PartialModel;
        static FACTORY_PANEL_WITH_BULB: $PartialModel;
        static FOLDING_DOORS: $Map<$ResourceLocation, $Couple<$PartialModel>>;
        static BOILER_GAUGE: $PartialModel;
        static BELT_DIAGONAL_START: $PartialModel;
        static HARVESTER_BLADE: $PartialModel;
        static STATION_OFF: $PartialModel;
        static LOGISTICS_HAT: $PartialModel;
        static COGWHEEL: $PartialModel;
        static ENGINE_CONNECTOR: $PartialModel;
        static SIGNAL_COMPUTER_WHITE_GLOW: $PartialModel;
        static BELT_FUNNEL_FLAP: $PartialModel;
        static TOOLBOX_DRAWER: $PartialModel;
        static STATION_ON: $PartialModel;
        static GANTRY_SHAFT_END: $PartialModel;
        static SIGNAL_YELLOW_GLOW: $PartialModel;
        static SIGNAL_RED_GLOW: $PartialModel;
        static GANTRY_SHAFT_START: $PartialModel;
        static BOGEY_DRIVE: $PartialModel;
        static BOGEY_FRAME: $PartialModel;
        static SAW_BLADE_HORIZONTAL_INACTIVE: $PartialModel;
        static SIGNAL_WHITE_GLOW: $PartialModel;
        static DEPLOYER_POLE: $PartialModel;
        static CHAIN_CONVEYOR_SHAFT: $PartialModel;
        static GANTRY_SHAFT_SINGLE: $PartialModel;
        static FACTORY_PANEL_RESTOCKER_WITH_BULB: $PartialModel;
        static TRACK_SIGNAL_OVERLAY: $PartialModel;
        static TRAIN_COUPLING_HEAD: $PartialModel;
        constructor();
    }
    export class $AllDisplayTargets {
        static register(): void;
        static DISPLAY_BOARD: $RegistryEntry<$DisplayTarget, $DisplayBoardTarget>;
        static LECTERN: $RegistryEntry<$DisplayTarget, $LecternDisplayTarget>;
        static NIXIE_TUBE: $RegistryEntry<$DisplayTarget, $NixieTubeDisplayTarget>;
        static SIGN: $RegistryEntry<$DisplayTarget, $SignDisplayTarget>;
        static LEGACY_NAMES: $Map<string, $RegistryEntry<$DisplayTarget, $DisplayTarget>>;
        constructor();
    }
    export class $AllItems {
        static register(): void;
        static RED_SAND_PAPER: $ItemEntry<$SandPaperItem>;
        static GOGGLES: $ItemEntry<$GogglesItem>;
        static SHADOW_STEEL: $ItemEntry<$ShadowSteelItem>;
        static SWEET_ROLL: $ItemEntry<$Item>;
        static MINECART_CONTRAPTION: $ItemEntry<$MinecartContraptionItem>;
        static INCOMPLETE_REINFORCED_SHEET: $ItemEntry<$SequencedAssemblyItem>;
        static ANDESITE_ALLOY: $ItemEntry<$Item>;
        static WHEAT_FLOUR: $ItemEntry<$Item>;
        static CARDBOARD_SWORD: $ItemEntry<$CardboardSwordItem>;
        static CARDBOARD_CHESTPLATE: $ItemEntry<$BaseArmorItem>;
        static CRUSHED_URANIUM: $ItemEntry<$TagDependentIngredientItem>;
        static TRANSMITTER: $ItemEntry<$Item>;
        static CARDBOARD: $ItemEntry<$Item>;
        static CRUSHED_NICKEL: $ItemEntry<$TagDependentIngredientItem>;
        static RAW_ZINC: $ItemEntry<$Item>;
        static POLISHED_ROSE_QUARTZ: $ItemEntry<$Item>;
        static WAND_OF_SYMMETRY: $ItemEntry<$SymmetryWandItem>;
        static CARDBOARD_LEGGINGS: $ItemEntry<$BaseArmorItem>;
        static FURNACE_MINECART_CONTRAPTION: $ItemEntry<$MinecartContraptionItem>;
        static CHEST_MINECART_CONTRAPTION: $ItemEntry<$MinecartContraptionItem>;
        static WHISK: $ItemEntry<$Item>;
        static SCHEDULE: $ItemEntry<$ScheduleItem>;
        static CRUSHED_LEAD: $ItemEntry<$TagDependentIngredientItem>;
        static CRUSHED_GOLD: $ItemEntry<$Item>;
        static LINKED_CONTROLLER: $ItemEntry<$LinkedControllerItem>;
        static EXTENDO_GRIP: $ItemEntry<$ExtendoGripItem>;
        static SUPER_GLUE: $ItemEntry<$SuperGlueItem>;
        static ZINC_NUGGET: $ItemEntry<$Item>;
        static SHOPPING_LIST: $ItemEntry<$ShoppingListItem>;
        static CHOCOLATE_BERRIES: $ItemEntry<$Item>;
        static HONEYED_APPLE: $ItemEntry<$Item>;
        static CRUSHED_PLATINUM: $ItemEntry<$TagDependentIngredientItem>;
        static CRUSHED_COPPER: $ItemEntry<$Item>;
        static CARDBOARD_HELMET: $ItemEntry<$BaseArmorItem>;
        static WRENCH: $ItemEntry<$WrenchItem>;
        static BRASS_INGOT: $ItemEntry<$Item>;
        static CRUSHED_TIN: $ItemEntry<$TagDependentIngredientItem>;
        static BAR_OF_CHOCOLATE: $ItemEntry<$Item>;
        static BLAZE_CAKE_BASE: $ItemEntry<$Item>;
        static TREE_FERTILIZER: $ItemEntry<$TreeFertilizerItem>;
        static ZINC_INGOT: $ItemEntry<$Item>;
        static COPPER_BACKTANK: $ItemEntry<$BacktankItem>;
        static CRUSHED_SILVER: $ItemEntry<$TagDependentIngredientItem>;
        static NETHERITE_DIVING_BOOTS: $ItemEntry<$DivingBootsItem>;
        static SCHEMATIC_AND_QUILL: $ItemEntry<$SchematicAndQuillItem>;
        static CHROMATIC_COMPOUND: $ItemEntry<$ChromaticCompoundItem>;
        static PRECISION_MECHANISM: $ItemEntry<$Item>;
        static COPPER_SHEET: $ItemEntry<$Item>;
        static BLAZE_CAKE: $ItemEntry<$Item>;
        static MINECART_COUPLING: $ItemEntry<$MinecartCouplingItem>;
        static BRASS_SHEET: $ItemEntry<$Item>;
        static ELECTRON_TUBE: $ItemEntry<$Item>;
        static REFINED_RADIANCE: $ItemEntry<$RefinedRadianceItem>;
        static IRON_SHEET: $ItemEntry<$Item>;
        static STURDY_SHEET: $ItemEntry<$Item>;
        static CARDBOARD_BOOTS: $ItemEntry<$BaseArmorItem>;
        static EMPTY_SCHEMATIC: $ItemEntry<$Item>;
        static ROSE_QUARTZ: $ItemEntry<$Item>;
        static COPPER_NUGGET: $ItemEntry<$Item>;
        static EXP_NUGGET: $ItemEntry<$ExperienceNuggetItem>;
        static INCOMPLETE_PRECISION_MECHANISM: $ItemEntry<$SequencedAssemblyItem>;
        static COPPER_DIVING_HELMET: $ItemEntry<$DivingHelmetItem>;
        static SCHEMATIC: $ItemEntry<$SchematicItem>;
        static POWDERED_OBSIDIAN: $ItemEntry<$Item>;
        static NETHERITE_DIVING_HELMET: $ItemEntry<$DivingHelmetItem>;
        static CRUSHED_BAUXITE: $ItemEntry<$TagDependentIngredientItem>;
        static CREATIVE_BLAZE_CAKE: $ItemEntry<$Item>;
        static NETHERITE_BACKTANK: $ItemEntry<$BacktankItem>;
        static PACKAGE_FILTER: $ItemEntry<$PackageFilterItem>;
        static BELT_CONNECTOR: $ItemEntry<$BeltConnectorItem>;
        static FILTER: $ItemEntry<$ListFilterItem>;
        static ATTRIBUTE_FILTER: $ItemEntry<$AttributeFilterItem>;
        static SAND_PAPER: $ItemEntry<$SandPaperItem>;
        static WORLDSHAPER: $ItemEntry<$WorldshaperItem>;
        static DOUGH: $ItemEntry<$Item>;
        static NETHERITE_BACKTANK_PLACEABLE: $ItemEntry<$BacktankItem$BacktankBlockItem>;
        static CRUSHED_ZINC: $ItemEntry<$Item>;
        static PROPELLER: $ItemEntry<$Item>;
        static PULP: $ItemEntry<$Item>;
        static INCOMPLETE_TRACK: $ItemEntry<$SequencedAssemblyItem>;
        static BUILDERS_TEA: $ItemEntry<$BuildersTeaItem>;
        static GOLDEN_SHEET: $ItemEntry<$Item>;
        static CRUSHED_IRON: $ItemEntry<$Item>;
        static POTATO_CANNON: $ItemEntry<$PotatoCannonItem>;
        static BRASS_HAND: $ItemEntry<$Item>;
        static BRASS_NUGGET: $ItemEntry<$Item>;
        static VERTICAL_GEARBOX: $ItemEntry<$VerticalGearboxItem>;
        static CRAFTING_BLUEPRINT: $ItemEntry<$BlueprintItem>;
        static CINDER_FLOUR: $ItemEntry<$Item>;
        static COPPER_BACKTANK_PLACEABLE: $ItemEntry<$BacktankItem$BacktankBlockItem>;
        static COPPER_DIVING_BOOTS: $ItemEntry<$DivingBootsItem>;
        static CRAFTER_SLOT_COVER: $ItemEntry<$Item>;
        static CRUSHED_OSMIUM: $ItemEntry<$TagDependentIngredientItem>;
        static CRUSHED_QUICKSILVER: $ItemEntry<$TagDependentIngredientItem>;
        static EMPTY_BLAZE_BURNER: $ItemEntry<$BlazeBurnerBlockItem>;
        constructor();
    }
    export class $CreateBuildInfo {
        static GIT_COMMIT: string;
        static VERSION: string;
        constructor();
    }
    export class $AllOpenPipeEffectHandlers {
        static registerDefaults(): void;
        constructor();
    }
    export class $AllParticleTypes$ParticleEntry<D extends $ParticleOptions> {
    }
    export class $AllSoundEvents$SoundEntryBuilder {
        addVariant(arg0: $ResourceLocation_): $AllSoundEvents$SoundEntryBuilder;
        addVariant(arg0: string): $AllSoundEvents$SoundEntryBuilder;
        playExisting(arg0: $SoundEvent_, arg1: number, arg2: number): $AllSoundEvents$SoundEntryBuilder;
        playExisting(arg0: $Supplier_<$SoundEvent>, arg1: number, arg2: number): $AllSoundEvents$SoundEntryBuilder;
        playExisting(arg0: $SoundEvent_): $AllSoundEvents$SoundEntryBuilder;
        playExisting(arg0: $Holder_<$SoundEvent>): $AllSoundEvents$SoundEntryBuilder;
        subtitle(arg0: string): $AllSoundEvents$SoundEntryBuilder;
        attenuationDistance(arg0: number): $AllSoundEvents$SoundEntryBuilder;
        noSubtitle(): $AllSoundEvents$SoundEntryBuilder;
        build(): $AllSoundEvents$SoundEntry;
        category(arg0: $SoundSource_): $AllSoundEvents$SoundEntryBuilder;
        constructor(arg0: $ResourceLocation_);
    }
    export class $AllBlocks {
        static register(): void;
        static CREATIVE_MOTOR: $BlockEntry<$CreativeMotorBlock>;
        static BLAZE_BURNER: $BlockEntry<$BlazeBurnerBlock>;
        static ANDESITE_DOOR: $BlockEntry<$SlidingDoorBlock>;
        static LARGE_WATER_WHEEL: $BlockEntry<$LargeWaterWheelBlock>;
        static BRASS_BELT_FUNNEL: $BlockEntry<$BeltFunnelBlock>;
        static THRESHOLD_SWITCH: $BlockEntry<$ThresholdSwitchBlock>;
        static COPPER_TILES: $CopperBlockSet;
        static FACTORY_GAUGE: $BlockEntry<$FactoryPanelBlock>;
        static PULSE_REPEATER: $BlockEntry<$BrassDiodeBlock>;
        static FLUID_PIPE: $BlockEntry<$FluidPipeBlock>;
        static SECONDARY_LINEAR_CHASSIS: $BlockEntry<$LinearChassisBlock>;
        static LINEAR_CHASSIS: $BlockEntry<$LinearChassisBlock>;
        static NIXIE_TUBES: $DyedBlockList<$NixieTubeBlock>;
        static CREATIVE_CRATE: $BlockEntry<$CreativeCrateBlock>;
        static WEATHERED_IRON_BLOCK: $BlockEntry<$Block>;
        static STICKY_MECHANICAL_PISTON: $BlockEntry<$MechanicalPistonBlock>;
        static FRAMED_GLASS_DOOR: $BlockEntry<$SlidingDoorBlock>;
        static MECHANICAL_PRESS: $BlockEntry<$MechanicalPressBlock>;
        static TABLE_CLOTHS: $DyedBlockList<$TableClothBlock>;
        static FRAMED_GLASS_TRAPDOOR: $BlockEntry<$TrainTrapdoorBlock>;
        static SMART_OBSERVER: $BlockEntry<$SmartObserverBlock>;
        static BRASS_ENCASED_SHAFT: $BlockEntry<$EncasedShaftBlock>;
        static TRAIN_TRAPDOOR: $BlockEntry<$TrainTrapdoorBlock>;
        static WEIGHTED_EJECTOR: $BlockEntry<$EjectorBlock>;
        static PISTON_EXTENSION_POLE: $BlockEntry<$PistonExtensionPoleBlock>;
        static BRASS_FUNNEL: $BlockEntry<$BrassFunnelBlock>;
        static STRESSOMETER: $BlockEntry<$GaugeBlock>;
        static REDSTONE_REQUESTER: $BlockEntry<$RedstoneRequesterBlock>;
        static ORANGE_NIXIE_TUBE: $BlockEntry<$NixieTubeBlock>;
        static PULSE_EXTENDER: $BlockEntry<$BrassDiodeBlock>;
        static DEEPSLATE_ZINC_ORE: $BlockEntry<$Block>;
        static COPPER_SCAFFOLD: $BlockEntry<$MetalScaffoldingBlock>;
        static PULLEY_MAGNET: $BlockEntry<$PulleyBlock$MagnetBlock>;
        static STEAM_WHISTLE: $BlockEntry<$WhistleBlock>;
        static MECHANICAL_BEARING: $BlockEntry<$MechanicalBearingBlock>;
        static MECHANICAL_PLOUGH: $BlockEntry<$PloughBlock>;
        static SEATS: $DyedBlockList<$SeatBlock>;
        static TRACK_OBSERVER: $BlockEntry<$TrackObserverBlock>;
        static ROPE_PULLEY: $BlockEntry<$PulleyBlock>;
        static NOZZLE: $BlockEntry<$NozzleBlock>;
        static COPPER_VALVE_HANDLE: $BlockEntry<$ValveHandleBlock>;
        static GANTRY_CARRIAGE: $BlockEntry<$GantryCarriageBlock>;
        static STOCK_TICKER: $BlockEntry<$StockTickerBlock>;
        static LARGE_BOGEY: $BlockEntry<$StandardBogeyBlock>;
        static TOOLBOXES: $DyedBlockList<$ToolboxBlock>;
        static TRACK_SIGNAL: $BlockEntry<$SignalBlock>;
        static BOUND_CARDBOARD_BLOCK: $BlockEntry<$CardboardBlock>;
        static CRUSHING_WHEEL_CONTROLLER: $BlockEntry<$CrushingWheelControllerBlock>;
        static FLYWHEEL: $BlockEntry<$FlywheelBlock>;
        static LIT_BLAZE_BURNER: $BlockEntry<$LitBlazeBurnerBlock>;
        static DYED_SAILS: $DyedBlockList<$SailBlock>;
        static BRASS_BARS: $BlockEntry<$IronBarsBlock>;
        static RAW_ZINC_BLOCK: $BlockEntry<$Block>;
        static MECHANICAL_PUMP: $BlockEntry<$PumpBlock>;
        static CRUSHING_WHEEL: $BlockEntry<$CrushingWheelBlock>;
        static COPPER_DOOR: $BlockEntry<$SlidingDoorBlock>;
        static RAILWAY_CASING: $BlockEntry<$CasingBlock>;
        static COPPER_TABLE_CLOTH: $BlockEntry<$TableClothBlock>;
        static FAKE_TRACK: $BlockEntry<$FakeTrackBlock>;
        static TURNTABLE: $BlockEntry<$TurntableBlock>;
        static HAND_CRANK: $BlockEntry<$HandCrankBlock>;
        static GANTRY_SHAFT: $BlockEntry<$GantryShaftBlock>;
        static WATER_WHEEL_STRUCTURAL: $BlockEntry<$WaterWheelStructuralBlock>;
        static BRASS_LADDER: $BlockEntry<$MetalLadderBlock>;
        static ITEM_VAULT: $BlockEntry<$ItemVaultBlock>;
        static COPPER_BACKTANK: $BlockEntry<$BacktankBlock>;
        static WATER_WHEEL: $BlockEntry<$WaterWheelBlock>;
        static MECHANICAL_DRILL: $BlockEntry<$DrillBlock>;
        static HOSE_PULLEY: $BlockEntry<$HosePulleyBlock>;
        static BRASS_CASING: $BlockEntry<$CasingBlock>;
        static PACKAGE_FROGPORT: $BlockEntry<$FrogportBlock>;
        static SMALL_BOGEY: $BlockEntry<$StandardBogeyBlock>;
        static ANDESITE_ALLOY_BLOCK: $BlockEntry<$Block>;
        static WOODEN_BRACKET: $BlockEntry<$BracketBlock>;
        static CHUTE: $BlockEntry<$ChuteBlock>;
        static CONTROLLER_RAIL: $BlockEntry<$ControllerRailBlock>;
        static SHADOW_STEEL_CASING: $BlockEntry<$CasingBlock>;
        static LARGE_COGWHEEL: $BlockEntry<$CogWheelBlock>;
        static ROPE: $BlockEntry<$PulleyBlock$RopeBlock>;
        static BRASS_ENCASED_LARGE_COGWHEEL: $BlockEntry<$EncasedCogwheelBlock>;
        static ENCASED_FAN: $BlockEntry<$EncasedFanBlock>;
        static MECHANICAL_MIXER: $BlockEntry<$MechanicalMixerBlock>;
        static ANALOG_LEVER: $BlockEntry<$AnalogLeverBlock>;
        static BRASS_BLOCK: $BlockEntry<$Block>;
        static ROSE_QUARTZ_BLOCK: $BlockEntry<$RotatedPillarBlock>;
        static ZINC_ORE: $BlockEntry<$Block>;
        static POWERED_TOGGLE_LATCH: $BlockEntry<$ToggleLatchBlock>;
        static METAL_BRACKET: $BlockEntry<$BracketBlock>;
        static SHAFT: $BlockEntry<$ShaftBlock>;
        static GEARBOX: $BlockEntry<$GearboxBlock>;
        static ROSE_QUARTZ_TILES: $BlockEntry<$Block>;
        static SPEEDOMETER: $BlockEntry<$GaugeBlock>;
        static GLASS_FLUID_PIPE: $BlockEntry<$GlassFluidPipeBlock>;
        static RADIAL_CHASSIS: $BlockEntry<$RadialChassisBlock>;
        static ANDESITE_BARS: $BlockEntry<$IronBarsBlock>;
        static SEQUENCED_GEARSHIFT: $BlockEntry<$SequencedGearshiftBlock>;
        static FLUID_VALVE: $BlockEntry<$FluidValveBlock>;
        static MECHANICAL_PISTON_HEAD: $BlockEntry<$MechanicalPistonHeadBlock>;
        static ANDESITE_TUNNEL: $BlockEntry<$BeltTunnelBlock>;
        static ELEVATOR_PULLEY: $BlockEntry<$ElevatorPulleyBlock>;
        static ANDESITE_CASING: $BlockEntry<$CasingBlock>;
        static PLACARD: $BlockEntry<$PlacardBlock>;
        static CUCKOO_CLOCK: $BlockEntry<$CuckooClockBlock>;
        static SPOUT: $BlockEntry<$SpoutBlock>;
        static ANDESITE_TABLE_CLOTH: $BlockEntry<$TableClothBlock>;
        static PORTABLE_STORAGE_INTERFACE: $BlockEntry<$PortableStorageInterfaceBlock>;
        static DISPLAY_BOARD: $BlockEntry<$FlapDisplayBlock>;
        static BELT: $BlockEntry<$BeltBlock>;
        static STEAM_ENGINE: $BlockEntry<$SteamEngineBlock>;
        static ANDESITE_ENCASED_COGWHEEL: $BlockEntry<$EncasedCogwheelBlock>;
        static STEAM_WHISTLE_EXTENSION: $BlockEntry<$WhistleExtenderBlock>;
        static ADJUSTABLE_CHAIN_GEARSHIFT: $BlockEntry<$ChainGearshiftBlock>;
        static POWERED_LATCH: $BlockEntry<$PoweredLatchBlock>;
        static SMALL_ROSE_QUARTZ_TILES: $BlockEntry<$Block>;
        static COPYCAT_PANEL: $BlockEntry<$CopycatPanelBlock>;
        static MILLSTONE: $BlockEntry<$MillstoneBlock>;
        static BRASS_TUNNEL: $BlockEntry<$BrassTunnelBlock>;
        static DYED_VALVE_HANDLES: $DyedBlockList<$ValveHandleBlock>;
        static MECHANICAL_SAW: $BlockEntry<$SawBlock>;
        static BRASS_ENCASED_COGWHEEL: $BlockEntry<$EncasedCogwheelBlock>;
        static DESK_BELL: $BlockEntry<$DeskBellBlock>;
        static REDSTONE_CONTACT: $BlockEntry<$RedstoneContactBlock>;
        static SCHEMATIC_TABLE: $BlockEntry<$SchematicTableBlock>;
        static STICKER: $BlockEntry<$StickerBlock>;
        static MECHANICAL_HARVESTER: $BlockEntry<$HarvesterBlock>;
        static REPACKAGER: $BlockEntry<$RepackagerBlock>;
        static POWERED_SHAFT: $BlockEntry<$PoweredShaftBlock>;
        static CHAIN_CONVEYOR: $BlockEntry<$ChainConveyorBlock>;
        static COPPER_CASING: $BlockEntry<$CasingBlock>;
        static BRASS_TABLE_CLOTH: $BlockEntry<$TableClothBlock>;
        static COPPER_SHINGLES: $CopperBlockSet;
        static ANDESITE_ENCASED_SHAFT: $BlockEntry<$EncasedShaftBlock>;
        static DISPLAY_LINK: $BlockEntry<$DisplayLinkBlock>;
        static REFINED_RADIANCE_CASING: $BlockEntry<$CasingBlock>;
        static ROSE_QUARTZ_LAMP: $BlockEntry<$RoseQuartzLampBlock>;
        static NETHERITE_BACKTANK: $BlockEntry<$BacktankBlock>;
        static DEPLOYER: $BlockEntry<$DeployerBlock>;
        static FLUID_TANK: $BlockEntry<$FluidTankBlock>;
        static MECHANICAL_ROLLER: $BlockEntry<$RollerBlock>;
        static MECHANICAL_PISTON: $BlockEntry<$MechanicalPistonBlock>;
        static ANDESITE_SCAFFOLD: $BlockEntry<$MetalScaffoldingBlock>;
        static ANDESITE_FUNNEL: $BlockEntry<$AndesiteFunnelBlock>;
        static LECTERN_CONTROLLER: $BlockEntry<$LecternControllerBlock>;
        static REDSTONE_LINK: $BlockEntry<$RedstoneLinkBlock>;
        static ITEM_HATCH: $BlockEntry<$ItemHatchBlock>;
        static TRACK_STATION: $BlockEntry<$StationBlock>;
        static CLUTCH: $BlockEntry<$ClutchBlock>;
        static ZINC_BLOCK: $BlockEntry<$Block>;
        static SCHEMATICANNON: $BlockEntry<$SchematicannonBlock>;
        static ANDESITE_ENCASED_LARGE_COGWHEEL: $BlockEntry<$EncasedCogwheelBlock>;
        static PACKAGER: $BlockEntry<$PackagerBlock>;
        static SMART_FLUID_PIPE: $BlockEntry<$SmartFluidPipeBlock>;
        static CREATIVE_FLUID_TANK: $BlockEntry<$FluidTankBlock>;
        static TRAIN_CONTROLS: $BlockEntry<$ControlsBlock>;
        static CLOCKWORK_BEARING: $BlockEntry<$ClockworkBearingBlock>;
        static MINECART_ANCHOR: $BlockEntry<$CartAssemblerBlock$MinecartAnchorBlock>;
        static BRASS_SCAFFOLD: $BlockEntry<$MetalScaffoldingBlock>;
        static ELEVATOR_CONTACT: $BlockEntry<$ElevatorContactBlock>;
        static SAIL_FRAME: $BlockEntry<$SailBlock>;
        static EXPERIENCE_BLOCK: $BlockEntry<$ExperienceBlock>;
        static MECHANICAL_CRAFTER: $BlockEntry<$MechanicalCrafterBlock>;
        static CARDBOARD_BLOCK: $BlockEntry<$CardboardBlock>;
        static ENCASED_FLUID_PIPE: $BlockEntry<$EncasedPipeBlock>;
        static METAL_GIRDER: $BlockEntry<$GirderBlock>;
        static BRASS_DOOR: $BlockEntry<$SlidingDoorBlock>;
        static PACKAGE_POSTBOXES: $DyedBlockList<$PostboxBlock>;
        static HAUNTED_BELL: $BlockEntry<$HauntedBellBlock>;
        static COPPER_BARS: $BlockEntry<$IronBarsBlock>;
        static PECULIAR_BELL: $BlockEntry<$PeculiarBellBlock>;
        static MECHANICAL_ARM: $BlockEntry<$ArmBlock>;
        static COPYCAT_STEP: $BlockEntry<$CopycatStepBlock>;
        static CART_ASSEMBLER: $BlockEntry<$CartAssemblerBlock>;
        static CLIPBOARD: $BlockEntry<$ClipboardBlock>;
        static PULSE_TIMER: $BlockEntry<$BrassDiodeBlock>;
        static MYSTERIOUS_CUCKOO_CLOCK: $BlockEntry<$CuckooClockBlock>;
        static DEPOT: $BlockEntry<$DepotBlock>;
        static COPYCAT_BASE: $BlockEntry<$Block>;
        static COGWHEEL: $BlockEntry<$CogWheelBlock>;
        static ROTATION_SPEED_CONTROLLER: $BlockEntry<$SpeedControllerBlock>;
        static SAIL: $BlockEntry<$SailBlock>;
        static BASIN: $BlockEntry<$BasinBlock>;
        static ENCASED_CHAIN_DRIVE: $BlockEntry<$ChainDriveBlock>;
        static SMART_CHUTE: $BlockEntry<$SmartChuteBlock>;
        static WINDMILL_BEARING: $BlockEntry<$WindmillBearingBlock>;
        static CONTRAPTION_CONTROLS: $BlockEntry<$ContraptionControlsBlock>;
        static ANDESITE_LADDER: $BlockEntry<$MetalLadderBlock>;
        static COPPER_LADDER: $BlockEntry<$MetalLadderBlock>;
        static TRAIN_DOOR: $BlockEntry<$SlidingDoorBlock>;
        static INDUSTRIAL_IRON_BLOCK: $BlockEntry<$Block>;
        static TRACK: $BlockEntry<$TrackBlock>;
        static GEARSHIFT: $BlockEntry<$GearshiftBlock>;
        static ANDESITE_BELT_FUNNEL: $BlockEntry<$BeltFunnelBlock>;
        static METAL_GIRDER_ENCASED_SHAFT: $BlockEntry<$GirderEncasedShaftBlock>;
        static ITEM_DRAIN: $BlockEntry<$ItemDrainBlock>;
        static PORTABLE_FLUID_INTERFACE: $BlockEntry<$PortableStorageInterfaceBlock>;
        static COPYCAT_BARS: $BlockEntry<$WrenchableDirectionalBlock>;
        static STOCK_LINK: $BlockEntry<$PackagerLinkBlock>;
        constructor();
    }
    export class $AllTags {
        /**
         * @deprecated
         */
        static commonTag<T>(arg0: $Registry<T>, arg1: string): $TagKey<T>;
        /**
         * @deprecated
         */
        static commonBlockTag(arg0: string): $TagKey<$Block>;
        /**
         * @deprecated
         */
        static commonItemTag(arg0: string): $TagKey<$Item>;
        /**
         * @deprecated
         */
        static commonFluidTag(arg0: string): $TagKey<$Fluid>;
        /**
         * @deprecated
         */
        static optionalTag<T>(arg0: $Registry<T>, arg1: $ResourceLocation_): $TagKey<T>;
        constructor();
    }
    export class $AllSoundEvents$SoundEntryProvider implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        generate(arg0: $Path_, arg1: $CachedOutput_): $CompletableFuture<never>;
        constructor(arg0: $DataGenerator);
        get name(): string;
    }
    export class $AllSoundEvents$WrappedSoundEntry$CompiledSoundEvent extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $AllSoundEvents$WrappedSoundEntry$CompiledSoundEvent}.
     */
    export type $AllSoundEvents$WrappedSoundEntry$CompiledSoundEvent_ = { event?: $DeferredHolder<$SoundEvent_, $SoundEvent_>, volume?: number, pitch?: number,  } | [event?: $DeferredHolder<$SoundEvent_, $SoundEvent_>, volume?: number, pitch?: number, ];
    export class $AllSoundEvents {
        static provideLang(arg0: $BiConsumer_<string, string>): void;
        static playItemPickup(arg0: $Player): void;
        static register(arg0: $RegisterEvent): void;
        static provider(arg0: $DataGenerator): $AllSoundEvents$SoundEntryProvider;
        static create(arg0: $ResourceLocation_): $AllSoundEvents$SoundEntryBuilder;
        static prepare(): void;
        static CONTRAPTION_DISASSEMBLE: $AllSoundEvents$SoundEntry;
        static HAUNTED_BELL_USE: $AllSoundEvents$SoundEntry;
        static ALL: $Map<$ResourceLocation, $AllSoundEvents$SoundEntry>;
        static CLIPBOARD_ERASE: $AllSoundEvents$SoundEntry;
        static FROGPORT_CATCH: $AllSoundEvents$SoundEntry;
        static WHISTLE_TRAIN_MANUAL_LOW: $AllSoundEvents$SoundEntry;
        static SLIME_ADDED: $AllSoundEvents$SoundEntry;
        static STEAM: $AllSoundEvents$SoundEntry;
        static PACKAGER: $AllSoundEvents$SoundEntry;
        static SANDING_SHORT: $AllSoundEvents$SoundEntry;
        static PACKAGE_POP: $AllSoundEvents$SoundEntry;
        static CARDBOARD_SWORD: $AllSoundEvents$SoundEntry;
        static SAW_ACTIVATE_WOOD: $AllSoundEvents$SoundEntry;
        static DENY: $AllSoundEvents$SoundEntry;
        static MIXING: $AllSoundEvents$SoundEntry;
        static SCROLL_VALUE: $AllSoundEvents$SoundEntry;
        static POTATO_HIT: $AllSoundEvents$SoundEntry;
        static FUNNEL_FLAP: $AllSoundEvents$SoundEntry;
        static WRENCH_REMOVE: $AllSoundEvents$SoundEntry;
        static FROGPORT_OPEN: $AllSoundEvents$SoundEntry;
        static WHISTLE_HIGH: $AllSoundEvents$SoundEntry;
        static STOCK_TICKER_REQUEST: $AllSoundEvents$SoundEntry;
        static CONTROLLER_PUT: $AllSoundEvents$SoundEntry;
        static CRUSHING_3: $AllSoundEvents$SoundEntry;
        static COPPER_ARMOR_EQUIP: $AllSoundEvents$SoundEntry;
        static CRUSHING_2: $AllSoundEvents$SoundEntry;
        static CRUSHING_1: $AllSoundEvents$SoundEntry;
        static CLIPBOARD_CHECKMARK: $AllSoundEvents$SoundEntry;
        static TRAIN: $AllSoundEvents$SoundEntry;
        static CONTRAPTION_ASSEMBLE: $AllSoundEvents$SoundEntry;
        static TRAIN3: $AllSoundEvents$SoundEntry;
        static TRAIN2: $AllSoundEvents$SoundEntry;
        static FROGPORT_CLOSE: $AllSoundEvents$SoundEntry;
        static SCHEMATICANNON_FINISH: $AllSoundEvents$SoundEntry;
        static FWOOMP: $AllSoundEvents$SoundEntry;
        static WHISTLE_TRAIN_MANUAL: $AllSoundEvents$SoundEntry;
        static WHISTLE_CHIFF: $AllSoundEvents$SoundEntry;
        static PECULIAR_BELL_USE: $AllSoundEvents$SoundEntry;
        static WHISTLE_TRAIN_MANUAL_END: $AllSoundEvents$SoundEntry;
        static DEPOT_PLOP: $AllSoundEvents$SoundEntry;
        static WORLDSHAPER_PLACE: $AllSoundEvents$SoundEntry;
        static WHISTLE_LOW: $AllSoundEvents$SoundEntry;
        static WRENCH_ROTATE: $AllSoundEvents$SoundEntry;
        static CRAFTER_CRAFT: $AllSoundEvents$SoundEntry;
        static WHISTLE_MEDIUM: $AllSoundEvents$SoundEntry;
        static COGS: $AllSoundEvents$SoundEntry;
        static SANDING_LONG: $AllSoundEvents$SoundEntry;
        static CONTROLLER_TAKE: $AllSoundEvents$SoundEntry;
        static HAUNTED_BELL_CONVERT: $AllSoundEvents$SoundEntry;
        static STOCK_TICKER_TRADE: $AllSoundEvents$SoundEntry;
        static WHISTLE_TRAIN: $AllSoundEvents$SoundEntry;
        static CONFIRM: $AllSoundEvents$SoundEntry;
        static DEPOT_SLIDE: $AllSoundEvents$SoundEntry;
        static MECHANICAL_PRESS_ACTIVATION: $AllSoundEvents$SoundEntry;
        static FROGPORT_DEPOSIT: $AllSoundEvents$SoundEntry;
        static WHISTLE_TRAIN_MANUAL_LOW_END: $AllSoundEvents$SoundEntry;
        static CONTROLLER_CLICK: $AllSoundEvents$SoundEntry;
        static SPOUTING: $AllSoundEvents$SoundEntry;
        static MECHANICAL_PRESS_ACTIVATION_ON_BELT: $AllSoundEvents$SoundEntry;
        static BLAZE_MUNCH: $AllSoundEvents$SoundEntry;
        static CRANKING: $AllSoundEvents$SoundEntry;
        static DESK_BELL_USE: $AllSoundEvents$SoundEntry;
        static SAW_ACTIVATE_STONE: $AllSoundEvents$SoundEntry;
        static SCHEMATICANNON_LAUNCH_BLOCK: $AllSoundEvents$SoundEntry;
        static CONFIRM_2: $AllSoundEvents$SoundEntry;
        static CRAFTER_CLICK: $AllSoundEvents$SoundEntry;
        static ITEM_HATCH: $AllSoundEvents$SoundEntry;
        static WHISTLE_TRAIN_LOW: $AllSoundEvents$SoundEntry;
        static STOCK_LINK: $AllSoundEvents$SoundEntry;
        constructor();
    }
    export class $AllEntityTypes {
        static registerEntityAttributes(arg0: $EntityAttributeCreationEvent): void;
        static register(): void;
        static CARRIAGE_CONTRAPTION: $EntityEntry<$CarriageContraptionEntity>;
        static SEAT: $EntityEntry<$SeatEntity>;
        static POTATO_PROJECTILE: $EntityEntry<$PotatoProjectileEntity>;
        static PACKAGE: $EntityEntry<$PackageEntity>;
        static SUPER_GLUE: $EntityEntry<$SuperGlueEntity>;
        static ORIENTED_CONTRAPTION: $EntityEntry<$OrientedContraptionEntity>;
        static CRAFTING_BLUEPRINT: $EntityEntry<$BlueprintEntity>;
        static GANTRY_CONTRAPTION: $EntityEntry<$GantryContraptionEntity>;
        static CONTROLLED_CONTRAPTION: $EntityEntry<$ControlledContraptionEntity>;
        constructor();
    }
    export class $AllSpriteShifts {
        static getWoodenWindow(arg0: $WoodType_): $CTSpriteShiftEntry;
        static HOSE_PULLEY_COIL: $SpriteShiftEntry;
        static GIRDER_POLE: $CTSpriteShiftEntry;
        static ANDESITE_CASING: $CTSpriteShiftEntry;
        static VAULT_SIDE: $Couple<$CTSpriteShiftEntry>;
        static SUPER_BURNER_FLAME: $SpriteShiftEntry;
        static COPPER_TILES: $Map<$WeatheringCopper$WeatherState, $CTSpriteShiftEntry>;
        static OLD_FACTORY_WINDOW_3: $CTSpriteShiftEntry;
        static OLD_FACTORY_WINDOW_2: $CTSpriteShiftEntry;
        static CHASSIS_STICKY: $CTSpriteShiftEntry;
        static SECONDARY_CHASSIS_SIDE: $CTSpriteShiftEntry;
        static CREATIVE_FLUID_TANK: $CTSpriteShiftEntry;
        static COPPER_SCAFFOLD_INSIDE: $CTSpriteShiftEntry;
        static OLD_FACTORY_WINDOW_4: $CTSpriteShiftEntry;
        static OLD_FACTORY_WINDOW_1: $CTSpriteShiftEntry;
        static VERTICAL_FRAMED_GLASS: $CTSpriteShiftEntry;
        static BELT: $SpriteShiftEntry;
        static RAILWAY_CASING: $CTSpriteShiftEntry;
        static BELT_DIAGONAL: $SpriteShiftEntry;
        static DYED_BELTS: $Map<$DyeColor, $SpriteShiftEntry>;
        static BOGEY_BELT: $SpriteShiftEntry;
        static VAULT_BOTTOM: $Couple<$CTSpriteShiftEntry>;
        static BRASS_ENCASED_COGWHEEL_OTHERSIDE: $CTSpriteShiftEntry;
        static BRASS_TUNNEL_TOP: $CTSpriteShiftEntry;
        static VAULT_TOP: $Couple<$CTSpriteShiftEntry>;
        static CRAFTER_OTHERSIDE: $CTSpriteShiftEntry;
        static BRASS_SCAFFOLD: $CTSpriteShiftEntry;
        static CHASSIS_SIDE: $CTSpriteShiftEntry;
        static FRAMED_GLASS: $CTSpriteShiftEntry;
        static BRASS_ENCASED_COGWHEEL_SIDE: $CTSpriteShiftEntry;
        static ANDESIDE_BELT_CASING: $SpriteShiftEntry;
        static VAULT_FRONT: $Couple<$CTSpriteShiftEntry>;
        static FLUID_TANK_TOP: $CTSpriteShiftEntry;
        static ELEVATOR_COIL: $SpriteShiftEntry;
        static FLUID_TANK_INNER: $CTSpriteShiftEntry;
        static ANDESITE_ENCASED_COGWHEEL_SIDE: $CTSpriteShiftEntry;
        static ANDESITE_SCAFFOLD_INSIDE: $CTSpriteShiftEntry;
        static BRASS_CASING: $CTSpriteShiftEntry;
        static ELEVATOR_BELT: $SpriteShiftEntry;
        static INDUSTRIAL_IRON_WINDOW: $CTSpriteShiftEntry;
        static COPPER_CASING: $CTSpriteShiftEntry;
        static HORIZONTAL_FRAMED_GLASS: $CTSpriteShiftEntry;
        static ROPE_PULLEY_COIL: $SpriteShiftEntry;
        static COPPER_SHINGLES: $Map<$WeatheringCopper$WeatherState, $CTSpriteShiftEntry>;
        static COPPER_SCAFFOLD: $CTSpriteShiftEntry;
        static ORNATE_IRON_WINDOW: $CTSpriteShiftEntry;
        static SHADOW_STEEL_CASING: $CTSpriteShiftEntry;
        static FACTORY_PANEL_CONNECTIONS: $SpriteShiftEntry;
        static DYED_OFFSET_BELTS: $Map<$DyeColor, $SpriteShiftEntry>;
        static REFINED_RADIANCE_CASING: $CTSpriteShiftEntry;
        static CHASSIS: $CTSpriteShiftEntry;
        static BRASS_SCAFFOLD_INSIDE: $CTSpriteShiftEntry;
        static FLUID_TANK: $CTSpriteShiftEntry;
        static BELT_OFFSET: $SpriteShiftEntry;
        static ANDESITE_SCAFFOLD: $CTSpriteShiftEntry;
        static RAILWAY_CASING_SIDE: $CTSpriteShiftEntry;
        static DYED_DIAGONAL_BELTS: $Map<$DyeColor, $SpriteShiftEntry>;
        static CRAFTER_THINGIES: $SpriteShiftEntry;
        static CREATIVE_CASING: $CTSpriteShiftEntry;
        static CRAFTER_SIDE: $CTSpriteShiftEntry;
        static BURNER_FLAME: $SpriteShiftEntry;
        static ANDESITE_ENCASED_COGWHEEL_OTHERSIDE: $CTSpriteShiftEntry;
        constructor();
    }
    export class $AllCreativeModeTabs {
        static register(arg0: $IEventBus): void;
        static PALETTES_CREATIVE_TAB: $DeferredHolder<$CreativeModeTab, $CreativeModeTab>;
        static BASE_CREATIVE_TAB: $DeferredHolder<$CreativeModeTab, $CreativeModeTab>;
        constructor();
    }
    export class $AllSoundEvents$CustomSoundEntry extends $AllSoundEvents$SoundEntry {
    }
    export class $Create {
        static onCtor(arg0: $IEventBus, arg1: $ModContainer): void;
        static registrate(): $CreateRegistrate;
        static init(arg0: $FMLCommonSetupEvent): void;
        static lang(): $LangBuilder;
        static onRegister(arg0: $RegisterEvent): void;
        static asResource(arg0: string): $ResourceLocation;
        static LOGISTICS: $GlobalLogisticsManager;
        static TORQUE_PROPAGATOR: $TorquePropagator;
        /**
         * @deprecated
         */
        static RANDOM: $Random;
        static SCHEMATIC_RECEIVER: $ServerSchematicLoader;
        static LAGGER: $ServerLagger;
        static RAILWAYS: $GlobalRailwayManager;
        static LOGGER: $Logger;
        static GSON: $Gson;
        static ID: string;
        static REDSTONE_LINK_NETWORK_HANDLER: $RedstoneLinkNetworkHandler;
        static NAME: string;
        constructor(arg0: $IEventBus, arg1: $ModContainer);
    }
    export class $AllTags$AllEntityTags extends $Enum<$AllTags$AllEntityTags> {
        static values(): $AllTags$AllEntityTags[];
        static valueOf(arg0: string): $AllTags$AllEntityTags;
        matches(arg0: $EntityType_<never>): boolean;
        matches(arg0: $Entity): boolean;
        static IGNORE_SEAT: $AllTags$AllEntityTags;
        tag: $TagKey<$EntityType<never>>;
        static BLAZE_BURNER_CAPTURABLE: $AllTags$AllEntityTags;
    }
    /**
     * Values that may be interpreted as {@link $AllTags$AllEntityTags}.
     */
    export type $AllTags$AllEntityTags_ = "blaze_burner_capturable" | "ignore_seat";
    export class $AllTags$NameSpace extends $Enum<$AllTags$NameSpace> {
        static values(): $AllTags$NameSpace[];
        static valueOf(arg0: string): $AllTags$NameSpace;
        id(arg0: string): $ResourceLocation;
        id(arg0: $Enum<never>, arg1: string): $ResourceLocation;
        static MOD: $AllTags$NameSpace;
        static CURIOS: $AllTags$NameSpace;
        static COMMON: $AllTags$NameSpace;
        static QUARK: $AllTags$NameSpace;
        static GS: $AllTags$NameSpace;
        static TIC: $AllTags$NameSpace;
    }
    /**
     * Values that may be interpreted as {@link $AllTags$NameSpace}.
     */
    export type $AllTags$NameSpace_ = "mod" | "common" | "tic" | "quark" | "gs" | "curios";
    export class $AllShapes$Builder {
        forDirectional(arg0: $Direction_): $VoxelShaper;
        forDirectional(): $VoxelShaper;
        forHorizontal(arg0: $Direction_): $VoxelShaper;
        forHorizontalAxis(): $VoxelShaper;
        forAxis(): $VoxelShaper;
        add(arg0: $VoxelShape): $AllShapes$Builder;
        add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $AllShapes$Builder;
        erase(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $AllShapes$Builder;
        build(arg0: $BiFunction_<$VoxelShape, $Direction$Axis, $VoxelShaper>, arg1: $Direction$Axis_): $VoxelShaper;
        build(arg0: $BiFunction_<$VoxelShape, $Direction, $VoxelShaper>, arg1: $Direction_): $VoxelShaper;
        build(): $VoxelShape;
        constructor(arg0: $VoxelShape);
    }
    export class $AllMovementBehaviours {
        constructor();
    }
    export class $AllTags$AllItemTags extends $Enum<$AllTags$AllItemTags> {
        static values(): $AllTags$AllItemTags[];
        static valueOf(arg0: string): $AllTags$AllItemTags;
        matches(arg0: $Item_): boolean;
        matches(arg0: $ItemStack_): boolean;
        /**
         * @deprecated
         */
        static BLAZE_BURNER_FUEL_SPECIAL: $AllTags$AllItemTags;
        static CARDBOARD_STORAGE_BLOCKS: $AllTags$AllItemTags;
        static FOODS_CHOCOLATE: $AllTags$AllItemTags;
        static ANTHRACITE_ORES: $AllTags$AllItemTags;
        static EMERALDITE_ORES: $AllTags$AllItemTags;
        static CHAIN_RIDEABLE: $AllTags$AllItemTags;
        static PACKAGES: $AllTags$AllItemTags;
        static UPRIGHT_ON_BELT: $AllTags$AllItemTags;
        static CERTUS_QUARTZ: $AllTags$AllItemTags;
        static DRINKS_TEA: $AllTags$AllItemTags;
        static AMETRINE_ORES: $AllTags$AllItemTags;
        static LIGNITE_ORES: $AllTags$AllItemTags;
        static WHEAT_FLOURS: $AllTags$AllItemTags;
        static VALVE_HANDLES: $AllTags$AllItemTags;
        tag: $TagKey<$Item>;
        static CREATE_INGOTS: $AllTags$AllItemTags;
        static SLEEPERS: $AllTags$AllItemTags;
        static FLOURS: $AllTags$AllItemTags;
        static INVALID_FOR_TRACK_PAVING: $AllTags$AllItemTags;
        static TABLE_CLOTHS: $AllTags$AllItemTags;
        static UA_CORAL: $AllTags$AllItemTags;
        static ANDESITE_ALLOY_STORAGE_BLOCKS: $AllTags$AllItemTags;
        static OBSIDIAN_DUST: $AllTags$AllItemTags;
        static CRUSHED_RAW_MATERIALS: $AllTags$AllItemTags;
        static DISPENSE_BEHAVIOR_WRAP_BLACKLIST: $AllTags$AllItemTags;
        static HONEY_BUCKETS: $AllTags$AllItemTags;
        static CONTRAPTION_CONTROLLED: $AllTags$AllItemTags;
        static CHOCOLATE_BUCKETS: $AllTags$AllItemTags;
        static NOT_POTION: $AllTags$AllItemTags;
        static PLATES: $AllTags$AllItemTags;
        static NOT_UPRIGHT_ON_BELT: $AllTags$AllItemTags;
        static DYED_TABLE_CLOTHS: $AllTags$AllItemTags;
        static FOODS_DOUGH_WHEAT: $AllTags$AllItemTags;
        static ALLURITE: $AllTags$AllItemTags;
        static POSTBOXES: $AllTags$AllItemTags;
        static SEATS: $AllTags$AllItemTags;
        static AMETHYST: $AllTags$AllItemTags;
        static CASING: $AllTags$AllItemTags;
        static DEPLOYABLE_DRINK: $AllTags$AllItemTags;
        /**
         * @deprecated
         */
        static BLAZE_BURNER_FUEL_REGULAR: $AllTags$AllItemTags;
        static TRACKS: $AllTags$AllItemTags;
        static TOOLBOXES: $AllTags$AllItemTags;
        static OBSIDIAN_PLATES: $AllTags$AllItemTags;
        static PRESSURIZED_AIR_SOURCES: $AllTags$AllItemTags;
        static LUMIERE: $AllTags$AllItemTags;
        static SANDPAPER: $AllTags$AllItemTags;
        static PULPIFIABLE: $AllTags$AllItemTags;
        static CARDBOARD_PLATES: $AllTags$AllItemTags;
        static CURIOS_HEAD: $AllTags$AllItemTags;
    }
    /**
     * Values that may be interpreted as {@link $AllTags$AllItemTags}.
     */
    export type $AllTags$AllItemTags_ = "blaze_burner_fuel_regular" | "blaze_burner_fuel_special" | "casing" | "contraption_controlled" | "create_ingots" | "crushed_raw_materials" | "invalid_for_track_paving" | "deployable_drink" | "pressurized_air_sources" | "sandpaper" | "seats" | "postboxes" | "table_cloths" | "dyed_table_cloths" | "pulpifiable" | "sleepers" | "toolboxes" | "packages" | "chain_rideable" | "tracks" | "upright_on_belt" | "not_upright_on_belt" | "not_potion" | "valve_handles" | "dispense_behavior_wrap_blacklist" | "obsidian_dust" | "plates" | "obsidian_plates" | "cardboard_plates" | "allurite" | "amethyst" | "lumiere" | "certus_quartz" | "ametrine_ores" | "anthracite_ores" | "emeraldite_ores" | "lignite_ores" | "cardboard_storage_blocks" | "andesite_alloy_storage_blocks" | "chocolate_buckets" | "honey_buckets" | "foods_chocolate" | "drinks_tea" | "flours" | "wheat_flours" | "foods_dough_wheat" | "ua_coral" | "curios_head";
    export class $AllTags$AllBlockTags extends $Enum<$AllTags$AllBlockTags> {
        static values(): $AllTags$AllBlockTags[];
        static valueOf(arg0: string): $AllTags$AllBlockTags;
        matches(arg0: $Block_): boolean;
        matches(arg0: $BlockState_): boolean;
        matches(arg0: $ItemStack_): boolean;
        static FAN_PROCESSING_CATALYSTS_BLASTING: $AllTags$AllBlockTags;
        static CARDBOARD_STORAGE_BLOCKS: $AllTags$AllBlockTags;
        static PASSIVE_BOILER_HEATERS: $AllTags$AllBlockTags;
        static BRITTLE: $AllTags$AllBlockTags;
        static SLIMY_LOGS: $AllTags$AllBlockTags;
        static SINGLE_BLOCK_INVENTORIES: $AllTags$AllBlockTags;
        static NON_HARVESTABLE: $AllTags$AllBlockTags;
        static SAFE_NBT: $AllTags$AllBlockTags;
        static NON_DOUBLE_DOOR: $AllTags$AllBlockTags;
        static NON_BREAKABLE: $AllTags$AllBlockTags;
        static COPYCAT_DENY: $AllTags$AllBlockTags;
        static PLOUGH_BLACKLIST: $AllTags$AllBlockTags;
        static FAN_PROCESSING_CATALYSTS_SPLASHING: $AllTags$AllBlockTags;
        static WINDMILL_SAILS: $AllTags$AllBlockTags;
        static FAN_PROCESSING_CATALYSTS_SMOKING: $AllTags$AllBlockTags;
        static CHEST_MOUNTED_STORAGE: $AllTags$AllBlockTags;
        static VALVE_HANDLES: $AllTags$AllBlockTags;
        static GIRDABLE_TRACKS: $AllTags$AllBlockTags;
        static NON_MOVABLE: $AllTags$AllBlockTags;
        static SUGAR_CANE_VARIANTS: $AllTags$AllBlockTags;
        static SIMPLE_MOUNTED_STORAGE: $AllTags$AllBlockTags;
        static ROOTS: $AllTags$AllBlockTags;
        static COPYCAT_ALLOW: $AllTags$AllBlockTags;
        static POSTBOXES: $AllTags$AllBlockTags;
        static WRENCH_PICKUP: $AllTags$AllBlockTags;
        tag: $TagKey<$Block>;
        static SEATS: $AllTags$AllBlockTags;
        static TREE_ATTACHMENTS: $AllTags$AllBlockTags;
        static CASING: $AllTags$AllBlockTags;
        static MOVABLE_EMPTY_COLLIDER: $AllTags$AllBlockTags;
        static PLOUGH_WHITELIST: $AllTags$AllBlockTags;
        static FAN_PROCESSING_CATALYSTS_HAUNTING: $AllTags$AllBlockTags;
        static TABLE_CLOTHS: $AllTags$AllBlockTags;
        static FAN_TRANSPARENT: $AllTags$AllBlockTags;
        static TRACKS: $AllTags$AllBlockTags;
        static FALLBACK_MOUNTED_STORAGE_BLACKLIST: $AllTags$AllBlockTags;
        static TOOLBOXES: $AllTags$AllBlockTags;
        static ANDESITE_ALLOY_STORAGE_BLOCKS: $AllTags$AllBlockTags;
        static CORALS: $AllTags$AllBlockTags;
    }
    /**
     * Values that may be interpreted as {@link $AllTags$AllBlockTags}.
     */
    export type $AllTags$AllBlockTags_ = "brittle" | "casing" | "copycat_allow" | "copycat_deny" | "fan_processing_catalysts_blasting" | "fan_processing_catalysts_haunting" | "fan_processing_catalysts_smoking" | "fan_processing_catalysts_splashing" | "fan_transparent" | "girdable_tracks" | "movable_empty_collider" | "non_movable" | "non_breakable" | "passive_boiler_heaters" | "safe_nbt" | "seats" | "postboxes" | "table_cloths" | "toolboxes" | "tracks" | "tree_attachments" | "valve_handles" | "windmill_sails" | "wrench_pickup" | "chest_mounted_storage" | "simple_mounted_storage" | "fallback_mounted_storage_blacklist" | "roots" | "sugar_cane_variants" | "non_harvestable" | "single_block_inventories" | "plough_whitelist" | "plough_blacklist" | "cardboard_storage_blocks" | "andesite_alloy_storage_blocks" | "corals" | "slimy_logs" | "non_double_door";
    export class $AllTags$AllRecipeSerializerTags extends $Enum<$AllTags$AllRecipeSerializerTags> {
        static values(): $AllTags$AllRecipeSerializerTags[];
        static valueOf(arg0: string): $AllTags$AllRecipeSerializerTags;
        matches(arg0: $RecipeSerializer_<never>): boolean;
        static AUTOMATION_IGNORE: $AllTags$AllRecipeSerializerTags;
        tag: $TagKey<$RecipeSerializer<never>>;
    }
    /**
     * Values that may be interpreted as {@link $AllTags$AllRecipeSerializerTags}.
     */
    export type $AllTags$AllRecipeSerializerTags_ = "automation_ignore";
    export class $AllCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $AllCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering}.
     */
    export type $AllCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering_ = { anchor?: $Item_, type?: $AllCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering$Type_, item?: $Item_,  } | [anchor?: $Item_, type?: $AllCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering$Type_, item?: $Item_, ];
    export class $AllInteractionBehaviours {
        constructor();
    }
    export class $AllShapes {
        static TRACK_CROSS_DIAG_ORTHO: $VoxelShaper;
        static SCHEMATICS_TABLE: $VoxelShaper;
        static ELEVATOR_PULLEY: $VoxelShaper;
        static PLACARD: $VoxelShaper;
        static TABLE_CLOTH_OCCLUSION: $VoxelShape;
        static MOTOR_BLOCK: $VoxelShaper;
        static PACKAGE_PORT: $VoxelShape;
        static TABLE_CLOTH: $VoxelShape;
        static CUCKOO_CLOCK: $VoxelShape;
        static SPOUT: $VoxelShape;
        static CASING_2PX: $VoxelShaper;
        static CONTENT_OBSERVER: $VoxelShaper;
        static SMALL_GEAR: $VoxelShaper;
        static GIRDER_BEAM_SHAFT: $VoxelShaper;
        static WHISTLE_EXTENDER_LARGE_DOUBLE: $VoxelShape;
        static PORTABLE_STORAGE_INTERFACE: $VoxelShaper;
        static WHISTLE_EXTENDER_MEDIUM: $VoxelShape;
        static STEAM_ENGINE: $VoxelShaper;
        static HEATER_BLOCK_SHAPE: $VoxelShape;
        static FUNNEL_COLLISION: $VoxelShaper;
        static BELT_FUNNEL_EXTENDED: $VoxelShaper;
        static FACTORY_PANEL_FALLBACK: $VoxelShaper;
        static CRUSHING_WHEEL_COLLISION_SHAPE: $VoxelShape;
        static SMART_FLUID_PIPE_WALL: $VoxelShaper;
        static WHISTLE_EXTENDER_LARGE_DOUBLE_CONNECTED: $VoxelShape;
        static BELL_FLOOR: $VoxelShaper;
        static MECHANICAL_PISTON_EXTENDED: $VoxelShaper;
        static SEAT: $VoxelShape;
        static DEPLOYER_INTERACTION: $VoxelShaper;
        static BELL_CEILING: $VoxelShaper;
        static MILLSTONE: $VoxelShape;
        static BELL_DOUBLE_WALL: $VoxelShaper;
        static GAUGE_SHAPE_UP: $VoxelShape;
        static HARVESTER_BASE: $VoxelShaper;
        static SCAFFOLD_FULL: $VoxelShape;
        static BASIN_BLOCK_SHAPE: $VoxelShape;
        static STEAM_ENGINE_WALL: $VoxelShaper;
        static DESK_BELL: $VoxelShaper;
        static GIRDER_CROSS: $VoxelShape;
        static CHUTE_SLOPE: $VoxelShaper;
        static FUNNEL_WALL: $VoxelShaper;
        static TANK_BOTTOM: $VoxelShape;
        static EIGHT_VOXEL_POLE: $VoxelShaper;
        static TRACK_DIAG: $VoxelShaper;
        static WHISTLE_MEDIUM_WALL: $VoxelShaper;
        static CRANK: $VoxelShaper;
        static NIXIE_TUBE: $VoxelShaper;
        static MECHANICAL_PROCESSOR_SHAPE: $VoxelShape;
        static CASING_13PX: $VoxelShaper;
        static BELT_FUNNEL_RETRACTED: $VoxelShaper;
        static SCHEMATICANNON_SHAPE: $VoxelShape;
        static BELT_COLLISION_MASK: $VoxelShape;
        static BELL_WALL: $VoxelShaper;
        static TABLE_POLE_SHAPE: $VoxelShape;
        static CASING_3PX: $VoxelShaper;
        static TRACK_CROSS: $VoxelShape;
        static PUMP: $VoxelShaper;
        static BACKTANK: $VoxelShape;
        static BASIN_COLLISION_SHAPE: $VoxelShape;
        static STOCKPILE_SWITCH: $VoxelShaper;
        static TRACK_CROSS_DIAG: $VoxelShape;
        static PULLEY_MAGNET: $VoxelShape;
        static TRACK_CROSS_ORTHO_DIAG: $VoxelShaper;
        static TEN_VOXEL_POLE: $VoxelShaper;
        static STEAM_ENGINE_CEILING: $VoxelShaper;
        static TRACK_COLLISION: $VoxelShape;
        static WHISTLE_LARGE_WALL: $VoxelShaper;
        static FLAP_DISPLAY: $VoxelShaper;
        static TRACK_ORTHO_LONG: $VoxelShaper;
        static LOGISTICAL_CONTROLLER: $VoxelShaper;
        static BELT_FUNNEL_PERPENDICULAR: $VoxelShaper;
        static SPEED_CONTROLLER: $VoxelShape;
        static STEP_BOTTOM: $VoxelShaper;
        static HEATER_BLOCK_SPECIAL_COLLISION_SHAPE: $VoxelShape;
        static SEAT_COLLISION: $VoxelShape;
        static NOZZLE: $VoxelShaper;
        static SEAT_COLLISION_PLAYERS: $VoxelShape;
        static CRATE_BLOCK_SHAPE: $VoxelShape;
        static STOCK_TICKER: $VoxelShape;
        static MECHANICAL_PISTON: $VoxelShaper;
        static CLIPBOARD_FLOOR: $VoxelShaper;
        static TRACK_ORTHO: $VoxelShaper;
        static FOUR_VOXEL_POLE: $VoxelShaper;
        static ROLLER_BASE: $VoxelShaper;
        static CONTROLS: $VoxelShaper;
        static CLIPBOARD_CEILING: $VoxelShaper;
        static LARGE_GEAR: $VoxelShaper;
        static POSTBOX: $VoxelShaper;
        static SAIL_FRAME_COLLISION: $VoxelShaper;
        static ITEM_HATCH: $VoxelShaper;
        static CASING_12PX: $VoxelShaper;
        static CHAIN_CONVEYOR_INTERACTION: $VoxelShape;
        static GIRDER_BEAM: $VoxelShaper;
        static CONTRAPTION_CONTROLS_COLLISION: $VoxelShaper;
        static CLIPBOARD_WALL: $VoxelShaper;
        static WHISTLE_EXTENDER_MEDIUM_DOUBLE_CONNECTED: $VoxelShape;
        static DATA_GATHERER: $VoxelShaper;
        static CONTROLS_COLLISION: $VoxelShaper;
        static TRACK_ASC: $VoxelShaper;
        static VALVE_HANDLE: $VoxelShaper;
        static MECHANICAL_ARM_CEILING: $VoxelShape;
        static WHISTLE_BASE: $VoxelShaper;
        static WHISTLE_EXTENDER_MEDIUM_DOUBLE: $VoxelShape;
        static STEP_TOP: $VoxelShaper;
        static TANK_TOP_BOTTOM: $VoxelShape;
        static SAIL_FRAME: $VoxelShaper;
        static STATION: $VoxelShape;
        static SMART_FLUID_PIPE_FLOOR: $VoxelShaper;
        static LOGISTICS_TABLE: $VoxelShaper;
        static WHISTLE_SMALL_FLOOR: $VoxelShape;
        static SMART_FLUID_PIPE_CEILING: $VoxelShaper;
        static WHISTLE_EXTENDER_SMALL_DOUBLE: $VoxelShape;
        static WHISTLE_MEDIUM_FLOOR: $VoxelShape;
        static CASING_11PX: $VoxelShaper;
        static FURNACE_ENGINE: $VoxelShaper;
        static MECHANICAL_ARM: $VoxelShape;
        static FUNNEL_FLOOR: $VoxelShape;
        static WHISTLE_EXTENDER_SMALL_DOUBLE_CONNECTED: $VoxelShape;
        static TOOLBOX: $VoxelShaper;
        static CART_ASSEMBLER: $VoxelShaper;
        static SIX_VOXEL_POLE: $VoxelShaper;
        static TANK: $VoxelShape;
        static SCAFFOLD_HALF: $VoxelShape;
        static WHISTLE_SMALL_WALL: $VoxelShaper;
        static CHUTE: $VoxelShape;
        static TRACK_FALLBACK: $VoxelShape;
        static TURNTABLE_SHAPE: $VoxelShape;
        static SAIL: $VoxelShaper;
        static NIXIE_TUBE_CEILING: $VoxelShaper;
        static NIXIE_TUBE_WALL: $VoxelShaper;
        static WHISTLE_EXTENDER_LARGE: $VoxelShape;
        static FUNNEL_CEILING: $VoxelShape;
        static REDSTONE_BRIDGE: $VoxelShaper;
        static TANK_TOP: $VoxelShape;
        static CART_ASSEMBLER_PLAYER_COLLISION: $VoxelShaper;
        static CONTRAPTION_CONTROLS: $VoxelShaper;
        static BASIN_RAYTRACE_SHAPE: $VoxelShape;
        static WHISTLE_EXTENDER_SMALL: $VoxelShape;
        static WHISTLE_LARGE_FLOOR: $VoxelShape;
        static CRUSHING_WHEEL_CONTROLLER_COLLISION: $VoxelShaper;
        static FLUID_VALVE: $VoxelShaper;
        static MECHANICAL_PISTON_HEAD: $VoxelShaper;
        static CASING_14PX: $VoxelShaper;
        static STOCK_LINK: $VoxelShaper;
        constructor();
    }
    export class $AllBlockEntityTypes implements $RedstoneContactBlockEntityTypeGetter {
        sable$getRedstoneContactType(): $BlockEntityEntry<any>;
        static register(): void;
        static ELEVATOR_PULLEY: $BlockEntityEntry<$ElevatorPulleyBlockEntity>;
        static PLACARD: $BlockEntityEntry<$PlacardBlockEntity>;
        static CUCKOO_CLOCK: $BlockEntityEntry<$CuckooClockBlockEntity>;
        static TABLE_CLOTH: $BlockEntityEntry<$TableClothBlockEntity>;
        static LARGE_WATER_WHEEL: $BlockEntityEntry<$LargeWaterWheelBlockEntity>;
        static SPOUT: $BlockEntityEntry<$SpoutBlockEntity>;
        static BOGEY: $BlockEntityEntry<$StandardBogeyBlockEntity>;
        static THRESHOLD_SWITCH: $BlockEntityEntry<$ThresholdSwitchBlockEntity>;
        static PULSE_REPEATER: $BlockEntityEntry<$PulseRepeaterBlockEntity>;
        static PORTABLE_STORAGE_INTERFACE: $BlockEntityEntry<$PortableItemInterfaceBlockEntity>;
        static BELT: $BlockEntityEntry<$BeltBlockEntity>;
        static STEAM_ENGINE: $BlockEntityEntry<$SteamEngineBlockEntity>;
        static FLUID_PIPE: $BlockEntityEntry<$FluidPipeBlockEntity>;
        static ADJUSTABLE_CHAIN_GEARSHIFT: $BlockEntityEntry<$ChainGearshiftBlockEntity>;
        static MILLSTONE: $BlockEntityEntry<$MillstoneBlockEntity>;
        static BRASS_TUNNEL: $BlockEntityEntry<$BrassTunnelBlockEntity>;
        static CREATIVE_CRATE: $BlockEntityEntry<$CreativeCrateBlockEntity>;
        static ENCASED_LARGE_COGWHEEL: $BlockEntityEntry<$SimpleKineticBlockEntity>;
        static BRACKETED_KINETIC: $BlockEntityEntry<$BracketedKineticBlockEntity>;
        static MECHANICAL_PRESS: $BlockEntityEntry<$MechanicalPressBlockEntity>;
        static DESK_BELL: $BlockEntityEntry<$DeskBellBlockEntity>;
        static SMART_OBSERVER: $BlockEntityEntry<$SmartObserverBlockEntity>;
        static MOTOR: $BlockEntityEntry<$CreativeMotorBlockEntity>;
        static NIXIE_TUBE: $BlockEntityEntry<$NixieTubeBlockEntity>;
        static WEIGHTED_EJECTOR: $BlockEntityEntry<$EjectorBlockEntity>;
        static SCHEMATIC_TABLE: $BlockEntityEntry<$SchematicTableBlockEntity>;
        static STICKER: $BlockEntityEntry<$StickerBlockEntity>;
        static REPACKAGER: $BlockEntityEntry<$RepackagerBlockEntity>;
        static STRESSOMETER: $BlockEntityEntry<$StressGaugeBlockEntity>;
        static POWERED_SHAFT: $BlockEntityEntry<$PoweredShaftBlockEntity>;
        static REDSTONE_REQUESTER: $BlockEntityEntry<$RedstoneRequesterBlockEntity>;
        static SLIDING_DOOR: $BlockEntityEntry<$SlidingDoorBlockEntity>;
        static CHAIN_CONVEYOR: $BlockEntityEntry<$ChainConveyorBlockEntity>;
        static PULSE_EXTENDER: $BlockEntityEntry<$PulseExtenderBlockEntity>;
        static BACKTANK: $BlockEntityEntry<$BacktankBlockEntity>;
        static DISPLAY_LINK: $BlockEntityEntry<$DisplayLinkBlockEntity>;
        static HEATER: $BlockEntityEntry<$BlazeBurnerBlockEntity>;
        static MECHANICAL_BEARING: $BlockEntityEntry<$MechanicalBearingBlockEntity>;
        static STEAM_WHISTLE: $BlockEntityEntry<$WhistleBlockEntity>;
        static FLAP_DISPLAY: $BlockEntityEntry<$FlapDisplayBlockEntity>;
        static TRACK_OBSERVER: $BlockEntityEntry<$TrackObserverBlockEntity>;
        static DEPLOYER: $BlockEntityEntry<$DeployerBlockEntity>;
        static ROPE_PULLEY: $BlockEntityEntry<$PulleyBlockEntity>;
        static FLUID_TANK: $BlockEntityEntry<$FluidTankBlockEntity>;
        static MECHANICAL_ROLLER: $BlockEntityEntry<$RollerBlockEntity>;
        static NOZZLE: $BlockEntityEntry<$NozzleBlockEntity>;
        static HARVESTER: $BlockEntityEntry<$HarvesterBlockEntity>;
        static STOCK_TICKER: $BlockEntityEntry<$StockTickerBlockEntity>;
        static MECHANICAL_PISTON: $BlockEntityEntry<$MechanicalPistonBlockEntity>;
        static LECTERN_CONTROLLER: $BlockEntityEntry<$LecternControllerBlockEntity>;
        static TRACK_SIGNAL: $BlockEntityEntry<$SignalBlockEntity>;
        static CRUSHING_WHEEL_CONTROLLER: $BlockEntityEntry<$CrushingWheelControllerBlockEntity>;
        static REDSTONE_LINK: $BlockEntityEntry<$RedstoneLinkBlockEntity>;
        static ITEM_HATCH: $BlockEntityEntry<$ItemHatchBlockEntity>;
        static FLYWHEEL: $BlockEntityEntry<$FlywheelBlockEntity>;
        static COPYCAT: $BlockEntityEntry<$CopycatBlockEntity>;
        static FACTORY_PANEL: $BlockEntityEntry<$FactoryPanelBlockEntity>;
        static TRACK_STATION: $BlockEntityEntry<$StationBlockEntity>;
        static CLUTCH: $BlockEntityEntry<$ClutchBlockEntity>;
        static SCHEMATICANNON: $BlockEntityEntry<$SchematicannonBlockEntity>;
        static MECHANICAL_PUMP: $BlockEntityEntry<$PumpBlockEntity>;
        static PACKAGER: $BlockEntityEntry<$PackagerBlockEntity>;
        static SMART_FLUID_PIPE: $BlockEntityEntry<$SmartFluidPipeBlockEntity>;
        static CRUSHING_WHEEL: $BlockEntityEntry<$CrushingWheelBlockEntity>;
        static CREATIVE_FLUID_TANK: $BlockEntityEntry<$CreativeFluidTankBlockEntity>;
        static VALVE_HANDLE: $BlockEntityEntry<$ValveHandleBlockEntity>;
        static FAKE_TRACK: $BlockEntityEntry<$FakeTrackBlockEntity>;
        static TURNTABLE: $BlockEntityEntry<$TurntableBlockEntity>;
        static CLOCKWORK_BEARING: $BlockEntityEntry<$ClockworkBearingBlockEntity>;
        static HAND_CRANK: $BlockEntityEntry<$HandCrankBlockEntity>;
        static GANTRY_PINION: $BlockEntityEntry<$GantryCarriageBlockEntity>;
        static ELEVATOR_CONTACT: $BlockEntityEntry<$ElevatorContactBlockEntity>;
        static GANTRY_SHAFT: $BlockEntityEntry<$GantryShaftBlockEntity>;
        static ITEM_VAULT: $BlockEntityEntry<$ItemVaultBlockEntity>;
        static MECHANICAL_CRAFTER: $BlockEntityEntry<$MechanicalCrafterBlockEntity>;
        static ENCASED_FLUID_PIPE: $BlockEntityEntry<$FluidPipeBlockEntity>;
        static WATER_WHEEL: $BlockEntityEntry<$WaterWheelBlockEntity>;
        static HAUNTED_BELL: $BlockEntityEntry<$HauntedBellBlockEntity>;
        static HOSE_PULLEY: $BlockEntityEntry<$HosePulleyBlockEntity>;
        static PECULIAR_BELL: $BlockEntityEntry<$PeculiarBellBlockEntity>;
        static MECHANICAL_ARM: $BlockEntityEntry<$ArmBlockEntity>;
        static PACKAGE_FROGPORT: $BlockEntityEntry<$FrogportBlockEntity>;
        static TOOLBOX: $BlockEntityEntry<$ToolboxBlockEntity>;
        static CART_ASSEMBLER: $BlockEntityEntry<$CartAssemblerBlockEntity>;
        static CLIPBOARD: $BlockEntityEntry<$ClipboardBlockEntity>;
        static PULSE_TIMER: $BlockEntityEntry<$PulseTimerBlockEntity>;
        static SAW: $BlockEntityEntry<$SawBlockEntity>;
        static DEPOT: $BlockEntityEntry<$DepotBlockEntity>;
        static PACKAGE_POSTBOX: $BlockEntityEntry<$PostboxBlockEntity>;
        static CHUTE: $BlockEntityEntry<$ChuteBlockEntity>;
        static ROTATION_SPEED_CONTROLLER: $BlockEntityEntry<$SpeedControllerBlockEntity>;
        static ENCASED_FAN: $BlockEntityEntry<$EncasedFanBlockEntity>;
        static MECHANICAL_MIXER: $BlockEntityEntry<$MechanicalMixerBlockEntity>;
        static ANALOG_LEVER: $BlockEntityEntry<$AnalogLeverBlockEntity>;
        static BASIN: $BlockEntityEntry<$BasinBlockEntity>;
        static ENCASED_COGWHEEL: $BlockEntityEntry<$SimpleKineticBlockEntity>;
        static SMART_CHUTE: $BlockEntityEntry<$SmartChuteBlockEntity>;
        static WINDMILL_BEARING: $BlockEntityEntry<$WindmillBearingBlockEntity>;
        static CHASSIS: $BlockEntityEntry<$ChassisBlockEntity>;
        static DRILL: $BlockEntityEntry<$DrillBlockEntity>;
        static CONTRAPTION_CONTROLS: $BlockEntityEntry<$ContraptionControlsBlockEntity>;
        static ENCASED_SHAFT: $BlockEntityEntry<$KineticBlockEntity>;
        static TRACK: $BlockEntityEntry<$TrackBlockEntity>;
        static GEARBOX: $BlockEntityEntry<$GearboxBlockEntity>;
        static SPEEDOMETER: $BlockEntityEntry<$SpeedGaugeBlockEntity>;
        static GEARSHIFT: $BlockEntityEntry<$GearshiftBlockEntity>;
        static GLASS_FLUID_PIPE: $BlockEntityEntry<$StraightPipeBlockEntity>;
        static FUNNEL: $BlockEntityEntry<$FunnelBlockEntity>;
        static PACKAGER_LINK: $BlockEntityEntry<$PackagerLinkBlockEntity>;
        static SEQUENCED_GEARSHIFT: $BlockEntityEntry<$SequencedGearshiftBlockEntity>;
        static FLUID_VALVE: $BlockEntityEntry<$FluidValveBlockEntity>;
        static ITEM_DRAIN: $BlockEntityEntry<$ItemDrainBlockEntity>;
        static ANDESITE_TUNNEL: $BlockEntityEntry<$BeltTunnelBlockEntity>;
        static PORTABLE_FLUID_INTERFACE: $BlockEntityEntry<$PortableFluidInterfaceBlockEntity>;
        constructor();
    }
    export class $AllEntityDataSerializers {
        static register(arg0: $IEventBus): void;
        static CARRIAGE_DATA: $CarriageSyncDataSerializer;
        static CARRIAGE_DATA_ENTRY: $DeferredHolder<$EntityDataSerializer<never>, $CarriageSyncDataSerializer>;
        constructor();
    }
    export class $AllSchematicStateFilters {
        static registerDefaults(): void;
        constructor();
    }
    export class $AllContraptionTypes {
        static init(): void;
        static CARRIAGE: $Holder$Reference<$ContraptionType>;
        static CLOCKWORK: $Holder$Reference<$ContraptionType>;
        static BY_LEGACY_NAME: $Map<string, $ContraptionType>;
        static PISTON: $Holder$Reference<$ContraptionType>;
        static GANTRY: $Holder$Reference<$ContraptionType>;
        static MOUNTED: $Holder$Reference<$ContraptionType>;
        static BEARING: $Holder$Reference<$ContraptionType>;
        static STABILIZED: $Holder$Reference<$ContraptionType>;
        static PULLEY: $Holder$Reference<$ContraptionType>;
        static ELEVATOR: $Holder$Reference<$ContraptionType>;
        constructor();
    }
    export class $AllSoundEvents$SoundEntry {
        play(arg0: $Level_, arg1: $Player, arg2: $Vec3_, arg3: number, arg4: number): void;
        play(arg0: $Level_, arg1: $Player, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        play(arg0: $Level_, arg1: $Player, arg2: $Vec3i): void;
        play(arg0: $Level_, arg1: $Player, arg2: $Vec3i, arg3: number, arg4: number): void;
        playOnServer(arg0: $Level_, arg1: $Vec3i, arg2: number, arg3: number): void;
        playOnServer(arg0: $Level_, arg1: $Vec3i): void;
        playFrom(arg0: $Entity, arg1: number, arg2: number): void;
        playFrom(arg0: $Entity): void;
        playAt(arg0: $Level_, arg1: $Vec3_, arg2: number, arg3: number, arg4: boolean): void;
        playAt(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        playAt(arg0: $Level_, arg1: $Vec3i, arg2: number, arg3: number, arg4: boolean): void;
        getMainEventHolder(): $Holder<$SoundEvent>;
        hasSubtitle(): boolean;
        getSubtitleKey(): string;
        getSubtitle(): string;
        getMainEvent(): $SoundEvent;
        register(arg0: $RegisterEvent$RegisterHelper_<$SoundEvent>): void;
        write(arg0: $JsonObject_): void;
        getId(): $ResourceLocation;
        prepare(): void;
        constructor(arg0: $ResourceLocation_, arg1: string, arg2: $SoundSource_, arg3: number);
        get mainEventHolder(): $Holder<$SoundEvent>;
        get subtitleKey(): string;
        get subtitle(): string;
        get mainEvent(): $SoundEvent;
        get id(): $ResourceLocation;
    }
    export class $AllMapDecorationTypes {
        static register(arg0: $IEventBus): void;
        static STATION_MAP_DECORATION: $Holder<$MapDecorationType>;
        constructor();
    }
    export class $AllBlockSpoutingBehaviours {
        constructor();
    }
    export class $AllAttachmentTypes {
        static register(arg0: $IEventBus): void;
        static MINECART_CONTROLLER: $Supplier<$AttachmentType<$MinecartController>>;
        constructor();
    }
    export class $AllFluids {
        static registerFluidInteractions(): void;
        static getLavaInteraction(arg0: $FluidState): $BlockState;
        static register(): void;
        static HONEY: $FluidEntry<$BaseFlowingFluid$Flowing>;
        static TEA: $FluidEntry<$VirtualFluid>;
        static POTION: $FluidEntry<$PotionFluid>;
        static CHOCOLATE: $FluidEntry<$BaseFlowingFluid$Flowing>;
        constructor();
    }
    export class $AllTags$AllFluidTags extends $Enum<$AllTags$AllFluidTags> {
        static values(): $AllTags$AllFluidTags[];
        static valueOf(arg0: string): $AllTags$AllFluidTags;
        matches(arg0: $Fluid_): boolean;
        matches(arg0: $FluidState): boolean;
        static FAN_PROCESSING_CATALYSTS_SPLASHING: $AllTags$AllFluidTags;
        static FAN_PROCESSING_CATALYSTS_BLASTING: $AllTags$AllFluidTags;
        static TEA: $AllTags$AllFluidTags;
        static FAN_PROCESSING_CATALYSTS_SMOKING: $AllTags$AllFluidTags;
        static BOTTOMLESS_ALLOW: $AllTags$AllFluidTags;
        static CHOCOLATE: $AllTags$AllFluidTags;
        static CREOSOTE: $AllTags$AllFluidTags;
        tag: $TagKey<$Fluid>;
        static BOTTOMLESS_DENY: $AllTags$AllFluidTags;
        static FAN_PROCESSING_CATALYSTS_HAUNTING: $AllTags$AllFluidTags;
    }
    /**
     * Values that may be interpreted as {@link $AllTags$AllFluidTags}.
     */
    export type $AllTags$AllFluidTags_ = "bottomless_allow" | "bottomless_deny" | "fan_processing_catalysts_blasting" | "fan_processing_catalysts_haunting" | "fan_processing_catalysts_smoking" | "fan_processing_catalysts_splashing" | "tea" | "chocolate" | "creosote";
    export class $AllSoundEvents$WrappedSoundEntry extends $AllSoundEvents$SoundEntry {
    }
    export class $AllSpecialTextures extends $Enum<$AllSpecialTextures> implements $BindableTexture {
        static values(): $AllSpecialTextures[];
        static valueOf(arg0: string): $AllSpecialTextures;
        getLocation(): $ResourceLocation;
        bind(): void;
        static CUTOUT_CHECKERED: $AllSpecialTextures;
        static GLUE: $AllSpecialTextures;
        static CHECKERED: $AllSpecialTextures;
        static THIN_CHECKERED: $AllSpecialTextures;
        static ASSET_PATH: string;
        static SELECTION: $AllSpecialTextures;
        static HIGHLIGHT_CHECKERED: $AllSpecialTextures;
        get location(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $AllSpecialTextures}.
     */
    export type $AllSpecialTextures_ = "checkered" | "thin_checkered" | "cutout_checkered" | "highlight_checkered" | "selection" | "glue";
    export class $AllMountedDispenseItemBehaviors {
        static registerDefaults(): void;
        constructor();
    }
    export class $AllRecipeTypes extends $Enum<$AllRecipeTypes> implements $IRecipeTypeInfo, $StringRepresentable {
        getSerializer<T extends $RecipeSerializer<never>>(): T;
        static shouldIgnoreInAutomation(arg0: $RecipeHolder_<never>): boolean;
        static values(): $AllRecipeTypes[];
        static valueOf(arg0: string): $AllRecipeTypes;
        static register(arg0: $IEventBus): void;
        find<I extends $RecipeInput, R extends $Recipe<I>>(arg0: I, arg1: $Level_): ($RecipeHolder<R>) | undefined;
        getId(): $ResourceLocation;
        getType<I extends $RecipeInput, R extends $Recipe<I>>(): $RecipeType<R>;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static MILLING: $AllRecipeTypes;
        static MECHANICAL_CRAFTING: $AllRecipeTypes;
        static CAN_BE_AUTOMATED: $Predicate<$RecipeHolder<never>>;
        static CODEC: $Codec<$AllRecipeTypes>;
        static CUTTING: $AllRecipeTypes;
        static SANDPAPER_POLISHING: $AllRecipeTypes;
        static CONVERSION: $AllRecipeTypes;
        static ITEM_COPYING: $AllRecipeTypes;
        static FILLING: $AllRecipeTypes;
        static HAUNTING: $AllRecipeTypes;
        static EMPTYING: $AllRecipeTypes;
        static CRUSHING: $AllRecipeTypes;
        serializerSupplier: $Supplier<$RecipeSerializer<never>>;
        static PRESSING: $AllRecipeTypes;
        static ITEM_APPLICATION: $AllRecipeTypes;
        static MIXING: $AllRecipeTypes;
        static SEQUENCED_ASSEMBLY: $AllRecipeTypes;
        static BASIN: $AllRecipeTypes;
        static COMPACTING: $AllRecipeTypes;
        id: $ResourceLocation;
        static SPLASHING: $AllRecipeTypes;
        static DEPLOYING: $AllRecipeTypes;
        static TOOLBOX_DYEING: $AllRecipeTypes;
        get serializer(): T;
        get type(): $RecipeType<R>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $AllRecipeTypes}.
     */
    export type $AllRecipeTypes_ = "create:conversion" | "create:crushing" | "create:cutting" | "create:milling" | "create:basin" | "create:mixing" | "create:compacting" | "create:pressing" | "create:sandpaper_polishing" | "create:splashing" | "create:haunting" | "create:deploying" | "create:filling" | "create:emptying" | "create:item_application" | "create:mechanical_crafting" | "create:sequenced_assembly" | "create:toolbox_dyeing" | "create:item_copying";
    export class $AllParticleTypes extends $Enum<$AllParticleTypes> {
        get(): $ParticleType<never>;
        static values(): $AllParticleTypes[];
        static valueOf(arg0: string): $AllParticleTypes;
        static register(arg0: $IEventBus): void;
        parameter(): string;
        static registerFactories(arg0: $RegisterParticleProvidersEvent): void;
        static BASIN_FLUID: $AllParticleTypes;
        static AIR: $AllParticleTypes;
        static CUBE: $AllParticleTypes;
        static SOUL_PERIMETER: $AllParticleTypes;
        static SOUL_EXPANDING_PERIMETER: $AllParticleTypes;
        static ROTATION_INDICATOR: $AllParticleTypes;
        static SOUL: $AllParticleTypes;
        static SOUL_BASE: $AllParticleTypes;
        static FLUID_PARTICLE: $AllParticleTypes;
        static WIFI: $AllParticleTypes;
        static AIR_FLOW: $AllParticleTypes;
        static STEAM_JET: $AllParticleTypes;
        static FLUID_DRIP: $AllParticleTypes;
    }
    /**
     * Values that may be interpreted as {@link $AllParticleTypes}.
     */
    export type $AllParticleTypes_ = "rotation_indicator" | "air_flow" | "air" | "steam_jet" | "cube" | "fluid_particle" | "basin_fluid" | "fluid_drip" | "wifi" | "soul" | "soul_base" | "soul_perimeter" | "soul_expanding_perimeter";
    export class $CreateClient {
        static clientInit(arg0: $FMLClientSetupEvent): void;
        static onCtorClient(arg0: $IEventBus): void;
        static invalidateRenderers(): void;
        static checkGraphicsFanciness(): void;
        static SCHEMATIC_SENDER: $ClientSchematicLoader;
        static POTATO_CANNON_RENDER_HANDLER: $PotatoCannonRenderHandler;
        static SOUL_PULSE_EFFECT_HANDLER: $SoulPulseEffectHandler;
        static SCHEMATIC_HANDLER: $SchematicHandler;
        static GLUE_HANDLER: $SuperGlueSelectionHandler;
        static CASING_CONNECTIVITY: $CasingConnectivity;
        static ZAPPER_RENDER_HANDLER: $ZapperRenderHandler;
        static VALUE_SETTINGS_HANDLER: $ValueSettingsClient;
        static SCHEMATIC_AND_QUILL_HANDLER: $SchematicAndQuillHandler;
        static RAILWAYS: $GlobalRailwayManager;
        static MODEL_SWAPPER: $ModelSwapper;
        static RESOURCE_RELOAD_LISTENER: $ClientResourceReloadListener;
        constructor(arg0: $IEventBus);
    }
    export class $AllKeys extends $Enum<$AllKeys> {
        static altDown(): boolean;
        static isMouseButtonDown(arg0: number): boolean;
        doesModifierAndCodeMatch(arg0: number): boolean;
        static ctrlDown(): boolean;
        isPressed(): boolean;
        getBoundKey(): string;
        static shiftDown(): boolean;
        static provideLang(arg0: $BiConsumer_<string, string>): void;
        getKeybind(): $KeyMapping;
        static values(): $AllKeys[];
        static valueOf(arg0: string): $AllKeys;
        static register(arg0: $RegisterKeyMappingsEvent): void;
        static isKeyDown(arg0: number): boolean;
        static ACTIVATE_TOOL: $AllKeys;
        static SHIFT_MODIFIER: $AllKeys;
        static CTRL_MODIFIER: $AllKeys;
        static ROTATE_MENU: $AllKeys;
        static TOOLBELT: $AllKeys;
        static ALT_MODIFIER: $AllKeys;
        static TOOL_MENU: $AllKeys;
        get pressed(): boolean;
        get boundKey(): string;
        get keybind(): $KeyMapping;
    }
    /**
     * Values that may be interpreted as {@link $AllKeys}.
     */
    export type $AllKeys_ = "tool_menu" | "activate_tool" | "toolbelt" | "rotate_menu" | "shift_modifier" | "ctrl_modifier" | "alt_modifier";
    export class $AllDamageTypes {
        static bootstrap(arg0: $BootstrapContext<$DamageType_>): void;
        static ROLLER: $ResourceKey<$DamageType>;
        static FAN_LAVA: $ResourceKey<$DamageType>;
        static RUN_OVER: $ResourceKey<$DamageType>;
        static POTATO_CANNON: $ResourceKey<$DamageType>;
        static SAW: $ResourceKey<$DamageType>;
        static CUCKOO_SURPRISE: $ResourceKey<$DamageType>;
        static CRUSH: $ResourceKey<$DamageType>;
        static FAN_FIRE: $ResourceKey<$DamageType>;
        static DRILL: $ResourceKey<$DamageType>;
        constructor();
    }
    export class $AllBogeyStyles {
        static getCycleGroup(arg0: $ResourceLocation_): $Map<$ResourceLocation, $BogeyStyle>;
        static init(): void;
        static STANDARD_CYCLE_GROUP: $ResourceLocation;
        static CYCLE_GROUPS: $Map<$ResourceLocation, $Map<$ResourceLocation, $BogeyStyle>>;
        static BOGEY_STYLES: $Map<$ResourceLocation, $BogeyStyle>;
        static STANDARD: $BogeyStyle;
        constructor();
    }
    export class $AllFluids$TintedFluidType extends $FluidType {
        static SIZE: $Lazy<number>;
        static BUCKET_VOLUME: number;
        constructor(arg0: $FluidType$Properties, arg1: $ResourceLocation_, arg2: $ResourceLocation_);
    }
    export class $AllTags$AllContraptionTypeTags extends $Enum<$AllTags$AllContraptionTypeTags> {
        static values(): $AllTags$AllContraptionTypeTags[];
        static valueOf(arg0: string): $AllTags$AllContraptionTypeTags;
        matches(arg0: $ContraptionType_): boolean;
        static REQUIRES_VEHICLE_FOR_RENDER: $AllTags$AllContraptionTypeTags;
        tag: $TagKey<$ContraptionType>;
        static OPENS_CONTROLS: $AllTags$AllContraptionTypeTags;
    }
    /**
     * Values that may be interpreted as {@link $AllTags$AllContraptionTypeTags}.
     */
    export type $AllTags$AllContraptionTypeTags_ = "opens_controls" | "requires_vehicle_for_render";
    export class $AllPackets extends $Enum<$AllPackets> implements $BasePacketPayload$PacketTypeProvider {
        static values(): $AllPackets[];
        static valueOf(arg0: string): $AllPackets;
        static register(): void;
        getType<T extends $CustomPacketPayload>(): $CustomPacketPayload$Type<T>;
        static PACKAGE_PORT_CONFIGURATION: $AllPackets;
        static STOCK_KEEPER_HIDE_CATEGORY: $AllPackets;
        static CLEAR_CONTAINER: $AllPackets;
        static REDSTONE_REQUESTER_EFFECT: $AllPackets;
        static CONTRAPTION_BLOCK_CHANGED: $AllPackets;
        static TRIGGER_EJECTOR: $AllPackets;
        static CONFIGURE_ELEVATOR_CONTACT: $AllPackets;
        static CONFIGURE_FACTORY_PANEL: $AllPackets;
        static TUNNEL_FLAP: $AllPackets;
        static LOCK_STOCK_KEEPER: $AllPackets;
        static CONTRAPTION_COLLIDER_LOCK: $AllPackets;
        static GLUE_EFFECT: $AllPackets;
        static PLACE_ARM: $AllPackets;
        static CHAIN_PACKAGE_INTERACTION: $AllPackets;
        static CONFIGURE_SEQUENCER: $AllPackets;
        static SYNC_SCHEMATIC: $AllPackets;
        static CONTRAPTION_SEAT_MAPPING: $AllPackets;
        static BEAM_EFFECT: $AllPackets;
        static FUNNEL_FLAP: $AllPackets;
        static SERVER_SPEED: $AllPackets;
        static CONFIGURE_DATA_GATHERER: $AllPackets;
        static LOGISTICS_PACKAGE_REQUEST: $AllPackets;
        static C_TRAIN_HUD: $AllPackets;
        static TRAIN_MAP_REQUEST: $AllPackets;
        static S_PLACE_PACKAGE_PORT: $AllPackets;
        static UPLOAD_SCHEMATIC: $AllPackets;
        static UPDATE_ELEVATOR_FLOORS: $AllPackets;
        static REMOVE_TRAIN: $AllPackets;
        static CONFIGURE_WORLDSHAPER: $AllPackets;
        static SYMMETRY_EFFECT: $AllPackets;
        static LINKED_CONTROLLER_BIND: $AllPackets;
        static SYNC_RAIL_GRAPH: $AllPackets;
        static LOGISTICS_STOCK_RESPONSE: $AllPackets;
        static CONTRAPTION_INTERACT: $AllPackets;
        static CONFIGURE_STATION: $AllPackets;
        static RADIAL_WRENCH_MENU_SUBMIT: $AllPackets;
        static FLUID_SPLASH: $AllPackets;
        static BLOCK_HIGHLIGHT: $AllPackets;
        static PACKAGE_DESTROYED: $AllPackets;
        static INSTANT_SCHEMATIC: $AllPackets;
        static GLUE_REMOVED: $AllPackets;
        static CLIPBOARD_EDIT: $AllPackets;
        static ATTACHED_COMPUTER: $AllPackets;
        static FACTORY_PANEL_EFFECT: $AllPackets;
        static TOOLBOX_EQUIP: $AllPackets;
        static C_CONFIGURE_TRAIN: $AllPackets;
        static CLIENTBOUND_CHAIN_CONVEYOR: $AllPackets;
        static MINECART_COUPLING_CREATION: $AllPackets;
        static BLUEPRINT_COMPLETE_RECIPE: $AllPackets;
        static S_TRAIN_HUD: $AllPackets;
        static ELEVATOR_SET_FLOOR: $AllPackets;
        static S_TRAIN_PROMPT: $AllPackets;
        static RELOCATE_TRAIN: $AllPackets;
        static CONFIGURE_FILTER: $AllPackets;
        static LEFT_CLICK: $AllPackets;
        static SHOP_UPDATE: $AllPackets;
        static CONTRAPTION_DISASSEMBLE: $AllPackets;
        static EJECTOR_AWARD: $AllPackets;
        static REMOVE_TE: $AllPackets;
        static CHAIN_CONVEYOR_CONNECT: $AllPackets;
        static PACKAGER_LINK_EFFECT: $AllPackets;
        static SERVER_DEBUG_INFO: $AllPackets;
        static TOOLBOX_DISPOSE_ALL: $AllPackets;
        static ADD_TRAIN: $AllPackets;
        static TRACK_GRAPH_ROLL_CALL: $AllPackets;
        static PLACE_CURVED_TRACK: $AllPackets;
        static SOUL_PULSE: $AllPackets;
        static VALUE_SETTINGS: $AllPackets;
        static S_PLACE_ARM: $AllPackets;
        static S_TRAIN_HONK: $AllPackets;
        static LINKED_CONTROLLER_USE_LECTERN: $AllPackets;
        static EXTENDO_INTERACT: $AllPackets;
        static SUBMIT_GHOST_ITEM: $AllPackets;
        static CONFIGURE_STOCKSWITCH: $AllPackets;
        static SYNC_EDGE_GROUP: $AllPackets;
        static PLACE_PACKAGE_PORT: $AllPackets;
        static S_CONFIGURE_TRAIN: $AllPackets;
        static CLIENT_MOTION: $AllPackets;
        static CONTRAPTION_ACTOR_TOGGLE: $AllPackets;
        static CHAIN_CONVEYOR_RIDING: $AllPackets;
        static S_PLACE_EJECTOR: $AllPackets;
        static EJECTOR_ELYTRA: $AllPackets;
        static PERSISTENT_DATA: $AllPackets;
        static CONFIGURE_SYMMETRY_WAND: $AllPackets;
        static CONFIGURE_REDSTONE_REQUESTER: $AllPackets;
        static PLACE_EJECTOR: $AllPackets;
        static CONFIGURE_STOCK_KEEPER_CATEGORIES: $AllPackets;
        static REQUEST_FLOOR_LIST: $AllPackets;
        static CONFIGURE_SCHEMATICANNON: $AllPackets;
        static DESTROY_CURVED_TRACK: $AllPackets;
        static GANTRY_UPDATE: $AllPackets;
        static KNOCKBACK: $AllPackets;
        static OBSERVER_STRESSOMETER: $AllPackets;
        static LOGISTICS_STOCK_REQUEST: $AllPackets;
        static MINECART_CONTROLLER: $AllPackets;
        static MOUNTED_STORAGE_SYNC: $AllPackets;
        static REFUND_STOCK_KEEPER_CATEGORY: $AllPackets;
        static C_TRAIN_HONK: $AllPackets;
        static CONTRAPTION_STALL: $AllPackets;
        static PLACE_SCHEMATIC: $AllPackets;
        static CONTROLS_ABORT: $AllPackets;
        static TRAIN_MAP_SYNC: $AllPackets;
        static CONFIGURE_SCHEDULE: $AllPackets;
        static SELECT_CURVED_TRACK: $AllPackets;
        static CONTROLS_INPUT: $AllPackets;
        static CONTRAPTION_RELOCATION: $AllPackets;
        static LIMBSWING_UPDATE: $AllPackets;
        static LINKED_CONTROLLER_INPUT: $AllPackets;
        static GLUE_IN_AREA: $AllPackets;
        static POTATO_CANNON: $AllPackets;
        static TRACK_GRAPH_REQUEST: $AllPackets;
        static TRAIN_COLLISION: $AllPackets;
        static CONNECT_FACTORY_PANEL: $AllPackets;
        static CONTRAPTION_COLLIDER_LOCK_REQUEST: $AllPackets;
        get type(): $CustomPacketPayload$Type<T>;
    }
    /**
     * Values that may be interpreted as {@link $AllPackets}.
     */
    export type $AllPackets_ = "configure_schematicannon" | "configure_stockswitch" | "configure_sequencer" | "place_schematic" | "upload_schematic" | "clear_container" | "configure_filter" | "extendo_interact" | "contraption_interact" | "client_motion" | "place_arm" | "place_package_port" | "minecart_coupling_creation" | "instant_schematic" | "sync_schematic" | "left_click" | "place_ejector" | "trigger_ejector" | "ejector_elytra" | "linked_controller_input" | "linked_controller_bind" | "linked_controller_use_lectern" | "submit_ghost_item" | "blueprint_complete_recipe" | "configure_symmetry_wand" | "configure_worldshaper" | "toolbox_equip" | "toolbox_dispose_all" | "configure_schedule" | "configure_station" | "c_configure_train" | "relocate_train" | "controls_input" | "configure_data_gatherer" | "destroy_curved_track" | "select_curved_track" | "place_curved_track" | "glue_in_area" | "glue_removed" | "train_collision" | "c_train_hud" | "c_train_honk" | "observer_stressometer" | "ejector_award" | "track_graph_request" | "configure_elevator_contact" | "request_floor_list" | "elevator_set_floor" | "value_settings" | "clipboard_edit" | "contraption_collider_lock_request" | "radial_wrench_menu_submit" | "logistics_stock_request" | "logistics_package_request" | "chain_conveyor_connect" | "chain_conveyor_riding" | "chain_package_interaction" | "package_port_configuration" | "train_map_request" | "connect_factory_panel" | "configure_factory_panel" | "configure_redstone_requester" | "configure_stock_keeper_categories" | "refund_stock_keeper_category" | "lock_stock_keeper" | "stock_keeper_hide_category" | "symmetry_effect" | "server_speed" | "beam_effect" | "contraption_stall" | "contraption_disassemble" | "contraption_block_changed" | "glue_effect" | "contraption_seat_mapping" | "limbswing_update" | "minecart_controller" | "fluid_splash" | "mounted_storage_sync" | "gantry_update" | "block_highlight" | "tunnel_flap" | "funnel_flap" | "potato_cannon" | "soul_pulse" | "persistent_data" | "sync_rail_graph" | "sync_edge_group" | "add_train" | "remove_train" | "remove_te" | "s_configure_train" | "controls_abort" | "s_train_hud" | "s_train_honk" | "s_train_prompt" | "contraption_relocation" | "track_graph_roll_call" | "s_place_arm" | "s_place_ejector" | "s_place_package_port" | "update_elevator_floors" | "contraption_actor_toggle" | "contraption_collider_lock" | "attached_computer" | "server_debug_info" | "package_destroyed" | "logistics_stock_response" | "factory_panel_effect" | "packager_link_effect" | "redstone_requester_effect" | "knockback" | "train_map_sync" | "clientbound_chain_conveyor" | "shop_update";
    export class $AllRecipeTypes$Registers {
    }
    export class $AllEnchantments {
        static bootstrap(arg0: $BootstrapContext<$Enchantment_>): void;
        static CAPACITY: $ResourceKey<$Enchantment>;
        static POTATO_RECOVERY: $ResourceKey<$Enchantment>;
        constructor();
    }
    export class $AllDataComponents {
        static register(arg0: $IEventBus): void;
        static SCHEMATIC_BOUNDS: $DataComponentType<$Vec3i>;
        static SHAPER_BRUSH: $DataComponentType<$TerrainBrushes>;
        static CLIPBOARD_CONTENT: $DataComponentType<$ClipboardContent>;
        /**
         * @deprecated
         */
        static CLIPBOARD_COPIED_VALUES: $DataComponentType<$CompoundTag>;
        static SCHEMATIC_ROTATION: $DataComponentType<$Rotation>;
        /**
         * @deprecated
         */
        static CLIPBOARD_PAGES: $DataComponentType<$List<$List<$ClipboardEntry>>>;
        /**
         * @deprecated
         */
        static CLIPBOARD_TYPE: $DataComponentType<$ClipboardOverrides$ClipboardType>;
        static TOOLBOX_UUID: $DataComponentType<$UUID>;
        static PACKAGE_ORDER_DATA: $DataComponentType<$PackageItem$PackageOrderData>;
        static SAND_PAPER_JEI: $DataComponentType<$Unit>;
        static POTION_FLUID_BOTTLE_TYPE: $DataComponentType<$PotionFluid$BottleType>;
        static SCHEMATIC_HASH: $DataComponentType<number>;
        static TRACK_TARGETING_ITEM_BEZIER: $DataComponentType<$BezierTrackPointLocation>;
        static SCHEMATIC_DEPLOYED: $DataComponentType<boolean>;
        static AUTO_REQUEST_DATA: $DataComponentType<$AutoRequestData>;
        static MINECRAFT_CONTRAPTION_DATA: $DataComponentType<$CompoundTag>;
        static SHOPPING_LIST: $DataComponentType<$ShoppingListItem$ShoppingList>;
        static SYMMETRY_WAND_SIMULATE: $DataComponentType<boolean>;
        static TRACK_EXTENDED_CURVE: $DataComponentType<boolean>;
        static SCHEMATIC_FILE: $DataComponentType<string>;
        static SHAPER_BRUSH_PARAMS: $DataComponentType<$BlockPos>;
        static SEQUENCED_ASSEMBLY: $DataComponentType<$SequencedAssemblyRecipe$SequencedAssembly>;
        static SHOPPING_LIST_ADDRESS: $DataComponentType<string>;
        static PACKAGE_ADDRESS: $DataComponentType<string>;
        static PACKAGE_ORDER_CONTEXT: $DataComponentType<$PackageOrderWithCrafts>;
        /**
         * @deprecated
         */
        static CLIPBOARD_READ_ONLY: $DataComponentType<$Unit>;
        static CHROMATIC_COMPOUND_COLLECTING_LIGHT: $DataComponentType<number>;
        static SCHEMATIC_ANCHOR: $DataComponentType<$BlockPos>;
        static SYMMETRY_WAND_ENABLE: $DataComponentType<boolean>;
        static SHAPER_BLOCK_DATA: $DataComponentType<$CompoundTag>;
        static FILTER_ITEMS_RESPECT_NBT: $DataComponentType<boolean>;
        static TRACK_CONNECTING_FROM: $DataComponentType<$TrackPlacement$ConnectingFrom>;
        static SHAPER_SWAP: $DataComponentType<boolean>;
        static ATTRIBUTE_FILTER_WHITELIST_MODE: $DataComponentType<$AttributeFilterWhitelistMode>;
        static SHAPER_BLOCK_USED: $DataComponentType<$BlockState>;
        static SHAPER_TOOL: $DataComponentType<$TerrainTools>;
        static TRACK_TARGETING_ITEM_SELECTED_POS: $DataComponentType<$BlockPos>;
        static TRACK_TARGETING_ITEM_SELECTED_DIRECTION: $DataComponentType<boolean>;
        static SYMMETRY_WAND: $DataComponentType<$SymmetryMirror>;
        static CLICK_TO_LINK_DATA: $DataComponentType<$ClickToLinkBlockItem$ClickToLinkData>;
        static SCHEMATICANNON_OPTIONS: $DataComponentType<$SchematicannonBlockEntity$SchematicannonOptions>;
        static PACKAGE_CONTENTS: $DataComponentType<$ItemContainerContents>;
        static BACKTANK_AIR: $DataComponentType<number>;
        static FILTER_ITEMS: $DataComponentType<$ItemContainerContents>;
        static FILTER_ITEMS_BLACKLIST: $DataComponentType<boolean>;
        static SCHEMATIC_MIRROR: $DataComponentType<$Mirror>;
        static SCHEMATIC_OWNER: $DataComponentType<string>;
        static PLACEMENT_PATTERN: $DataComponentType<$PlacementPatterns>;
        static SAND_PAPER_POLISHING: $DataComponentType<$SandPaperItemComponent>;
        static TRAIN_SCHEDULE: $DataComponentType<$CompoundTag>;
        static ATTRIBUTE_FILTER_MATCHED_ATTRIBUTES: $DataComponentType<$List<$ItemAttribute$ItemAttributeEntry>>;
        static BELT_FIRST_SHAFT: $DataComponentType<$BlockPos>;
        static INFERRED_FROM_RECIPE: $DataComponentType<boolean>;
        static LINKED_CONTROLLER_ITEMS: $DataComponentType<$ItemContainerContents>;
        /**
         * @deprecated
         */
        static CLIPBOARD_PREVIOUSLY_OPENED_PAGE: $DataComponentType<number>;
        static TOOLBOX_INVENTORY: $DataComponentType<$ToolboxInventory>;
        static SHAPER_PLACEMENT_OPTIONS: $DataComponentType<$PlacementOptions>;
        constructor();
    }
    export class $AllMountedStorageTypes {
        static register(): void;
        static CHEST: $RegistryEntry<$MountedItemStorageType<never>, $ChestMountedStorageType>;
        static FLUID_TANK: $RegistryEntry<$MountedFluidStorageType<never>, $FluidTankMountedStorageType>;
        static TOOLBOX: $RegistryEntry<$MountedItemStorageType<never>, $ToolboxMountedStorageType>;
        static FALLBACK: $RegistryEntry<$MountedItemStorageType<never>, $FallbackMountedStorageType>;
        static VAULT: $RegistryEntry<$MountedItemStorageType<never>, $ItemVaultMountedStorageType>;
        static DISPENSER: $RegistryEntry<$MountedItemStorageType<never>, $DispenserMountedStorageType>;
        static SIMPLE: $RegistryEntry<$MountedItemStorageType<never>, $SimpleMountedStorageType$Impl>;
        static CREATIVE_CRATE: $RegistryEntry<$MountedItemStorageType<never>, $CreativeCrateMountedStorageType>;
        static DEPOT: $RegistryEntry<$MountedItemStorageType<never>, $DepotMountedStorageType>;
        static CREATIVE_FLUID_TANK: $RegistryEntry<$MountedFluidStorageType<never>, $CreativeFluidTankMountedStorageType>;
        constructor();
    }
    export class $AllPartialModels$GantryShaftKey extends $Record {
        flipped(): boolean;
        part(): $GantryShaftBlock$Part;
        powered(): boolean;
        constructor(part: $GantryShaftBlock$Part_, powered: boolean, flipped: boolean);
    }
    /**
     * Values that may be interpreted as {@link $AllPartialModels$GantryShaftKey}.
     */
    export type $AllPartialModels$GantryShaftKey_ = { part?: $GantryShaftBlock$Part_, flipped?: boolean, powered?: boolean,  } | [part?: $GantryShaftBlock$Part_, flipped?: boolean, powered?: boolean, ];
    export class $AllMenuTypes {
        static register(): void;
        static FILTER: $MenuEntry<$FilterMenu>;
        static ATTRIBUTE_FILTER: $MenuEntry<$AttributeFilterMenu>;
        static LINKED_CONTROLLER: $MenuEntry<$LinkedControllerMenu>;
        static STOCK_KEEPER_REQUEST: $MenuEntry<$StockKeeperRequestMenu>;
        static TOOLBOX: $MenuEntry<$ToolboxMenu>;
        static REDSTONE_REQUESTER: $MenuEntry<$RedstoneRequesterMenu>;
        static PACKAGE_PORT: $MenuEntry<$PackagePortMenu>;
        static SCHEMATICANNON: $MenuEntry<$SchematicannonMenu>;
        static FACTORY_PANEL_SET_ITEM: $MenuEntry<$FactoryPanelSetItemMenu>;
        static STOCK_KEEPER_CATEGORY: $MenuEntry<$StockKeeperCategoryMenu>;
        static CRAFTING_BLUEPRINT: $MenuEntry<$BlueprintMenu>;
        static SCHEDULE: $MenuEntry<$ScheduleMenu>;
        static SCHEMATIC_TABLE: $MenuEntry<$SchematicTableMenu>;
        static PACKAGE_FILTER: $MenuEntry<$PackageFilterMenu>;
        constructor();
    }
}
