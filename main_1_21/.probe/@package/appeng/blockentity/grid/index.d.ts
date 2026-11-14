import { $Level } from "@package/net/minecraft/world/level";
import { $BlockOrientation_ } from "@package/appeng/api/orientation";
import { $IGridNode, $IGridNodeListener$State_, $IGrid, $IManagedGridNode } from "@package/appeng/api/networking";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Set } from "@package/java/util";
import { $ICrankable } from "@package/appeng/api/implementations/blockentities";
import { $AECableType } from "@package/appeng/api/util";
import { $IGridConnectedBlockEntity } from "@package/appeng/me/helpers";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $AEBaseInvBlockEntity, $AEBaseBlockEntity } from "@package/appeng/blockentity";
import { $AEBasePoweredBlockEntity } from "@package/appeng/blockentity/powersink";
import { $BlockEntityType_, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/appeng/blockentity/grid" {
    export class $AENetworkedBlockEntity extends $AEBaseBlockEntity implements $IGridConnectedBlockEntity {
        getMainNode(): $IManagedGridNode;
        getCableConnectionType(arg0: $Direction_): $AECableType;
        getGridNode(arg0: $Direction_): $IGridNode;
        getGridNode(): $IGridNode;
        onMainNodeStateChanged(arg0: $IGridNodeListener$State_): void;
        getActionableNode(): $IGridNode;
        getGridConnectableSides(arg0: $BlockOrientation_): $Set<$Direction>;
        ifGridPresent(arg0: $Consumer_<$IGrid>): boolean;
        setOwner(arg0: $Player): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get mainNode(): $IManagedGridNode;
        get actionableNode(): $IGridNode;
        set owner(value: $Player);
    }
    export class $AENetworkedPoweredBlockEntity extends $AEBasePoweredBlockEntity implements $IGridConnectedBlockEntity {
        getMainNode(): $IManagedGridNode;
        getCableConnectionType(arg0: $Direction_): $AECableType;
        getGridNode(arg0: $Direction_): $IGridNode;
        getGridNode(): $IGridNode;
        onMainNodeStateChanged(arg0: $IGridNodeListener$State_): void;
        getActionableNode(): $IGridNode;
        getGridConnectableSides(arg0: $BlockOrientation_): $Set<$Direction>;
        ifGridPresent(arg0: $Consumer_<$IGrid>): boolean;
        setOwner(arg0: $Player): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get mainNode(): $IManagedGridNode;
        get actionableNode(): $IGridNode;
        set owner(value: $Player);
    }
    export class $AENetworkedInvBlockEntity extends $AEBaseInvBlockEntity implements $IGridConnectedBlockEntity {
        getMainNode(): $IManagedGridNode;
        getGridNode(arg0: $Direction_): $IGridNode;
        getGridNode(): $IGridNode;
        onMainNodeStateChanged(arg0: $IGridNodeListener$State_): void;
        getActionableNode(): $IGridNode;
        getGridConnectableSides(arg0: $BlockOrientation_): $Set<$Direction>;
        ifGridPresent(arg0: $Consumer_<$IGrid>): boolean;
        setOwner(arg0: $Player): void;
        getCableConnectionType(arg0: $Direction_): $AECableType;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get mainNode(): $IManagedGridNode;
        get actionableNode(): $IGridNode;
        set owner(value: $Player);
    }
    export class $AENetworkedPoweredBlockEntity$Crankable implements $ICrankable {
        canTurn(): boolean;
        applyTurn(): void;
        constructor(arg0: $AENetworkedPoweredBlockEntity);
    }
}
