import { $BiConsumer_ } from "@package/java/util/function";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $List, $Set } from "@package/java/util";
import { $Object, $Enum, $Class } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/ht/treechop/common/settings" {
    export class $ChoppingEntity {
    }
    export interface $ChoppingEntity {
        getChopData(): $SyncedChopData;
        setChopData(arg0: $SyncedChopData): $SyncedChopData;
    }
    export class $Setting {
        static decode(arg0: $FriendlyByteBuf): $Setting;
        encode(arg0: $FriendlyByteBuf): void;
        getValue(): $Object;
        getField(): $SettingsField;
        set(arg0: $Object): void;
        constructor(arg0: $SettingsField_, arg1: $Object);
        get value(): $Object;
        get field(): $SettingsField;
    }
    export class $SneakBehavior extends $Enum<$SneakBehavior> implements $StringRepresentable {
        shouldChangeChopBehavior(arg0: $Entity): boolean;
        shouldChangeFellBehavior(arg0: $Entity): boolean;
        getFancyText(): string;
        static values(): $SneakBehavior[];
        static valueOf(arg0: string): $SneakBehavior;
        cycle(): $SneakBehavior;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static maxNameLength: number;
        static INVERT_CHOPPING: $SneakBehavior;
        static NONE: $SneakBehavior;
        get fancyText(): string;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SneakBehavior}.
     */
    export type $SneakBehavior_ = "none" | "invert_chopping";
    export class $SyncedChopData {
        setSynced(): void;
        isSynced(): boolean;
        getSettings(): $ChopSettings;
        makeSaveData(): $CompoundTag;
        readSaveData(arg0: $CompoundTag_): $SyncedChopData;
        constructor(arg0: $ChopSettings);
        get settings(): $ChopSettings;
    }
    export class $SettingsField extends $Enum<$SettingsField> {
        getConfigKey(): string;
        getFancyName(): string;
        getValueName(arg0: $Object): string;
        getValues(): $Set<$Object>;
        static values(): $SettingsField[];
        static valueOf(arg0: string): $SettingsField;
        static decode(arg0: $FriendlyByteBuf): $Setting;
        encode(arg0: $FriendlyByteBuf, arg1: $Object): void;
        getDefaultValue(): $Object;
        static CHOPPING: $SettingsField;
        static SNEAK_BEHAVIOR: $SettingsField;
        static TREES_MUST_HAVE_LEAVES: $SettingsField;
        static VALUES: $SettingsField[];
        static CHOP_IN_CREATIVE_MODE: $SettingsField;
        get configKey(): string;
        get fancyName(): string;
        get defaultValue(): $Object;
    }
    /**
     * Values that may be interpreted as {@link $SettingsField}.
     */
    export type $SettingsField_ = "chopping" | "sneak_behavior" | "trees_must_have_leaves" | "chop_in_creative_mode";
    export class $ChopSettings {
        setChoppingEnabled(arg0: boolean): $ChopSettings;
        setTreesMustHaveLeaves(arg0: boolean): $ChopSettings;
        getChoppingEnabled(): boolean;
        getSneakBehavior(): $SneakBehavior;
        getTreesMustHaveLeaves(): boolean;
        getChopInCreativeMode(): boolean;
        setSneakBehavior(arg0: $SneakBehavior_): $ChopSettings;
        setChopInCreativeMode(arg0: boolean): $ChopSettings;
        getSetting(arg0: $SettingsField_): $Setting;
        get(arg0: $SettingsField_): $Object;
        get<T>(arg0: $SettingsField_, arg1: $Class<T>): T;
        set(arg0: $Setting): $ChopSettings;
        set(arg0: $Pair<$SettingsField_, $Object>): $ChopSettings;
        set(arg0: $SettingsField_, arg1: $Object): $ChopSettings;
        forEach(arg0: $BiConsumer_<$SettingsField, $Object>): void;
        getAll(): $List<$Setting>;
        copyFrom(arg0: $ChopSettings): $ChopSettings;
        constructor();
        constructor(arg0: $ChopSettings);
        get all(): $List<$Setting>;
    }
}
