import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $SchematicUploadItemSource, $SchematicUploadItemSource_ } from "@package/com/cak/pattern_schematics/foundation";

declare module "@package/com/cak/pattern_schematics/foundation/mixin_accessors" {
    export class $SchematicTableMenuMixinAccessor {
    }
    export interface $SchematicTableMenuMixinAccessor {
        setInputSlot(arg0: $Slot): void;
        set inputSlot(value: $Slot);
    }
    /**
     * Values that may be interpreted as {@link $SchematicTableMenuMixinAccessor}.
     */
    export type $SchematicTableMenuMixinAccessor_ = ((arg0: $Slot) => void);
    export class $SchematicTableBlockEntityMixinAccessor {
    }
    export interface $SchematicTableBlockEntityMixinAccessor {
        getSchematicSource(): $SchematicUploadItemSource;
        get schematicSource(): $SchematicUploadItemSource;
    }
    /**
     * Values that may be interpreted as {@link $SchematicTableBlockEntityMixinAccessor}.
     */
    export type $SchematicTableBlockEntityMixinAccessor_ = (() => $SchematicUploadItemSource_);
    export class $MovementContextAccessor {
    }
    export interface $MovementContextAccessor {
        pattern_schematics$setFilter(arg0: $ItemStack_): void;
    }
    /**
     * Values that may be interpreted as {@link $MovementContextAccessor}.
     */
    export type $MovementContextAccessor_ = ((arg0: $ItemStack) => void);
}
