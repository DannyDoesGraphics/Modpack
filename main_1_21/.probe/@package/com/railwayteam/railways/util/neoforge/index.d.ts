import { $LevelReader } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockEntry } from "@package/com/tterrag/registrate/util/entry";
import { $ConductorEntity } from "@package/com/railwayteam/railways/content/conductor";
import { $RegistrationListening$Listener_ } from "@package/com/railwayteam/railways/util";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $MountedFluidStorageType_ } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $Path } from "@package/java/nio/file";
import { $InterModEnqueueEvent } from "@package/net/neoforged/fml/event/lifecycle";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SoundType } from "@package/net/minecraft/world/level/block";
import { $EnderMan } from "@package/net/minecraft/world/entity/monster";
import { $Object } from "@package/java/lang";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/railwayteam/railways/util/neoforge" {
    export class $RegistrationListeningImpl {
        static afterRegistration(arg0: $InterModEnqueueEvent): void;
        static addListener<T>(arg0: $RegistrationListening$Listener_<T>): void;
        constructor();
    }
    export class $BlockStateUtilsImpl {
        static getSoundType(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity): $SoundType;
        constructor();
    }
    export class $FluidUtilsImpl {
        static getFluid(arg0: $Object): $Fluid;
        static canUseAsFuelStorage(arg0: $BlockEntity): boolean;
        constructor();
    }
    export class $AbstractionUtilsImpl {
        static portableFuelInterfaceBlockHasState(arg0: $BlockState_): boolean;
        static isInstanceOfFuelTankMountedStorageType(arg0: $MountedFluidStorageType_<never>): boolean;
        static getFluidTankBlockEntry(): $BlockEntry<never>;
        static getPortableFuelInterfaceBlockEntry(): $BlockEntry<never>;
        static isInstanceOfFuelTankBlockEntity(arg0: $BlockEntity): boolean;
        constructor();
        static get fluidTankBlockEntry(): $BlockEntry<never>;
        static get portableFuelInterfaceBlockEntry(): $BlockEntry<never>;
    }
    export class $ItemUtilsImpl {
        static blocksEndermanView(arg0: $ItemStack_, arg1: $Player, arg2: $EnderMan): boolean;
        constructor();
    }
    export class $EntityUtilsImpl {
        static getReachDistance(arg0: $Player): number;
        static handleUseEvent(arg0: $Player, arg1: $InteractionHand_, arg2: $BlockHitResult): boolean;
        static createConductorFakePlayer(arg0: $ServerLevel, arg1: $ConductorEntity): $ServerPlayer;
        static givePlayerItem(arg0: $Player, arg1: $ItemStack_): void;
        static getPersistentData(arg0: $Entity): $CompoundTag;
        constructor();
    }
    export class $UtilsImpl {
        static modsDir(): $Path;
        static isDevEnv(): boolean;
        static sendCreatePacketToServer(arg0: $Object): void;
        static sendHonkPacket(arg0: $Train, arg1: boolean): void;
        static configDir(): $Path;
        constructor();
        static get devEnv(): boolean;
    }
}
