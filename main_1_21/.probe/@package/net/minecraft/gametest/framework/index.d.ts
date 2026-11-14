import { $Annotation } from "@package/java/lang/annotation";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $CommandDispatcher, $StringReader } from "@package/com/mojang/brigadier";
import { $EntityType_, $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameTestHelperAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Set_, $List, $Collection_, $Collection } from "@package/java/util";
import { $Supplier_, $Consumer_, $Predicate_, $Consumer, $IntPredicate_, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Vec3i, $Holder_, $Direction_ } from "@package/net/minecraft/core";
import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Method } from "@package/java/lang/reflect";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $RuntimeException, $Exception, $Comparable, $Thread, $Throwable, $Record, $Class, $Runnable_ } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $File_ } from "@package/java/io";
import { $GameType_, $LevelSettings } from "@package/net/minecraft/world/level";
import { $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $SampleLogger } from "@package/net/minecraft/util/debugchart";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block, $Rotation_, $Block_, $Rotation } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity, $StructureBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";

declare module "@package/net/minecraft/gametest/framework" {
    export class $GameTestRunner$Builder {
        batcher(batcher: $GameTestRunner$GameTestBatcher_): $GameTestRunner$Builder;
        existingStructureSpawner(existingStructureSpawner: $StructureGridSpawner): $GameTestRunner$Builder;
        newStructureSpawner(newStructureSpawner: $GameTestRunner$StructureSpawner_): $GameTestRunner$Builder;
        haltOnError(haltOnError: boolean): $GameTestRunner$Builder;
        static fromBatches(batches: $Collection_<$GameTestBatch_>, level: $ServerLevel): $GameTestRunner$Builder;
        static fromInfo(batches: $Collection_<$GameTestInfo>, level: $ServerLevel): $GameTestRunner$Builder;
        build(): $GameTestRunner;
    }
    /**
     * Annotate a method with this annotation in order to have it run after the specified `#batch()`.
     */
    export class $AfterBatch implements $Annotation {
        batch(): string;
    }
    export class $GlobalTestReporter {
        static onTestFailed(testInfo: $GameTestInfo): void;
        static onTestSuccess(testInfo: $GameTestInfo): void;
        static finish(): void;
        static replaceWith(testReporter: $TestReporter): void;
        constructor();
    }
    export class $MultipleTestTracker {
        addFailureListener(onFail: $Consumer_<$GameTestInfo>): void;
        addTestToTrack(testInfo: $GameTestInfo): void;
        getFailedRequiredCount(): number;
        getFailedOptionalCount(): number;
        getDoneCount(): number;
        hasFailedRequired(): boolean;
        hasFailedOptional(): boolean;
        getFailedRequired(): $Collection<$GameTestInfo>;
        getFailedOptional(): $Collection<$GameTestInfo>;
        getProgressBar(): string;
        remove(testInfo: $GameTestInfo): void;
        isDone(): boolean;
        addListener(testListener: $GameTestListener): void;
        getTotalCount(): number;
        constructor();
        constructor(testInfos: $Collection_<$GameTestInfo>);
        get failedRequiredCount(): number;
        get failedOptionalCount(): number;
        get doneCount(): number;
        get failedRequired(): $Collection<$GameTestInfo>;
        get failedOptional(): $Collection<$GameTestInfo>;
        get progressBar(): string;
        get done(): boolean;
        get totalCount(): number;
    }
    export class $StructureUtils {
        static getStructureBounds(structureBlockEntity: $StructureBlockEntity): $AABB;
        static getStructureOrigin(structureBlockEntity: $StructureBlockEntity): $BlockPos;
        static removeBarriers(bounds: $AABB_, level: $ServerLevel): void;
        static createNewEmptyStructureBlock(structureName: string, pos: $BlockPos_, size: $Vec3i, rotation: $Rotation_, serverLevel: $ServerLevel): void;
        static addCommandBlockAndButtonToStartTest(structureBlockPos: $BlockPos_, offset: $BlockPos_, rotation: $Rotation_, serverLevel: $ServerLevel): void;
        static findStructureBlockContainingPos(pos: $BlockPos_, radius: number, level: $ServerLevel): ($BlockPos) | undefined;
        static prepareTestStructure(gameTestInfo: $GameTestInfo, pos: $BlockPos_, rotation: $Rotation_, level: $ServerLevel): $StructureBlockEntity;
        static getStructureBoundingBox(pos: $BlockPos_, offset: $Vec3i, rotation: $Rotation_): $BoundingBox;
        static getStructureBoundingBox(structureBlockEntity: $StructureBlockEntity): $BoundingBox;
        static clearSpaceForStructure(boundingBox: $BoundingBox, level: $ServerLevel): void;
        static getRotationForRotationSteps(rotationSteps: number): $Rotation;
        static getRotationStepsForRotation(rotation: $Rotation_): number;
        static getTransformedFarCorner(pos: $BlockPos_, offset: $Vec3i, rotation: $Rotation_): $BlockPos;
        static encaseStructure(bounds: $AABB_, level: $ServerLevel, placeBarriers: boolean): void;
        static findStructureBlocks(pos: $BlockPos_, radius: number, level: $ServerLevel): $Stream<$BlockPos>;
        static findNearestStructureBlock(pos: $BlockPos_, radius: number, level: $ServerLevel): ($BlockPos) | undefined;
        static findStructureByTestFunction(pos: $BlockPos_, radius: number, level: $ServerLevel, testName: string): $Stream<$BlockPos>;
        static lookedAtStructureBlockPos(pos: $BlockPos_, entity: $Entity, level: $ServerLevel): $Stream<$BlockPos>;
        static DEFAULT_TEST_STRUCTURES_DIR: string;
        static testStructuresDir: string;
        static DEFAULT_Y_SEARCH_RADIUS: number;
        constructor();
    }
    export class $StructureBlockPosFinder {
    }
    export interface $StructureBlockPosFinder {
        findStructureBlockPos(): $Stream<$BlockPos>;
    }
    /**
     * Values that may be interpreted as {@link $StructureBlockPosFinder}.
     */
    export type $StructureBlockPosFinder_ = (() => $Stream<$BlockPos_>);
    export class $GameTestAssertPosException extends $GameTestAssertException {
        getMessageToShowAtBlock(): string;
        getRelativePos(): $BlockPos;
        getAbsolutePos(): $BlockPos;
        constructor(exceptionMessage: string, absolutePos: $BlockPos_, relativePos: $BlockPos_, tick: number);
        get messageToShowAtBlock(): string;
        get relativePos(): $BlockPos;
        get absolutePos(): $BlockPos;
    }
    export class $TestCommand$TestBatchSummaryDisplayer extends $Record implements $GameTestBatchListener {
    }
    /**
     * Values that may be interpreted as {@link $TestCommand$TestBatchSummaryDisplayer}.
     */
    export type $TestCommand$TestBatchSummaryDisplayer_ = { source?: $CommandSourceStack,  } | [source?: $CommandSourceStack, ];
    export class $GameTestBatchListener {
    }
    export interface $GameTestBatchListener {
        testBatchStarting(batch: $GameTestBatch_): void;
        testBatchFinished(batch: $GameTestBatch_): void;
    }
    export class $RetryOptions extends $Record {
        numberOfTries(): number;
        haltOnFailure(): boolean;
        static noRetries(): $RetryOptions;
        unlimitedTries(): boolean;
        hasTriesLeft(attempts: number, successes: number): boolean;
        hasRetries(): boolean;
        constructor(arg0: number, arg1: boolean);
    }
    /**
     * Values that may be interpreted as {@link $RetryOptions}.
     */
    export type $RetryOptions_ = { haltOnFailure?: boolean, numberOfTries?: number,  } | [haltOnFailure?: boolean, numberOfTries?: number, ];
    export class $TestFinder<T> implements $StructureBlockPosFinder, $TestFunctionFinder {
        findStructureBlockPos(): $Stream<$BlockPos>;
        findTestFunctions(): $Stream<$TestFunction>;
        source(): $CommandSourceStack;
    }
    export class $JUnitLikeTestReporter implements $TestReporter {
        onTestFailed(testInfo: $GameTestInfo): void;
        onTestSuccess(testInfo: $GameTestInfo): void;
        save(destination: $File_): void;
        finish(): void;
        constructor(destination: $File_);
    }
    export class $GameTestServer extends $MinecraftServer {
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        waitUntilNextTick(): void;
        getTickTimeLogger(): $SampleLogger;
        static create(serverThread: $Thread, storageSource: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, testBatches: $Collection_<$TestFunction_>, spawnPos: $BlockPos_): $GameTestServer;
        /**
         * Initialises the server and starts it.
         */
        initServer(): boolean;
        static VANILLA_BRAND: string;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        get tickTimeLogger(): $SampleLogger;
    }
    export class $GameTestRunner$StructureSpawner {
        static NOT_SET: $GameTestRunner$StructureSpawner;
        static IN_PLACE: $GameTestRunner$StructureSpawner;
    }
    export interface $GameTestRunner$StructureSpawner {
        onBatchStart(level: $ServerLevel): void;
        spawnStructure(gameTestInfo: $GameTestInfo): ($GameTestInfo) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $GameTestRunner$StructureSpawner}.
     */
    export type $GameTestRunner$StructureSpawner_ = ((arg0: $GameTestInfo) => ($GameTestInfo) | undefined);
    export class $GameTest implements $Annotation {
        setupTicks(): number;
        timeoutTicks(): number;
        requiredSuccesses(): number;
        manualOnly(): boolean;
        skyAccess(): boolean;
        rotationSteps(): number;
        attempts(): number;
        batch(): string;
        required(): boolean;
        template(): string;
        templateNamespace(): string;
    }
    export class $GameTestTimeoutException extends $RuntimeException {
        constructor(exceptionMessage: string);
    }
    export class $GameTestEvent {
    }
    export class $TestCommand$TestSummaryDisplayer extends $Record implements $GameTestListener {
        testStructureLoaded(testInfo: $GameTestInfo): void;
        testPassed(test: $GameTestInfo, runner: $GameTestRunner): void;
        testFailed(test: $GameTestInfo, runner: $GameTestRunner): void;
        testAddedForRerun(oldTest: $GameTestInfo, newTest: $GameTestInfo, runner: $GameTestRunner): void;
        level(): $ServerLevel;
        tracker(): $MultipleTestTracker;
        constructor(level: $ServerLevel, tracker: $MultipleTestTracker);
    }
    /**
     * Values that may be interpreted as {@link $TestCommand$TestSummaryDisplayer}.
     */
    export type $TestCommand$TestSummaryDisplayer_ = { level?: $ServerLevel, tracker?: $MultipleTestTracker,  } | [level?: $ServerLevel, tracker?: $MultipleTestTracker, ];
    export class $TestClassNameArgument implements $ArgumentType<string> {
        static testClassName(): $TestClassNameArgument;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getTestClassName(context: $CommandContext<$CommandSourceStack>, argument: string): string;
        getExamples(): $Collection<string>;
        parse<S>(arg0: $StringReader, arg1: S): string;
        parse(arg0: $StringReader): string;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $TestReporter {
    }
    export interface $TestReporter {
        onTestFailed(testInfo: $GameTestInfo): void;
        onTestSuccess(testInfo: $GameTestInfo): void;
        finish(): void;
    }
    export class $ReportGameListener implements $GameTestListener {
    }
    export class $TestFinder$Builder<T> {
        failedTests(context: $CommandContext<$CommandSourceStack>, onlyRequired: boolean): T;
        failedTests(context: $CommandContext<$CommandSourceStack>): T;
        allTests(context: $CommandContext<$CommandSourceStack>): T;
        allNearby(context: $CommandContext<$CommandSourceStack>): T;
        lookedAt(context: $CommandContext<$CommandSourceStack>): T;
        locateByName(context: $CommandContext<$CommandSourceStack>, className: string): T;
        allTestsInClass(context: $CommandContext<$CommandSourceStack>, className: string): T;
        byArgument(context: $CommandContext<$CommandSourceStack>, className: string): T;
        createMultipleCopies(count: number): $TestFinder$Builder<T>;
        nearest(context: $CommandContext<$CommandSourceStack>): T;
        radius(context: $CommandContext<$CommandSourceStack>, radius: number): T;
        constructor(contextProvider: $Function_<$TestFinder<T>, T>);
    }
    export class $GameTestListener {
    }
    export interface $GameTestListener {
        testStructureLoaded(testInfo: $GameTestInfo): void;
        testPassed(test: $GameTestInfo, runner: $GameTestRunner): void;
        testFailed(test: $GameTestInfo, runner: $GameTestRunner): void;
        testAddedForRerun(oldTest: $GameTestInfo, newTest: $GameTestInfo, runner: $GameTestRunner): void;
    }
    export class $TestFunction extends $Record {
        setupTicks(): number;
        maxAttempts(): number;
        structureName(): string;
        testName(): string;
        maxTicks(): number;
        requiredSuccesses(): number;
        manualOnly(): boolean;
        skyAccess(): boolean;
        batchName(): string;
        isFlaky(): boolean;
        run(gameTestHelper: $GameTestHelper): void;
        "function"(): $Consumer<$GameTestHelper>;
        required(): boolean;
        rotation(): $Rotation;
        constructor(batchName: string, testName: string, structureName: string, maxTicks: number, setupTicks: number, arg5: boolean, required: $Consumer_<$GameTestHelper>);
        constructor(batchName: string, testName: string, structureName: string, rotation: $Rotation_, maxTicks: number, setupTicks: number, arg6: boolean, required: $Consumer_<$GameTestHelper>);
        constructor(arg0: string, arg1: string, arg2: string, arg3: $Rotation_, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: number, arg9: number, arg10: boolean, arg11: $Consumer_<$GameTestHelper>);
        get flaky(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TestFunction}.
     */
    export type $TestFunction_ = { rotation?: $Rotation_, testName?: string, manualOnly?: boolean, maxAttempts?: number, setupTicks?: number, function?: $Consumer_<$GameTestHelper>, required?: boolean, structureName?: string, maxTicks?: number, skyAccess?: boolean, batchName?: string, requiredSuccesses?: number,  } | [rotation?: $Rotation_, testName?: string, manualOnly?: boolean, maxAttempts?: number, setupTicks?: number, function?: $Consumer_<$GameTestHelper>, required?: boolean, structureName?: string, maxTicks?: number, skyAccess?: boolean, batchName?: string, requiredSuccesses?: number, ];
    export class $GameTestInfo {
        succeed(): void;
        getStructureBounds(): $AABB;
        setRunAtTickTime(tickTime: number, arg1: $Runnable_): void;
        getTimeoutTicks(): number;
        getStructureBlockPos(): $BlockPos;
        maxAttempts(): number;
        getStructureName(): string;
        placeStructure(): $GameTestInfo;
        getTestFunction(): $TestFunction;
        getTestName(): string;
        setNorthWestCorner(northWestCorner: $BlockPos_): void;
        prepareTestStructure(): $GameTestInfo;
        getStructureBlockEntity(): $StructureBlockEntity;
        startExecution(delay: number): $GameTestInfo;
        hasFailed(): boolean;
        hasStarted(): boolean;
        hasSucceeded(): boolean;
        requiredSuccesses(): number;
        getRunTime(): number;
        copyReset(): $GameTestInfo;
        retryOptions(): $RetryOptions;
        isFlaky(): boolean;
        handler$fkc000$sable$removeSublevels(arg0: $CallbackInfo, arg1: $AABB_): void;
        isDone(): boolean;
        fail(error: $Throwable): void;
        tick(runner: $GameTestRunner): void;
        getLevel(): $ServerLevel;
        getListeners(): $Stream<$GameTestListener>;
        addListener(listener: $GameTestListener): void;
        isRequired(): boolean;
        isOptional(): boolean;
        getRotation(): $Rotation;
        getError(): $Throwable;
        sequences: $Collection<$GameTestSequence>;
        constructor(testFunction: $TestFunction_, rotation: $Rotation_, level: $ServerLevel, retryOptions: $RetryOptions_);
        get structureBounds(): $AABB;
        get timeoutTicks(): number;
        get structureBlockPos(): $BlockPos;
        get structureName(): string;
        get testFunction(): $TestFunction;
        get testName(): string;
        set northWestCorner(value: $BlockPos_);
        get structureBlockEntity(): $StructureBlockEntity;
        get runTime(): number;
        get flaky(): boolean;
        get done(): boolean;
        get level(): $ServerLevel;
        get listeners(): $Stream<$GameTestListener>;
        get required(): boolean;
        get optional(): boolean;
        get rotation(): $Rotation;
        get error(): $Throwable;
    }
    export class $TestFunctionArgument implements $ArgumentType<$TestFunction> {
        static testFunctionArgument(): $TestFunctionArgument;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getTestFunction(context: $CommandContext<$CommandSourceStack>, argument: string): $TestFunction;
        static suggestTestFunction<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        getExamples(): $Collection<string>;
        parse(reader: $StringReader): $TestFunction;
        parse<S>(arg0: $StringReader, arg1: S): $TestFunction;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $GameTestGenerator implements $Annotation {
    }
    export class $StructureGridSpawner implements $GameTestRunner$StructureSpawner {
        onBatchStart(level: $ServerLevel): void;
        spawnStructure(gameTestInfo: $GameTestInfo): ($GameTestInfo) | undefined;
        constructor(northTestNorthWestCorner: $BlockPos_, testsPerRow: number, clearOnBatch: boolean);
    }
    export class $TestCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        static STRUCTURE_BLOCK_NEARBY_SEARCH_RADIUS: number;
        static STRUCTURE_BLOCK_FULL_SEARCH_RADIUS: number;
        constructor();
    }
    export class $GameTestRegistry {
        static isTestClass(className: string): boolean;
        static getAllTestClassNames(): $Collection<string>;
        static findTestFunction(testName: string): ($TestFunction) | undefined;
        static getTestFunction(testName: string): $TestFunction;
        static getAllTestFunctions(): $Collection<$TestFunction>;
        static getTestFunctionsForClassName(className: string): $Stream<$TestFunction>;
        static getBeforeBatchFunction(functionName: string): $Consumer<$ServerLevel>;
        static getAfterBatchFunction(functionName: string): $Consumer<$ServerLevel>;
        static getLastFailedTests(): $Stream<$TestFunction>;
        static rememberFailedTest(testFunction: $TestFunction_): void;
        static forgetFailedTests(): void;
        /**
         * @deprecated
         */
        static register(arg0: $Method, arg1: $Set_<string>): void;
        /**
         * @deprecated
         */
        static register(testClass: $Class<never>): void;
        /**
         * @deprecated
         */
        static register(testMethod: $Method): void;
        constructor();
        static get allTestClassNames(): $Collection<string>;
        static get allTestFunctions(): $Collection<$TestFunction>;
        static get lastFailedTests(): $Stream<$TestFunction>;
    }
    export class $GameTestBatch extends $Record {
        gameTestInfos(): $Collection<$GameTestInfo>;
        beforeBatchFunction(): $Consumer<$ServerLevel>;
        afterBatchFunction(): $Consumer<$ServerLevel>;
        name(): string;
        static DEFAULT_BATCH_NAME: string;
        constructor(name: string, gameTestInfos: $Collection_<$GameTestInfo>, beforeBatchFunction: $Consumer_<$ServerLevel>, afterBatchFunction: $Consumer_<$ServerLevel>);
    }
    /**
     * Values that may be interpreted as {@link $GameTestBatch}.
     */
    export type $GameTestBatch_ = { gameTestInfos?: $Collection_<$GameTestInfo>, afterBatchFunction?: $Consumer_<$ServerLevel>, name?: string, beforeBatchFunction?: $Consumer_<$ServerLevel>,  } | [gameTestInfos?: $Collection_<$GameTestInfo>, afterBatchFunction?: $Consumer_<$ServerLevel>, name?: string, beforeBatchFunction?: $Consumer_<$ServerLevel>, ];
    export class $GameTestHelper implements $GameTestHelperAccessor {
        succeed(): void;
        makeMockPlayer(gameType: $GameType_): $Player;
        assertItemEntityCountIs(item: $Item_, pos: $BlockPos_, expansionAmount: number, arg3: number): void;
        assertBlock(pos: $BlockPos_, predicate: $Predicate_<$Block>, exceptionMessage: $Supplier_<string>): void;
        assertBlock(pos: $BlockPos_, predicate: $Predicate_<$Block>, exceptionMessage: string): void;
        absoluteVec(relativeVec3: $Vec3_): $Vec3;
        forEveryBlockInStructure(consumer: $Consumer_<$BlockPos>): void;
        killAllEntities(): void;
        killAllEntitiesOfClass(entityClass: $Class<any>): void;
        findOneEntity<E extends $Entity>(type: $EntityType_<E>): E;
        findClosestEntity<E extends $Entity>(type: $EntityType_<E>, x: number, y: number, z: number, radius: number): E;
        spawnWithNoFreeWill<E extends $Mob>(type: $EntityType_<E>, pos: $BlockPos_): E;
        spawnWithNoFreeWill<E extends $Mob>(type: $EntityType_<E>, x: number, y: number, z: number): E;
        spawnWithNoFreeWill<E extends $Mob>(type: $EntityType_<E>, pos: $Vec3_): E;
        spawnWithNoFreeWill<E extends $Mob>(type: $EntityType_<E>, x: number, y: number, z: number): E;
        walkTo(mob: $Mob, pos: $BlockPos_, speed: number): $GameTestSequence;
        makeAboutToDrown(entity: $LivingEntity): $LivingEntity;
        withLowHealth(entity: $LivingEntity): $LivingEntity;
        /**
         * @deprecated
         */
        makeMockServerPlayerInLevel(): $ServerPlayer;
        pulseRedstone(pos: $BlockPos_, delay: number): void;
        setNight(): void;
        succeedWhenBlockPresent(block: $Block_, x: number, y: number, z: number): void;
        succeedWhenBlockPresent(block: $Block_, pos: $BlockPos_): void;
        assertBlockEntityData<T extends $BlockEntity>(pos: $BlockPos_, predicate: $Predicate_<T>, exceptionMessage: $Supplier_<string>): void;
        assertRedstoneSignal(pos: $BlockPos_, direction: $Direction_, signalStrengthPredicate: $IntPredicate_, exceptionMessage: $Supplier_<string>): void;
        assertEntityInstancePresent(entity: $Entity, pos: $BlockPos_): void;
        assertEntityInstancePresent(entity: $Entity, x: number, y: number, z: number): void;
        assertItemEntityNotPresent(item: $Item_, pos: $BlockPos_, radius: number): void;
        assertItemEntityNotPresent(item: $Item_): void;
        assertEntityTouching(type: $EntityType_<never>, x: number, arg2: number, y: number): void;
        assertEntityNotTouching(type: $EntityType_<never>, x: number, arg2: number, y: number): void;
        assertEntityData<E extends $Entity, T>(pos: $BlockPos_, type: $EntityType_<E>, entityDataGetter: $Function_<E, T>, testEntityData: T | null): void;
        assertEntityIsHolding<E extends $LivingEntity>(pos: $BlockPos_, entityType: $EntityType_<E>, item: $Item_): void;
        assertEntityInventoryContains<E extends $Entity>(pos: $BlockPos_, entityType: $EntityType_<E>, item: $Item_): void;
        assertSameBlockStates(boundingBox: $BoundingBox, pos: $BlockPos_): void;
        assertSameBlockState(testPos: $BlockPos_, comparisonPos: $BlockPos_): void;
        assertAtTickTimeContainerContains(tickTime: number, arg1: $BlockPos_, pos: $Item_): void;
        assertAtTickTimeContainerEmpty(tickTime: number, arg1: $BlockPos_): void;
        succeedWhenEntityData<E extends $Entity, T>(pos: $BlockPos_, type: $EntityType_<E>, entityDataGetter: $Function_<E, T>, testEntityData: T): void;
        assertEntityPosition(entity: $Entity, box: $AABB_, exceptionMessage: string): void;
        relativeVec(relativeVec3: $Vec3_): $Vec3;
        assertEntityProperty<E extends $Entity>(entity: E, predicate: $Predicate_<E>, name: string): void;
        assertEntityProperty<E extends $Entity, T>(entity: E, entityPropertyGetter: $Function_<E, T>, valueName: string, testEntityProperty: T): void;
        assertLivingEntityHasMobEffect(entity: $LivingEntity, effect: $Holder_<$MobEffect>, amplifier: number): void;
        succeedWhenEntityPresent(type: $EntityType_<never>, x: number, y: number, z: number): void;
        succeedWhenEntityPresent(type: $EntityType_<never>, pos: $BlockPos_): void;
        succeedWhenEntityNotPresent(type: $EntityType_<never>, x: number, y: number, z: number): void;
        succeedWhenEntityNotPresent(type: $EntityType_<never>, pos: $BlockPos_): void;
        succeedIf(criterion: $Runnable_): void;
        succeedOnTickWhen(tick: number, criterion: $Runnable_): void;
        failIf(criterion: $Runnable_): void;
        failIfEver(criterion: $Runnable_): void;
        getTestRotation(): $Rotation;
        assertValueEqual<N>(actual: N, expected: N, valueName: string): void;
        onEachTick(criterion: $Runnable_): void;
        pressButton(pos: $BlockPos_): void;
        pressButton(x: number, y: number, z: number): void;
        randomTick(pos: $BlockPos_): void;
        tickPrecipitation(): void;
        tickPrecipitation(pos: $BlockPos_): void;
        placeAt(player: $Player, stack: $ItemStack_, pos: $BlockPos_, direction: $Direction_): void;
        relativePos(pos: $BlockPos_): $BlockPos;
        useBlock(pos: $BlockPos_, player: $Player): void;
        useBlock(pos: $BlockPos_, player: $Player, result: $BlockHitResult): void;
        useBlock(pos: $BlockPos_): void;
        spawnItem(item: $Item_, x: number, y: number, z: number): $ItemEntity;
        spawnItem(item: $Item_, pos: $BlockPos_): $ItemEntity;
        spawnItem(item: $Item_, pos: $Vec3_): $ItemEntity;
        destroyBlock(pos: $BlockPos_): void;
        setDayTime(time: number): void;
        findEntities<E extends $Entity>(type: $EntityType_<E>, x: number, y: number, z: number, radius: number): $List<E>;
        findEntities<E extends $Entity>(type: $EntityType_<E>, pos: $Vec3_, radius: number): $List<E>;
        pullLever(pos: $BlockPos_): void;
        pullLever(x: number, y: number, z: number): void;
        succeedWhen(criterion: $Runnable_): void;
        runAtTickTime(delay: number, arg1: $Runnable_): void;
        assertBlockProperty<T extends $Comparable<T>>(pos: $BlockPos_, property: $Property<T>, predicate: $Predicate_<T>, exceptionMessage: string): void;
        assertBlockProperty<T extends $Comparable<T>>(pos: $BlockPos_, property: $Property<T>, value: T): void;
        assertBlockPresent(block: $Block_, pos: $BlockPos_): void;
        assertBlockPresent(block: $Block_, x: number, y: number, z: number): void;
        assertContainerContains(pos: $BlockPos_, item: $Item_): void;
        assertContainerEmpty(pos: $BlockPos_): void;
        assertEntitiesPresent(entityType: $EntityType_<never>, pos: $BlockPos_, count: number, radius: number): void;
        assertEntitiesPresent(entityType: $EntityType_<never>, count: number): void;
        assertEntityNotPresent(type: $EntityType_<never>, from: $Vec3_, to: $Vec3_): void;
        assertEntityNotPresent(type: $EntityType_<never>, pos: $BlockPos_): void;
        assertEntityNotPresent(type: $EntityType_<never>, x: number, y: number, z: number): void;
        assertEntityNotPresent(type: $EntityType_<never>): void;
        assertEntityPresent(type: $EntityType_<never>): void;
        assertEntityPresent(type: $EntityType_<never>, pos: $BlockPos_, expansionAmount: number): void;
        assertEntityPresent(type: $EntityType_<never>, pos: $BlockPos_): void;
        assertEntityPresent(type: $EntityType_<never>, x: number, y: number, z: number): void;
        assertEntityPresent(type: $EntityType_<never>, from: $Vec3_, to: $Vec3_): void;
        runAfterDelay(delay: number, arg1: $Runnable_): void;
        assertFalse(condition: boolean, failureMessage: string): void;
        assertBlockNotPresent(block: $Block_, pos: $BlockPos_): void;
        assertBlockNotPresent(block: $Block_, x: number, y: number, z: number): void;
        absolutePos(pos: $BlockPos_): $BlockPos;
        assertItemEntityPresent(item: $Item_): void;
        assertItemEntityPresent(item: $Item_, pos: $BlockPos_, radius: number): void;
        assertBlockState(pos: $BlockPos_, predicate: $Predicate_<$BlockState>, exceptionMessage: $Supplier_<string>): void;
        setBiome(biome: $ResourceKey_<$Biome>): void;
        getTick(): number;
        getEntities<T extends $Entity>(entityType: $EntityType_<T>): $List<T>;
        getEntities<T extends $Entity>(entityType: $EntityType_<T>, pos: $BlockPos_, radius: number): $List<T>;
        startSequence(): $GameTestSequence;
        getBounds(): $AABB;
        fail(exceptionMessage: string): void;
        fail(exceptionMessage: string, entity: $Entity): void;
        fail(exceptionMessage: string, pos: $BlockPos_): void;
        getLevel(): $ServerLevel;
        assertTrue(condition: boolean, failureMessage: string): void;
        getBlockState(pos: $BlockPos_): $BlockState;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_): T;
        spawn<E extends $Entity>(type: $EntityType_<E>, pos: $BlockPos_): E;
        spawn<E extends $Entity>(type: $EntityType_<E>, pos: $Vec3_): E;
        spawn<E extends $Entity>(type: $EntityType_<E>, x: number, y: number, z: number): E;
        spawn<E extends $Entity>(type: $EntityType_<E>, x: number, y: number, z: number): E;
        setBlock(x: number, y: number, z: number, block: $Block_): void;
        setBlock(x: number, y: number, z: number, state: $BlockState_): void;
        setBlock(pos: $BlockPos_, block: $Block_): void;
        setBlock(pos: $BlockPos_, state: $BlockState_): void;
        moveTo(mob: $Mob, x: number, y: number, z: number): void;
        getHeight(heightmapType: $Heightmap$Types_, x: number, z: number): number;
        getTestInfo(): $GameTestInfo;
        getFinalCheckAdded(): boolean;
        setFinalCheckAdded(arg0: boolean): void;
        testInfo: $GameTestInfo;
        constructor(testInfo: $GameTestInfo);
        get testRotation(): $Rotation;
        set dayTime(value: number);
        set biome(value: $ResourceKey_<$Biome>);
        get tick(): number;
        get bounds(): $AABB;
        get level(): $ServerLevel;
    }
    export class $LogTestReporter implements $TestReporter {
        onTestFailed(arg0: $GameTestInfo): void;
        onTestSuccess(arg0: $GameTestInfo): void;
        finish(): void;
        constructor();
    }
    /**
     * Annotate a method with this annotation in order to have it run before the specified `#batch()`.
     */
    export class $BeforeBatch implements $Annotation {
        batch(): string;
    }
    export class $GameTestAssertException extends $RuntimeException {
        constructor(exceptionMessage: string);
    }
    export class $GameTestTicker {
        setRunner(runner: $GameTestRunner): void;
        clear(): void;
        add(testInfo: $GameTestInfo): void;
        tick(): void;
        static SINGLETON: $GameTestTicker;
        set runner(value: $GameTestRunner);
    }
    export class $TestFunctionFinder {
    }
    export interface $TestFunctionFinder {
        findTestFunctions(): $Stream<$TestFunction>;
    }
    /**
     * Values that may be interpreted as {@link $TestFunctionFinder}.
     */
    export type $TestFunctionFinder_ = (() => $Stream<$TestFunction_>);
    export class $GameTestSequence {
        thenWaitUntil(expectedDelay: number, arg1: $Runnable_): $GameTestSequence;
        thenWaitUntil(task: $Runnable_): $GameTestSequence;
        thenSucceed(): void;
        thenExecuteAfter(tick: number, task: $Runnable_): $GameTestSequence;
        thenExecuteFor(tick: number, task: $Runnable_): $GameTestSequence;
        thenExecute(task: $Runnable_): $GameTestSequence;
        thenIdle(tick: number): $GameTestSequence;
        thenFail(exception: $Supplier_<$Exception>): void;
        thenTrigger(): $GameTestSequence$Condition;
        tickAndContinue(tick: number): void;
        tickAndFailIfNotComplete(tick: number): void;
        constructor(testInfo: $GameTestInfo);
    }
    export class $GameTestBatchFactory {
        static toGameTestInfo(testFunction: $TestFunction_, rotationSteps: number, level: $ServerLevel): $GameTestInfo;
        static fromGameTestInfo(maxTests: number): $GameTestRunner$GameTestBatcher;
        static fromGameTestInfo(): $GameTestRunner$GameTestBatcher;
        static fromTestFunction(testFunctions: $Collection_<$TestFunction_>, level: $ServerLevel): $Collection<$GameTestBatch>;
        static toGameTestBatch(gameTestInfos: $Collection_<$GameTestInfo>, functionName: string, index: number): $GameTestBatch;
        constructor();
    }
    export class $ExhaustedAttemptsException extends $Throwable {
    }
    export class $GameTestRunner {
        getTestInfos(): $List<$GameTestInfo>;
        rerunTest(test: $GameTestInfo): void;
        static clearMarkers(serverLevel: $ServerLevel): void;
        start(): void;
        stop(): void;
        addListener(listener: $GameTestBatchListener): void;
        static DEFAULT_TESTS_PER_ROW: number;
        get testInfos(): $List<$GameTestInfo>;
    }
    export class $GameTestRunner$GameTestBatcher {
    }
    export interface $GameTestRunner$GameTestBatcher {
        batch(infos: $Collection_<$GameTestInfo>): $Collection<$GameTestBatch>;
    }
    /**
     * Values that may be interpreted as {@link $GameTestRunner$GameTestBatcher}.
     */
    export type $GameTestRunner$GameTestBatcher_ = ((arg0: $Collection<$GameTestInfo>) => $Collection_<$GameTestBatch_>);
    export class $TestCommand$Runner {
        run(rotationSteps: number): number;
        run(rotationSteps: number, testsPerRow: number): number;
        run(retryOptions: $RetryOptions_, rotationSteps: number, testsPerRow: number): number;
        run(): number;
        run(retryOptions: $RetryOptions_): number;
        run(retryOptions: $RetryOptions_, rotationSteps: number): number;
        reset(): number;
        clear(): number;
        "export"(): number;
        locate(): number;
        constructor(finder: $TestFinder<$TestCommand$Runner>);
    }
    export class $GameTestSequence$Condition {
        assertTriggeredThisTick(): void;
        constructor(arg0: $GameTestSequence);
    }
}
