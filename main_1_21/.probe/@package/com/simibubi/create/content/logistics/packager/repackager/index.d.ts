import { $Level } from "@package/net/minecraft/world/level";
import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $List } from "@package/java/util";
import { $BigItemStack } from "@package/com/simibubi/create/content/logistics";
import { $RandomSource } from "@package/net/minecraft/util";
import { $PackagerBlockEntity, $PackagerBlock, $PackagerItemHandler } from "@package/com/simibubi/create/content/logistics/packager";
import { $BlockPos_, $IdMapper } from "@package/net/minecraft/core";
import { $BooleanProperty, $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $InvManipulationBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/inventory";
import { $WrenchableDirectionalBlock } from "@package/com/simibubi/create/foundation/block";
import { $BlockEntityType_, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/logistics/packager/repackager" {
    export class $RepackagerBlockEntity extends $PackagerBlockEntity {
        targetInventory: $InvManipulationBehaviour;
        level: $Level;
        previouslyUnwrapped: $ItemStack;
        queuedExitingPackages: $List<$BigItemStack>;
        customComputerAddress: string;
        static ATTACHMENTS_NBT_KEY: string;
        buttonCooldown: number;
        inventory: $PackagerItemHandler;
        animationTicks: number;
        computerBehaviour: $AbstractComputerBehaviour;
        hasCustomComputerAddress: boolean;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        redstonePowered: boolean;
        repackageHelper: $PackageRepackageHelper;
        heldBox: $ItemStack;
        signBasedAddress: string;
        animationInward: boolean;
        static CYCLE: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $RepackagerBlock extends $PackagerBlock {
        static LINKED: $BooleanProperty;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$WrenchableDirectionalBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $PackageRepackageHelper {
        isFragmented(arg0: $ItemStack_): boolean;
        addPackageFragment(arg0: $ItemStack_): number;
        repack(arg0: number, arg1: $RandomSource): $List<$BigItemStack>;
        clear(): void;
        constructor();
    }
}
