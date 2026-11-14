import { $Level, $LevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $DyeColor_, $ItemStack_, $ItemStack, $DyeColor } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Setting } from "@package/appeng/api/config";
import { $List, $Map_, $Map, $Set, $List_ } from "@package/java/util";
import { $AEKeyType, $AEKeyType_ } from "@package/appeng/api/stacks";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Predicate, $Predicate_, $Supplier_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Runnable_, $Enum, $RuntimeException } from "@package/java/lang";
import { $AABB_, $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/api/util" {
    export class $AEAxisAlignedBB {
        static fromBounds(arg0: $AABB_): $AEAxisAlignedBB;
        static fromBounds(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $AEAxisAlignedBB;
        getBoundingBox(): $AABB;
        minY: number;
        minX: number;
        maxZ: number;
        maxY: number;
        maxX: number;
        minZ: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        get boundingBox(): $AABB;
    }
    export class $AECableType extends $Enum<$AECableType> {
        isDense(): boolean;
        isSmart(): boolean;
        size(): $AECableSize;
        static values(): $AECableType[];
        static min(arg0: $AECableType_, arg1: $AECableType_): $AECableType;
        static max(arg0: $AECableType_, arg1: $AECableType_): $AECableType;
        static valueOf(arg0: string): $AECableType;
        isValid(): boolean;
        variant(): $AECableVariant;
        static GLASS: $AECableType;
        static VALIDCABLES: $AECableType[];
        static COVERED: $AECableType;
        static NONE: $AECableType;
        static SMART: $AECableType;
        static DENSE_COVERED: $AECableType;
        static DENSE_SMART: $AECableType;
        get dense(): boolean;
        get smart(): boolean;
        get valid(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AECableType}.
     */
    export type $AECableType_ = "none" | "glass" | "covered" | "smart" | "dense_covered" | "dense_smart";
    export class $IConfigManagerListener {
    }
    export interface $IConfigManagerListener {
        onSettingChanged(arg0: $IConfigManager, arg1: $Setting<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $IConfigManagerListener}.
     */
    export type $IConfigManagerListener_ = ((arg0: $IConfigManager, arg1: $Setting<never>) => void);
    export class $UnsupportedSettingException extends $RuntimeException {
        constructor(arg0: string);
    }
    export class $DimensionalBlockPos {
        getPos(): $BlockPos;
        isInWorld(arg0: $LevelAccessor): boolean;
        getLevel(): $Level;
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $DimensionalBlockPos);
        constructor(arg0: $BlockEntity);
        constructor(arg0: $Level_, arg1: $BlockPos_);
        get pos(): $BlockPos;
        get level(): $Level;
    }
    export class $KeyTypeSelection$Listener {
    }
    export interface $KeyTypeSelection$Listener {
        onKeyTypeSelectionChanged(arg0: $KeyTypeSelection): void;
    }
    /**
     * Values that may be interpreted as {@link $KeyTypeSelection$Listener}.
     */
    export type $KeyTypeSelection$Listener_ = ((arg0: $KeyTypeSelection) => void);
    export class $IConfigManager {
        static builder(arg0: $IConfigManagerListener_): $IConfigManagerBuilder;
        static builder(arg0: $ItemStack_): $IConfigManagerBuilder;
        static builder(arg0: $Supplier_<$ItemStack>): $IConfigManagerBuilder;
        static builder(arg0: $Runnable_): $IConfigManagerBuilder;
    }
    export interface $IConfigManager {
        exportSettings(): $Map<string, string>;
        importSettings(arg0: $Map_<string, string>): boolean;
        hasSetting(arg0: $Setting<never>): boolean;
        putSetting<T extends $Enum<T>>(arg0: $Setting<T>, arg1: T): void;
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): boolean;
        getSetting<T extends $Enum<T>>(arg0: $Setting<T>): T;
        getSettings(): $Set<$Setting<never>>;
        get settings(): $Set<$Setting<never>>;
    }
    export class $IConfigManagerBuilder {
    }
    export interface $IConfigManagerBuilder {
        registerSetting<T extends $Enum<T>>(arg0: $Setting<T>, arg1: T): $IConfigManagerBuilder;
        build(): $IConfigManager;
    }
    export class $AECableSize extends $Enum<$AECableSize> {
        static values(): $AECableSize[];
        static min(arg0: $AECableSize_, arg1: $AECableSize_): $AECableSize;
        static max(arg0: $AECableSize_, arg1: $AECableSize_): $AECableSize;
        static valueOf(arg0: string): $AECableSize;
        static DENSE: $AECableSize;
        static NONE: $AECableSize;
        static NORMAL: $AECableSize;
    }
    /**
     * Values that may be interpreted as {@link $AECableSize}.
     */
    export type $AECableSize_ = "none" | "normal" | "dense";
    export class $INetworkToolAware {
    }
    export interface $INetworkToolAware {
        showNetworkInfo(arg0: $UseOnContext): boolean;
    }
    /**
     * Values that may be interpreted as {@link $INetworkToolAware}.
     */
    export type $INetworkToolAware_ = ((arg0: $UseOnContext) => boolean);
    export class $AEColor extends $Enum<$AEColor> implements $StringRepresentable {
        static fromDye(arg0: $DyeColor_): $AEColor;
        getVariantByTintIndex(arg0: number): number;
        getEnglishName(): string;
        static values(): $AEColor[];
        static valueOf(arg0: string): $AEColor;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        mediumVariant: number;
        englishName: string;
        static GRAY: $AEColor;
        translationKey: string;
        static BLUE: $AEColor;
        static TINTINDEX_BRIGHT: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $AEColor>;
        static VALID_COLORS: $List<$AEColor>;
        static PINK: $AEColor;
        whiteVariant: number;
        static BLACK: $AEColor;
        static TRANSPARENT: $AEColor;
        static BROWN: $AEColor;
        static ORANGE: $AEColor;
        static WHITE: $AEColor;
        static TINTINDEX_DARK: number;
        registryPrefix: string;
        static CODEC: $Codec<$AEColor>;
        contrastTextColor: number;
        static TINTINDEX_MEDIUM_BRIGHT: number;
        static PURPLE: $AEColor;
        static GREEN: $AEColor;
        static TINTINDEX_MEDIUM: number;
        static RED: $AEColor;
        dye: $DyeColor;
        static LIGHT_GRAY: $AEColor;
        static LIGHT_BLUE: $AEColor;
        static LIME: $AEColor;
        static MAGENTA: $AEColor;
        static YELLOW: $AEColor;
        static CYAN: $AEColor;
        blackVariant: number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $AEColor}.
     */
    export type $AEColor_ = "white" | "light_gray" | "gray" | "black" | "lime" | "yellow" | "orange" | "brown" | "red" | "pink" | "magenta" | "purple" | "blue" | "light_blue" | "cyan" | "green" | "fluix";
    export class $KeyTypeSelection {
        static forStack(arg0: $ItemStack_, arg1: $Predicate_<$AEKeyType>): $KeyTypeSelection;
        enabledPredicate(): $Predicate<$AEKeyType>;
        setEnabledSet(arg0: $List_<$AEKeyType_>): void;
        enabledSet(): $List<$AEKeyType>;
        writeToNBT(arg0: $CompoundTag_): void;
        readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        isEnabled(arg0: $AEKeyType_): boolean;
        enabled(): $Map<$AEKeyType, boolean>;
        setEnabled(arg0: $AEKeyType_, arg1: boolean): void;
        constructor(arg0: $KeyTypeSelection$Listener_, arg1: $Predicate_<$AEKeyType>);
        constructor(arg0: $Runnable_, arg1: $Predicate_<$AEKeyType>);
    }
    export class $KeyTypeSelectionHost {
    }
    export interface $KeyTypeSelectionHost {
        getKeyTypeSelection(): $KeyTypeSelection;
        get keyTypeSelection(): $KeyTypeSelection;
    }
    /**
     * Values that may be interpreted as {@link $KeyTypeSelectionHost}.
     */
    export type $KeyTypeSelectionHost_ = (() => $KeyTypeSelection);
    export class $IConfigurableObject {
    }
    export interface $IConfigurableObject {
        getConfigManager(): $IConfigManager;
        get configManager(): $IConfigManager;
    }
    /**
     * Values that may be interpreted as {@link $IConfigurableObject}.
     */
    export type $IConfigurableObject_ = (() => $IConfigManager);
    export class $AECableVariant extends $Enum<$AECableVariant> {
        static values(): $AECableVariant[];
        static min(arg0: $AECableVariant_, arg1: $AECableVariant_): $AECableVariant;
        static max(arg0: $AECableVariant_, arg1: $AECableVariant_): $AECableVariant;
        static valueOf(arg0: string): $AECableVariant;
        static GLASS: $AECableVariant;
        static COVERED: $AECableVariant;
        static NONE: $AECableVariant;
        static SMART: $AECableVariant;
    }
    /**
     * Values that may be interpreted as {@link $AECableVariant}.
     */
    export type $AECableVariant_ = "none" | "glass" | "covered" | "smart";
}
