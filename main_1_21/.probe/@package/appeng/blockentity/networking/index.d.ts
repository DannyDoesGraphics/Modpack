import { $IAEPowerStorage } from "@package/appeng/api/networking/energy";
import { $Level } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $IPowerChannelState } from "@package/appeng/api/implementations";
import { $IGrid, $IGridNode } from "@package/appeng/api/networking";
import { $AccessRestriction, $PowerMultiplier_, $Actionable_ } from "@package/appeng/api/config";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $IWirelessAccessPoint } from "@package/appeng/api/implementations/blockentities";
import { $IPartItem, $IPart, $SelectedPart, $IFacadeContainer } from "@package/appeng/api/parts";
import { $AENetworkedBlockEntity, $AENetworkedInvBlockEntity, $AENetworkedPoweredBlockEntity } from "@package/appeng/blockentity/grid";
import { $AEColor_, $AECableType, $AECableType_, $AEColor, $DimensionalBlockPos } from "@package/appeng/api/util";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $IGridTickable, $TickRateModulation, $TickingRequest } from "@package/appeng/api/networking/ticking";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $CableBusContainer } from "@package/appeng/parts";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $BlockEntityRendererProvider$Context, $BlockEntityRenderer } from "@package/net/minecraft/client/renderer/blockentity";
import { $AEBaseBlockEntity } from "@package/appeng/blockentity";
import { $Vec3_, $AABB } from "@package/net/minecraft/world/phys";
import { $AEMultiBlockEntity } from "@package/appeng/helpers";
import { $BlockEntityType, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/appeng/blockentity/networking" {
    export class $CableBusTESR implements $BlockEntityRenderer<$CableBusBlockEntity> {
        getViewDistance(): number;
        render(arg0: $CableBusBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRenderOffScreen(arg0: $CableBusBlockEntity): boolean;
        shouldRender(arg0: $CableBusBlockEntity, arg1: $Vec3_): boolean;
        getRenderBoundingBox(arg0: $CableBusBlockEntity): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $ControllerBlockEntity extends $AENetworkedPoweredBlockEntity {
        updateState(): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $EnergyCellBlockEntity extends $AENetworkedBlockEntity implements $IAEPowerStorage, $IGridTickable {
        getTickingRequest(arg0: $IGridNode): $TickingRequest;
        tickingRequest(arg0: $IGridNode, arg1: number): $TickRateModulation;
        getAEMaxPower(): number;
        getPowerFlow(): $AccessRestriction;
        extractAEPower(arg0: number, arg1: $Actionable_, arg2: $PowerMultiplier_): number;
        isAEPublicPowerStorage(): boolean;
        getAECurrentPower(): number;
        injectAEPower(arg0: number, arg1: $Actionable_): number;
        static getStorageLevelFromFillFactor(arg0: number): number;
        getPriority(): number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get AEMaxPower(): number;
        get powerFlow(): $AccessRestriction;
        get AEPublicPowerStorage(): boolean;
        get AECurrentPower(): number;
        get priority(): number;
    }
    export class $CrystalResonanceGeneratorBlockEntity extends $AENetworkedBlockEntity {
        isSuppressed(): boolean;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get suppressed(): boolean;
    }
    export class $CableBusBlockEntity extends $AEBaseBlockEntity implements $AEMultiBlockEntity {
        notifyNeighbors(): void;
        clearContainer(): void;
        isInWorld(): boolean;
        getGridNode(arg0: $Direction_): $IGridNode;
        replacePart<T extends $IPart>(arg0: $IPartItem<T>, arg1: $Direction_, arg2: $Player, arg3: $InteractionHand_): T;
        markForSave(): void;
        getCableConnectionLength(arg0: $AECableType_): number;
        getCableConnectionType(arg0: $Direction_): $AECableType;
        getPart(arg0: $Direction_): $IPart;
        partChanged(): void;
        selectPartLocal(arg0: $Vec3_): $SelectedPart;
        getFacadeContainer(): $IFacadeContainer;
        canAddPart(arg0: $ItemStack_, arg1: $Direction_): boolean;
        addPart<T extends $IPart>(arg0: $IPartItem<T>, arg1: $Direction_, arg2: $Player): T;
        removePartFromSide(arg0: $Direction_): void;
        removePart(arg0: $IPart): boolean;
        hasRedstone(): boolean;
        notifyNeighborNow(arg0: $Direction_): void;
        recolourBlock(arg0: $Direction_, arg1: $AEColor_, arg2: $Player): boolean;
        getCableBus(): $CableBusContainer;
        isEmpty(): boolean;
        getLocation(): $DimensionalBlockPos;
        cleanup(): void;
        getColor(): $AEColor;
        isBlocked(arg0: $Direction_): boolean;
        getCollisionShape(arg0: $CollisionContext): $VoxelShape;
        selectPartWorld(arg0: $Vec3_): $SelectedPart;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get inWorld(): boolean;
        get facadeContainer(): $IFacadeContainer;
        get cableBus(): $CableBusContainer;
        get empty(): boolean;
        get location(): $DimensionalBlockPos;
        get color(): $AEColor;
    }
    export class $CreativeEnergyCellBlockEntity extends $AENetworkedBlockEntity implements $IAEPowerStorage {
        getAEMaxPower(): number;
        getPowerFlow(): $AccessRestriction;
        extractAEPower(arg0: number, arg1: $Actionable_, arg2: $PowerMultiplier_): number;
        isAEPublicPowerStorage(): boolean;
        getAECurrentPower(): number;
        injectAEPower(arg0: number, arg1: $Actionable_): number;
        getPriority(): number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get AEMaxPower(): number;
        get powerFlow(): $AccessRestriction;
        get AEPublicPowerStorage(): boolean;
        get AECurrentPower(): number;
        get priority(): number;
    }
    export class $EnergyAcceptorBlockEntity extends $AENetworkedPoweredBlockEntity {
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $WirelessAccessPointBlockEntity extends $AENetworkedInvBlockEntity implements $IWirelessAccessPoint, $IPowerChannelState {
        isPowered(): boolean;
        getGrid(): $IGrid;
        getClientFlags(): number;
        getRange(): number;
        getLocation(): $DimensionalBlockPos;
        isActive(): boolean;
        level: $Level;
        static POWERED_FLAG: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static CHANNEL_FLAG: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get powered(): boolean;
        get grid(): $IGrid;
        get clientFlags(): number;
        get range(): number;
        get location(): $DimensionalBlockPos;
        get active(): boolean;
    }
}
