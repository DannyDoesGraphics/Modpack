import { $ConfigGroup, $NameMap } from "@package/dev/ftb/mods/ftblibrary/config";
import { $Supplier_, $BooleanSupplier_ } from "@package/java/util/function";
import { $Path_ } from "@package/java/nio/file";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $List, $List_ } from "@package/java/util";
import { $Pattern } from "@package/java/util/regex";
import { $Comparable, $Number } from "@package/java/lang";
import { $SNBTCompoundTag } from "@package/dev/ftb/mods/ftblibrary/snbt";

declare module "@package/dev/ftb/mods/ftblibrary/snbt/config" {
    export class $EnumValue<T> extends $BaseValue<T> {
        parent: $SNBTConfig;
        key: string;
    }
    export class $DoubleValue extends $NumberValue<number> {
        set(v: number): void;
        range(max: number): $NumberValue<number>;
        parent: $SNBTConfig;
        key: string;
    }
    export class $SNBTConfig extends $BaseValue<$List<$BaseValue<never>>> {
        addBoolean(key: string, def: boolean): $BooleanValue;
        addIntArray(key: string, def: number[]): $IntArrayValue;
        addEnum<T>(key: string, nameMap: $NameMap<T>): $EnumValue<T>;
        addEnum<T>(key: string, nameMap: $NameMap<T>, def: T): $EnumValue<T>;
        addInt(key: string, def: number): $IntValue;
        addInt(key: string, def: number, min: number, max: number): $IntValue;
        addLong(key: string, def: number, min: number, max: number): $LongValue;
        addLong(key: string, def: number): $LongValue;
        addDouble(key: string, def: number): $DoubleValue;
        addDouble(key: string, def: number, min: number, max: number): $DoubleValue;
        addString(key: string, def: string): $StringValue;
        addStringList(key: string, def: $List_<string>): $StringListValue;
        addGroup(key: string): $SNBTConfig;
        addGroup(key: string, displayOrder: number): $SNBTConfig;
        load(path: $Path_): void;
        load(path: $Path_, defaultPath: $Path_, comment: $Supplier_<string[]>): void;
        add<T extends $BaseValue<never>>(value: T): T;
        write(buf: $FriendlyByteBuf): void;
        read(buf: $FriendlyByteBuf): void;
        save(path: $Path_): void;
        static create(name: string): $SNBTConfig;
        saveNow(path: $Path_): void;
        parent: $SNBTConfig;
        key: string;
    }
    export class $NumberValue<T extends $Number> extends $BaseValue<T> {
        fader<E extends $BaseValue<T>>(): E;
        range<E extends $BaseValue<T>>(min: T, max: T): E;
        parent: $SNBTConfig;
        key: string;
    }
    export class $LongValue extends $NumberValue<number> {
        set(v: number): void;
        range(max: number): $NumberValue<number>;
        parent: $SNBTConfig;
        key: string;
    }
    export class $StringListValue extends $BaseValue<$List<string>> {
        set(v: $List_<string>): void;
        parent: $SNBTConfig;
        key: string;
    }
    export class $StringValue extends $BaseValue<string> {
        pattern(p: $Pattern): $StringValue;
        set(v: string): void;
        parent: $SNBTConfig;
        key: string;
    }
    export class $IntArrayValue extends $BaseValue<number[]> {
        parent: $SNBTConfig;
        key: string;
    }
    export class $BaseValue<T> implements $Comparable<$BaseValue<T>> {
        withDisplayOrder(order: number): $BaseValue<$BaseValue<T>>;
        createClientConfig(group: $ConfigGroup): void;
        excluded<E extends $BaseValue<T>>(): E;
        get(): $BaseValue<T>;
        compareTo(o: $BaseValue<$BaseValue<T>>): number;
        getKey(): string;
        enabled<E extends $BaseValue<T>>(e: $BooleanSupplier_): E;
        set(v: $BaseValue<T>): void;
        write(arg0: $SNBTCompoundTag): void;
        read(arg0: $SNBTCompoundTag): void;
        comment<E extends $BaseValue<T>>(...s: string[]): E;
        parent: $SNBTConfig;
        key: string;
    }
    export class $BooleanValue extends $BaseValue<boolean> {
        toggle(): void;
        parent: $SNBTConfig;
        key: string;
    }
    export class $IntValue extends $NumberValue<number> {
        set(v: number): void;
        range(max: number): $NumberValue<number>;
        parent: $SNBTConfig;
        key: string;
    }
}
