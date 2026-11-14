import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos, $BlockPos_, $Direction_, $Holder$Reference, $Direction } from "@package/net/minecraft/core";
import { $IBlockExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $StructureTemplate$StructureBlockInfo_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Collection_ } from "@package/java/util";
import { $Enum } from "@package/java/lang";
export * as train from "@package/com/simibubi/create/api/contraption/train";
export * as storage from "@package/com/simibubi/create/api/contraption/storage";
export * as dispenser from "@package/com/simibubi/create/api/contraption/dispenser";
export * as transformable from "@package/com/simibubi/create/api/contraption/transformable";

declare module "@package/com/simibubi/create/api/contraption" {
    export class $ContraptionMovementSetting$MovementSettingProvider {
    }
    export interface $ContraptionMovementSetting$MovementSettingProvider extends $IBlockExtension {
        getContraptionMovementSetting(): $ContraptionMovementSetting;
        get contraptionMovementSetting(): $ContraptionMovementSetting;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionMovementSetting$MovementSettingProvider}.
     */
    export type $ContraptionMovementSetting$MovementSettingProvider_ = (() => $ContraptionMovementSetting_);
    export class $ContraptionMovementSetting extends $Enum<$ContraptionMovementSetting> {
        static isNoPickup(arg0: $Collection_<$StructureTemplate$StructureBlockInfo_>): boolean;
        static anyAre(arg0: $Collection_<$StructureTemplate$StructureBlockInfo_>, arg1: $ContraptionMovementSetting_): boolean;
        static get(arg0: $Block_): $ContraptionMovementSetting;
        static get(arg0: $BlockState_): $ContraptionMovementSetting;
        static values(): $ContraptionMovementSetting[];
        static valueOf(arg0: string): $ContraptionMovementSetting;
        static NO_PICKUP: $ContraptionMovementSetting;
        static MOVABLE: $ContraptionMovementSetting;
        static UNMOVABLE: $ContraptionMovementSetting;
        static REGISTRY: $SimpleRegistry<$Block, $Supplier<$ContraptionMovementSetting>>;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionMovementSetting}.
     */
    export type $ContraptionMovementSetting_ = "movable" | "no_pickup" | "unmovable";
    export class $ContraptionType {
        is(arg0: $TagKey_<$ContraptionType>): boolean;
        static fromType(arg0: string): $Contraption;
        factory: $Supplier<$Contraption>;
        holder: $Holder$Reference<$ContraptionType>;
        constructor(arg0: $Supplier_<$Contraption>);
    }
    /**
     * Values that may be interpreted as {@link $ContraptionType}.
     */
    export type $ContraptionType_ = RegistryTypes.CreateContraptionType;
    export class $BlockMovementChecks$AttachedCheck {
    }
    export interface $BlockMovementChecks$AttachedCheck {
        isBlockAttachedTowards(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Direction_): $BlockMovementChecks$CheckResult;
    }
    /**
     * Values that may be interpreted as {@link $BlockMovementChecks$AttachedCheck}.
     */
    export type $BlockMovementChecks$AttachedCheck_ = ((arg0: $BlockState, arg1: $Level, arg2: $BlockPos, arg3: $Direction) => $BlockMovementChecks$CheckResult_);
    export class $BlockMovementChecks$CheckResult extends $Enum<$BlockMovementChecks$CheckResult> {
        static values(): $BlockMovementChecks$CheckResult[];
        static valueOf(arg0: string): $BlockMovementChecks$CheckResult;
        static of(arg0: boolean): $BlockMovementChecks$CheckResult;
        static of(arg0: boolean): $BlockMovementChecks$CheckResult;
        toBoolean(): boolean;
        static SUCCESS: $BlockMovementChecks$CheckResult;
        static PASS: $BlockMovementChecks$CheckResult;
        static FAIL: $BlockMovementChecks$CheckResult;
    }
    /**
     * Values that may be interpreted as {@link $BlockMovementChecks$CheckResult}.
     */
    export type $BlockMovementChecks$CheckResult_ = "success" | "fail" | "pass";
    export class $BlockMovementChecks$MovementNecessaryCheck {
    }
    export interface $BlockMovementChecks$MovementNecessaryCheck {
        isMovementNecessary(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): $BlockMovementChecks$CheckResult;
    }
    /**
     * Values that may be interpreted as {@link $BlockMovementChecks$MovementNecessaryCheck}.
     */
    export type $BlockMovementChecks$MovementNecessaryCheck_ = ((arg0: $BlockState, arg1: $Level, arg2: $BlockPos) => $BlockMovementChecks$CheckResult_);
    export interface $ContraptionType extends RegistryMarked<RegistryTypes.CreateContraptionTypeTag, RegistryTypes.CreateContraptionType> {}
    export class $BlockMovementChecks {
        static registerMovementAllowedCheck(arg0: $BlockMovementChecks$MovementAllowedCheck_): void;
        static registerNotSupportiveCheck(arg0: $BlockMovementChecks$NotSupportiveCheck_): void;
        static isMovementNecessary(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): boolean;
        static isMovementAllowed(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): boolean;
        static isNotSupportive(arg0: $BlockState_, arg1: $Direction_): boolean;
        static registerMovementNecessaryCheck(arg0: $BlockMovementChecks$MovementNecessaryCheck_): void;
        static isBrittle(arg0: $BlockState_): boolean;
        static registerBrittleCheck(arg0: $BlockMovementChecks$BrittleCheck_): void;
        static isBlockAttachedTowards(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Direction_): boolean;
        static registerAttachedCheck(arg0: $BlockMovementChecks$AttachedCheck_): void;
    }
    export class $BlockMovementChecks$MovementAllowedCheck {
    }
    export interface $BlockMovementChecks$MovementAllowedCheck {
        isMovementAllowed(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): $BlockMovementChecks$CheckResult;
    }
    /**
     * Values that may be interpreted as {@link $BlockMovementChecks$MovementAllowedCheck}.
     */
    export type $BlockMovementChecks$MovementAllowedCheck_ = ((arg0: $BlockState, arg1: $Level, arg2: $BlockPos) => $BlockMovementChecks$CheckResult_);
    export class $BlockMovementChecks$BrittleCheck {
    }
    export interface $BlockMovementChecks$BrittleCheck {
        isBrittle(arg0: $BlockState_): $BlockMovementChecks$CheckResult;
    }
    /**
     * Values that may be interpreted as {@link $BlockMovementChecks$BrittleCheck}.
     */
    export type $BlockMovementChecks$BrittleCheck_ = ((arg0: $BlockState) => $BlockMovementChecks$CheckResult_);
    export class $BlockMovementChecks$NotSupportiveCheck {
    }
    export interface $BlockMovementChecks$NotSupportiveCheck {
        isNotSupportive(arg0: $BlockState_, arg1: $Direction_): $BlockMovementChecks$CheckResult;
    }
    /**
     * Values that may be interpreted as {@link $BlockMovementChecks$NotSupportiveCheck}.
     */
    export type $BlockMovementChecks$NotSupportiveCheck_ = ((arg0: $BlockState, arg1: $Direction) => $BlockMovementChecks$CheckResult_);
}
