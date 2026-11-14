import { $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $RelativeMovement_, $Entity } from "@package/net/minecraft/world/entity";
import { $SignalBlockEntity$SignalState_ } from "@package/com/simibubi/create/content/trains/signal";
import { $ServerboundMovePlayerPacket$PosRot } from "@package/net/minecraft/network/protocol/game";
import { $BogeyStyle, $BogeySizes$BogeySize_ } from "@package/com/simibubi/create/content/trains/bogey";
import { $Minecraft } from "@package/net/minecraft/client";
import { $TrackCouplerBlockEntity } from "@package/com/railwayteam/railways/content/coupling/coupler";
import { $UUID, $UUID_, $Set_ } from "@package/java/util";
import { $Train, $CarriageContraptionEntity } from "@package/com/simibubi/create/content/trains/entity";
import { $MinecartJukebox } from "@package/com/railwayteam/railways/content/minecarts";
import { $ConductorEntity } from "@package/com/railwayteam/railways/content/conductor";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $C2SPacket, $S2CPacket } from "@package/com/railwayteam/railways/multiloader";
import { $TrackSwitchBlock$SwitchState_ } from "@package/com/railwayteam/railways/content/switches";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";

declare module "@package/com/railwayteam/railways/util/packet" {
    export class $SplitTrainEndPacket implements $S2CPacket {
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $Minecraft): void;
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: number, arg3: boolean);
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $ChopTrainEndPacket implements $S2CPacket {
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $Minecraft): void;
        constructor(arg0: $Train, arg1: number, arg2: boolean);
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $ConfigureDevCapeC2SPacket extends $Record implements $C2SPacket {
        useDevCape(): boolean;
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $ServerPlayer): void;
        constructor(arg0: $FriendlyByteBuf);
        constructor(useDevCape: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ConfigureDevCapeC2SPacket}.
     */
    export type $ConfigureDevCapeC2SPacket_ = { useDevCape?: boolean,  } | [useDevCape?: boolean, ];
    export class $ShadowTrainRestorePacket implements $S2CPacket {
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $Minecraft): void;
        constructor(arg0: $UUID_);
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $BogeyStyleSelectionPacket implements $C2SPacket {
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $ServerPlayer): void;
        constructor(arg0: $FriendlyByteBuf);
        constructor(arg0: $BogeyStyle, arg1: $BogeySizes$BogeySize_);
        constructor(arg0: $BogeyStyle);
    }
    export class $CameraMovePacket implements $C2SPacket, $S2CPacket {
        static teleport(arg0: $ServerPlayer, arg1: $ConductorEntity, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static teleport(arg0: $ServerPlayer, arg1: $ConductorEntity, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $Set_<$RelativeMovement_>, arg8: boolean): void;
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $Minecraft): void;
        handle(arg0: $ServerPlayer): void;
        constructor(arg0: $ConductorEntity, arg1: $ServerboundMovePlayerPacket$PosRot);
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $PacketSender {
        static notifyServerVersion(arg0: $ServerPlayer): void;
        static updateJukeboxClientside(arg0: $MinecartJukebox, arg1: $ItemStack_): void;
        static syncMountedToolboxNBT(arg0: $Entity, arg1: $CompoundTag_): void;
        constructor();
    }
    export class $OverridableSignalPacket implements $S2CPacket {
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $Minecraft): void;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $SignalBlockEntity$SignalState_, arg3: number, arg4: boolean);
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $AddTrainEndPacket implements $S2CPacket {
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $Minecraft): void;
        constructor(arg0: $Train, arg1: $Train, arg2: number, arg3: boolean);
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $HonkTrainPacket implements $C2SPacket {
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $ServerPlayer): void;
        constructor(arg0: $UUID_, arg1: boolean);
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $DismountCameraPacket implements $C2SPacket {
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $ServerPlayer): void;
        constructor();
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $TagCycleSelectionPacket implements $C2SPacket {
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $ServerPlayer): void;
        constructor(arg0: $Item_);
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $SetCameraViewPacket implements $S2CPacket {
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $Minecraft): void;
        constructor(arg0: $Entity);
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $ConfigureDevCapeS2CPacket extends $Record implements $S2CPacket {
        useDevCape(): boolean;
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $Minecraft): void;
        uuid(): $UUID;
        constructor(arg0: $FriendlyByteBuf);
        constructor(uuid: $UUID_, useDevCape: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ConfigureDevCapeS2CPacket}.
     */
    export type $ConfigureDevCapeS2CPacket_ = { uuid?: $UUID_, useDevCape?: boolean,  } | [uuid?: $UUID_, useDevCape?: boolean, ];
    export class $CameraMovePacketOld implements $C2SPacket {
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $ServerPlayer): void;
        constructor(arg0: $ConductorEntity, arg1: number, arg2: number);
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $InitializeTrainCarriagesPacket implements $S2CPacket {
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $Minecraft): void;
        constructor(arg0: $Train);
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $SwitchDataUpdatePacket implements $S2CPacket {
        static clear(): $SwitchDataUpdatePacket;
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $Minecraft): void;
        constructor(arg0: $FriendlyByteBuf);
        constructor(arg0: $TrackSwitchBlock$SwitchState_, arg1: boolean, arg2: boolean, arg3: boolean);
    }
    export class $ModVersionPacket extends $Record implements $S2CPacket {
        version(): string;
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $Minecraft): void;
        constructor(arg0: $FriendlyByteBuf);
        constructor(version: string);
    }
    /**
     * Values that may be interpreted as {@link $ModVersionPacket}.
     */
    export type $ModVersionPacket_ = { version?: string,  } | [version?: string, ];
    export class $MountedToolboxSyncPacket implements $S2CPacket {
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $Minecraft): void;
        constructor(arg0: $Entity, arg1: $CompoundTag_);
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $JukeboxCartPacket implements $S2CPacket {
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $Minecraft): void;
        constructor(arg0: $Entity, arg1: $ItemStack_);
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $StationLimitPacket implements $C2SPacket {
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $ServerPlayer): void;
        constructor(arg0: $BlockPos_, arg1: boolean);
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $SpyConductorInteractPacket implements $C2SPacket {
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $ServerPlayer): void;
        constructor(arg0: $BlockPos_);
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $CarriageContraptionEntityUpdatePacket implements $S2CPacket {
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $Minecraft): void;
        constructor(arg0: $CarriageContraptionEntity, arg1: $Train);
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $CurvedTrackHandcarPlacementPacket implements $C2SPacket {
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $ServerPlayer): void;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: number, arg3: boolean, arg4: number);
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $CameraMovePacket$MoveData {
    }
    export class $TrackCouplerClientInfoPacket implements $S2CPacket {
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $Minecraft): void;
        constructor(arg0: $TrackCouplerBlockEntity);
        constructor(arg0: $FriendlyByteBuf);
    }
}
