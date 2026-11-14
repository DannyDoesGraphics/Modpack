import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Annotation } from "@package/java/lang/annotation";
import { $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $EntityType_, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $RegisterGameTestsEvent } from "@package/net/neoforged/neoforge/event";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $List, $Map, $List_, $Collection } from "@package/java/util";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $TestFunction, $GameTestInfo, $GameTestHelper } from "@package/net/minecraft/gametest/framework";
import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Object2LongMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $Method } from "@package/java/lang/reflect";
import { $Runnable_, $Class } from "@package/java/lang";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BrassTunnelBlockEntity$SelectionMode_ } from "@package/com/simibubi/create/content/logistics/tunnel";
export * as tests from "@package/com/simibubi/create/infrastructure/gametest/tests";

declare module "@package/com/simibubi/create/infrastructure/gametest" {
    export class $CreateTestFunction {
        static getTestsFrom(...arg0: $Class<never>[]): $Collection<$TestFunction>;
        static run(arg0: string, arg1: $Consumer_<$GameTestHelper>): $Consumer<$GameTestHelper>;
        static of(arg0: $Method): $TestFunction;
        simpleName: string;
        fullName: string;
        testFunction: $TestFunction;
        static NAMES_TO_FUNCTIONS: $Map<string, $CreateTestFunction>;
    }
    export class $CreateGameTests {
        static generateTests(): $Collection<$TestFunction>;
        static registerTests(arg0: $RegisterGameTestsEvent): void;
        constructor();
    }
    export class $CreateGameTestHelper extends $GameTestHelper {
        spawnItem(arg0: $BlockPos_, arg1: $ItemStack_): $ItemEntity;
        getBehavior<T extends $BlockEntityBehaviour>(arg0: $BlockPos_, arg1: $BehaviourType<T>): T;
        spawnItems(arg0: $BlockPos_, arg1: $Item_, arg2: number): void;
        getItemContent(arg0: $BlockPos_): $Object2LongMap<$Item>;
        getTankContents(arg0: $BlockPos_): $FluidStack;
        whenSecondsPassed(arg0: number, arg1: $Runnable_): void;
        assertContainerContains(arg0: $BlockPos_, arg1: $ItemLike_): void;
        assertContainerContains(arg0: $BlockPos_, arg1: $ItemStack_): void;
        assertSecondsPassed(arg0: number): void;
        getFirstEntity<T extends $Entity>(arg0: $EntityType_<T>, arg1: $BlockPos_): T;
        toggleActorsOfType(arg0: $Contraption, arg1: $ItemLike_): void;
        getFluidInTanks(...arg0: $BlockPos_[]): number;
        flipBlock(arg0: $BlockPos_): void;
        itemStorageAt(arg0: $BlockPos_): $IItemHandler;
        assertSpeedometerSpeed(arg0: $BlockPos_, arg1: number): void;
        assertStressometerCapacity(arg0: $BlockPos_, arg1: number): void;
        assertTanksEmpty(...arg0: $BlockPos_[]): void;
        assertCloseEnoughTo(arg0: number, arg1: number): void;
        fluidStorageAt(arg0: $BlockPos_): $IFluidHandler;
        getTotalItems(arg0: $BlockPos_): number;
        assertNixiePower(arg0: $BlockPos_, arg1: number): void;
        assertFluidPresent(arg0: $FluidStack_, arg1: $BlockPos_): void;
        powerLever(arg0: $BlockPos_): void;
        assertTankEmpty(arg0: $BlockPos_): void;
        assertContentPresent(arg0: $Object2LongMap<$Item_>, arg1: $BlockPos_): void;
        assertAnyContained(arg0: $BlockPos_, ...arg1: $Item_[]): void;
        getEntitiesBetween<T extends $Entity>(arg0: $EntityType_<T>, arg1: $BlockPos_, arg2: $BlockPos_): $List<T>;
        unpowerLever(arg0: $BlockPos_): void;
        secondsPassed(): number;
        setTunnelMode(arg0: $BlockPos_, arg1: $BrassTunnelBlockEntity$SelectionMode_): void;
        getTankCapacity(arg0: $BlockPos_): number;
        assertInRange(arg0: number, arg1: number, arg2: number): void;
        getControllerBlockEntity<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockPos_): T;
        assertContainersEmpty(arg0: $List_<$BlockPos_>): void;
        static of(arg0: $GameTestHelper): $CreateGameTestHelper;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockPos_): T;
        static FIFTEEN_SECONDS: number;
        testInfo: $GameTestInfo;
        static TEN_SECONDS: number;
        static THIRTY_SECONDS: number;
        static TICKS_PER_SECOND: number;
        static TWENTY_SECONDS: number;
    }
    export class $GameTestGroup implements $Annotation {
        namespace(): string;
        path(): string;
    }
}
