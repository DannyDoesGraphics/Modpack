import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $ItemEntry } from "@package/com/tterrag/registrate/util/entry";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $List } from "@package/java/util";
import { $Enum } from "@package/java/lang";
export * as mirror from "@package/com/cak/pattern_schematics/foundation/mirror";
export * as mixin_accessors from "@package/com/cak/pattern_schematics/foundation/mixin_accessors";

declare module "@package/com/cak/pattern_schematics/foundation" {
    export class $SchematicUploadItemSource$SchematicItemFactory {
    }
    export interface $SchematicUploadItemSource$SchematicItemFactory {
        create(arg0: $Level_, arg1: string, arg2: string): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $SchematicUploadItemSource$SchematicItemFactory}.
     */
    export type $SchematicUploadItemSource$SchematicItemFactory_ = ((arg0: $Level, arg1: string, arg2: string) => $ItemStack_);
    export class $SchematicUploadItemSource extends $Enum<$SchematicUploadItemSource> {
        static tryFromItemStack(arg0: $ItemStack_): $SchematicUploadItemSource;
        static tryFromInt(arg0: number): $SchematicUploadItemSource;
        getNbtValue(): number;
        getSchematicSourceItems(): $List<$ItemEntry<$Item>>;
        static values(): $SchematicUploadItemSource[];
        static valueOf(arg0: string): $SchematicUploadItemSource;
        getFactory(): $SchematicUploadItemSource$SchematicItemFactory;
        static PATTERN: $SchematicUploadItemSource;
        static DEFAULT: $SchematicUploadItemSource;
        get nbtValue(): number;
        get schematicSourceItems(): $List<$ItemEntry<$Item>>;
        get factory(): $SchematicUploadItemSource$SchematicItemFactory;
    }
    /**
     * Values that may be interpreted as {@link $SchematicUploadItemSource}.
     */
    export type $SchematicUploadItemSource_ = "default" | "pattern";
}
