import { $EntityType_, $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $ConfigInventory } from "@package/appeng/util";
import { $ItemFrame } from "@package/net/minecraft/world/entity/decoration";
import { $List, $List_ } from "@package/java/util";
import { $GenericStack_, $KeyCounter, $AEKey } from "@package/appeng/api/stacks";
import { $BiConsumer, $Consumer, $BiConsumer_, $Function_, $Consumer_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Record, $Class, $Object } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $AEBaseBlockEntity } from "@package/appeng/blockentity";
import { $BasicCellInventory } from "@package/appeng/me/cells";
import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $AEBaseEntityBlock } from "@package/appeng/block";
import { $IGridNode, $IGrid } from "@package/appeng/api/networking";
import { $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CalculationStrategy_ } from "@package/appeng/api/networking/crafting";
import { $IPartItem, $IPart } from "@package/appeng/api/parts";
import { $TestFunction, $GameTestInfo, $GameTestHelper } from "@package/net/minecraft/gametest/framework";
import { $AEColor_ } from "@package/appeng/api/util";
import { $MEStorage_ } from "@package/appeng/api/storage";
import { $AEBasePart } from "@package/appeng/parts";
import { $PartItem } from "@package/appeng/items/parts";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BlockDefinition, $ItemDefinition, $ColoredItemDefinition } from "@package/appeng/core/definitions";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity, $StructureBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/appeng/server/testworld" {
    export class $RectanglePacking {
    }
    export class $BuildAction {
    }
    export interface $BuildAction {
        spawnEntities(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $List_<$Entity>): void;
        build(arg0: $ServerLevel, arg1: $Player, arg2: $BlockPos_): void;
        getBoundingBox(): $BoundingBox;
        get boundingBox(): $BoundingBox;
    }
    /**
     * Values that may be interpreted as {@link $BuildAction}.
     */
    export type $BuildAction_ = (() => $BoundingBox);
    export class $DriveBuilder$CellBuilder {
        add(arg0: $AEKey, arg1: number): void;
        add(arg0: $GenericStack_): void;
        and(): $DriveBuilder;
        constructor(arg0: $DriveBuilder, arg1: $MEStorage_);
    }
    export class $SavedBlockEntity {
        saveAndRemove(arg0: $BlockPos_): void;
        restore(): $BlockEntity;
        save(arg0: $BlockPos_): void;
        constructor(arg0: $PlotTestHelper);
    }
    export class $TestWorldGenerator$PositionedPlot extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $TestWorldGenerator$PositionedPlot}.
     */
    export type $TestWorldGenerator$PositionedPlot_ = { bounds?: $BoundingBox, plot?: $Plot, origin?: $BlockPos_,  } | [bounds?: $BoundingBox, plot?: $Plot, origin?: $BlockPos_, ];
    export class $SpawnExtraGridTestToolsChest extends $Record implements $BuildAction {
        gridPos(): $BlockPos;
        plotId(): $ResourceLocation;
        chestPos(): $BlockPos;
        build(arg0: $ServerLevel, arg1: $Player, arg2: $BlockPos_): void;
        getBoundingBox(): $BoundingBox;
        spawnEntities(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $List_<$Entity>): void;
        constructor(chestPos: $BlockPos_, gridPos: $BlockPos_, plotId: $ResourceLocation_);
        get boundingBox(): $BoundingBox;
    }
    /**
     * Values that may be interpreted as {@link $SpawnExtraGridTestToolsChest}.
     */
    export type $SpawnExtraGridTestToolsChest_ = { gridPos?: $BlockPos_, chestPos?: $BlockPos_, plotId?: $ResourceLocation_,  } | [gridPos?: $BlockPos_, chestPos?: $BlockPos_, plotId?: $ResourceLocation_, ];
    export class $PostGridInitAction extends $Record implements $BuildAction {
        waitForActive(): boolean;
        build(arg0: $ServerLevel, arg1: $Player, arg2: $BlockPos_): void;
        positions(): $List<$BlockPos>;
        consumer(): $BiConsumer<$IGrid, $IGridNode>;
        getBoundingBox(): $BoundingBox;
        spawnEntities(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $List_<$Entity>): void;
        constructor(positions: $List_<$BlockPos_>, consumer: $BiConsumer_<$IGrid, $IGridNode>, waitForActive: boolean);
        get boundingBox(): $BoundingBox;
    }
    /**
     * Values that may be interpreted as {@link $PostGridInitAction}.
     */
    export type $PostGridInitAction_ = { waitForActive?: boolean, consumer?: $BiConsumer_<$IGrid, $IGridNode>, positions?: $List_<$BlockPos_>,  } | [waitForActive?: boolean, consumer?: $BiConsumer_<$IGrid, $IGridNode>, positions?: $List_<$BlockPos_>, ];
    export class $PlotBuilder$PostBuildAction {
    }
    export interface $PlotBuilder$PostBuildAction {
        postBuild(arg0: $ServerLevel, arg1: $Player, arg2: $BlockPos_): void;
    }
    /**
     * Values that may be interpreted as {@link $PlotBuilder$PostBuildAction}.
     */
    export type $PlotBuilder$PostBuildAction_ = ((arg0: $ServerLevel, arg1: $Player, arg2: $BlockPos) => void);
    export class $DriveBuilder$ItemCellBuilder extends $DriveBuilder$CellBuilder {
        add(arg0: $ItemLike_, arg1: number): void;
        constructor(arg0: $DriveBuilder, arg1: $BasicCellInventory);
    }
    export class $PartCustomizer<T extends $IPart> extends $Record implements $BlockPlacingBuildAction {
        partCustomizer(): $Consumer<T>;
        placeBlock(arg0: $ServerLevel, arg1: $Player, arg2: $BlockPos_, arg3: $BlockPos_, arg4: $BlockPos_): void;
        bb(): $BoundingBox;
        part(): $ItemDefinition<$PartItem<T>>;
        side(): $Direction;
        getBoundingBox(): $BoundingBox;
        build(arg0: $ServerLevel, arg1: $Player, arg2: $BlockPos_): void;
        spawnEntities(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $List_<$Entity>): void;
        constructor(bb: $BoundingBox, side: $Direction_, part: $ItemDefinition<$PartItem<T>>, partCustomizer: $Consumer_<T>);
        get boundingBox(): $BoundingBox;
    }
    /**
     * Values that may be interpreted as {@link $PartCustomizer}.
     */
    export type $PartCustomizer_<T> = { partCustomizer?: $Consumer_<$IPart>, bb?: $BoundingBox, side?: $Direction_, part?: $ItemDefinition<$PartItem<$IPart>>,  } | [partCustomizer?: $Consumer_<$IPart>, bb?: $BoundingBox, side?: $Direction_, part?: $ItemDefinition<$PartItem<$IPart>>, ];
    export class $Test {
        setupTicks(arg0: number): $Test;
        withSkyAccess(): $Test;
        getTestFunction(): $Consumer<$PlotTestHelper>;
        maxTicks(arg0: number): $Test;
        skyAccess: boolean;
        constructor(arg0: $Consumer_<$PlotTestHelper>);
        set upTicks(value: number);
        get testFunction(): $Consumer<$PlotTestHelper>;
    }
    export class $TransformingPlotBuilder implements $PlotBuilder {
        fencedEntity(arg0: $BlockPos_, arg1: $EntityType_<never>, arg2: $Consumer_<$Entity>): void;
        fencedEntity(arg0: $BlockPos_, arg1: $EntityType_<never>): void;
        customizeBlockEntity<T extends $BlockEntity>(arg0: string, arg1: $BlockEntityType_<T>, arg2: $Consumer_<T>): void;
        customizeBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>, arg2: $Consumer_<T>): void;
        afterGridExistsAt(arg0: $BlockPos_, arg1: $BiConsumer_<$IGrid, $IGridNode>): void;
        afterGridExistsAt(arg0: $List_<$BlockPos_>, arg1: $BiConsumer_<$IGrid, $IGridNode>): void;
        creativeEnergyCell(arg0: $BlockPos_): void;
        creativeEnergyCell(arg0: string): void;
        storageDrive(arg0: $BlockPos_): void;
        storageDrive(arg0: $BlockPos_, arg1: $Direction_): void;
        afterGridInitAt(arg0: $List_<$BlockPos_>, arg1: $BiConsumer_<$IGrid, $IGridNode>): void;
        afterGridInitAt(arg0: $BlockPos_, arg1: $BiConsumer_<$IGrid, $IGridNode>): void;
        filledHopper(arg0: string, arg1: $Direction_, arg2: $ItemLike_): void;
        filledHopper(arg0: string, arg1: $Direction_, arg2: $ItemStack_): void;
        denseCable(arg0: $BlockPos_): $CableBuilder;
        denseCable(arg0: string): $CableBuilder;
        blockEntity<T extends $AEBaseBlockEntity>(arg0: string, arg1: $BlockDefinition<$AEBaseEntityBlock<T>>, arg2: $Consumer_<T>): void;
        blockEntity<T extends $AEBaseBlockEntity>(arg0: $BlockPos_, arg1: $BlockDefinition<$AEBaseEntityBlock<T>>, arg2: $Consumer_<T>): void;
        chest(arg0: string, ...arg1: $ItemStack_[]): void;
        chest(arg0: $BlockPos_, ...arg1: $ItemStack_[]): void;
        hopper(arg0: string, arg1: $Direction_, ...arg2: $ItemStack_[]): void;
        hopper(arg0: $BlockPos_, arg1: $Direction_, ...arg2: $ItemStack_[]): void;
        hopper(arg0: $BlockPos_, arg1: $Direction_): void;
        hopper(arg0: $BlockPos_, arg1: $Direction_, ...arg2: $ItemLike_[]): void;
        fluid(arg0: string, arg1: $Fluid_): void;
        cable(arg0: string, arg1: $IPartItem<never>): $CableBuilder;
        cable(arg0: string, arg1: $ColoredItemDefinition<$IPartItem<never>>, arg2: $AEColor_): $CableBuilder;
        cable(arg0: string, arg1: $ColoredItemDefinition<$IPartItem<never>>): $CableBuilder;
        cable(arg0: string): $CableBuilder;
        cable(arg0: $BlockPos_): $CableBuilder;
        facade<T extends $IPart>(arg0: string, arg1: $Direction_, arg2: $ItemLike_): void;
        drive(arg0: $BlockPos_): $DriveBuilder;
        buttonOn(arg0: $BlockPos_, arg1: $Direction_): $BlockPos;
        leverOn(arg0: $BlockPos_, arg1: $Direction_): $BlockPos;
        entity(arg0: $BlockPos_, arg1: $EntityType_<never>, arg2: $Consumer_<$Entity>): void;
        entity(arg0: $BlockPos_, arg1: $EntityType_<never>): void;
        offset(arg0: number, arg1: number, arg2: number): $PlotBuilder;
        offset(arg0: $BlockPos_): $PlotBuilder;
        block(arg0: string, arg1: $Block_): void;
        block(arg0: $BlockPos_, arg1: $Block_): void;
        block(arg0: string, arg1: $BlockDefinition<never>): void;
        block(arg0: $BlockPos_, arg1: $BlockDefinition<never>): void;
        part(arg0: string, arg1: $Direction_, arg2: $ItemDefinition<$PartItem<never>>): void;
        part<T extends $IPart>(arg0: string, arg1: $Direction_, arg2: $ItemDefinition<$PartItem<T>>, arg3: $Consumer_<T>): void;
        part<T extends $IPart>(arg0: $BlockPos_, arg1: $Direction_, arg2: $ItemDefinition<$PartItem<T>>, arg3: $Consumer_<T>): void;
        part(arg0: $BlockPos_, arg1: $Direction_, arg2: $ItemDefinition<$PartItem<never>>): void;
        blockState(arg0: string, arg1: $BlockState_): void;
        blockState(arg0: $BlockPos_, arg1: $BlockState_): void;
    }
    export class $PlaceFacade extends $Record implements $BlockPlacingBuildAction {
        build(arg0: $ServerLevel, arg1: $Player, arg2: $BlockPos_): void;
        spawnEntities(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $List_<$Entity>): void;
    }
    /**
     * Values that may be interpreted as {@link $PlaceFacade}.
     */
    export type $PlaceFacade_ = { side?: $Direction_, bb?: $BoundingBox, visual?: $ItemStack_,  } | [side?: $Direction_, bb?: $BoundingBox, visual?: $ItemStack_, ];
    export class $RectanglePacking$Size extends $Record {
        h(): number;
        w(): number;
        constructor(w: number, h: number);
    }
    /**
     * Values that may be interpreted as {@link $RectanglePacking$Size}.
     */
    export type $RectanglePacking$Size_ = { h?: number, w?: number,  } | [h?: number, w?: number, ];
    export class $DriveBuilder$CreativeCellBuilder {
        add(arg0: $AEKey): $DriveBuilder$CreativeCellBuilder;
        add(arg0: $GenericStack_): $DriveBuilder$CreativeCellBuilder;
        add(arg0: $Fluid_): $DriveBuilder$CreativeCellBuilder;
        add(arg0: $ItemLike_): $DriveBuilder$CreativeCellBuilder;
        and(): $DriveBuilder;
        constructor(arg0: $DriveBuilder, arg1: $ConfigInventory);
    }
    export class $PlacePart extends $Record implements $BlockPlacingBuildAction {
        build(arg0: $ServerLevel, arg1: $Player, arg2: $BlockPos_): void;
        spawnEntities(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $List_<$Entity>): void;
    }
    /**
     * Values that may be interpreted as {@link $PlacePart}.
     */
    export type $PlacePart_ = { side?: $Direction_, what?: $IPartItem<never>, bb?: $BoundingBox,  } | [side?: $Direction_, what?: $IPartItem<never>, bb?: $BoundingBox, ];
    export class $DriveBuilder {
        addCreativeCell(): $DriveBuilder$CreativeCellBuilder;
        addItemCell64k(): $DriveBuilder$ItemCellBuilder;
        addFluidCell64k(): $DriveBuilder$FluidCellBuilder;
    }
    export class $PlaceBlockState extends $Record implements $BlockPlacingBuildAction {
        placeBlock(arg0: $ServerLevel, arg1: $Player, arg2: $BlockPos_, arg3: $BlockPos_, arg4: $BlockPos_): void;
        bb(): $BoundingBox;
        what(): $BlockState;
        getBoundingBox(): $BoundingBox;
        build(arg0: $ServerLevel, arg1: $Player, arg2: $BlockPos_): void;
        spawnEntities(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $List_<$Entity>): void;
        constructor(bb: $BoundingBox, what: $BlockState_);
        get boundingBox(): $BoundingBox;
    }
    /**
     * Values that may be interpreted as {@link $PlaceBlockState}.
     */
    export type $PlaceBlockState_ = { bb?: $BoundingBox, what?: $BlockState_,  } | [bb?: $BoundingBox, what?: $BlockState_, ];
    export class $RectanglePacking$Positioned<T> extends $Record {
        x(): number;
        h(): number;
        w(): number;
        y(): number;
        what(): T;
        constructor(x: number, y: number, w: number, h: number, what: T);
    }
    /**
     * Values that may be interpreted as {@link $RectanglePacking$Positioned}.
     */
    export type $RectanglePacking$Positioned_<T> = { y?: number, x?: number, w?: number, what?: any, h?: number,  } | [y?: number, x?: number, w?: number, what?: any, h?: number, ];
    export class $SpawnEntityAction extends $Record implements $BuildAction {
        spawnEntities(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $List_<$Entity>): void;
        type(): $EntityType<never>;
        bb(): $BoundingBox;
        postProcessor(): $Consumer<$Entity>;
        getBoundingBox(): $BoundingBox;
        build(arg0: $ServerLevel, arg1: $Player, arg2: $BlockPos_): void;
        constructor(bb: $BoundingBox, type: $EntityType_<never>, postProcessor: $Consumer_<$Entity>);
        get boundingBox(): $BoundingBox;
    }
    /**
     * Values that may be interpreted as {@link $SpawnEntityAction}.
     */
    export type $SpawnEntityAction_ = { type?: $EntityType_<never>, bb?: $BoundingBox, postProcessor?: $Consumer_<$Entity>,  } | [type?: $EntityType_<never>, bb?: $BoundingBox, postProcessor?: $Consumer_<$Entity>, ];
    export class $PlotTestHelper extends $GameTestHelper {
        countContainerContentAt(arg0: $BlockPos_): $KeyCounter;
        countContainerContentAt(arg0: $BlockPos_, arg1: $KeyCounter): void;
        assertContains(arg0: $MEStorage_, arg1: $AEKey): void;
        assertContains(arg0: $IGrid, arg1: $Item_): void;
        clearStorage(arg0: $IGrid): void;
        clearStorage(arg0: $MEStorage_): void;
        assertNetworkContains(arg0: $BlockPos_, arg1: $Fluid_): void;
        assertNetworkContains(arg0: $BlockPos_, arg1: $ItemLike_): void;
        assertNetworkContains(arg0: $BlockPos_, arg1: $AEKey): void;
        assertNetworkContainsNot(arg0: $BlockPos_, arg1: $Fluid_): void;
        assertNetworkContainsNot(arg0: $BlockPos_, arg1: $AEKey): void;
        assertNetworkContainsNot(arg0: $BlockPos_, arg1: $ItemLike_): void;
        assertEquals(arg0: $BlockPos_, arg1: $Object, arg2: $Object): void;
        checkAllInitialized(): void;
        assertContainsNot(arg0: $MEStorage_, arg1: $AEKey): void;
        getGrid(arg0: $BlockPos_): $IGrid;
        getGridNode(arg0: $BlockPos_): $IGridNode;
        getPart<T extends $AEBasePart>(arg0: $BlockPos_, arg1: $Direction_, arg2: $Class<T>): T;
        check(arg0: boolean, arg1: string): void;
        check(arg0: boolean, arg1: string, arg2: $BlockPos_): void;
        getCapability<T, C>(arg0: $BlockPos_, arg1: $BlockCapability<T, C>, arg2: C): T;
        testInfo: $GameTestInfo;
        constructor(arg0: $BlockPos_, arg1: $GameTestInfo);
    }
    export class $DriveBuilder$FluidCellBuilder extends $DriveBuilder$CellBuilder {
        addBuckets(arg0: $Fluid_, arg1: number): void;
        constructor(arg0: $DriveBuilder, arg1: $BasicCellInventory);
    }
    export class $BlockEntityCustomizer<T extends $BlockEntity> extends $Record implements $BlockPlacingBuildAction {
        placeBlock(arg0: $ServerLevel, arg1: $Player, arg2: $BlockPos_, arg3: $BlockPos_, arg4: $BlockPos_): void;
        type(): $BlockEntityType<T>;
        bb(): $BoundingBox;
        consumer(): $Consumer<T>;
        getBoundingBox(): $BoundingBox;
        build(arg0: $ServerLevel, arg1: $Player, arg2: $BlockPos_): void;
        spawnEntities(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $List_<$Entity>): void;
        constructor(bb: $BoundingBox, type: $BlockEntityType_<T>, consumer: $Consumer_<T>);
        get boundingBox(): $BoundingBox;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityCustomizer}.
     */
    export type $BlockEntityCustomizer_<T> = { type?: $BlockEntityType_<$BlockEntity>, bb?: $BoundingBox, consumer?: $Consumer_<$BlockEntity>,  } | [type?: $BlockEntityType_<$BlockEntity>, bb?: $BoundingBox, consumer?: $Consumer_<$BlockEntity>, ];
    export class $Plot implements $PlotBuilder {
        addPostBuildAction(arg0: $PlotBuilder$PostBuildAction_): void;
        addBuildAction(arg0: $BuildAction_): void;
        addPostInitAction(arg0: $PlotBuilder$PostBuildAction_): void;
        test(arg0: $Consumer_<$PlotTestHelper>): $Test;
        bb(arg0: string): $BoundingBox;
        transform(arg0: $Function_<$BoundingBox, $BoundingBox>): $PlotBuilder;
        getBounds(): $BoundingBox;
        getId(): $ResourceLocation;
        build(arg0: $ServerLevel, arg1: $Player, arg2: $BlockPos_, arg3: $List_<$Entity>): void;
        build(arg0: $ServerLevel, arg1: $Player, arg2: $BlockPos_): void;
        getTest(): $Test;
        fencedEntity(arg0: $BlockPos_, arg1: $EntityType_<never>, arg2: $Consumer_<$Entity>): void;
        fencedEntity(arg0: $BlockPos_, arg1: $EntityType_<never>): void;
        customizeBlockEntity<T extends $BlockEntity>(arg0: string, arg1: $BlockEntityType_<T>, arg2: $Consumer_<T>): void;
        customizeBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>, arg2: $Consumer_<T>): void;
        afterGridExistsAt(arg0: $BlockPos_, arg1: $BiConsumer_<$IGrid, $IGridNode>): void;
        afterGridExistsAt(arg0: $List_<$BlockPos_>, arg1: $BiConsumer_<$IGrid, $IGridNode>): void;
        creativeEnergyCell(arg0: $BlockPos_): void;
        creativeEnergyCell(arg0: string): void;
        storageDrive(arg0: $BlockPos_): void;
        storageDrive(arg0: $BlockPos_, arg1: $Direction_): void;
        afterGridInitAt(arg0: $List_<$BlockPos_>, arg1: $BiConsumer_<$IGrid, $IGridNode>): void;
        afterGridInitAt(arg0: $BlockPos_, arg1: $BiConsumer_<$IGrid, $IGridNode>): void;
        filledHopper(arg0: string, arg1: $Direction_, arg2: $ItemLike_): void;
        filledHopper(arg0: string, arg1: $Direction_, arg2: $ItemStack_): void;
        denseCable(arg0: $BlockPos_): $CableBuilder;
        denseCable(arg0: string): $CableBuilder;
        blockEntity<T extends $AEBaseBlockEntity>(arg0: string, arg1: $BlockDefinition<$AEBaseEntityBlock<T>>, arg2: $Consumer_<T>): void;
        blockEntity<T extends $AEBaseBlockEntity>(arg0: $BlockPos_, arg1: $BlockDefinition<$AEBaseEntityBlock<T>>, arg2: $Consumer_<T>): void;
        chest(arg0: string, ...arg1: $ItemStack_[]): void;
        chest(arg0: $BlockPos_, ...arg1: $ItemStack_[]): void;
        hopper(arg0: string, arg1: $Direction_, ...arg2: $ItemStack_[]): void;
        hopper(arg0: $BlockPos_, arg1: $Direction_, ...arg2: $ItemStack_[]): void;
        hopper(arg0: $BlockPos_, arg1: $Direction_): void;
        hopper(arg0: $BlockPos_, arg1: $Direction_, ...arg2: $ItemLike_[]): void;
        fluid(arg0: string, arg1: $Fluid_): void;
        cable(arg0: string, arg1: $IPartItem<never>): $CableBuilder;
        cable(arg0: string, arg1: $ColoredItemDefinition<$IPartItem<never>>, arg2: $AEColor_): $CableBuilder;
        cable(arg0: string, arg1: $ColoredItemDefinition<$IPartItem<never>>): $CableBuilder;
        cable(arg0: string): $CableBuilder;
        cable(arg0: $BlockPos_): $CableBuilder;
        facade<T extends $IPart>(arg0: string, arg1: $Direction_, arg2: $ItemLike_): void;
        drive(arg0: $BlockPos_): $DriveBuilder;
        buttonOn(arg0: $BlockPos_, arg1: $Direction_): $BlockPos;
        leverOn(arg0: $BlockPos_, arg1: $Direction_): $BlockPos;
        entity(arg0: $BlockPos_, arg1: $EntityType_<never>, arg2: $Consumer_<$Entity>): void;
        entity(arg0: $BlockPos_, arg1: $EntityType_<never>): void;
        offset(arg0: number, arg1: number, arg2: number): $PlotBuilder;
        offset(arg0: $BlockPos_): $PlotBuilder;
        block(arg0: string, arg1: $Block_): void;
        block(arg0: $BlockPos_, arg1: $Block_): void;
        block(arg0: string, arg1: $BlockDefinition<never>): void;
        block(arg0: $BlockPos_, arg1: $BlockDefinition<never>): void;
        part(arg0: string, arg1: $Direction_, arg2: $ItemDefinition<$PartItem<never>>): void;
        part<T extends $IPart>(arg0: string, arg1: $Direction_, arg2: $ItemDefinition<$PartItem<T>>, arg3: $Consumer_<T>): void;
        part<T extends $IPart>(arg0: $BlockPos_, arg1: $Direction_, arg2: $ItemDefinition<$PartItem<T>>, arg3: $Consumer_<T>): void;
        part(arg0: $BlockPos_, arg1: $Direction_, arg2: $ItemDefinition<$PartItem<never>>): void;
        blockState(arg0: string, arg1: $BlockState_): void;
        blockState(arg0: $BlockPos_, arg1: $BlockState_): void;
        constructor(arg0: $ResourceLocation_);
        get bounds(): $BoundingBox;
        get id(): $ResourceLocation;
    }
    export class $RectanglePacking$PositionedArea<T> extends $Record {
        rectangles(): $List<$RectanglePacking$Positioned<T>>;
        h(): number;
        w(): number;
        constructor(w: number, h: number, rectangles: $List_<$RectanglePacking$Positioned_<T>>);
    }
    /**
     * Values that may be interpreted as {@link $RectanglePacking$PositionedArea}.
     */
    export type $RectanglePacking$PositionedArea_<T> = { w?: number, rectangles?: $List_<$RectanglePacking$Positioned_<any>>, h?: number,  } | [w?: number, rectangles?: $List_<$RectanglePacking$Positioned_<any>>, h?: number, ];
    export class $CableBuilder {
        craftingEmitter(arg0: $Direction_, arg1: $ItemLike_): $CableBuilder;
        craftingEmitter(arg0: $Direction_, arg1: $Fluid_): $CableBuilder;
        craftingEmitter(arg0: $Direction_, arg1: $AEKey): $CableBuilder;
        facade<T extends $IPart>(arg0: $Direction_, arg1: $ItemLike_): $CableBuilder;
        part(arg0: $Direction_, arg1: $ItemDefinition<$PartItem<never>>): $CableBuilder;
        part<T extends $IPart>(arg0: $Direction_, arg1: $ItemDefinition<$PartItem<T>>, arg2: $Consumer_<T>): $CableBuilder;
        constructor(arg0: $PlotBuilder, arg1: string);
    }
    export class $GameTestPlotAdapter {
        static getStructureTemplate(arg0: string): $StructureTemplate;
        static createStructure(arg0: $Plot, arg1: $GameTestInfo, arg2: $BlockPos_, arg3: $ServerLevel): $StructureBlockEntity;
        gameTestAdapter(): $List<$TestFunction>;
        constructor();
    }
    export class $PlotBuilder {
        static posToBb(arg0: $BlockPos_): string;
    }
    export interface $PlotBuilder {
        fencedEntity(arg0: $BlockPos_, arg1: $EntityType_<never>, arg2: $Consumer_<$Entity>): void;
        fencedEntity(arg0: $BlockPos_, arg1: $EntityType_<never>): void;
        customizeBlockEntity<T extends $BlockEntity>(arg0: string, arg1: $BlockEntityType_<T>, arg2: $Consumer_<T>): void;
        customizeBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>, arg2: $Consumer_<T>): void;
        afterGridExistsAt(arg0: $BlockPos_, arg1: $BiConsumer_<$IGrid, $IGridNode>): void;
        afterGridExistsAt(arg0: $List_<$BlockPos_>, arg1: $BiConsumer_<$IGrid, $IGridNode>): void;
        addPostBuildAction(arg0: $PlotBuilder$PostBuildAction_): void;
        creativeEnergyCell(arg0: $BlockPos_): void;
        creativeEnergyCell(arg0: string): void;
        storageDrive(arg0: $BlockPos_): void;
        storageDrive(arg0: $BlockPos_, arg1: $Direction_): void;
        afterGridInitAt(arg0: $List_<$BlockPos_>, arg1: $BiConsumer_<$IGrid, $IGridNode>): void;
        afterGridInitAt(arg0: $BlockPos_, arg1: $BiConsumer_<$IGrid, $IGridNode>): void;
        filledHopper(arg0: string, arg1: $Direction_, arg2: $ItemLike_): void;
        filledHopper(arg0: string, arg1: $Direction_, arg2: $ItemStack_): void;
        addBuildAction(arg0: $BuildAction_): void;
        denseCable(arg0: $BlockPos_): $CableBuilder;
        denseCable(arg0: string): $CableBuilder;
        addPostInitAction(arg0: $PlotBuilder$PostBuildAction_): void;
        blockEntity<T extends $AEBaseBlockEntity>(arg0: string, arg1: $BlockDefinition<$AEBaseEntityBlock<T>>, arg2: $Consumer_<T>): void;
        blockEntity<T extends $AEBaseBlockEntity>(arg0: $BlockPos_, arg1: $BlockDefinition<$AEBaseEntityBlock<T>>, arg2: $Consumer_<T>): void;
        chest(arg0: string, ...arg1: $ItemStack_[]): void;
        chest(arg0: $BlockPos_, ...arg1: $ItemStack_[]): void;
        hopper(arg0: string, arg1: $Direction_, ...arg2: $ItemStack_[]): void;
        hopper(arg0: $BlockPos_, arg1: $Direction_, ...arg2: $ItemStack_[]): void;
        hopper(arg0: $BlockPos_, arg1: $Direction_): void;
        hopper(arg0: $BlockPos_, arg1: $Direction_, ...arg2: $ItemLike_[]): void;
        fluid(arg0: string, arg1: $Fluid_): void;
        cable(arg0: string, arg1: $IPartItem<never>): $CableBuilder;
        cable(arg0: string, arg1: $ColoredItemDefinition<$IPartItem<never>>, arg2: $AEColor_): $CableBuilder;
        cable(arg0: string, arg1: $ColoredItemDefinition<$IPartItem<never>>): $CableBuilder;
        cable(arg0: string): $CableBuilder;
        cable(arg0: $BlockPos_): $CableBuilder;
        facade<T extends $IPart>(arg0: string, arg1: $Direction_, arg2: $ItemLike_): void;
        drive(arg0: $BlockPos_): $DriveBuilder;
        buttonOn(arg0: $BlockPos_, arg1: $Direction_): $BlockPos;
        leverOn(arg0: $BlockPos_, arg1: $Direction_): $BlockPos;
        entity(arg0: $BlockPos_, arg1: $EntityType_<never>, arg2: $Consumer_<$Entity>): void;
        entity(arg0: $BlockPos_, arg1: $EntityType_<never>): void;
        test(arg0: $Consumer_<$PlotTestHelper>): $Test;
        offset(arg0: number, arg1: number, arg2: number): $PlotBuilder;
        offset(arg0: $BlockPos_): $PlotBuilder;
        bb(arg0: string): $BoundingBox;
        transform(arg0: $Function_<$BoundingBox, $BoundingBox>): $PlotBuilder;
        block(arg0: string, arg1: $Block_): void;
        block(arg0: $BlockPos_, arg1: $Block_): void;
        block(arg0: string, arg1: $BlockDefinition<never>): void;
        block(arg0: $BlockPos_, arg1: $BlockDefinition<never>): void;
        part(arg0: string, arg1: $Direction_, arg2: $ItemDefinition<$PartItem<never>>): void;
        part<T extends $IPart>(arg0: string, arg1: $Direction_, arg2: $ItemDefinition<$PartItem<T>>, arg3: $Consumer_<T>): void;
        part<T extends $IPart>(arg0: $BlockPos_, arg1: $Direction_, arg2: $ItemDefinition<$PartItem<T>>, arg3: $Consumer_<T>): void;
        part(arg0: $BlockPos_, arg1: $Direction_, arg2: $ItemDefinition<$PartItem<never>>): void;
        blockState(arg0: string, arg1: $BlockState_): void;
        blockState(arg0: $BlockPos_, arg1: $BlockState_): void;
    }
    export class $TestWorldGenerator {
        getSuitableStartPos(): $BlockPos;
        generate(): void;
        isWithinBounds(arg0: $BlockPos_): boolean;
        constructor(arg0: $ServerLevel, arg1: $ServerPlayer, arg2: $BlockPos_, arg3: $ResourceLocation_);
        get suitableStartPos(): $BlockPos;
    }
    export class $TestCraftingJob {
        tickUntilStarted(): void;
        constructor(arg0: $PlotTestHelper, arg1: $BlockPos_, arg2: $AEKey, arg3: number, arg4: $CalculationStrategy_);
        constructor(arg0: $PlotTestHelper, arg1: $BlockPos_, arg2: $AEKey, arg3: number);
    }
    export class $BlockPlacingBuildAction {
    }
    export interface $BlockPlacingBuildAction extends $BuildAction {
        placeBlock(arg0: $ServerLevel, arg1: $Player, arg2: $BlockPos_, arg3: $BlockPos_, arg4: $BlockPos_): void;
        build(arg0: $ServerLevel, arg1: $Player, arg2: $BlockPos_): void;
    }
    export class $GridInitHelper {
    }
    export class $RectanglePacking$Rectangle<T> {
    }
    export class $PlaceItemFrameAction extends $Record implements $BuildAction {
        spawnEntities(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $List_<$Entity>): void;
        customizer(): $Consumer<$ItemFrame>;
        pos(): $BlockPos;
        getBoundingBox(): $BoundingBox;
        facing(): $Direction;
        build(arg0: $ServerLevel, arg1: $Player, arg2: $BlockPos_): void;
        constructor(pos: $BlockPos_, facing: $Direction_, customizer: $Consumer_<$ItemFrame>);
        get boundingBox(): $BoundingBox;
    }
    /**
     * Values that may be interpreted as {@link $PlaceItemFrameAction}.
     */
    export type $PlaceItemFrameAction_ = { facing?: $Direction_, customizer?: $Consumer_<$ItemFrame>, pos?: $BlockPos_,  } | [facing?: $Direction_, customizer?: $Consumer_<$ItemFrame>, pos?: $BlockPos_, ];
}
